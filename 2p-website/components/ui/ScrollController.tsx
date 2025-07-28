'use client';

import { useState, useEffect, useRef } from 'react';
import { NavigationSidebar } from '../NavigationSidebar';
import ScrollContext from '../ScrollContext';


interface ScrollControllerProps {
  children: React.ReactNode[];
}

export function ScrollController({ children }: ScrollControllerProps) {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const totalSections = children.length;

  const scrollToSection = (index: number) => {
    if (isScrolling || index < 0 || index >= totalSections) return;
    
    setIsScrolling(true);
    setCurrentSection(index);
    
    setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  };

  const nextSection = () => {
    if (currentSection < totalSections - 1) {
      scrollToSection(currentSection + 1);
    }
  };

  const prevSection = () => {
    if (currentSection > 0) {
      scrollToSection(currentSection - 1);
    }
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isScrolling) return;

      if (e.deltaY > 0) {
        nextSection();
      } else {
        prevSection();
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling) return;

      switch (e.key) {
        case 'ArrowDown':
        case ' ':
          e.preventDefault();
          nextSection();
          break;
        case 'ArrowUp':
          e.preventDefault();
          prevSection();
          break;
        case 'Home':
          e.preventDefault();
          scrollToSection(0);
          break;
        case 'End':
          e.preventDefault();
          scrollToSection(totalSections - 1);
          break;
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }
    
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSection, isScrolling, totalSections]);

  return (
    <ScrollContext.Provider value={{ currentSection }}>
      <div 
        ref={containerRef}
        className="h-screen overflow-hidden relative"
        style={{ backgroundColor: '#FAF4EC' }}
      >
      <div
        className="h-full w-full transition-transform duration-700 ease-out"
        style={{
          transform: `translateY(-${currentSection * 100}vh)`
        }}
      >
        {children.map((child, index) => (
          <div key={index} className="h-screen w-full">
            {child}
          </div>
        ))}
      </div>

      {/* Navigation Sidebar */}
      <NavigationSidebar 
        currentSection={currentSection} 
        onSectionClick={scrollToSection} 
      />

      {/* Navigation dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 space-y-3">
        {children.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(index)}
            className={`
              w-3 h-3 rounded-full transition-all duration-300
              ${index === currentSection 
                ? 'bg-green-600 scale-125' 
                : 'bg-gray-400 hover:bg-gray-600'
              }
            `}
            style={{
              backgroundColor: index === currentSection ? '#266659' : '#9CA3AF'
            }}
          />
        ))}
      </div>

      {/* Click to continue indicator */}
      {currentSection < totalSections - 1 && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
          <button
            onClick={nextSection}
            className="flex flex-col items-center space-y-2 transition-colors"
            style={{ color: currentSection === 0 ? 'white' : '#266659' }}
          >
            <span className="text-sm">Click to continue</span>
            <div className="w-6 h-6 animate-bounce">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 16.5l-6-6 1.5-1.5L12 13.5l4.5-4.5L18 10.5z"/>
              </svg>
            </div>
          </button>
        </div>
      )}
      </div>
    </ScrollContext.Provider>
  );
}