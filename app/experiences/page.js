import { EXPERIENCES, waLink } from '@/lib/site-data';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

export const metadata = { title: "Experiences — Natures Sweet Homes", description: 'Family getaways, weekend trips, group stays, corporate retreats, celebrations and nature experiences.' };

export default function Experiences() {
  return (
    <>
      <section className="relative h-[55vh] min-h-[380px] overflow-hidden">
        <img src="/images/pages/experiences/experiences.webp" alt="Experiences" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative h-full container mx-auto max-w-7xl px-5 md:px-8 flex items-end pb-14 text-white">
          <div><div className="gold-divider">Stays for Every Story</div><h1 className="font-serif text-5xl md:text-7xl mt-4">Experiences</h1></div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-5 md:px-8 grid md:grid-cols-2 gap-8">
          {EXPERIENCES.map(e => (
            <div key={e.slug} className="luxury-card overflow-hidden grid md:grid-cols-2">
              <div className="aspect-[4/3] md:aspect-auto overflow-hidden"><img src={e.image} alt={e.title} className="w-full h-full object-cover" /></div>
              <div className="p-8">
                <h3 className="font-serif text-3xl text-forest">{e.title}</h3>
                <p className="text-muted-foreground mt-3 leading-relaxed">{e.desc}</p>
                <div className="mt-5"><a href={waLink(`Hi! I'm interested in a ${e.title.toLowerCase()} stay.`)} target="_blank" rel="noopener noreferrer"><Button className="bg-forest hover:bg-forest/90 text-white rounded-full"><MessageCircle size={14} className="mr-2" />Plan this experience</Button></a></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
