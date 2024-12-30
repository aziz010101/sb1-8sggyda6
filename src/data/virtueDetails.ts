import type { VirtueDetail } from '../types/trait';
import { wisdomTraits } from './traitDetails/wisdom';
import { courageTraits } from './traitDetails/courage';

const virtueDetails: Record<string, VirtueDetail> = {
  wisdom: {
    id: 'wisdom',
    name: 'Wisdom',
    description: 'Cognitive strengths that entail the acquisition and use of knowledge',
    traits: wisdomTraits
  },
  courage: {
    id: 'courage',
    name: 'Courage',
    description: 'Emotional strengths that involve the exercise of will to accomplish goals',
    traits: courageTraits
  }
};

export const getDetailedVirtueData = (virtueId: string): VirtueDetail => {
  const virtue = virtueDetails[virtueId];
  if (!virtue) {
    return {
      id: virtueId,
      name: 'Virtue',
      description: 'Details coming soon',
      traits: []
    };
  }
  return virtue;
};