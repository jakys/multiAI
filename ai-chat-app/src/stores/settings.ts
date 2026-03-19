import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { AppSettings } from '../types'

const DEFAULT_SETTINGS: AppSettings = {
  apiKey: '',
  baseUrl: 'https://openrouter.ai/api/v1',
  selectedModel: 'openai/gpt-4o-mini',
  systemPrompt: '',
  temperature: 0.7,
  maxTokens: 4096,
  streamingEnabled: true,
  theme: 'dark'
}

const STORAGE_KEY = 'ai-chat-settings'

export const useSettingsStore = defineStore('settings', () => {
  const settings = ref<AppSettings>(loadSettings())

  function loadSettings(): AppSettings {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        return { ...DEFAULT_SETTINGS, ...JSON.parse(saved) }
      }
    } catch (e) {
      console.warn('Failed to load settings:', e)
    }
    return { ...DEFAULT_SETTINGS }
  }

  function saveSettings() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings.value))
  }

  function updateSettings(updates: Partial<AppSettings>) {
    settings.value = { ...settings.value, ...updates }
    saveSettings()
  }

  function resetSettings() {
    settings.value = { ...DEFAULT_SETTINGS }
    localStorage.removeItem(STORAGE_KEY)
  }

  const isConfigured = computed(() => !!settings.value.apiKey)

  return {
    settings,
    isConfigured,
    updateSettings,
    resetSettings
  }
})
