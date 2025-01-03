import { CAT_IMAGES } from './catImages';
import type { CatTraits } from '../types/CatTraits';

export const generateCatImage = (traits: CatTraits): string => {
  // Default to orange if color not found
  const colorImages = CAT_IMAGES[traits.baseColor as keyof typeof CAT_IMAGES] || CAT_IMAGES.orange;
  
  // Default to solid if pattern not found
  const imageUrl = colorImages[traits.pattern as keyof typeof CAT_IMAGES.orange] || colorImages.solid;

  return imageUrl;
};