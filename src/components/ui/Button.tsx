import { cva } from 'class-variance-authority';
import { cn } from 'utils/cn';
import { ButtonHTMLAttributes, FC } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap text-sm font-medium rounded-md gap-2 transition-all duration-300 transform hover:scale-105 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        primary: 'h-11 px-8 py-3 bg-gray-900 text-white shadow-lg hover:bg-gray-800',
        outline:
          'h-11 px-8 py-3 border border-gray-300 text-gray-700 bg-transparent hover:bg-gray-50',
        ghost: 'h-11 px-8 py-3 bg-transparent text-gray-700 hover:bg-gray-100 border-none',
      },
      size: {
        sm: 'h-8 px-1.5 text-sm',
        md: 'h-10 px-6 text-sm',
        lg: 'h-11 px-8 text-base',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'lg',
    },
  },
);

const Button: FC<ButtonProps> = ({ className, variant, size, ...props }) => {
  return <button className={cn(buttonVariants({ variant, size }), className)} {...props} />;
};

export default Button;
