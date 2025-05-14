import React from 'react';
import styles from './Checkbox.module.css';

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  className?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
  name,
  className = '',
}) => {
  return (
    <label className={`${styles.checkboxWrapper} ${className}`}>
      <div className={styles.checkboxContainer}>
        <input
          type="checkbox"
          className={styles.checkboxInput}
          checked={checked}
          onChange={onChange}
          name={name}
        />
        <div
          className={`${styles.checkboxBox} ${checked ? styles.checkboxBoxChecked : ''}`}
        />
        {checked && (
          <div className={styles.checkboxIcon}>
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
      <span className={styles.checkboxLabel}>{label}</span>
    </label>
  );
};

export default Checkbox;
