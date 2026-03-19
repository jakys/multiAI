<template>
  <div class="chat-view" @dragover.prevent="onDragOver" @dragleave.prevent="onDragLeave" @drop.prevent="onDrop">
    <!-- Drag & Drop Overlay -->
    <div v-if="isDragging" class="drag-overlay">
      <div class="drag-content">
        <svg class="drag-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3-3m0 0l3 3m-3-3v6"/>
        </svg>
        <p class="drag-text">放开以添加文件</p>
      </div>
    </div>

    <!-- Top Bar -->
    <div class="topbar">
      <div class="topbar-left">
        <button class="icon-btn" @click="$emit('toggle-sidebar')" title="切换侧边栏">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>
        <span class="conv-title">{{ conversation?.title || '新对话' }}</span>
      </div>
      <div class="topbar-center">
        <ModelSelector v-model="localModel" @update:model-value="onModelChange" />
      </div>
      <div class="topbar-right">
        <button class="icon-btn" @click="clearChat" title="清空对话" v-if="conversation?.messages.length">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 6h18"/><path d="M19 6l-1 14H6L5 6"/><path d="M8 6V4h8v2"/>
          </svg>
        </button>
        <button class="icon-btn" @click="$emit('open-settings')" title="设置">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="3"/>
            <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Messages Area -->
    <div class="messages-area" ref="messagesRef">
      <!-- Welcome Screen -->
      <div v-if="!conversation || conversation.messages.length === 0" class="welcome">
        <div class="welcome-icon">✦</div>
        <h2 class="welcome-title">有什么可以帮你？</h2>
        <p class="welcome-sub">选择模型，发送消息开始对话</p>
        <div class="suggestions">
          <button
            v-for="s in suggestions"
            :key="s"
            class="suggestion-btn"
            @click="useSuggestion(s)"
          >{{ s }}</button>
        </div>
      </div>

      <!-- Message List -->
      <div v-else class="messages-list">
        <MessageItem
          v-for="msg in conversation.messages"
          :key="msg.id"
          :msg="msg"
        />
        <div ref="bottomRef" />
      </div>
    </div>

    <!-- Input Area -->
    <div class="input-area">
      <!-- Image Previews -->
      <div v-if="attachedImages.length > 0" class="image-previews">
        <div v-for="img in attachedImages" :key="img.id" class="preview-chip">
          <img :src="img.url" class="chip-img" />
          <span class="chip-name">{{ img.name }}</span>
          <button class="chip-remove" @click="removeImage(img.id)">✕</button>
        </div>
      </div>

      <!-- Input Box -->
      <div class="input-box" :class="{ focused: inputFocused, disabled: isLoading }">
        <button class="attach-btn" @click="triggerFileInput" title="上传图片" :disabled="isLoading">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>
            <polyline points="21 15 16 10 5 21"/>
          </svg>
        </button>

        <textarea
          ref="textareaRef"
          v-model="inputText"
          class="input-textarea"
          :placeholder="isLoading ? '等待响应...' : '输入消息... (Enter 发送，Shift+Enter 换行)'"
          :disabled="isLoading"
          rows="1"
          @keydown="handleKeydown"
          @focus="inputFocused = true"
          @blur="inputFocused = false"
          @input="autoResize"
        />

        <button
          v-if="isLoading"
          class="send-btn stop-btn"
          @click="stopGeneration"
          title="停止生成"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <rect x="6" y="6" width="12" height="12" rx="2"/>
          </svg>
        </button>
        <button
          v-else
          class="send-btn"
          :disabled="!canSend"
          @click="sendMessage"
          title="发送"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
          </svg>
        </button>
      </div>

      <div class="input-footer">
        <span class="footer-hint">Enter 发送 · Shift+Enter 换行</span>
        <div class="footer-right">
          <!-- 发送上下文开关 -->
          <label class="context-toggle" :title="sendContextEnabled ? '已开启：发送完整对话上下文' : '已关闭：仅发送本条消息'">
            <span class="context-label">携带上下文</span>
            <button
              class="toggle-btn"
              :class="{ active: sendContextEnabled }"
              @click="sendContextEnabled = !sendContextEnabled"
              role="switch"
              :aria-checked="sendContextEnabled"
            >
              <span class="toggle-thumb" />
            </button>
          </label>
          <span class="token-hint" v-if="currentModel">
            上下文 {{ formatCtx(currentModel.context_length) }}
            <span v-if="currentModel.capabilities.vision"> · 🖼 Vision</span>
          </span>
        </div>
      </div>
    </div>

    <!-- Hidden file input -->
    <input
      ref="fileInputRef"
      type="file"
      accept="image/*"
      multiple
      style="display:none"
      @change="onFileSelect"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick } from 'vue'
import MessageItem from '../components/MessageItem.vue'
import ModelSelector from '../components/ModelSelector.vue'
import { useConversationStore } from '../stores/conversations'
import { useSettingsStore } from '../stores/settings'
import { sendChatMessage } from '../services/openrouter'
import { getModelById } from '../data/models'
import { nanoid } from '../utils/nanoid'
import { saveImage, saveBase64Image } from '../services/imageStorage'
import type { AttachedImage, Message } from '../types'

const emit = defineEmits<{
  'toggle-sidebar': []
  'open-settings': []
}>()

const conversationStore = useConversationStore()
const settingsStore = useSettingsStore()

const conversation = computed(() => conversationStore.currentConversation)
const messagesRef = ref<HTMLDivElement | null>(null)
const bottomRef = ref<HTMLDivElement | null>(null)
const textareaRef = ref<HTMLTextAreaElement | null>(null)
const fileInputRef = ref<HTMLInputElement | null>(null)

const inputText = ref('')
const inputFocused = ref(false)
const attachedImages = ref<AttachedImage[]>([])
const isLoading = ref(false)
const isDragging = ref(false)

// 是否发送上下文（跟随当前会话配置，新会话默认 true）
const sendContextEnabled = ref(true)

const localModel = ref(settingsStore.settings.selectedModel)
const currentModel = computed(() => getModelById(localModel.value))

const canSend = computed(() =>
  (inputText.value.trim() || attachedImages.value.length > 0) && !isLoading.value
)

const suggestions = [
  '解释一下量子计算的基本原理',
  '帮我写一个 Python 排序算法',
  '如何提高工作效率和专注力？',
  '给我讲个有趣的数学谜题'
]

function onModelChange(model: string) {
  settingsStore.updateSettings({ selectedModel: model })
  if (conversation.value) {
    conversationStore.updateConversationModel(conversation.value.id, model)
  }
}

function formatCtx(len: number) {
  if (len >= 1000000) return `${(len / 1000000).toFixed(1)}M`
  if (len >= 1000) return `${Math.round(len / 1000)}K`
  return String(len)
}

function autoResize() {
  const el = textareaRef.value
  if (!el) return
  el.style.height = 'auto'
  el.style.height = Math.min(el.scrollHeight, 200) + 'px'
}

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault()
    if (canSend.value) sendMessage()
  }
}

function useSuggestion(s: string) {
  inputText.value = s
  nextTick(() => textareaRef.value?.focus())
}

function triggerFileInput() {
  fileInputRef.value?.click()
}

async function onFileSelect(e: Event) {
  const files = (e.target as HTMLInputElement).files
  if (!files) return
  for (const file of Array.from(files)) {
    if (!file.type.startsWith('image/')) continue

    const imgId = nanoid()
    const url = URL.createObjectURL(file)

    // 保存图片到 IndexedDB
    await saveImage(imgId, file.name, file, file.type)

    attachedImages.value.push({
      id: imgId,
      name: file.name,
      url,
      base64: '', // 不需要 base64，从 IndexedDB 读取
      mimeType: file.type,
      size: file.size
    })
  }
  // reset input
  if (fileInputRef.value) fileInputRef.value.value = ''
}

function removeImage(id: string) {
  attachedImages.value = attachedImages.value.filter(i => i.id !== id)
}

// 拖拽处理函数
function onDragOver(e: DragEvent) {
  e.preventDefault()
  e.dataTransfer!.dropEffect = 'copy'
  isDragging.value = true
}

function onDragLeave(e: DragEvent) {
  // 只在离开主容器时隐藏
  if (e.target === e.currentTarget) {
    isDragging.value = false
  }
}

async function onDrop(e: DragEvent) {
  e.preventDefault()
  isDragging.value = false

  const files = e.dataTransfer?.files
  if (!files) return

  // 处理拖拽的文件
  for (const file of Array.from(files)) {
    // 只处理图片文件
    if (file.type.startsWith('image/')) {
      try {
        const imgId = nanoid()
        const url = URL.createObjectURL(file)

        // 保存图片到 IndexedDB
        await saveImage(imgId, file.name, file, file.type)

        attachedImages.value.push({
          id: imgId,
          name: file.name,
          url,
          base64: '', // 不需要 base64，从 IndexedDB 读取
          mimeType: file.type,
          size: file.size
        })
      } catch (err) {
        console.error('Failed to process dropped image:', err)
      }
    }
  }
}

async function sendMessage() {
  if (!canSend.value) return

  const text = inputText.value.trim()
  const images = [...attachedImages.value]

  // Ensure conversation exists
  let convId = conversationStore.currentConversationId
  if (!convId) {
    const conv = conversationStore.createConversation(localModel.value, settingsStore.settings.systemPrompt)
    convId = conv.id
  }

  // Add user message
  const userMsg: Message = {
    id: nanoid(),
    role: 'user',
    content: text,
    images: images.length ? images : undefined,
    timestamp: new Date(),
    model: localModel.value
  }
  conversationStore.addMessage(convId, userMsg)

  // Clear input
  inputText.value = ''
  attachedImages.value = []
  await nextTick()
  if (textareaRef.value) {
    textareaRef.value.style.height = 'auto'
  }

  // Add placeholder AI message
  const aiMsgId = nanoid()
  const aiMsg: Message = {
    id: aiMsgId,
    role: 'assistant',
    content: '',
    timestamp: new Date(),
    model: localModel.value,
    isStreaming: true
  }
  conversationStore.addMessage(convId, aiMsg)

  isLoading.value = true
  scrollToBottom()

  let reasoning = ''
  let content = ''
  let generatedImages: { id: string; url: string; generatedAt: Date }[] = []

  try {
    const allMessages = conversationStore.conversations
      .find(c => c.id === convId)?.messages
      .filter(m => m.id !== aiMsgId) || []

    // 根据"发送上下文"开关决定传给 API 的消息列表
    const messages = sendContextEnabled.value
      ? allMessages                          // 完整历史上下文
      : allMessages.slice(-1)               // 仅最后一条用户消息

    await sendChatMessage({
      apiKey: settingsStore.settings.apiKey,
      baseUrl: settingsStore.settings.baseUrl,
      model: localModel.value,
      messages,
      systemPrompt: settingsStore.settings.systemPrompt,
      temperature: settingsStore.settings.temperature,
      maxTokens: settingsStore.settings.maxTokens,
      stream: settingsStore.settings.streamingEnabled,
      onChunk: (text, reasoningChunk, imageUrls) => {
        if (reasoningChunk) {
          reasoning += reasoningChunk
          conversationStore.updateMessage(convId!, aiMsgId, {
            reasoning,
            isStreaming: true
          })
        }
        if (text) {
          content += text
          conversationStore.updateMessage(convId!, aiMsgId, {
            content,
            isStreaming: true
          })
          scrollToBottom()
        }
        // 处理生成的图片
        if (imageUrls && imageUrls.length > 0) {
          // 异步处理图片保存
          imageUrls.forEach((url: string) => {
            const imgId = nanoid()

            if (url.startsWith('data:image/')) {
              const mimeType = url.match(/data:image\/([a-zA-Z]+);base64/)?.[1] || 'png'
              const base64 = url.split(',')[1] || ''

              // 异步保存到 IndexedDB
              saveBase64Image(imgId, `generated-${Date.now()}.${mimeType}`, base64, `image/${mimeType}`)
                .then(() => {
                  // 添加到生成图片列表（只存储元数据）
                  const newImg = {
                    id: imgId,
                    url: `indexeddb:${imgId}`,
                    name: `generated-${Date.now()}.${mimeType}`,
                    generatedAt: new Date()
                  }
                  generatedImages.push(newImg)

                  // 更新消息
                  conversationStore.updateMessage(convId!, aiMsgId, {
                    generatedImages,
                    isStreaming: true
                  })
                  scrollToBottom()
                })
                .catch(err => {
                  console.error('Failed to save generated image:', err)
                })
            } else {
              // 网络URL直接添加
              const newImg = {
                id: imgId,
                url,
                generatedAt: new Date()
              }
              generatedImages.push(newImg)

              conversationStore.updateMessage(convId!, aiMsgId, {
                generatedImages,
                isStreaming: true
              })
              scrollToBottom()
            }
          })
        }
      },
      onDone: () => {
        conversationStore.updateMessage(convId!, aiMsgId, {
          content,
          reasoning: reasoning || undefined,
          generatedImages: generatedImages.length > 0 ? generatedImages : undefined,
          isStreaming: false
        })
      },
      onError: (err) => {
        conversationStore.updateMessage(convId!, aiMsgId, {
          content: '',
          isStreaming: false,
          error: err.message
        })
      }
    })
  } catch (err) {
    // error handled in onError
  } finally {
    isLoading.value = false
    scrollToBottom()
  }
}

function stopGeneration() {
  isLoading.value = false
  if (conversation.value) {
    const messages = conversation.value.messages
    const lastMsg = messages[messages.length - 1]
    if (lastMsg?.isStreaming) {
      conversationStore.updateMessage(conversation.value.id, lastMsg.id, {
        isStreaming: false,
        content: lastMsg.content + ' [已停止]'
      })
    }
  }
}

function clearChat() {
  if (!conversation.value) return
  if (confirm('确定要清空当前对话吗？')) {
    conversationStore.clearConversation(conversation.value.id)
  }
}

function scrollToBottom(smooth = true) {
  nextTick(() => {
    bottomRef.value?.scrollIntoView({ behavior: smooth ? 'smooth' : 'instant' })
  })
}

// Auto scroll when new messages arrive
watch(
  () => conversation.value?.messages.length,
  () => scrollToBottom()
)

// Sync model when conversation changes
watch(
  () => conversation.value?.model,
  (model) => {
    if (model) localModel.value = model
  }
)

// 切换会话时同步「发送上下文」开关
watch(
  () => conversation.value?.id,
  () => {
    sendContextEnabled.value = conversation.value?.sendContextEnabled !== false
  },
  { immediate: true }
)

// 开关变化时持久化到当前会话
watch(sendContextEnabled, (val) => {
  if (conversation.value) {
    conversationStore.updateConversationContext(conversation.value.id, val)
  }
})
</script>

<style scoped>
.chat-view {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: var(--bg-primary);
}

/* TopBar */
.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 12px 20px;
  border-bottom: 1px solid var(--border-color);
  background: var(--bg-primary);
  z-index: 10;
  flex-shrink: 0;
}

.topbar-left {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
  flex: 1;
}

.topbar-center {
  flex-shrink: 0;
}

.topbar-right {
  display: flex;
  align-items: center;
  gap: 4px;
  flex: 1;
  justify-content: flex-end;
}

.conv-title {
  font-size: 14px;
  font-weight: 500;
  color: var(--text-secondary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
}

.icon-btn {
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: none;
  background: transparent;
  color: var(--text-secondary);
  cursor: pointer;
  transition: all 0.15s;
  flex-shrink: 0;
}

.icon-btn:hover {
  background: var(--bg-hover);
  color: var(--text-primary);
}

.icon-btn svg {
  width: 18px;
  height: 18px;
}

/* Messages */
.messages-area {
  flex: 1;
  overflow-y: auto;
  padding: 0 max(20px, calc(50% - 360px));
  scroll-behavior: smooth;
}

.messages-area::-webkit-scrollbar {
  width: 4px;
}

.messages-area::-webkit-scrollbar-thumb {
  background: var(--border-color);
  border-radius: 2px;
}

.messages-list {
  padding: 20px 0 40px;
}

/* Welcome */
.welcome {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-height: 400px;
  text-align: center;
  padding: 40px 20px;
}

.welcome-icon {
  font-size: 48px;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.welcome-title {
  font-size: 28px;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0 0 8px;
}

.welcome-sub {
  font-size: 15px;
  color: var(--text-muted);
  margin: 0 0 32px;
}

.suggestions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  max-width: 600px;
}

.suggestion-btn {
  padding: 10px 18px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  color: var(--text-secondary);
  font-size: 13px;
  cursor: pointer;
  transition: all 0.15s;
}

.suggestion-btn:hover {
  background: var(--bg-hover);
  color: var(--text-primary);
  border-color: var(--accent-color);
}

/* Input Area */
.input-area {
  padding: 12px 20px 16px;
  border-top: 1px solid var(--border-color);
  flex-shrink: 0;
  background: var(--bg-primary);
}

.image-previews {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 10px;
}

.preview-chip {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 8px 4px 4px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 8px;
}

.chip-img {
  width: 32px;
  height: 32px;
  border-radius: 4px;
  object-fit: cover;
}

.chip-name {
  font-size: 12px;
  color: var(--text-secondary);
  max-width: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.chip-remove {
  background: none;
  border: none;
  color: var(--text-muted);
  cursor: pointer;
  font-size: 12px;
  padding: 0 2px;
  line-height: 1;
  transition: color 0.15s;
}

.chip-remove:hover {
  color: var(--text-primary);
}

.input-box {
  display: flex;
  align-items: flex-end;
  gap: 8px;
  padding: 10px 12px;
  background: var(--bg-secondary);
  border: 1.5px solid var(--border-color);
  border-radius: 14px;
  transition: border-color 0.15s;
  max-width: 760px;
  margin: 0 auto;
}

.input-box.focused {
  border-color: var(--accent-color);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
}

.input-box.disabled {
  opacity: 0.7;
}

.attach-btn {
  flex-shrink: 0;
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: none;
  background: transparent;
  color: var(--text-muted);
  cursor: pointer;
  transition: all 0.15s;
}

.attach-btn:hover:not(:disabled) {
  background: var(--bg-hover);
  color: var(--text-primary);
}

.attach-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.attach-btn svg {
  width: 18px;
  height: 18px;
}

.input-textarea {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  resize: none;
  font-size: 15px;
  line-height: 1.6;
  color: var(--text-primary);
  font-family: inherit;
  max-height: 200px;
  overflow-y: auto;
  padding: 4px 0;
}

.input-textarea::placeholder {
  color: var(--text-muted);
}

.input-textarea::-webkit-scrollbar {
  width: 3px;
}

.send-btn {
  flex-shrink: 0;
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: none;
  background: var(--accent-color);
  color: #fff;
  cursor: pointer;
  transition: all 0.15s;
}

.send-btn:hover:not(:disabled) {
  background: var(--accent-hover);
  transform: scale(1.05);
}

.send-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  transform: none;
}

.send-btn svg {
  width: 16px;
  height: 16px;
}

.stop-btn {
  background: #ef4444;
}

.stop-btn:hover {
  background: #dc2626 !important;
}

.input-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 6px;
  max-width: 760px;
  margin-left: auto;
  margin-right: auto;
}

.footer-right {
  display: flex;
  align-items: center;
  gap: 12px;
}

.footer-hint,
.token-hint {
  font-size: 11px;
  color: var(--text-muted);
}

/* 发送上下文开关 */
.context-toggle {
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  user-select: none;
}

.context-label {
  font-size: 11px;
  color: var(--text-muted);
  white-space: nowrap;
}

.toggle-btn {
  position: relative;
  width: 30px;
  height: 17px;
  border-radius: 9px;
  border: none;
  background: var(--border-color);
  cursor: pointer;
  padding: 0;
  transition: background 0.2s;
  flex-shrink: 0;
}

.toggle-btn.active {
  background: var(--accent-color);
}

.toggle-thumb {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #fff;
  transition: transform 0.2s;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
}

.toggle-btn.active .toggle-thumb {
  transform: translateX(13px);
}

/* Drag & Drop */
.drag-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(59, 130, 246, 0.1);
  border: 2px dashed #3b82f6;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  pointer-events: none;
  backdrop-filter: blur(2px);
  animation: dragPulse 0.6s ease-in-out infinite;
}

@keyframes dragPulse {
  0%, 100% {
    background: rgba(59, 130, 246, 0.1);
    border-color: #3b82f6;
  }
  50% {
    background: rgba(59, 130, 246, 0.15);
    border-color: #2563eb;
  }
}

.drag-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  pointer-events: none;
}

.drag-icon {
  width: 56px;
  height: 56px;
  color: #3b82f6;
  animation: dragBounce 1s ease-in-out infinite;
}

@keyframes dragBounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

.drag-text {
  font-size: 16px;
  font-weight: 600;
  color: #3b82f6;
  margin: 0;
  user-select: none;
}

.chat-view {
  position: relative;
}
</style>
