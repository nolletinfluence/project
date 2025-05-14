import React from 'react';

const DiamondDecoration: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`diamond-decoration ${className}`}>
    <div className="w-4 h-4 border border-gray-600 bg-gray-800 transform rotate-45"></div>
  </div>
);

const GunDecoration: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`gun-decoration opacity-70 ${className}`}>
    <div className="w-16 h-16 bg-gray-800/30 rounded-full backdrop-blur-sm border border-gray-700/30"></div>
  </div>
);

const SplatterOverlay: React.FC<{ className?: string }> = ({ className = '' }) => (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
    <div className="absolute top-0 left-0 w-1/4 h-1/4 bg-red-900/20"></div>
    <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-red-900/20"></div>
  </div>
);

const Decorations = { DiamondDecoration, GunDecoration, SplatterOverlay };
export default Decorations;
