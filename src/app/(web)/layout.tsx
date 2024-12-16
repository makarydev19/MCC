import type { Metadata } from 'next';
import { Roboto, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { Toaster } from '@/components/ui/toaster';
import AOSProvider from '@/components/Providers/AOSProvider';
import ThemeProvider from '@/components/Providers/theme-provider';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  style: ['italic', 'normal'],
  variable: '--font-roboto',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Modern Construction Company',
  description: 'WE BUILD YOUR DREAMS',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <head>
        <link rel="shortcut icon" href="/MCC-LOGO.png" type="image/png" />
      </head>
      <body className={roboto.className}>
        <ThemeProvider>
          <AOSProvider>
            <main className="font-normal">
              <Header />
              {children}
              <Footer />
            </main>
            <Toaster />
          </AOSProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
