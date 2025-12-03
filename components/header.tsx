'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../app/assets/logo.png';
import { MenuIcon, X } from 'lucide-react';
import { navItems } from '@/variant/header.variant';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="w-full bg-white">
      <div className="max-w-7xl flex mx-auto px-8 justify-between items-center h-16">
        <div className="img-container shrink-0 w-12">
          <Image src={Logo} alt="logo image" />
        </div>

        <div className={`nav-container hidden md:flex items-center`}>
          <ul className="flex gap-4 md:gap-6 lg:gap-8 md:text-base text-sm font-medium text-black">
            {navItems.map((item, idx) => (
              <li className="cursor-pointer" key={idx}>
                <Link href={item.slug}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <button
          className="nav-btn flex md:hidden items-center cursor-pointer"
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
        className={`md:hidden ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5 pointer-events-none'} absolute top-16 left-0 w-full bg-white shadow-lg px-4 pb-4 nav-items items-center transition-all duration-300`}
      >
        <ul className="flex flex-col text-base font-medium text-black gap-2 pt-3">
          {navItems.map((item, idx) => (
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
