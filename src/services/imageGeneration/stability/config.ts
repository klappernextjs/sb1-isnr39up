import { STABILITY_API_KEY } from '../../../config/env';

export const config = {
  apiKey: STABILITY_API_KEY,
  apiUrl: 'https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/text-to-image',
  defaultParams: {
    width: 512,
    height: 512,
    steps: 30,
    cfg_scale: 7,
    samples: 1,
    style_preset: 'anime'
  }
} as const;