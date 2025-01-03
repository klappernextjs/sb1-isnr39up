export interface GenerationTraits {
  name: string;
  baseColor: string;
  pattern: string;
  personality: string[];
  specialFeatures?: string[];
}

export interface ImageGenerationOptions {
  baseColor: string;
  pattern: string;
  personality: string[];
  specialFeatures?: string[];
}

export interface ImageGenerationResult {
  url: string;
  metadata?: {
    prompt: string;
    timestamp: number;
  };
}