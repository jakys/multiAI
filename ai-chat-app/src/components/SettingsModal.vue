<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="visible" class="modal-overlay" @click.self="close">
        <div class="modal-panel">
          <!-- Header -->
          <div class="modal-header">
            <h2 class="modal-title">设置</h2>
            <button class="close-btn" @click="close">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>

          <!-- Tabs -->
          <div class="tabs">
            <button
              v-for="tab in tabs"
              :key="tab.id"
              class="tab"
              :class="{ active: activeTab === tab.id }"
              @click="activeTab = tab.id"
            >{{ tab.label }}</button>
          </div>

          <!-- Content -->
          <div class="modal-body">
            <!-- API Settings -->
            <div v-if="activeTab === 'api'" class="settings-section">
              <div class="field">
                <label class="field-label">
                  API Key
                  <a href="https://openrouter.ai/keys" target="_blank" class="field-link">获取 →</a>
                </label>
                <div class="password-wrap">
                  <input
                    v-model="draft.apiKey"
                    :type="showKey ? 'text' : 'password'"
                    class="field-input"
                    placeholder="sk-or-v1-..."
                    spellcheck="false"
                  />
                  <button class="eye-btn" @click="showKey = !showKey">
                    <svg v-if="!showKey" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                    <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                  </button>
                </div>
                <p class="field-hint">你的 OpenRouter API Key，仅存储在本地浏览器中</p>
              </div>

              <div class="field">
                <label class="field-label">API Base URL</label>
                <input
                  v-model="draft.baseUrl"
                  class="field-input"
                  placeholder="https://openrouter.ai/api/v1"
                />
                <p class="field-hint">默认使用 OpenRouter，可替换为其他兼容 OpenAI 格式的接口</p>
              </div>

              <div class="field">
                <button class="test-btn" @click="testConnection" :disabled="testing || !draft.apiKey">
                  <svg v-if="!testing" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
                  <span v-if="testing" class="spinner" />
                  {{ testing ? '测试中...' : '测试连接' }}
                </button>
                <p v-if="testResult" class="test-result" :class="testResult.ok ? 'ok' : 'fail'">
                  {{ testResult.message }}
                </p>
              </div>
            </div>

            <!-- Chat Settings -->
            <div v-if="activeTab === 'chat'" class="settings-section">
              <div class="info-box">
                <p class="info-title">📋 模型信息</p>
                <ul class="info-list">
                  <li>✅ 文本对话：所有模型都支持文字对话</li>
                  <li>🖼️ 视觉理解：标记为「Vision」的模型支持图片识别</li>
                  <li>🎨 图像生成：「Image Generation」分类中的模型</li>
                  <li>🎬 视频处理：「Video」分类中的模型支持视频上传和生成</li>
                  <li>🛠️ 工具调用：标记为「Tools」的模型支持函数调用</li>
                </ul>
              </div>

              <div class="field">
                <label class="field-label">系统提示词</label>
                <textarea
                  v-model="draft.systemPrompt"
                  class="field-textarea"
                  rows="5"
                  placeholder="你是一个有用的 AI 助手..."
                />
                <p class="field-hint">全局系统提示词，对所有新对话生效</p>
              </div>

              <div class="field">
                <label class="field-label">
                  Temperature
                  <span class="field-value">{{ draft.temperature }}</span>
                </label>
                <input
                  v-model.number="draft.temperature"
                  type="range"
                  min="0"
                  max="2"
                  step="0.1"
                  class="field-range"
                />
                <div class="range-labels">
                  <span>精确 0</span>
                  <span>1.0 均衡</span>
                  <span>2.0 创意</span>
                </div>
              </div>

              <div class="field">
                <label class="field-label">
                  最大 Token 数
                  <span class="field-value">{{ draft.maxTokens }}</span>
                </label>
                <input
                  v-model.number="draft.maxTokens"
                  type="range"
                  min="256"
                  max="32000"
                  step="256"
                  class="field-range"
                />
                <div class="range-labels">
                  <span>256</span>
                  <span>32000</span>
                </div>
              </div>

              <div class="field">
                <label class="field-label toggle-label">
                  <span>流式输出</span>
                  <div class="toggle" :class="{ on: draft.streamingEnabled }" @click="draft.streamingEnabled = !draft.streamingEnabled">
                    <div class="toggle-thumb" />
                  </div>
                </label>
                <p class="field-hint">开启后回复会逐字显示，关闭则等待完整响应</p>
              </div>
            </div>

            <!-- Appearance -->
            <div v-if="activeTab === 'appearance'" class="settings-section">
              <div class="field">
                <label class="field-label">主题</label>
                <div class="theme-options">
                  <button
                    v-for="t in themes"
                    :key="t.value"
                    class="theme-option"
                    :class="{ active: draft.theme === t.value }"
                    @click="draft.theme = t.value as any"
                  >
                    <span class="theme-icon">{{ t.icon }}</span>
                    <span>{{ t.label }}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Footer -->
          <div class="modal-footer">
            <button class="btn-reset" @click="resetSettings">恢复默认</button>
            <div class="footer-right">
              <button class="btn-cancel" @click="close">取消</button>
              <button class="btn-save" @click="save">保存</button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useSettingsStore } from '../stores/settings'
import type { AppSettings } from '../types'

const props = defineProps<{ visible: boolean }>()
const emit = defineEmits<{ close: [] }>()

const settingsStore = useSettingsStore()
const activeTab = ref('api')
const showKey = ref(false)
const testing = ref(false)
const testResult = ref<{ ok: boolean; message: string } | null>(null)

const tabs = [
  { id: 'api', label: 'API 配置' },
  { id: 'chat', label: '对话设置' },
  { id: 'appearance', label: '外观' }
]

const themes = [
  { value: 'dark', label: '深色', icon: '🌙' },
  { value: 'light', label: '浅色', icon: '☀️' },
  { value: 'auto', label: '跟随系统', icon: '💻' }
]

const draft = ref<AppSettings>({ ...settingsStore.settings })

watch(() => props.visible, (v) => {
  if (v) {
    draft.value = { ...settingsStore.settings }
    testResult.value = null
  }
})

async function testConnection() {
  if (!draft.value.apiKey) return
  testing.value = true
  testResult.value = null
  try {
    const resp = await fetch(`${draft.value.baseUrl}/models`, {
      headers: { 'Authorization': `Bearer ${draft.value.apiKey}` }
    })
    if (resp.ok) {
      const data = await resp.json()
      testResult.value = { ok: true, message: `连接成功！可用模型 ${data.data?.length || 0} 个` }
    } else {
      testResult.value = { ok: false, message: `连接失败：${resp.status} ${resp.statusText}` }
    }
  } catch (e: any) {
    testResult.value = { ok: false, message: `连接错误：${e.message}` }
  } finally {
    testing.value = false
  }
}

function save() {
  settingsStore.updateSettings(draft.value)
  // Apply theme
  applyTheme(draft.value.theme)
  close()
}

function close() {
  emit('close')
}

function resetSettings() {
  if (confirm('确定要恢复所有默认设置吗？')) {
    settingsStore.resetSettings()
    draft.value = { ...settingsStore.settings }
  }
}

function applyTheme(theme: string) {
  const root = document.documentElement
  if (theme === 'light') {
    root.setAttribute('data-theme', 'light')
  } else if (theme === 'dark') {
    root.setAttribute('data-theme', 'dark')
  } else {
    root.removeAttribute('data-theme')
  }
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.modal-enter-active,
.modal-leave-active {
  transition: all 0.2s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-panel,
.modal-leave-to .modal-panel {
  transform: scale(0.96) translateY(10px);
}

.modal-panel {
  width: 100%;
  max-width: 520px;
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  max-height: 90vh;
  overflow: hidden;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.4);
  transition: transform 0.2s ease;
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px 16px;
  border-bottom: 1px solid var(--border-color);
}

.modal-title {
  font-size: 18px;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
}

.close-btn {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: var(--bg-secondary);
  border-radius: 8px;
  color: var(--text-secondary);
  cursor: pointer;
  transition: all 0.15s;
}

.close-btn:hover {
  background: var(--bg-hover);
  color: var(--text-primary);
}

.close-btn svg {
  width: 16px;
  height: 16px;
}

.tabs {
  display: flex;
  gap: 2px;
  padding: 8px 16px;
  border-bottom: 1px solid var(--border-color);
}

.tab {
  padding: 6px 16px;
  border: none;
  border-radius: 8px;
  background: transparent;
  color: var(--text-secondary);
  font-size: 13px;
  cursor: pointer;
  transition: all 0.15s;
}

.tab:hover {
  background: var(--bg-hover);
  color: var(--text-primary);
}

.tab.active {
  background: var(--accent-color);
  color: #fff;
}

.modal-body {
  flex: 1;
  overflow-y: auto;
  padding: 20px 24px;
}

.modal-body::-webkit-scrollbar {
  width: 4px;
}

.settings-section {
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.info-box {
  padding: 14px 14px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  border-left: 3px solid var(--accent-color);
}

.info-title {
  font-size: 13px;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0 0 10px 0;
}

.info-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.info-list li {
  font-size: 12px;
  color: var(--text-secondary);
  line-height: 1.5;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.field-label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 13px;
  font-weight: 600;
  color: var(--text-primary);
}

.field-link {
  font-size: 12px;
  color: var(--accent-color);
  text-decoration: none;
  font-weight: 400;
}

.field-link:hover {
  text-decoration: underline;
}

.field-value {
  font-weight: 700;
  color: var(--accent-color);
}

.password-wrap {
  position: relative;
}

.field-input {
  width: 100%;
  padding: 10px 14px;
  background: var(--bg-secondary);
  border: 1.5px solid var(--border-color);
  border-radius: 10px;
  color: var(--text-primary);
  font-size: 13px;
  outline: none;
  transition: border-color 0.15s;
  box-sizing: border-box;
  font-family: monospace;
}

.field-input:focus {
  border-color: var(--accent-color);
}

.eye-btn {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: var(--text-muted);
  cursor: pointer;
  padding: 4px;
  display: flex;
}

.eye-btn svg {
  width: 16px;
  height: 16px;
}

.field-textarea {
  width: 100%;
  padding: 10px 14px;
  background: var(--bg-secondary);
  border: 1.5px solid var(--border-color);
  border-radius: 10px;
  color: var(--text-primary);
  font-size: 13px;
  outline: none;
  resize: vertical;
  font-family: inherit;
  transition: border-color 0.15s;
  box-sizing: border-box;
}

.field-textarea:focus {
  border-color: var(--accent-color);
}

.field-hint {
  font-size: 12px;
  color: var(--text-muted);
  margin: 0;
  line-height: 1.5;
}

.field-range {
  width: 100%;
  accent-color: var(--accent-color);
  cursor: pointer;
}

.range-labels {
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  color: var(--text-muted);
}

.toggle-label {
  cursor: pointer;
}

.toggle {
  width: 44px;
  height: 24px;
  border-radius: 12px;
  background: var(--border-color);
  position: relative;
  cursor: pointer;
  transition: background 0.2s;
  flex-shrink: 0;
}

.toggle.on {
  background: var(--accent-color);
}

.toggle-thumb {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #fff;
  transition: transform 0.2s;
  box-shadow: 0 1px 4px rgba(0,0,0,0.2);
}

.toggle.on .toggle-thumb {
  transform: translateX(20px);
}

.test-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 9px 18px;
  background: var(--bg-secondary);
  border: 1.5px solid var(--border-color);
  border-radius: 10px;
  color: var(--text-primary);
  font-size: 13px;
  cursor: pointer;
  transition: all 0.15s;
}

.test-btn:hover:not(:disabled) {
  border-color: var(--accent-color);
  background: var(--bg-hover);
}

.test-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.test-btn svg {
  width: 15px;
  height: 15px;
}

.spinner {
  display: inline-block;
  width: 14px;
  height: 14px;
  border: 2px solid var(--border-color);
  border-top-color: var(--accent-color);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.test-result {
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 13px;
  margin: 0;
}

.test-result.ok {
  background: rgba(34, 197, 94, 0.1);
  color: #22c55e;
  border: 1px solid rgba(34, 197, 94, 0.3);
}

.test-result.fail {
  background: rgba(239, 68, 68, 0.1);
  color: #ef4444;
  border: 1px solid rgba(239, 68, 68, 0.3);
}

.theme-options {
  display: flex;
  gap: 10px;
}

.theme-option {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  background: var(--bg-secondary);
  border: 2px solid var(--border-color);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.15s;
  color: var(--text-secondary);
  font-size: 13px;
}

.theme-option:hover {
  border-color: var(--accent-color);
}

.theme-option.active {
  border-color: var(--accent-color);
  background: rgba(99, 102, 241, 0.08);
  color: var(--text-primary);
}

.theme-icon {
  font-size: 22px;
}

.modal-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  border-top: 1px solid var(--border-color);
}

.footer-right {
  display: flex;
  gap: 10px;
}

.btn-reset, .btn-cancel, .btn-save {
  padding: 8px 18px;
  border-radius: 9px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s;
}

.btn-reset {
  background: transparent;
  border: 1px solid var(--border-color);
  color: var(--text-muted);
}

.btn-reset:hover {
  border-color: #ef4444;
  color: #ef4444;
}

.btn-cancel {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  color: var(--text-secondary);
}

.btn-cancel:hover {
  background: var(--bg-hover);
}

.btn-save {
  background: var(--accent-color);
  border: 1px solid transparent;
  color: #fff;
}

.btn-save:hover {
  background: var(--accent-hover);
}
</style>
