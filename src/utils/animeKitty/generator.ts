import { AnimeKitty, AnimeKittyTraits } from '../../types/AnimeKitty';
import { KITTY_COLORS } from './traits';

function getRandomItem<T>(array: readonly T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

function generateTraits(): AnimeKittyTraits {
  const baseColor = getRandomItem(KITTY_COLORS.base);
  const eyeColor = getRandomItem(KITTY_COLORS.eyes);
  const expression = getRandomItem(KITTY_COLORS.expressions);
  
  // Random number of accessories (0-2)
  const accessories = [...KITTY_COLORS.accessories]
    .sort(() => Math.random() - 0.5)
    .slice(0, Math.floor(Math.random() * 3));
    
  // Random special feature (20% chance)
  const specialFeatures = Math.random() < 0.2 
    ? [getRandomItem(KITTY_COLORS.specialFeatures)]
    : [];

  return {
    baseColor: baseColor.id,
    eyeColor: eyeColor.id,
    accessories,
    expression,
    specialFeatures,
  };
}

function calculateRarity(traits: AnimeKittyTraits): AnimeKitty['rarity'] {
  const score = traits.accessories.length + traits.specialFeatures.length;
  
  if (score >= 4) return 'legendary';
  if (score >= 3) return 'epic';
  if (score >= 2) return 'rare';
  return 'common';
}

export function generateAnimeKitty(name: string): AnimeKitty {
  const traits = generateTraits();
  const rarity = calculateRarity(traits);
  
  // For now, using placeholder images based on traits
  const imageUrl = `https://api.dicebear.com/7.x/big-smile/svg?seed=${name}&backgroundColor=${traits.baseColor}`;

  return {
    id: crypto.randomUUID(),
    name,
    traits,
    imageUrl,
    rarity,
    created: Date.now(),
  };
}