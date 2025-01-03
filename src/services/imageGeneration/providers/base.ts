import type { ImageGenerationOptions } from '../../../types/Generation';

export abstract class ImageProvider {
  abstract readonly name: string;
  abstract generate(options: ImageGenerationOptions): Promise<string>;
  
  protected buildBasePrompt(options: ImageGenerationOptions): string {
    const traits = [
      `${options.baseColor} cat`,
      options.pattern !== 'solid' ? `with ${options.pattern} pattern` : '',
      ...options.personality.map(p => `${p} expression`),
      ...(options.specialFeatures || []).map(f => `with ${f}`)
    ].filter(Boolean);

    return `A high-quality digital art of a cute ${traits.join(', ')}, 
      cartoon style, vibrant colors, detailed features, trending on artstation`;
  }
}