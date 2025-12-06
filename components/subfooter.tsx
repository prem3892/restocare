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
      <div className="w-[95%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Brand */}
        <div>
          <Image
            src={navItems.logo}
            alt="logo image"
            width={60}
            height={60}
            className="w-auto h-auto"
          />

          <h1 className="text-xl font-semibold mt-3 text-black">Resto Care</h1>
          <p className="mt-2 text-sm text-black leading-relaxed">
            Dedicated to providing professional staff services that keep your restaurant running
            smoothly.
          </p>
        </div>

        {/* Office Address */}
        <div>
          <h2 className="text-lg font-semibold text-black mb-3">Office Address</h2>

          <div className="flex items-start gap-3 mb-3">
            <MapPinned size={30} />
            <p className="text-sm">
              212, Pearls Best Height - 1 Netaji Subhash Place, Pitampura, Delhi-110034
            </p>
          </div>

          <div className="flex items-start gap-3 mb-3">
            <MailOpen size={15} />
            <p className="text-sm">restocare.socials@gmail.com</p>
          </div>

          <div className="flex items-start gap-3">
            <PhoneCall size={15} />
            <p className="text-sm">+91 9899300646</p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold text-black mb-3">Quick Links</h2>
          <div className="space-y-2">
            {navItems.items.map((item, index) => (
              <p
                key={index}
                className="cursor-pointer text-sm hover:text-red-500 transition-colors"
              >
                {item.label}
              </p>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-lg font-semibold text-black mb-3">Follow Us</h2>

          <div className="flex flex-col gap-3 text-sm">
            <div className="flex items-center gap-3 hover:text-red-500 transition-colors cursor-pointer">
              <Facebook size={15} />
              <p>Facebook</p>
            </div>

            <div className="flex items-center gap-3 hover:text-red-500 transition-colors cursor-pointer">
              <Instagram size={15} />
              <p>Instagram</p>
            </div>

            <div className="flex items-center gap-3 hover:text-red-500 transition-colors cursor-pointer">
              <Linkedin size={15} />
              <p>LinkedIn</p>
            </div>

            <div className="flex items-center gap-3 hover:text-red-500 transition-colors cursor-pointer">
              <Twitter size={15} />
              <p>Twitter</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-400 flex justify-between items-center pt-4 w-[95%] mx-auto flex-col md:flex-row gap-3">
        <p className="text-center text-sm text-black">© 2025 Resto Care. All rights reserved.</p>
        <div className="text-center text-sm text-black flex flex-col md:flex-row gap-3">
          <p>Privacy Policy</p>
          <p>Cancellation & Refund Policy</p>
          <p>Terms & Conditions</p>
          <p>Modifications to Terms</p>
          <p>Guidelines</p>
        </div>
      </div>
    </section>
  );
}

export default Subfooter;
