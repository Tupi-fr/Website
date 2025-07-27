'use client';

import { Leaf, Target, Trophy, Users } from 'lucide-react';
import { useLanguage } from './LanguageSelector';

export default function ConceptSection() {
  const { t } = useLanguage();
  const features = [
    {
      icon: <Leaf className="w-5 h-5" />,
      title: t('concept.feature1.title'),
      description: t('concept.feature1.desc')
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: t('concept.feature2.title'), 
      description: t('concept.feature2.desc')
    },
    {
      icon: <Trophy className="w-5 h-5" />,
      title: t('concept.feature3.title'),
      description: t('concept.feature3.desc')
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: t('concept.feature4.title'),
      description: t('concept.feature4.desc')
    }
  ];

  return (
    <section className="min-h-screen bg-[#FAF4EC] flex items-center justify-center py-20">
      <div className="max-w-4xl mx-auto px-6 pl-32">
        {/* Section title */}
        <h2 className="text-3xl text-[#1A1A1A] text-center" style={{ fontFamily: 'Calistoga, serif', marginBottom: '64px' }}>
          {t('concept.title')}
        </h2>

        {/* Feature cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="p-8 flex gap-12 items-center" style={{ marginBottom: '24px' }}>
              <div className="text-[#266659] flex-shrink-0" style={{ marginRight: '32px' }}>
                {feature.icon}
              </div>
              <div>
                <h3 className="font-semibold text-[#1A1A1A] text-md mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#1A1A1A]/80 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}