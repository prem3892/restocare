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
      {/* <script src="http://localhost:8888/widgets/694bca2bac67c6e0b457b9c9/script.js"></script> */}
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Subfooter />
      </body>
    </html>
  );
}
