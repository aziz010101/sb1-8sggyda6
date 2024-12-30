import React from 'react';
import { motion } from 'framer-motion';
import type { Achievement } from '../../types';
import { ProgressBar } from '../self-discovery/ProgressBar';

interface AchievementCardProps {
  achievement: Achievement;
}

export const AchievementCard: React.FC<AchievementCardProps> = ({ achievement }) => {
  const Icon = achievement.icon;
  const progress = (achievement.progress / achievement.maxProgress) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-md p-6"
    >
      <div className="flex items-center space-x-4 mb-4">
        <div className={`p-3 rounded-full ${achievement.completed ? 'bg-green-100' : 'bg-gray-100'}`}>
          <Icon className={`w-6 h-6 ${achievement.completed ? 'text-green-600' : 'text-gray-400'}`} />
        </div>
        <div>
          <h3 className="font-bold text-gray-900">{achievement.name}</h3>
          <p className="text-sm text-gray-600">{achievement.description}</p>
        </div>
      </div>

      <div className="space-y-2">
        <ProgressBar
          progress={progress}
          bgColor={achievement.completed ? 'bg-green-500' : 'bg-blue-500'}
        />
        <div className="flex justify-between text-sm text-gray-500">
          <span>{achievement.progress} / {achievement.maxProgress}</span>
          <span>{Math.round(progress)}%</span>
        </div>
      </div>

      {achievement.reward && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <p className="text-sm font-medium text-gray-700">Reward:</p>
          <p className="text-sm text-gray-600">{achievement.reward.name}</p>
        </div>
      )}
    </motion.div>
  );
};