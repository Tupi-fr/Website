'use client';

import { useLanguage } from './LanguageSelector';

export default function VisionSection() {
  const { t } = useLanguage();
  return (
    <section className="bg-[#FAF4EC] py-16 text-center px-6 pl-32 mx-auto space-y-6 min-h-screen flex flex-col justify-center" style={{ maxWidth: '800px' }}>
      <h2 className="text-3xl text-[#1A1A1A]" style={{ fontFamily: 'Calistoga, serif' }}>{t('vision.title')}</h2>
      
      <p className="text-[#1A1A1A]/80 leading-relaxed text-base">
        {t('vision.p1')}
      </p>
      
      <p className="text-[#1A1A1A]/80 leading-relaxed text-base">
        {t('vision.p2')}
      </p>
      
      <blockquote className="text-[#266659] italic p-6" style={{ marginTop: '32px' }}>
        {t('vision.quote')}
      </blockquote>
    </section>
  );
}