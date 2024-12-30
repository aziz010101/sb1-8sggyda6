import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, User } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Brain className="h-8 w-8" />
            <span className="text-2xl font-bold">ALLORA.AI</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/self-discovery" className="hover:text-purple-200 transition-colors">
              Self Discovery
            </Link>
            <Link to="/vision-board" className="hover:text-purple-200 transition-colors">
              Vision Board
            </Link>
            <Link to="/goals" className="hover:text-purple-200 transition-colors">
              Goals
            </Link>
            <Link to="/projects" className="hover:text-purple-200 transition-colors">
              Projects
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link to="/profile" className="p-2 hover:bg-purple-500 rounded-full transition-colors">
              <User className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};