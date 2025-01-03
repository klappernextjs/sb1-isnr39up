import { ImageProvider } from './base';
import { config } from '../config';
import type { ImageGenerationOptions } from '../../../types/Generation';
import type { StabilityGenerationParams, StabilityResponse } from '../types';

export class StabilityProvider extends ImageProvider {
  readonly name = 'Stability AI';

  async generate(options: ImageGenerationOptions): Promise<string> {
    const prompt = this.buildBasePrompt(options);
    
    const params: StabilityGenerationParams = {
      ...config.stability.defaultParams,
      text_prompts: [
        { text: prompt, weight: 1 },
        { text: 'blurry, bad quality, distorted, ugly', weight: -1 }
      ]
    };

    const response = await fetch(config.stability.apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${config.stability.apiKey}`
      },
      body: JSON.stringify(params)
    });

    if (!response.ok) {
      throw new Error(`Stability API error: ${response.status}`);
    }

    const data: StabilityResponse = await response.json();
    if (!data.artifacts?.[0]?.base64) {
      throw new Error('No image generated');
    }

    return `data:image/png;base64,${data.artifacts[0].base64}`;
  }
}