import React from 'react';
import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface VirtueHeaderProps {
  icon: LucideIcon;
  name: string;
  description: string;
  bgColor: string;
  color: string;
}

export const VirtueHeader: React.FC<VirtueHeaderProps> = ({
  icon: Icon,
  name,
  description,
  bgColor,
  color,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center mb-6"
    >
      <div className={`${bgColor} w-16 h-16 rounded-full flex items-center justify-center mr-6`}>
        <Icon className={`w-8 h-8 ${color}`} />
      </div>
      <div>
        <h1 className="text-4xl font-bold text-gray-900">{name}</h1>
        <p className="text-xl text-gray-600 mt-2">{description}</p>
      </div>
    </motion.div>
  );
};