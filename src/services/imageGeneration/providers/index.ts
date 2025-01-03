import { StabilityProvider } from './stability';
import { HuggingFaceProvider } from './huggingface';
import { DiceBearProvider } from './dicebear';
import type { ImageGenerationOptions } from '../../../types/Generation';

const providers = [
  new StabilityProvider(),
  new HuggingFaceProvider(),
  new DiceBearProvider()
];

export async function generateImage(options: ImageGenerationOptions): Promise<string> {
  let lastError: Error | undefined;

  // Try each provider in sequence until one succeeds
  for (const provider of providers) {
    try {
      console.log(`Attempting image generation with ${provider.name}`);
      const result = await provider.generate(options);
      return result;
    } catch (error) {
      console.warn(`${provider.name} generation failed:`, error);
      lastError = error instanceof Error ? error : new Error(String(error));
      continue;
    }
  }

  // If all providers fail, throw the last error
  throw lastError || new Error('All image generation providers failed');
}