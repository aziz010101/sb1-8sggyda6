import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Target, Layout as LayoutIcon } from 'lucide-react';
import { motion } from 'framer-motion';

export const Home: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Discover Your True Potential with ALLORA.AI
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Embark on a journey of self-discovery, personal growth, and achievement through our AI-powered platform.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <Brain className="w-12 h-12 text-purple-600 mb-4" />
          <h2 className="text-2xl font-bold mb-4">Self Discovery</h2>
          <p className="text-gray-600 mb-4">
            Understand your personality through scientific frameworks and AI-powered insights.
          </p>
          <Link 
            to="/self-discovery"
            className="inline-block bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Start Journey
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <Target className="w-12 h-12 text-indigo-600 mb-4" />
          <h2 className="text-2xl font-bold mb-4">Goal Setting</h2>
          <p className="text-gray-600 mb-4">
            Transform your aspirations into achievable goals with our SMART planning tools.
          </p>
          <Link 
            to="/goals"
            className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Set Goals
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <LayoutIcon className="w-12 h-12 text-blue-600 mb-4" />
          <h2 className="text-2xl font-bold mb-4">Project Management</h2>
          <p className="text-gray-600 mb-4">
            Organize and track your projects with our intuitive management tools.
          </p>
          <Link 
            to="/projects"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Projects
          </Link>
        </motion.div>
      </div>
    </div>
  );
};