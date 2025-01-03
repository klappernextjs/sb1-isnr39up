import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { CatAgent } from '../types/CatAgent';
import { generateCatAvatar } from '../utils/avatar';

interface CatsStore {
  cats: CatAgent[];
  addCat: (cat: Omit<CatAgent, 'id' | 'imageUrl'>) => void;
  getCatById: (id: string) => CatAgent | undefined;
}

export const useCatsStore = create<CatsStore>()(
  persist(
    (set, get) => ({
      cats: [],
      addCat: (cat) => {
        const id = crypto.randomUUID();
        const newCat: CatAgent = {
          ...cat,
          id,
          imageUrl: generateCatAvatar(cat.name),
          price: '0.001',
          owner: '0x1234...5678' // This would come from the connected wallet
        };
        set((state) => ({ cats: [newCat, ...state.cats] }));
      },
      getCatById: (id) => get().cats.find(cat => cat.id === id)
    }),
    {
      name: 'cats-storage'
    }
  )
);