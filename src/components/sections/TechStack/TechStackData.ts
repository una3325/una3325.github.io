import {
  Atom,
  Type,
  Palette,
  Panda,
  Server,
  KeyRound,
  Code,
  Database,
  GitBranch,
  Slack,
  Figma,
  Notebook,
} from 'lucide-react';
import type { Category, TechItem } from './TechStackTypes';

export const techStackData: Record<Category, TechItem[]> = {
  FE: [
    { name: 'React', icon: Atom },
    { name: 'TypeScript', icon: Type },
    { name: 'Tailwind CSS', icon: Palette },
    { name: 'Zustand', icon: Panda },
    { name: 'Next.js', icon: Server },
  ],
  BE: [
    { name: 'Node.js', icon: Server },
    { name: 'Express.js', icon: Server },
    { name: 'Nest.js', icon: Server },
    { name: 'JWT', icon: KeyRound },
    { name: 'PHP', icon: Code },
  ],
  DB: [
    { name: 'MySQL', icon: Database },
    { name: 'MariaDB', icon: Database },
  ],
  Tools: [
    { name: 'Github', icon: GitBranch },
    { name: 'Slack', icon: Slack },
    { name: 'Figma', icon: Figma },
    { name: 'Notion', icon: Notebook },
  ],
};

export const categories = Object.keys(techStackData) as Category[];
