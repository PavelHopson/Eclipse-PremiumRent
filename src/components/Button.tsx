import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseStyles = "px-8 py-4 text-sm uppercase tracking-[0.15em] transition-all duration-300 active:scale-[0.98] flex items-center justify-center gap-2";
  const variants = {
    primary: "bg-brand-primary text-white hover:brightness-110",
    secondary: "bg-brand-secondary text-white hover:brightness-110",
    outline: "border border-white/20 text-white/70 hover:bg-white/5 hover:text-white"
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
