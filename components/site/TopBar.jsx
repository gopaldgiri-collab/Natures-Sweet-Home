import {
  Phone,
  Mail,
  Instagram,
  Facebook,
  Youtube
} from 'lucide-react';

import {
  FaXTwitter,
  FaPinterestP
} from 'react-icons/fa6';

import { CONTACT } from '@/lib/site-data';

export default function TopBar() {
  return (
    <div className="grad-bp text-white text-sm">
      <div className="container mx-auto max-w-7xl px-4 md:px-8 h-11 flex items-center justify-between">

        {/* Left Side */}
        <div className="flex items-center gap-5 md:gap-8 overflow-hidden">

          <a
            href={`tel:${CONTACT.phone}`}
            className="flex items-center gap-2 hover:text-yellow-200 transition"
          >
            <Phone size={14} />
            <span className="hidden sm:inline">
              {CONTACT.phoneDisplay}
            </span>
            <span className="sm:hidden">
              Call
            </span>
          </a>

          <a
            href={`mailto:${CONTACT.email}`}
            className="hidden md:flex items-center gap-2 hover:text-yellow-200 transition"
          >
            <Mail size={14} />
            {CONTACT.email}
          </a>

        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          <a
            href={CONTACT.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-200 transition"
          >
            <Instagram size={16} />
          </a>

          <a
            href={CONTACT.socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-200 transition"
          >
            <Facebook size={16} />
          </a>

          <a
            href={CONTACT.socials.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-200 transition"
          >
            <Youtube size={16} />
          </a>

          <a
            href={CONTACT.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-200 transition"
          >
            <FaXTwitter size={14} />
          </a>

          <a
            href={CONTACT.socials.pinterest}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-200 transition"
          >
            <FaPinterestP size={14} />
          </a>

        </div>

      </div>
    </div>
  );
}
