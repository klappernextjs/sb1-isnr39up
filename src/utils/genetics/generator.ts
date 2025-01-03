import type { Kitty, Gene, GeneType } from '../../types/Kitty';

const GENE_TYPES: GeneType[] = ['body', 'pattern', 'eye', 'accent', 'highlight', 'mouth', 'special'];

function generateRandomGene(type: GeneType): Gene {
  return {
    type,
    value: Math.floor(Math.random() * 256),
    dominant: Math.random() < 0.5
  };
}

export function generateKitty(name: string, owner: string): Kitty {
  // Generate random genes for each type
  const genes: Gene[] = GENE_TYPES.map(type => generateRandomGene(type));

  return {
    id: crypto.randomUUID(),
    name,
    genome: {
      genes,
      generation: 0 // First generation
    },
    birthTime: Date.now(),
    generation: 0,
    breedCount: 0,
    cooldownEnd: Date.now(),
    owner
  };
}