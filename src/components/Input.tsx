import React from 'react';
import { InputProps } from '../types';
import { Info } from 'lucide-react';

const Input: React.FC<InputProps> = ({
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  hint,
  name,
  className = '',
}) => {
  const [showHint, setShowHint] = React.useState(false);

  return (
    <div className={`relative mb-4 ${className}`}>
      <div className="flex items-center justify-between mb-1">
        <label className="text-gray-400 text-sm">{label}</label>
        {hint && (
          <div className="relative">
            <button
              type="button"
              onMouseEnter={() => setShowHint(true)}
              onMouseLeave={() => setShowHint(false)}
              className="text-gray-400 hover:text-white"
            >
              <Info size={16} />
            </button>
            {showHint && (
              <div className="absolute right-0 z-10 w-64 p-3 text-sm bg-gray-800 text-white rounded shadow-lg">
                {hint}
              </div>
            )}
          </div>
        )}
      </div>
      <input
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        className="w-full bg-gray-900 border border-gray-700 text-white px-3 py-2 rounded-sm focus:outline-none focus:border-red-700 transition-colors"
      />
    </div>
  );
};

export default Input;