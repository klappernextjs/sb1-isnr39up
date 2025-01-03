// Temporary compatibility layer until all components are migrated
import { generateAgentImage } from './imageGeneration';

export async function generateCatAvatar(seed: string): Promise<string> {
  try {
    // Use default traits based on the seed
    return await generateAgentImage({
      baseColor: 'orange',
      pattern: 'solid',
      personality: ['playful'],
      specialFeatures: []
    });
  } catch (error) {
    console.error('Failed to generate avatar:', error);
    // Fallback to a static image if generation fails
    return 'https://static.vecteezy.com/system/resources/previews/021/608/790/non_2x/cute-cat-cartoon-illustration-free-vector.jpg';
  }
}