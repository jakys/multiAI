<template>
  <div
    class="conv-item"
    :class="{ active }"
    @click="$emit('select')"
  >
    <div class="conv-icon">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
      </svg>
    </div>
    <div class="conv-info">
      <span class="conv-title">{{ conv.title }}</span>
      <span class="conv-meta">{{ formatDate(conv.updatedAt) }}</span>
    </div>
    <button
      class="del-btn"
      @click.stop="$emit('delete')"
      title="删除"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M3 6h18"/><path d="M19 6l-1 14H6L5 6"/><path d="M8 6V4h8v2"/>
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import type { Conversation } from '../types'

defineProps<{
  conv: Conversation
  active: boolean
}>()
defineEmits<{
  select: []
  delete: []
}>()

function formatDate(date: Date | string) {
  const d = new Date(date)
  const now = new Date()
  const diff = now.getTime() - d.getTime()
  if (diff < 60000) return '刚刚'
  if (diff < 3600000) return `${Math.floor(diff / 60000)}分钟前`
  if (diff < 86400000) return d.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })
  return d.toLocaleDateString('zh-CN', { month: 'short', day: 'numeric' })
}
</script>

<style scoped>
.conv-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 10px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.12s;
  position: relative;
}

.conv-item:hover {
  background: var(--bg-hover);
}

.conv-item.active {
  background: var(--bg-active);
}

.conv-icon {
  flex-shrink: 0;
  color: var(--text-muted);
}

.conv-icon svg {
  width: 15px;
  height: 15px;
}

.conv-info {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.conv-title {
  font-size: 13px;
  color: var(--text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 400;
}

.conv-meta {
  font-size: 11px;
  color: var(--text-muted);
}

.del-btn {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  color: var(--text-muted);
  cursor: pointer;
  border-radius: 4px;
  opacity: 0;
  transition: all 0.15s;
}

.conv-item:hover .del-btn {
  opacity: 1;
}

.del-btn:hover {
  background: rgba(239, 68, 68, 0.15);
  color: #ef4444;
}

.del-btn svg {
  width: 13px;
  height: 13px;
}
</style>
