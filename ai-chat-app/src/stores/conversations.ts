import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Conversation, Message, AttachedImage, GeneratedImage, AttachedFile, GeneratedFile } from '../types'
import { nanoid } from '../utils/nanoid'
import { getImageUrl } from '../services/imageStorage'

const STORAGE_KEY = 'ai-chat-conversations'

// 存储时的轻量级消息接口（不包含大的 base64 数据）
interface StoredMessage {
  id: string
  role: 'user' | 'assistant' | 'system'
  content: string
  images?: StoredAttachedImage[]        // 用户上传的图片（不包含 base64）
  files?: StoredAttachedFile[]          // 用户上传的文件
  generatedImages?: GeneratedImage[]     // AI 生成的图片（URL 通常较小）
  generatedFiles?: GeneratedFile[]       // AI 生成的文件（URL 通常较小）
  timestamp: string
  model?: string
  reasoning?: string
  error?: string
}

interface StoredAttachedImage {
  id: string
  name: string
  url: string                          // 只保存 URL，不保存 base64
  mimeType: string
  size: number
}

interface StoredAttachedFile {
  id: string
  name: string
  content: string                       // 文本文件保存内容，二进制文件可能需要优化
  mimeType: string
  size: number
}

export const useConversationStore = defineStore('conversations', () => {
  const conversations = ref<Conversation[]>([])
  const currentConversationId = ref<string | null>(null)

  // 异步加载对话
  loadConversations().then(loaded => {
    conversations.value = loaded
  })

  // 检查 localStorage 可用空间
  function checkStorageSpace(): { used: number, available: number } {
    try {
      // 粗略估计：localStorage 限制通常为 5-10MB
      const used = new Blob([localStorage.getItem(STORAGE_KEY) || '']).size
      return { used, available: 5 * 1024 * 1024 - used } // 假设 5MB 限制
    } catch {
      return { used: 0, available: 0 }
    }
  }

  async function loadConversations(): Promise<Conversation[]> {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        const parsed = JSON.parse(saved)

        // 并行加载所有图片的 URL
        const conversations = await Promise.all(
          parsed.map(async (c: any): Promise<Conversation> => {
            const messages = await Promise.all(
              c.messages.map(async (m: StoredMessage): Promise<Message> => {
                const msg: Message = {
                  id: m.id,
                  role: m.role,
                  content: m.content,
                  timestamp: new Date(m.timestamp),
                  model: m.model,
                  reasoning: m.reasoning,
                  error: m.error
                }

                // 从 IndexedDB 恢复用户上传的图片 URL
                if (m.images && m.images.length > 0) {
                  msg.images = await Promise.all(
                    m.images.map(async (img: StoredAttachedImage): Promise<AttachedImage> => {
                      const url = await getImageUrl(img.id)
                      return {
                        id: img.id,
                        name: img.name,
                        url: url || '', // 如果找不到图片，显示空字符串
                        base64: '',
                        mimeType: img.mimeType,
                        size: img.size
                      }
                    })
                  )
                }

                // 恢复文件
                if (m.files && m.files.length > 0) {
                  msg.files = m.files
                }

                // 恢复 AI 生成的图片（如果 ID 在 IndexedDB 中）
                if (m.generatedImages && m.generatedImages.length > 0) {
                  msg.generatedImages = await Promise.all(
                    m.generatedImages.map(async (img: GeneratedImage): Promise<GeneratedImage> => {
                      const url = await getImageUrl(img.id)
                      return {
                        ...img,
                        url: url || img.url // 如果找不到，使用原来的 URL（可能是网络链接）
                      }
                    })
                  )
                }

                // 恢复 AI 生成的文件
                if (m.generatedFiles && m.generatedFiles.length > 0) {
                  msg.generatedFiles = m.generatedFiles
                }

                return msg
              })
            )

            return {
              ...c,
              createdAt: new Date(c.createdAt),
              updatedAt: new Date(c.updatedAt),
              // 兼容旧数据：没有该字段时默认为 true
              sendContextEnabled: c.sendContextEnabled !== false,
              messages
            }
          })
        )

        return conversations
      }
    } catch (e) {
      console.warn('Failed to load conversations:', e)
      // 如果读取失败，清除损坏的数据
      try {
        localStorage.removeItem(STORAGE_KEY)
      } catch {}
    }
    return []
  }

  function saveConversations() {
    try {
      // 将数据转换为轻量级格式（不包含图片 base64）
      const toStore = conversations.value.map(conv => ({
        ...conv,
        createdAt: conv.createdAt.toISOString(),
        updatedAt: conv.updatedAt.toISOString(),
        messages: conv.messages.map(msg => {
          const storedMsg: StoredMessage = {
            id: msg.id,
            role: msg.role,
            content: msg.content,
            timestamp: msg.timestamp.toISOString(),
            model: msg.model,
            reasoning: msg.reasoning,
            error: msg.error
          }

          // 保存用户上传的图片（不包含 base64）
          if (msg.images && msg.images.length > 0) {
            storedMsg.images = msg.images.map(img => ({
              id: img.id,
              name: img.name,
              url: img.url,
              mimeType: img.mimeType,
              size: img.size
            }))
          }

          // 保存用户上传的文件
          if (msg.files && msg.files.length > 0) {
            storedMsg.files = msg.files
          }

          // 保存 AI 生成的图片（通常 URL 较小）
          if (msg.generatedImages && msg.generatedImages.length > 0) {
            storedMsg.generatedImages = msg.generatedImages
          }

          // 保存 AI 生成的文件
          if (msg.generatedFiles && msg.generatedFiles.length > 0) {
            storedMsg.generatedFiles = msg.generatedFiles
          }

          return storedMsg
        })
      }))

      const jsonString = JSON.stringify(toStore)
      const size = new Blob([jsonString]).size

      // 检查是否超过 4.5MB（保留安全边际）
      if (size > 4.5 * 1024 * 1024) {
        console.warn('Storage quota approaching limit, attempting cleanup...')
        cleanupOldConversations()
        // 再次尝试保存
        localStorage.setItem(STORAGE_KEY, JSON.stringify(toStore))
      } else {
        localStorage.setItem(STORAGE_KEY, jsonString)
      }
    } catch (error: any) {
      if (error.name === 'QuotaExceededError') {
        console.error('Storage quota exceeded, cleaning up old conversations...')
        cleanupOldConversations()
        // 再次尝试保存
        try {
          const toStore = conversations.value.map(conv => ({
            ...conv,
            createdAt: conv.createdAt.toISOString(),
            updatedAt: conv.updatedAt.toISOString(),
            messages: conv.messages.map(msg => {
              const storedMsg: StoredMessage = {
                id: msg.id,
                role: msg.role,
                content: msg.content,
                timestamp: msg.timestamp.toISOString(),
                model: msg.model,
                reasoning: msg.reasoning,
                error: msg.error
              }

              if (msg.images && msg.images.length > 0) {
                storedMsg.images = msg.images.map(img => ({
                  id: img.id,
                  name: img.name,
                  url: img.url,
                  mimeType: img.mimeType,
                  size: img.size
                }))
              }

              if (msg.files && msg.files.length > 0) {
                storedMsg.files = msg.files
              }

              if (msg.generatedImages && msg.generatedImages.length > 0) {
                storedMsg.generatedImages = msg.generatedImages
              }

              if (msg.generatedFiles && msg.generatedFiles.length > 0) {
                storedMsg.generatedFiles = msg.generatedFiles
              }

              return storedMsg
            })
          }))
          localStorage.setItem(STORAGE_KEY, JSON.stringify(toStore))
        } catch (retryError) {
          console.error('Failed to save even after cleanup:', retryError)
          // 显示用户友好的提示
          alert('存储空间已满，部分对话可能无法保存。建议删除一些旧对话。')
        }
      } else {
        console.error('Failed to save conversations:', error)
      }
    }
  }

  // 清理旧对话以释放空间
  function cleanupOldConversations() {
    if (conversations.value.length <= 1) return

    // 按更新时间排序，保留最新的 10 个
    const sorted = [...conversations.value].sort((a, b) =>
      b.updatedAt.getTime() - a.updatedAt.getTime()
    )

    const toKeep = sorted.slice(0, 10)
    const toDelete = sorted.slice(10)

    console.log(`Cleaning up ${toDelete.length} old conversations`)

    // 只保留最新的 10 个
    conversations.value = toKeep

    // 如果当前对话被删除了，切换到第一个
    const currentStillExists = toKeep.some(c => c.id === currentConversationId.value)
    if (!currentStillExists && toKeep.length > 0) {
      currentConversationId.value = toKeep[0]?.id || ''
    }
  }

  const currentConversation = computed(() => {
    return conversations.value.find(c => c.id === currentConversationId.value) || null
  })

  function createConversation(model: string, systemPrompt?: string): Conversation {
    const conversation: Conversation = {
      id: nanoid(),
      title: '新对话',
      messages: [],
      createdAt: new Date(),
      updatedAt: new Date(),
      model,
      systemPrompt,
      sendContextEnabled: true   // 新会话默认发送上下文
    }
    conversations.value.unshift(conversation)
    currentConversationId.value = conversation.id
    saveConversations()
    return conversation
  }

  function selectConversation(id: string) {
    currentConversationId.value = id
  }

  function deleteConversation(id: string) {
    const index = conversations.value.findIndex(c => c.id === id)
    if (index !== -1) {
      conversations.value.splice(index, 1)
      if (currentConversationId.value === id) {
        currentConversationId.value = conversations.value[0]?.id || null
      }
      saveConversations()
    }
  }

  function addMessage(conversationId: string, message: Message) {
    const conversation = conversations.value.find(c => c.id === conversationId)
    if (conversation) {
      conversation.messages.push(message)
      conversation.updatedAt = new Date()
      // Auto-generate title from first user message
      if (conversation.messages.filter(m => m.role === 'user').length === 1) {
        const firstMsg = conversation.messages.find(m => m.role === 'user')
        if (firstMsg) {
          conversation.title = firstMsg.content.slice(0, 40) || '新对话'
        }
      }
      saveConversations()
    }
  }

  function updateMessage(conversationId: string, messageId: string, updates: Partial<Message>) {
    const conversation = conversations.value.find(c => c.id === conversationId)
    if (conversation) {
      const msgIndex = conversation.messages.findIndex(m => m.id === messageId)
      if (msgIndex !== -1) {
        const updatedMsg = { ...conversation.messages[msgIndex], ...updates }
        // 确保 id 字段存在
        if (!updatedMsg.id) {
          updatedMsg.id = messageId
        }
        conversation.messages[msgIndex] = updatedMsg as Message
        saveConversations()
      }
    }
  }

  function clearConversation(id: string) {
    const conversation = conversations.value.find(c => c.id === id)
    if (conversation) {
      conversation.messages = []
      conversation.updatedAt = new Date()
      saveConversations()
    }
  }

  function updateConversationModel(id: string, model: string) {
    const conversation = conversations.value.find(c => c.id === id)
    if (conversation) {
      conversation.model = model
      saveConversations()
    }
  }

  function updateConversationContext(id: string, enabled: boolean) {
    const conversation = conversations.value.find(c => c.id === id)
    if (conversation) {
      conversation.sendContextEnabled = enabled
      saveConversations()
    }
  }

  return {
    conversations,
    currentConversationId,
    currentConversation,
    createConversation,
    selectConversation,
    deleteConversation,
    addMessage,
    updateMessage,
    clearConversation,
    updateConversationModel,
    updateConversationContext
  }
})
