import React from 'react';
import styles from './Button.module.css';
import { ButtonProps } from '../../types';

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
}) => {
  const variantClass = styles[variant]; 

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${variantClass} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
