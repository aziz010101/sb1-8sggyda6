import { create } from 'zustand';
import type { UserProfile } from '../types';


interface State {
  user: UserProfile | null;
  setUser: (user: UserProfile) => void;
}

export const useStore = create<State>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));