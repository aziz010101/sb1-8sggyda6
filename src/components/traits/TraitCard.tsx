import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import type { TraitDetail } from '../../types/trait';

interface TraitCardProps {
  trait: TraitDetail;
  virtueColor: string;
  virtueBgColor: string;
}

export const TraitCard: React.FC<TraitCardProps> = ({ trait, virtueColor, virtueBgColor }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-white rounded-lg shadow-md overflow-hidden ${trait.unlocked ? virtueBgColor + '/10' : ''}`}
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-6 text-left flex items-center justify-between"
      >
        <h3 className={`text-xl font-semibold ${trait.unlocked ? virtueColor : 'text-gray-400'}`}>
          {trait.name}
        </h3>
        {isExpanded ? (
          <ChevronUp className={`w-5 h-5 ${trait.unlocked ? virtueColor : 'text-gray-400'}`} />
        ) : (
          <ChevronDown className={`w-5 h-5 ${trait.unlocked ? virtueColor : 'text-gray-400'}`} />
        )}
      </button>

      {isExpanded && (
        <div className="px-6 pb-6 space-y-4">
          <div>
            <p className="text-gray-700 mb-4">{trait.description}</p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Examples in Daily Life</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {trait.examples.map((example, index) => (
                <li key={index}>{example}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Key Behaviors</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {trait.keyBehaviors.map((behavior, index) => (
                <li key={index}>{behavior}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Common Challenges</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {trait.challenges.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Actions to Strengthen</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {trait.strengtheningActions.map((action, index) => (
                <li key={index}>{action}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </motion.div>
  );
};