import React, { createContext, useContext, useReducer } from 'react';
import type { AnimeKitty } from '../../../types/AnimeKitty';

interface StudioState {
  step: number;
  kitty: Partial<AnimeKitty>;
  isGenerating: boolean;
  error?: string;
}

type StudioAction = 
  | { type: 'SET_STEP'; payload: number }
  | { type: 'UPDATE_KITTY'; payload: Partial<AnimeKitty> }
  | { type: 'START_GENERATING' }
  | { type: 'FINISH_GENERATING' }
  | { type: 'SET_ERROR'; payload: string };

const StudioContext = createContext<{
  state: StudioState;
  dispatch: React.Dispatch<StudioAction>;
} | null>(null);

const initialState: StudioState = {
  step: 1,
  kitty: {},
  isGenerating: false
};

function studioReducer(state: StudioState, action: StudioAction): StudioState {
  switch (action.type) {
    case 'SET_STEP':
      return { ...state, step: action.payload };
    case 'UPDATE_KITTY':
      return { ...state, kitty: { ...state.kitty, ...action.payload } };
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

export function StudioProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(studioReducer, initialState);
  return (
    <StudioContext.Provider value={{ state, dispatch }}>
      {children}
    </StudioContext.Provider>
  );
}

export function useStudio() {
  const context = useContext(StudioContext);
  if (!context) {
    throw new Error('useStudio must be used within StudioProvider');
  }
  return context;
}