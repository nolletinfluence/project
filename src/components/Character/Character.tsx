import React from 'react';
import styles from './Character.module.css';

interface CharacterProps {
  src: string;
  alt?: string;
  className?: string;
}

const Character: React.FC<CharacterProps> = ({ src, alt = 'Character', className = '' }) => {
  return (
    <div className={`${styles.characterWrapper} ${className}`}>
      <div className={styles.characterContainer}>
        <div className={styles.characterGradient} />
        <div className={styles.characterImageContainer}>
          <img
            src={src}
            alt={alt}
            className={styles.characterImage}
          />
        </div>
      </div>
    </div>
  );
};

export default Character;
