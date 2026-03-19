import type { Message, AttachedImage } from '../types'
import { getImageBlob } from './imageStorage'

export interface ChatCompletionOptions {
  apiKey: string
  baseUrl: string
  model: string
  messages: Message[]
  systemPrompt?: string
  temperature?: number
  maxTokens?: number
  stream?: boolean
  onChunk?: (text: string, reasoning?: string, images?: string[]) => void
  onDone?: () => void
  onError?: (error: Error) => void
}

/**
 * 将 Blob 转换为 base64
 */
function blobToBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => {
      const result = reader.result as string
      const base64 = result.split(',')[1]
      resolve(base64 || '')
    }
    reader.onerror = reject
    reader.readAsDataURL(blob)
  })
}

async function buildOpenRouterMessages(messages: Message[], systemPrompt?: string) {
  const result: any[] = []

  if (systemPrompt) {
    result.push({ role: 'system', content: systemPrompt })
  }

  for (const msg of messages) {
    if (msg.role === 'assistant') {
      result.push({ role: 'assistant', content: msg.content })
      continue
    }

    // user message: may contain images
    if (msg.images && msg.images.length > 0) {
      const contentParts: any[] = []
      if (msg.content) {
        contentParts.push({ type: 'text', text: msg.content })
      }

      // 处理每张图片
      for (const img of msg.images) {
        let base64 = img.base64

        // 如果 base64 为空，尝试从 IndexedDB 读取
        if (!base64) {
          try {
            const blob = await getImageBlob(img.id)
            if (blob) {
              base64 = await blobToBase64(blob)
            }
          } catch (e) {
            console.error(`Failed to load image ${img.id} from IndexedDB:`, e)
            // 使用空 base64 会报错，但继续处理其他图片
          }
        }

        // 添加到请求（即使 base64 为空也要添加，让 API 返回错误信息）
        contentParts.push({
          type: 'image_url',
          image_url: { url: `data:${img.mimeType};base64,${base64 || ''}` }
        })
      }

      result.push({ role: 'user', content: contentParts })
    } else {
      result.push({ role: 'user', content: msg.content })
    }
  }

  return result
}

export async function sendChatMessage(options: ChatCompletionOptions): Promise<string> {
  const {
    apiKey, baseUrl, model, messages, systemPrompt,
    temperature = 0.7, maxTokens = 4096, stream = true,
    onChunk, onDone, onError
  } = options

  const builtMessages = await buildOpenRouterMessages(messages, systemPrompt)

  const body = {
    model,
    messages: builtMessages,
    temperature,
    max_tokens: maxTokens,
    stream
  }

  try {
    const response = await fetch(`${baseUrl}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
        'HTTP-Referer': window.location.origin,
        'X-Title': 'MultiAI Chat'
      },
      body: JSON.stringify(body)
    })

    if (!response.ok) {
      const errText = await response.text()
      let errMsg = `请求失败 (${response.status})`
      try {
        const errJson = JSON.parse(errText)
        errMsg = errJson.error?.message || errMsg
      } catch { /* ignore */ }
      throw new Error(errMsg)
    }

    if (!stream) {
      const data = await response.json()
      const content = data.choices?.[0]?.message?.content || ''
      
      // 提取图片 URL（如果有）
      let imageUrls: string[] = []
      const message = data.choices?.[0]?.message
      if (message?.image_url) {
        // 单个图片
        if (typeof message.image_url === 'string') {
          imageUrls = [message.image_url]
        } else if (message.image_url?.url) {
          imageUrls = [message.image_url.url]
        }
      } else if (Array.isArray(message?.content)) {
        // content 是数组格式
        imageUrls = message.content
          .filter((item: any) => item.type === 'image_url')
          .map((item: any) => item.image_url?.url || item.image_url)
          .filter(Boolean)
      }
      
      onChunk?.(content, undefined, imageUrls.length > 0 ? imageUrls : undefined)
      onDone?.()
      return content
    }

    // Streaming
    const reader = response.body?.getReader()
    if (!reader) throw new Error('无法获取响应流')

    const decoder = new TextDecoder()
    let fullContent = ''
    let buffer = ''
    let imageUrls: string[] = []

    while (true) {
      const { done, value } = await reader.read()
      if (done) break

      buffer += decoder.decode(value, { stream: true })
      const lines = buffer.split('\n')
      buffer = lines.pop() || ''

      for (const line of lines) {
        const trimmed = line.trim()
        if (!trimmed || trimmed === 'data: [DONE]') continue
        if (!trimmed.startsWith('data: ')) continue

        try {
          const json = JSON.parse(trimmed.slice(6))
          const delta = json.choices?.[0]?.delta
          
          if (delta?.content) {
            fullContent += delta.content
            onChunk?.(delta.content, undefined, undefined)
          }
          
          // reasoning tokens (DeepSeek R1 etc.)
          if (delta?.reasoning_content) {
            onChunk?.('', delta.reasoning_content, undefined)
          }
          
          // 提取图片（最关键！Gemini 使用 delta.images 数组）
          if (delta?.images && Array.isArray(delta.images)) {
            delta.images.forEach((imgItem: any) => {
              if (imgItem.type === 'image_url' && imgItem.image_url?.url) {
                // base64 图片 URL 或在线 URL
                imageUrls.push(imgItem.image_url.url)
              }
            })
            // 立即返回收集到的图片
            if (imageUrls.length > 0) {
              onChunk?.('', undefined, imageUrls)
              imageUrls = []  // 清除已发送的 URL
            }
          }
          
          // 旧格式：image_url 直接在 delta 下（某些模型）
          if (delta?.image_url) {
            if (typeof delta.image_url === 'string') {
              imageUrls.push(delta.image_url)
            } else if (delta.image_url?.url) {
              imageUrls.push(delta.image_url.url)
            }
            if (imageUrls.length > 0) {
              onChunk?.('', undefined, imageUrls)
              imageUrls = []
            }
          }
          
          // 旧格式：content 是数组（某些模型）
          if (Array.isArray(delta?.content)) {
            const urls = delta.content
              .filter((item: any) => item.type === 'image_url')
              .map((item: any) => item.image_url?.url || item.image_url)
              .filter(Boolean)
            if (urls.length > 0) {
              imageUrls.push(...urls)
              onChunk?.('', undefined, imageUrls)
              imageUrls = []
            }
          }
        } catch { /* ignore malformed */ }
      }
    }

    onDone?.()
    return fullContent

  } catch (err) {
    const error = err instanceof Error ? err : new Error(String(err))
    onError?.(error)
    throw error
  }
}

export async function fetchAvailableModels(apiKey: string, baseUrl: string): Promise<any[]> {
  try {
    const response = await fetch(`${baseUrl}/models`, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'HTTP-Referer': window.location.origin
      }
    })
    if (!response.ok) return []
    const data = await response.json()
    return data.data || []
  } catch {
    return []
  }
}
