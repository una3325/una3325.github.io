import { ReactNode } from 'react';
import { cn } from 'utils/cn';

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border font-semibold focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-secondary-foreground bg-gray-100 hover:bg-gray-200 transition-colors text-xs px-2 py-1',
        className,
      )}
    >
      {children}
    </span>
  );
}
