import React from 'react';
import { LucideIcon } from 'lucide-react';

interface IconButtonProps {
  icon: LucideIcon;
  onClick?: () => void;
  variant?: 'primary' | 'accent' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  title?: string;
}

export default function IconButton({
  icon: Icon,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  title
}: IconButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-full transition-all duration-300 transform hover:scale-110 active:scale-95';
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-dark',
    accent: 'bg-accent text-white hover:bg-accent-dark',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
  };
  
  const sizes = {
    sm: 'p-2',
    md: 'p-3',
    lg: 'p-4'
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      title={title}
    >
      <Icon className={iconSizes[size]} />
    </button>
  );
}