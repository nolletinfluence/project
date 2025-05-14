import React from 'react';
import Character from '../components/Character';
import Decorations from '../components/Decorations';
const { SplatterOverlay } = Decorations;

interface AuthLayoutProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  characterIcon?: string; // Пропс для иконки персонажа
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ title, subtitle, children, characterIcon }) => {
  return (
    <div className="relative min-h-screen flex flex-col md:flex-row text-white overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(../src/assets/background.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      {/* Затемнение */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* Сплэттеры */}
      <SplatterOverlay className="z-20" />

      {/* Контент */}
      <div className="relative z-30 flex flex-col md:flex-row w-full">
        {/* Левая секция — персонаж */}
        <div className="w-full md:w-1/2 flex justify-center items-center p-8 md:p-16">
          {characterIcon ? (
            <Character
              src={characterIcon}
              alt="Character Icon"
              className="w-[737px] h-[900px] object-contain"
            />
          ) : (
            <Character
              src="/default-character.png"
              alt="Default Character"
              className="w-[400px] h-[500px] object-contain" 
            />
          )}
        </div>

        {/* Правая секция — форма */}
        <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8 md:p-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{title}</h1>
          <p className="text-gray-300 text-base mb-8 text-center md:text-left">{subtitle}</p>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
