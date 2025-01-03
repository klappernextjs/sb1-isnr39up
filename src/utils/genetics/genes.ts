import type { Gene, GeneType } from '../../types/Kitty';

// Probability of mutation during breeding (0-1)
const MUTATION_PROBABILITY = 0.02;

// Probability of child inheriting dominant gene
const DOMINANT_GENE_PROBABILITY = 0.75;

export function mixGenes(motherGene: Gene, fatherGene: Gene): Gene {
  // Check for mutation
  if (Math.random() < MUTATION_PROBABILITY) {
    return createMutatedGene(motherGene.type);
  }

  // Determine which parent's gene to inherit
  const inheritDominant = Math.random() < DOMINANT_GENE_PROBABILITY;
  
  if (motherGene.dominant && !fatherGene.dominant) {
    return inheritDominant ? motherGene : fatherGene;
  } else if (!motherGene.dominant && fatherGene.dominant) {
    return inheritDominant ? fatherGene : motherGene;
  }
  
  // If both genes are dominant or both recessive, randomly choose
  return Math.random() < 0.5 ? motherGene : fatherGene;
}

function createMutatedGene(type: GeneType): Gene {
  return {
    type,
    value: Math.floor(Math.random() * 256), // 0-255
    dominant: Math.random() < 0.1 // 10% chance of dominant mutation
  };
}