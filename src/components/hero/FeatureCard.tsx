import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function FeatureCard({ 
  icon: Icon, 
  title, 
  description,
  className = '',
  style = {}
}: FeatureCardProps) {
  return (
    <div 
      className={`flex items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${className}`}
      style={style}
    >
      <Icon className="w-12 h-12 text-primary mr-4 animate-float" />
      <div>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}