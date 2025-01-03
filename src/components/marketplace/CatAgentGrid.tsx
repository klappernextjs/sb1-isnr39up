import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMarketplaceStore } from '../../store/marketplaceStore';
import CatCard from './CatCard';

export default function CatAgentGrid() {
  const navigate = useNavigate();
  const listings = useMarketplaceStore((state) => state.listings);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
      {listings.map((listing) => (
        <CatCard
          key={listing.id}
          cat={listing}
          onClick={() => navigate(`/agent/${listing.id}`)}
        />
      ))}
      {listings.length === 0 && (
        <div className="col-span-full text-center py-12 text-gray-500">
          No agents listed yet. Be the first to list one!
        </div>
      )}
    </div>
  );
}