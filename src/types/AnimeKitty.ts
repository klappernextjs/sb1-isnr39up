export interface AnimeKittyTraits {
  baseColor: string;
  eyeColor: string;
  accessories: string[];
  expression: string;
  specialFeatures: string[];
}

export interface AnimeKitty {
  id: string;
  name: string;
  traits: AnimeKittyTraits;
  imageUrl: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  created: number;
}