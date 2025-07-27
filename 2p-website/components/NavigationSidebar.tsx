'use client';

import { useState, useEffect } from 'react';

interface NavigationSidebarProps {
  currentSection: number;
  onSectionClick: (index: number) => void;
}

export function NavigationSidebar({ currentSection, onSectionClick }: NavigationSidebarProps) {
  const sections = [
    { name: 'Home', id: 'splash' },
    { name: 'Vision', id: 'vision' },
    { name: 'Features', id: 'features' },
    { name: 'App Preview', id: 'app' },
    { name: 'Roadmap', id: 'roadmap' },
    { name: 'Contact', id: 'contact' }
  ];

  const isOnSplash = currentSection === 0;
  const lineColor = isOnSplash ? 'white' : '#266659';
  const textColor = isOnSplash ? 'white' : '#266659';
  const activeColor = isOnSplash ? 'white' : '#75A874';
  const idlePointBg = isOnSplash ? '#75A874' : '#FAF4EC';

  return (
    <div style={{ position: 'fixed', left: '64px', top: '0', height: '100vh', zIndex: 50 }}>
      <div style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}>
        {/* Vertical line extending full height */}
        <div 
          style={{ 
            position: 'absolute',
            left: '7px',
            backgroundColor: lineColor,
            width: '2px',
            height: '100vh',
            top: '0',
            transition: 'background-color 0.3s',
            zIndex: 1
          }}
        />
        
        {/* Navigation items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {sections.map((section, index) => {
            const isActive = currentSection === index;
            
            return (
              <div
                key={section.id}
                style={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer'
                }}
                onClick={() => onSectionClick(index)}
              >
                {/* Point on line - centered on the line */}
                <div 
                  style={{
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    border: `2px solid ${lineColor}`,
                    backgroundColor: isActive ? lineColor : idlePointBg,
                    transform: isActive ? 'scale(1.4)' : 'scale(1)',
                    transformOrigin: 'center',
                    transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    zIndex: 2
                  }}
                />
                
                {/* Section title */}
                <span 
                  style={{ 
                    marginLeft: '32px',
                    fontSize: isActive ? '16px' : '14px',
                    fontFamily: 'Calistoga, serif',
                    fontWeight: isActive ? '600' : '500',
                    color: textColor,
                    opacity: isActive ? 1 : 0.7,
                    transform: isActive ? 'translateX(4px)' : 'translateX(0)',
                    transition: 'all 0.3s ease-out'
                  }}
                >
                  {section.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}