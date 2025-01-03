import type { CatTraits } from '../types/CatTraits';

export const validateCatTraits = (traits: Partial<CatTraits>): string | null => {
  if (!traits.baseColor) {
    return 'Please select a base color';
  }
  if (!traits.pattern) {
    return 'Please select a pattern';
  }
  if (!traits.accessory) {
    return 'Please select an accessory (or "none")';
  }
  return null;
};