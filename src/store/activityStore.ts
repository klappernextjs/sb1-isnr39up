import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Activity } from '../types/Activity';

interface ActivityStore {
  activities: Activity[];
  addActivity: (activity: Omit<Activity, 'id' | 'timestamp'>) => void;
}

export const useActivityStore = create<ActivityStore>()(
  persist(
    (set) => ({
      activities: [],
      addActivity: (activity) => {
        const newActivity: Activity = {
          ...activity,
          id: crypto.randomUUID(),
          timestamp: Date.now()
        };
        set((state) => ({ activities: [newActivity, ...state.activities] }));
      }
    }),
    {
      name: 'activity-storage'
    }
  )
);