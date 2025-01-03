import { STABILITY_CONFIG } from './config';
import type { StabilityParams, StabilityResponse, StabilityError } from './types';

export class StabilityClient {
  private readonly headers: HeadersInit;

  constructor(apiKey = STABILITY_CONFIG.apiKey) {
    this.headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    };
  }

  async generateImage(params: StabilityParams): Promise<string> {
    try {
      console.log('Sending request to Stability API with params:', {
        ...params,
        text_prompts: params.text_prompts.map(p => ({ ...p, text: p.text.substring(0, 50) + '...' }))
      });

      const response = await fetch(STABILITY_CONFIG.apiUrl, {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify(params)
      });

      const responseText = await response.text();
      
      if (!response.ok) {
        console.error('Stability API error response:', responseText);
        throw new Error(`Stability API error: ${response.status} - ${responseText}`);
      }

      try {
        const data = JSON.parse(responseText) as StabilityResponse;
        
        if (!data.artifacts?.[0]?.base64) {
          console.error('Invalid response format:', data);
          throw new Error('No image data in response');
        }

        return `data:image/png;base64,${data.artifacts[0].base64}`;
      } catch (parseError) {
        console.error('Failed to parse response:', responseText);
        throw new Error('Invalid response format from Stability API');
      }
    } catch (error) {
      console.error('Stability API request failed:', error);
      throw error;
    }
  }
}