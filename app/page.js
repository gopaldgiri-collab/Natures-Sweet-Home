'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  MessageCircle, 
  Star, 
  Waves, 
  Trees, 
  Sparkles, 
  ShieldCheck, 
  MapPin, 
  Award, 
  BedDouble, 
  Quote, 
  Cake, 
  Users, 
  Heart, 
  Baby 
} from 'lucide-react';
import { VILLAS, LOCATIONS, REVIEWS, waLink } from '@/lib/site-data';
import AutoScroll from "@/components/animations/AutoScroll";
import VillaCard from '@/components/site/VillaCard';

// Swiper modules (Removed EffectFade for sliding transition)
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Core styles
import 'swiper/css';
import 'swiper/css/pagination';

const HERO_SLIDES = [
  {
    image: "/images/hero/hero1.webp",
    eyebrow: 'Your Comfort, Our Priority',
    titleA: 'Luxury Private Villas in',
    accent: 'Mahabaleshwar, Panchgani & Lonavala',
    titleB: '',
    subtitle: 'Professionally managed holiday homes hand-picked across the Sahyadris — boutique stays, private pools and unforgettable mountain views.',
  },
  {
    image: "/images/hero/hero2.webp",
    eyebrow: 'Friends · Family · Celebrations',
    titleA: 'Where Every Stay Becomes',
    accent: 'an Unforgettable Story',
    titleB: '',
    subtitle: 'From birthday weekends and anniversary getaways to corporate offsites — our villas are designed for the memories you will be telling for years.',
  },
  {
    image: "/images/hero/hero3.webp",
    eyebrow: 'Sahyadri Boutique Retreats',
    titleA: 'Your Private',
    accent: 'Sahyadri Retreat',
    titleB: 'Awaits',
    subtitle: 'Wake up to pine-scented mornings, lounge by your private pool and dine under starlit skies — every villa, hand-curated by our hospitality team.',
  },
];

const AMENITIES = [
  { icon: Waves, title: 'Private Pools', desc: 'Crystal-clear pools with valley views' },
  { icon: Trees, title: 'Scenic Locations', desc: 'Hand-picked stays amidst valleys, forests, beaches & hill stations.' },
  { icon: Trees, title: 'Mountain Views', desc: 'Wake up to breathtaking Sahyadri mountain panoramas.' },
  { icon: Sparkles, title: 'Daily Housekeeping', desc: 'Hotel-grade linens & turndown service' },
  { icon: ShieldCheck, title: 'Complete Privacy', desc: 'Private villas designed for peaceful and exclusive getaways.' },
];

const WHYCHOOSE = [
  { icon: MapPin, title: 'Premium Location', desc: 'Nestled in the Sahyadris — Mahabaleshwar, Panchgani & Lonavala' },
  { icon: Star, title: '5★ Hospitality', desc: 'Professionally managed, hotel-grade service standards' },
  { icon: BedDouble, title: 'Boutique Stays', desc: 'Hand-picked private villas with character & comfort' },
  { icon: Award, title: 'Trusted Hosts', desc: '200+ stays, 4.9 average rating, repeat guests' },
];

const HIGHLIGHT_PILLS = [
  'Private Pools', 'Hotel-Grade Linens', 'Complete Privacy', 'Mountain Views', 'Scenic Locations', 'Wi-Fi Throughout', 'Smart TVs', 'Caretaker Assistance',
  'Modular Kitchens', 'Manicured Lawns', 'Bonfire Decks', '24×7 Hot Water', 'Power Backup',
  'Private Parking', 'WhatsApp Concierge',
];

const LIFESTYLE = [
  { icon: Users, label: 'Friends Getaways', img: "/images/gallery/friends1.webp" },
  { icon: Heart, label: 'Couples & Anniversaries', img: "/images/gallery/family1.webp" },
  { icon: Baby, label: 'Family with Kids', img: "/images/gallery/children1.webp" },
  { icon: Cake, label: 'Celebrations & Birthdays', img: "/images/gallery/birthday1.webp" },
];

const GALLERY_STRIP = [
  { src: "/images/villas/dhanushkodi/dhanushkodi2.webp", label: 'Balcony' },
  { src: "/images/villas/dwarka/dwarka2.webp", label: 'Outdoor' },
  { src: "/images/villas/dhanushkodi/dhanushkodi3.webp", label: 'Pool' },
  { src: "/images/villas/dwarkadhish/dwarkadhish2.webp", label: 'Living Hall' },
  { src: "/images/villas/hridayam/hridayam2.webp", label: 'Exterior' },
  { src: "/images/villas/sukoonghar/sukoonghar2.webp", label: 'Interior' },
  { src: "/images/villas/dwarka/dwarka3.webp", label: 'Pool' },
  { src: "/images/villas/dwarkadhish/dwarkadhish3.webp", label: 'Bedroom' },
  { src: "/images/villas/hridayam/hridayam3.webp", label: 'Seat-out' },
  { src: "/images/villas/sukoonghar/sukoonghar3.webp", label: 'Bedroom' },
  { src: "/images/villas/dhanushkodi/dhanushkodi4.webp", label: 'Lounge' },
  { src: "/images/locations/locations.webp", label: 'Sahyadri View' },
  { src: "/images/gallery/family3.webp", label: 'Lonavala View' },
];

function SectionHeader({ eyebrow, title, subtitle, light = false }) {
  return (
    <div className="text-center mb-16 lg:mb-20 px-4">
      <span className="eyebrow inline-block mb-4" style={light ? { color: '#A4E4C6' } : undefined}>{eyebrow}</span>
      <h2 className={`font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl ${light ? 'text-white' : 'text-ink'} leading-tight`}>
        <span className="grad-underline">{title}</span>
      </h2>
      {subtitle && <p className={`mt-6 text-lg max-w-3xl mx-auto ${light ? 'text-white/70' : 'text-muted-foreground'}`}>{subtitle}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* 1. HERO SECTION — Sliding 3-Second Slider */}
      <section className="relative h-[100dvh] min-h-[700px] w-full overflow-hidden bg-black">
        <Swiper
          modules={[Autoplay, Pagination]}
          speed={1000} // Smooth 1-second slide transition
          loop={true}
          autoplay={{
            delay: 3000, // Slides every 3 seconds
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          className="h-full w-full hero-swiper"
        >
          {HERO_SLIDES.map((slide, i) => (
            <SwiperSlide key={i} className="relative w-full h-full">
              <div className="absolute inset-0 w-full h-full">
                <img 
                  src={slide.image} 
                  alt="" 
                  className="w-full h-full object-cover transition-transform duration-1000 scale-105" 
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
              
              <div className="relative h-full container mx-auto max-w-6xl px-6 flex items-center justify-center text-center z-10">
                <div className="text-white max-w-4xl mt-16">
                  <div className="text-[12px] sm:text-sm tracking-[0.4em] uppercase text-white/90 mb-6 font-medium">— {slide.eyebrow} —</div>
                  <h1 className="font-serif text-5xl sm:text-6xl md:text-8xl leading-[1.1] font-medium drop-shadow-lg">
                    {slide.titleA}{' '}
                    <span className="block sm:inline grad-text">{slide.accent}</span>
                    {slide.titleB && <span> {slide.titleB}</span>}
                  </h1>
                  <p className="mt-8 sm:mt-10 text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-md">
                    {slide.subtitle}
                  </p>
                  <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center">
                    <Link href="/villas">
                      <Button size="lg" className="btn-grad rounded-full px-8 sm:px-10 h-14 border-0 text-lg w-full sm:w-auto shadow-xl hover:scale-105 transition-transform">
                        Explore Villas <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </Link>
                    <a href={waLink()} target="_blank" rel="noopener noreferrer">
                      <Button size="lg" variant="outline" className="rounded-full px-8 sm:px-10 h-14 bg-white text-ink hover:bg-gray-100 border-white text-lg w-full sm:w-auto shadow-xl hover:scale-105 transition-transform">
                        Book Now
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* 2. WHAT WE PROVIDE — Fast, Smooth Adaptive Slider */}
      <section className="py-24 lg:py-32 bg-lavender overflow-hidden">
        <div className="container mx-auto max-w-7xl px-6 md:px-10">
          <SectionHeader
            eyebrow="What We Provide"
            title="Experience World-Class Amenities"
            subtitle="Every villa is curated, equipped and serviced to deliver hotel-grade comfort with the privacy of a private home."
          />
          <Swiper
             modules={[Autoplay]}
             loop={true}
             speed={1200}
             autoplay={{ delay: 2500, disableOnInteraction: false }}
             spaceBetween={24}
             breakpoints={{
               320: { slidesPerView: 1.2, spaceBetween: 20 },
               640: { slidesPerView: 2.2, spaceBetween: 24 },
               1024: { slidesPerView: 3, spaceBetween: 32 },
               1280: { slidesPerView: 4, spaceBetween: 32 },
             }}
             className="px-4 py-8"
          >
            {AMENITIES.map(({icon: Icon, title, desc}) => (
              <SwiperSlide key={title} className="h-auto pb-4">
                <div className="bg-white rounded-3xl p-8 md:p-10 text-center h-full flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-black/5">
                  <div>
                    <div className="w-16 h-16 bg-lavender rounded-2xl flex items-center justify-center mx-auto mb-6 text-brand">
                        <Icon size={28} />
                    </div>
                    <h3 className="font-serif text-xl md:text-2xl text-ink mb-3">{title}</h3>
                  </div>
                  <p className="text-base text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* DARK "ABOUT" SECTION */}
      <section className="py-24 lg:py-32 bg-ink text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.08]" style={{backgroundImage:'radial-gradient(circle at 20% 20%, #2FA56E 0%, transparent 50%), radial-gradient(circle at 80% 80%, #5BB7FF 0%, transparent 50%)'}} />
        <div className="container mx-auto max-w-7xl px-6 md:px-10 relative grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <span className="eyebrow inline-block mb-4" style={{color:'#A4E4C6'}}>Sahyadri&apos;s Finest</span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.1] mb-6">
              The Most Trusted Boutique Villas<br className="hidden lg:block" />
              <span className="grad-text"> in the Sahyadris</span>
            </h2>
            <div className="grad-text font-serif italic text-xl mb-8">— Your Comfort, Our Priority —</div>
            <p className="text-white/80 leading-relaxed text-lg mb-6 font-light">
              Founded by hospitality professionals, <strong className="text-white font-medium">Natures Sweet Homes</strong> bridges the gap between villa owners and discerning travelers — with hotel-grade SOPs, transparent pricing and a single-point WhatsApp concierge for every booking.
            </p>
            <p className="text-white/80 leading-relaxed text-lg mb-10 font-light">
              From the majestic Sahyadri mountains and serene beaches to hill stations, lakes, city escapes and hidden retreats,
              <strong className="text-white font-medium"> Natures Sweet Homes brings together hand-picked villas and holiday homes across Maharashtra</strong> for unforgettable stays and memorable experiences.
            </p> 
            <div className="grid grid-cols-4 gap-6 pt-10 border-t border-white/10">
              <Stat n="5" label="Villas" />
              <Stat n="3" label="Destinations" />
              <Stat n="200+" label="Stays" />
              <Stat n="4.9★" label="Rating" />
            </div>
            <div className="mt-12 flex flex-wrap gap-5">
              <a href={waLink()} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="btn-grad rounded-full px-8 h-14 border-0 text-lg hover:scale-105 transition-transform">
                      Book Your Stay <ArrowRight size={20} className="ml-2" />
                  </Button>
              </a>
              <Link href="/about">
                  <Button size="lg" variant="outline" className="rounded-full px-8 h-14 bg-transparent border-white/30 text-white hover:bg-white/10 text-lg transition-colors">
                      Discover More
                  </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="text-[12px] tracking-[0.32em] uppercase text-white/60 mb-6 font-medium">Villa Highlights</div>
            <div className="flex flex-wrap gap-3 mb-10">
              {HIGHLIGHT_PILLS.map((p) => (
                  <span key={p} className="bg-white/10 border border-white/20 text-white px-5 py-2 rounded-full text-sm font-light backdrop-blur-sm">
                      {p}
                  </span>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-6 relative">
              <img src="/images/villas/dwarka/dwarka1.webp" alt="Villa Exterior" className="rounded-3xl aspect-[3/4] object-cover shadow-2xl" />
              <img src="/images/villas/dhanushkodi/Parking space.JPG.webp" alt="Villa Exterior" className="rounded-3xl aspect-[3/4] object-cover mt-12 shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE US — Smooth Transitions */}
      <section className="py-24 lg:py-32 bg-white overflow-hidden">
        <div className="container mx-auto max-w-7xl px-6 md:px-10">
          <SectionHeader eyebrow="Why Choose Us" title="A Luxury Hospitality Experience" />
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            speed={1000} // Added sliding motion speed
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            breakpoints={{
               320: { slidesPerView: 1.1, spaceBetween: 20 },
               640: { slidesPerView: 2.1, spaceBetween: 24 },
               1024: { slidesPerView: 3, spaceBetween: 32 },
               1280: { slidesPerView: 4, spaceBetween: 32 },
            }}
            className="pb-16 pt-4"
          >
            {WHYCHOOSE.map(({icon: Icon, title, desc}) => (
              <SwiperSlide key={title} className="h-auto">
                <div className="bg-lavender rounded-3xl p-8 md:p-10 h-full flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div>
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 text-brand shadow-sm">
                        <Icon size={24} />
                    </div>
                    <h3 className="font-serif text-2xl text-ink mb-4">{title}</h3>
                  </div>
                  <p className="text-base text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* 4. MADE FOR EVERY MOMENT — Premium Carousel Motion */}
      <section className="py-24 lg:py-32 bg-lavender overflow-hidden">
        <div className="container mx-auto max-w-7xl px-6 md:px-10">
          <SectionHeader
            eyebrow="Made For Every Moment"
            title="Stays Designed Around Real Life"
            subtitle="Friends & family, kids & couples, celebrations & corporates — our villas adapt to every kind of getaway."
          />
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            speed={1000} // Added sliding motion speed
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            breakpoints={{
              320: { slidesPerView: 1.2, spaceBetween: 16 },
              640: { slidesPerView: 2.2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 32 },
              1280: { slidesPerView: 4, spaceBetween: 32 },
            }}
            className="pb-16 pt-4"
          >
            {LIFESTYLE.map(({icon: Icon, label, img}) => (
              <SwiperSlide key={label}>
                <div className="group relative overflow-hidden rounded-3xl aspect-[4/5] w-full cursor-pointer shadow-lg">
                  <img src={img} alt={label} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="bg-white/20 backdrop-blur-md w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                        <Icon size={24} className="text-white" />
                    </div>
                    <div className="font-serif text-xl md:text-2xl leading-tight">{label}</div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* GALLERY PREVIEW STRIP — Continuous Horizontal Marquee */}
      <section className="py-24 lg:py-32 bg-white overflow-hidden">
        <div className="container mx-auto max-w-7xl px-6 md:px-10 mb-16">
          <SectionHeader
            eyebrow="A Glimpse Inside"
            title="Our Villa Gallery"
            subtitle="Indoor lounges, outdoor decks, private pools and scenic Sahyadri views — a quick peek into our world."
          />
        </div>
        
        <div className="w-full relative select-none pb-8">
          <AutoScroll speed="45s">
            {GALLERY_STRIP.map((g, i) => (
              <Link 
                key={i} 
                href="/gallery" 
                className="relative overflow-hidden rounded-2xl group w-72 h-72 sm:w-80 sm:h-80 mx-3 flex-shrink-0 block shadow-md"
              >
                <img src={g.src} alt={g.label} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-6 left-6 text-white text-sm uppercase tracking-widest font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500">{g.label}</div>
              </Link>
            ))}
          </AutoScroll>
        </div>

        <div className="text-center mt-16">
          <Link href="/gallery">
              <Button variant="outline" size="lg" className="border-brand text-brand hover:bg-brand hover:text-white rounded-full px-10 h-14 text-lg transition-colors">
                  View Full Gallery <ArrowRight size={20} className="ml-3" />
              </Button>
          </Link>
        </div>
      </section>

      {/* VILLAS & SUITES */}
      <section className="py-24 lg:py-32 bg-lavender">
        <div className="container mx-auto max-w-7xl px-6 md:px-10">
          <SectionHeader
            eyebrow="Villas & Suites"
            title="Our 5 Hand-picked Stays"
            subtitle="From cozy 2BHK retreats to luxurious 4BHK pool villas — designed for every getaway."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {VILLAS.map((v) => <VillaCard key={v.slug} villa={v} />)}
          </div>
          <div className="text-center mt-16">
            <Link href="/villas">
                <Button variant="outline" size="lg" className="border-brand text-brand hover:bg-brand hover:text-white rounded-full px-10 h-14 text-lg transition-colors">
                    View All Villas <ArrowRight size={20} className="ml-3" />
                </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. WHERE WE ARE (SAHYADRI ESCAPES) */}
      <section className="py-24 lg:py-32 bg-white overflow-hidden">
        <div className="container mx-auto max-w-7xl px-6 md:px-10">
          <SectionHeader eyebrow="Where We Are" title="Three Sahyadri Escapes" />
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={32}
            speed={1000} // Added sliding motion speed
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            breakpoints={{
              320: { slidesPerView: 1.1, spaceBetween: 20 },
              768: { slidesPerView: 2.1, spaceBetween: 32 },
              1024: { slidesPerView: 3, spaceBetween: 32 },
            }}
            className="pb-16 pt-4"
          >
            {LOCATIONS.map((l, i) => (
              <SwiperSlide key={l.slug}>
                <Link href={`/locations/${l.slug}`} className="group relative aspect-[3/4] overflow-hidden rounded-3xl block w-full shadow-lg">
                  {/* Image overridden directly in the loop to use hero1.webp, hero2.webp, hero3.webp */}
                  <img src={`/images/hero/hero${i + 4}.webp`} alt={l.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 text-white">
                    <div className="text-[12px] tracking-[0.32em] uppercase mb-3 grad-text font-medium">{l.tagline}</div>
                    <h3 className="font-serif text-3xl md:text-4xl mb-4">Villas in {l.name}</h3>
                    <div className="flex items-center gap-2 text-base font-light group-hover:gap-4 transition-all">
                        Explore <ArrowRight size={18} />
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* 6. REVIEWS (GUEST EXPERIENCES) */}
      <section className="py-24 lg:py-32 bg-ink text-white overflow-hidden">
        <div className="container mx-auto max-w-7xl px-6 md:px-10">
          <SectionHeader light eyebrow="Guest Experiences" title="What Our Guests Say" />
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            speed={1000} // Added sliding motion speed
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 32 },
            }}
            className="pb-16 pt-4 dark-swiper"
          >
            {[...REVIEWS, ...REVIEWS].map((r, index) => (
              <SwiperSlide key={`${r.name}-${index}`} className="h-auto">
                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-md relative h-full flex flex-col justify-between transition-all duration-300 hover:bg-white/10 hover:-translate-y-2">
                  <div>
                    <Quote size={32} className="absolute top-8 right-8 text-white/10" />
                    <div className="flex gap-1.5 mb-6">
                      {Array.from({ length: r.rating }).map((_, i) => (
                        <Star key={i} size={18} className="text-[#A4E4C6] fill-[#A4E4C6]" />
                      ))}
                    </div>
                    <p className="text-white/90 leading-relaxed text-lg font-light italic mb-8">&ldquo;{r.text}&rdquo;</p>
                  </div>
                  <div className="pt-6 border-t border-white/10 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full grad-bp text-white flex items-center justify-center font-serif text-xl flex-shrink-0 shadow-lg">
                        {r.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-serif text-xl text-white mb-1">{r.name}</div>
                      <div className="text-sm text-white/60 font-light">{r.location} • {r.villa}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="text-center mt-12">
            <Link href="/reviews">
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white hover:text-ink bg-transparent rounded-full px-10 h-14 text-lg transition-colors">
                    Read All Reviews
                </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <img src="/images/villas/hridayam/hridayam5.webp" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 grad-bp opacity-90" />
        <div className="relative container mx-auto max-w-4xl px-6 text-center text-white">
          <div className="text-[12px] md:text-sm tracking-[0.45em] uppercase mb-6 opacity-90 font-medium">— Plan Your Sahyadri Escape —</div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-7xl leading-tight drop-shadow-lg">
              Ready for an Unforgettable Experience?
          </h2>
          <p className="text-white/90 mt-8 text-lg md:text-2xl font-light max-w-2xl mx-auto drop-shadow-md">
              Speak to our villa concierge for tailored recommendations, custom itineraries and best-rate guarantees.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center">
            <a href={waLink()} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-ink hover:bg-gray-100 rounded-full px-10 h-14 text-lg shadow-xl hover:scale-105 transition-transform">
                    Book on WhatsApp <MessageCircle className="w-5 h-5 ml-3" />
                </Button>
            </a>
            <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-ink bg-transparent rounded-full px-10 h-14 text-lg shadow-xl hover:scale-105 transition-all">
                    Contact Us
                </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ n, label }) {
  return (
    <div className="text-center md:text-left">
      <div className="font-serif text-3xl md:text-5xl grad-text mb-2">{n}</div>
      <div className="text-[10px] md:text-xs tracking-[0.28em] uppercase text-white/60 font-medium">{label}</div>
    </div>
  );
}
