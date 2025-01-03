import { createAvatar } from '@dicebear/core';
import { bigSmile } from '@dicebear/collection';
import type { ImageGenerationOptions } from '../../types/Generation';

// Map our colors to DiceBear backgroundColor values
const COLOR_MAP = {
  orange: 'ffd280',
  black: '2d3436',
  white: 'ffffff',
  gray: 'b8c5d6',
  brown: '8b4513',
  calico: 'ffeaa7'
};

// Map patterns to DiceBear seed modifiers
const PATTERN_MAP = {
  solid: '',
  striped: '-striped',
  spotted: '-spotted',
  tuxedo: '-tuxedo'
};

export function generateDiceBearAvatar(options: ImageGenerationOptions): string {
  const { baseColor, pattern, personality } = options;
  
  // Create a unique seed based on traits
  const seed = [
    baseColor,
    pattern,
    ...personality
  ].join('-');

  // Get color from map or fallback to orange
  const backgroundColor = COLOR_MAP[baseColor as keyof typeof COLOR_MAP] || COLOR_MAP.orange;
  
  // Create avatar with DiceBear
  const avatar = createAvatar(bigSmile, {
    seed: seed + (PATTERN_MAP[pattern as keyof typeof PATTERN_MAP] || ''),
    backgroundColor: [backgroundColor],
    radius: 10,
    size: 256
  });

  return avatar.toDataUriSync();
}