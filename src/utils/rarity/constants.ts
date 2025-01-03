export const RARITY_WEIGHTS = {
  legendary: 0.05, // 5% chance
  epic: 0.15,      // 15% chance
  rare: 0.30,      // 30% chance
  common: 0.50     // 50% chance
} as const;

export const RARITY_BOOST_PER_FEATURE = 0.1; // 10% boost per special feature