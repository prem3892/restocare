import { NavbarType } from '@/types/header.type';

export const navItems: NavbarType = {
  items: [
    { label: 'Home', slug: '/' },
    { label: 'About Us', slug: '/aboutus' },
    { label: 'How It Works', slug: '/howitworks' },
    { label: 'Contact US', slug: '/contact' },
    { label: 'FAQs', slug: '/faq' },
    { label: 'Raise a Ticket', slug: '#' },
  ],
  logo: '/header/logo.png',
};
