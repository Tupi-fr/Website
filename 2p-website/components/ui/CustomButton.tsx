'use client';

interface CustomButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export function CustomButton({ 
  children, 
  onClick, 
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  type = 'button'
}: CustomButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: '#266659',
          color: '#FFFFFF',
          border: 'none'
        };
      case 'secondary':
        return {
          backgroundColor: '#6EAEA9',
          color: '#FFFFFF',
          border: 'none'
        };
      case 'accent':
        return {
          backgroundColor: '#E85D3F',
          color: '#FFFFFF',
          border: 'none'
        };
      case 'outline':
        return {
          backgroundColor: 'transparent',
          color: '#266659',
          border: '2px solid #266659'
        };
      default:
        return {
          backgroundColor: '#266659',
          color: '#FFFFFF',
          border: 'none'
        };
    }
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${sizeClasses[size]} 
        rounded-full 
        font-medium 
        font-body
        transition-all 
        duration-200 
        hover:scale-105 
        hover:shadow-md
        active:scale-95
        disabled:opacity-50 
        disabled:cursor-not-allowed
        disabled:hover:scale-100
        ${className}
      `}
      style={getVariantStyles()}
    >
      {children}
    </button>
  );
}