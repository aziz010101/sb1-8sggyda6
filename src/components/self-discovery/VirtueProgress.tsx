import React from 'react';
import { motion } from 'framer-motion';
import type { Virtue } from '../../types';
import { ProgressBar } from './ProgressBar';
import { getUnlockedTraitsCount, getTotalTraitsCount } from '../../utils/virtueUtils';

interface VirtueProgressProps {
  virtue: Virtue;
}

export const VirtueProgress: React.FC<VirtueProgressProps> = ({ virtue }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-lg p-6 mb-8"
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold text-gray-900">Progress</h2>
        <span className="text-gray-600">
          {getUnlockedTraitsCount(virtue)}/{getTotalTraitsCount(virtue)} Traits Unlocked
        </span>
      </div>
      <ProgressBar
        progress={virtue.progress}
        bgColor={virtue.bgColor}
        height="h-4"
      />
      <div className="mt-4 text-sm text-gray-500 text-center">
        {virtue.progress < 100 ? (
          <p>Keep going! Unlock more traits to master this virtue.</p>
        ) : (
          <p className="text-green-600 font-semibold">
            Congratulations! You've mastered this virtue.
          </p>
        )}
      </div>
    </motion.div>
  );
};