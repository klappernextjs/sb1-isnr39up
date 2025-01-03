import type { CatAgent } from '../types/CatAgent';
import { generateAgentImage } from './imageGeneration';
import { validateImageOptions } from './imageGeneration/validation';
import { generateRarity } from './rarity';

interface GenerateOptions {
  name: string;
  baseColor: string;
  pattern: string;
  personality: string[];
  specialFeatures?: string[];
  index?: number;
}

export async function generateAgent(options: GenerateOptions): Promise<CatAgent> {
  if (!options.name) {
    throw new Error('Name is required');
  }

  try {
    // Validate image generation options
    validateImageOptions({
      baseColor: options.baseColor,
      pattern: options.pattern,
      personality: options.personality,
      specialFeatures: options.specialFeatures
    });

    // Generate rarity based on traits
    const rarity = generateRarity({
      specialFeatures: options.specialFeatures,
      personality: options.personality
    });
    
    // Add index suffix for batch generation
    const finalName = options.index ? `${options.name} #${options.index + 1}` : options.name;

    // Generate image based on traits
    console.log('Generating image for agent:', finalName);
    const imageUrl = await generateAgentImage({
      baseColor: options.baseColor,
      pattern: options.pattern,
      personality: options.personality,
      specialFeatures: options.specialFeatures
    });

    console.log('Generated image URL:', imageUrl);

    return {
      id: crypto.randomUUID(),
      name: finalName,
      personality: options.personality,
      expertise: generateExpertise(rarity),
      goals: generateGoals(),
      rarity,
      imageUrl,
      created: Date.now()
    };
  } catch (error) {
    console.error('Agent generation failed:', error);
    throw error;
  }
}

// Rest of the file remains the same...