import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  external?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  to, 
  variant = 'primary', 
  onClick, 
  className = '',
  type = 'button',
  external = false
}) => {
  const baseStyles = "inline-block px-6 py-3 rounded-md font-semibold transition-all duration-300 shadow-md text-sm md:text-base cursor-pointer";
  
  const variants = {
    primary: "bg-secondary text-white hover:bg-red-700 border border-transparent",
    secondary: "bg-primary text-white hover:bg-gray-700 border border-transparent",
    outline: "bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white"
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    if (external) {
      return (
        <a href={to} className={combinedClassName} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link to={to} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
};

export default Button;