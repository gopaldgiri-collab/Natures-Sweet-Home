import { REVIEWS, waLink } from '@/lib/site-data';
import { Star, Quote, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata = { title: "Guest Reviews — Natures Sweet Homes" };

export default function Reviews() {
  return (
    <>
      <section className="relative h-[55vh] min-h-[380px] overflow-hidden">
        <img src="/images/pages/reviews/reviews.webp" alt="Guest Reviews" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative h-full container mx-auto max-w-7xl px-5 md:px-8 flex items-end pb-14 text-white">
          <div><div className="gold-divider">Loved by Guests</div><h1 className="font-serif text-5xl md:text-7xl mt-4">Guest Reviews</h1></div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex items-center justify-center gap-5 mb-12 text-center">
            <div className="flex flex-col items-center"><div className="font-serif text-5xl text-forest">4.9</div><div className="flex gap-0.5 mt-1">{Array.from({length:5}).map((_,i)=>(<Star key={i} size={16} className="text-gold fill-gold" />))}</div><div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Average Rating</div></div>
            <div className="h-16 w-px bg-border" />
            <div className="flex flex-col items-center"><div className="font-serif text-5xl text-forest">200+</div><div className="text-xs uppercase tracking-widest text-muted-foreground mt-3">Happy Stays</div></div>
            <div className="h-16 w-px bg-border hidden md:block" />
            <div className="flex-col items-center hidden md:flex"><div className="font-serif text-5xl text-forest">98%</div><div className="text-xs uppercase tracking-widest text-muted-foreground mt-3">Rebook Rate</div></div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {REVIEWS.map(r => (
              <div key={r.name+r.text} className="luxury-card p-7 relative">
                <Quote className="text-gold/30 absolute top-5 right-5" size={36} />
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-forest text-gold flex items-center justify-center font-serif text-lg">{r.name.charAt(0)}</div>
                  <div><div className="font-serif text-lg text-forest">{r.name}</div><div className="text-xs text-muted-foreground">{r.location} • {r.villa}</div></div>
                </div>
                <div className="flex gap-0.5 mb-3">{Array.from({length:r.rating}).map((_,i)=>(<Star key={i} size={14} className="text-gold fill-gold" />))}</div>
                <p className="text-muted-foreground italic leading-relaxed">“{r.text}”</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-14"><a href={waLink()} target="_blank" rel="noopener noreferrer"><Button className="bg-forest hover:bg-forest/90 text-white rounded-full px-7"><MessageCircle size={16} className="mr-2" />Become our next guest</Button></a></div>
        </div>
      </section>
    </>
  );
}
