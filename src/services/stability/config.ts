export const STABILITY_CONFIG = {
  apiKey: 'sk-s8rZpXzpGhfARg4Qk4zJMwHMXoGcSuCRgYLFrD3ezBL39FvK',
  apiUrl: 'https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/text-to-image',
  params: {
    width: 512,
    height: 512,
    steps: 30,
    cfg_scale: 8.5, // Increased for more stylized results
    samples: 1,
    style_preset: 'vector-art',
    sampler: 'K_DPM_2_ANCESTRAL'
  }
} as const;

// Vector art style presets
export const STYLE_PRESETS = {
  base: 'vector art style cat illustration, flat design, minimalist',
  style: 'clean lines, geometric shapes, crisp edges, solid colors',
  colors: 'bright pastel colors, vibrant palette, solid color fills',
  composition: 'centered composition, simple background, cryptokitties style'
} as const;

// Personality affects pose and expression
export const PERSONALITY_MODIFIERS = {
  playful: 'bouncy pose, big smile, rounded shapes',
  mysterious: 'elegant pose, half-closed eyes, subtle smile',
  royal: 'proud stance, crown icon, regal symbols',
  cheerful: 'jumping pose, wide eyes, happy expression',
  energetic: 'dynamic pose, action lines, excited expression',
  lazy: 'relaxed pose, sleepy eyes, curled up'
} as const;

// Simplified color descriptions for vector style
export const COLOR_MODIFIERS = {
  orange: 'solid orange color fill',
  black: 'solid black color fill',
  white: 'solid white color fill',
  gray: 'solid gray color fill',
  brown: 'solid brown color fill',
  calico: 'geometric color blocks in orange, white, and black'
} as const;

// Pattern modifiers for vector style
export const PATTERN_MODIFIERS = {
  solid: 'single color fill',
  striped: 'geometric stripe pattern',
  spotted: 'simple circular spots',
  tuxedo: 'two-tone tuxedo pattern'
} as const;

// Negative prompts to avoid non-vector elements
export const NEGATIVE_PROMPTS = [
  'realistic', 'detailed', 'photographic', 'shading',
  '3D', 'gradient', 'texture', 'noise',
  'fur detail', 'complex background',
  'watermark', 'signature', 'text'
].join(', ');