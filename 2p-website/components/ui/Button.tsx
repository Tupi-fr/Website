"use client";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'filled' | 'outlined' | 'text';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
}

export function Button({ 
  children, 
  onClick, 
  type = 'button',
  variant = 'filled',
  size = 'md',
  className = '',
  disabled = false 
}: ButtonProps) {
  const baseClasses = 'font-body font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    filled: 'bg-light-green text-white hover:bg-dark-green focus:ring-light-green',
    outlined: 'border-2 border-light-green text-light-green hover:bg-light-green hover:text-white focus:ring-light-green',
    text: 'text-light-green hover:bg-light-green/10 focus:ring-light-green',
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm rounded-md',
    md: 'px-4 py-2 text-base rounded-lg',
    lg: 'px-6 py-3 text-lg rounded-xl',
  };
  
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </button>
  );
}