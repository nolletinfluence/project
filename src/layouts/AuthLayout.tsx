import React from 'react';
import styles from './AuthLayout.module.css';
import DiamondDecoration from '../components/Decorations/Decorations';

interface AuthLayoutProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  backgroundImage: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ title, subtitle, children, backgroundImage }) => {
  return (
    <div
      className={styles.container}
      style={{ 
            backgroundImage: `url(${backgroundImage})`, 
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
      }} 
    >

      <div className={styles.content}>
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
            <div className={styles.fact}>
              <span>*</span> <br />
              <span>Интересный факт #667</span>
              <p>
                Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie,
                dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
