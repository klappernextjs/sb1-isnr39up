export type GeneType = 'body' | 'pattern' | 'eye' | 'accent' | 'highlight' | 'mouth' | 'special';

export interface Gene {
  type: GeneType;
  value: number; // 0-255 for genetic variation
  dominant: boolean;
}

export interface KittyGenome {
  genes: Gene[];
  generation: number;
}

export interface Kitty {
  id: string;
  name: string;
  genome: KittyGenome;
  birthTime: number;
  generation: number;
  matronId?: string; // Mother's ID
  sireId?: string;  // Father's ID
  breedCount: number;
  cooldownEnd: number;
  owner: string;
}

export type CooldownIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;