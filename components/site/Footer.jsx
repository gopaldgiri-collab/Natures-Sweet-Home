import Link from 'next/link';
import Image from 'next/image';
import { CONTACT } from '@/lib/site-data';
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, Heart } from 'lucide-react';
import { FaPinterestP, FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="bg-forest text-white/85 pt-20 pb-6">
      <div className="container mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 mb-4">
        <div className="relative w-36 h-36 bg-white rounded-3xl p-3 shadow-xl flex-shrink-0">
<Image
src="https://www.naturesweethomes.com/circlelogo2.png"
alt="Natures Sweet Homes"
fill
className="object-contain p-3"
sizes="144px"
/>
</div> 

              <div>
                <div className="font-serif text-xl text-white">Natures Sweet Homes</div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-gold">Your Comfort, Our Priority</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/70">Professionally managed luxury villas and holiday homes across Panchgani, Mahabaleshwar and Lonavala — for memorable stays in the Sahyadris.</p>
            <div className="flex items-center gap-3 mt-6 flex-wrap">
  <a
    href={CONTACT.socials.instagram}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full border border-white/20 hover:border-brand hover:text-brand flex items-center justify-center transition"
  >
    <Instagram size={18} />
  </a>

  <a
    href={CONTACT.socials.facebook}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full border border-white/20 hover:border-brand hover:text-brand flex items-center justify-center transition"
  >
    <Facebook size={18} />
  </a>

  <a
    href={CONTACT.socials.youtube}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full border border-white/20 hover:border-brand hover:text-brand flex items-center justify-center transition"
  >
    <Youtube size={18} />
  </a>

  <a
    href={CONTACT.socials.twitter}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full border border-white/20 hover:border-brand hover:text-brand flex items-center justify-center transition"
  >
    <FaXTwitter size={16} />
  </a>

  <a
    href={CONTACT.socials.pinterest}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full border border-white/20 hover:border-brand hover:text-brand flex items-center justify-center transition"
  >
    <FaPinterestP size={16} />
  </a>
</div>
          </div>
          <div>
            <h4 className="font-serif text-xl text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-gold">About Us</Link></li>
              <li><Link href="/villas" className="hover:text-gold">Our Villas</Link></li>
              <li><Link href="/experiences" className="hover:text-gold">Experiences</Link></li>
              <li><Link href="/offers" className="hover:text-gold">Offers & Packages</Link></li>
              <li><Link href="/gallery" className="hover:text-gold">Gallery</Link></li>
              <li><Link href="/reviews" className="hover:text-gold">Guest Reviews</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-xl text-white mb-4">Locations</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/locations/panchgani" className="hover:text-gold">Villas in Panchgani</Link></li>
              <li><Link href="/locations/mahabaleshwar" className="hover:text-gold">Villas in Mahabaleshwar</Link></li>
              <li><Link href="/locations/lonavala" className="hover:text-gold">Villas in Lonavala</Link></li>
            </ul>
            <h4 className="font-serif text-xl text-white mt-6 mb-3">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="hover:text-gold">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-gold">Terms & Conditions</Link></li>
              <li><Link href="/refund" className="hover:text-gold">Refund Policy</Link></li>
              <li><Link href="/support" className="hover:text-gold">Support</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-xl text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2"><MapPin size={16} className="text-gold flex-shrink-0 mt-1" /><span>{CONTACT.address}</span></li>
              <li className="flex gap-2 items-center"><Phone size={16} className="text-gold" /><a href={`tel:${CONTACT.phone}`} className="hover:text-gold">{CONTACT.phoneDisplay}</a></li>
              <li className="flex gap-2 items-center"><Mail size={16} className="text-gold" /><a href={`mailto:${CONTACT.email}`} className="hover:text-gold">{CONTACT.email}</a></li>
            </ul>
          </div>
        </div>
<div className="pt-6 text-xs text-white/60">
  <div className="grid md:grid-cols-3 items-center gap-4">

    <div className="text-left">
      © {new Date().getFullYear()} Natures Sweet Homes.
      All rights reserved.
    </div>

<div className="flex items-center justify-center gap-2 whitespace-nowrap">
      <span>Designed & Developed by</span>
      <Heart size={12} className="text-gold fill-gold" />
      <span>by</span>
         <a
    href="https://www.peopleschoice.tech/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gold font-medium hover:text-white transition-colors"
  >
    People&apos;s Choice Tech
  </a>
</div>

    <div />
  </div>
</div>

</div>
</footer>
);
}


