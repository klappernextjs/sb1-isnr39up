import { config } from './config';
import type { ImageGenerationOptions } from '../../../types/Generation';

export async function generateStabilityImage(options: ImageGenerationOptions): Promise<string> {
  const prompt = buildPrompt(options);
  
  const response = await fetch(config.apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${config.apiKey}`
    },
    body: JSON.stringify({
      ...config.defaultParams,
      text_prompts: [
        {
          text: prompt,
          weight: 1
        },
        {
          text: 'blurry, bad quality, distorted, ugly',
          weight: -1
        }
      ]
    })
  });

  if (!response.ok) {
    throw new Error(`Stability API error: ${response.status}`);
  }

  const data = await response.json();
  if (!data.artifacts?.[0]?.base64) {
    throw new Error('No image generated');
  }

  return `data:image/png;base64,${data.artifacts[0].base64}`;
}

function buildPrompt(options: ImageGenerationOptions): string {
  const traits = [
    `${options.baseColor} cat`,
    options.pattern !== 'solid' ? `with ${options.pattern} pattern` : '',
    ...options.personality.map(p => `${p} expression`),
    ...(options.specialFeatures || []).map(f => `with ${f}`)
  ].filter(Boolean);

  return `A high-quality digital art of a cute ${traits.join(', ')}, 
    cartoon style, vibrant colors, detailed features, trending on artstation, 
    professional lighting, soft edges, smooth texture`;
}