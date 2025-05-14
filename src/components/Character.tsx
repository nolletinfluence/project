import React from 'react';

interface CharacterProps {
  src: string;
  alt?: string;
  className?: string;
}

const Character: React.FC<CharacterProps> = ({ src, alt = 'Character', className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="w-full h-full min-h-[500px] relative flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10" />
        <div className="relative z-20">
          <img
            src={src}
            alt={alt}
            className="object-contain w-full max-h-[900px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Character;
