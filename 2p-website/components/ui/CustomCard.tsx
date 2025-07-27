'use client';

interface CustomCardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
  shadow?: 'soft' | 'medium' | 'strong';
}

export function CustomCard({ 
  children, 
  className = '', 
  padding = 'md',
  shadow = 'soft'
}: CustomCardProps) {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  const shadowClasses = {
    soft: 'shadow-sm',
    medium: 'shadow-md',
    strong: 'shadow-lg'
  };

  return (
    <div 
      className={`bg-white rounded-2xl ${paddingClasses[padding]} ${shadowClasses[shadow]} ${className}`}
      style={{
        boxShadow: shadow === 'soft' ? '0 2px 8px rgba(0,0,0,0.06)' : 
                   shadow === 'medium' ? '0 4px 16px rgba(0,0,0,0.08)' :
                   '0 8px 24px rgba(0,0,0,0.12)'
      }}
    >
      {children}
    </div>
  );
}