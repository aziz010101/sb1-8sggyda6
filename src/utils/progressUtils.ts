import type { UserProfile, Virtue } from '../types';

export const calculateOverallProgress = (virtues: Virtue[]): number => {
  const totalTraits = virtues.reduce((acc, virtue) => acc + virtue.traits.length, 0);
  const unlockedTraits = virtues.reduce(
    (acc, virtue) => acc + virtue.traits.filter(trait => trait.unlocked).length,
    0
  );
  return Math.round((unlockedTraits / totalTraits) * 100);
};

export const calculateUserLevel = (profile: UserProfile): number => {
  const totalProgress = calculateOverallProgress(profile.virtues);
  return Math.floor(totalProgress / 10) + 1; // Level up every 10% progress
};

export const getNextMilestone = (profile: UserProfile): number => {
  const currentLevel = calculateUserLevel(profile);
  return currentLevel * 10;
};