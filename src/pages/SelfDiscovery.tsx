import React from 'react';
import { motion } from 'framer-motion';
import { useVirtueStore } from '../store/useVirtueStore';
import { VirtueCard } from '../components/self-discovery/VirtueCard';
import { RadarChart } from '../components/charts/RadarChart';
import { sortVirtuesByProgress } from '../utils/virtueUtils';

export const SelfDiscovery: React.FC = () => {
  const virtues = useVirtueStore(state => state.virtues);
  const sortedVirtues = sortVirtuesByProgress(virtues);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Character Virtues</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
          Explore and develop your character through these six fundamental virtues. Each virtue represents a different aspect of personal growth and excellence.
        </p>

        <div className="flex justify-center mb-16">
          <RadarChart virtues={sortedVirtues} size={400} />
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedVirtues.map((virtue, index) => (
          <VirtueCard
            key={virtue.id}
            virtue={virtue}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};