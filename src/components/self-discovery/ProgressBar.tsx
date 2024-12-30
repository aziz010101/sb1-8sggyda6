import React from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  progress: number;
  bgColor: string;
  height?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ 
  progress, 
  bgColor, 
  height = 'h-2' 
}) => {
  return (
    <div className={`${height} bg-gray-200 rounded-full overflow-hidden`}>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5 }}
        className={`h-full ${bgColor} transition-all duration-500`}
      />
    </div>
  );
};