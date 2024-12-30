import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useVirtueStore } from '../store/useVirtueStore';
import { VirtueHeader } from '../components/self-discovery/VirtueHeader';
import { VirtueProgress } from '../components/self-discovery/VirtueProgress';
import { TraitList } from '../components/self-discovery/TraitList';
import { BackButton } from '../components/navigation/BackButton';

export const VirtueDetails: React.FC = () => {
  const { virtueId } = useParams();
  const virtue = useVirtueStore(state => state.getVirtueById(virtueId || ''));

  if (!virtue) {
    return (
      <div className="max-w-6xl mx-auto">
        <BackButton to="/self-discovery" />
        <div className="text-center text-gray-600">
          Virtue not found
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <BackButton to="/self-discovery" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <VirtueHeader
          icon={virtue.icon}
          name={virtue.name}
          description={virtue.description}
          bgColor={virtue.bgColor}
          color={virtue.color}
        />

        <VirtueProgress virtue={virtue} />

        <TraitList
          traits={virtue.traits}
          virtueColor={virtue.color}
          virtueBgColor={virtue.bgColor}
        />
      </motion.div>
    </div>
  );
};