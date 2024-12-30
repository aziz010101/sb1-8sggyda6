import React from 'react';
import { motion } from 'framer-motion';
import type { Trait } from '../../types';
import { TraitCard } from './TraitCard';

interface TraitListProps {
  traits: Trait[];
  virtueColor: string;
  virtueBgColor: string;
}

export const TraitList: React.FC<TraitListProps> = ({
  traits,
  virtueColor,
  virtueBgColor,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="grid md:grid-cols-2 gap-6"
    >
      {traits.map((trait, index) => (
        <TraitCard
          key={trait.id}
          trait={trait}
          index={index}
          virtueColor={virtueColor}
          virtueBgColor={virtueBgColor}
        />
      ))}
    </motion.div>
  );
};