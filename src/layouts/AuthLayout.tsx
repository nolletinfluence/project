import React from 'react';
import Character from '../components/Character/Character';
import Decorations from '../components/Decorations/Decorations';
const { SplatterOverlay, DiamondDecoration } = Decorations;
import styles from './AuthLayout.module.css';

interface AuthLayoutProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  characterIcon: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ title, subtitle, children, characterIcon }) => {
  return (
    <div className={styles.container}>
      {/* Фон */}
      <div className={styles.background} />

      {/* Затемнение */}
      <div className={styles.overlay} />

      {/* Брызги */}
      <SplatterOverlay className={`${styles.splatter}`} />
      <SplatterOverlay
        className={`${styles.splatter}`}
        style={{ backgroundPosition: 'bottom right' }}
      />

      {/* Пистолет в левом нижнем углу */}
      <div className={styles.gunWrapper}>
      <div className={styles.gunLeft} />
      </div>

      {/* Пистолет в правом верхнем углу */}
      {/* <div className={styles.gunRight} /> */}

      {/* Контент */}
      <div className={styles.content}>
        {/* Левая секция — персонаж */}
        <div className={styles.leftSection}>
          <div className={styles.characterWrapper}>
            <Character
              src={characterIcon}
              alt="Character Icon"
              className={styles.character}
            />
          </div>
        </div>

        {/* Правая секция — форма */}
        <div className={styles.rightSection}>
          <div className={styles.logoWrapper}>
              <p className={styles.subtitle}>{subtitle}</p>
              <h1 className={styles.title}>{title}</h1>
              <div className="w-full max-w-md relative mt-8">
              {children}
              <DiamondDecoration className={styles.diamondDecoration} />
              <DiamondDecoration className={styles.diamondDecorationRightTop} />
              <DiamondDecoration className={styles.diamondDecorationLeftBottom} />
              <DiamondDecoration className={styles.diamondDecorationRightBottom} />
          </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
