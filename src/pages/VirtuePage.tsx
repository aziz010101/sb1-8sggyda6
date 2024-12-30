import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useVirtueStore } from '../store/useVirtueStore';
import { VirtueHeader } from '../components/self-discovery/VirtueHeader';
import { VirtueProgress } from '../components/self-discovery/VirtueProgress';
import { TraitCard } from '../components/traits/TraitCard';
import { BackButton } from '../components/navigation/BackButton';
import { getDetailedVirtueData } from '../data/virtueDetails';

export const VirtuePage: React.FC = () => {
  const { virtueId } = useParams<{ virtueId: string }>();
  const virtue = useVirtueStore(state => state.getVirtueById(virtueId || ''));
  
  if (!virtue) {
    return (
      <div className="max-w-6xl mx-auto px-4">
        <BackButton to="/self-discovery" />
        <div className="text-center text-gray-600">Virtue not found</div>
      </div>
    );
  }

  const detailedVirtue = getDetailedVirtueData(virtue.id);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <BackButton to="/self-discovery" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        <VirtueHeader
          icon={virtue.icon}
          name={virtue.name}
          description={virtue.description}
          bgColor={virtue.bgColor}
          color={virtue.color}
        />

        <VirtueProgress virtue={virtue} />

        {detailedVirtue.traits.length > 0 ? (
          <div className="space-y-6">
            {[...detailedVirtue.traits]
              .sort((a, b) => a.name.localeCompare(b.name))
              .map(trait => (
                <TraitCard
                  key={trait.id}
                  trait={trait}
                  virtueColor={virtue.color}
                  virtueBgColor={virtue.bgColor}
                />
              ))}
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">
            Detailed information for this virtue is coming soon.
          </div>
        )}
      </motion.div>
    </div>
  );
};