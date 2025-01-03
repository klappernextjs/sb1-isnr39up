import { STABILITY_CONFIG, NEGATIVE_PROMPTS } from './config';
import { buildImagePrompt } from './prompts';
import type { ImageGenerationOptions } from '../../types/Generation';
import type { StabilityGenerationParams, StabilityResponse } from './types';

export async function generateImage(options: ImageGenerationOptions): Promise<string> {
  const prompt = buildImagePrompt(options);
  
  const params: StabilityGenerationParams = {
    ...STABILITY_CONFIG.defaultParams,
    text_prompts: [
      { text: prompt, weight: 1 },
      { text: NEGATIVE_PROMPTS, weight: -1 }
    ]
  };

  try {
    console.log('Generating image with params:', JSON.stringify(params, null, 2));

    const response = await fetch(STABILITY_CONFIG.apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${STABILITY_CONFIG.apiKey}`
      },
      body: JSON.stringify(params)
    });

    const responseText = await response.text();
    console.log('Stability API response:', responseText);

    if (!response.ok) {
      throw new Error(`Stability API error: ${response.status} - ${responseText}`);
    }

    const data: StabilityResponse = JSON.parse(responseText);
    if (!data.artifacts?.[0]?.base64) {
      throw new Error('No image data in response');
    }

    return `data:image/png;base64,${data.artifacts[0].base64}`;
  } catch (error) {
    console.error('Image generation failed:', error);
    throw error;
  }
}