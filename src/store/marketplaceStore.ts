import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { CatAgent } from '../types/CatAgent';

interface MarketplaceListing extends CatAgent {
  price: string;
  listedAt: number;
}

interface MarketplaceStore {
  listings: MarketplaceListing[];
  addListing: (agent: CatAgent, price: string) => void;
  removeListing: (id: string) => void;
  getListingById: (id: string) => MarketplaceListing | undefined;
}

export const useMarketplaceStore = create<MarketplaceStore>()(
  persist(
    (set, get) => ({
      listings: [],
      addListing: (agent, price) => {
        const listing: MarketplaceListing = {
          ...agent,
          price,
          listedAt: Date.now()
        };
        set((state) => ({
          listings: [listing, ...state.listings]
        }));
      },
      removeListing: (id) => {
        set((state) => ({
          listings: state.listings.filter(listing => listing.id !== id)
        }));
      },
      getListingById: (id) => get().listings.find(listing => listing.id === id)
    }),
    {
      name: 'marketplace-storage'
    }
  )
);