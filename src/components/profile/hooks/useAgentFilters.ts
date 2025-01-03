import { useState, useMemo } from 'react';
import type { CatAgent } from '../../../types/CatAgent';

export function useAgentFilters(agents: CatAgent[]) {
  const [search, setSearch] = useState('');
  const [type, setType] = useState('all');
  const [sort, setSort] = useState('newest');

  const filteredAgents = useMemo(() => {
    let result = [...agents];

    // Apply search filter
    if (search) {
      const searchLower = search.toLowerCase();
      result = result.filter(agent => 
        agent.name.toLowerCase().includes(searchLower) ||
        agent.personality.some(trait => trait.toLowerCase().includes(searchLower))
      );
    }

    // Apply sorting
    result.sort((a, b) => {
      switch (sort) {
        case 'oldest':
          return (a.created || 0) - (b.created || 0);
        case 'name':
          return a.name.localeCompare(b.name);
        case 'rarity':
          return b.rarity.localeCompare(a.rarity);
        default: // newest
          return (b.created || 0) - (a.created || 0);
      }
    });

    return result;
  }, [agents, search, sort]);

  return {
    search,
    setSearch,
    type,
    setType,
    sort,
    setSort,
    filteredAgents
  };
}