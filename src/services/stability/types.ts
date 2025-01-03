export interface StabilityPrompt {
  text: string;
  weight: number;
}

export interface StabilityParams {
  text_prompts: StabilityPrompt[];
  height?: number;
  width?: number;
  cfg_scale?: number;
  clip_guidance_preset?: string;
  sampler?: string;
  samples?: number;
  seed?: number;
  steps?: number;
  style_preset?: string;
}

export interface StabilityArtifact {
  base64: string;
  seed: number;
  finishReason: string;
}

export interface StabilityResponse {
  artifacts: StabilityArtifact[];
}

export interface StabilityError {
  name: string;
  message: string;
  status: number;
}