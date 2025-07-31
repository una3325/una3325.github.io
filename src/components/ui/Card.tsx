import { cn } from 'utils/cn';
import { HTMLAttributes, ReactNode } from 'react';

type CardProps = HTMLAttributes<HTMLDivElement>;

export function Card({ children, className = '', ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-lg text-card-foreground shadow-xl border-0 bg-white/80 backdrop-blur-sm transition-all duration-500 overflow-hidden',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn('p-4', className)}>{children}</div>;
}

export function CardTitle({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return <h3 className={cn('text-lg font-semibold text-gray-900', className)}>{children}</h3>;
}

export function CardDescription({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return <p className={cn('text-sm text-gray-500 mt-1', className)}>{children}</p>;
}

export function CardContent({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn('p-4 pt-0', className)}>{children}</div>;
}
