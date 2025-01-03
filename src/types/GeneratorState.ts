import type { CatAgent } from './CatAgent';

export interface GeneratorState {
  step: number;
  agent: Partial<CatAgent>;
  isGenerating: boolean;
  error?: string;
}

export type GeneratorAction = 
  | { type: 'SET_STEP'; payload: number }
  | { type: 'UPDATE_AGENT'; payload: Partial<CatAgent> }
  | { type: 'START_GENERATING' }
  | { type: 'FINISH_GENERATING' }
  | { type: 'SET_ERROR'; payload: string };