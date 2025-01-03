export class ImageGenerationError extends Error {
  constructor(
    message: string,
    public readonly code: string,
    public readonly details?: unknown
  ) {
    super(message);
    this.name = 'ImageGenerationError';
  }

  static apiError(status: number, details?: unknown): ImageGenerationError {
    return new ImageGenerationError(
      `Image generation API error: ${status}`,
      'API_ERROR',
      details
    );
  }

  static networkError(details?: unknown): ImageGenerationError {
    return new ImageGenerationError(
      'Network error during image generation',
      'NETWORK_ERROR',
      details
    );
  }

  static invalidInput(details?: unknown): ImageGenerationError {
    return new ImageGenerationError(
      'Invalid input for image generation',
      'INVALID_INPUT',
      details
    );
  }
}