<template>
  <div class="sidebar" :class="{ collapsed }">
    <!-- Logo / Header -->
    <div class="sidebar-header">
      <div class="logo">
        <span class="logo-icon">✦</span>
        <span class="logo-text" v-show="!collapsed">MultiAI</span>
      </div>
      <button class="new-chat-btn" @click="newChat" :title="collapsed ? '新对话' : ''">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="12" y1="5" x2="12" y2="19"/>
          <line x1="5" y1="12" x2="19" y2="12"/>
        </svg>
        <span v-show="!collapsed">新对话</span>
      </button>
    </div>

    <!-- Conversation List -->
    <div class="conv-list" v-show="!collapsed">
      <div class="conv-section-title" v-if="todayConvs.length">今天</div>
      <ConversationItem
        v-for="conv in todayConvs"
        :key="conv.id"
        :conv="conv"
        :active="conv.id === currentId"
        @select="selectConv(conv.id)"
        @delete="deleteConv(conv.id)"
      />
      <div class="conv-section-title" v-if="olderConvs.length">更早</div>
      <ConversationItem
        v-for="conv in olderConvs"
        :key="conv.id"
        :conv="conv"
        :active="conv.id === currentId"
        @select="selectConv(conv.id)"
        @delete="deleteConv(conv.id)"
      />
      <div v-if="conversations.length === 0" class="empty-state">
        <span>暂无对话记录</span>
      </div>
    </div>

    <!-- Bottom Actions -->
    <div class="sidebar-bottom" v-show="!collapsed">
      <button class="settings-btn" @click="$emit('open-settings')">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="3"/>
          <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/>
        </svg>
        <span>设置</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useConversationStore } from '../stores/conversations'
import { useSettingsStore } from '../stores/settings'
import ConversationItem from './ConversationItem.vue'

defineProps<{ collapsed: boolean }>()
const emit = defineEmits<{
  'open-settings': []
}>()

const conversationStore = useConversationStore()
const settingsStore = useSettingsStore()

const conversations = computed(() => conversationStore.conversations)
const currentId = computed(() => conversationStore.currentConversationId)

const todayConvs = computed(() => {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return conversations.value.filter(c => new Date(c.updatedAt) >= today)
})

const olderConvs = computed(() => {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return conversations.value.filter(c => new Date(c.updatedAt) < today)
})

function newChat() {
  conversationStore.createConversation(
    settingsStore.settings.selectedModel,
    settingsStore.settings.systemPrompt
  )
}

function selectConv(id: string) {
  conversationStore.selectConversation(id)
}

function deleteConv(id: string) {
  conversationStore.deleteConversation(id)
}
</script>

<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  width: 260px;
  height: 100%;
  background: var(--bg-sidebar);
  border-right: 1px solid var(--border-color);
  transition: width 0.2s ease;
  flex-shrink: 0;
  overflow: hidden;
}

.sidebar.collapsed {
  width: 60px;
}

.sidebar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 12px;
  gap: 8px;
  border-bottom: 1px solid var(--border-color);
  flex-shrink: 0;
}

.logo {
  display: flex;
  align-items: center;
  gap: 8px;
}

.logo-icon {
  font-size: 22px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  flex-shrink: 0;
}

.logo-text {
  font-size: 17px;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.3px;
}

.new-chat-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: var(--accent-color);
  border: none;
  border-radius: 8px;
  color: #fff;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s;
  white-space: nowrap;
  flex-shrink: 0;
}

.new-chat-btn:hover {
  background: var(--accent-hover);
}

.new-chat-btn svg {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
}

.sidebar.collapsed .new-chat-btn {
  padding: 6px;
  border-radius: 8px;
}

.conv-list {
  flex: 1;
  overflow-y: auto;
  padding: 8px 6px;
}

.conv-list::-webkit-scrollbar {
  width: 3px;
}

.conv-list::-webkit-scrollbar-thumb {
  background: var(--border-color);
  border-radius: 2px;
}

.conv-section-title {
  padding: 8px 8px 4px;
  font-size: 11px;
  font-weight: 600;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.8px;
}

.empty-state {
  text-align: center;
  padding: 40px 16px;
  font-size: 13px;
  color: var(--text-muted);
}

.sidebar-bottom {
  padding: 8px 6px;
  border-top: 1px solid var(--border-color);
  flex-shrink: 0;
}

.settings-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 9px 10px;
  background: transparent;
  border: none;
  border-radius: 8px;
  color: var(--text-secondary);
  font-size: 13px;
  cursor: pointer;
  transition: all 0.15s;
  text-align: left;
}

.settings-btn:hover {
  background: var(--bg-hover);
  color: var(--text-primary);
}

.settings-btn svg {
  width: 17px;
  height: 17px;
  flex-shrink: 0;
}
</style>
