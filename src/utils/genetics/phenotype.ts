// Maps genetic values to visual traits
export const PHENOTYPE_MAPS = {
  body: [
    { min: 0, max: 31, trait: 'slim' },
    { min: 32, max: 63, trait: 'normal' },
    { min: 64, max: 95, trait: 'chubby' },
    { min: 96, max: 127, trait: 'fluffy' },
    { min: 128, max: 159, trait: 'long' },
    { min: 160, max: 191, trait: 'muscular' },
    { min: 192, max: 223, trait: 'tiny' },
    { min: 224, max: 255, trait: 'huge' }
  ],
  pattern: [
    { min: 0, max: 31, trait: 'solid' },
    { min: 32, max: 63, trait: 'striped' },
    { min: 64, max: 95, trait: 'spotted' },
    { min: 96, max: 127, trait: 'tuxedo' },
    { min: 128, max: 159, trait: 'tabby' },
    { min: 160, max: 191, trait: 'tortie' },
    { min: 192, max: 223, trait: 'calico' },
    { min: 224, max: 255, trait: 'bicolor' }
  ],
  // Add more phenotype maps for other gene types
} as const;

export function getTraitFromGene(geneValue: number, traitType: keyof typeof PHENOTYPE_MAPS) {
  const map = PHENOTYPE_MAPS[traitType];
  return map.find(range => geneValue >= range.min && geneValue <= range.max)?.trait || 'normal';
}