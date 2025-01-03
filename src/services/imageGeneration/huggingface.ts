import { config } from './config';
import { ImageGenerationOptions, ImageGenerationResult } from './types';
import { ImageGenerationError } from './errors';
import { validateOptions } from './validation';
import { buildImagePrompt } from './prompts';

export async function generateImage(options: ImageGenerationOptions): Promise<ImageGenerationResult> {
  try {
    // Validate input
    validateOptions(options);
    
    // Build prompt
    const prompt = buildImagePrompt(options);

    // Make API request
    const response = await fetch(config.apiUrl, {
      method: 'POST',
      headers: config.headers,
      body: JSON.stringify({ inputs: prompt })
    });

    if (!response.ok) {
      throw ImageGenerationError.apiError(response.status, await response.text());
    }

    // Process response
    const arrayBuffer = await response.arrayBuffer();
    const base64Image = Buffer.from(arrayBuffer).toString('base64');
    
    return {
      url: `data:image/png;base64,${base64Image}`,
      metadata: {
        model: config.modelId,
        prompt,
        timestamp: Date.now()
      }
    };
  } catch (error) {
    if (error instanceof ImageGenerationError) {
      throw error;
    }
    if (error instanceof Error) {
      throw ImageGenerationError.networkError(error);
    }
    throw ImageGenerationError.networkError(error);
  }
}