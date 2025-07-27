'use client';

import { useLanguage } from './LanguageSelector';

export default function RoadmapSection() {
  const { t } = useLanguage();
  const milestones = [
    {
      quarter: "Q4 2025",
      title: t('roadmap.q4.title'),
      description: t('roadmap.q4.desc')
    },
    {
      quarter: "Q1 2026", 
      title: t('roadmap.q1.title'),
      description: t('roadmap.q1.desc')
    },
    {
      quarter: "Q2 2026",
      title: t('roadmap.q2.title'), 
      description: t('roadmap.q2.desc')
    },
    {
      quarter: "Q3 2026",
      title: t('roadmap.q3.title'),
      description: t('roadmap.q3.desc')
    }
  ];

  return (
    <section className="min-h-screen bg-[#FAF4EC] flex items-center justify-center py-20">
      <div className="max-w-2xl mx-auto px-6">
        {/* Section title */}
        <h2 className="text-3xl text-[#1A1A1A] text-center mb-16" style={{ fontFamily: 'Calistoga, serif' }}>
          {t('roadmap.title')}
        </h2>

        {/* Timeline cards */}
        <div className="space-y-8 max-w-2xl mx-auto">
          {milestones.map((milestone, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow"
            >
              <span className="text-sm text-[#6EAEA9] font-bold">
                {milestone.quarter}
              </span>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mt-2 mb-2">
                {milestone.title}
              </h3>
              <p className="text-sm text-[#1A1A1A]/80">
                {milestone.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}