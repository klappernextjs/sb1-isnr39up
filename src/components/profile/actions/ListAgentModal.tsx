import React, { useState } from 'react';
import { Tag, X } from 'lucide-react';
import type { CatAgent } from '../../../types/CatAgent';
import { useMarketplaceStore } from '../../../store/marketplaceStore';
import { useProfile } from '../ProfileContext';
import { useNotificationHandler } from '../../../hooks/useNotificationHandler';

interface ListAgentModalProps {
  agent: CatAgent;
  onClose: () => void;
}

export default function ListAgentModal({ agent, onClose }: ListAgentModalProps) {
  const [price, setPrice] = useState('');
  const [isListing, setIsListing] = useState(false);
  const addListing = useMarketplaceStore((state) => state.addListing);
  const { listAgent } = useProfile();
  const { notifyListing } = useNotificationHandler();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!price || isNaN(Number(price))) return;

    setIsListing(true);
    try {
      // Add to marketplace listings
      addListing(agent, price);
      
      // Remove from private collection
      listAgent(agent.id);
      
      // Notify user
      notifyListing(agent.name, agent.id, price);
      
      onClose();
    } catch (error) {
      console.error('Failed to list agent:', error);
    } finally {
      setIsListing(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-gray-900">List Agent for Sale</h3>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Price (ETH)
            </label>
            <input
              type="number"
              step="0.001"
              min="0"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-purple-500"
              placeholder="0.00"
              required
            />
          </div>

          <div className="bg-purple-50 rounded-lg p-4">
            <div className="flex items-center gap-4 mb-2">
              <img
                src={agent.imageUrl}
                alt={agent.name}
                className="w-12 h-12 rounded-lg"
              />
              <div>
                <h4 className="font-medium text-gray-900">{agent.name}</h4>
                <p className="text-sm text-purple-600 capitalize">{agent.rarity}</p>
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={isListing || !price}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50"
          >
            <Tag className="h-4 w-4" />
            {isListing ? 'Listing...' : 'List for Sale'}
          </button>
        </form>
      </div>
    </div>
  );
}