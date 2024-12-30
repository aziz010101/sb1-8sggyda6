import { Brain, Heart, Scale, Shield, Sword, Star } from 'lucide-react';
import type { Virtue } from '../types';

export const virtuesData: Virtue[] = [
  {
    id: 'wisdom',
    name: 'Wisdom',
    description: 'Cognitive strengths that entail the acquisition and use of knowledge',
    icon: Brain,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
    traits: [
      {
        id: 'creativity',
        name: 'Creativity',
        description: 'Thinking of novel and productive ways to conceptualize and do things',
        unlocked: false
      },
      {
        id: 'curiosity',
        name: 'Curiosity',
        description: 'Taking an interest in ongoing experience for its own sake',
        unlocked: false
      },
      {
        id: 'judgment',
        name: 'Judgment',
        description: 'Thinking things through and examining them from all sides',
        unlocked: false
      },
      {
        id: 'love-of-learning',
        name: 'Love of Learning',
        description: 'Mastering new skills, topics, and bodies of knowledge',
        unlocked: false
      },
      {
        id: 'perspective',
        name: 'Perspective',
        description: 'Being able to provide wise counsel to others',
        unlocked: false
      }
    ],
    progress: 0
  },
  {
    id: 'courage',
    name: 'Courage',
    description: 'Emotional strengths that involve the exercise of will to accomplish goals',
    icon: Sword,
    color: 'text-amber-600',
    bgColor: 'bg-amber-100',
    traits: [
      {
        id: 'bravery',
        name: 'Bravery',
        description: 'Not shrinking from threat, challenge, difficulty, or pain',
        unlocked: false
      },
      {
        id: 'perseverance',
        name: 'Perseverance',
        description: 'Finishing what one starts; persisting in a course of action',
        unlocked: false
      },
      {
        id: 'honesty',
        name: 'Honesty',
        description: 'Speaking the truth and presenting oneself in a genuine way',
        unlocked: false
      },
      {
        id: 'zest',
        name: 'Zest',
        description: 'Approaching life with excitement and energy',
        unlocked: false
      }
    ],
    progress: 0
  },
  {
    id: 'humanity',
    name: 'Humanity',
    description: 'Interpersonal strengths that involve tending and befriending others',
    icon: Heart,
    color: 'text-red-600',
    bgColor: 'bg-red-100',
    traits: [
      {
        id: 'love',
        name: 'Love',
        description: 'Valuing close relations with others',
        unlocked: false
      },
      {
        id: 'kindness',
        name: 'Kindness',
        description: 'Doing favors and good deeds for others',
        unlocked: false
      },
      {
        id: 'social-intelligence',
        name: 'Social Intelligence',
        description: 'Being aware of the motives and feelings of others',
        unlocked: false
      }
    ],
    progress: 0
  },
  {
    id: 'justice',
    name: 'Justice',
    description: 'Civic strengths that underlie healthy community life',
    icon: Scale,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-100',
    traits: [
      {
        id: 'teamwork',
        name: 'Teamwork',
        description: 'Working well as a member of a group or team',
        unlocked: false
      },
      {
        id: 'fairness',
        name: 'Fairness',
        description: 'Treating all people the same according to notions of fairness and justice',
        unlocked: false
      },
      {
        id: 'leadership',
        name: 'Leadership',
        description: 'Encouraging a group of which one is a member to get things done',
        unlocked: false
      }
    ],
    progress: 0
  },
  {
    id: 'temperance',
    name: 'Temperance',
    description: 'Strengths that protect against excess',
    icon: Shield,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-100',
    traits: [
      {
        id: 'forgiveness',
        name: 'Forgiveness',
        description: 'Forgiving those who have done wrong',
        unlocked: false
      },
      {
        id: 'humility',
        name: 'Humility',
        description: 'Letting one\'s accomplishments speak for themselves',
        unlocked: false
      },
      {
        id: 'prudence',
        name: 'Prudence',
        description: 'Being careful about one\'s choices; not taking undue risks',
        unlocked: false
      },
      {
        id: 'self-regulation',
        name: 'Self-Regulation',
        description: 'Regulating what one feels and does',
        unlocked: false
      }
    ],
    progress: 0
  },
  {
    id: 'transcendence',
    name: 'Transcendence',
    description: 'Strengths that forge connections to the larger universe and provide meaning',
    icon: Star,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
    traits: [
      {
        id: 'appreciation',
        name: 'Appreciation of Beauty',
        description: 'Noticing and appreciating beauty, excellence, and/or skilled performance',
        unlocked: false
      },
      {
        id: 'gratitude',
        name: 'Gratitude',
        description: 'Being aware of and thankful for the good things that happen',
        unlocked: false
      },
      {
        id: 'hope',
        name: 'Hope',
        description: 'Expecting the best in the future and working to achieve it',
        unlocked: false
      },
      {
        id: 'humor',
        name: 'Humor',
        description: 'Liking to laugh and tease; bringing smiles to other people',
        unlocked: false
      },
      {
        id: 'spirituality',
        name: 'Spirituality',
        description: 'Having coherent beliefs about the higher purpose and meaning of the universe',
        unlocked: false
      }
    ],
    progress: 0
  }
];