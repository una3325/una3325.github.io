import { LucideIcon } from 'lucide-react';

export type Category = 'FE' | 'BE' | 'DB' | 'Tools';

export interface TechItem {
  name: string;
  icon: LucideIcon;
}
