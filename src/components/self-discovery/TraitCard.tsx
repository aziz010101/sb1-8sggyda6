import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Unlock } from 'lucide-react';
import type { Trait } from '../../types';

interface TraitCardProps {
  trait: Trait;
  index: number;
  virtueColor: string;
  virtueBgColor: string;
}

export const TraitCard: React.FC<TraitCardProps> = ({ 
  trait, 
  index, 
  virtueColor, 
  virtueBgColor 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`bg-white rounded-lg shadow p-6 ${trait.unlocked ? virtueBgColor + '/10' : ''}`}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className={`text-xl font-semibold ${trait.unlocked ? virtueColor : 'text-gray-400'}`}>
          {trait.name}
        </h3>
        {trait.unlocked ? (
          <Unlock className={`w-5 h-5 ${virtueColor}`} />
        ) : (
          <Lock className="w-5 h-5 text-gray-400" />
        )}
      </div>
      <p className={`text-sm ${trait.unlocked ? 'text-gray-700' : 'text-gray-400'}`}>
        {trait.description}
      </p>
    </motion.div>
  );
};