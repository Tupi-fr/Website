import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Tupi – Ecology made simple",
    template: "%s | Tupi"
  },
  description: "Transform your environmental impact with Tupi - the gamified sustainability app. Track your carbon footprint, complete eco-challenges, and join a community making real climate change. Duolingo for the planet.",
  keywords: [
    "sustainability app", "carbon footprint tracker", "eco-friendly", "climate action", 
    "environmental gamification", "green living", "carbon offset", "eco challenges",
    "sustainable lifestyle", "climate change app", "environmental impact", "green technology"
  ],
  authors: [{ name: "Tupi Team", url: "https://tupi.app" }],
  creator: "Tupi",
  publisher: "Tupi",
  applicationName: "Tupi",
  category: "Environmental",
  classification: "Environmental Sustainability App",
  referrer: "origin-when-cross-origin",
  colorScheme: "light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#75A874" },
    { media: "(prefers-color-scheme: dark)", color: "#266659" }
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: "google-site-verification-code", // Replace with actual verification code
    yandex: "yandex-verification-code", // Replace with actual verification code
    yahoo: "yahoo-site-verification-code", // Replace with actual verification code
  },
  alternates: {
    canonical: "https://tupi.app",
    languages: {
      "en-US": "https://tupi.app/en",
      "fr-FR": "https://tupi.app/fr",
    },
  },
  openGraph: {
    title: "Tupi – Ecology made simple | Sustainable Living App",
    description: "Join thousands making real environmental impact. Track your carbon footprint, complete daily eco-challenges, and build sustainable habits with our gamified approach to climate action.",
    url: "https://tupi.app",
    siteName: "Tupi",
    type: "website",
    locale: "en_US",
    alternateLocale: ["fr_FR"],
    images: [
      {
        url: "https://tupi.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tupi - Gamified sustainability app for climate action",
        type: "image/png",
      },
      {
        url: "https://tupi.app/og-image-square.png",
        width: 1200,
        height: 1200,
        alt: "Tupi app logo - Sustainable living made simple",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@TupiApp", // Replace with actual Twitter handle
    creator: "@TupiApp", // Replace with actual Twitter handle
    title: "Tupi – Ecology made simple | Sustainable Living App",
    description: "Transform your environmental impact with gamified eco-challenges. Track carbon footprint, earn rewards, and join the sustainability movement. 🌱",
    images: ["https://tupi.app/twitter-image.png"],
  },
  appleWebApp: {
    capable: true,
    title: "Tupi",
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: false,
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Calistoga&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Tupi",
              description: "Gamified sustainability app for tracking carbon footprint and building eco-friendly habits",
              url: "https://tupi.app",
              applicationCategory: "LifestyleApplication",
              operatingSystem: ["iOS", "Android", "Web"],
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD"
              },
              creator: {
                "@type": "Organization",
                name: "Tupi",
                url: "https://tupi.app"
              },
              featureList: [
                "Carbon footprint tracking",
                "Gamified eco-challenges",
                "Community engagement",
                "Impact measurement",
                "Sustainable habit building"
              ],
              screenshot: "https://tupi.app/app-screenshot.png"
            })
          }}
        />
      </head>
      <body className="antialiased" style={{ margin: 0, padding: 0, height: '100vh', overflow: 'hidden' }}>
        {children}
      </body>
    </html>
  );
}
