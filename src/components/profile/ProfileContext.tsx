import React, { createContext, useContext, useReducer } from 'react';
import type { CatAgent } from '../../types/CatAgent';

interface ProfileState {
  privateAgents: CatAgent[];
  listedAgents: CatAgent[];
}

type ProfileAction = 
  | { type: 'ADD_PRIVATE_AGENT'; payload: CatAgent }
  | { type: 'LIST_AGENT'; payload: string }
  | { type: 'UNLIST_AGENT'; payload: string };

const ProfileContext = createContext<{
  state: ProfileState;
  dispatch: React.Dispatch<ProfileAction>;
} | null>(null);

const initialState: ProfileState = {
  privateAgents: [],
  listedAgents: []
};

function profileReducer(state: ProfileState, action: ProfileAction): ProfileState {
  switch (action.type) {
    case 'ADD_PRIVATE_AGENT':
      return {
        ...state,
        privateAgents: [action.payload, ...state.privateAgents]
      };
    case 'LIST_AGENT': {
      const agentToList = state.privateAgents.find(a => a.id === action.payload);
      if (!agentToList) return state;
      return {
        privateAgents: state.privateAgents.filter(a => a.id !== action.payload),
        listedAgents: [agentToList, ...state.listedAgents]
      };
    }
    case 'UNLIST_AGENT': {
      const agentToUnlist = state.listedAgents.find(a => a.id === action.payload);
      if (!agentToUnlist) return state;
      return {
        listedAgents: state.listedAgents.filter(a => a.id !== action.payload),
        privateAgents: [agentToUnlist, ...state.privateAgents]
      };
    }
    default:
      return state;
  }
}

export function ProfileProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(profileReducer, initialState);

  // Log state changes for debugging
  React.useEffect(() => {
    console.log('Profile State Updated:', state);
  }, [state]);

  return (
    <ProfileContext.Provider value={{ state, dispatch }}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error('useProfile must be used within ProfileProvider');
  }

  return {
    privateAgents: context.state.privateAgents,
    listedAgents: context.state.listedAgents,
    addPrivateAgent: (agent: CatAgent) => {
      console.log('Adding private agent:', agent);
      context.dispatch({ type: 'ADD_PRIVATE_AGENT', payload: agent });
    },
    listAgent: (id: string) => context.dispatch({ type: 'LIST_AGENT', payload: id }),
    unlistAgent: (id: string) => context.dispatch({ type: 'UNLIST_AGENT', payload: id })
  };
}