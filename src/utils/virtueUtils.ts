import type { Virtue } from '../types';

export const calculateVirtueProgress = (virtue: Virtue): number => {
  const unlockedTraits = virtue.traits.filter(trait => trait.unlocked).length;
  return Math.round((unlockedTraits / virtue.traits.length) * 100);
};

export const getVirtueLevel = (progress: number): number => {
  return Math.floor(progress / 20) + 1;
};

export const getUnlockedTraitsCount = (virtue: Virtue): number => {
  return virtue.traits.filter(trait => trait.unlocked).length;
};

export const getTotalTraitsCount = (virtue: Virtue): number => {
  return virtue.traits.length;
};

export const sortVirtuesByProgress = (virtues: Virtue[]): Virtue[] => {
  return [...virtues].sort((a, b) => b.progress - a.progress);
};

export const getProgressColor = (progress: number): string => {
  if (progress >= 80) return 'bg-green-500';
  if (progress >= 60) return 'bg-blue-500';
  if (progress >= 40) return 'bg-yellow-500';
  if (progress >= 20) return 'bg-orange-500';
  return 'bg-red-500';
};