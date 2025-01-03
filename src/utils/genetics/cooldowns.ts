import type { CooldownIndex } from '../../types/Kitty';

// Cooldown times in seconds
export const COOLDOWN_TIMES: Record<CooldownIndex, number> = {
  0: 60,          // 1 minute
  1: 120,         // 2 minutes
  2: 240,         // 4 minutes
  3: 480,         // 8 minutes
  4: 960,         // 16 minutes
  5: 1920,        // 32 minutes
  6: 3840,        // ~1 hour
  7: 7680,        // ~2 hours
  8: 15360,       // ~4 hours
  9: 30720,       // ~8 hours
  10: 61440,      // ~17 hours
  11: 122880,     // ~1.4 days
  12: 245760,     // ~2.8 days
  13: 491520,     // ~5.7 days
};

// After each breeding, the cooldown index increases
export function getNextCooldownIndex(current: CooldownIndex): CooldownIndex {
  return Math.min(13, current + 1) as CooldownIndex;
}