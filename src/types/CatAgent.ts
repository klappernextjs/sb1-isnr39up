export interface CatAgent {
  id: string;
  name: string;
  personality: string[];
  expertise: string[];
  goals: string[];
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  imageUrl: string;
  price?: string;
  owner?: string;
}