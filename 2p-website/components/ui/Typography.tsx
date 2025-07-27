"use client";

interface HeadingProps {
  children: React.ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
  style?: React.CSSProperties;
}

export function Heading({ children, variant = 'h2', className = '', style }: HeadingProps) {
  const Component = variant;
  
  const baseClasses = 'font-title';
  const variantClasses = {
    h1: 'text-4xl md:text-5xl lg:text-6xl font-bold',
    h2: 'text-3xl md:text-4xl lg:text-5xl font-bold',
    h3: 'text-2xl md:text-3xl lg:text-4xl font-bold',
    h4: 'text-xl md:text-2xl lg:text-3xl font-semibold',
    h5: 'text-lg md:text-xl lg:text-2xl font-semibold',
    h6: 'text-base md:text-lg lg:text-xl font-semibold',
  };
  
  return (
    <Component className={`${baseClasses} ${variantClasses[variant]} ${className}`} style={style}>
      {children}
    </Component>
  );
}

interface TextProps {
  children: React.ReactNode;
  variant?: 'paragraph' | 'lead' | 'small';
  className?: string;
  style?: React.CSSProperties;
}

export function Text({ children, variant = 'paragraph', className = '', style }: TextProps) {
  const baseClasses = 'font-body';
  const variantClasses = {
    paragraph: 'text-base leading-relaxed',
    lead: 'text-lg md:text-xl leading-relaxed',
    small: 'text-sm',
  };
  
  return (
    <p className={`${baseClasses} ${variantClasses[variant]} ${className}`} style={style}>
      {children}
    </p>
  );
}

export function Lead({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`font-body text-xl leading-relaxed ${className}`}>
      {children}
    </p>
  );
}