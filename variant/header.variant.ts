import { NavbarType } from '@/types/header.type';

export const navItems: NavbarType = {
  items: [
    { label: 'Home', slug: '/' },
    { label: 'About Us', slug: 'aboutus' },
    { label: 'How It Works', slug: 'howitworks' },
    { label: 'Testimonials', slug: '#' },
    { label: 'FAQs', slug: '#' },
    { label: 'Raise a Ticket', slug: '#' },
  ],
  logo: '/header/logo.png',
};
