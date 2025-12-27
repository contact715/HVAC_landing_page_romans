import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 text-sm font-bold uppercase tracking-wider transition-all duration-200 rounded-none";
  
  const variants = {
    primary: "bg-[#E31E24] text-white hover:bg-black shadow-none",
    secondary: "bg-black text-white hover:bg-gray-900 shadow-none",
    outline: "bg-transparent text-black border-2 border-black hover:bg-black hover:text-white",
    ghost: "bg-gray-100 text-gray-800 hover:bg-gray-200"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};