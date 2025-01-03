import { PERSONALITY_MODIFIERS, COLOR_MODIFIERS, PATTERN_MODIFIERS, STYLE_PRESETS } from './config';
import type { ImageGenerationOptions } from '../../types/Generation';

export function buildVectorPrompt(options: ImageGenerationOptions): string {
  const baseStyle = [
    STYLE_PRESETS.base,
    STYLE_PRESETS.style,
    STYLE_PRESETS.colors,
    STYLE_PRESETS.composition
  ].join(', ');

  const colorMod = COLOR_MODIFIERS[options.baseColor as keyof typeof COLOR_MODIFIERS] || COLOR_MODIFIERS.orange;
  const patternMod = PATTERN_MODIFIERS[options.pattern as keyof typeof PATTERN_MODIFIERS] || '';
  const personalityMod = options.personality[0] 
    ? PERSONALITY_MODIFIERS[options.personality[0] as keyof typeof PERSONALITY_MODIFIERS] 
    : '';

  const traits = [
    colorMod,
    patternMod,
    personalityMod,
    ...(options.specialFeatures || []).map(f => `with ${f} icon`)
  ].filter(Boolean);

  return `${baseStyle}, ${traits.join(', ')}`;
}