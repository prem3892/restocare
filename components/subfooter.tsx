import { Typography } from '@/typography/typography';
import { navItems } from '@/variant/header.variant';
import {
  Instagram,
  Linkedin,
  MailOpen,
  MapPinned,
  PhoneCall,
  Twitter,
  Facebook,
} from 'lucide-react';
import Image from 'next/image';

function Subfooter() {
  return (
    <section className="bg-gray-200 py-10 text-black">
      {/* Main Grid */}
      <div className="w-[95%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Block */}
        <div className="space-y-8">
          {/* Logo + About */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Brand */}
            <div className="space-y-3">
              <Image
                src={navItems.logo}
                alt="logo image"
                width={60}
                height={60}
                className="w-[60px] h-[60px]"
              />

              <Typography element="h1" text="Resto Care" className="text-xl font-semibold" />

              <Typography
                element="p"
                text="Dedicated to providing professional staff services that keep your restaurant running smoothly."
                className="text-sm leading-relaxed"
              />
            </div>

            {/* Office Address */}
            <div className="space-y-4">
              <Typography element="h2" text="Office Address" className="text-lg font-semibold" />

              <div className="flex items-start gap-3">
                <MapPinned size={24} className="text-red-500" />
                <Typography
                  element="p"
                  text="212, Pearls Best Height - 1 Netaji Subhash Place, Pitampura, Delhi-110034"
                  className="text-sm"
                />
              </div>

              <div className="flex items-center gap-3">
                <MailOpen size={18} />
                <Typography element="p" text="restocare.socials@gmail.com" className="text-sm" />
              </div>

              <div className="flex items-center gap-3">
                <PhoneCall size={18} />
                <Typography element="p" text="+91 9899300646" className="text-sm" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Block */}
        <div className="grid grid-cols-2 gap-10">
          {/* Quick Links */}
          <div>
            <Typography element="h2" text="Quick Links" className="text-lg font-semibold mb-4" />

            <div className="space-y-2">
              {navItems.items.map((item, index) => (
                <Typography
                  key={index}
                  element="p"
                  text={item.label}
                  className="cursor-pointer text-sm hover:text-red-500 transition-colors"
                />
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <Typography element="h2" text="Follow Us" className="text-lg font-semibold mb-4" />

            <div className="flex flex-col gap-3 text-sm">
              {[
                { icon: Facebook, label: 'Facebook' },
                { icon: Instagram, label: 'Instagram' },
                { icon: Linkedin, label: 'LinkedIn' },
                { icon: Twitter, label: 'Twitter' },
              ].map(({ icon: Icon, label }, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 hover:text-red-500 transition-colors cursor-pointer"
                >
                  <Icon size={16} />
                  <Typography element="p" text={label} className="text-sm" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-[95%] mx-auto border-t border-gray-400 flex flex-col md:flex-row justify-between items-center pt-4 mt-6 gap-4">
        <Typography
          element="p"
          text="© 2025 Resto Care. All rights reserved."
          className="text-sm"
        />

        <div className="flex flex-wrap justify-center gap-4 text-sm">
          {[
            'Privacy Policy',
            'Cancellation & Refund Policy',
            'Terms & Conditions',
            'Modifications to Terms',
            'Guidelines',
          ].map((item, i) => (
            <Typography
              key={i}
              element="p"
              text={item}
              className="cursor-pointer hover:text-red-500 transition-colors"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Subfooter;
