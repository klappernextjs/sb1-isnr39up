import { ImageGenerationOptions } from '../../types/Generation';

export function validateImageOptions(options: ImageGenerationOptions): void {
  if (!options.baseColor) {
    throw new Error('Base color is required');
  }
  if (!options.pattern) {
    throw new Error('Pattern is required');
  }
  if (!Array.isArray(options.personality) || options.personality.length === 0) {
    throw new Error('At least one personality trait is required');
  }
}