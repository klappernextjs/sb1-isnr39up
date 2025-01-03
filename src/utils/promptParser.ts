import { GenerationTraits } from '../types/Generation';

const COLORS = ['orange', 'black', 'white', 'gray', 'brown', 'calico'] as const;
const PATTERNS = ['solid', 'striped', 'spotted', 'tuxedo'] as const;
const PERSONALITIES = ['playful', 'mysterious', 'royal', 'cheerful', 'energetic', 'lazy'] as const;

export function parsePrompt(prompt: string): GenerationTraits {
  const promptLower = prompt.toLowerCase();

  // Extract name
  const nameMatch = promptLower.match(/(?:named?|called)\s+([a-z0-9\s]+?)(?=\s+(?:with|who|that|$))/i);
  const name = nameMatch?.[1]?.trim() || 'Unnamed Cat';

  // Extract color (required)
  const color = COLORS.find(c => promptLower.includes(c)) || 'orange';

  // Extract pattern (required)
  const pattern = PATTERNS.find(p => promptLower.includes(p)) || 'solid';

  // Extract personality traits
  const personality = PERSONALITIES.filter(trait => 
    promptLower.includes(trait)
  );

  // Ensure at least one personality trait
  if (personality.length === 0) {
    personality.push('playful');
  }

  return {
    name,
    baseColor: color,
    pattern,
    personality,
    specialFeatures: []
  };
}