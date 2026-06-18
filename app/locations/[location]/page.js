'use client';
import { useParams, notFound } from 'next/navigation';
import { LOCATIONS, VILLAS, waLink } from '@/lib/site-data';
import VillaCard from '@/components/site/VillaCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MessageCircle, ArrowRight } from 'lucide-react';

export default function LocationPage() {
  const { location } = useParams();
  const loc = LOCATIONS.find(l => l.slug === location);
  if (!loc) return notFound();
  const villas = VILLAS.filter(v => v.location.toLowerCase() === loc.name.toLowerCase());
  return (
    <>
      <section className="relative h-[70vh] min-h-[480px] overflow-hidden">
        <img src={loc.hero} alt={loc.name} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative h-full container mx-auto max-w-7xl px-5 md:px-8 flex items-end pb-16 text-white">
          <div className="max-w-3xl">
            <div className="gold-divider">Destination</div>
            <h1 className="font-serif text-5xl md:text-7xl mt-4 leading-[1.05]">Villas in {loc.name}</h1>
            <p className="text-gold mt-2 tracking-widest text-sm uppercase">{loc.tagline}</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-5xl px-5 md:px-8">
          <p className="text-lg text-muted-foreground leading-relaxed">{loc.description}</p>
          <div className="mt-10">
            <h3 className="font-serif text-3xl text-forest mb-4">Must-visit attractions</h3>
            <div className="flex flex-wrap gap-2">{loc.attractions.map(a => (<span key={a} className="px-4 py-2 rounded-full bg-beige-deep text-forest text-sm border border-border">{a}</span>))}</div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-beige-deep">
        <div className="container mx-auto max-w-7xl px-5 md:px-8">
          <div className="text-center mb-12"><div className="gold-divider">Stay With Us</div><h2 className="font-serif text-4xl md:text-5xl text-forest mt-4">Our villas in {loc.name}</h2></div>
          {villas.length === 0 ? (
            <div className="text-center text-muted-foreground py-12">More villas in {loc.name} launching soon. <a href={waLink()} target="_blank" rel="noopener noreferrer" className="text-gold underline">Enquire about availability</a>.</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">{villas.map(v => <VillaCard key={v.slug} villa={v} />)}</div>
          )}
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-5 md:px-8">
          <div className="text-center mb-10"><div className="gold-divider">Explore Other Destinations</div></div>
          <div className="grid md:grid-cols-3 gap-6">
            {LOCATIONS.filter(l => l.slug !== loc.slug).map(l => (
              <Link key={l.slug} href={`/locations/${l.slug}`} className="group relative aspect-[3/4] overflow-hidden rounded-md block">
                <img src={l.hero} alt={l.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-7 text-white"><div className="text-gold text-xs tracking-[0.3em] uppercase mb-1">{l.tagline}</div><h3 className="font-serif text-3xl">{l.name}</h3></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-forest text-white text-center">
        <div className="container mx-auto max-w-2xl px-5">
          <div className="gold-divider">Need help choosing?</div>
          <h2 className="font-serif text-4xl md:text-5xl mt-4">Our concierge plans your perfect {loc.name} stay.</h2>
          <div className="mt-7"><a href={waLink(`Hi! Please suggest a villa in ${loc.name}.`)} target="_blank" rel="noopener noreferrer"><Button className="bg-[#25D366] hover:bg-[#1ebe57] text-white rounded-full px-7 py-6"><MessageCircle className="mr-2 w-4 h-4" />Chat on WhatsApp</Button></a></div>
        </div>
      </section>
    </>
  );
}
