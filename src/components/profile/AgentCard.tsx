import React, { useState } from 'react';
import { MoreVertical, Share2, Tag } from 'lucide-react';
import type { CatAgent } from '../../types/CatAgent';
import ListAgentModal from './actions/ListAgentModal';

interface AgentCardProps {
  agent: CatAgent;
}

export default function AgentCard({ agent }: AgentCardProps) {
  const [showListModal, setShowListModal] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="aspect-square p-4 bg-gradient-to-br from-purple-50 to-pink-50">
          <img
            src={agent.imageUrl}
            alt={agent.name}
            className="w-full h-full object-contain transform transition-transform hover:scale-105"
          />
        </div>
        
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-900">{agent.name}</h3>
            <div className="relative">
              <button 
                onClick={() => setShowMenu(!showMenu)}
                className="p-1 hover:bg-gray-100 rounded-lg"
              >
                <MoreVertical className="h-5 w-5 text-gray-500" />
              </button>
              
              {showMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-10">
                  <button
                    onClick={() => {
                      setShowMenu(false);
                      setShowListModal(true);
                    }}
                    className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                  >
                    <Tag className="h-4 w-4" />
                    List for Sale
                  </button>
                  <button
                    onClick={() => setShowMenu(false)}
                    className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                  >
                    <Share2 className="h-4 w-4" />
                    Share
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {agent.personality.map((trait) => (
              <span key={trait} className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
                {trait}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between text-sm text-gray-500">
            <span className={`px-2 py-1 rounded-full ${
              agent.rarity === 'legendary' ? 'bg-yellow-100 text-yellow-800' :
              agent.rarity === 'epic' ? 'bg-purple-100 text-purple-800' :
              agent.rarity === 'rare' ? 'bg-blue-100 text-blue-800' :
              'bg-gray-100 text-gray-800'
            }`}>
              {agent.rarity}
            </span>
          </div>
        </div>
      </div>

      {showListModal && (
        <ListAgentModal
          agent={agent}
          onClose={() => setShowListModal(false)}
        />
      )}
    </>
  );
}