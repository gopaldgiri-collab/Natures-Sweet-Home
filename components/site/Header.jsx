'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X, MapPin, ChevronDown, ChevronRight, Home, Info, BedDouble, Image as ImageIcon, Sparkles, Tag, MailOpen, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CONTACT, waLink, LOCATIONS } from '@/lib/site-data';

const NAV = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/about', label: 'About', icon: Info },
  { href: '/villas', label: 'Villas', icon: BedDouble },
  { href: '/gallery', label: 'Gallery', icon: ImageIcon },
  { href: '/experiences', label: 'Experiences', icon: Sparkles },
  { href: '/offers', label: 'Offers', icon: Tag },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [locOpen, setLocOpen] = useState(false);
  const [mobileLocOpen, setMobileLocOpen] = useState(false);
  useEffect(() => {
    const onClick = () => setLocOpen(false);
    if (locOpen) window.addEventListener('click', onClick);
    return () => window.removeEventListener('click', onClick);
  }, [locOpen]);
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'; else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header className="sticky top-0 inset-x-0 z-50 bg-white border-b border-border">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        {/* Desktop / tablet >= lg */}
        <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] items-center h-24 gap-6">
          <Link href="/" className="flex items-center gap-3 group justify-self-start">
            <div className="relative w-24 h-24 flex-shrink-0">
              <Image src="/logo.png" alt="Natures Sweet Homes" fill className="object-contain" priority sizes="64px" />
            </div>
            <div className="leading-tight whitespace-nowrap">
              <div className="font-serif text-xl text-ink">Natures Sweet Homes</div>
              <div className="text-[10px] tracking-[0.28em] uppercase grad-text font-medium">Your Comfort, Our Priority</div>
            </div>
          </Link>

          <nav className="flex items-center gap-7 justify-self-center">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} className="text-sm font-medium text-ink hover:text-brand transition-colors">{n.label}</Link>
            ))}
            <div className="relative group">
              <button className="text-sm font-medium text-ink hover:text-brand transition-colors flex items-center gap-1 py-2">
                Locations <ChevronDown size={14} className="transition group-hover:rotate-180" />
              </button>
              <div className="absolute right-0 top-full pt-2 w-60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white border border-border rounded-xl shadow-xl overflow-hidden">
                  {LOCATIONS.map((l) => (
                    <Link key={l.slug} href={`/locations/${l.slug}`} className="flex items-center gap-2 px-4 py-3 text-sm text-ink hover:bg-lavender hover:text-brand border-b border-border last:border-0">
                      <MapPin size={14} className="text-brand" /> Villas in {l.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link href="/contact" className="text-sm font-medium text-ink hover:text-brand transition-colors">Contact</Link>
          </nav>

          <div className="flex items-center gap-2 justify-self-end">
            <Link href="/contact">
              <Button variant="outline" className="border-brand text-brand hover:bg-brand hover:text-white rounded-full px-5 h-11">Contact Us</Button>
            </Link>
            <a href={waLink()} target="_blank" rel="noopener noreferrer">
              <Button className="btn-grad rounded-full px-5 h-11 border-0">Book Now</Button>
            </a>
          </div>
        </div>

        {/* Mobile < lg — Logo Left | Brand Center | Hamburger Right */}
        <div className="lg:hidden grid grid-cols-[auto_1fr_auto] items-center gap-2 h-16">
          <Link href="/" className="justify-self-start flex-shrink-0">
            <div className="relative w-16 h-16">
              <Image src="/logo.png" alt="Logo" fill className="object-contain" priority sizes="48px" />
            </div>
          </Link>
          <Link href="/" className="justify-self-center text-center px-1">
            <div className="font-serif text-base sm:text-lg leading-tight text-ink truncate">Natures Sweet Homes</div>
            <div className="text-[9px] tracking-[0.25em] uppercase grad-text truncate font-medium">Your Comfort, Our Priority</div>
          </Link>
          <button onClick={() => setOpen(true)} aria-label="Open menu" className="justify-self-end w-11 h-11 flex items-center justify-center rounded-full border border-border text-ink hover:bg-lavender transition">
            <Menu size={22} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden fixed inset-0 z-[60]">
          <div className="absolute inset-0 bg-black/55 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div className="absolute top-0 right-0 h-full w-[88%] max-w-sm bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
            <div className="flex items-center justify-between px-5 py-4 grad-bp text-white">
              <div className="flex items-center gap-3">
                <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-white/15">
                  <Image src="/logo.png" alt="logo" fill className="object-contain p-0.5" sizes="40px" />
                </div>
                <div className="leading-tight">
                  <div className="font-serif text-base">Natures Sweet Homes</div>
                  <div className="text-[9px] tracking-[0.25em] uppercase opacity-90">Your Comfort, Our Priority</div>
                </div>
              </div>
              <button className="w-9 h-9 flex items-center justify-center rounded-full bg-white/15 hover:bg-white/25" onClick={() => setOpen(false)} aria-label="Close"><X size={18} /></button>
            </div>
            <nav className="flex-1 overflow-y-auto px-2 py-4">
              <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground px-4 mb-2">Menu</div>
              <ul className="space-y-1">
                {NAV.map((n) => { const Icon = n.icon; return (
                  <li key={n.href}>
                    <Link href={n.href} onClick={() => setOpen(false)} className="flex items-center justify-between gap-3 px-4 py-3 rounded-md text-ink hover:bg-lavender transition group">
                      <span className="flex items-center gap-3">
                        <span className="w-9 h-9 rounded-full grad-bp text-white flex items-center justify-center"><Icon size={15} /></span>
                        <span className="font-medium">{n.label}</span>
                      </span>
                      <ChevronRight size={16} className="text-muted-foreground" />
                    </Link>
                  </li>
                );})}
                <li>
                  <Link href="/contact" onClick={() => setOpen(false)} className="flex items-center justify-between gap-3 px-4 py-3 rounded-md text-ink hover:bg-lavender transition">
                    <span className="flex items-center gap-3"><span className="w-9 h-9 rounded-full grad-bp text-white flex items-center justify-center"><MailOpen size={15} /></span><span className="font-medium">Contact</span></span>
                    <ChevronRight size={16} className="text-muted-foreground" />
                  </Link>
                </li>
                <li className="pt-2">
                  <button onClick={() => setMobileLocOpen(!mobileLocOpen)} className="w-full flex items-center justify-between gap-3 px-4 py-3 rounded-md text-ink hover:bg-lavender transition">
                    <span className="flex items-center gap-3"><span className="w-9 h-9 rounded-full grad-bp text-white flex items-center justify-center"><MapPin size={15} /></span><span className="font-medium">Locations</span></span>
                    <ChevronDown size={16} className={`text-muted-foreground transition ${mobileLocOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileLocOpen && (
                    <ul className="ml-12 mt-1 space-y-1">
                      {LOCATIONS.map((l) => (
                        <li key={l.slug}>
                          <Link href={`/locations/${l.slug}`} onClick={() => setOpen(false)} className="block px-4 py-2 text-sm text-ink/80 hover:text-brand rounded-md">• Villas in {l.name}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              </ul>
            </nav>
            <div className="border-t border-border bg-lavender/40 px-4 py-4 space-y-2">
              <a href={waLink()} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="block">
                <Button className="w-full btn-grad rounded-full h-11 border-0"><MessageCircle className="w-4 h-4 mr-2" /> Book on WhatsApp</Button>
              </a>
              <a href={`tel:${CONTACT.phone}`} className="block">
                <Button variant="outline" className="w-full border-brand text-brand hover:bg-brand hover:text-white rounded-full h-11"><Phone className="w-4 h-4 mr-2" /> Call {CONTACT.phoneDisplay}</Button>
              </a>
              <div className="text-center text-[10px] tracking-[0.3em] uppercase text-muted-foreground pt-1">Hand-crafted hospitality</div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
