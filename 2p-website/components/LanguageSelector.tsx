'use client';

import { useState, createContext, useContext, useEffect } from 'react';
import { useScrollContext } from './ui/ScrollController';

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'EN',
  setLanguage: () => {},
  t: (key: string) => key
});

export const useLanguage = () => useContext(LanguageContext);

const translations = {
  EN: {
    // Splash Section
    'splash.title': 'Tupi',
    'nav.vision': 'What is this?',
    'nav.concept': 'Concept',
    'nav.app': 'App',
    'nav.roadmap': 'Roadmap',
    'nav.contact': 'Contact',
    
    // Vision Section
    'vision.title': 'A new way forward',
    'vision.p1': 'Trust in ecology has been broken. Complex systems, overwhelming data, and guilt-driven messaging have left people feeling powerless.',
    'vision.p2': 'Tupi restores that trust through gamified small actions that create real impact.',
    'vision.quote': '"No blame. No guilt. Just progress, community, and meaningful change."',
    
    // Concept Section
    'concept.title': 'Duolingo for the Planet',
    'concept.feature1.title': 'Gamified Challenges',
    'concept.feature1.desc': 'Save CO₂ daily through fun quests.',
    'concept.feature2.title': 'Track Impact',
    'concept.feature2.desc': 'Monitor your carbon footprint and see real environmental progress.',
    'concept.feature3.title': 'Earn Rewards',
    'concept.feature3.desc': 'Complete quests, collect points, and unlock meaningful badges.',
    'concept.feature4.title': 'Join Community',
    'concept.feature4.desc': 'Challenge and connect with others on the same journey toward sustainability.',
    
    // App Preview Section
    'app.title': 'A simple, powerful app',
    
    // Roadmap Section
    'roadmap.title': 'Our Journey',
    'roadmap.q4.title': 'Beta Launch',
    'roadmap.q4.desc': 'Gather feedback from 5,000 early users',
    'roadmap.q1.title': 'Community Growth',
    'roadmap.q1.desc': 'Build our sustainable community and establish key partnerships',
    'roadmap.q2.title': 'B2B Module',
    'roadmap.q2.desc': 'Launch corporate sustainability platform for businesses',
    'roadmap.q3.title': 'Impact Analytics',
    'roadmap.q3.desc': 'Advanced carbon tracking and reporting for all users and businesses',
    
    // Contact Section
    'contact.title': 'Contact Us',
    'contact.desc': 'We\'d love to hear from you. Whether it\'s feedback, questions or just a hello — we\'re here. Reach out anytime!',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.sending': 'Sending...',
    'contact.thanks': 'Thank you!',
    'contact.thanks.desc': 'Your message has been sent. We\'ll get back to you soon!',
    'contact.another': 'Send another message',
    
    // Legal
    'legal.text': '© 2025 Tupi. All rights reserved. | Privacy Policy | Terms of Service | Contact'
  },
  FR: {
    // Splash Section
    'splash.title': 'Tupi',
    'nav.vision': 'Qu\'est-ce que c\'est ?',
    'nav.concept': 'Concept',
    'nav.app': 'App',
    'nav.roadmap': 'Feuille de route',
    'nav.contact': 'Contact',
    
    // Vision Section
    'vision.title': 'Une nouvelle voie à suivre',
    'vision.p1': 'La confiance en l\'écologie a été brisée. Des systèmes complexes, des données accablantes et des messages culpabilisants ont laissé les gens se sentir impuissants.',
    'vision.p2': 'Tupi restaure cette confiance grâce à de petites actions gamifiées qui créent un véritable impact.',
    'vision.quote': '"Aucun reproche. Aucune culpabilité. Juste du progrès, de la communauté et un changement significatif."',
    
    // Concept Section
    'concept.title': 'Duolingo pour la Planète',
    'concept.feature1.title': 'Défis Gamifiés',
    'concept.feature1.desc': 'Économisez du CO₂ quotidiennement grâce à des quêtes amusantes.',
    'concept.feature2.title': 'Suivez l\'Impact',
    'concept.feature2.desc': 'Surveillez votre empreinte carbone et voyez de vrais progrès environnementaux.',
    'concept.feature3.title': 'Gagnez des Récompenses',
    'concept.feature3.desc': 'Terminez des quêtes, collectez des points et débloquez des badges significatifs.',
    'concept.feature4.title': 'Rejoignez la Communauté',
    'concept.feature4.desc': 'Défiez et connectez-vous avec d\'autres sur le même chemin vers la durabilité.',
    
    // App Preview Section
    'app.title': 'Une application simple et puissante',
    
    // Roadmap Section
    'roadmap.title': 'Notre Parcours',
    'roadmap.q4.title': 'Lancement Bêta',
    'roadmap.q4.desc': 'Recueillir les commentaires de 5 000 premiers utilisateurs',
    'roadmap.q1.title': 'Croissance Communautaire',
    'roadmap.q1.desc': 'Construire notre communauté durable et établir des partenariats clés',
    'roadmap.q2.title': 'Module B2B',
    'roadmap.q2.desc': 'Lancer la plateforme de durabilité d\'entreprise pour les entreprises',
    'roadmap.q3.title': 'Analyses d\'Impact',
    'roadmap.q3.desc': 'Suivi et rapports carbone avancés pour tous les utilisateurs et entreprises',
    
    // Contact Section
    'contact.title': 'Contactez-nous',
    'contact.desc': 'Nous aimerions avoir de vos nouvelles. Que ce soit des commentaires, des questions ou juste un bonjour — nous sommes là. Contactez-nous à tout moment !',
    'contact.name': 'Nom',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Envoyer le message',
    'contact.sending': 'Envoi en cours...',
    'contact.thanks': 'Merci !',
    'contact.thanks.desc': 'Votre message a été envoyé. Nous vous répondrons bientôt !',
    'contact.another': 'Envoyer un autre message',
    
    // Legal
    'legal.text': '© 2025 Tupi. Tous droits réservés. | Politique de confidentialité | Conditions d\'utilisation | Contact'
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState('EN');

  const t = (key: string): string => {
    return translations[language as keyof typeof translations]?.[key as keyof typeof translations.EN] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const { currentSection } = useScrollContext();
  const [isOpen, setIsOpen] = useState(false);
  
  // Section 0 is splash screen (green), all others are beige
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
                    (e.target as HTMLElement).style.color = isOnSplash ? 'white' : '#266659';
                  }
                }}
                onMouseLeave={(e) => {
                  if (language !== lang.code) {
                    (e.target as HTMLElement).style.color = '#266659';
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