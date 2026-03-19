export interface Message {
  id: string
  role: 'user' | 'assistant' | 'system'
  content: string
  images?: AttachedImage[]                    // 用户上传的图片
  files?: AttachedFile[]                      // 用户上传的文件
  generatedImages?: GeneratedImage[]          // AI 生成的图片
  generatedFiles?: GeneratedFile[]            // AI 生成的文件
  timestamp: Date
  model?: string
  isStreaming?: boolean
  reasoning?: string
  error?: string
}

export interface AttachedImage {
  id: string
  name: string
  url: string
  base64: string
  mimeType: string
  size: number
}

export interface AttachedFile {
  id: string
  name: string
  content: string
  mimeType: string
  size: number
}

export interface GeneratedImage {
  id: string
  url: string
  name?: string
  format?: string
  size?: number
  generatedAt: Date
  // 使用特殊前缀标记图片存储位置
  // url.startsWith('indexeddb:') - 图片存储在 IndexedDB 中
  // url.startsWith('data:') - 图片是 base64 格式（不推荐，仅用于兼容）
  // url.startsWith('http') - 图片是网络 URL
}

export interface GeneratedFile {
  id: string
  url: string
  name: string
  format?: string
  size?: number
  generatedAt: Date
}

export interface Conversation {
  id: string
  title: string
  messages: Message[]
  createdAt: Date
  updatedAt: Date
  model: string
  systemPrompt?: string
  sendContextEnabled: boolean   // 是否发送上下文（每个会话独立配置）
}

export interface AppSettings {
  apiKey: string
  baseUrl: string
  selectedModel: string
  systemPrompt: string
  temperature: number
  maxTokens: number
  streamingEnabled: boolean
  theme: 'light' | 'dark' | 'auto'
}

export interface ChatRequest {
  messages: Message[]
  model: string
  temperature?: number
  maxTokens?: number
  stream?: boolean
  systemPrompt?: string
}

export interface OpenRouterModel {
  id: string
  name: string
  description: string
  context_length: number
  pricing: {
    prompt: string
    completion: string
  }
  top_provider: {
    max_completion_tokens: number | null
  }
  capabilities: {
    vision: boolean
    tools: boolean
  }
  category: string
  type?: 'text' | 'image' | 'video' | 'multimodal'
  featured?: boolean
  isFree?: boolean
}
