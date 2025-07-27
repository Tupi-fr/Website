"use client";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  shadow?: boolean;
  hover?: boolean;
}

export function Card({ children, className = '', shadow = true, hover = true }: CardProps) {
  return (
    <div 
      className={`
        ${shadow ? 'shadow-lg' : ''} 
        ${hover ? 'hover:shadow-2xl transition-all duration-300 hover:-translate-y-1' : ''} 
        bg-white border border-gray-100 rounded-2xl overflow-hidden
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export function CardContent({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`pb-2 ${className}`}>
      {children}
    </div>
  );
}