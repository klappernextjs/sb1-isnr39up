export const STABILITY_CONFIG = {
  apiKey: 'sk-s8rZpXzpGhfARg4Qk4zJMwHMXoGcSuCRgYLFrD3ezBL39FvK',
  apiUrl: 'https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/text-to-image',
  defaultParams: {
    width: 512, // Reduced for faster generation
    height: 512,
    steps: 30,
    cfg_scale: 7,
    samples: 1,
    style_preset: 'digital-art'
  }
} as const;

export const NEGATIVE_PROMPTS = [
  'blurry', 'bad quality', 'distorted', 'ugly', 'deformed', 
  'low resolution', 'bad anatomy', 'bad proportions', 'duplicate', 
  'watermark', 'signature', 'text'
].join(', ');