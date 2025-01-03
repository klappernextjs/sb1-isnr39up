import { ImageProvider } from './base';
import { createAvatar } from '@dicebear/core';
import { bigSmile } from '@dicebear/collection';
import type { ImageGenerationOptions } from '../../../types/Generation';

export class DiceBearProvider extends ImageProvider {
  readonly name = 'DiceBear';

  private readonly colorMap = {
    orange: 'ffd280',
    black: '2d3436',
    white: 'ffffff',
    gray: 'b8c5d6',
    brown: '8b4513',
    calico: 'ffeaa7'
  };

  private readonly patternMap = {
    solid: '',
    striped: '-striped',
    spotted: '-spotted',
    tuxedo: '-tuxedo'
  };

  async generate(options: ImageGenerationOptions): Promise<string> {
    const { baseColor, pattern, personality } = options;
    
    // Create unique seed from traits
    const seed = [baseColor, pattern, ...personality].join('-');
    const backgroundColor = this.colorMap[baseColor as keyof typeof this.colorMap] || this.colorMap.orange;
    
    const avatar = createAvatar(bigSmile, {
      seed: seed + (this.patternMap[pattern as keyof typeof this.patternMap] || ''),
      backgroundColor: [backgroundColor],
      radius: 10,
      size: 256
    });

    return avatar.toDataUriSync();
  }
}