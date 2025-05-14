import React from 'react';
import { CheckboxProps } from '../types';

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
  name,
  className = '',
}) => {
  return (
    <label className={`flex items-center cursor-pointer ${className}`}>
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={checked}
          onChange={onChange}
          name={name}
        />
        <div className={`block w-5 h-5 border ${checked ? 'bg-red-700 border-red-700' : 'bg-gray-900 border-gray-700'}`}></div>
        {checked && (
          <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full text-white">
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        )}
      </div>
      <span className="ml-2 text-sm text-gray-400">{label}</span>
    </label>
  );
};

export default Checkbox;