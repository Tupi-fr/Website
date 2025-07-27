'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from './LanguageSelector';

export default function AppPreviewSection() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredPhone, setHoveredPhone] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const getPhoneTransform = (phoneIndex: number, isHovered: boolean) => {
    if (!isVisible) {
      return 'perspective(1000px) translateY(120px)';
    }

    if (hoveredPhone === null) {
      // Default positions
      switch (phoneIndex) {
        case 0: return 'perspective(1000px) rotateY(-15deg) translateX(-100px) translateZ(-50px)';
        case 1: return 'perspective(1000px) rotateY(0deg) translateZ(0px)';
        case 2: return 'perspective(1000px) rotateY(15deg) translateX(100px) translateZ(50px)';
        default: return 'perspective(1000px)';
      }
    }

    if (isHovered) {
      // Hovered phone comes to front center and scales up (limited by screen height)
      return 'perspective(1000px) rotateY(0deg) translateX(0px) translateZ(100px) scale(1.1)';
    } else {
      // Non-hovered phones move back and fade
      switch (phoneIndex) {
        case 0: return 'perspective(1000px) rotateY(-25deg) translateX(-200px) translateZ(-150px) scale(0.8)';
        case 1: return 'perspective(1000px) rotateY(0deg) translateX(0px) translateZ(-100px) scale(0.8)';
        case 2: return 'perspective(1000px) rotateY(25deg) translateX(200px) translateZ(-150px) scale(0.8)';
        default: return 'perspective(1000px) scale(0.8)';
      }
    }
  };

  const getPhoneOpacity = (phoneIndex: number, isHovered: boolean) => {
    if (!isVisible) return 0;
    if (hoveredPhone === null) return 1;
    return isHovered ? 1 : 0.4;
  };

  const getZIndex = (phoneIndex: number, isHovered: boolean) => {
    if (hoveredPhone === null) {
      return phoneIndex + 1;
    }
    return isHovered ? 10 : phoneIndex + 1;
  };

  return (
    <section className="min-h-screen bg-[#FAF4EC] flex items-center justify-center py-20 px-4 pl-32">
      <div className="w-full max-w-6xl mx-auto flex items-center">
        {/* Left side - Phone mockups */}
        <div className="relative w-3/5 h-[80vh] flex items-center justify-end pr-4">
          {/* Phone container with max height constraint */}
          <div className="relative w-full h-full flex items-center justify-center" style={{ maxHeight: '80vh', marginLeft: '120px' }}>
        {/* Back phone (Actions.png) */}
        <div 
          className="absolute transition-all duration-700 ease-out cursor-pointer"
          style={{
            transform: getPhoneTransform(0, hoveredPhone === 0),
            opacity: getPhoneOpacity(0, hoveredPhone === 0),
            zIndex: getZIndex(0, hoveredPhone === 0),
            transitionDelay: isVisible ? '0s' : '0s'
          }}
          onMouseEnter={() => setHoveredPhone(0)}
          onMouseLeave={() => setHoveredPhone(null)}
        >
            <img 
              src="/Actions.png" 
              alt="Actions Screen" 
              className="w-[240px] h-auto rounded-2xl shadow-2xl"
              style={{ maxHeight: '80vh', objectFit: 'contain' }}
            />
          </div>

          {/* Middle phone (Écran d'accueil.png) */}
          <div 
            className="absolute transition-all duration-700 ease-out cursor-pointer"
            style={{
              transform: getPhoneTransform(1, hoveredPhone === 1),
              opacity: getPhoneOpacity(1, hoveredPhone === 1),
              zIndex: getZIndex(1, hoveredPhone === 1),
              transitionDelay: isVisible ? '0s' : '0.2s'
            }}
            onMouseEnter={() => setHoveredPhone(1)}
            onMouseLeave={() => setHoveredPhone(null)}
          >
            <img 
              src="/Écran d'accueil.png" 
              alt="Home Screen" 
              className="w-[280px] h-auto rounded-2xl shadow-2xl"
              style={{ maxHeight: '80vh', objectFit: 'contain' }}
            />
          </div>

          {/* Front phone (Écran d'accueil (1).png) */}
          <div 
            className="absolute transition-all duration-700 ease-out cursor-pointer"
            style={{
              transform: getPhoneTransform(2, hoveredPhone === 2),
              opacity: getPhoneOpacity(2, hoveredPhone === 2),
              zIndex: getZIndex(2, hoveredPhone === 2),
              transitionDelay: isVisible ? '0s' : '0.4s'
            }}
            onMouseEnter={() => setHoveredPhone(2)}
            onMouseLeave={() => setHoveredPhone(null)}
          >
            <img 
              src="/Écran d'accueil (1).png" 
              alt="Home Screen Variant" 
              className="w-[240px] h-auto rounded-2xl shadow-2xl"
              style={{ maxHeight: '80vh', objectFit: 'contain' }}
            />
          </div>
          </div>
        </div>

        {/* Right side - Title */}
        <div className="w-2/5 pl-8 flex items-center justify-start">
          <h2 className="text-4xl text-[#1A1A1A] text-left leading-tight" style={{ fontFamily: 'Calistoga, serif' }}>
            {t('app.title')}
          </h2>
        </div>
      </div>
    </section>
  );
}