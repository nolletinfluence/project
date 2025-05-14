import React from 'react';
import { InputProps } from '../../types';
import { Info } from 'lucide-react';
import styles from './Input.module.css';

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
    <div className={`${styles.inputWrapper} ${className}`}>
      <div className="flex items-center justify-between mb-1">
        <label className={styles.inputLabel}>{label}</label>
        {hint && (
          <div className="relative">
            <button
              type="button"
              onMouseEnter={() => setShowHint(true)}
              onMouseLeave={() => setShowHint(false)}
              className={styles.infoButton}
            >
              <Info size={16} />
            </button>
            {showHint && <div className={styles.hint}>{hint}</div>}
          </div>
        )}
      </div>
      <input
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        className={styles.inputField}
      />
    </div>
  );
};

export default Input;
