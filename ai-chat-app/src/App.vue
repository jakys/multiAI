<template>
  <div class="app-layout">
    <!-- Sidebar -->
    <Sidebar
      :collapsed="sidebarCollapsed"
      @open-settings="settingsVisible = true"
    />

    <!-- Main Area -->
    <div class="main-area">
      <ChatView
        @toggle-sidebar="sidebarCollapsed = !sidebarCollapsed"
        @open-settings="settingsVisible = true"
      />
    </div>

    <!-- Settings Modal -->
    <SettingsModal
      :visible="settingsVisible"
      @close="settingsVisible = false"
    />

    <!-- API Key Banner -->
    <Transition name="banner">
      <div v-if="!isConfigured && !settingsVisible" class="api-banner">
        <span>⚡ 请先配置 API Key 才能开始对话</span>
        <button @click="settingsVisible = true">去配置</button>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import Sidebar from './components/Sidebar.vue'
import ChatView from './views/ChatView.vue'
import SettingsModal from './components/SettingsModal.vue'
import { useSettingsStore } from './stores/settings'

const settingsStore = useSettingsStore()

const sidebarCollapsed = ref(false)
const settingsVisible = ref(false)

// 使用计算属性实时响应 API Key 状态
const isConfigured = computed(() => !!settingsStore.settings.apiKey)

onMounted(() => {
  // Apply saved theme on startup
  const theme = settingsStore.settings.theme
  if (theme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light')
  } else if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark')
  }

  // Show settings if no API key
  if (!isConfigured.value) {
    setTimeout(() => { settingsVisible.value = true }, 300)
  }
})
</script>

<style scoped>
.app-layout {
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
}

.main-area {
  flex: 1;
  min-width: 0;
  height: 100%;
  overflow: hidden;
}

.api-banner {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 20px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 50px;
  color: #fff;
  font-size: 14px;
  box-shadow: 0 8px 30px rgba(102, 126, 234, 0.4);
  z-index: 500;
  white-space: nowrap;
}

.api-banner button {
  padding: 5px 14px;
  background: rgba(255,255,255,0.2);
  border: 1px solid rgba(255,255,255,0.4);
  border-radius: 20px;
  color: #fff;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.15s;
}

.api-banner button:hover {
  background: rgba(255,255,255,0.35);
}

.banner-enter-active,
.banner-leave-active {
  transition: all 0.3s ease;
}

.banner-enter-from,
.banner-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(20px);
}
</style>
