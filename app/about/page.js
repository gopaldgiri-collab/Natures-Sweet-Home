import { CONTACT } from '@/lib/site-data';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Compass, Heart, Building, Megaphone, Headset, Hammer } from 'lucide-react';

export const metadata = { title: "About Us — Natures Sweet Homes", description: 'Bridging the gap between villa owners and travelers — our story, mission and vision.' };

const SERVICES = [
  { icon: Building, t: 'Vacation Villa Management', d: 'End-to-end operations, staffing and inventory for villa owners.' },
  { icon: Megaphone, t: 'Holiday Home Marketing', d: 'Premium photography, listing optimisation and demand generation across channels.' },
  { icon: Heart, t: 'Guest Experience Management', d: 'Hotel-grade SOPs, in-villa hospitality and curated experiences.' },
  { icon: Headset, t: 'Booking Support', d: 'Single-point WhatsApp concierge for travelers, 24×7.' },
  { icon: Hammer, t: 'Property Operations Management', d: 'Maintenance, upkeep and quality audits to protect every asset.' },
  { icon: Compass, t: 'Curated Local Experiences', d: 'Trekking, dining, photographers and celebration planners on call.' },
];

const TIMELINE = [
  { y: '2022', t: 'The Idea', d: 'Founders identify the gap between independent villa owners and the modern luxury traveler.' },
  { y: '2023', t: 'First Boutique Villas Onboarded', d: 'Launched managed villas in Panchgani with hotel-grade SOPs and a WhatsApp-first model.' },
  { y: '2024', t: 'Mahabaleshwar & Lonavala', d: 'Expanded into two more Sahyadri destinations — same standards, three landscapes.' },
  { y: '2025', t: 'Growing the Family', d: 'Crossed 200+ stays, hundreds of 5-star reviews, and a growing portfolio of premium homes.' },
];

const VALUES = [
  { t: 'Trust', d: 'Transparent pricing, honest property descriptions, no hidden fees.' },
  { t: 'Hospitality', d: 'We host like the guest were family — finished like a five-star hotel.' },
  { t: 'Stewardship', d: 'We treat every villa as if it were our own home.' },
  { t: 'Locality', d: 'We celebrate the Sahyadris with curated, slow, soulful experiences.' },
];

export default function About() {
  return (
    <>
      <section className="relative h-[60vh] min-h-[440px] overflow-hidden">
        <img src="/images/pages/about/about.webp" alt="About Us" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative h-full container mx-auto max-w-7xl px-5 md:px-8 flex items-end pb-16 text-white">
          <div>
            <div className="gold-divider">Our Story</div>
            <h1 className="font-serif text-5xl md:text-7xl mt-4 max-w-3xl leading-[1.05]">Crafting unforgettable Sahyadri stays since day one.</h1>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto max-w-5xl px-5 md:px-8">
          <div className="gold-divider">Founder Story</div>
          <h2 className="font-serif text-4xl md:text-5xl text-forest mt-4 mb-6">Bridging the gap between villa owners and travelers.</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">Natures Sweet Homes was founded by hospitality and business professionals who noticed a recurring pattern — beautiful private villas in the Sahyadris run informally, often under-marketed, with inconsistent guest experiences. On the other hand, modern travelers were looking for boutique stays they could trust the way they trust a five-star hotel.</p>
          <p className="text-lg text-muted-foreground leading-relaxed mt-4">We bring the two together. We manage villas with hotel-grade SOPs, train and uniform property staff, photograph and market homes professionally, and operate a single-point WhatsApp concierge so every guest has one trusted relationship from inquiry to checkout.</p>
        </div>
      </section>

      <section className="py-20 bg-beige-deep">
        <div className="container mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-2 gap-10">
          <div className="bg-white p-10 rounded-md">
            <div className="gold-divider">Mission</div>
            <h3 className="font-serif text-3xl text-forest mt-4 mb-3">Help property owners maximize villa potential while delivering memorable stay experiences.</h3>
            <p className="text-muted-foreground leading-relaxed">We protect owners&apos; assets, scale their revenue and ensure every guest leaves with a story — building long-term trust on both sides.</p>
          </div>
          <div className="bg-forest text-white p-10 rounded-md">
            <div className="gold-divider">Vision</div>
            <h3 className="font-serif text-3xl text-gold mt-4 mb-3">Become Maharashtra&apos;s most trusted villa and holiday home management company.</h3>
            <p className="text-white/80 leading-relaxed">From the Sahyadris to the Konkan coast — redefining what boutique villa hospitality should feel like.</p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto max-w-7xl px-5 md:px-8">
          <div className="text-center mb-14">
            <div className="gold-divider">What We Do</div>
            <h2 className="font-serif text-4xl md:text-5xl text-forest mt-4">A full-stack villa hospitality partner.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div key={s.t} className="luxury-card p-7">
                <div className="w-12 h-12 rounded-full bg-forest text-gold flex items-center justify-center mb-4"><s.icon size={20} /></div>
                <h4 className="font-serif text-2xl text-forest">{s.t}</h4>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-beige-deep">
        <div className="container mx-auto max-w-4xl px-5 md:px-8">
          <div className="text-center mb-12">
            <div className="gold-divider">Our Journey</div>
            <h2 className="font-serif text-4xl md:text-5xl text-forest mt-4">Milestones in the making.</h2>
          </div>
          <div className="relative pl-8 border-l-2 border-gold/40 space-y-10">
            {TIMELINE.map((p) => (
              <div key={p.y} className="relative">
                <span className="absolute -left-[42px] top-1 w-4 h-4 rounded-full bg-gold border-4 border-beige-deep" />
                <div className="text-gold text-sm tracking-widest">{p.y}</div>
                <h4 className="font-serif text-2xl text-forest mt-1">{p.t}</h4>
                <p className="text-muted-foreground mt-1">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto max-w-7xl px-5 md:px-8">
          <div className="text-center mb-12"><div className="gold-divider">Values</div><h2 className="font-serif text-4xl md:text-5xl text-forest mt-4">What we stand for.</h2></div>
          <div className="grid md:grid-cols-4 gap-6">
            {VALUES.map((v) => (<div key={v.t} className="luxury-card p-7 text-center"><h4 className="font-serif text-2xl text-forest">{v.t}</h4><p className="text-sm text-muted-foreground mt-2">{v.d}</p></div>))}
          </div>
          <div className="text-center mt-12"><Link href="/contact"><Button className="bg-forest hover:bg-forest/90 text-white rounded-full px-8">Partner with us <ArrowRight size={16} className="ml-2" /></Button></Link></div>
        </div>
      </section>
    </>
  );
}
