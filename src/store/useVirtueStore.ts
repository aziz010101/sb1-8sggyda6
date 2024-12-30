import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import type { Virtue, Trait } from '../types';
import { virtuesData } from '../data/virtues';
import { calculateVirtueProgress } from '../utils/virtueUtils';

interface VirtueState {
  virtues: Virtue[];
  unlockTrait: (virtueId: string, traitId: string) => void;
  resetProgress: () => void;
  getVirtueById: (id: string) => Virtue | undefined;
}

export const useVirtueStore = create<VirtueState>()(
  immer((set, get) => ({
    virtues: virtuesData,
    
    unlockTrait: (virtueId: string, traitId: string) => {
      set(state => {
        const virtue = state.virtues.find(v => v.id === virtueId);
        if (virtue) {
          const trait = virtue.traits.find(t => t.id === traitId);
          if (trait) {
            trait.unlocked = true;
            virtue.progress = calculateVirtueProgress(virtue);
          }
        }
      });
    },

    resetProgress: () => {
      set(state => {
        state.virtues.forEach(virtue => {
          virtue.traits.forEach(trait => {
            trait.unlocked = false;
          });
          virtue.progress = 0;
        });
      });
    },

    getVirtueById: (id: string) => {
      return get().virtues.find(v => v.id === id);
    },
  }))
);