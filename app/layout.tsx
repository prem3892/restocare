import type { Metadata } from 'next';
import './globals.css';
import { Poppins } from 'next/font/google';
import Navbar from '@/components/header';
import Subfooter from '@/components/subfooter';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'RestroCare',
  description: 'App',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" role="main">
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Subfooter />
      </body>
    </html>
  );
}
