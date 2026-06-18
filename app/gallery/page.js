'use client';
import { useState } from 'react';
import { X } from 'lucide-react';

const IMAGES = [
  { src: '/images/villas/dhanushkodi/Parking Space.JPG.webp', cat: 'Exterior'},	
  { src: '/images/villas/dhanushkodi/dhanushkodi1.webp', cat: 'Exterior' },
  { src: '/images/villas/dwarka/dwarka1.webp', cat: 'Exterior' },
  { src: '/images/villas/hridayam/hridayam2.webp', cat: 'Exterior' },
  { src: '/images/villas/sukoonghar/sukoonghar2.webp', cat: 'Exterior' },
  { src: '/images/villas/dwarkadhish/dwarkadhish2.webp', cat: 'Interior' },
  { src: '/images/villas/hridayam/hridayam4.webp', cat: 'Interior' },
  { src: '/images/villas/dhanushkodi/dhanushkodi5.webp', cat: 'Interior' },
  { src: '/images/villas/dhanushkodi/dhanushkodi3.webp', cat: 'Pool' },
  { src: '/images/villas/dwarkadhish/dwarkadhish3.webp', cat: 'Pool' },
  { src: '/images/villas/dwarka/dwarka4.webp', cat: 'Pool' },
  { src: '/images/locations/locations.webp', cat: 'Scenic' },
  { src: '/images/villas/sukoonghar/sukoonghar6.webp', cat: 'Scenic' },
  { src: '/images/gallery/family1.webp', cat: 'Lifestyle' },
  { src: '/images/gallery/friends1.webp', cat: 'Lifestyle' },
  { src: '/images/gallery/birthday1.webp', cat: 'Lifestyle' }
];

const CATS = ['All', 'Exterior', 'Interior', 'Pool', 'Scenic', 'Lifestyle'];

export default function Gallery() {
  const [cat, setCat] = useState('All');
  const [open, setOpen] = useState(null);
  const list = cat === 'All' ? IMAGES : IMAGES.filter(i => i.cat === cat);
  return (
    <>
      <section className="relative h-[55vh] min-h-[380px] overflow-hidden">
        <img src="/images/hero/hero8.webp" alt="gallery" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative h-full container mx-auto max-w-7xl px-5 md:px-8 flex items-end pb-14 text-white">
          <div><div className="gold-divider">Visual Journal</div><h1 className="font-serif text-5xl md:text-7xl mt-4">Our Gallery</h1></div>
        </div>
      </section>
      <section className="py-14">
        <div className="container mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {CATS.map(c => (<button key={c} onClick={()=>setCat(c)} className={`px-5 py-2 rounded-full text-sm border transition ${cat===c ? 'bg-forest text-white border-forest':'bg-white text-forest border-border hover:border-forest'}`}>{c}</button>))}
          </div>
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
            {list.map((img, i) => (
              <button key={i} onClick={()=>setOpen(img.src)} className="block mb-4 w-full break-inside-avoid rounded-md overflow-hidden group relative">
                <img src={img.src} alt={img.cat} className="w-full group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/30 transition" />
              </button>
            ))}
          </div>
        </div>
      </section>
      {open && (<div onClick={()=>setOpen(null)} className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-6"><button className="absolute top-5 right-5 text-white"><X /></button><img src={open} alt="" className="max-h-full max-w-full object-contain rounded" /></div>)}
    </>
  );
}
