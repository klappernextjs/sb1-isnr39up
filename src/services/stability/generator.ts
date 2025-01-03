import { STABILITY_CONFIG, NEGATIVE_PROMPTS } from './config';
import { StabilityClient } from './client';
import { buildVectorPrompt } from './prompt-modifiers';
import type { ImageGenerationOptions } from '../../types/Generation';
import type { StabilityParams } from './types';

export class StabilityGenerator {
  private readonly client: StabilityClient;

  constructor() {
    this.client = new StabilityClient();
  }

  async generate(options: ImageGenerationOptions): Promise<string> {
    const prompt = buildVectorPrompt(options);
    console.log('Generated vector prompt:', prompt);

    const params: StabilityParams = {
      ...STABILITY_CONFIG.params,
      text_prompts: [
        { text: prompt, weight: 1 },
        { text: NEGATIVE_PROMPTS, weight: -1 }
      ],
      // Add some controlled randomness while maintaining style consistency
      seed: Math.floor(Math.random() * 1000000)
    };

    try {
      return await this.client.generateImage(params);
    } catch (error) {
      console.error('Vector image generation failed:', error);
      throw error;
    }
  }
}

export const stabilityGenerator = new StabilityGenerator();