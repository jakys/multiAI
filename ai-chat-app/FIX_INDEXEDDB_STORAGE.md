# 修复存储空间已满问题

## 问题描述
生成图片时出现错误："存储空间已满，部分对话可能无法保存。建议删除一些旧对话。"

## 根本原因
虽然我们已经将用户上传的图片存储到 IndexedDB，但 AI 生成的图片仍然使用完整的 base64 数据（如 `data:image/png;base64,iVBORw0KG...`）直接存储在 localStorage 中。每个生成的图片可能占用几 MB 空间，导致 localStorage 快速填满。

## 解决方案

### 1. 修改生成的图片存储策略
**文件**: `src/views/ChatView.vue`

**之前**:
```typescript
// 直接存储完整的 base64 URL
generatedImages.push({
  id: imgId,
  url, // 完整的 base64 字符串
  generatedAt: new Date()
})
```

**之后**:
```typescript
// 只存储元数据，图片数据保存到 IndexedDB
saveBase64Image(imgId, `generated-${Date.now()}.${mimeType}`, base64, `image/${mimeType}`)

generatedImages.push({
  id: imgId,
  url: `indexeddb:${imgId}`, // 特殊标记表示在 IndexedDB 中
  name: `generated-${Date.now()}.${mimeType}`,
  generatedAt: new Date()
})
```

### 2. 更新图片显示逻辑
**文件**: `src/components/MessageItem.vue`

添加了以下功能：
- 从 IndexedDB 异步加载图片 Blob
- 创建 Object URL 用于显示
- 缓存 URL 避免重复加载
- 组件卸载时自动清理缓存的 URL

```typescript
// 存储图片的真实 URL（从 IndexedDB 加载）
const generatedImageUrls = useRef<Map<string, string>>(new Map())

// 获取图片的真实 URL
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

// 为模板创建响应式引用
const displayedGeneratedImages = computed(() => {
  if (!props.msg.generatedImages) return []
  return props.msg.generatedImages.map(img => ({
    ...img,
    displayUrl: generatedImageUrls.value.get(img.id) || img.url
  }))
})
```

### 3. 更新下载功能
**文件**: `src/components/MessageItem.vue`

支持下载 IndexedDB 存储的图片：

```typescript
async function downloadGeneratedImage(img: GeneratedImage) {
  if (img.url.startsWith('indexeddb:')) {
    const imgId = img.url.replace('indexeddb:', '')
    const { getImageBlob } = await import('../services/imageStorage')
    const blob = await getImageBlob(imgId)
    if (blob) {
      const url = URL.createObjectURL(blob)
      // 创建下载链接...
      setTimeout(() => URL.revokeObjectURL(url), 100)
    }
  }
  // ... 处理其他类型
}
```

### 4. 更新类型定义
**文件**: `src/types/index.ts`

```typescript
export interface GeneratedImage {
  id: string
  url: string
  name?: string
  format?: string
  size?: number
  generatedAt: Date
  // 使用特殊前缀标记图片存储位置：
  // - url.startsWith('indexeddb:'): 图片存储在 IndexedDB 中
  // - url.startsWith('data:'): 图片是 base64 格式（仅兼容）
  // - url.startsWith('http'): 图片是网络 URL
}
```

## 存储优化效果

### 之前
- 用户上传图片: IndexedDB ✅
- AI 生成图片: localStorage ❌ (每个几 MB)
- **问题**: 生成 5-10 张图片就可能导致 localStorage 满了

### 之后
- 用户上传图片: IndexedDB ✅
- AI 生成图片: IndexedDB ✅
- localStorage: 仅存储元数据（每个对话几 KB）
- **优势**: localStorage 容量限制不再是问题

## URL 前缀协议

使用特殊前缀来区分不同存储位置：

| 前缀 | 示例 | 存储位置 | 说明 |
|------|------|----------|------|
| `indexeddb:` | `indexeddb:abc123` | IndexedDB | 新格式，推荐使用 |
| `data:image/` | `data:image/png;base64,...` | - | 仅用于兼容旧数据 |
| `http://` 或 `https://` | `https://example.com/img.png` | 远程服务器 | 网络图片 |

## 兼容性

- ✅ 新生成的图片使用 IndexedDB 存储
- ✅ 旧数据的 base64 图片仍然可以显示和下载
- ✅ 网络图片继续正常工作
- ✅ 下载数据自动迁移到新存储格式

## 清理建议

如果之前已经生成了大量图片导致 localStorage 已满：

1. 在浏览器中打开开发者工具 (F12)
2. 进入 Application > Local Storage
3. 找到 `ai-chat-conversations` 键
4. 删除它（会清除所有对话历史）
5. 刷新页面重新开始

或者，可以修改 `cleanupOldConversations()` 函数来保留更多对话：
```typescript
// 当前保留最新的 10 个
const KEEP_COUNT = 10
// 可以增加到 20 或更多
const KEEP_COUNT = 20
```
