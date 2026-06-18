'use client';
import { useState } from 'react';
import { notFound } from 'next/navigation';
import { VILLAS, REVIEWS, CONTACT, waLink } from '@/lib/site-data';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import InquiryForm from '@/components/site/InquiryForm';
import { Users, BedDouble, Bath, Waves, TreePine, MapPin, Phone, MessageCircle, Star, ChevronLeft, ChevronRight, X } from 'lucide-react';

export default function VillaDetailClient({ slug }) {
  const villa = VILLAS.find(v => v.slug === slug);
  const [idx, setIdx] = useState(0);
  const [lightbox, setLightbox] = useState(null);
  if (!villa) return notFound();
  const reviews = REVIEWS.filter(r => r.villa === villa.name).concat(REVIEWS).slice(0,3);
  const prev = () => setIdx((idx - 1 + villa.gallery.length) % villa.gallery.length);
  const next = () => setIdx((idx + 1) % villa.gallery.length);
  return (
    <>
      <section className="pt-28 pb-10 bg-beige">
        <div className="container mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground mb-4">
            <a href="/villas" className="hover:text-gold">Villas</a> <span>/</span> <span className="text-forest">{villa.location}</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <Badge className="bg-gold text-forest border-none uppercase tracking-widest text-[10px]">{villa.category}</Badge>
              <h1 className="font-serif text-4xl md:text-6xl text-forest mt-3">{villa.name}</h1>
              {villa.tagline && <div className="font-serif text-lg md:text-xl text-gold mt-1 italic">{villa.tagline}</div>}
              <div className="flex items-center gap-3 mt-3 text-sm text-muted-foreground"><MapPin size={14} className="text-gold" /> {villa.area || villa.location}, Maharashtra <span className="mx-2">•</span> <Star size={14} className="text-gold fill-gold" /> 4.9 (24 reviews)</div>
            </div>
            <div className="text-right">
              <div className="text-[10px] tracking-widest uppercase text-muted-foreground">Tariff</div>
              <div className="font-serif text-2xl md:text-3xl text-forest">Enquire for Best Rate</div>
              <a href={waLink(`Hi! Please share the best rate for ${villa.name}.`)} target="_blank" rel="noopener noreferrer" className="text-xs text-gold tracking-widest uppercase border-b border-gold pb-0.5 inline-block mt-1">Get a Quote</a>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-10">
        <div className="container mx-auto max-w-7xl px-5 md:px-8">
          <div className="relative aspect-[16/9] md:aspect-[16/7] rounded-md overflow-hidden">
            <img src={villa.gallery[idx]} alt={villa.name} className="w-full h-full object-cover" />
            <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 hover:bg-white flex items-center justify-center text-forest"><ChevronLeft /></button>
            <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 hover:bg-white flex items-center justify-center text-forest"><ChevronRight /></button>
            <div className="absolute bottom-4 right-4 bg-forest/80 text-white text-xs px-3 py-1 rounded-full">{idx+1} / {villa.gallery.length}</div>
          </div>
          <div className="grid grid-cols-5 gap-3 mt-3">
            {villa.gallery.map((g,i)=>(
              <button key={i} onClick={()=>setIdx(i)} onDoubleClick={()=>setLightbox(g)} className={`aspect-[4/3] rounded-md overflow-hidden border-2 ${i===idx ? 'border-gold' : 'border-transparent'}`}>
                <img src={g} alt="thumb" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[{i:Users,l:'Occupancy',v:`${villa.occupancy} guests`},{i:BedDouble,l:'Bedrooms',v:villa.bedrooms},{i:Bath,l:'Bathrooms',v:villa.bathrooms},{i:Waves,l:'Pool',v: villa.pool ? 'Private' : '—'}].map(s=>(
                <div key={s.l} className="luxury-card p-5 text-center"><s.i className="mx-auto text-gold mb-2" /><div className="font-serif text-2xl text-forest">{s.v}</div><div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.l}</div></div>
              ))}
            </div>
            <div>
              <h2 className="font-serif text-3xl text-forest mb-3">About this villa</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">{villa.description}</p>
            </div>
            {villa.highlights && (
              <div className="bg-beige-deep p-7 rounded-md border-l-4 border-gold">
                <div className="gold-divider mb-3">Why Guests Love {villa.name}</div>
                <p className="text-forest/85 leading-relaxed text-lg font-serif italic">{villa.highlights}</p>
              </div>
            )}
            {villa.perfectFor && villa.perfectFor.length > 0 && (
              <div>
                <h2 className="font-serif text-3xl text-forest mb-4">Perfect For</h2>
                <div className="flex flex-wrap gap-2">
                  {villa.perfectFor.map(p => (<Badge key={p} className="bg-forest text-white border-none text-sm py-1.5 px-4 hover:bg-forest/90">{p}</Badge>))}
                </div>
              </div>
            )}
            <div>
              <h2 className="font-serif text-3xl text-forest mb-4">Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {villa.amenities.map(a => (<div key={a} className="flex items-center gap-2 text-sm text-forest/80"><span className="w-1.5 h-1.5 rounded-full bg-gold" /> {a}</div>))}
              </div>
            </div>
            <div>
              <h2 className="font-serif text-3xl text-forest mb-4">Nearby Attractions</h2>
              <div className="flex flex-wrap gap-2">
                {villa.nearby.map(n => (<Badge key={n} variant="outline" className="border-gold/40 text-forest bg-white">{n}</Badge>))}
              </div>
            </div>
            <div>
              <h2 className="font-serif text-3xl text-forest mb-4">Location</h2>
              <div className="aspect-[16/9] rounded-md overflow-hidden border border-border">
                <iframe title="map" src={`https://www.google.com/maps?q=${villa.mapsQuery}&output=embed`} className="w-full h-full" />
              </div>
            </div>
            <div>
              <h2 className="font-serif text-3xl text-forest mb-4">Guest Reviews</h2>
              <div className="space-y-4">
                {reviews.map(r => (
                  <div key={r.name+r.text} className="bg-white border border-border rounded-md p-6">
                    <div className="flex items-center justify-between"><div className="font-serif text-xl text-forest">{r.name}</div><div className="flex gap-0.5">{Array.from({length:r.rating}).map((_,i)=>(<Star key={i} size={14} className="text-gold fill-gold" />))}</div></div>
                    <div className="text-xs text-muted-foreground">{r.location}</div>
                    <p className="text-muted-foreground mt-2 italic">“{r.text}”</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <aside className="lg:col-span-1">
            <div className="sticky top-28 bg-white rounded-md p-6 border border-border shadow-sm">
              <div className="text-[10px] uppercase tracking-widest text-gold">Book Direct • Best Rates</div>
              <h3 className="font-serif text-2xl text-forest mt-1">Enquire about {villa.name}</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-4">Reply within minutes on WhatsApp.</p>
              <div className="grid grid-cols-2 gap-2 mb-4">
                <a href={waLink(`Hi! I'd like to book ${villa.name} in ${villa.location}.`)} target="_blank" rel="noopener noreferrer"><Button className="w-full bg-[#25D366] hover:bg-[#1ebe57] text-white rounded-full"><MessageCircle size={16} className="mr-1" />WhatsApp</Button></a>
                <a href={`tel:${CONTACT.phone}`}><Button variant="outline" className="w-full border-forest text-forest hover:bg-forest hover:text-white rounded-full"><Phone size={16} className="mr-1" />Call</Button></a>
              </div>
              <InquiryForm villaName={villa.name} />
            </div>
          </aside>
        </div>
      </section>

      {lightbox && (
        <div onClick={()=>setLightbox(null)} className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-6">
          <button className="absolute top-5 right-5 text-white" onClick={()=>setLightbox(null)}><X /></button>
          <img src={lightbox} alt="" className="max-h-full max-w-full object-contain" />
        </div>
      )}
    </>
  );
}
