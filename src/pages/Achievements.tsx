import React from 'react';
import { motion } from 'framer-motion';
import { useAchievementStore } from '../store/useAchievementStore';
import { BadgeCard } from '../components/achievements/BadgeCard';
import { AchievementCard } from '../components/achievements/AchievementCard';
import { UnlockModal } from '../components/achievements/UnlockModal';

export const Achievements: React.FC = () => {
  const { achievements, badges, recentUnlock, clearRecentUnlock } = useAchievementStore();

  return (
    <>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Achievements</h1>
          <p className="text-xl text-gray-600">Track your progress and earn rewards</p>
        </motion.div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Badges</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {badges.map(badge => (
              <BadgeCard key={badge.id} badge={badge} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Current Challenges</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map(achievement => (
              <AchievementCard key={achievement.id} achievement={achievement} />
            ))}
          </div>
        </div>
      </div>

      {recentUnlock && (
        <UnlockModal
          isOpen={true}
          onClose={clearRecentUnlock}
          item={recentUnlock.item}
          type={recentUnlock.type}
        />
      )}
    </>
  );
};