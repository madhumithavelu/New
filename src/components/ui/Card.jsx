import React from 'react';
import { cn } from '../../lib/utils';

export const Card = ({ children, className }) => {
  return (
    <div className={cn(
      'bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 p-6',
      'border border-gray-100',
      className
    )}>
      {children}
    </div>
  );
};