import { useState } from 'react';
import { useProfile } from '../ProfileContext';
import type { CatAgent } from '../../../types/CatAgent';

export function useAgentActions() {
  const { listAgent, unlistAgent } = useProfile();
  const [selectedAgent, setSelectedAgent] = useState<CatAgent | null>(null);
  const [isListModalOpen, setIsListModalOpen] = useState(false);

  const handleListAgent = (agent: CatAgent) => {
    setSelectedAgent(agent);
    setIsListModalOpen(true);
  };

  const handleConfirmList = (price: string) => {
    if (selectedAgent) {
      listAgent(selectedAgent.id);
      setIsListModalOpen(false);
      setSelectedAgent(null);
    }
  };

  const handleUnlistAgent = (id: string) => {
    unlistAgent(id);
  };

  return {
    selectedAgent,
    isListModalOpen,
    setIsListModalOpen,
    handleListAgent,
    handleConfirmList,
    handleUnlistAgent
  };
}