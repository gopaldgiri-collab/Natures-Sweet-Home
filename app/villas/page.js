'use client';
import { useState, useMemo } from 'react';
import VillaCard from '@/components/site/VillaCard';
import { VILLAS, LOCATION_FILTERS, CATEGORIES } from '@/lib/site-data';
import { Button } from '@/components/ui/button';

export default function VillasPage() {
  const [loc, setLoc] = useState('All');
  const [cat, setCat] = useState('All');
  const filtered = useMemo(() => VILLAS.filter(v => (loc==='All'||v.location===loc) && (cat==='All'||v.category===cat)), [loc, cat]);
  return (
    <>
      <section className="relative h-[55vh] min-h-[380px] overflow-hidden">
        <img src="/images/hero/hero8.webp" alt="Our Villas" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative h-full container mx-auto max-w-7xl px-5 md:px-8 flex items-end pb-14 text-white">
          <div>
            <div className="gold-divider">The Collection</div>
            <h1 className="font-serif text-5xl md:text-7xl mt-4 leading-[1.05]">Our Villas</h1>
            <p className="mt-3 text-white/85 max-w-2xl">Boutique private villas across Panchgani, Mahabaleshwar and Lonavala — each curated for memorable stays.</p>
          </div>
        </div>
      </section>
      <section className="py-14">
        <div className="container mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between mb-10">
            <div>
              <div className="text-xs tracking-widest uppercase text-muted-foreground mb-2">Filter by location</div>
              <div className="flex flex-wrap gap-2">
                {['All', ...LOCATION_FILTERS].map(l => (
                  <Button key={l} onClick={()=>setLoc(l)} variant={loc===l ? 'default':'outline'} className={`rounded-full ${loc===l ? 'bg-forest text-white':'border-forest/30 text-forest hover:bg-forest hover:text-white'}`}>{l}</Button>
                ))}
              </div>
            </div>
            <div>
              <div className="text-xs tracking-widest uppercase text-muted-foreground mb-2">Filter by category</div>
              <div className="flex flex-wrap gap-2">
                {['All', ...CATEGORIES].map(c => (
                  <Button key={c} onClick={()=>setCat(c)} variant={cat===c ? 'default':'outline'} className={`rounded-full ${cat===c ? 'bg-gold text-forest hover:bg-gold/90':'border-gold/40 text-gold hover:bg-gold hover:text-forest'}`}>{c}</Button>
                ))}
              </div>
            </div>
          </div>
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground">No villas match those filters. <button className="text-gold underline" onClick={()=>{setLoc('All'); setCat('All');}}>Reset filters</button></div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">{filtered.map(v => <VillaCard key={v.slug} villa={v} />)}</div>
          )}
        </div>
      </section>
    </>
  );
}
