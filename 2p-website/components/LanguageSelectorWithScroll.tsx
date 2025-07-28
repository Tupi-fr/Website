'use client';

import LanguageSelector from './LanguageSelector';
import { useScrollContext } from './ScrollContext';

export default function LanguageSelectorWithScroll() {
  const { currentSection } = useScrollContext();
  
  return <LanguageSelector currentSection={currentSection} />;
}