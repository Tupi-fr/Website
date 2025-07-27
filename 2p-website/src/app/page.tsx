import SplashSection from '../../components/SplashSection';
import VisionSection from '../../components/VisionSection';
import ConceptSection from '../../components/ConceptSection';
import AppPreviewSection from '../../components/AppPreviewSection';
import RoadmapSection from '../../components/RoadmapSection';
import NewContactSection from '../../components/NewContactSection';
import LanguageSelector, { LanguageProvider } from '../../components/LanguageSelector';
import { ScrollController } from '../../components/ui/ScrollController';

export default function Home() {
  return (
    <LanguageProvider>
      <ScrollController>
        <SplashSection />
        <VisionSection />
        <ConceptSection />
        <AppPreviewSection />
        <RoadmapSection />
        <NewContactSection />
      </ScrollController>
    </LanguageProvider>
  );
}
