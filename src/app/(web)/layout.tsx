import type { Metadata } from 'next';
import { Archivo, Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import { Footer, Header } from '@/layout';
import {
  ThemeProvider,
  AOSProvider,
  ViewportProvider,
  MotionProvider,
} from '@/Providers';
import { metadataConfig } from '@/libs/metadata'; // ✅ Import metadata
import Script from 'next/script';
import '@/styles/globals.css';

// Import Swiper styles
import 'swiper/css';

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Modern Construction Company',
  url: 'https://mcc-egy.com',
  logo: 'https://mcc-egy.com/MCC-LOGO.png',
  description: 'We build your dreams with modern construction solutions.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Your Street Address',
    addressLocality: 'Your City',
    addressRegion: 'Your Region',
    postalCode: 'Your Postal Code',
    addressCountry: 'Your Country',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+123456789',
    contactType: 'Customer Service',
  },
};

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800', '900'],
  variable: '--font-archivo',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = metadataConfig.home;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${inter.variable} ${archivo.variable}`}
    >
      <head>
        <link rel="shortcut icon" href="/MCC-LOGO.png" type="image/png" />
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider>
          <AOSProvider>
            <ViewportProvider>
              <MotionProvider>
                <main className="relative overflow-x-clip">
                  <Header />
                  {children}
                  <Footer />
                </main>
                <Toaster />
              </MotionProvider>
            </ViewportProvider>
          </AOSProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
