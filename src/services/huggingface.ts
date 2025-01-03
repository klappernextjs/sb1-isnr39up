import { HF_API_TOKEN } from '../config/env';

const HF_MODEL_ID = 'runwayml/stable-diffusion-v1-5';
const API_URL = `https://api-inference.huggingface.co/models/${HF_MODEL_ID}`;

export interface GenerateImageOptions {
  color: string;
  pattern: string;
  personality: string[];
  accessories?: string[];
}

export async function generateCatImage(options: GenerateImageOptions): Promise<string> {
  const prompt = constructPrompt(options);

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${HF_API_TOKEN}`,
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
  } catch (error) {
    console.error('Image generation failed:', error);
    throw new Error('Failed to generate cat image');
  }
}

function constructPrompt({ color, pattern, personality, accessories = [] }: GenerateImageOptions): string {
  const traits = [
    `${color} cat`,
    pattern !== 'solid' ? `with ${pattern} pattern` : '',
    ...personality.map(p => `${p} expression`),
    ...accessories.map(a => `wearing ${a}`),
  ].filter(Boolean);

  return `A high-quality digital art of a cute ${traits.join(', ')}, 
    cartoon style, vibrant colors, detailed features, trending on artstation`;
}