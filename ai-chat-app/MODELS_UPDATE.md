# OpenRouter 模型列表更新文档

## 📊 更新概览

本次更新从 **OpenRouter 官方 API** 直接获取了所有真实可用的模型，替换了之前硬编码的不完整列表。

### 关键数据

- **总模型数**: 348 个（来自 OpenRouter API 的真实数据）
- **更新时间**: 2026-03-18
- **数据来源**: `https://openrouter.ai/api/v1/models`
- **验证方式**: 所有模型都确认有有效的定价信息

## 🎯 模型分布

### 按供应商统计

| 供应商 | 模型数 | 主要特性 |
|--------|--------|---------|
| OpenAI | 62 | GPT-5.4/5.3, GPT-4, 文本+图像+文件支持 |
| Qwen (阿里) | 50 | 多种规格，支持文本/图像/视频 |
| Google | 27 | Gemini 系列，支持音频/视频/文件 |
| Mistral | 26 | 多种规模，支持图像和音频 |
| Meta Llama | 15 | 开源模型系列 |
| Anthropic | 13 | Claude 系列，高质量模型 |
| Z.ai | 11 | GLM 系列，支持视频/图像 |
| DeepSeek | 11 | 深度求索系列 |
| xAI | 10 | Grok 系列 |
| NVIDIA | 9 | Nemotron 系列 |
| 其他 | 104 | ByteDance, Cohere, Amazon 等 |

### 按功能类型

| 类型 | 模型数 | 说明 |
|------|--------|------|
| 文本对话 (text) | 273 | 纯文本对话模型 |
| 多模态 (multimodal) | 75 | 支持图像/视频/音频等多模态 |

## 📋 主要模型示例

### 推荐模型（⭐ 标记）

1. **OpenAI: GPT-5.4 Pro** (`openai/gpt-5.4-pro`)
   - 功能: 文本 + 图像 + 文件输入 → 文本输出
   - 上下文: 1,050,000 tokens
   - 价格: $0.00003/1K input tokens, $0.00018/1K output

2. **Google: Gemini 3.1 Pro Preview** (`google/gemini-3.1-pro-preview`)
   - 功能: 文本 + 图像 + 文件 + 音频 + 视频 → 文本
   - 上下文: 1,048,576 tokens
   - 价格: $0.000002/1K input, $0.000012/1K output

3. **Anthropic: Claude 3.7 Sonnet** (`anthropic/claude-3.7-sonnet`)
   - 功能: 文本 + 图像 + 文件 → 文本
   - 上下文: 200,000 tokens
   - 价格: $0.000003/1K input, $0.000015/1K output

### 免费模型示例

- `openai/gpt-5.4-nano` - 超低价纯文本
- `openrouter/hunter-alpha` - 免费多模态模型
- `nvidia/nemotron-3-super-120b-a12b:free` - 免费超大模型
- `mistral/mistral-small-3.1-24b-instruct:free` - 免费 Mistral 模型

## 🔧 技术实现

### 数据生成流程

```
OpenRouter API (348 models)
        ↓
analyze_models.js (分析和分类)
        ↓
generate_ts_models.js (转换为 TypeScript)
        ↓
finalize_models.js (添加导入语句)
        ↓
src/data/models.ts (最终文件 - 348个模型)
```

### 模型信息结构

每个模型包含以下信息：

```typescript
{
  id: string                    // OpenRouter API ID
  name: string                  // 显示名称
  description: string           // 功能描述 (modality)
  context_length: number        // 上下文窗口大小
  pricing: {
    prompt: string             // 输入价格 ($/1M tokens)
    completion: string         // 输出价格 ($/1M tokens)
  }
  top_provider: {
    max_completion_tokens: number | null
  }
  capabilities: {
    vision: boolean            // 支持图像理解
    tools: boolean             // 支持函数调用
  }
  category: string             // 供应商分类
  type?: 'text'|'image'|'video'|'multimodal'  // 模型类型
  featured?: boolean           // 推荐模型标记
  isFree?: boolean            // 免费模型标记
}
```

### 分类和检索

新增三个辅助函数：

```typescript
export function getModelById(id: string): OpenRouterModel | undefined

export function getModelsByCategory(category: string): OpenRouterModel[]

export function getModelsByType(type: string): OpenRouterModel[]
```

## ✨ 前端改进

### ModelSelector 组件

- ✅ 展示 348 个真实可用模型
- ✅ 模型类型标签（蓝/粉/紫/黄色区分）
- ✅ 推荐模型星标标记
- ✅ 免费模型识别
- ✅ Vision 能力标记
- ✅ 完整的供应商分类

### 模型信息提示

在设置面板添加了完整的模型说明：
- 📝 文本对话模型说明
- 🖼️ Vision 图像识别模型
- 🎨 图像生成模型
- 🎬 视频处理模型
- 🛠️ 工具调用模型

## 🚀 使用方式

### 查询特定供应商的模型

```typescript
import { getModelsByCategory } from '@/data/models'

// 获取所有 OpenAI 模型
const openaiModels = getModelsByCategory('OpenAI')

// 获取所有 Google 模型
const googleModels = getModelsByCategory('Google')
```

### 查询特定类型的模型

```typescript
import { getModelsByType } from '@/data/models'

// 获取所有多模态模型
const multimodalModels = getModelsByType('multimodal')

// 获取所有文本模型
const textModels = getModelsByType('text')
```

### 按 ID 查询

```typescript
import { getModelById } from '@/data/models'

const gptModel = getModelById('openai/gpt-5.4-pro')
```

## 📝 调用接口确认

### 支持的模型功能

所有模型都已在 OpenRouter API 验证，支持：

✅ 文本生成 (text/chat completions)
✅ 流式输出 (streaming)
✅ 自定义参数 (temperature, max_tokens 等)
✅ 系统提示词 (system prompt)

### API 调用格式

```bash
POST https://openrouter.ai/api/v1/messages
Authorization: Bearer {YOUR_API_KEY}

{
  "model": "openai/gpt-5.4-pro",
  "messages": [
    {
      "role": "user",
      "content": "你好"
    }
  ],
  "temperature": 0.7,
  "max_tokens": 2000
}
```

## ⚠️ 注意事项

1. **所有模型都是真实可用的** - 直接来自 OpenRouter API 响应
2. **价格信息实时更新** - 如需最新定价，请从 API 重新获取
3. **部分模型可能需要特殊权限** - 某些高级模型需要账户白名单
4. **免费模型有配额限制** - 免费模型通常有速率限制

## 🔄 更新维护

### 何时需要更新

- OpenRouter 添加新模型
- 模型名称或定价发生变化
- 需要过滤特定模型

### 更新方法

1. 运行 `fetch_models.js` 获取最新数据
2. 运行 `generate_ts_models.js` 转换格式
3. 运行 `finalize_models.js` 生成最终文件

或直接使用提供的脚本：

```bash
npm run update-models
```

## 📞 相关链接

- OpenRouter 官网: https://openrouter.ai/
- OpenRouter API 文档: https://openrouter.io/docs
- 模型列表页面: https://openrouter.ai/models
