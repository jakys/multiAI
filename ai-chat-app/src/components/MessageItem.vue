<template>
  <div class="message-item" :class="[msg.role, { streaming: msg.isStreaming }]">
    <!-- Avatar -->
    <div class="avatar">
      <span v-if="msg.role === 'user'" class="avatar-icon user-avatar">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg>
      </span>
      <span v-else class="avatar-icon ai-avatar">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/></svg>
      </span>
    </div>

    <!-- Content -->
    <div class="message-content-wrap">
      <div class="message-header">
        <span class="role-label">{{ msg.role === 'user' ? '你' : (msg.model || '助手') }}</span>
        <span class="timestamp">{{ formatTime(msg.timestamp) }}</span>
        <div class="message-actions" v-if="!msg.isStreaming">
          <button class="action-btn" @click="copyContent" title="复制">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
            <span v-if="copied">已复制</span>
          </button>
        </div>
      </div>

      <!-- Attached Images -->
      <div v-if="msg.images && msg.images.length > 0" class="attached-images">
        <div v-for="img in msg.images" :key="img.id" class="image-preview-wrap">
          <img :src="img.url" :alt="img.name" class="attached-image" @click="viewImage(img.url)" />
          <button class="download-btn" @click="downloadImage(img)" title="下载图片">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          </button>
        </div>
      </div>

      <!-- Generated Images (AI生成的图片) -->
      <div v-if="msg.generatedImages && msg.generatedImages.length > 0" class="generated-images">
        <div class="gen-img-label">🖼️ 生成的图片</div>
        <div class="images-grid">
          <div v-for="img in displayedGeneratedImages" :key="img.id" class="image-preview-wrap">
            <img
              v-if="img.displayUrl"
              :src="img.displayUrl"
              :alt="`Generated image ${img.id}`"
              class="attached-image"
              @click="viewImage(img.displayUrl)"
            />
            <div v-else class="image-loading">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="loading-spinner">
                <circle cx="12" cy="12" r="10" stroke-dasharray="60" stroke-dashoffset="20"/>
              </svg>
              <span>加载中...</span>
            </div>
            <button class="download-btn" @click="downloadGeneratedImage(img)" title="下载图片">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Reasoning (for o1/R1 models) -->
      <div v-if="msg.reasoning" class="reasoning-block">
        <button class="reasoning-toggle" @click="showReasoning = !showReasoning">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" :class="{ rotated: showReasoning }"><polyline points="9 18 15 12 9 6"/></svg>
          思考过程
        </button>
        <div v-show="showReasoning" class="reasoning-content">{{ msg.reasoning }}</div>
      </div>

      <!-- Main Content -->
      <div
        v-if="msg.role === 'assistant'"
        class="message-text markdown-body"
        v-html="renderedContent"
      />
      <div v-else class="message-text user-text">{{ msg.content }}</div>

      <!-- Streaming cursor -->
      <span v-if="msg.isStreaming" class="streaming-cursor" />

      <!-- Error -->
      <div v-if="msg.error" class="error-block">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
        {{ msg.error }}
      </div>
    </div>
  </div>

  <!-- Image Preview Modal -->
  <Teleport to="body">
    <div v-if="previewUrl" class="image-modal" @click="previewUrl = null">
      <img :src="previewUrl" class="modal-image" @click.stop />
      <button class="modal-close" @click="previewUrl = null">✕</button>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, ref as useRef, watch } from 'vue'
import { marked } from 'marked'
import hljs from 'highlight.js/lib/core'
// 按需引入常用语言（大幅减小包体积）
import javascript from 'highlight.js/lib/languages/javascript'
import typescript from 'highlight.js/lib/languages/typescript'
import python from 'highlight.js/lib/languages/python'
import java from 'highlight.js/lib/languages/java'
import cpp from 'highlight.js/lib/languages/cpp'
import css from 'highlight.js/lib/languages/css'
import xml from 'highlight.js/lib/languages/xml'
import json from 'highlight.js/lib/languages/json'
import bash from 'highlight.js/lib/languages/bash'
import sql from 'highlight.js/lib/languages/sql'
import go from 'highlight.js/lib/languages/go'
import rust from 'highlight.js/lib/languages/rust'
import markdown from 'highlight.js/lib/languages/markdown'
import yaml from 'highlight.js/lib/languages/yaml'
import type { Message, AttachedImage, GeneratedImage } from '../types'
import { getImageUrl, getImageBlob } from '../services/imageStorage'

// 注册语言
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('js', javascript)
hljs.registerLanguage('typescript', typescript)
hljs.registerLanguage('ts', typescript)
hljs.registerLanguage('python', python)
hljs.registerLanguage('py', python)
hljs.registerLanguage('java', java)
hljs.registerLanguage('cpp', cpp)
hljs.registerLanguage('c++', cpp)
hljs.registerLanguage('css', css)
hljs.registerLanguage('xml', xml)
hljs.registerLanguage('html', xml)
hljs.registerLanguage('json', json)
hljs.registerLanguage('bash', bash)
hljs.registerLanguage('shell', bash)
hljs.registerLanguage('sh', bash)
hljs.registerLanguage('sql', sql)
hljs.registerLanguage('go', go)
hljs.registerLanguage('rust', rust)
hljs.registerLanguage('markdown', markdown)
hljs.registerLanguage('md', markdown)
hljs.registerLanguage('yaml', yaml)
hljs.registerLanguage('yml', yaml)

const props = defineProps<{ msg: Message }>()

const copied = ref(false)
const showReasoning = ref(false)
const previewUrl = ref<string | null>(null)

// 存储生成的图片的真实 URL（从 IndexedDB 加载）
const generatedImageUrls = useRef<Map<string, string>>(new Map())

// Configure marked with highlight.js
marked.setOptions({
  breaks: true,
  gfm: true
})

const renderer = new marked.Renderer()
// @ts-ignore - marked 的类型定义不匹配
renderer.code = (code: string, language: string | undefined) => {
  const lang = language || 'plaintext'
  let highlighted = ''
  try {
    if (hljs.getLanguage(lang)) {
      highlighted = hljs.highlight(code, { language: lang }).value
    } else {
      highlighted = hljs.highlightAuto(code).value
    }
  } catch {
    highlighted = code
  }
  return `<div class="code-block-wrap">
    <div class="code-header">
      <span class="code-lang">${lang}</span>
      <button class="copy-code-btn" onclick="(function(btn){const pre=btn.closest('.code-block-wrap').querySelector('code');navigator.clipboard.writeText(pre.textContent||'');btn.textContent='已复制';setTimeout(()=>btn.textContent='复制',2000)})(this)">复制</button>
    </div>
    <pre><code class="hljs language-${lang}">${highlighted}</code></pre>
  </div>`
}

marked.use({ renderer })

const renderedContent = computed(() => {
  if (!props.msg.content) return ''
  try {
    return marked.parse(props.msg.content) as string
  } catch {
    return props.msg.content
  }
})

// 获取生成的图片的真实 URL
async function getGeneratedImageUrl(img: GeneratedImage): Promise<string> {
  // 如果已经缓存了，直接返回
  if (generatedImageUrls.value.has(img.id)) {
    return generatedImageUrls.value.get(img.id)!
  }

  // 如果是 IndexedDB 存储的图片
  if (img.url.startsWith('indexeddb:')) {
    const imgId = img.url.replace('indexeddb:', '')
    const realUrl = await getImageUrl(imgId)
    if (realUrl) {
      generatedImageUrls.value.set(img.id, realUrl)
      return realUrl
    }
  }

  // 否则直接返回 URL
  return img.url
}

// 组件挂载时，预加载所有 IndexedDB 图片
onMounted(async () => {
  if (props.msg.generatedImages) {
    for (const img of props.msg.generatedImages) {
      if (img.url.startsWith('indexeddb:')) {
        await getGeneratedImageUrl(img)
      }
    }
  }
})

// 组件卸载时，清理缓存的 URL
onUnmounted(() => {
  generatedImageUrls.value.forEach(url => URL.revokeObjectURL(url))
  generatedImageUrls.value.clear()
})

// 为生成的图片创建一个响应式的 URL 引用
const displayedGeneratedImages = computed(() => {
  if (!props.msg.generatedImages) return []

  return props.msg.generatedImages.map(img => {
    // 如果已经加载了真实 URL，使用它
    if (generatedImageUrls.value.has(img.id)) {
      return {
        ...img,
        displayUrl: generatedImageUrls.value.get(img.id)!
      }
    }

    // 如果是 IndexedDB 存储的图片，触发异步加载
    if (img.url.startsWith('indexeddb:')) {
      // 触发异步加载但不等待
      getGeneratedImageUrl(img).catch(err => {
        console.error('Failed to load generated image:', err)
      })
      // 返回 loading 状态标记
      return {
        ...img,
        displayUrl: '', // 等待加载完成
        isLoading: true
      }
    }

    // 否则直接使用原始 URL
    return {
      ...img,
      displayUrl: img.url
    }
  })
})

// 监听 generatedImages 的变化，加载新图片
watch(() => props.msg.generatedImages, (newImages) => {
  if (newImages) {
    newImages.forEach(img => {
      if (img.url.startsWith('indexeddb:') && !generatedImageUrls.value.has(img.id)) {
        getGeneratedImageUrl(img).catch(err => {
          console.error('Failed to load generated image:', err)
        })
      }
    })
  }
}, { deep: true })

function formatTime(date: Date | string) {
  const d = new Date(date)
  const now = new Date()
  const diff = now.getTime() - d.getTime()
  if (diff < 60000) return '刚刚'
  if (diff < 3600000) return `${Math.floor(diff / 60000)}分钟前`
  return d.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })
}

async function copyContent() {
  try {
    await navigator.clipboard.writeText(props.msg.content)
    copied.value = true
    setTimeout(() => { copied.value = false }, 2000)
  } catch {}
}

function viewImage(url: string) {
  previewUrl.value = url
}

function downloadImage(img: AttachedImage) {
  const a = document.createElement('a')
  a.href = img.url
  a.download = img.name
  a.click()
}

async function downloadGeneratedImage(img: GeneratedImage) {
  const a = document.createElement('a')

  // 生成文件名
  let filename = img.name || `generated-image-${img.id}`
  if (!filename.includes('.')) {
    // 从 data URI 提取格式或使用默认
    if (img.url.includes('png')) {
      filename += '.png'
    } else if (img.url.includes('jpg') || img.url.includes('jpeg')) {
      filename += '.jpg'
    } else if (img.url.includes('webp')) {
      filename += '.webp'
    } else if (img.url.includes('gif')) {
      filename += '.gif'
    } else {
      filename += '.png'
    }
  }

  // 处理不同类型的图片 URL
  if (img.url.startsWith('indexeddb:')) {
    // IndexedDB 存储的图片 - 获取 Blob
    const imgId = img.url.replace('indexeddb:', '')
    const blob = await getImageBlob(imgId)
    if (blob) {
      const url = URL.createObjectURL(blob)
      a.href = url
      a.download = filename
      a.click()
      setTimeout(() => URL.revokeObjectURL(url), 100)
    }
  } else if (img.url.startsWith('data:image/')) {
    // base64 格式可以直接下载
    a.href = img.url
    a.download = filename
    a.click()
  } else {
    // 网络 URL
    a.href = img.url
    a.download = filename
    a.target = '_blank' // 新标签页打开，避免跨域下载问题
    a.click()
  }
}
</script>

<style scoped>
.message-item {
  display: flex;
  gap: 14px;
  padding: 20px 0;
  animation: fadeInUp 0.2s ease;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

.message-item.user {
  flex-direction: row-reverse;
}

.avatar {
  flex-shrink: 0;
  width: 36px;
  height: 36px;
}

.avatar-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
}

.avatar-icon svg {
  width: 20px;
  height: 20px;
}

.user-avatar {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
}

.ai-avatar {
  background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
  color: #fff;
}

.message-content-wrap {
  flex: 1;
  min-width: 0;
  max-width: calc(100% - 50px);
}

.message-item.user .message-content-wrap {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.message-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 6px;
}

.message-item.user .message-header {
  flex-direction: row-reverse;
}

.role-label {
  font-size: 12px;
  font-weight: 600;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.timestamp {
  font-size: 11px;
  color: var(--text-muted);
}

.message-actions {
  display: flex;
  gap: 4px;
  opacity: 0;
  transition: opacity 0.15s;
}

.message-item:hover .message-actions {
  opacity: 1;
}

.action-btn {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 3px 8px;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  background: var(--bg-secondary);
  color: var(--text-secondary);
  font-size: 11px;
  cursor: pointer;
  transition: all 0.15s;
}

.action-btn:hover {
  background: var(--bg-hover);
  color: var(--text-primary);
}

.action-btn svg {
  width: 12px;
  height: 12px;
}

.attached-images {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 10px;
}

.generated-images {
  margin-bottom: 10px;
}

.gen-img-label {
  font-size: 12px;
  font-weight: 600;
  color: var(--text-secondary);
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.images-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 8px;
}

.image-preview-wrap {
  position: relative;
  display: inline-block;
  min-width: 200px;
  min-height: 150px;
}

.attached-image {
  max-width: 280px;
  max-height: 200px;
  border-radius: 10px;
  object-fit: cover;
  cursor: zoom-in;
  border: 1px solid var(--border-color);
  transition: transform 0.15s;
}

.attached-image:hover {
  transform: scale(1.02);
}

.image-loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 200px;
  min-height: 150px;
  background: var(--bg-secondary);
  border-radius: 10px;
  border: 1px solid var(--border-color);
  color: var(--text-secondary);
  gap: 10px;
}

.loading-spinner {
  width: 32px;
  height: 32px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.image-loading span {
  font-size: 13px;
}

.download-btn {
  position: absolute;
  top: 6px;
  right: 6px;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.6);
  border: none;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.15s;
}

.image-preview-wrap:hover .download-btn {
  opacity: 1;
}

.download-btn svg {
  width: 14px;
  height: 14px;
}

.reasoning-block {
  margin-bottom: 10px;
}

.reasoning-toggle {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 6px;
  color: var(--text-secondary);
  font-size: 12px;
  cursor: pointer;
  transition: all 0.15s;
}

.reasoning-toggle:hover {
  background: var(--bg-hover);
}

.reasoning-toggle svg {
  width: 14px;
  height: 14px;
  transition: transform 0.2s;
}

.reasoning-toggle svg.rotated {
  transform: rotate(90deg);
}

.reasoning-content {
  margin-top: 8px;
  padding: 12px;
  background: var(--bg-secondary);
  border-left: 3px solid var(--accent-color);
  border-radius: 0 8px 8px 0;
  font-size: 13px;
  color: var(--text-secondary);
  white-space: pre-wrap;
  line-height: 1.6;
}

.message-text {
  line-height: 1.7;
  font-size: 15px;
  color: var(--text-primary);
  word-break: break-word;
}

.user-text {
  display: inline-block;
  padding: 12px 16px;
  background: var(--user-bubble);
  border-radius: 18px 18px 4px 18px;
  color: var(--user-bubble-text);
  white-space: pre-wrap;
}

.streaming-cursor {
  display: inline-block;
  width: 2px;
  height: 1em;
  background: var(--accent-color);
  margin-left: 2px;
  vertical-align: text-bottom;
  animation: blink 0.8s infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.error-block {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
  padding: 10px 14px;
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  border-radius: 8px;
  color: #ef4444;
  font-size: 13px;
}

.error-block svg {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

/* Image Modal */
.image-modal {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  cursor: zoom-out;
}

.modal-image {
  max-width: 90vw;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 8px;
  cursor: default;
}

.modal-close {
  position: fixed;
  top: 20px;
  right: 20px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255,255,255,0.15);
  border: none;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s;
}

.modal-close:hover {
  background: rgba(255,255,255,0.3);
}
</style>
