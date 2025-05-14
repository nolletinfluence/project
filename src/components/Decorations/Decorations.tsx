import React from 'react';
import styles from './Decorations.module.css';

const DiamondDecoration: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`${styles.diamondDecoration} ${className}`} />
);

const GunDecoration: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`${styles.gunDecoration} ${className}`} />
);

interface SplatterOverlayProps {
  className?: string;
  style?: React.CSSProperties;
}

const SplatterOverlay: React.FC<SplatterOverlayProps> = ({ className = '', style }) => (
  <div className={`${styles.splatterOverlay} ${className}`} style={style}>
    <div className={styles.splatterOverlayBackground} />
    <div className={styles.splatterOverlayDark} />
  </div>
);

const Decorations = { DiamondDecoration, GunDecoration, SplatterOverlay };
export default Decorations;
