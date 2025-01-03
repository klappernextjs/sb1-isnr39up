import type { ImageGenerationOptions } from '../../types/Generation';

export function buildImagePrompt(options: ImageGenerationOptions): string {
  const traits = [
    `${options.baseColor} cat`,
    options.pattern !== 'solid' ? `with ${options.pattern} pattern` : '',
    ...options.personality.map(p => `${p} expression`),
    ...(options.specialFeatures || []).map(f => `with ${f}`)
  ].filter(Boolean);

  return `masterpiece, best quality, highly detailed digital art of a cute ${traits.join(', ')}, 
    anime style, vibrant colors, soft lighting, smooth texture, trending on artstation`;
}