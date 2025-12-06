'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MenuIcon, X } from 'lucide-react';
import { navItems } from '@/variant/header.variant';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // When user scrolls down 20px, make it sticky
      if (window.scrollY > 20) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // CLEANUP – remove event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`w-full bg-white  ${
        isSticky ? 'fixed top-0 left-0 w-full shadow-lg bg-white z-50' : 'relative'
      }`}
    >
      <div className="max-w-7xl flex mx-auto px-8 justify-between items-center h-16">
        <div className="img-container shrink-0 w-12">
          <Image src={navItems.logo} alt="logo image" width={100} height={100} />
        </div>

        <div className={`nav-container hidden md:flex items-center`}>
          <ul className="flex gap-4 md:gap-6 lg:gap-8 md:text-base text-sm font-medium text-black">
            {navItems.items.map((item, idx) => (
              <li className="cursor-pointer" key={idx}>
                <Link href={item.slug}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <button
          className="nav-btn right-1/10 flex md:hidden items-center cursor-pointer absolute"
          onClick={() => {
            toggleMobileMenu();
          }}
        >
          {isMenuOpen ? (
            <X className="text-black"></X>
          ) : (
            <MenuIcon className="text-black"></MenuIcon>
          )}
        </button>
      </div>

      <div
        className={`md:hidden ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5 pointer-events-none'} absolute top-16 left-0 w-full bg-white shadow-lg px-4 pb-4 nav-items items-center transition-all duration-300 z-50`}
      >
        <ul className="flex flex-col text-base font-medium text-black gap-2 pt-3">
          {navItems.items.map((item, idx) => (
            <li className="flex flex-col justify-between cursor-pointer" key={idx}>
              <Link href={item.slug} className="py-1">
                {item.label}
              </Link>
              <hr className="text-gray-500 py-1" />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
