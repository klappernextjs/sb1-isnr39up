export interface StabilityGenerationParams {
  text_prompts: Array<{
    text: string;
    weight: number;
  }>;
  width?: number;
  height?: number;
  steps?: number;
  cfg_scale?: number;
  samples?: number;
  style_preset?: string;
  engine_id?: string;
}

export interface StabilityResponse {
  artifacts: Array<{
    base64: string;
    seed: number;
    finishReason: string;
  }>;
}

export interface ImageGenerationError extends Error {
  code: string;
  details?: unknown;
}