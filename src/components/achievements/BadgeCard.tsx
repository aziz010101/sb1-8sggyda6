import React from 'react';
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';
import type { Badge } from '../../types';
import { Tooltip } from '../ui/Tooltip';

interface BadgeCardProps {
  badge: Badge;
}

export const BadgeCard: React.FC<BadgeCardProps> = ({ badge }) => {
  const Icon = badge.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      className={`relative p-6 rounded-lg ${badge.unlocked ? badge.bgColor : 'bg-gray-100'}`}
    >
      <div className="flex items-center space-x-4">
        <div className={`p-3 rounded-full ${badge.unlocked ? 'bg-white/20' : 'bg-gray-200'}`}>
          <Icon className={`w-8 h-8 ${badge.unlocked ? badge.color : 'text-gray-400'}`} />
        </div>
        <div>
          <h3 className={`font-bold ${badge.unlocked ? 'text-gray-900' : 'text-gray-500'}`}>
            {badge.name}
          </h3>
          <p className={`text-sm ${badge.unlocked ? 'text-gray-700' : 'text-gray-400'}`}>
            {badge.description}
          </p>
          {badge.unlocked && badge.unlockedAt && (
            <p className="text-xs text-gray-500 mt-1">
              Unlocked {badge.unlockedAt.toLocaleDateString()}
            </p>
          )}
        </div>
      </div>
      {!badge.unlocked && (
        <Tooltip content={
          <div className="text-center">
            <p className="font-medium mb-1">How to unlock:</p>
            <p>{badge.description}</p>
          </div>
        }>
          <div className="absolute inset-0 bg-gray-200/50 rounded-lg flex items-center justify-center cursor-help">
            <Lock className="w-5 h-5 text-gray-500" />
          </div>
        </Tooltip>
      )}
    </motion.div>
  );
};