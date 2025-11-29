import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-brand-gold text-brand-dark hover:bg-yellow-400 border-b-4 border-yellow-600",
    secondary: "bg-white text-brand-dark hover:bg-gray-100 border border-gray-200",
    danger: "bg-red-600 text-white hover:bg-red-700 animate-pulse-fast border-b-4 border-red-800"
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