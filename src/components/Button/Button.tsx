import React from 'react';
import styles from './Button.module.css';
import { ButtonProps } from '../../types';

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
  isLoading = false,
  disabled = false,
}) => {
  const variantClass = styles[variant];
  const isDisabled = isLoading || disabled;

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${variantClass} ${isDisabled ? styles.disabled : ''} ${className}`}
      disabled={isDisabled}
    >
      {isLoading ? 'Загрузка...' : children}
    </button>
  );
};

export default Button;
