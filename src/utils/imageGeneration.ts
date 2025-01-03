import { stabilityGenerator } from '../services/stability/generator';
import type { ImageGenerationOptions } from '../types/Generation';

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80';

export async function generateAgentImage(options: ImageGenerationOptions): Promise<string> {
  try {
    return await stabilityGenerator.generate(options);
  } catch (error) {
    console.error('Failed to generate image:', error);
    return FALLBACK_IMAGE;
  }
}