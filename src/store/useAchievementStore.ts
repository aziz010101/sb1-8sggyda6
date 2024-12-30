import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import type { Achievement, Badge } from '../types';
import { Brain, Award, Trophy, Star, Crown, Shield } from 'lucide-react';

interface AchievementState {
  achievements: Achievement[];
  badges: Badge[];
  recentUnlock: { type: 'badge' | 'achievement'; item: Badge | Achievement } | null;
  unlockBadge: (badgeId: string) => void;
  updateAchievementProgress: (achievementId: string, progress: number) => void;
  clearRecentUnlock: () => void;
}

const initialBadges: Badge[] = [
  {
    id: 'wisdom-master',
    name: 'Master of Wisdom',
    description: 'Unlocked all Wisdom traits',
    icon: Brain,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
    unlocked: false
  },
  {
    id: 'virtue-collector',
    name: 'Virtue Collector',
    description: 'Collected all virtues',
    icon: Crown,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
    unlocked: false
  }
];

const initialAchievements: Achievement[] = [
  {
    id: 'first-virtue',
    name: 'First Steps',
    description: 'Complete your first virtue',
    progress: 0,
    maxProgress: 1,
    completed: false,
    icon: Trophy,
    reward: initialBadges[0]
  },
  {
    id: 'trait-master',
    name: 'Trait Master',
    description: 'Unlock 10 traits',
    progress: 0,
    maxProgress: 10,
    completed: false,
    icon: Star
  }
];

export const useAchievementStore = create<AchievementState>()(
  immer((set) => ({
    achievements: initialAchievements,
    badges: initialBadges,
    recentUnlock: null,

    unlockBadge: (badgeId: string) => {
      set(state => {
        const badge = state.badges.find(b => b.id === badgeId);
        if (badge && !badge.unlocked) {
          badge.unlocked = true;
          badge.unlockedAt = new Date();
          state.recentUnlock = { type: 'badge', item: badge };
        }
      });
    },

    updateAchievementProgress: (achievementId: string, progress: number) => {
      set(state => {
        const achievement = state.achievements.find(a => a.id === achievementId);
        if (achievement) {
          const wasCompleted = achievement.completed;
          achievement.progress = Math.min(progress, achievement.maxProgress);
          achievement.completed = achievement.progress >= achievement.maxProgress;
          
          if (!wasCompleted && achievement.completed) {
            state.recentUnlock = { type: 'achievement', item: achievement };
            
            if (achievement.reward) {
              const badge = state.badges.find(b => b.id === achievement.reward?.id);
              if (badge && !badge.unlocked) {
                badge.unlocked = true;
                badge.unlockedAt = new Date();
              }
            }
          }
        }
      });
    },

    clearRecentUnlock: () => {
      set(state => {
        state.recentUnlock = null;
      });
    }
  }))
);