export type PageProps = {
  children?: React.ReactNode;
};

export type AuthLayoutProps = {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  characterPosition?: 'left' | 'right';
};

export type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary';
  className?: string;
  isLoading?: boolean;
  disabled?: boolean;
};

export type InputProps = {
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  hint?: string;
  name?: string;
  className?: string;
};

export type CheckboxProps = {
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  className?: string;
};