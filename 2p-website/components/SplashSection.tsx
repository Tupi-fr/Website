'use client';

import { useLanguage } from './LanguageSelector';

export default function SplashSection() {
  const { t } = useLanguage();
  return (
    <section className="h-screen bg-[#75A874] relative">
      {/* Top navigation buttons */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 flex gap-4 z-10">
        <button 
          onClick={() => {
            // Scroll to vision section (section 1)
            const event = new KeyboardEvent('keydown', { key: 'ArrowDown' });
            document.dispatchEvent(event);
          }}
          style={{ backgroundColor: 'transparent', color: 'white', border: '1px solid white', padding: '8px 16px', borderRadius: '8px', margin: '4px', cursor: 'pointer' }} 
          className="text-sm font-medium transition-all duration-200"
          onMouseEnter={(e) => {
            (e.target as HTMLElement).style.backgroundColor = 'white';
            (e.target as HTMLElement).style.color = '#75A874';
            (e.target as HTMLElement).style.border = '1px solid #75A874';
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLElement).style.backgroundColor = 'transparent';
            (e.target as HTMLElement).style.color = 'white';
            (e.target as HTMLElement).style.border = '1px solid white';
          }}
        >
          {t('nav.vision')}
        </button>
        <button 
          onClick={() => {
            // Scroll to contact section (last section)
            const event = new KeyboardEvent('keydown', { key: 'End' });
            document.dispatchEvent(event);
          }}
          style={{ backgroundColor: 'transparent', color: 'white', border: '1px solid white', padding: '8px 16px', borderRadius: '8px', margin: '4px', cursor: 'pointer' }} 
          className="text-sm font-medium transition-all duration-200"
          onMouseEnter={(e) => {
            (e.target as HTMLElement).style.backgroundColor = 'white';
            (e.target as HTMLElement).style.color = '#75A874';
            (e.target as HTMLElement).style.border = '1px solid #75A874';
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLElement).style.backgroundColor = 'transparent';
            (e.target as HTMLElement).style.color = 'white';
            (e.target as HTMLElement).style.border = '1px solid white';
          }}
        >
          {t('nav.contact')}
        </button>
      </div>

      {/* Centered title */}
      <div className="h-full flex items-center justify-center">
        <h1 style={{ fontFamily: 'Calistoga, serif', fontSize: '96px', color: 'white' }}>
          Tupi
        </h1>
      </div>

    </section>
  );
}