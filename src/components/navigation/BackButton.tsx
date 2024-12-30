import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

interface BackButtonProps {
  to: string;
  label?: string;
}

export const BackButton: React.FC<BackButtonProps> = ({ 
  to, 
  label = 'Back'
}) => {
  const navigate = useNavigate();

  return (
    <motion.button
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{ scale: 1.05 }}
      onClick={() => navigate(to)}
      className="flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors"
    >
      <ArrowLeft className="w-5 h-5 mr-2" />
      {label}
    </motion.button>
  );
};