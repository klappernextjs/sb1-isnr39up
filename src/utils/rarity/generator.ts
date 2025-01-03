import { RARITY_WEIGHTS, RARITY_BOOST_PER_FEATURE } from './constants';
import type { Rarity, RarityCalculationOptions } from './types';

export function generateRarity(options: RarityCalculationOptions = {}): Rarity {
  // Calculate boost from special features
  const specialFeaturesBoost = (options.specialFeatures?.length || 0) * RARITY_BOOST_PER_FEATURE;
  
  // Generate random number between 0-1, reduced by the boost
  const random = Math.random() - specialFeaturesBoost;
  
  // Determine rarity based on adjusted random value
  if (random < RARITY_WEIGHTS.legendary) return 'legendary';
  if (random < RARITY_WEIGHTS.legendary + RARITY_WEIGHTS.epic) return 'epic';
  if (random < RARITY_WEIGHTS.legendary + RARITY_WEIGHTS.epic + RARITY_WEIGHTS.rare) return 'rare';
  return 'common';
}

export function validateRarity(rarity: string): rarity is Rarity {
  return ['legendary', 'epic', 'rare', 'common'].includes(rarity);
}