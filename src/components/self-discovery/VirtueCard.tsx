import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { Virtue } from '../../types';
import { ProgressBar } from './ProgressBar';
import { getVirtueLevel, getUnlockedTraitsCount, getTotalTraitsCount } from '../../utils/virtueUtils';

interface VirtueCardProps {
  virtue: Virtue;
  index: number;
}

export const VirtueCard: React.FC<VirtueCardProps> = ({ virtue, index }) => {
  const Icon = virtue.icon;
  const level = getVirtueLevel(virtue.progress);
  const unlockedTraits = getUnlockedTraitsCount(virtue);
  const totalTraits = getTotalTraitsCount(virtue);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
    >
      <Link to={`/virtue/${virtue.id}`} className="block p-6">
        <div className={`${virtue.bgColor} w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto`}>
          <Icon className={`w-8 h-8 ${virtue.color}`} />
        </div>
        
        <h3 className="text-xl font-bold text-center mb-2">{virtue.name}</h3>
        <p className="text-gray-600 text-center mb-4 line-clamp-2">{virtue.description}</p>
        
        <div className="space-y-2">
          <ProgressBar progress={virtue.progress} />
          <div className="flex justify-between text-sm text-gray-500">
            <span>Level {level}</span>
            <span>{unlockedTraits}/{totalTraits} Traits</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};