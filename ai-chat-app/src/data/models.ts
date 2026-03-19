import type { OpenRouterModel } from '../types'

export const OPENROUTER_MODELS: OpenRouterModel[] = [
  {
    id: 'openai/gpt-5.4-pro',
    name: 'OpenAI: GPT-5.4 Pro',
    description: 'text+image+file->text',
    context_length: 1050000,
    pricing: {
      prompt: '0.00003',
      completion: '0.00018',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'OpenAI',
    type: 'multimodal',
    featured: true,
  },
  {
    id: 'google/gemini-3.1-pro-preview',
    name: 'Google: Gemini 3.1 Pro Preview',
    description: 'text+image+file+audio+video->text',
    context_length: 1048576,
    pricing: {
      prompt: '0.000002',
      completion: '0.000012',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Google',
    type: 'multimodal',
    featured: true,
  },
  {
    id: 'anthropic/claude-3.7-sonnet',
    name: 'Anthropic: Claude 3.7 Sonnet',
    description: 'text+image+file->text',
    context_length: 200000,
    pricing: {
      prompt: '0.000003',
      completion: '0.000015',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Anthropic',
    type: 'multimodal',
    featured: true,
  },
  {
    id: 'openai/gpt-5.4-nano',
    name: 'OpenAI: GPT-5.4 Nano',
    description: 'text+image+file->text',
    context_length: 400000,
    pricing: {
      prompt: '0.0000002',
      completion: '0.00000125',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'OpenAI',
    type: 'multimodal',
    isFree: true,
  },
  {
    id: 'openai/gpt-5.4-mini',
    name: 'OpenAI: GPT-5.4 Mini',
    description: 'text+image+file->text',
    context_length: 400000,
    pricing: {
      prompt: '0.00000075',
      completion: '0.0000045',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'OpenAI',
    type: 'multimodal',
    isFree: true,
  },
  {
    id: 'openai/gpt-audio-mini',
    name: 'OpenAI: GPT Audio Mini',
    description: 'text+audio->text+audio',
    context_length: 128000,
    pricing: {
      prompt: '0.0000006',
      completion: '0.0000024',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'OpenAI',
    type: 'text',
    isFree: true,
  },
  {
    id: 'openai/gpt-5.1-codex-mini',
    name: 'OpenAI: GPT-5.1-Codex-Mini',
    description: 'text+image->text',
    context_length: 400000,
    pricing: {
      prompt: '0.00000025',
      completion: '0.000002',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'OpenAI',
    type: 'text',
    isFree: true,
  },
  {
    id: 'openai/gpt-oss-safeguard-20b',
    name: 'OpenAI: gpt-oss-safeguard-20b',
    description: 'text->text',
    context_length: 131072,
    pricing: {
      prompt: '0.000000075',
      completion: '0.0000003',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'OpenAI',
    type: 'text',
    isFree: true,
  },
  {
    id: 'openai/gpt-5-mini',
    name: 'OpenAI: GPT-5 Mini',
    description: 'text+image+file->text',
    context_length: 400000,
    pricing: {
      prompt: '0.00000025',
      completion: '0.000002',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'OpenAI',
    type: 'multimodal',
    isFree: true,
  },
  {
    id: 'openai/gpt-5-nano',
    name: 'OpenAI: GPT-5 Nano',
    description: 'text+image+file->text',
    context_length: 400000,
    pricing: {
      prompt: '0.00000005',
      completion: '0.0000004',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'OpenAI',
    type: 'multimodal',
    isFree: true,
  },
  {
    id: 'openai/gpt-oss-120b:free',
    name: 'OpenAI: gpt-oss-120b (free)',
    description: 'text->text',
    context_length: 131072,
    pricing: {
      prompt: '0',
      completion: '0',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'OpenAI',
    type: 'text',
    isFree: true,
  },
  {
    id: 'openai/gpt-oss-120b',
    name: 'OpenAI: gpt-oss-120b',
    description: 'text->text',
    context_length: 131072,
    pricing: {
      prompt: '0.000000039',
      completion: '0.00000019',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'OpenAI',
    type: 'text',
    isFree: true,
  },
  {
    id: 'openai/gpt-oss-20b:free',
    name: 'OpenAI: gpt-oss-20b (free)',
    description: 'text->text',
    context_length: 131072,
    pricing: {
      prompt: '0',
      completion: '0',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'OpenAI',
    type: 'text',
    isFree: true,
  },
  {
    id: 'openai/gpt-oss-20b',
    name: 'OpenAI: gpt-oss-20b',
    description: 'text->text',
    context_length: 131072,
    pricing: {
      prompt: '0.00000003',
      completion: '0.00000014',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'OpenAI',
    type: 'text',
    isFree: true,
  },
  {
    id: 'openai/gpt-4.1-mini',
    name: 'OpenAI: GPT-4.1 Mini',
    description: 'text+image+file->text',
    context_length: 1047576,
    pricing: {
      prompt: '0.0000004',
      completion: '0.0000016',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'OpenAI',
    type: 'multimodal',
    isFree: true,
  },
  {
    id: 'openai/gpt-4.1-nano',
    name: 'OpenAI: GPT-4.1 Nano',
    description: 'text+image+file->text',
    context_length: 1047576,
    pricing: {
      prompt: '0.0000001',
      completion: '0.0000004',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'OpenAI',
    type: 'multimodal',
    isFree: true,
  },
  {
    id: 'openai/gpt-4o-mini-search-preview',
    name: 'OpenAI: GPT-4o-mini Search Preview',
    description: 'text->text',
    context_length: 128000,
    pricing: {
      prompt: '0.00000015',
      completion: '0.0000006',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'OpenAI',
    type: 'text',
    isFree: true,
  },
  {
    id: 'openai/gpt-4o-mini-2024-07-18',
    name: 'OpenAI: GPT-4o-mini (2024-07-18)',
    description: 'text+image+file->text',
    context_length: 128000,
    pricing: {
      prompt: '0.00000015',
      completion: '0.0000006',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'OpenAI',
    type: 'multimodal',
    isFree: true,
  },
  {
    id: 'openai/gpt-4o-mini',
    name: 'OpenAI: GPT-4o-mini',
    description: 'text+image+file->text',
    context_length: 128000,
    pricing: {
      prompt: '0.00000015',
      completion: '0.0000006',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'OpenAI',
    type: 'multimodal',
    isFree: true,
  },
  {
    id: 'openai/gpt-3.5-turbo',
    name: 'OpenAI: GPT-3.5 Turbo',
    description: 'text->text',
    context_length: 16385,
    pricing: {
      prompt: '0.0000005',
      completion: '0.0000015',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'OpenAI',
    type: 'text',
    isFree: true,
  },
  {
    id: 'mistralai/mistral-small-2603',
    name: 'Mistral: Mistral Small 4',
    description: 'text+image->text',
    context_length: 262144,
    pricing: {
      prompt: '0.00000015',
      completion: '0.0000006',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Mistral',
    type: 'text',
    isFree: true,
  },
  {
    id: 'mistralai/mistral-small-creative',
    name: 'Mistral: Mistral Small Creative',
    description: 'text->text',
    context_length: 32768,
    pricing: {
      prompt: '0.0000001',
      completion: '0.0000003',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Mistral',
    type: 'text',
    isFree: true,
  },
  {
    id: 'mistralai/devstral-2512',
    name: 'Mistral: Devstral 2 2512',
    description: 'text->text',
    context_length: 262144,
    pricing: {
      prompt: '0.0000004',
      completion: '0.000002',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Mistral',
    type: 'text',
    isFree: true,
  },
  {
    id: 'mistralai/ministral-14b-2512',
    name: 'Mistral: Ministral 3 14B 2512',
    description: 'text+image->text',
    context_length: 262144,
    pricing: {
      prompt: '0.0000002',
      completion: '0.0000002',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Mistral',
    type: 'text',
    isFree: true,
  },
  {
    id: 'mistralai/ministral-8b-2512',
    name: 'Mistral: Ministral 3 8B 2512',
    description: 'text+image->text',
    context_length: 262144,
    pricing: {
      prompt: '0.00000015',
      completion: '0.00000015',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Mistral',
    type: 'text',
    isFree: true,
  },
  {
    id: 'mistralai/ministral-3b-2512',
    name: 'Mistral: Ministral 3 3B 2512',
    description: 'text+image->text',
    context_length: 131072,
    pricing: {
      prompt: '0.0000001',
      completion: '0.0000001',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Mistral',
    type: 'text',
    isFree: true,
  },
  {
    id: 'mistralai/mistral-large-2512',
    name: 'Mistral: Mistral Large 3 2512',
    description: 'text+image->text',
    context_length: 262144,
    pricing: {
      prompt: '0.0000005',
      completion: '0.0000015',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Mistral',
    type: 'text',
    isFree: true,
  },
  {
    id: 'mistralai/voxtral-small-24b-2507',
    name: 'Mistral: Voxtral Small 24B 2507',
    description: 'text+audio->text',
    context_length: 32000,
    pricing: {
      prompt: '0.0000001',
      completion: '0.0000003',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Mistral',
    type: 'text',
    isFree: true,
  },
  {
    id: 'mistralai/mistral-medium-3.1',
    name: 'Mistral: Mistral Medium 3.1',
    description: 'text+image->text',
    context_length: 131072,
    pricing: {
      prompt: '0.0000004',
      completion: '0.000002',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Mistral',
    type: 'text',
    isFree: true,
  },
  {
    id: 'mistralai/codestral-2508',
    name: 'Mistral: Codestral 2508',
    description: 'text->text',
    context_length: 256000,
    pricing: {
      prompt: '0.0000003',
      completion: '0.0000009',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Mistral',
    type: 'text',
    isFree: true,
  },
  {
    id: 'mistralai/devstral-medium',
    name: 'Mistral: Devstral Medium',
    description: 'text->text',
    context_length: 131072,
    pricing: {
      prompt: '0.0000004',
      completion: '0.000002',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Mistral',
    type: 'text',
    isFree: true,
  },
  {
    id: 'mistralai/devstral-small',
    name: 'Mistral: Devstral Small 1.1',
    description: 'text->text',
    context_length: 131072,
    pricing: {
      prompt: '0.0000001',
      completion: '0.0000003',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Mistral',
    type: 'text',
    isFree: true,
  },
  {
    id: 'mistralai/mistral-small-3.2-24b-instruct',
    name: 'Mistral: Mistral Small 3.2 24B',
    description: 'text+image->text',
    context_length: 131072,
    pricing: {
      prompt: '0.00000006',
      completion: '0.00000018',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Mistral',
    type: 'text',
    isFree: true,
  },
  {
    id: 'mistralai/mistral-medium-3',
    name: 'Mistral: Mistral Medium 3',
    description: 'text+image->text',
    context_length: 131072,
    pricing: {
      prompt: '0.0000004',
      completion: '0.000002',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Mistral',
    type: 'text',
    isFree: true,
  },
  {
    id: 'mistralai/mistral-small-3.1-24b-instruct:free',
    name: 'Mistral: Mistral Small 3.1 24B (free)',
    description: 'text+image->text',
    context_length: 128000,
    pricing: {
      prompt: '0',
      completion: '0',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Mistral',
    type: 'text',
    isFree: true,
  },
  {
    id: 'mistralai/mistral-small-3.1-24b-instruct',
    name: 'Mistral: Mistral Small 3.1 24B',
    description: 'text+image->text',
    context_length: 128000,
    pricing: {
      prompt: '0.00000035',
      completion: '0.00000056',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Mistral',
    type: 'text',
    isFree: true,
  },
  {
    id: 'mistralai/mistral-saba',
    name: 'Mistral: Saba',
    description: 'text->text',
    context_length: 32768,
    pricing: {
      prompt: '0.0000002',
      completion: '0.0000006',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Mistral',
    type: 'text',
    isFree: true,
  },
  {
    id: 'mistralai/mistral-small-24b-instruct-2501',
    name: 'Mistral: Mistral Small 3',
    description: 'text->text',
    context_length: 32768,
    pricing: {
      prompt: '0.00000005',
      completion: '0.00000008',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Mistral',
    type: 'text',
    isFree: true,
  },
  {
    id: 'mistralai/mistral-nemo',
    name: 'Mistral: Mistral Nemo',
    description: 'text->text',
    context_length: 131072,
    pricing: {
      prompt: '0.00000002',
      completion: '0.00000004',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Mistral',
    type: 'text',
    isFree: true,
  },
  {
    id: 'mistralai/mixtral-8x7b-instruct',
    name: 'Mistral: Mixtral 8x7B Instruct',
    description: 'text->text',
    context_length: 32768,
    pricing: {
      prompt: '0.00000054',
      completion: '0.00000054',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Mistral',
    type: 'text',
    isFree: true,
  },
  {
    id: 'mistralai/mistral-7b-instruct-v0.1',
    name: 'Mistral: Mistral 7B Instruct v0.1',
    description: 'text->text',
    context_length: 2824,
    pricing: {
      prompt: '0.00000011',
      completion: '0.00000019',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Mistral',
    type: 'text',
    isFree: true,
  },
  {
    id: 'z-ai/glm-5-turbo',
    name: 'Z.ai: GLM 5 Turbo',
    description: 'text->text',
    context_length: 202752,
    pricing: {
      prompt: '0.00000096',
      completion: '0.0000032',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Z-ai',
    type: 'text',
    isFree: true,
  },
  {
    id: 'z-ai/glm-5',
    name: 'Z.ai: GLM 5',
    description: 'text->text',
    context_length: 80000,
    pricing: {
      prompt: '0.00000072',
      completion: '0.0000023',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Z-ai',
    type: 'text',
    isFree: true,
  },
  {
    id: 'z-ai/glm-4.7-flash',
    name: 'Z.ai: GLM 4.7 Flash',
    description: 'text->text',
    context_length: 202752,
    pricing: {
      prompt: '0.00000006',
      completion: '0.0000004',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Z-ai',
    type: 'text',
    isFree: true,
  },
  {
    id: 'z-ai/glm-4.7',
    name: 'Z.ai: GLM 4.7',
    description: 'text->text',
    context_length: 202752,
    pricing: {
      prompt: '0.00000038',
      completion: '0.00000198',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Z-ai',
    type: 'text',
    isFree: true,
  },
  {
    id: 'z-ai/glm-4.6v',
    name: 'Z.ai: GLM 4.6V',
    description: 'text+image+video->text',
    context_length: 131072,
    pricing: {
      prompt: '0.0000003',
      completion: '0.0000009',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Z-ai',
    type: 'multimodal',
    isFree: true,
  },
  {
    id: 'z-ai/glm-4.6',
    name: 'Z.ai: GLM 4.6',
    description: 'text->text',
    context_length: 204800,
    pricing: {
      prompt: '0.00000039',
      completion: '0.0000019',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Z-ai',
    type: 'text',
    isFree: true,
  },
  {
    id: 'z-ai/glm-4.5v',
    name: 'Z.ai: GLM 4.5V',
    description: 'text+image->text',
    context_length: 65536,
    pricing: {
      prompt: '0.0000006',
      completion: '0.0000018',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Z-ai',
    type: 'text',
    isFree: true,
  },
  {
    id: 'z-ai/glm-4.5',
    name: 'Z.ai: GLM 4.5',
    description: 'text->text',
    context_length: 131072,
    pricing: {
      prompt: '0.0000006',
      completion: '0.0000022',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Z-ai',
    type: 'text',
    isFree: true,
  },
  {
    id: 'z-ai/glm-4.5-air:free',
    name: 'Z.ai: GLM 4.5 Air (free)',
    description: 'text->text',
    context_length: 131072,
    pricing: {
      prompt: '0',
      completion: '0',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Z-ai',
    type: 'text',
    isFree: true,
  },
  {
    id: 'z-ai/glm-4.5-air',
    name: 'Z.ai: GLM 4.5 Air',
    description: 'text->text',
    context_length: 131072,
    pricing: {
      prompt: '0.00000013',
      completion: '0.00000085',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Z-ai',
    type: 'text',
    isFree: true,
  },
  {
    id: 'z-ai/glm-4-32b',
    name: 'Z.ai: GLM 4 32B ',
    description: 'text->text',
    context_length: 128000,
    pricing: {
      prompt: '0.0000001',
      completion: '0.0000001',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Z-ai',
    type: 'text',
    isFree: true,
  },
  {
    id: 'x-ai/grok-4.1-fast',
    name: 'xAI: Grok 4.1 Fast',
    description: 'text+image->text',
    context_length: 2000000,
    pricing: {
      prompt: '0.0000002',
      completion: '0.0000005',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'xAI',
    type: 'text',
    isFree: true,
  },
  {
    id: 'x-ai/grok-4-fast',
    name: 'xAI: Grok 4 Fast',
    description: 'text+image->text',
    context_length: 2000000,
    pricing: {
      prompt: '0.0000002',
      completion: '0.0000005',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'xAI',
    type: 'text',
    isFree: true,
  },
  {
    id: 'x-ai/grok-code-fast-1',
    name: 'xAI: Grok Code Fast 1',
    description: 'text->text',
    context_length: 256000,
    pricing: {
      prompt: '0.0000002',
      completion: '0.0000015',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'xAI',
    type: 'text',
    isFree: true,
  },
  {
    id: 'x-ai/grok-3-mini',
    name: 'xAI: Grok 3 Mini',
    description: 'text->text',
    context_length: 131072,
    pricing: {
      prompt: '0.0000003',
      completion: '0.0000005',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'xAI',
    type: 'text',
    isFree: true,
  },
  {
    id: 'x-ai/grok-3-mini-beta',
    name: 'xAI: Grok 3 Mini Beta',
    description: 'text->text',
    context_length: 131072,
    pricing: {
      prompt: '0.0000003',
      completion: '0.0000005',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'xAI',
    type: 'text',
    isFree: true,
  },
  {
    id: 'openrouter/hunter-alpha',
    name: 'Hunter Alpha',
    description: 'text+image->text',
    context_length: 1048576,
    pricing: {
      prompt: '0',
      completion: '0',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'OpenRouter',
    type: 'text',
    isFree: true,
  },
  {
    id: 'openrouter/healer-alpha',
    name: 'Healer Alpha',
    description: 'text+image+audio+video->text',
    context_length: 262144,
    pricing: {
      prompt: '0',
      completion: '0',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'OpenRouter',
    type: 'multimodal',
    isFree: true,
  },
  {
    id: 'openrouter/free',
    name: 'Free Models Router',
    description: 'text+image->text',
    context_length: 200000,
    pricing: {
      prompt: '0',
      completion: '0',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'OpenRouter',
    type: 'text',
    isFree: true,
  },
  {
    id: 'openrouter/bodybuilder',
    name: 'Body Builder (beta)',
    description: 'text->text',
    context_length: 128000,
    pricing: {
      prompt: '-1',
      completion: '-1',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'OpenRouter',
    type: 'text',
    isFree: true,
  },
  {
    id: 'openrouter/auto',
    name: 'Auto Router',
    description: 'text+image+file+audio+video->text+image',
    context_length: 2000000,
    pricing: {
      prompt: '-1',
      completion: '-1',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'OpenRouter',
    type: 'multimodal',
    isFree: true,
  },
  {
    id: 'nvidia/nemotron-3-super-120b-a12b:free',
    name: 'NVIDIA: Nemotron 3 Super (free)',
    description: 'text->text',
    context_length: 262144,
    pricing: {
      prompt: '0',
      completion: '0',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'NVIDIA',
    type: 'text',
    isFree: true,
  },
  {
    id: 'nvidia/nemotron-3-nano-30b-a3b:free',
    name: 'NVIDIA: Nemotron 3 Nano 30B A3B (free)',
    description: 'text->text',
    context_length: 256000,
    pricing: {
      prompt: '0',
      completion: '0',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'NVIDIA',
    type: 'text',
    isFree: true,
  },
  {
    id: 'nvidia/nemotron-3-nano-30b-a3b',
    name: 'NVIDIA: Nemotron 3 Nano 30B A3B',
    description: 'text->text',
    context_length: 262144,
    pricing: {
      prompt: '0.00000005',
      completion: '0.0000002',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'NVIDIA',
    type: 'text',
    isFree: true,
  },
  {
    id: 'nvidia/nemotron-nano-12b-v2-vl:free',
    name: 'NVIDIA: Nemotron Nano 12B 2 VL (free)',
    description: 'text+image+video->text',
    context_length: 128000,
    pricing: {
      prompt: '0',
      completion: '0',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'NVIDIA',
    type: 'multimodal',
    isFree: true,
  },
  {
    id: 'nvidia/nemotron-nano-12b-v2-vl',
    name: 'NVIDIA: Nemotron Nano 12B 2 VL',
    description: 'text+image+video->text',
    context_length: 131072,
    pricing: {
      prompt: '0.0000002',
      completion: '0.0000006',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'NVIDIA',
    type: 'multimodal',
    isFree: true,
  },
  {
    id: 'nvidia/llama-3.3-nemotron-super-49b-v1.5',
    name: 'NVIDIA: Llama 3.3 Nemotron Super 49B V1.5',
    description: 'text->text',
    context_length: 131072,
    pricing: {
      prompt: '0.0000001',
      completion: '0.0000004',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'NVIDIA',
    type: 'text',
    isFree: true,
  },
  {
    id: 'nvidia/nemotron-nano-9b-v2:free',
    name: 'NVIDIA: Nemotron Nano 9B V2 (free)',
    description: 'text->text',
    context_length: 128000,
    pricing: {
      prompt: '0',
      completion: '0',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'NVIDIA',
    type: 'text',
    isFree: true,
  },
  {
    id: 'nvidia/nemotron-nano-9b-v2',
    name: 'NVIDIA: Nemotron Nano 9B V2',
    description: 'text->text',
    context_length: 131072,
    pricing: {
      prompt: '0.00000004',
      completion: '0.00000016',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'NVIDIA',
    type: 'text',
    isFree: true,
  },
  {
    id: 'bytedance-seed/seed-2.0-lite',
    name: 'ByteDance Seed: Seed-2.0-Lite',
    description: 'text+image+video->text',
    context_length: 262144,
    pricing: {
      prompt: '0.00000025',
      completion: '0.000002',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'ByteDance',
    type: 'multimodal',
    isFree: true,
  },
  {
    id: 'bytedance-seed/seed-2.0-mini',
    name: 'ByteDance Seed: Seed-2.0-Mini',
    description: 'text+image+video->text',
    context_length: 262144,
    pricing: {
      prompt: '0.0000001',
      completion: '0.0000004',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'ByteDance',
    type: 'multimodal',
    isFree: true,
  },
  {
    id: 'bytedance-seed/seed-1.6-flash',
    name: 'ByteDance Seed: Seed 1.6 Flash',
    description: 'text+image+video->text',
    context_length: 262144,
    pricing: {
      prompt: '0.000000075',
      completion: '0.0000003',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'ByteDance',
    type: 'multimodal',
    isFree: true,
  },
  {
    id: 'bytedance-seed/seed-1.6',
    name: 'ByteDance Seed: Seed 1.6',
    description: 'text+image+video->text',
    context_length: 262144,
    pricing: {
      prompt: '0.00000025',
      completion: '0.000002',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'ByteDance',
    type: 'multimodal',
    isFree: true,
  },
  {
    id: 'qwen/qwen3.5-9b',
    name: 'Qwen: Qwen3.5-9B',
    description: 'text+image+video->text',
    context_length: 256000,
    pricing: {
      prompt: '0.00000005',
      completion: '0.00000015',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Qwen',
    type: 'multimodal',
    isFree: true,
  },
  {
    id: 'qwen/qwen3.5-35b-a3b',
    name: 'Qwen: Qwen3.5-35B-A3B',
    description: 'text+image+video->text',
    context_length: 262144,
    pricing: {
      prompt: '0.0000001625',
      completion: '0.0000013',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Qwen',
    type: 'multimodal',
    isFree: true,
  },
  {
    id: 'qwen/qwen3.5-27b',
    name: 'Qwen: Qwen3.5-27B',
    description: 'text+image+video->text',
    context_length: 262144,
    pricing: {
      prompt: '0.000000195',
      completion: '0.00000156',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Qwen',
    type: 'multimodal',
    isFree: true,
  },
  {
    id: 'qwen/qwen3.5-122b-a10b',
    name: 'Qwen: Qwen3.5-122B-A10B',
    description: 'text+image+video->text',
    context_length: 262144,
    pricing: {
      prompt: '0.00000026',
      completion: '0.00000208',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Qwen',
    type: 'multimodal',
    isFree: true,
  },
  {
    id: 'qwen/qwen3.5-flash-02-23',
    name: 'Qwen: Qwen3.5-Flash',
    description: 'text+image+video->text',
    context_length: 1000000,
    pricing: {
      prompt: '0.000000065',
      completion: '0.00000026',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Qwen',
    type: 'multimodal',
    isFree: true,
  },
  {
    id: 'qwen/qwen3.5-plus-02-15',
    name: 'Qwen: Qwen3.5 Plus 2026-02-15',
    description: 'text+image+video->text',
    context_length: 1000000,
    pricing: {
      prompt: '0.00000026',
      completion: '0.00000156',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Qwen',
    type: 'multimodal',
    isFree: true,
  },
  {
    id: 'qwen/qwen3.5-397b-a17b',
    name: 'Qwen: Qwen3.5 397B A17B',
    description: 'text+image+video->text',
    context_length: 262144,
    pricing: {
      prompt: '0.00000039',
      completion: '0.00000234',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Qwen',
    type: 'multimodal',
    isFree: true,
  },
  {
    id: 'qwen/qwen3-max-thinking',
    name: 'Qwen: Qwen3 Max Thinking',
    description: 'text->text',
    context_length: 262144,
    pricing: {
      prompt: '0.00000078',
      completion: '0.0000039',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Qwen',
    type: 'text',
    isFree: true,
  },
  {
    id: 'qwen/qwen3-coder-next',
    name: 'Qwen: Qwen3 Coder Next',
    description: 'text->text',
    context_length: 262144,
    pricing: {
      prompt: '0.00000012',
      completion: '0.00000075',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Qwen',
    type: 'text',
    isFree: true,
  },
  {
    id: 'qwen/qwen3-vl-32b-instruct',
    name: 'Qwen: Qwen3 VL 32B Instruct',
    description: 'text+image->text',
    context_length: 131072,
    pricing: {
      prompt: '0.000000104',
      completion: '0.000000416',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Qwen',
    type: 'text',
    isFree: true,
  },
  {
    id: 'qwen/qwen3-vl-8b-thinking',
    name: 'Qwen: Qwen3 VL 8B Thinking',
    description: 'text+image->text',
    context_length: 131072,
    pricing: {
      prompt: '0.000000117',
      completion: '0.000001365',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Qwen',
    type: 'text',
    isFree: true,
  },
  {
    id: 'qwen/qwen3-vl-8b-instruct',
    name: 'Qwen: Qwen3 VL 8B Instruct',
    description: 'text+image->text',
    context_length: 131072,
    pricing: {
      prompt: '0.00000008',
      completion: '0.0000005',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Qwen',
    type: 'text',
    isFree: true,
  },
  {
    id: 'qwen/qwen3-vl-30b-a3b-thinking',
    name: 'Qwen: Qwen3 VL 30B A3B Thinking',
    description: 'text+image->text',
    context_length: 131072,
    pricing: {
      prompt: '0.00000013',
      completion: '0.00000156',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Qwen',
    type: 'text',
    isFree: true,
  },
  {
    id: 'qwen/qwen3-vl-30b-a3b-instruct',
    name: 'Qwen: Qwen3 VL 30B A3B Instruct',
    description: 'text+image->text',
    context_length: 131072,
    pricing: {
      prompt: '0.00000013',
      completion: '0.00000052',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Qwen',
    type: 'text',
    isFree: true,
  },
  {
    id: 'qwen/qwen3-vl-235b-a22b-thinking',
    name: 'Qwen: Qwen3 VL 235B A22B Thinking',
    description: 'text+image->text',
    context_length: 131072,
    pricing: {
      prompt: '0.00000026',
      completion: '0.0000026',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Qwen',
    type: 'text',
    isFree: true,
  },
  {
    id: 'qwen/qwen3-vl-235b-a22b-instruct',
    name: 'Qwen: Qwen3 VL 235B A22B Instruct',
    description: 'text+image->text',
    context_length: 262144,
    pricing: {
      prompt: '0.0000002',
      completion: '0.00000088',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Qwen',
    type: 'text',
    isFree: true,
  },
  {
    id: 'qwen/qwen3-max',
    name: 'Qwen: Qwen3 Max',
    description: 'text->text',
    context_length: 262144,
    pricing: {
      prompt: '0.00000078',
      completion: '0.0000039',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Qwen',
    type: 'text',
    isFree: true,
  },
  {
    id: 'qwen/qwen3-coder-plus',
    name: 'Qwen: Qwen3 Coder Plus',
    description: 'text->text',
    context_length: 1000000,
    pricing: {
      prompt: '0.00000065',
      completion: '0.00000325',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Qwen',
    type: 'text',
    isFree: true,
  },
  {
    id: 'qwen/qwen3-coder-flash',
    name: 'Qwen: Qwen3 Coder Flash',
    description: 'text->text',
    context_length: 1000000,
    pricing: {
      prompt: '0.000000195',
      completion: '0.000000975',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Qwen',
    type: 'text',
    isFree: true,
  },
  {
    id: 'qwen/qwen3-next-80b-a3b-thinking',
    name: 'Qwen: Qwen3 Next 80B A3B Thinking',
    description: 'text->text',
    context_length: 131072,
    pricing: {
      prompt: '0.0000000975',
      completion: '0.00000078',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Qwen',
    type: 'text',
    isFree: true,
  },
  {
    id: 'qwen/qwen3-next-80b-a3b-instruct:free',
    name: 'Qwen: Qwen3 Next 80B A3B Instruct (free)',
    description: 'text->text',
    context_length: 262144,
    pricing: {
      prompt: '0',
      completion: '0',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Qwen',
    type: 'text',
    isFree: true,
  },
  {
    id: 'qwen/qwen3-next-80b-a3b-instruct',
    name: 'Qwen: Qwen3 Next 80B A3B Instruct',
    description: 'text->text',
    context_length: 131072,
    pricing: {
      prompt: '0.00000009',
      completion: '0.0000011',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Qwen',
    type: 'text',
    isFree: true,
  },
  {
    id: 'qwen/qwen-plus-2025-07-28:thinking',
    name: 'Qwen: Qwen Plus 0728 (thinking)',
    description: 'text->text',
    context_length: 1000000,
    pricing: {
      prompt: '0.00000026',
      completion: '0.00000078',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Qwen',
    type: 'text',
    isFree: true,
  },
  {
    id: 'qwen/qwen-plus-2025-07-28',
    name: 'Qwen: Qwen Plus 0728',
    description: 'text->text',
    context_length: 1000000,
    pricing: {
      prompt: '0.00000026',
      completion: '0.00000078',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Qwen',
    type: 'text',
    isFree: true,
  },
  {
    id: 'qwen/qwen3-30b-a3b-thinking-2507',
    name: 'Qwen: Qwen3 30B A3B Thinking 2507',
    description: 'text->text',
    context_length: 32768,
    pricing: {
      prompt: '0.000000051',
      completion: '0.00000034',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Qwen',
    type: 'text',
    isFree: true,
  },
  {
    id: 'qwen/qwen3-coder-30b-a3b-instruct',
    name: 'Qwen: Qwen3 Coder 30B A3B Instruct',
    description: 'text->text',
    context_length: 160000,
    pricing: {
      prompt: '0.00000007',
      completion: '0.00000027',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Qwen',
    type: 'text',
    isFree: true,
  },
  {
    id: 'qwen/qwen3-30b-a3b-instruct-2507',
    name: 'Qwen: Qwen3 30B A3B Instruct 2507',
    description: 'text->text',
    context_length: 262144,
    pricing: {
      prompt: '0.00000009',
      completion: '0.0000003',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Qwen',
    type: 'text',
    isFree: true,
  },
  {
    id: 'qwen/qwen3-235b-a22b-thinking-2507',
    name: 'Qwen: Qwen3 235B A22B Thinking 2507',
    description: 'text->text',
    context_length: 262144,
    pricing: {
      prompt: '0.00000011',
      completion: '0.0000006',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Qwen',
    type: 'text',
    isFree: true,
  },
  {
    id: 'qwen/qwen3-coder:free',
    name: 'Qwen: Qwen3 Coder 480B A35B (free)',
    description: 'text->text',
    context_length: 262000,
    pricing: {
      prompt: '0',
      completion: '0',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Qwen',
    type: 'text',
    isFree: true,
  },
  {
    id: 'qwen/qwen3-coder',
    name: 'Qwen: Qwen3 Coder 480B A35B',
    description: 'text->text',
    context_length: 262144,
    pricing: {
      prompt: '0.00000022',
      completion: '0.000001',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Qwen',
    type: 'text',
    isFree: true,
  },
  {
    id: 'qwen/qwen3-235b-a22b-2507',
    name: 'Qwen: Qwen3 235B A22B Instruct 2507',
    description: 'text->text',
    context_length: 262144,
    pricing: {
      prompt: '0.000000071',
      completion: '0.0000001',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Qwen',
    type: 'text',
    isFree: true,
  },
  {
    id: 'qwen/qwen3-4b:free',
    name: 'Qwen: Qwen3 4B (free)',
    description: 'text->text',
    context_length: 40960,
    pricing: {
      prompt: '0',
      completion: '0',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Qwen',
    type: 'text',
    isFree: true,
  },
  {
    id: 'qwen/qwen3-30b-a3b',
    name: 'Qwen: Qwen3 30B A3B',
    description: 'text->text',
    context_length: 40960,
    pricing: {
      prompt: '0.00000008',
      completion: '0.00000028',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Qwen',
    type: 'text',
    isFree: true,
  },
  {
    id: 'qwen/qwen3-8b',
    name: 'Qwen: Qwen3 8B',
    description: 'text->text',
    context_length: 40960,
    pricing: {
      prompt: '0.00000005',
      completion: '0.0000004',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Qwen',
    type: 'text',
    isFree: true,
  },
  {
    id: 'qwen/qwen3-14b',
    name: 'Qwen: Qwen3 14B',
    description: 'text->text',
    context_length: 40960,
    pricing: {
      prompt: '0.00000006',
      completion: '0.00000024',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Qwen',
    type: 'text',
    isFree: true,
  },
  {
    id: 'qwen/qwen3-32b',
    name: 'Qwen: Qwen3 32B',
    description: 'text->text',
    context_length: 40960,
    pricing: {
      prompt: '0.00000008',
      completion: '0.00000024',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Qwen',
    type: 'text',
    isFree: true,
  },
  {
    id: 'qwen/qwen3-235b-a22b',
    name: 'Qwen: Qwen3 235B A22B',
    description: 'text->text',
    context_length: 131072,
    pricing: {
      prompt: '0.000000455',
      completion: '0.00000182',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Qwen',
    type: 'text',
    isFree: true,
  },
  {
    id: 'qwen/qwen2.5-coder-7b-instruct',
    name: 'Qwen: Qwen2.5 Coder 7B Instruct',
    description: 'text->text',
    context_length: 32768,
    pricing: {
      prompt: '0.00000003',
      completion: '0.00000009',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Qwen',
    type: 'text',
    isFree: true,
  },
  {
    id: 'qwen/qwen2.5-vl-32b-instruct',
    name: 'Qwen: Qwen2.5 VL 32B Instruct',
    description: 'text+image->text',
    context_length: 128000,
    pricing: {
      prompt: '0.0000002',
      completion: '0.0000006',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Qwen',
    type: 'text',
    isFree: true,
  },
  {
    id: 'qwen/qwq-32b',
    name: 'Qwen: QwQ 32B',
    description: 'text->text',
    context_length: 32768,
    pricing: {
      prompt: '0.00000015',
      completion: '0.0000004',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Qwen',
    type: 'text',
    isFree: true,
  },
  {
    id: 'qwen/qwen-vl-plus',
    name: 'Qwen: Qwen VL Plus',
    description: 'text+image->text',
    context_length: 131072,
    pricing: {
      prompt: '0.0000001365',
      completion: '0.0000004095',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Qwen',
    type: 'text',
    isFree: true,
  },
  {
    id: 'qwen/qwen-vl-max',
    name: 'Qwen: Qwen VL Max',
    description: 'text+image->text',
    context_length: 131072,
    pricing: {
      prompt: '0.00000052',
      completion: '0.00000208',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Qwen',
    type: 'text',
    isFree: true,
  },
  {
    id: 'qwen/qwen-turbo',
    name: 'Qwen: Qwen-Turbo',
    description: 'text->text',
    context_length: 131072,
    pricing: {
      prompt: '0.0000000325',
      completion: '0.00000013',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Qwen',
    type: 'text',
    isFree: true,
  },
  {
    id: 'qwen/qwen2.5-vl-72b-instruct',
    name: 'Qwen: Qwen2.5 VL 72B Instruct',
    description: 'text+image->text',
    context_length: 32768,
    pricing: {
      prompt: '0.0000008',
      completion: '0.0000008',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Qwen',
    type: 'text',
    isFree: true,
  },
  {
    id: 'qwen/qwen-plus',
    name: 'Qwen: Qwen-Plus',
    description: 'text->text',
    context_length: 1000000,
    pricing: {
      prompt: '0.00000026',
      completion: '0.00000078',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Qwen',
    type: 'text',
    isFree: true,
  },
  {
    id: 'qwen/qwen-2.5-coder-32b-instruct',
    name: 'Qwen2.5 Coder 32B Instruct',
    description: 'text->text',
    context_length: 32768,
    pricing: {
      prompt: '0.00000066',
      completion: '0.000001',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Qwen',
    type: 'text',
    isFree: true,
  },
  {
    id: 'qwen/qwen-2.5-7b-instruct',
    name: 'Qwen: Qwen2.5 7B Instruct',
    description: 'text->text',
    context_length: 32768,
    pricing: {
      prompt: '0.00000004',
      completion: '0.0000001',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Qwen',
    type: 'text',
    isFree: true,
  },
  {
    id: 'qwen/qwen-2.5-72b-instruct',
    name: 'Qwen2.5 72B Instruct',
    description: 'text->text',
    context_length: 32768,
    pricing: {
      prompt: '0.00000012',
      completion: '0.00000039',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Qwen',
    type: 'text',
    isFree: true,
  },
  {
    id: 'qwen/qwen-2.5-vl-7b-instruct',
    name: 'Qwen: Qwen2.5-VL 7B Instruct',
    description: 'text+image->text',
    context_length: 32768,
    pricing: {
      prompt: '0.00000020000000000000002',
      completion: '0.00000020000000000000002',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Qwen',
    type: 'text',
    isFree: true,
  },
  {
    id: 'inception/mercury-2',
    name: 'Inception: Mercury 2',
    description: 'text->text',
    context_length: 128000,
    pricing: {
      prompt: '0.00000025',
      completion: '0.00000075',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Inception',
    type: 'text',
    isFree: true,
  },
  {
    id: 'inception/mercury',
    name: 'Inception: Mercury',
    description: 'text->text',
    context_length: 128000,
    pricing: {
      prompt: '0.00000025',
      completion: '0.00000075',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Inception',
    type: 'text',
    isFree: true,
  },
  {
    id: 'inception/mercury-coder',
    name: 'Inception: Mercury Coder',
    description: 'text->text',
    context_length: 128000,
    pricing: {
      prompt: '0.00000025',
      completion: '0.00000075',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Inception',
    type: 'text',
    isFree: true,
  },
  {
    id: 'google/gemini-3.1-flash-lite-preview',
    name: 'Google: Gemini 3.1 Flash Lite Preview',
    description: 'text+image+file+audio+video->text',
    context_length: 1048576,
    pricing: {
      prompt: '0.00000025',
      completion: '0.0000015',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Google',
    type: 'multimodal',
    isFree: true,
  },
  {
    id: 'google/gemini-3.1-flash-image-preview',
    name: 'Google: Nano Banana 2 (Gemini 3.1 Flash Image Preview)',
    description: 'text+image->text+image',
    context_length: 65536,
    pricing: {
      prompt: '0.0000005',
      completion: '0.000003',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Google',
    type: 'text',
    isFree: true,
  },
  {
    id: 'google/gemini-3-flash-preview',
    name: 'Google: Gemini 3 Flash Preview',
    description: 'text+image+file+audio+video->text',
    context_length: 1048576,
    pricing: {
      prompt: '0.0000005',
      completion: '0.000003',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Google',
    type: 'multimodal',
    isFree: true,
  },
  {
    id: 'google/gemini-2.5-flash-image',
    name: 'Google: Nano Banana (Gemini 2.5 Flash Image)',
    description: 'text+image->text+image',
    context_length: 32768,
    pricing: {
      prompt: '0.0000003',
      completion: '0.0000025',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Google',
    type: 'text',
    isFree: true,
  },
  {
    id: 'google/gemini-2.5-flash-lite-preview-09-2025',
    name: 'Google: Gemini 2.5 Flash Lite Preview 09-2025',
    description: 'text+image+file+audio+video->text',
    context_length: 1048576,
    pricing: {
      prompt: '0.0000001',
      completion: '0.0000004',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Google',
    type: 'multimodal',
    isFree: true,
  },
  {
    id: 'google/gemini-2.5-flash-lite',
    name: 'Google: Gemini 2.5 Flash Lite',
    description: 'text+image+file+audio+video->text',
    context_length: 1048576,
    pricing: {
      prompt: '0.0000001',
      completion: '0.0000004',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Google',
    type: 'multimodal',
    isFree: true,
  },
  {
    id: 'google/gemma-3n-e2b-it:free',
    name: 'Google: Gemma 3n 2B (free)',
    description: 'text->text',
    context_length: 8192,
    pricing: {
      prompt: '0',
      completion: '0',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Google',
    type: 'text',
    isFree: true,
  },
  {
    id: 'google/gemini-2.5-flash',
    name: 'Google: Gemini 2.5 Flash',
    description: 'text+image+file+audio+video->text',
    context_length: 1048576,
    pricing: {
      prompt: '0.0000003',
      completion: '0.0000025',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Google',
    type: 'multimodal',
    isFree: true,
  },
  {
    id: 'google/gemma-3n-e4b-it:free',
    name: 'Google: Gemma 3n 4B (free)',
    description: 'text->text',
    context_length: 8192,
    pricing: {
      prompt: '0',
      completion: '0',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Google',
    type: 'text',
    isFree: true,
  },
  {
    id: 'google/gemma-3n-e4b-it',
    name: 'Google: Gemma 3n 4B',
    description: 'text->text',
    context_length: 32768,
    pricing: {
      prompt: '0.00000002',
      completion: '0.00000004',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Google',
    type: 'text',
    isFree: true,
  },
  {
    id: 'google/gemma-3-4b-it:free',
    name: 'Google: Gemma 3 4B (free)',
    description: 'text+image->text',
    context_length: 32768,
    pricing: {
      prompt: '0',
      completion: '0',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Google',
    type: 'text',
    isFree: true,
  },
  {
    id: 'google/gemma-3-4b-it',
    name: 'Google: Gemma 3 4B',
    description: 'text+image->text',
    context_length: 131072,
    pricing: {
      prompt: '0.00000004',
      completion: '0.00000008',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Google',
    type: 'text',
    isFree: true,
  },
  {
    id: 'google/gemma-3-12b-it:free',
    name: 'Google: Gemma 3 12B (free)',
    description: 'text+image->text',
    context_length: 32768,
    pricing: {
      prompt: '0',
      completion: '0',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Google',
    type: 'text',
    isFree: true,
  },
  {
    id: 'google/gemma-3-12b-it',
    name: 'Google: Gemma 3 12B',
    description: 'text+image->text',
    context_length: 131072,
    pricing: {
      prompt: '0.00000004',
      completion: '0.00000013',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Google',
    type: 'text',
    isFree: true,
  },
  {
    id: 'google/gemma-3-27b-it:free',
    name: 'Google: Gemma 3 27B (free)',
    description: 'text+image->text',
    context_length: 131072,
    pricing: {
      prompt: '0',
      completion: '0',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Google',
    type: 'text',
    isFree: true,
  },
  {
    id: 'google/gemma-3-27b-it',
    name: 'Google: Gemma 3 27B',
    description: 'text+image->text',
    context_length: 128000,
    pricing: {
      prompt: '0.00000003',
      completion: '0.00000011',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Google',
    type: 'text',
    isFree: true,
  },
  {
    id: 'google/gemini-2.0-flash-lite-001',
    name: 'Google: Gemini 2.0 Flash Lite',
    description: 'text+image+file+audio+video->text',
    context_length: 1048576,
    pricing: {
      prompt: '0.000000075',
      completion: '0.0000003',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Google',
    type: 'multimodal',
    isFree: true,
  },
  {
    id: 'google/gemini-2.0-flash-001',
    name: 'Google: Gemini 2.0 Flash',
    description: 'text+image+file+audio+video->text',
    context_length: 1048576,
    pricing: {
      prompt: '0.0000001',
      completion: '0.0000004',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Google',
    type: 'multimodal',
    isFree: true,
  },
  {
    id: 'google/gemma-2-27b-it',
    name: 'Google: Gemma 2 27B',
    description: 'text->text',
    context_length: 8192,
    pricing: {
      prompt: '0.00000065',
      completion: '0.00000065',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Google',
    type: 'text',
    isFree: true,
  },
  {
    id: 'google/gemma-2-9b-it',
    name: 'Google: Gemma 2 9B',
    description: 'text->text',
    context_length: 8192,
    pricing: {
      prompt: '0.00000003',
      completion: '0.00000009',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Google',
    type: 'text',
    isFree: true,
  },
  {
    id: 'liquid/lfm-2-24b-a2b',
    name: 'LiquidAI: LFM2-24B-A2B',
    description: 'text->text',
    context_length: 32768,
    pricing: {
      prompt: '0.00000003',
      completion: '0.00000012',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Liquid',
    type: 'text',
    isFree: true,
  },
  {
    id: 'liquid/lfm-2.5-1.2b-thinking:free',
    name: 'LiquidAI: LFM2.5-1.2B-Thinking (free)',
    description: 'text->text',
    context_length: 32768,
    pricing: {
      prompt: '0',
      completion: '0',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Liquid',
    type: 'text',
    isFree: true,
  },
  {
    id: 'liquid/lfm-2.5-1.2b-instruct:free',
    name: 'LiquidAI: LFM2.5-1.2B-Instruct (free)',
    description: 'text->text',
    context_length: 32768,
    pricing: {
      prompt: '0',
      completion: '0',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Liquid',
    type: 'text',
    isFree: true,
  },
  {
    id: 'liquid/lfm2-8b-a1b',
    name: 'LiquidAI: LFM2-8B-A1B',
    description: 'text->text',
    context_length: 32768,
    pricing: {
      prompt: '0.00000001',
      completion: '0.00000002',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Liquid',
    type: 'text',
    isFree: true,
  },
  {
    id: 'liquid/lfm-2.2-6b',
    name: 'LiquidAI: LFM2-2.6B',
    description: 'text->text',
    context_length: 32768,
    pricing: {
      prompt: '0.00000001',
      completion: '0.00000002',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Liquid',
    type: 'text',
    isFree: true,
  },
  {
    id: 'aion-labs/aion-2.0',
    name: 'AionLabs: Aion-2.0',
    description: 'text->text',
    context_length: 131072,
    pricing: {
      prompt: '0.0000008',
      completion: '0.0000016',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Aion-labs',
    type: 'text',
    isFree: true,
  },
  {
    id: 'aion-labs/aion-1.0-mini',
    name: 'AionLabs: Aion-1.0-Mini',
    description: 'text->text',
    context_length: 131072,
    pricing: {
      prompt: '0.0000007',
      completion: '0.0000014',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Aion-labs',
    type: 'text',
    isFree: true,
  },
  {
    id: 'aion-labs/aion-rp-llama-3.1-8b',
    name: 'AionLabs: Aion-RP 1.0 (8B)',
    description: 'text->text',
    context_length: 32768,
    pricing: {
      prompt: '0.0000008',
      completion: '0.0000016',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Aion-labs',
    type: 'text',
    isFree: true,
  },
  {
    id: 'anthropic/claude-3.5-haiku',
    name: 'Anthropic: Claude 3.5 Haiku',
    description: 'text+image->text',
    context_length: 200000,
    pricing: {
      prompt: '0.0000008',
      completion: '0.000004',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Anthropic',
    type: 'text',
    isFree: true,
  },
  {
    id: 'anthropic/claude-3-haiku',
    name: 'Anthropic: Claude 3 Haiku',
    description: 'text+image->text',
    context_length: 200000,
    pricing: {
      prompt: '0.00000025',
      completion: '0.00000125',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Anthropic',
    type: 'text',
    isFree: true,
  },
  {
    id: 'minimax/minimax-m2.5:free',
    name: 'MiniMax: MiniMax M2.5 (free)',
    description: 'text->text',
    context_length: 196608,
    pricing: {
      prompt: '0',
      completion: '0',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Minimax',
    type: 'text',
    isFree: true,
  },
  {
    id: 'minimax/minimax-m2.5',
    name: 'MiniMax: MiniMax M2.5',
    description: 'text->text',
    context_length: 196608,
    pricing: {
      prompt: '0.0000002',
      completion: '0.0000012',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Minimax',
    type: 'text',
    isFree: true,
  },
  {
    id: 'minimax/minimax-m2-her',
    name: 'MiniMax: MiniMax M2-her',
    description: 'text->text',
    context_length: 65536,
    pricing: {
      prompt: '0.0000003',
      completion: '0.0000012',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Minimax',
    type: 'text',
    isFree: true,
  },
  {
    id: 'minimax/minimax-m2.1',
    name: 'MiniMax: MiniMax M2.1',
    description: 'text->text',
    context_length: 196608,
    pricing: {
      prompt: '0.00000027',
      completion: '0.00000095',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Minimax',
    type: 'text',
    isFree: true,
  },
  {
    id: 'minimax/minimax-m2',
    name: 'MiniMax: MiniMax M2',
    description: 'text->text',
    context_length: 196608,
    pricing: {
      prompt: '0.000000255',
      completion: '0.000001',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Minimax',
    type: 'text',
    isFree: true,
  },
  {
    id: 'minimax/minimax-m1',
    name: 'MiniMax: MiniMax M1',
    description: 'text->text',
    context_length: 1000000,
    pricing: {
      prompt: '0.0000004',
      completion: '0.0000022',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Minimax',
    type: 'text',
    isFree: true,
  },
  {
    id: 'minimax/minimax-01',
    name: 'MiniMax: MiniMax-01',
    description: 'text+image->text',
    context_length: 1000192,
    pricing: {
      prompt: '0.0000002',
      completion: '0.0000011',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Minimax',
    type: 'text',
    isFree: true,
  },
  {
    id: 'stepfun/step-3.5-flash:free',
    name: 'StepFun: Step 3.5 Flash (free)',
    description: 'text->text',
    context_length: 256000,
    pricing: {
      prompt: '0',
      completion: '0',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Stepfun',
    type: 'text',
    isFree: true,
  },
  {
    id: 'stepfun/step-3.5-flash',
    name: 'StepFun: Step 3.5 Flash',
    description: 'text->text',
    context_length: 256000,
    pricing: {
      prompt: '0.0000001',
      completion: '0.0000003',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Stepfun',
    type: 'text',
    isFree: true,
  },
  {
    id: 'arcee-ai/trinity-large-preview:free',
    name: 'Arcee AI: Trinity Large Preview (free)',
    description: 'text->text',
    context_length: 131000,
    pricing: {
      prompt: '0',
      completion: '0',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Arcee-ai',
    type: 'text',
    isFree: true,
  },
  {
    id: 'arcee-ai/trinity-mini:free',
    name: 'Arcee AI: Trinity Mini (free)',
    description: 'text->text',
    context_length: 131072,
    pricing: {
      prompt: '0',
      completion: '0',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Arcee-ai',
    type: 'text',
    isFree: true,
  },
  {
    id: 'arcee-ai/trinity-mini',
    name: 'Arcee AI: Trinity Mini',
    description: 'text->text',
    context_length: 131072,
    pricing: {
      prompt: '0.000000045',
      completion: '0.00000015',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Arcee-ai',
    type: 'text',
    isFree: true,
  },
  {
    id: 'arcee-ai/spotlight',
    name: 'Arcee AI: Spotlight',
    description: 'text+image->text',
    context_length: 131072,
    pricing: {
      prompt: '0.00000018',
      completion: '0.00000018',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Arcee-ai',
    type: 'text',
    isFree: true,
  },
  {
    id: 'arcee-ai/maestro-reasoning',
    name: 'Arcee AI: Maestro Reasoning',
    description: 'text->text',
    context_length: 131072,
    pricing: {
      prompt: '0.0000009',
      completion: '0.0000033',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Arcee-ai',
    type: 'text',
    isFree: true,
  },
  {
    id: 'arcee-ai/virtuoso-large',
    name: 'Arcee AI: Virtuoso Large',
    description: 'text->text',
    context_length: 131072,
    pricing: {
      prompt: '0.00000075',
      completion: '0.0000012',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Arcee-ai',
    type: 'text',
    isFree: true,
  },
  {
    id: 'arcee-ai/coder-large',
    name: 'Arcee AI: Coder Large',
    description: 'text->text',
    context_length: 32768,
    pricing: {
      prompt: '0.0000005',
      completion: '0.0000008',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Arcee-ai',
    type: 'text',
    isFree: true,
  },
  {
    id: 'moonshotai/kimi-k2.5',
    name: 'MoonshotAI: Kimi K2.5',
    description: 'text+image->text',
    context_length: 262144,
    pricing: {
      prompt: '0.00000045',
      completion: '0.0000022',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Moonshotai',
    type: 'text',
    isFree: true,
  },
  {
    id: 'moonshotai/kimi-k2-thinking',
    name: 'MoonshotAI: Kimi K2 Thinking',
    description: 'text->text',
    context_length: 131072,
    pricing: {
      prompt: '0.00000047',
      completion: '0.000002',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Moonshotai',
    type: 'text',
    isFree: true,
  },
  {
    id: 'moonshotai/kimi-k2-0905',
    name: 'MoonshotAI: Kimi K2 0905',
    description: 'text->text',
    context_length: 131072,
    pricing: {
      prompt: '0.0000004',
      completion: '0.000002',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Moonshotai',
    type: 'text',
    isFree: true,
  },
  {
    id: 'moonshotai/kimi-k2',
    name: 'MoonshotAI: Kimi K2 0711',
    description: 'text->text',
    context_length: 131000,
    pricing: {
      prompt: '0.00000055',
      completion: '0.0000022',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Moonshotai',
    type: 'text',
    isFree: true,
  },
  {
    id: 'upstage/solar-pro-3',
    name: 'Upstage: Solar Pro 3',
    description: 'text->text',
    context_length: 128000,
    pricing: {
      prompt: '0.00000015',
      completion: '0.0000006',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Upstage',
    type: 'text',
    isFree: true,
  },
  {
    id: 'writer/palmyra-x5',
    name: 'Writer: Palmyra X5',
    description: 'text->text',
    context_length: 1040000,
    pricing: {
      prompt: '0.0000006',
      completion: '0.000006',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Writer',
    type: 'text',
    isFree: true,
  },
  {
    id: 'allenai/molmo-2-8b',
    name: 'AllenAI: Molmo2 8B',
    description: 'text+image+video->text',
    context_length: 36864,
    pricing: {
      prompt: '0.0000002',
      completion: '0.0000002',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Allenai',
    type: 'multimodal',
    isFree: true,
  },
  {
    id: 'allenai/olmo-3.1-32b-instruct',
    name: 'AllenAI: Olmo 3.1 32B Instruct',
    description: 'text->text',
    context_length: 65536,
    pricing: {
      prompt: '0.0000002',
      completion: '0.0000006',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Allenai',
    type: 'text',
    isFree: true,
  },
  {
    id: 'allenai/olmo-3.1-32b-think',
    name: 'AllenAI: Olmo 3.1 32B Think',
    description: 'text->text',
    context_length: 65536,
    pricing: {
      prompt: '0.00000015',
      completion: '0.0000005',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Allenai',
    type: 'text',
    isFree: true,
  },
  {
    id: 'allenai/olmo-3-32b-think',
    name: 'AllenAI: Olmo 3 32B Think',
    description: 'text->text',
    context_length: 65536,
    pricing: {
      prompt: '0.00000015',
      completion: '0.0000005',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Allenai',
    type: 'text',
    isFree: true,
  },
  {
    id: 'allenai/olmo-3-7b-instruct',
    name: 'AllenAI: Olmo 3 7B Instruct',
    description: 'text->text',
    context_length: 65536,
    pricing: {
      prompt: '0.0000001',
      completion: '0.0000002',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Allenai',
    type: 'text',
    isFree: true,
  },
  {
    id: 'allenai/olmo-3-7b-think',
    name: 'AllenAI: Olmo 3 7B Think',
    description: 'text->text',
    context_length: 65536,
    pricing: {
      prompt: '0.00000012',
      completion: '0.0000002',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Allenai',
    type: 'text',
    isFree: true,
  },
  {
    id: 'allenai/olmo-2-0325-32b-instruct',
    name: 'AllenAI: Olmo 2 32B Instruct',
    description: 'text->text',
    context_length: 128000,
    pricing: {
      prompt: '0.00000005',
      completion: '0.0000002',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Allenai',
    type: 'text',
    isFree: true,
  },
  {
    id: 'xiaomi/mimo-v2-flash',
    name: 'Xiaomi: MiMo-V2-Flash',
    description: 'text->text',
    context_length: 262144,
    pricing: {
      prompt: '0.00000009',
      completion: '0.00000029',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Xiaomi',
    type: 'text',
    isFree: true,
  },
  {
    id: 'relace/relace-apply-3',
    name: 'Relace: Relace Apply 3',
    description: 'text->text',
    context_length: 256000,
    pricing: {
      prompt: '0.00000085',
      completion: '0.00000125',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Relace',
    type: 'text',
    isFree: true,
  },
  {
    id: 'nex-agi/deepseek-v3.1-nex-n1',
    name: 'Nex AGI: DeepSeek V3.1 Nex N1',
    description: 'text->text',
    context_length: 131072,
    pricing: {
      prompt: '0.00000027',
      completion: '0.000001',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Nex-agi',
    type: 'text',
    isFree: true,
  },
  {
    id: 'essentialai/rnj-1-instruct',
    name: 'EssentialAI: Rnj 1 Instruct',
    description: 'text->text',
    context_length: 32768,
    pricing: {
      prompt: '0.00000015',
      completion: '0.00000015',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Essentialai',
    type: 'text',
    isFree: true,
  },
  {
    id: 'amazon/nova-2-lite-v1',
    name: 'Amazon: Nova 2 Lite',
    description: 'text+image+file+video->text',
    context_length: 1000000,
    pricing: {
      prompt: '0.0000003',
      completion: '0.0000025',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Amazon',
    type: 'multimodal',
    isFree: true,
  },
  {
    id: 'amazon/nova-lite-v1',
    name: 'Amazon: Nova Lite 1.0',
    description: 'text+image->text',
    context_length: 300000,
    pricing: {
      prompt: '0.00000006',
      completion: '0.00000024',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Amazon',
    type: 'text',
    isFree: true,
  },
  {
    id: 'amazon/nova-micro-v1',
    name: 'Amazon: Nova Micro 1.0',
    description: 'text->text',
    context_length: 128000,
    pricing: {
      prompt: '0.000000035',
      completion: '0.00000014',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Amazon',
    type: 'text',
    isFree: true,
  },
  {
    id: 'amazon/nova-pro-v1',
    name: 'Amazon: Nova Pro 1.0',
    description: 'text+image->text',
    context_length: 300000,
    pricing: {
      prompt: '0.0000008',
      completion: '0.0000032',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Amazon',
    type: 'text',
    isFree: true,
  },
  {
    id: 'deepseek/deepseek-v3.2-speciale',
    name: 'DeepSeek: DeepSeek V3.2 Speciale',
    description: 'text->text',
    context_length: 163840,
    pricing: {
      prompt: '0.0000004',
      completion: '0.0000012',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'DeepSeek',
    type: 'text',
    isFree: true,
  },
  {
    id: 'deepseek/deepseek-v3.2',
    name: 'DeepSeek: DeepSeek V3.2',
    description: 'text->text',
    context_length: 163840,
    pricing: {
      prompt: '0.000000255',
      completion: '0.0000004',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'DeepSeek',
    type: 'text',
    isFree: true,
  },
  {
    id: 'deepseek/deepseek-v3.2-exp',
    name: 'DeepSeek: DeepSeek V3.2 Exp',
    description: 'text->text',
    context_length: 163840,
    pricing: {
      prompt: '0.00000027',
      completion: '0.00000041',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'DeepSeek',
    type: 'text',
    isFree: true,
  },
  {
    id: 'deepseek/deepseek-v3.1-terminus',
    name: 'DeepSeek: DeepSeek V3.1 Terminus',
    description: 'text->text',
    context_length: 163840,
    pricing: {
      prompt: '0.00000021',
      completion: '0.00000079',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'DeepSeek',
    type: 'text',
    isFree: true,
  },
  {
    id: 'deepseek/deepseek-chat-v3.1',
    name: 'DeepSeek: DeepSeek V3.1',
    description: 'text->text',
    context_length: 32768,
    pricing: {
      prompt: '0.00000015',
      completion: '0.00000075',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'DeepSeek',
    type: 'text',
    isFree: true,
  },
  {
    id: 'deepseek/deepseek-r1-0528',
    name: 'DeepSeek: R1 0528',
    description: 'text->text',
    context_length: 163840,
    pricing: {
      prompt: '0.00000045',
      completion: '0.00000215',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'DeepSeek',
    type: 'text',
    isFree: true,
  },
  {
    id: 'deepseek/deepseek-chat-v3-0324',
    name: 'DeepSeek: DeepSeek V3 0324',
    description: 'text->text',
    context_length: 163840,
    pricing: {
      prompt: '0.0000002',
      completion: '0.00000077',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'DeepSeek',
    type: 'text',
    isFree: true,
  },
  {
    id: 'deepseek/deepseek-r1-distill-qwen-32b',
    name: 'DeepSeek: R1 Distill Qwen 32B',
    description: 'text->text',
    context_length: 32768,
    pricing: {
      prompt: '0.00000029',
      completion: '0.00000029',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'DeepSeek',
    type: 'text',
    isFree: true,
  },
  {
    id: 'deepseek/deepseek-r1-distill-llama-70b',
    name: 'DeepSeek: R1 Distill Llama 70B',
    description: 'text->text',
    context_length: 131072,
    pricing: {
      prompt: '0.0000007',
      completion: '0.0000008',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'DeepSeek',
    type: 'text',
    isFree: true,
  },
  {
    id: 'deepseek/deepseek-r1',
    name: 'DeepSeek: R1',
    description: 'text->text',
    context_length: 64000,
    pricing: {
      prompt: '0.0000007',
      completion: '0.0000025',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'DeepSeek',
    type: 'text',
    isFree: true,
  },
  {
    id: 'deepseek/deepseek-chat',
    name: 'DeepSeek: DeepSeek V3',
    description: 'text->text',
    context_length: 163840,
    pricing: {
      prompt: '0.00000032',
      completion: '0.00000089',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'DeepSeek',
    type: 'text',
    isFree: true,
  },
  {
    id: 'prime-intellect/intellect-3',
    name: 'Prime Intellect: INTELLECT-3',
    description: 'text->text',
    context_length: 131072,
    pricing: {
      prompt: '0.0000002',
      completion: '0.0000011',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Prime-intellect',
    type: 'text',
    isFree: true,
  },
  {
    id: 'kwaipilot/kat-coder-pro',
    name: 'Kwaipilot: KAT-Coder-Pro V1',
    description: 'text->text',
    context_length: 256000,
    pricing: {
      prompt: '0.000000207',
      completion: '0.000000828',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Kwaipilot',
    type: 'text',
    isFree: true,
  },
  {
    id: 'ibm-granite/granite-4.0-h-micro',
    name: 'IBM: Granite 4.0 Micro',
    description: 'text->text',
    context_length: 131000,
    pricing: {
      prompt: '0.000000017',
      completion: '0.00000011',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Ibm-granite',
    type: 'text',
    isFree: true,
  },
  {
    id: 'baidu/ernie-4.5-21b-a3b-thinking',
    name: 'Baidu: ERNIE 4.5 21B A3B Thinking',
    description: 'text->text',
    context_length: 131072,
    pricing: {
      prompt: '0.00000007',
      completion: '0.00000028',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Baidu',
    type: 'text',
    isFree: true,
  },
  {
    id: 'baidu/ernie-4.5-21b-a3b',
    name: 'Baidu: ERNIE 4.5 21B A3B',
    description: 'text->text',
    context_length: 120000,
    pricing: {
      prompt: '0.00000007',
      completion: '0.00000028',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Baidu',
    type: 'text',
    isFree: true,
  },
  {
    id: 'baidu/ernie-4.5-vl-28b-a3b',
    name: 'Baidu: ERNIE 4.5 VL 28B A3B',
    description: 'text+image->text',
    context_length: 30000,
    pricing: {
      prompt: '0.00000014',
      completion: '0.00000056',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Baidu',
    type: 'text',
    isFree: true,
  },
  {
    id: 'baidu/ernie-4.5-vl-424b-a47b',
    name: 'Baidu: ERNIE 4.5 VL 424B A47B ',
    description: 'text+image->text',
    context_length: 123000,
    pricing: {
      prompt: '0.00000042',
      completion: '0.00000125',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Baidu',
    type: 'text',
    isFree: true,
  },
  {
    id: 'baidu/ernie-4.5-300b-a47b',
    name: 'Baidu: ERNIE 4.5 300B A47B ',
    description: 'text->text',
    context_length: 123000,
    pricing: {
      prompt: '0.00000028',
      completion: '0.0000011',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Baidu',
    type: 'text',
    isFree: true,
  },
  {
    id: 'thedrummer/cydonia-24b-v4.1',
    name: 'TheDrummer: Cydonia 24B V4.1',
    description: 'text->text',
    context_length: 131072,
    pricing: {
      prompt: '0.0000003',
      completion: '0.0000005',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Thedrummer',
    type: 'text',
    isFree: true,
  },
  {
    id: 'thedrummer/skyfall-36b-v2',
    name: 'TheDrummer: Skyfall 36B V2',
    description: 'text->text',
    context_length: 32768,
    pricing: {
      prompt: '0.00000055',
      completion: '0.0000008',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Thedrummer',
    type: 'text',
    isFree: true,
  },
  {
    id: 'thedrummer/unslopnemo-12b',
    name: 'TheDrummer: UnslopNemo 12B',
    description: 'text->text',
    context_length: 32768,
    pricing: {
      prompt: '0.0000004',
      completion: '0.0000004',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Thedrummer',
    type: 'text',
    isFree: true,
  },
  {
    id: 'thedrummer/rocinante-12b',
    name: 'TheDrummer: Rocinante 12B',
    description: 'text->text',
    context_length: 32768,
    pricing: {
      prompt: '0.00000017',
      completion: '0.00000043',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Thedrummer',
    type: 'text',
    isFree: true,
  },
  {
    id: 'alibaba/tongyi-deepresearch-30b-a3b',
    name: 'Tongyi DeepResearch 30B A3B',
    description: 'text->text',
    context_length: 131072,
    pricing: {
      prompt: '0.00000009',
      completion: '0.00000045',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Alibaba',
    type: 'text',
    isFree: true,
  },
  {
    id: 'meituan/longcat-flash-chat',
    name: 'Meituan: LongCat Flash Chat',
    description: 'text->text',
    context_length: 131072,
    pricing: {
      prompt: '0.0000002',
      completion: '0.0000008',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Meituan',
    type: 'text',
    isFree: true,
  },
  {
    id: 'nousresearch/hermes-4-70b',
    name: 'Nous: Hermes 4 70B',
    description: 'text->text',
    context_length: 131072,
    pricing: {
      prompt: '0.00000013',
      completion: '0.0000004',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Nousresearch',
    type: 'text',
    isFree: true,
  },
  {
    id: 'nousresearch/hermes-3-llama-3.1-70b',
    name: 'Nous: Hermes 3 70B Instruct',
    description: 'text->text',
    context_length: 131072,
    pricing: {
      prompt: '0.0000003',
      completion: '0.0000003',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Nousresearch',
    type: 'text',
    isFree: true,
  },
  {
    id: 'nousresearch/hermes-3-llama-3.1-405b:free',
    name: 'Nous: Hermes 3 405B Instruct (free)',
    description: 'text->text',
    context_length: 131072,
    pricing: {
      prompt: '0',
      completion: '0',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Nousresearch',
    type: 'text',
    isFree: true,
  },
  {
    id: 'nousresearch/hermes-2-pro-llama-3-8b',
    name: 'NousResearch: Hermes 2 Pro - Llama-3 8B',
    description: 'text->text',
    context_length: 8192,
    pricing: {
      prompt: '0.00000014',
      completion: '0.00000014',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Nousresearch',
    type: 'text',
    isFree: true,
  },
  {
    id: 'bytedance/ui-tars-1.5-7b',
    name: 'ByteDance: UI-TARS 7B ',
    description: 'text+image->text',
    context_length: 128000,
    pricing: {
      prompt: '0.0000001',
      completion: '0.0000002',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Bytedance',
    type: 'text',
    isFree: true,
  },
  {
    id: 'switchpoint/router',
    name: 'Switchpoint Router',
    description: 'text->text',
    context_length: 131072,
    pricing: {
      prompt: '0.00000085',
      completion: '0.0000034',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Switchpoint',
    type: 'text',
    isFree: true,
  },
  {
    id: 'cognitivecomputations/dolphin-mistral-24b-venice-edition:free',
    name: 'Venice: Uncensored (free)',
    description: 'text->text',
    context_length: 32768,
    pricing: {
      prompt: '0',
      completion: '0',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Cognitivecomputations',
    type: 'text',
    isFree: true,
  },
  {
    id: 'tencent/hunyuan-a13b-instruct',
    name: 'Tencent: Hunyuan A13B Instruct',
    description: 'text->text',
    context_length: 131072,
    pricing: {
      prompt: '0.00000014',
      completion: '0.00000057',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Tencent',
    type: 'text',
    isFree: true,
  },
  {
    id: 'tngtech/deepseek-r1t2-chimera',
    name: 'TNG: DeepSeek R1T2 Chimera',
    description: 'text->text',
    context_length: 163840,
    pricing: {
      prompt: '0.00000025',
      completion: '0.00000085',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Tngtech',
    type: 'text',
    isFree: true,
  },
  {
    id: 'morph/morph-v3-large',
    name: 'Morph: Morph V3 Large',
    description: 'text->text',
    context_length: 262144,
    pricing: {
      prompt: '0.0000009',
      completion: '0.0000019',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Morph',
    type: 'text',
    isFree: true,
  },
  {
    id: 'morph/morph-v3-fast',
    name: 'Morph: Morph V3 Fast',
    description: 'text->text',
    context_length: 81920,
    pricing: {
      prompt: '0.0000008',
      completion: '0.0000012',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Morph',
    type: 'text',
    isFree: true,
  },
  {
    id: 'meta-llama/llama-guard-4-12b',
    name: 'Meta: Llama Guard 4 12B',
    description: 'text+image->text',
    context_length: 163840,
    pricing: {
      prompt: '0.00000018',
      completion: '0.00000018',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Meta-llama',
    type: 'text',
    isFree: true,
  },
  {
    id: 'meta-llama/llama-4-maverick',
    name: 'Meta: Llama 4 Maverick',
    description: 'text+image->text',
    context_length: 1048576,
    pricing: {
      prompt: '0.00000015',
      completion: '0.0000006',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Meta-llama',
    type: 'text',
    isFree: true,
  },
  {
    id: 'meta-llama/llama-4-scout',
    name: 'Meta: Llama 4 Scout',
    description: 'text+image->text',
    context_length: 327680,
    pricing: {
      prompt: '0.00000008',
      completion: '0.0000003',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Meta-llama',
    type: 'text',
    isFree: true,
  },
  {
    id: 'meta-llama/llama-guard-3-8b',
    name: 'Llama Guard 3 8B',
    description: 'text->text',
    context_length: 131072,
    pricing: {
      prompt: '0.00000002',
      completion: '0.00000006',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Meta-llama',
    type: 'text',
    isFree: true,
  },
  {
    id: 'meta-llama/llama-3.3-70b-instruct:free',
    name: 'Meta: Llama 3.3 70B Instruct (free)',
    description: 'text->text',
    context_length: 128000,
    pricing: {
      prompt: '0',
      completion: '0',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Meta-llama',
    type: 'text',
    isFree: true,
  },
  {
    id: 'meta-llama/llama-3.3-70b-instruct',
    name: 'Meta: Llama 3.3 70B Instruct',
    description: 'text->text',
    context_length: 131072,
    pricing: {
      prompt: '0.0000001',
      completion: '0.00000032',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Meta-llama',
    type: 'text',
    isFree: true,
  },
  {
    id: 'meta-llama/llama-3.2-3b-instruct:free',
    name: 'Meta: Llama 3.2 3B Instruct (free)',
    description: 'text->text',
    context_length: 131072,
    pricing: {
      prompt: '0',
      completion: '0',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Meta-llama',
    type: 'text',
    isFree: true,
  },
  {
    id: 'meta-llama/llama-3.2-3b-instruct',
    name: 'Meta: Llama 3.2 3B Instruct',
    description: 'text->text',
    context_length: 80000,
    pricing: {
      prompt: '0.000000051',
      completion: '0.00000034',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Meta-llama',
    type: 'text',
    isFree: true,
  },
  {
    id: 'meta-llama/llama-3.2-1b-instruct',
    name: 'Meta: Llama 3.2 1B Instruct',
    description: 'text->text',
    context_length: 60000,
    pricing: {
      prompt: '0.000000027',
      completion: '0.0000002',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Meta-llama',
    type: 'text',
    isFree: true,
  },
  {
    id: 'meta-llama/llama-3.2-11b-vision-instruct',
    name: 'Meta: Llama 3.2 11B Vision Instruct',
    description: 'text+image->text',
    context_length: 131072,
    pricing: {
      prompt: '0.000000049',
      completion: '0.000000049',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Meta-llama',
    type: 'text',
    isFree: true,
  },
  {
    id: 'meta-llama/llama-3.1-8b-instruct',
    name: 'Meta: Llama 3.1 8B Instruct',
    description: 'text->text',
    context_length: 16384,
    pricing: {
      prompt: '0.00000002',
      completion: '0.00000005',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Meta-llama',
    type: 'text',
    isFree: true,
  },
  {
    id: 'meta-llama/llama-3.1-70b-instruct',
    name: 'Meta: Llama 3.1 70B Instruct',
    description: 'text->text',
    context_length: 131072,
    pricing: {
      prompt: '0.0000004',
      completion: '0.0000004',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Meta-llama',
    type: 'text',
    isFree: true,
  },
  {
    id: 'meta-llama/llama-3-70b-instruct',
    name: 'Meta: Llama 3 70B Instruct',
    description: 'text->text',
    context_length: 8192,
    pricing: {
      prompt: '0.00000051',
      completion: '0.00000074',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Meta-llama',
    type: 'text',
    isFree: true,
  },
  {
    id: 'meta-llama/llama-3-8b-instruct',
    name: 'Meta: Llama 3 8B Instruct',
    description: 'text->text',
    context_length: 8192,
    pricing: {
      prompt: '0.00000003',
      completion: '0.00000004',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Meta-llama',
    type: 'text',
    isFree: true,
  },
  {
    id: 'eleutherai/llemma_7b',
    name: 'EleutherAI: Llemma 7b',
    description: 'text->text',
    context_length: 4096,
    pricing: {
      prompt: '0.0000008',
      completion: '0.0000012',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Eleutherai',
    type: 'text',
    isFree: true,
  },
  {
    id: 'alfredpros/codellama-7b-instruct-solidity',
    name: 'AlfredPros: CodeLLaMa 7B Instruct Solidity',
    description: 'text->text',
    context_length: 4096,
    pricing: {
      prompt: '0.0000008',
      completion: '0.0000012',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Alfredpros',
    type: 'text',
    isFree: true,
  },
  {
    id: 'cohere/command-r7b-12-2024',
    name: 'Cohere: Command R7B (12-2024)',
    description: 'text->text',
    context_length: 128000,
    pricing: {
      prompt: '0.0000000375',
      completion: '0.00000015',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Cohere',
    type: 'text',
    isFree: true,
  },
  {
    id: 'cohere/command-r-08-2024',
    name: 'Cohere: Command R (08-2024)',
    description: 'text->text',
    context_length: 128000,
    pricing: {
      prompt: '0.00000015',
      completion: '0.0000006',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Cohere',
    type: 'text',
    isFree: true,
  },
  {
    id: 'microsoft/phi-4',
    name: 'Microsoft: Phi 4',
    description: 'text->text',
    context_length: 16384,
    pricing: {
      prompt: '0.000000065',
      completion: '0.00000014',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Microsoft',
    type: 'text',
    isFree: true,
  },
  {
    id: 'microsoft/wizardlm-2-8x22b',
    name: 'WizardLM-2 8x22B',
    description: 'text->text',
    context_length: 65535,
    pricing: {
      prompt: '0.00000062',
      completion: '0.00000062',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Microsoft',
    type: 'text',
    isFree: true,
  },
  {
    id: 'sao10k/l3.3-euryale-70b',
    name: 'Sao10K: Llama 3.3 Euryale 70B',
    description: 'text->text',
    context_length: 131072,
    pricing: {
      prompt: '0.00000065',
      completion: '0.00000075',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Sao10k',
    type: 'text',
    isFree: true,
  },
  {
    id: 'sao10k/l3.1-euryale-70b',
    name: 'Sao10K: Llama 3.1 Euryale 70B v2.2',
    description: 'text->text',
    context_length: 131072,
    pricing: {
      prompt: '0.00000085',
      completion: '0.00000085',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Sao10k',
    type: 'text',
    isFree: true,
  },
  {
    id: 'sao10k/l3-lunaris-8b',
    name: 'Sao10K: Llama 3 8B Lunaris',
    description: 'text->text',
    context_length: 8192,
    pricing: {
      prompt: '0.00000004',
      completion: '0.00000005',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Sao10k',
    type: 'text',
    isFree: true,
  },
  {
    id: 'mancer/weaver',
    name: 'Mancer: Weaver (alpha)',
    description: 'text->text',
    context_length: 8000,
    pricing: {
      prompt: '0.00000075',
      completion: '0.000001',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Mancer',
    type: 'text',
    isFree: true,
  },
  {
    id: 'undi95/remm-slerp-l2-13b',
    name: 'ReMM SLERP 13B',
    description: 'text->text',
    context_length: 6144,
    pricing: {
      prompt: '0.00000045',
      completion: '0.00000065',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Undi95',
    type: 'text',
    isFree: true,
  },
  {
    id: 'gryphe/mythomax-l2-13b',
    name: 'MythoMax 13B',
    description: 'text->text',
    context_length: 4096,
    pricing: {
      prompt: '0.00000006',
      completion: '0.00000006',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Gryphe',
    type: 'text',
    isFree: true,
  },
  {
    id: 'openai/gpt-5.4',
    name: 'OpenAI: GPT-5.4',
    description: 'text+image+file->text',
    context_length: 1050000,
    pricing: {
      prompt: '0.0000025',
      completion: '0.000015',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'OpenAI',
    type: 'multimodal',
  },
  {
    id: 'openai/gpt-5.3-chat',
    name: 'OpenAI: GPT-5.3 Chat',
    description: 'text+image+file->text',
    context_length: 128000,
    pricing: {
      prompt: '0.00000175',
      completion: '0.000014',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'OpenAI',
    type: 'multimodal',
  },
  {
    id: 'openai/gpt-5.3-codex',
    name: 'OpenAI: GPT-5.3-Codex',
    description: 'text+image+file->text',
    context_length: 400000,
    pricing: {
      prompt: '0.00000175',
      completion: '0.000014',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'OpenAI',
    type: 'multimodal',
  },
  {
    id: 'openai/gpt-audio',
    name: 'OpenAI: GPT Audio',
    description: 'text+audio->text+audio',
    context_length: 128000,
    pricing: {
      prompt: '0.0000025',
      completion: '0.00001',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'OpenAI',
    type: 'text',
  },
  {
    id: 'openai/gpt-5.2-codex',
    name: 'OpenAI: GPT-5.2-Codex',
    description: 'text+image->text',
    context_length: 400000,
    pricing: {
      prompt: '0.00000175',
      completion: '0.000014',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'OpenAI',
    type: 'text',
  },
  {
    id: 'openai/gpt-5.2-chat',
    name: 'OpenAI: GPT-5.2 Chat',
    description: 'text+image+file->text',
    context_length: 128000,
    pricing: {
      prompt: '0.00000175',
      completion: '0.000014',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'OpenAI',
    type: 'multimodal',
  },
  {
    id: 'openai/gpt-5.2-pro',
    name: 'OpenAI: GPT-5.2 Pro',
    description: 'text+image+file->text',
    context_length: 400000,
    pricing: {
      prompt: '0.000021',
      completion: '0.000168',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'OpenAI',
    type: 'multimodal',
  },
  {
    id: 'openai/gpt-5.2',
    name: 'OpenAI: GPT-5.2',
    description: 'text+image+file->text',
    context_length: 400000,
    pricing: {
      prompt: '0.00000175',
      completion: '0.000014',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'OpenAI',
    type: 'multimodal',
  },
  {
    id: 'openai/gpt-5.1-codex-max',
    name: 'OpenAI: GPT-5.1-Codex-Max',
    description: 'text+image->text',
    context_length: 400000,
    pricing: {
      prompt: '0.00000125',
      completion: '0.00001',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'OpenAI',
    type: 'text',
  },
  {
    id: 'openai/gpt-5.1',
    name: 'OpenAI: GPT-5.1',
    description: 'text+image+file->text',
    context_length: 400000,
    pricing: {
      prompt: '0.00000125',
      completion: '0.00001',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'OpenAI',
    type: 'multimodal',
  },
  {
    id: 'openai/gpt-5.1-chat',
    name: 'OpenAI: GPT-5.1 Chat',
    description: 'text+image+file->text',
    context_length: 128000,
    pricing: {
      prompt: '0.00000125',
      completion: '0.00001',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'OpenAI',
    type: 'multimodal',
  },
  {
    id: 'openai/gpt-5.1-codex',
    name: 'OpenAI: GPT-5.1-Codex',
    description: 'text+image->text',
    context_length: 400000,
    pricing: {
      prompt: '0.00000125',
      completion: '0.00001',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'OpenAI',
    type: 'text',
  },
  {
    id: 'openai/gpt-5-image-mini',
    name: 'OpenAI: GPT-5 Image Mini',
    description: 'text+image+file->text+image',
    context_length: 400000,
    pricing: {
      prompt: '0.0000025',
      completion: '0.000002',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'OpenAI',
    type: 'multimodal',
  },
  {
    id: 'openai/gpt-5-image',
    name: 'OpenAI: GPT-5 Image',
    description: 'text+image+file->text+image',
    context_length: 400000,
    pricing: {
      prompt: '0.00001',
      completion: '0.00001',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'OpenAI',
    type: 'multimodal',
  },
  {
    id: 'openai/o3-deep-research',
    name: 'OpenAI: o3 Deep Research',
    description: 'text+image+file->text',
    context_length: 200000,
    pricing: {
      prompt: '0.00001',
      completion: '0.00004',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'OpenAI',
    type: 'multimodal',
  },
  {
    id: 'openai/o4-mini-deep-research',
    name: 'OpenAI: o4 Mini Deep Research',
    description: 'text+image+file->text',
    context_length: 200000,
    pricing: {
      prompt: '0.000002',
      completion: '0.000008',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'OpenAI',
    type: 'multimodal',
  },
  {
    id: 'openai/gpt-5-pro',
    name: 'OpenAI: GPT-5 Pro',
    description: 'text+image+file->text',
    context_length: 400000,
    pricing: {
      prompt: '0.000015',
      completion: '0.00012',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'OpenAI',
    type: 'multimodal',
  },
  {
    id: 'openai/gpt-5-codex',
    name: 'OpenAI: GPT-5 Codex',
    description: 'text+image->text',
    context_length: 400000,
    pricing: {
      prompt: '0.00000125',
      completion: '0.00001',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'OpenAI',
    type: 'text',
  },
  {
    id: 'openai/gpt-4o-audio-preview',
    name: 'OpenAI: GPT-4o Audio',
    description: 'text+audio->text+audio',
    context_length: 128000,
    pricing: {
      prompt: '0.0000025',
      completion: '0.00001',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'OpenAI',
    type: 'text',
  },
  {
    id: 'openai/gpt-5-chat',
    name: 'OpenAI: GPT-5 Chat',
    description: 'text+image+file->text',
    context_length: 128000,
    pricing: {
      prompt: '0.00000125',
      completion: '0.00001',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'OpenAI',
    type: 'multimodal',
  },
  {
    id: 'openai/gpt-5',
    name: 'OpenAI: GPT-5',
    description: 'text+image+file->text',
    context_length: 400000,
    pricing: {
      prompt: '0.00000125',
      completion: '0.00001',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'OpenAI',
    type: 'multimodal',
  },
  {
    id: 'openai/o3-pro',
    name: 'OpenAI: o3 Pro',
    description: 'text+image+file->text',
    context_length: 200000,
    pricing: {
      prompt: '0.00002',
      completion: '0.00008',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'OpenAI',
    type: 'multimodal',
  },
  {
    id: 'openai/o4-mini-high',
    name: 'OpenAI: o4 Mini High',
    description: 'text+image+file->text',
    context_length: 200000,
    pricing: {
      prompt: '0.0000011',
      completion: '0.0000044',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'OpenAI',
    type: 'multimodal',
  },
  {
    id: 'openai/o3',
    name: 'OpenAI: o3',
    description: 'text+image+file->text',
    context_length: 200000,
    pricing: {
      prompt: '0.000002',
      completion: '0.000008',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'OpenAI',
    type: 'multimodal',
  },
  {
    id: 'openai/o4-mini',
    name: 'OpenAI: o4 Mini',
    description: 'text+image+file->text',
    context_length: 200000,
    pricing: {
      prompt: '0.0000011',
      completion: '0.0000044',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'OpenAI',
    type: 'multimodal',
  },
  {
    id: 'openai/gpt-4.1',
    name: 'OpenAI: GPT-4.1',
    description: 'text+image+file->text',
    context_length: 1047576,
    pricing: {
      prompt: '0.000002',
      completion: '0.000008',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'OpenAI',
    type: 'multimodal',
  },
  {
    id: 'openai/o1-pro',
    name: 'OpenAI: o1-pro',
    description: 'text+image+file->text',
    context_length: 200000,
    pricing: {
      prompt: '0.00015',
      completion: '0.0006',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'OpenAI',
    type: 'multimodal',
  },
  {
    id: 'openai/gpt-4o-search-preview',
    name: 'OpenAI: GPT-4o Search Preview',
    description: 'text->text',
    context_length: 128000,
    pricing: {
      prompt: '0.0000025',
      completion: '0.00001',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'OpenAI',
    type: 'text',
  },
  {
    id: 'openai/o3-mini-high',
    name: 'OpenAI: o3 Mini High',
    description: 'text+file->text',
    context_length: 200000,
    pricing: {
      prompt: '0.0000011',
      completion: '0.0000044',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'OpenAI',
    type: 'text',
  },
  {
    id: 'openai/o3-mini',
    name: 'OpenAI: o3 Mini',
    description: 'text+file->text',
    context_length: 200000,
    pricing: {
      prompt: '0.0000011',
      completion: '0.0000044',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'OpenAI',
    type: 'text',
  },
  {
    id: 'openai/o1',
    name: 'OpenAI: o1',
    description: 'text+image+file->text',
    context_length: 200000,
    pricing: {
      prompt: '0.000015',
      completion: '0.00006',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'OpenAI',
    type: 'multimodal',
  },
  {
    id: 'openai/gpt-4o-2024-11-20',
    name: 'OpenAI: GPT-4o (2024-11-20)',
    description: 'text+image+file->text',
    context_length: 128000,
    pricing: {
      prompt: '0.0000025',
      completion: '0.00001',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'OpenAI',
    type: 'multimodal',
  },
  {
    id: 'openai/gpt-4o-2024-08-06',
    name: 'OpenAI: GPT-4o (2024-08-06)',
    description: 'text+image+file->text',
    context_length: 128000,
    pricing: {
      prompt: '0.0000025',
      completion: '0.00001',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'OpenAI',
    type: 'multimodal',
  },
  {
    id: 'openai/gpt-4o-2024-05-13',
    name: 'OpenAI: GPT-4o (2024-05-13)',
    description: 'text+image+file->text',
    context_length: 128000,
    pricing: {
      prompt: '0.000005',
      completion: '0.000015',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'OpenAI',
    type: 'multimodal',
  },
  {
    id: 'openai/gpt-4o',
    name: 'OpenAI: GPT-4o',
    description: 'text+image+file->text',
    context_length: 128000,
    pricing: {
      prompt: '0.0000025',
      completion: '0.00001',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'OpenAI',
    type: 'multimodal',
  },
  {
    id: 'openai/gpt-4o:extended',
    name: 'OpenAI: GPT-4o (extended)',
    description: 'text+image+file->text',
    context_length: 128000,
    pricing: {
      prompt: '0.000006',
      completion: '0.000018',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'OpenAI',
    type: 'multimodal',
  },
  {
    id: 'openai/gpt-4-turbo',
    name: 'OpenAI: GPT-4 Turbo',
    description: 'text+image->text',
    context_length: 128000,
    pricing: {
      prompt: '0.00001',
      completion: '0.00003',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'OpenAI',
    type: 'text',
  },
  {
    id: 'openai/gpt-3.5-turbo-0613',
    name: 'OpenAI: GPT-3.5 Turbo (older v0613)',
    description: 'text->text',
    context_length: 4095,
    pricing: {
      prompt: '0.000001',
      completion: '0.000002',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'OpenAI',
    type: 'text',
  },
  {
    id: 'openai/gpt-4-turbo-preview',
    name: 'OpenAI: GPT-4 Turbo Preview',
    description: 'text->text',
    context_length: 128000,
    pricing: {
      prompt: '0.00001',
      completion: '0.00003',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'OpenAI',
    type: 'text',
  },
  {
    id: 'openai/gpt-4-1106-preview',
    name: 'OpenAI: GPT-4 Turbo (older v1106)',
    description: 'text->text',
    context_length: 128000,
    pricing: {
      prompt: '0.00001',
      completion: '0.00003',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'OpenAI',
    type: 'text',
  },
  {
    id: 'openai/gpt-3.5-turbo-instruct',
    name: 'OpenAI: GPT-3.5 Turbo Instruct',
    description: 'text->text',
    context_length: 4095,
    pricing: {
      prompt: '0.0000015',
      completion: '0.000002',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'OpenAI',
    type: 'text',
  },
  {
    id: 'openai/gpt-3.5-turbo-16k',
    name: 'OpenAI: GPT-3.5 Turbo 16k',
    description: 'text->text',
    context_length: 16385,
    pricing: {
      prompt: '0.000003',
      completion: '0.000004',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'OpenAI',
    type: 'text',
  },
  {
    id: 'openai/gpt-4-0314',
    name: 'OpenAI: GPT-4 (older v0314)',
    description: 'text->text',
    context_length: 8191,
    pricing: {
      prompt: '0.00003',
      completion: '0.00006',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'OpenAI',
    type: 'text',
  },
  {
    id: 'openai/gpt-4',
    name: 'OpenAI: GPT-4',
    description: 'text->text',
    context_length: 8191,
    pricing: {
      prompt: '0.00003',
      completion: '0.00006',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'OpenAI',
    type: 'text',
  },
  {
    id: 'mistralai/mistral-large-2411',
    name: 'Mistral Large 2411',
    description: 'text->text',
    context_length: 131072,
    pricing: {
      prompt: '0.000002',
      completion: '0.000006',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Mistral',
    type: 'text',
  },
  {
    id: 'mistralai/mistral-large-2407',
    name: 'Mistral Large 2407',
    description: 'text->text',
    context_length: 131072,
    pricing: {
      prompt: '0.000002',
      completion: '0.000006',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Mistral',
    type: 'text',
  },
  {
    id: 'mistralai/pixtral-large-2411',
    name: 'Mistral: Pixtral Large 2411',
    description: 'text+image->text',
    context_length: 131072,
    pricing: {
      prompt: '0.000002',
      completion: '0.000006',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Mistral',
    type: 'text',
  },
  {
    id: 'mistralai/mixtral-8x22b-instruct',
    name: 'Mistral: Mixtral 8x22B Instruct',
    description: 'text->text',
    context_length: 65536,
    pricing: {
      prompt: '0.000002',
      completion: '0.000006',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Mistral',
    type: 'text',
  },
  {
    id: 'mistralai/mistral-large',
    name: 'Mistral Large',
    description: 'text->text',
    context_length: 128000,
    pricing: {
      prompt: '0.000002',
      completion: '0.000006',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Mistral',
    type: 'text',
  },
  {
    id: 'x-ai/grok-4.20-multi-agent-beta',
    name: 'xAI: Grok 4.20 Multi-Agent Beta',
    description: 'text+image->text',
    context_length: 2000000,
    pricing: {
      prompt: '0.000002',
      completion: '0.000006',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'xAI',
    type: 'text',
  },
  {
    id: 'x-ai/grok-4.20-beta',
    name: 'xAI: Grok 4.20 Beta',
    description: 'text+image->text',
    context_length: 2000000,
    pricing: {
      prompt: '0.000002',
      completion: '0.000006',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'xAI',
    type: 'text',
  },
  {
    id: 'x-ai/grok-4',
    name: 'xAI: Grok 4',
    description: 'text+image->text',
    context_length: 256000,
    pricing: {
      prompt: '0.000003',
      completion: '0.000015',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'xAI',
    type: 'text',
  },
  {
    id: 'x-ai/grok-3',
    name: 'xAI: Grok 3',
    description: 'text->text',
    context_length: 131072,
    pricing: {
      prompt: '0.000003',
      completion: '0.000015',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'xAI',
    type: 'text',
  },
  {
    id: 'x-ai/grok-3-beta',
    name: 'xAI: Grok 3 Beta',
    description: 'text->text',
    context_length: 131072,
    pricing: {
      prompt: '0.000003',
      completion: '0.000015',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'xAI',
    type: 'text',
  },
  {
    id: 'nvidia/llama-3.1-nemotron-70b-instruct',
    name: 'NVIDIA: Llama 3.1 Nemotron 70B Instruct',
    description: 'text->text',
    context_length: 131072,
    pricing: {
      prompt: '0.0000012',
      completion: '0.0000012',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'NVIDIA',
    type: 'text',
  },
  {
    id: 'qwen/qwen-max',
    name: 'Qwen: Qwen-Max ',
    description: 'text->text',
    context_length: 32768,
    pricing: {
      prompt: '0.00000104',
      completion: '0.00000416',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Qwen',
    type: 'text',
  },
  {
    id: 'google/gemini-3.1-pro-preview-customtools',
    name: 'Google: Gemini 3.1 Pro Preview Custom Tools',
    description: 'text+image+file+audio+video->text',
    context_length: 1048576,
    pricing: {
      prompt: '0.000002',
      completion: '0.000012',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Google',
    type: 'multimodal',
  },
  {
    id: 'google/gemini-3-pro-image-preview',
    name: 'Google: Nano Banana Pro (Gemini 3 Pro Image Preview)',
    description: 'text+image->text+image',
    context_length: 65536,
    pricing: {
      prompt: '0.000002',
      completion: '0.000012',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Google',
    type: 'text',
  },
  {
    id: 'google/gemini-3-pro-preview',
    name: 'Google: Gemini 3 Pro Preview',
    description: 'text+image+file+audio+video->text',
    context_length: 1048576,
    pricing: {
      prompt: '0.000002',
      completion: '0.000012',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Google',
    type: 'multimodal',
  },
  {
    id: 'google/gemini-2.5-pro',
    name: 'Google: Gemini 2.5 Pro',
    description: 'text+image+file+audio+video->text',
    context_length: 1048576,
    pricing: {
      prompt: '0.00000125',
      completion: '0.00001',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Google',
    type: 'multimodal',
  },
  {
    id: 'google/gemini-2.5-pro-preview',
    name: 'Google: Gemini 2.5 Pro Preview 06-05',
    description: 'text+image+file+audio->text',
    context_length: 1048576,
    pricing: {
      prompt: '0.00000125',
      completion: '0.00001',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Google',
    type: 'multimodal',
  },
  {
    id: 'google/gemini-2.5-pro-preview-05-06',
    name: 'Google: Gemini 2.5 Pro Preview 05-06',
    description: 'text+image+file+audio+video->text',
    context_length: 1048576,
    pricing: {
      prompt: '0.00000125',
      completion: '0.00001',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Google',
    type: 'multimodal',
  },
  {
    id: 'aion-labs/aion-1.0',
    name: 'AionLabs: Aion-1.0',
    description: 'text->text',
    context_length: 131072,
    pricing: {
      prompt: '0.000004',
      completion: '0.000008',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Aion-labs',
    type: 'text',
  },
  {
    id: 'anthropic/claude-sonnet-4.6',
    name: 'Anthropic: Claude Sonnet 4.6',
    description: 'text+image->text',
    context_length: 1000000,
    pricing: {
      prompt: '0.000003',
      completion: '0.000015',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Anthropic',
    type: 'text',
  },
  {
    id: 'anthropic/claude-opus-4.6',
    name: 'Anthropic: Claude Opus 4.6',
    description: 'text+image->text',
    context_length: 1000000,
    pricing: {
      prompt: '0.000005',
      completion: '0.000025',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Anthropic',
    type: 'text',
  },
  {
    id: 'anthropic/claude-opus-4.5',
    name: 'Anthropic: Claude Opus 4.5',
    description: 'text+image+file->text',
    context_length: 200000,
    pricing: {
      prompt: '0.000005',
      completion: '0.000025',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Anthropic',
    type: 'multimodal',
  },
  {
    id: 'anthropic/claude-haiku-4.5',
    name: 'Anthropic: Claude Haiku 4.5',
    description: 'text+image->text',
    context_length: 200000,
    pricing: {
      prompt: '0.000001',
      completion: '0.000005',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Anthropic',
    type: 'text',
  },
  {
    id: 'anthropic/claude-sonnet-4.5',
    name: 'Anthropic: Claude Sonnet 4.5',
    description: 'text+image+file->text',
    context_length: 1000000,
    pricing: {
      prompt: '0.000003',
      completion: '0.000015',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Anthropic',
    type: 'multimodal',
  },
  {
    id: 'anthropic/claude-opus-4.1',
    name: 'Anthropic: Claude Opus 4.1',
    description: 'text+image+file->text',
    context_length: 200000,
    pricing: {
      prompt: '0.000015',
      completion: '0.000075',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Anthropic',
    type: 'multimodal',
  },
  {
    id: 'anthropic/claude-opus-4',
    name: 'Anthropic: Claude Opus 4',
    description: 'text+image+file->text',
    context_length: 200000,
    pricing: {
      prompt: '0.000015',
      completion: '0.000075',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Anthropic',
    type: 'multimodal',
  },
  {
    id: 'anthropic/claude-sonnet-4',
    name: 'Anthropic: Claude Sonnet 4',
    description: 'text+image+file->text',
    context_length: 200000,
    pricing: {
      prompt: '0.000003',
      completion: '0.000015',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Anthropic',
    type: 'multimodal',
  },
  {
    id: 'anthropic/claude-3.7-sonnet:thinking',
    name: 'Anthropic: Claude 3.7 Sonnet (thinking)',
    description: 'text+image+file->text',
    context_length: 200000,
    pricing: {
      prompt: '0.000003',
      completion: '0.000015',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Anthropic',
    type: 'multimodal',
  },
  {
    id: 'anthropic/claude-3.5-sonnet',
    name: 'Anthropic: Claude 3.5 Sonnet',
    description: 'text+image+file->text',
    context_length: 200000,
    pricing: {
      prompt: '0.000006',
      completion: '0.00003',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Anthropic',
    type: 'multimodal',
  },
  {
    id: 'relace/relace-search',
    name: 'Relace: Relace Search',
    description: 'text->text',
    context_length: 256000,
    pricing: {
      prompt: '0.000001',
      completion: '0.000003',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Relace',
    type: 'text',
  },
  {
    id: 'amazon/nova-premier-v1',
    name: 'Amazon: Nova Premier 1.0',
    description: 'text+image->text',
    context_length: 1000000,
    pricing: {
      prompt: '0.0000025',
      completion: '0.0000125',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Amazon',
    type: 'text',
  },
  {
    id: 'deepcogito/cogito-v2.1-671b',
    name: 'Deep Cogito: Cogito v2.1 671B',
    description: 'text->text',
    context_length: 128000,
    pricing: {
      prompt: '0.00000125',
      completion: '0.00000125',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Deepcogito',
    type: 'text',
  },
  {
    id: 'perplexity/sonar-pro-search',
    name: 'Perplexity: Sonar Pro Search',
    description: 'text+image->text',
    context_length: 200000,
    pricing: {
      prompt: '0.000003',
      completion: '0.000015',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Perplexity',
    type: 'text',
  },
  {
    id: 'perplexity/sonar-reasoning-pro',
    name: 'Perplexity: Sonar Reasoning Pro',
    description: 'text+image->text',
    context_length: 128000,
    pricing: {
      prompt: '0.000002',
      completion: '0.000008',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Perplexity',
    type: 'text',
  },
  {
    id: 'perplexity/sonar-pro',
    name: 'Perplexity: Sonar Pro',
    description: 'text+image->text',
    context_length: 200000,
    pricing: {
      prompt: '0.000003',
      completion: '0.000015',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Perplexity',
    type: 'text',
  },
  {
    id: 'perplexity/sonar-deep-research',
    name: 'Perplexity: Sonar Deep Research',
    description: 'text->text',
    context_length: 128000,
    pricing: {
      prompt: '0.000002',
      completion: '0.000008',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Perplexity',
    type: 'text',
  },
  {
    id: 'perplexity/sonar',
    name: 'Perplexity: Sonar',
    description: 'text+image->text',
    context_length: 127072,
    pricing: {
      prompt: '0.000001',
      completion: '0.000001',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: true,
      tools: false,
    },
    category: 'Perplexity',
    type: 'text',
  },
  {
    id: 'nousresearch/hermes-4-405b',
    name: 'Nous: Hermes 4 405B',
    description: 'text->text',
    context_length: 131072,
    pricing: {
      prompt: '0.000001',
      completion: '0.000003',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Nousresearch',
    type: 'text',
  },
  {
    id: 'nousresearch/hermes-3-llama-3.1-405b',
    name: 'Nous: Hermes 3 405B Instruct',
    description: 'text->text',
    context_length: 131072,
    pricing: {
      prompt: '0.000001',
      completion: '0.000001',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Nousresearch',
    type: 'text',
  },
  {
    id: 'ai21/jamba-large-1.7',
    name: 'AI21: Jamba Large 1.7',
    description: 'text->text',
    context_length: 256000,
    pricing: {
      prompt: '0.000002',
      completion: '0.000008',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Ai21',
    type: 'text',
  },
  {
    id: 'meta-llama/llama-3.1-405b',
    name: 'Meta: Llama 3.1 405B (base)',
    description: 'text->text',
    context_length: 32768,
    pricing: {
      prompt: '0.000004',
      completion: '0.000004',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Meta-llama',
    type: 'text',
  },
  {
    id: 'cohere/command-a',
    name: 'Cohere: Command A',
    description: 'text->text',
    context_length: 256000,
    pricing: {
      prompt: '0.0000025',
      completion: '0.00001',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Cohere',
    type: 'text',
  },
  {
    id: 'cohere/command-r-plus-08-2024',
    name: 'Cohere: Command R+ (08-2024)',
    description: 'text->text',
    context_length: 128000,
    pricing: {
      prompt: '0.0000025',
      completion: '0.00001',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Cohere',
    type: 'text',
  },
  {
    id: 'sao10k/l3.1-70b-hanami-x1',
    name: 'Sao10K: Llama 3.1 70B Hanami x1',
    description: 'text->text',
    context_length: 16000,
    pricing: {
      prompt: '0.000003',
      completion: '0.000003',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Sao10k',
    type: 'text',
  },
  {
    id: 'sao10k/l3-euryale-70b',
    name: 'Sao10k: Llama 3 Euryale 70B v2.1',
    description: 'text->text',
    context_length: 8192,
    pricing: {
      prompt: '0.00000148',
      completion: '0.00000148',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Sao10k',
    type: 'text',
  },
  {
    id: 'anthracite-org/magnum-v4-72b',
    name: 'Magnum v4 72B',
    description: 'text->text',
    context_length: 16384,
    pricing: {
      prompt: '0.000003',
      completion: '0.000005',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Anthracite-org',
    type: 'text',
  },
  {
    id: 'inflection/inflection-3-pi',
    name: 'Inflection: Inflection 3 Pi',
    description: 'text->text',
    context_length: 8000,
    pricing: {
      prompt: '0.0000025',
      completion: '0.00001',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Inflection',
    type: 'text',
  },
  {
    id: 'inflection/inflection-3-productivity',
    name: 'Inflection: Inflection 3 Productivity',
    description: 'text->text',
    context_length: 8000,
    pricing: {
      prompt: '0.0000025',
      completion: '0.00001',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Inflection',
    type: 'text',
  },
  {
    id: 'alpindale/goliath-120b',
    name: 'Goliath 120B',
    description: 'text->text',
    context_length: 6144,
    pricing: {
      prompt: '0.00000375',
      completion: '0.0000075',
    },
    top_provider: {
      max_completion_tokens: null,
    },
    capabilities: {
      vision: false,
      tools: false,
    },
    category: 'Alpindale',
    type: 'text',
  },
]

export const MODEL_CATEGORIES = [
  'Ai21',
  'Aion-labs',
  'Alfredpros',
  'Alibaba',
  'Allenai',
  'Alpindale',
  'Amazon',
  'Anthracite-org',
  'Anthropic',
  'Arcee-ai',
  'Baidu',
  'ByteDance',
  'Bytedance',
  'Cognitivecomputations',
  'Cohere',
  'DeepSeek',
  'Deepcogito',
  'Eleutherai',
  'Essentialai',
  'Google',
  'Gryphe',
  'Ibm-granite',
  'Inception',
  'Inflection',
  'Kwaipilot',
  'Liquid',
  'Mancer',
  'Meituan',
  'Meta-llama',
  'Microsoft',
  'Minimax',
  'Mistral',
  'Moonshotai',
  'Morph',
  'NVIDIA',
  'Nex-agi',
  'Nousresearch',
  'OpenAI',
  'OpenRouter',
  'Perplexity',
  'Prime-intellect',
  'Qwen',
  'Relace',
  'Sao10k',
  'Stepfun',
  'Switchpoint',
  'Tencent',
  'Thedrummer',
  'Tngtech',
  'Undi95',
  'Upstage',
  'Writer',
  'Xiaomi',
  'Z-ai',
  'xAI',
]

export function getModelById(id: string): OpenRouterModel | undefined {
  return OPENROUTER_MODELS.find(m => m.id === id)
}

export function getModelsByCategory(category: string): OpenRouterModel[] {
  return OPENROUTER_MODELS.filter(m => m.category === category)
}

export function getModelsByType(type: string): OpenRouterModel[] {
  return OPENROUTER_MODELS.filter(m => m.type === type)
}
