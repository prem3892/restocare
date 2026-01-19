'use client';
import { useState, useEffect, memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MenuIcon, X } from 'lucide-react';
import { navItems } from '@/variant/header.variant';
import Getintouchform from './form/getintouchform';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);

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
    <>
      <nav
        className={`w-full bg-white  ${
          isSticky ? 'fixed top-0 left-0 w-full shadow-lg bg-white z-50' : 'relative'
        }`}
      >
        <div className="max-w-7xl flex mx-auto px-8 justify-between items-center h-16">
          <div className="img-container shrink-0 w-12">
            <Image src={navItems.logo} alt="logo image" width={100} height={100} />
          </div>

          <div className="hidden md:flex items-center gap-6">
            {navItems.items.map((item, idx) =>
              item.label === 'Raise a Ticket' ? (
                <button
                  onClick={() => setShowForm(true)}
                  key={idx}
                  className="
                  bg-[#C00404] text-white font-medium 
                  py-2 px-4 rounded-lg 
                  hover:bg-[#a00303] transition
                "
                >
                  Raise a Ticket
                </button>
              ) : (
                <Link
                  key={idx}
                  href={item.slug}
                  className="
                  text-black font-medium 
                  hover:text-[#C00404] transition
                "
                >
                  {item.label}
                </Link>
              ),
            )}
          </div>

          <button
            className="nav-btn right-1/10 flex md:hidden items-center cursor-pointer absolute"
            onClick={toggleMobileMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X className="text-black" /> : <MenuIcon className="text-black" />}
          </button>
        </div>

        <div
          className={`md:hidden ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5 pointer-events-none'} absolute top-16 left-0 w-full bg-white shadow-lg px-4 pb-4 nav-items items-center transition-all duration-300 z-50`}
        >
          <ul className="flex flex-col text-base font-medium text-black gap-2 pt-3">
            {navItems.items.map((item, idx) =>
              item.label === 'Raise a Ticket' ? (
                <button
                  onClick={() => {
                    (setShowForm(true), setIsMenuOpen(false));
                  }}
                  key={idx}
                  className="
                  bg-[#C00404] text-white py-2 rounded-lg
                  hover:bg-[#a00303] transition
                "
                >
                  Raise a Ticket
                </button>
              ) : (
                <Link
                  key={idx}
                  href={item.slug}
                  className="py-1 border-b border-gray-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ),
            )}
          </ul>
        </div>
      </nav>
      {showForm && (
        <div
          className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowForm(false);
            }
          }}
        >
          <Getintouchform setShowForm={setShowForm} />
        </div>
      )}
    </>
  );
};

export default memo(Navbar);
