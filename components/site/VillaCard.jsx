import Link from 'next/link';
import { Users, BedDouble, MapPin, Waves, ArrowRight } from 'lucide-react';

export default function VillaCard({ villa }) {
  return (
<div
  className="lux-card group flex flex-col"
  data-aos="fade-up"
>
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={villa.cover} alt={villa.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <span className="absolute top-4 left-4 pill-light shadow-sm uppercase tracking-widest text-[10px]">{villa.category}</span>
        <span className="absolute top-4 right-4 bg-ink/85 backdrop-blur text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
          <MapPin size={12} className="text-[#5BB7FF]" /> {villa.location}
        </span>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-serif text-2xl text-ink leading-tight">{villa.name}</h3>
        <p className="text-sm text-muted-foreground mt-2 line-clamp-2 leading-relaxed">{villa.tagline || villa.description?.slice(0, 110) + '…'}</p>
        <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-muted-foreground mt-4">
          <span className="flex items-center gap-1"><Users size={13} className="text-brand" /> {villa.occupancy} guests</span>
          <span className="flex items-center gap-1"><BedDouble size={13} className="text-brand" /> {villa.bedrooms} bedrooms</span>
          {villa.pool && <span className="flex items-center gap-1"><Waves size={13} className="text-brand" /> Private Pool</span>}
        </div>
        <div className="mt-5 pt-5 border-t border-border flex items-center justify-between">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">Enquire for rate</span>
          <Link href={`/villas/${villa.slug}`} className="btn-grad inline-flex items-center gap-1.5 rounded-full px-5 h-10 text-sm font-medium">Book Now <ArrowRight size={14} /></Link>
        </div>
      </div>
    </div>
  );
}
