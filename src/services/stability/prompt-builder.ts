import { STYLE_PRESETS } from './config';
import type { ImageGenerationOptions } from '../../types/Generation';

export function buildPrompt(options: ImageGenerationOptions): string {
  const traits = [
    `${options.baseColor} cat`,
    options.pattern !== 'solid' ? `with ${options.pattern} pattern` : '',
    ...options.personality.map(p => `${p} expression`),
    ...(options.specialFeatures || []).map(f => `with ${f}`)
  ].filter(Boolean);

  const baseDescription = `cute ${traits.join(', ')}`;
  
  return [
    STYLE_PRESETS.base,
    baseDescription,
    STYLE_PRESETS.style,
    STYLE_PRESETS.lighting,
    STYLE_PRESETS.composition
  ].join(', ');
}