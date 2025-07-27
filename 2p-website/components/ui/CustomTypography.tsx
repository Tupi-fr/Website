'use client';

interface HeadingProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  color?: string;
}

export function Heading({ children, level = 2, className = '', color = '#1A1A1A' }: HeadingProps) {
  const Tag = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  
  const sizeClasses = {
    1: 'text-4xl md:text-5xl lg:text-6xl',
    2: 'text-3xl md:text-4xl lg:text-5xl',
    3: 'text-2xl md:text-3xl lg:text-4xl',
    4: 'text-xl md:text-2xl lg:text-3xl',
    5: 'text-lg md:text-xl lg:text-2xl',
    6: 'text-base md:text-lg lg:text-xl'
  };

  return (
    <Tag 
      className={`font-title font-bold leading-tight ${sizeClasses[level]} ${className}`}
      style={{ color }}
    >
      {children}
    </Tag>
  );
}

interface TextProps {
  children: React.ReactNode;
  size?: 'sm' | 'base' | 'lg' | 'xl';
  className?: string;
  color?: string;
}

export function Text({ children, size = 'base', className = '', color = '#1A1A1A' }: TextProps) {
  const sizeClasses = {
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  };

  return (
    <p 
      className={`font-body leading-relaxed ${sizeClasses[size]} ${className}`}
      style={{ color }}
    >
      {children}
    </p>
  );
}