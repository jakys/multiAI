<template>
  <div class="model-selector">
    <div class="selector-trigger" @click="toggleDropdown" :class="{ open: isOpen }">
      <div class="model-info">
        <span class="model-category-badge" :style="{ background: getCategoryColor(currentModel?.category || '') }">
          {{ currentModel?.category || 'AI' }}
        </span>
        <span class="model-name">{{ currentModel?.name || selectedModelId }}</span>
      </div>
      <div class="selector-right">
        <span v-if="currentModel?.capabilities.vision" class="cap-badge vision" title="支持视觉">👁</span>
        <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </div>
    </div>

    <!-- Dropdown -->
    <Transition name="dropdown">
      <div v-if="isOpen" class="dropdown" v-click-outside="closeDropdown">
        <!-- Search -->
        <div class="search-wrap">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <input
            ref="searchInput"
            v-model="searchQuery"
            placeholder="搜索模型..."
            class="search-input"
            @keydown.esc="closeDropdown"
          />
        </div>

        <!-- Category Tabs -->
        <div class="category-tabs">
          <button
            v-for="cat in displayedCategories"
            :key="cat"
            class="cat-tab"
            :class="{ active: activeCategory === cat }"
            @click="activeCategory = cat"
          >
            {{ cat }}
          </button>
        </div>

        <!-- Model List -->
        <div class="model-list">
          <div
            v-for="model in filteredModels"
            :key="model.id"
            class="model-option"
            :class="{ selected: model.id === selectedModelId }"
            @click="selectModel(model.id)"
          >
            <div class="option-left">
              <span class="option-name">{{ model.name }}</span>
              <span class="option-desc">{{ model.description }}</span>
            </div>
            <div class="option-right">
              <span v-if="model.type" class="type-tag" :class="model.type">{{ getTypeLabel(model.type) }}</span>
              <span v-if="model.featured" class="featured-star">⭐</span>
              <span v-if="model.capabilities.vision" class="cap-tag vision">Vision</span>
              <span v-if="model.capabilities.tools" class="cap-tag tools">Tools</span>
              <span v-if="model.context_length" class="ctx-tag">{{ formatCtx(model.context_length) }}</span>
              <span v-if="model.pricing.prompt === '0'" class="price-free">Free</span>
            </div>
          </div>
          <div v-if="filteredModels.length === 0" class="no-results">
            未找到匹配的模型
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, nextTick } from 'vue'
import { OPENROUTER_MODELS, MODEL_CATEGORIES, getModelById } from '../data/models'

const props = defineProps<{
  modelValue: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const isOpen = ref(false)
const searchQuery = ref('')
const activeCategory = ref('全部')
const searchInput = ref<HTMLInputElement | null>(null)

const selectedModelId = computed(() => props.modelValue)
const currentModel = computed(() => getModelById(props.modelValue))

const displayedCategories = computed(() => ['全部', ...MODEL_CATEGORIES])

const filteredModels = computed(() => {
  let models = OPENROUTER_MODELS
  if (activeCategory.value !== '全部') {
    models = models.filter(m => m.category === activeCategory.value)
  }
  if (searchQuery.value.trim()) {
    const q = searchQuery.value.toLowerCase()
    models = models.filter(m =>
      m.name.toLowerCase().includes(q) ||
      m.id.toLowerCase().includes(q) ||
      m.description.toLowerCase().includes(q)
    )
  }
  return models
})

const CATEGORY_COLORS: Record<string, string> = {
  OpenAI: '#10a37f',
  Anthropic: '#c5704b',
  Google: '#4285f4',
  Meta: '#0866ff',
  DeepSeek: '#1677ff',
  Mistral: '#f7931a',
  Qwen: '#ff6a00',
  xAI: '#1da1f2',
  Cohere: '#d33d7f',
  Free: '#6366f1',
  'Image Generation': '#ec4899',
  'Video Generation': '#8b5cf6',
  'Video Processing': '#06b6d4',
}

function getCategoryColor(cat: string) {
  return CATEGORY_COLORS[cat] || '#6b7280'
}

function getTypeLabel(type: string): string {
  const typeLabels: Record<string, string> = {
    text: '文本',
    image: '图像',
    video: '视频',
    multimodal: '多模'
  }
  return typeLabels[type] || type
}

function formatCtx(len: number) {
  if (len >= 1000000) return `${(len / 1000000).toFixed(1)}M`
  if (len >= 1000) return `${Math.round(len / 1000)}K`
  return String(len)
}

async function toggleDropdown() {
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    await nextTick()
    searchInput.value?.focus()
  }
}

function closeDropdown() {
  isOpen.value = false
  searchQuery.value = ''
}

function selectModel(id: string) {
  emit('update:modelValue', id)
  closeDropdown()
}

// v-click-outside directive
const vClickOutside = {
  mounted(el: HTMLElement, binding: any) {
    const clickOutside = (e: MouseEvent) => {
      if (!el.contains(e.target as Node)) binding.value()
    }
    ;(el as any)._clickOutside = clickOutside
    document.addEventListener('mousedown', clickOutside)
  },
  unmounted(el: HTMLElement) {
    const clickOutside = (el as any)._clickOutside
    if (clickOutside) {
      document.removeEventListener('mousedown', clickOutside)
    }
  }
}
</script>

<style scoped>
.model-selector {
  position: relative;
  z-index: 100;
}

.selector-trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 8px 12px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.15s;
  min-width: 220px;
  user-select: none;
}

.selector-trigger:hover,
.selector-trigger.open {
  border-color: var(--accent-color);
  background: var(--bg-hover);
}

.model-info {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
}

.model-category-badge {
  flex-shrink: 0;
  padding: 2px 7px;
  border-radius: 4px;
  font-size: 10px;
  font-weight: 700;
  color: #fff;
  letter-spacing: 0.3px;
  text-transform: uppercase;
}

.model-name {
  font-size: 13px;
  font-weight: 500;
  color: var(--text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.selector-right {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
}

.cap-badge {
  font-size: 12px;
}

.chevron {
  width: 14px;
  height: 14px;
  color: var(--text-muted);
  transition: transform 0.2s;
}

.selector-trigger.open .chevron {
  transform: rotate(180deg);
}

/* Dropdown */
.dropdown {
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  right: 0;
  min-width: 380px;
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
  overflow: hidden;
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.15s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-6px) scale(0.98);
}

.search-wrap {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  border-bottom: 1px solid var(--border-color);
}

.search-wrap svg {
  width: 15px;
  height: 15px;
  color: var(--text-muted);
  flex-shrink: 0;
}

.search-input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  font-size: 13px;
  color: var(--text-primary);
}

.search-input::placeholder {
  color: var(--text-muted);
}

.category-tabs {
  display: flex;
  gap: 2px;
  padding: 8px 10px;
  border-bottom: 1px solid var(--border-color);
  overflow-x: auto;
  scrollbar-width: none;
}

.cat-tab {
  flex-shrink: 0;
  padding: 4px 10px;
  border-radius: 6px;
  border: none;
  background: transparent;
  color: var(--text-secondary);
  font-size: 12px;
  cursor: pointer;
  transition: all 0.15s;
  white-space: nowrap;
}

.cat-tab:hover {
  background: var(--bg-hover);
  color: var(--text-primary);
}

.cat-tab.active {
  background: var(--accent-color);
  color: #fff;
}

.model-list {
  max-height: 320px;
  overflow-y: auto;
  padding: 6px;
}

.model-list::-webkit-scrollbar {
  width: 4px;
}

.model-list::-webkit-scrollbar-thumb {
  background: var(--border-color);
  border-radius: 2px;
}

.model-option {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 9px 10px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.12s;
}

.model-option:hover {
  background: var(--bg-hover);
}

.model-option.selected {
  background: rgba(99, 102, 241, 0.12);
}

.option-left {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

.option-name {
  font-size: 13px;
  font-weight: 500;
  color: var(--text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.option-desc {
  font-size: 11px;
  color: var(--text-muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.option-right {
  display: flex;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
}

.cap-tag, .ctx-tag, .price-free {
  padding: 2px 5px;
  border-radius: 4px;
  font-size: 10px;
  font-weight: 600;
  white-space: nowrap;
}

.type-tag {
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 10px;
  font-weight: 600;
  white-space: nowrap;
  color: #fff;
}

.type-tag.text {
  background: #3b82f6;
}

.type-tag.image {
  background: #ec4899;
}

.type-tag.video {
  background: #8b5cf6;
}

.type-tag.multimodal {
  background: #f59e0b;
}

.featured-star {
  font-size: 12px;
}

.cap-tag.vision {
  background: rgba(16, 163, 127, 0.15);
  color: #10a37f;
}

.cap-tag.tools {
  background: rgba(99, 102, 241, 0.15);
  color: #818cf8;
}

.ctx-tag {
  background: var(--bg-secondary);
  color: var(--text-muted);
  border: 1px solid var(--border-color);
}

.price-free {
  background: rgba(34, 197, 94, 0.15);
  color: #22c55e;
}

.no-results {
  text-align: center;
  padding: 24px;
  color: var(--text-muted);
  font-size: 13px;
}
</style>
