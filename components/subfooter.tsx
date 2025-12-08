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
    <section className="bg-gray-200 py-5 space-y-5 text-black">
      <div className="w-[95%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pl-5">
        {/* Brand */}
        <div>
          <Image
            src={navItems.logo}
            alt="logo image"
            width={60}
            height={60}
            className="w-auto h-auto"
          />

          <Typography
            element="h1"
            text="Resto Care"
            className="text-xl font-semibold mt-3 text-black"
          />

          <Typography
            element="p"
            text="Dedicated to providing professional staff services that keep your restaurant running smoothly."
            className="mt-2 text-sm text-black leading-relaxed"
          />
        </div>

        {/* Office Address */}
        <div>
          <Typography
            element="h2"
            text="Office Address"
            className="text-lg font-semibold text-black mb-3"
          />

          <div className="flex items-start gap-3 mb-3">
            <MapPinned size={30} />
            <Typography
              element="p"
              text="212, Pearls Best Height - 1 Netaji Subhash Place, Pitampura, Delhi-110034"
              className="text-sm"
            />
          </div>

          <div className="flex items-start gap-3 mb-3">
            <MailOpen size={15} />
            <Typography element="p" text="restocare.socials@gmail.com" className="text-sm" />
          </div>

          <div className="flex items-start gap-3">
            <PhoneCall size={15} />
            <Typography element="p" text="+91 9899300646" className="text-sm" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <Typography
            element="h2"
            text="Quick Links"
            className="text-lg font-semibold text-black mb-3"
          />

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
          <Typography
            element="h2"
            text="Follow Us"
            className="text-lg font-semibold text-black mb-3"
          />

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
                <Icon size={15} />
                <Typography element="p" text={label} className="text-sm" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-400 flex justify-between items-center pt-4 w-[95%] mx-auto flex-col md:flex-row gap-3">
        <Typography
          element="p"
          text="© 2025 Resto Care. All rights reserved."
          className="text-center text-sm text-black"
        />

        <div className="text-center text-sm text-black flex flex-col md:flex-row gap-3">
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
