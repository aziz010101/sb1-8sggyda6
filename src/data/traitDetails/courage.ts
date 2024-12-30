import type { TraitDetail } from '../../types/trait';

export const courageTraits: TraitDetail[] = [
  {
    id: 'bravery',
    name: 'Bravery',
    description: 'Not shrinking from threat, challenge, difficulty, or pain',
    examples: [
      'Speaking up against injustice',
      'Taking calculated risks for growth',
      'Facing fears systematically',
      'Standing up for others'
    ],
    keyBehaviors: [
      'Confronting challenges directly',
      'Speaking truth to power',
      'Taking principled stands',
      'Acting despite fear'
    ],
    challenges: [
      'Fear of negative consequences',
      'Social pressure to conform',
      'Uncertainty about outcomes',
      'Physical or emotional discomfort'
    ],
    strengtheningActions: [
      'Start with small acts of courage',
      'Practice speaking up in meetings',
      'Face one fear systematically',
      'Defend others when appropriate'
    ],
    unlocked: false
  },
  {
    id: 'perseverance',
    name: 'Perseverance',
    description: 'Finishing what one starts; persisting in a course of action',
    examples: [
      'Completing long-term projects',
      'Maintaining exercise routines',
      'Learning difficult skills',
      'Overcoming setbacks'
    ],
    keyBehaviors: [
      'Setting clear goals',
      'Breaking tasks into steps',
      'Maintaining focus',
      'Bouncing back from failures'
    ],
    challenges: [
      'Maintaining motivation',
      'Handling setbacks',
      'Avoiding burnout',
      'Balancing persistence with flexibility'
    ],
    strengtheningActions: [
      'Set SMART goals',
      'Track progress daily',
      'Build support systems',
      'Celebrate small wins'
    ],
    unlocked: false
  }
];