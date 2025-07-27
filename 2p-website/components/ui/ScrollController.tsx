'use client';

import { useState, useEffect, useRef, createContext, useContext } from 'react';
import { NavigationSidebar } from '../NavigationSidebar';
import { useLanguage } from '../LanguageSelector';

interface ScrollContextType {
  currentSection: number;
}

const ScrollContext = createContext<ScrollContextType>({
  currentSection: 0
});

export const useScrollContext = () => useContext(ScrollContext);

function LanguageSelectorInternal({ currentSection }: { currentSection: number }) {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  
  const isOnSplash = currentSection === 0;
  
  const languages = [
    { code: 'EN', name: 'English', flag: '🇺🇸' },
    { code: 'FR', name: 'Français', flag: '🇫🇷' }
  ];

  const handleLanguageSelect = (languageCode: string) => {
    setLanguage(languageCode);
    setIsOpen(false);
  };

  return (
    <div 
      style={{ 
        position: 'fixed', 
        top: '24px', 
        right: '24px', 
        zIndex: 9999 
      }}
    >
      <div style={{ position: 'relative' }}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            borderRadius: '8px',
            padding: '8px 12px',
            fontSize: '12px',
            fontFamily: 'Inter, sans-serif',
            color: isOnSplash ? 'white' : '#266659',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontWeight: '500'
          }}
        >
          {languages.find(lang => lang.code === language)?.flag} {language}
          <span style={{ fontSize: '10px' }}>▼</span>
        </button>

        {isOpen && (
          <div
            style={{
              position: 'absolute',
              top: '100%',
              right: '0',
              marginTop: '4px',
              backgroundColor: 'transparent',
              border: 'none',
              borderRadius: '8px',
              boxShadow: 'none',
              minWidth: '120px',
              overflow: 'hidden'
            }}
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageSelect(lang.code)}
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  fontSize: '12px',
                  fontFamily: 'Inter, sans-serif',
                  color: language === lang.code ? (isOnSplash ? 'white' : '#266659') : '#266659',
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  textAlign: 'left',
                  borderRadius: '0'
                }}
                onMouseEnter={(e) => {
                  if (language !== lang.code) {
                    e.target.style.color = isOnSplash ? 'white' : '#266659';
                  }
                }}
                onMouseLeave={(e) => {
                  if (language !== lang.code) {
                    e.target.style.color = '#266659';
                  }
                }}
              >
                <span>{lang.flag}</span>
                <span>{lang.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

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
      
      {/* Language Selector */}
      <LanguageSelectorInternal currentSection={currentSection} />

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