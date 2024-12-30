import { LucideIcon } from 'lucide-react';

export interface Point {
  x: number;
  y: number;
}

export type Virtue = {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  traits: Trait[];
  progress: number;
};

export type Trait = {
  id: string;
  name: string;
  description: string;
  unlocked: boolean;
};

export type Badge = {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  unlocked: boolean;
  unlockedAt?: Date;
};

export type Achievement = {
  id: string;
  name: string;
  description: string;
  progress: number;
  maxProgress: number;
  completed: boolean;
  icon: LucideIcon;
  reward?: Badge;
};

export type UserProfile = {
  id: string;
  avatar: string;
  level: number;
  virtues: Virtue[];
  badges: Badge[];
  achievements: Achievement[];
};