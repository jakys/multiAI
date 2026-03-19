# 修复图片加载错误 - ERR_UNKNOWN_URL_SCHEME

## 问题描述
生成图片成功后，回显图片时出现控制台错误：
```
indexeddb:0Ye93eJM3MEzCsomhvtuP:1
GET indexeddb:0Ye93eJM3MEzCsomhvtuP net::ERR_UNKNOWN_URL_SCHEME
```

## 根本原因
`indexeddb:` 不是一个有效的 URL scheme。浏览器无法识别 `indexeddb:` 这样的自定义协议，因此无法直接加载图片。

之前的实现中，`displayUrl` 直接使用了 `img.url`，其中包含了 `indexeddb:` 前缀，导致浏览器尝试加载一个无效的 URL。

## 解决方案

### 1. 异步加载 + 响应式更新
**文件**: `src/components/MessageItem.vue`

**核心思路**：
- 图片 URL 为 `indexeddb:xxx` 时，不直接用于 `src` 属性
- 触发异步加载从 IndexedDB 获取 Blob
- 创建真实的 Object URL 并缓存
- 使用响应式引用自动更新界面

```typescript
// 缓存图片的真实 URL（从 IndexedDB 加载）
const generatedImageUrls = useRef<Map<string, string>>(new Map())

// 异步加载图片 URL
async function getGeneratedImageUrl(img: GeneratedImage): Promise<string> {
  if (img.url.startsWith('indexeddb:')) {
    const imgId = img.url.replace('indexeddb:', '')
    const realUrl = await getImageUrl(imgId)
    if (realUrl) {
      generatedImageUrls.value.set(img.id, realUrl)
      return realUrl
    }
  }
  return img.url
}
```

### 2. 响应式计算属性
创建一个计算属性来处理显示逻辑：

```typescript
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
      getGeneratedImageUrl(img).catch(err => {
        console.error('Failed to load generated image:', err)
      })
      // 返回 loading 状态
      return {
        ...img,
        displayUrl: '',
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
```

### 3. 监听新图片
由于图片可能在组件挂载后才被添加（流式响应），需要监听 `generatedImages` 的变化：

```typescript
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
```

### 4. Loading 状态 UI
添加加载状态的视觉反馈：

**模板**：
```vue
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
  <!-- 下载按钮 -->
</div>
```

**样式**：
```css
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
```

## 工作流程

```
1. AI 生成图片
   ↓
2. 保存到 IndexedDB (async)
   ↓
3. 消息更新，添加 generatedImages
   ↓
4. computed 检测到 indexeddb: 前缀
   ↓
5. 触发 getGeneratedImageUrl(img)
   ↓
6. 从 IndexedDB 获取 Blob
   ↓
7. 创建 Object URL: blob:http://...
   ↓
8. 缓存到 generatedImageUrls
   ↓
9. computed 重新计算，返回真实 URL
   ↓
10. img 标签更新，显示图片 ✅
```

## 关键点

### ❌ 错误做法
```vue
<!-- 直接使用包含 indexeddb: 前缀的 URL -->
<img :src="img.url" />
<!-- 结果：ERR_UNKNOWN_URL_SCHEME -->
```

### ✅ 正确做法
```vue
<!-- 先异步加载，获取真实 URL -->
<img :src="img.displayUrl" />
<!-- displayUrl 为空时显示 loading -->
<div v-else class="image-loading">加载中...</div>
```

## 内存管理

### 缓存清理
组件卸载时自动清理缓存的 Object URL：

```typescript
onUnmounted(() => {
  generatedImageUrls.value.forEach(url => URL.revokeObjectURL(url))
  generatedImageUrls.value.clear()
})
```

### 避免内存泄漏
- Object URL 必须手动释放（`URL.revokeObjectURL`）
- 组件卸载时清理所有缓存
- 使用 Map 避免重复加载相同图片

## 性能优化

1. **懒加载**: 图片只在需要时加载
2. **缓存**: 已加载的图片直接使用缓存
3. **异步**: 不阻塞主线程
4. **响应式**: 自动更新 UI

## 测试场景

1. ✅ 生成单张图片，正确显示
2. ✅ 生成多张图片，依次加载
3. ✅ 刷新页面，图片从 IndexedDB 恢复
4. ✅ 快速滚动，不影响加载
5. ✅ 组件卸载，内存正确释放
6. ✅ 下载功能正常工作

## 兼容性

- **IndexedDB**: 所有现代浏览器支持
- **Object URL**: 所有现代浏览器支持
- **Vue 3 Composition API**: 正常工作
- **TypeScript**: 类型检查通过

## 总结

这个修复解决了自定义 URL scheme 导致的加载错误，通过：
1. 异步加载机制
2. 响应式更新
3. Loading 状态反馈
4. 完善的内存管理

实现了一个健壮的图片加载系统，既能利用 IndexedDB 的无限存储，又能提供流畅的用户体验。
