
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
  const baseStyles = "px-8 py-4 rounded-2xl font-semibold transition-all duration-300 active:scale-95 flex items-center justify-center gap-2";
  const variants = {
    primary: "bg-brand-primary text-white hover:bg-[#259e64] shadow-lg shadow-brand-primary/20",
    secondary: "bg-brand-secondary text-white hover:bg-red-600 shadow-lg shadow-brand-secondary/20",
    outline: "border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white"
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
