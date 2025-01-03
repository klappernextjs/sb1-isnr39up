import { ImageProvider } from './base';
import { config } from '../config';
import type { ImageGenerationOptions } from '../../../types/Generation';

export class HuggingFaceProvider extends ImageProvider {
  readonly name = 'Hugging Face';

  async generate(options: ImageGenerationOptions): Promise<string> {
    const prompt = this.buildBasePrompt(options);

    const response = await fetch(config.huggingface.apiUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${config.huggingface.apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ inputs: prompt })
    });

    if (!response.ok) {
      throw new Error(`Hugging Face API error: ${response.status}`);
    }

    const arrayBuffer = await response.arrayBuffer();
    const base64Image = Buffer.from(arrayBuffer).toString('base64');
    return `data:image/png;base64,${base64Image}`;
  }
}