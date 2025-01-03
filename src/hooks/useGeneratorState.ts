import { useReducer } from 'react';
import type { GeneratorState, GeneratorAction } from '../types/GeneratorState';
import type { CatAgent } from '../types/CatAgent';

const initialState: GeneratorState = {
  step: 1,
  agent: {
    name: '',
    personality: [],
    expertise: [],
    goals: [],
    rarity: 'common'
  },
  isGenerating: false
};

function generatorReducer(state: GeneratorState, action: GeneratorAction): GeneratorState {
  switch (action.type) {
    case 'SET_STEP':
      return { ...state, step: action.payload };
    case 'UPDATE_AGENT':
      return { ...state, agent: { ...state.agent, ...action.payload } };
    case 'START_GENERATING':
      return { ...state, isGenerating: true, error: undefined };
    case 'FINISH_GENERATING':
      return { ...state, isGenerating: false };
    case 'SET_ERROR':
      return { ...state, error: action.payload, isGenerating: false };
    default:
      return state;
  }
}

export function useGeneratorState() {
  const [state, dispatch] = useReducer(generatorReducer, initialState);

  const updateAgent = (updates: Partial<CatAgent>) => {
    dispatch({ type: 'UPDATE_AGENT', payload: updates });
  };

  const setStep = (step: number) => {
    dispatch({ type: 'SET_STEP', payload: step });
  };

  const startGenerating = () => {
    dispatch({ type: 'START_GENERATING' });
  };

  const finishGenerating = () => {
    dispatch({ type: 'FINISH_GENERATING' });
  };

  const setError = (error: string) => {
    dispatch({ type: 'SET_ERROR', payload: error });
  };

  return {
    state,
    updateAgent,
    setStep,
    startGenerating,
    finishGenerating,
    setError
  };
}