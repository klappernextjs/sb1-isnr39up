import { ImageGenerationOptions } from './types';
import { ImageGenerationError } from './errors';

export function validateOptions(options: ImageGenerationOptions): void {
  if (!options.color) {
    throw ImageGenerationError.invalidInput({ field: 'color' });
  }
  if (!options.pattern) {
    throw ImageGenerationError.invalidInput({ field: 'pattern' });
  }
  if (!Array.isArray(options.personality) || options.personality.length === 0) {
    throw ImageGenerationError.invalidInput({ field: 'personality' });
  }
}