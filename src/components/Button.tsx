import React from 'react';
import { ButtonProps } from '../types';

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
}) => {
  const baseClasses = 'px-6 py-2 font-medium transition-all duration-200 ease-in-out';
  const variantClasses = {
    primary: 'bg-red-700 hover:bg-red-600 text-white',
    secondary: 'bg-gray-800 hover:bg-gray-700 text-white',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;