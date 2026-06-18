import { OFFERS, waLink } from '@/lib/site-data';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Sparkles } from 'lucide-react';

export const metadata = { title: "Offers & Packages — Natures Sweet Homes", description: 'Seasonal offers, weekend packages, long stay discounts and group booking deals on luxury villas.' };

export default function Offers() {
  return (
    <>
      <section className="relative h-[55vh] min-h-[380px] overflow-hidden">
        <img src="/images/pages/offers/offers.webp" alt="Special Offers" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative h-full container mx-auto max-w-7xl px-5 md:px-8 flex items-end pb-14 text-white">
          <div><div className="gold-divider">Limited Time</div><h1 className="font-serif text-5xl md:text-7xl mt-4">Offers & Packages</h1></div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {OFFERS.map(o => (
              <div key={o.title} className="luxury-card p-7 relative overflow-hidden">
                <div className="absolute -top-3 -right-3 w-24 h-24 rounded-full bg-gold/10" />
                <Badge className="bg-forest text-gold border-none uppercase tracking-widest text-[10px]">{o.tag}</Badge>
                <h3 className="font-serif text-2xl text-forest mt-4">{o.title}</h3>
                <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{o.desc}</p>
                <div className="mt-5 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gold font-medium"><Sparkles size={16} />{o.discount}</div>
                  <a href={waLink(`Hi! I'd like to redeem the offer: ${o.title}.`)} target="_blank" rel="noopener noreferrer"><Button size="sm" className="bg-[#25D366] hover:bg-[#1ebe57] text-white rounded-full"><MessageCircle size={14} className="mr-1" />Claim</Button></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
