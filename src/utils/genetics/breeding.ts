import type { Kitty, Gene } from '../../types/Kitty';
import { mixGenes } from './genes';
import { getNextCooldownIndex } from './cooldowns';

export function canBreed(matron: Kitty, sire: Kitty): boolean {
  const now = Date.now();
  return (
    matron.cooldownEnd < now &&
    sire.cooldownEnd < now &&
    matron.id !== sire.id && // Can't breed with self
    !areDirectRelatives(matron, sire)
  );
}

function areDirectRelatives(kitty1: Kitty, kitty2: Kitty): boolean {
  return (
    kitty1.matronId === kitty2.id ||
    kitty1.sireId === kitty2.id ||
    kitty2.matronId === kitty1.id ||
    kitty2.sireId === kitty1.id ||
    (kitty1.matronId && kitty1.matronId === kitty2.matronId) || // Same mother
    (kitty1.sireId && kitty1.sireId === kitty2.sireId) // Same father
  );
}

export function breed(matron: Kitty, sire: Kitty): Kitty {
  if (!canBreed(matron, sire)) {
    throw new Error('These kitties cannot breed at this time');
  }

  // Mix genes from both parents
  const childGenes: Gene[] = matron.genome.genes.map((motherGene, index) => {
    const fatherGene = sire.genome.genes[index];
    return mixGenes(motherGene, fatherGene);
  });

  // Calculate generation (max of parents + 1)
  const generation = Math.max(matron.generation, sire.generation) + 1;

  // Create new kitty
  const child: Kitty = {
    id: crypto.randomUUID(),
    name: '', // To be set by owner
    genome: {
      genes: childGenes,
      generation
    },
    birthTime: Date.now(),
    generation,
    matronId: matron.id,
    sireId: sire.id,
    breedCount: 0,
    cooldownEnd: Date.now(),
    owner: matron.owner // Initially owned by mother's owner
  };

  // Update parent cooldowns
  matron.breedCount++;
  sire.breedCount++;
  matron.cooldownEnd = Date.now() + getNextCooldownIndex(matron.breedCount as any);
  sire.cooldownEnd = Date.now() + getNextCooldownIndex(sire.breedCount as any);

  return child;
}