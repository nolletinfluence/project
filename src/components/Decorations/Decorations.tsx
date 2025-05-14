import React from 'react';
import styles from './Decorations.module.css';

const DiamondDecoration: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`${styles.diamondDecoration} ${className}`} />
);

export default DiamondDecoration;
