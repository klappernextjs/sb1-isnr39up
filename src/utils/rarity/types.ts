export type Rarity = 'legendary' | 'epic' | 'rare' | 'common';

export interface RarityCalculationOptions {
  specialFeatures?: string[];
  personality?: string[];
  baseColor?: string;
}