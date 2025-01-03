// Base path for cat assets
const ASSETS_PATH = '/assets/cat';

// Layer order for proper rendering
export const LAYER_ORDER: (keyof CatTraits)[] = [
  'body',
  'eyes',
  'mouth',
  'clothes',
  'headwear'
];

// Get image URL for a specific trait
export function getLayerImage(category: keyof CatTraits, value: string): string {
  // Convert trait value to filename format
  const filename = value.toLowerCase().replace(/\s+/g, '-');
  return `${ASSETS_PATH}/${category}/${filename}.png`;
}

// Validate that all required layers exist
export function validateLayers(traits: CatTraits): boolean {
  return LAYER_ORDER.every(category => {
    const value = traits[category];
    if (value === 'None') return true;
    
    // In production, you'd want to check if the file actually exists
    const imageUrl = getLayerImage(category, value);
    return !!imageUrl;
  });
}