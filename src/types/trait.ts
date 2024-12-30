export interface TraitDetail {
  id: string;
  name: string;
  description: string;
  examples: string[];
  keyBehaviors: string[];
  challenges: string[];
  strengtheningActions: string[];
  unlocked: boolean;
}

export interface VirtueDetail {
  id: string;
  name: string;
  description: string;
  traits: TraitDetail[];
}