import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tupi – Ecology made simple",
  description: "Gamified ecological actions to restore trust, one drop at a time. Duolingo for the planet.",
  keywords: ["ecology", "sustainability", "gamification", "carbon footprint", "environmental", "climate"],
  authors: [{ name: "Mathis Laurent" }],
  creator: "Mathis Laurent",
  openGraph: {
    title: "Tupi – Ecology made simple",
    description: "Gamified ecological actions to restore trust, one drop at a time.",
    url: "https://tupi.app",
    siteName: "Tupi",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tupi - Ecology made simple",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tupi – Ecology made simple",
    description: "Gamified ecological actions to restore trust, one drop at a time.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased" style={{ margin: 0, padding: 0, height: '100vh', overflow: 'hidden' }}>
        {children}
      </body>
    </html>
  );
}
