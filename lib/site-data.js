// Central data for Natures Sweet Homes

export const CONTACT = {
  whatsapp: '+918010368931',
  whatsappDisplay: '+91 80103 68931',
  phone: '+918010368931',
  phoneDisplay: '+91 80103 68931',
  email: 'naturesweethomes@gmail.com',
  address:
    'Natures Sweet Homes, M. No. 551, At. Post Bhilar, Tal. Mahabaleshwar, Dist. Satara, Panchgani – 412805, Maharashtra, India',
  city: 'Panchgani',
mapsQuery:
  'Natures+Sweet+Homes+M+No+551+At+Post+Bhilar+Tal+Mahabaleshwar+Dist+Satara+Panchgani+412805+Maharashtra+India',
  socials: {
    instagram: 'https://www.instagram.com/naturessweethomes',
    facebook: 'https://www.facebook.com/share/15E4azKoTg/',
    google: 'https://g.co/kgs/bqVpxYE',
   youtube: 'https://www.youtube.com/@NaturesSweetHomes',
    twitter: 'https://x.com/natures_homes',
    pinterest: 'https://in.pinterest.com/naturessweethomes/',
},
};

export const waLink = (msg) =>
  `https://wa.me/${CONTACT.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    msg || "Hello Natures Sweet Homes, I'd like to enquire about a villa booking."
  )}`;

export const LOCATIONS = [
 {
    slug: 'mahabaleshwar',
    name: 'Mahabaleshwar',
    tagline: 'Queen of the Sahyadris',
    hero: "/images/hero/hero1.webp",
    description:
      "Mahabaleshwar — the storied 'Queen of the Sahyadris' — is a lush evergreen escape of mist-wrapped valleys, ancient temples and ribboning lookout points. Wake to the soft rustle of jamun groves and end your evenings around bonfires under starlit Konkan skies, all from the privacy of your own villa.",
    attractions: [
      'Wilson Point Sunrise',
      "Arthur's Seat",
      'Venna Lake',
      'Lingmala Waterfall',
      'Pratapgad Fort',
      'Mapro Garden',
    ],
  },
 {
    slug: 'panchgani',
    name: 'Panchgani',
    tagline: 'Table-land Vistas & Strawberry Valleys',
    hero: "/images/hero/hero2.webp",
    description:
      "Nestled at 1,334 metres in the Sahyadri ranges, Panchgani is a colonial-era hill retreat famed for its iconic Table-land plateau, strawberry farms, and panoramic views of the Krishna valley. Our private villas blend boutique luxury with the calm of pine-scented mountain air — the perfect canvas for a slow, memorable getaway.",
    attractions: [
      'Table Land Plateau',
      'Sydney Point',
      'Parsi Point',
      'Mapro Garden & Strawberry Farms',
      "Devil's Kitchen",
      'Rajpuri Caves',
      "Bhilar - India's Books Village",
    ],
  },
   {
    slug: 'lonavala',
    name: 'Lonavala',
    tagline: 'Monsoon Cliffs & Misty Forts',
    hero: "/images/locations/locations.webp",
    description:
      "Lonavala is a romantic Sahyadri escape where dramatic cliffs, monsoon waterfalls and ancient forts converge. Just a short drive from Mumbai and Pune, our boutique pool villas turn weekends into private retreats — for families, friends and celebrations alike.",
    attractions: [
      "Tiger's Leap",
      'Bhushi Dam',
      'Lohagad Fort',
      'Karla Caves',
      'Pawna Lake',
      'Rajmachi Point',
    ],
  },
];

// ===== REAL Natures Sweet Homes Properties =====
export const VILLAS = [
  {
    slug: 'dhanushkodi-retreat',
    name: 'Dhanushkodi Retreat',
    tagline: 'Luxury 4BHK Private Pool Villa in Bhilar, Panchgani',
    location: 'Mahabaleshwar',
    area: 'Bhilar',
    category: 'Luxury Villas',
    occupancy: 12,
    bedrooms: 4,
    bathrooms: 4,
    pool: true,
    garden: true,
    cover: "/images/villas/dhanushkodi/Parking Space.JPG.webp",
    gallery: [
        "/images/villas/dhanushkodi/dhanushkodi2.webp",
        "/images/villas/dhanushkodi/dhanushkodi3.webp",
        "/images/villas/dhanushkodi/dhanushkodi4.webp",
        "/images/villas/dhanushkodi/dhanushkodi5.webp",
        "/images/villas/dhanushkodi/dhanushkodi6.webp",
        "/images/villas/dhanushkodi/dhanushkodi7.webp",
        "/images/villas/dhanushkodi/dhanushkodi1.webp",
    ],
    description:
      "Nestled in the peaceful surroundings of Bhilar, India's famous Books Village, Dhanushkodi Retreat is a premium 4BHK luxury villa designed for families, friends, and groups seeking privacy, comfort, and unforgettable holiday experiences. Surrounded by lush greenery and breathtaking mountain views, the villa offers the perfect balance between nature, luxury, and convenience. Located just minutes away from Panchgani and Mahabaleshwar's most popular attractions, guests can enjoy a serene retreat while staying close to sightseeing spots, strawberry farms, cafes, and local experiences.",
    highlights:
      'Wake up to stunning mountain views, relax by your private swimming pool, and spend quality time with your loved ones in spacious indoor and outdoor areas. Whether you are planning a family vacation, group getaway, birthday celebration or weekend escape, Dhanushkodi Retreat provides an exceptional stay experience surrounded by nature.',
    amenities: [
      '4 Spacious Ensuite Bedrooms',
      'Private Swimming Pool',
      'Large Living & Entertainment Area',
      'Fully Equipped Modern Kitchen',
      'High-Speed Wi-Fi',
      'Smart Television',
      'Balcony with Valley Views',
      'Dedicated Caretaker Assistance',
      '24x7 Hot Water',
      'Power Backup',
      'Secure Parking',
    ],
    perfectFor: ['Family Vacations', 'Group Getaways', 'Birthday Celebrations', 'Weekend Escapes'],
    nearby: [
      "Bhilar Books Village — 2 min",
      'Mapro Garden — 10 min',
      'Panchgani Table Land — 12 min',
      'Mahabaleshwar Market — 25 min',
    ],
    mapsQuery: 'Bhilar+Panchgani+Maharashtra',
    seoTitle:
      "Dhanushkodi Retreat — Luxury 4BHK Private Pool Villa in Bhilar, Panchgani | Natures Sweet Homes",
    seoDescription:
      'Book Dhanushkodi Retreat, a premium 4BHK private pool villa in Bhilar, Panchgani. 4 ensuite bedrooms, private pool, mountain views and 24x7 service. Ideal for families and groups.',
  },
  {
    slug: 'dwarkadhish-villa',
    name: 'Dwarkadhish Villa',
    tagline: 'Premium 4BHK Villa Near Mapro Garden, Panchgani',
    location: 'Mahabaleshwar',
    area: 'Near Mapro Garden',
    category: 'Family Villas',
    occupancy: 12,
    bedrooms: 4,
    bathrooms: 4,
    pool: true,
    garden: true,
    cover: "/images/villas/dwarkadhish/Swimming Pool  (5).jpeg",
    gallery: [
        "/images/villas/dwarkadhish/dwarkadhish2.webp",
        "/images/villas/dwarkadhish/dwarkadhish3.webp",
        "/images/villas/dwarkadhish/dwarkadhish4.webp",
        "/images/villas/dwarkadhish/dwarkadhish5.webp",
        "/images/villas/dwarkadhish/dwarkadhish6.webp",
        "/images/villas/dwarkadhish/dwarkashish1.webp",
    ],
    description:
      'Experience comfort, privacy, and luxury at Dwarkadhish Villa, a beautifully maintained 4BHK private villa located near the famous Mapro Garden in Panchgani. Designed for families and large groups, the villa offers spacious living spaces, modern amenities, and a peaceful environment away from city life. Surrounded by greenery and fresh mountain air, Dwarkadhish Villa combines relaxation with convenience, making it an ideal destination for weekend getaways, family vacations, and special occasions.',
    highlights:
      'From peaceful mornings in the garden to refreshing evenings by the pool, every corner of Dwarkadhish Villa is designed to create memorable experiences for guests of all ages.',
    amenities: [
      '4 Air-Conditioned Bedrooms',
      'Private Swimming Pool',
      'Beautiful Garden Area',
      'Kids Play Zone',
      'Fully Equipped Kitchen',
      'Smart TV',
      'High-Speed Wi-Fi',
      'Spacious Living Room',
      'Caretaker Available on Request',
      'Outdoor Seating Area',
      'Private Parking',
    ],
    perfectFor: ['Family Holidays', 'Group Stays', 'Corporate Retreats', 'Birthday Celebrations', 'Weekend Getaways'],
    nearby: [
      'Mapro Garden — 5 min',
      'Strawberry Farms — 6 min',
      'Panchgani Market — 10 min',
      'Table Land — 12 min',
    ],
    mapsQuery: 'Mapro+Garden+Panchgani+Maharashtra',
    seoTitle:
      "Dwarkadhish Villa — Premium 4BHK Family Villa Near Mapro Garden, Panchgani | Natures Sweet Homes",
    seoDescription:
      'Stay at Dwarkadhish Villa, a premium 4BHK pool villa near Mapro Garden in Panchgani. Perfect for families, corporate retreats and group celebrations. Book direct on WhatsApp.',
  },
  {
    slug: 'dwarka-villa',
    name: 'Dwarka Villa',
    tagline: 'Elegant 2BHK Villa with Private Pool & Valley Views',
    location: 'Mahabaleshwar',
    area: 'Panchgani',
    category: 'Pool Villas',
    occupancy: 6,
    bedrooms: 2,
    bathrooms: 2,
    pool: true,
    garden: true,
    cover: "/images/villas/dwarka/dwarka1.webp",
    gallery: [
        "/images/villas/dwarka/dwarka2.webp",
        "/images/villas/dwarka/dwarka3.webp",
        "/images/villas/dwarka/dwarka4.webp",
        "/images/villas/dwarka/dwarka5.webp",
        "/images/villas/dwarka/dwarka6.webp",
        "/images/villas/dwarka/dwarka7.webp",
    ],
    description:
      "Welcome to Dwarka Villa, a charming and beautifully designed 2BHK villa offering comfort, privacy, and stunning valley views. Whether you're planning a romantic getaway, family holiday, or a relaxing weekend with friends, Dwarka Villa provides the perfect setting for a peaceful stay amidst nature. The villa features a private swimming pool, comfortable interiors, modern amenities, and scenic surroundings that create a relaxing and rejuvenating experience.",
    highlights:
      'Located close to major tourist attractions while maintaining complete privacy, Dwarka Villa allows guests to enjoy the best of Panchgani and Mahabaleshwar without compromising on comfort and tranquility.',
    amenities: [
      'Private Swimming Pool',
      'Stunning Valley Views',
      'Fully Equipped Kitchen',
      'Spacious Living Area',
      'High-Speed Wi-Fi',
      'Smart Television',
      'Comfortable Bedrooms',
      'Outdoor Seating Area',
      'Private Parking',
    ],
    perfectFor: ['Romantic Getaways', 'Small Family Holidays', 'Weekend with Friends'],
    nearby: [
      'Panchgani Table Land — 10 min',
      'Sydney Point — 12 min',
      'Mapro Garden — 15 min',
      'Mahabaleshwar Market — 28 min',
    ],
    mapsQuery: 'Panchgani+Maharashtra',
    seoTitle:
      "Dwarka Villa — Elegant 2BHK Private Pool Villa with Valley Views, Panchgani | Natures Sweet Homes",
    seoDescription:
      'A romantic 2BHK private pool villa with stunning valley views in Panchgani. Ideal for couples, small families and weekend getaways near Pune & Mumbai.',
  },
  {
    slug: 'hridayam-villa',
    name: 'Hridayam Villa',
    tagline: 'Peaceful 2BHK Retreat in Panchgani',
    location: 'Panchgani',
    area: 'Near Panchgani Market',
    category: 'Family Villas',
    occupancy: 6,
    bedrooms: 2,
    bathrooms: 2,
    pool: false,
    garden: true,
    cover: "/images/villas/hridayam/hridayam4.webp",
    gallery: [
        "/images/villas/hridayam/hridayam2.webp",
        "/images/villas/hridayam/hridayam3.webp",
        "/images/villas/hridayam/hridayam4.webp",
        "/images/villas/hridayam/hridayam5.webp",
        "/images/villas/hridayam/hridayam6.webp",
        "/images/villas/hridayam/hridayam7.webp",
   ],
    description:
      'Hridayam Villa is a cozy and elegant 2BHK villa located just minutes away from Panchgani Market. Offering beautiful mountain views, comfortable interiors, and peaceful surroundings, it is an excellent choice for families, couples, and small groups looking for a relaxing holiday experience. The villa is thoughtfully designed to provide all modern comforts while maintaining a warm and homely atmosphere.',
    highlights:
      'Enjoy morning tea overlooking the mountains, spend evenings in the garden, and create unforgettable memories with your loved ones in a peaceful and comfortable environment.',
    amenities: [
      '2 Spacious Bedrooms',
      'Scenic Balcony with Mountain Views',
      'Smart TV & Entertainment Area',
      'High-Speed Wi-Fi',
      'Garden Sit-Out Area',
      'Dedicated Dining Space',
      'Power Backup',
      '24x7 Hot Water',
      'Private Parking',
      'Caretaker Assistance',
    ],
    perfectFor: ['Family Stays', 'Couples', 'Small Groups', 'Workcations'],
    nearby: [
      'Panchgani Market — 5 min',
      'Sydney Point — 7 min',
      'Table Land — 10 min',
      'Mapro Garden — 14 min',
    ],
    mapsQuery: 'Panchgani+Market+Maharashtra',
    seoTitle:
      "Hridayam Villa — Cozy 2BHK Mountain View Villa Near Panchgani Market | Natures Sweet Homes",
    seoDescription:
      'A cozy 2BHK mountain-view villa just minutes from Panchgani Market. Perfect for families, couples and small groups. Book direct on WhatsApp.',
  },
  {
    slug: 'sukoon-ghar',
    name: 'Sukoon Ghar',
    tagline: 'Cozy 2BHK Mountain View Villa Near Mapro Garden',
    location: 'Mahabaleshwar',
    area: 'Near Mapro Garden',
    category: 'Family Villas',
    occupancy: 6,
    bedrooms: 2,
    bathrooms: 2,
    pool: false,
    garden: true,
    cover: "/images/villas/sukoonghar/sukoonghar1.webp",
    gallery: [
        "/images/villas/sukoonghar/sukoonghar2.webp",
        "/images/villas/sukoonghar/sukoonghar3.webp",
        "/images/villas/sukoonghar/sukoonghar4.webp",
        "/images/villas/sukoonghar/sukoonghar5.webp",
        "/images/villas/sukoonghar/sukoonghar6.webp",
    ],
    description:
      'True to its name, Sukoon Ghar offers peace, comfort, and relaxation in the heart of nature. Located near Mapro Garden, this beautifully maintained 2BHK villa provides stunning mountain views and a calm atmosphere perfect for escaping the stress of daily life. Whether you are seeking a quiet family vacation, a workcation, or a weekend retreat, Sukoon Ghar offers everything needed for a memorable stay.',
    highlights:
      'Enjoy cool mountain breezes, breathtaking views, and a peaceful environment where you can truly unwind and reconnect with nature.',
    amenities: [
      '2 Comfortable Bedrooms',
      'Mountain View Balconies',
      'Spacious Living Room',
      'Fully Functional Kitchen',
      'Smart TV',
      'Wi-Fi Connectivity',
      'Private Washrooms',
      'Secure Parking',
      'Natural Ventilation',
      'Caretaker Support',
    ],
    perfectFor: ['Quiet Family Vacations', 'Workcations', 'Weekend Retreats'],
    nearby: [
      'Mapro Garden — 4 min',
      'Strawberry Farms — 5 min',
      'Panchgani Market — 10 min',
      'Table Land — 12 min',
    ],
    mapsQuery: 'Mapro+Garden+Panchgani+Maharashtra',
    seoTitle:
      "Sukoon Ghar — Cozy 2BHK Mountain View Villa Near Mapro Garden | Natures Sweet Homes",
    seoDescription:
      'A peaceful 2BHK mountain-view villa near Mapro Garden, Panchgani. Perfect for workcations, family stays and weekend retreats.',
  },
];

export const REVIEWS = [
  {
    name: 'Aarav & Priya Mehta',
    location: 'Mumbai',
    text:
      'Dhanushkodi Retreat was breathtaking — the private pool and valley views from the balcony made our anniversary unforgettable. The caretaker felt like a butler, not staff. Easily the best villa we have rented in Panchgani.',
    rating: 5,
    villa: 'Dhanushkodi Retreat',
  },
  {
    name: 'Rohan Kapoor',
    location: 'Pune',
    text:
      'We booked Dwarkadhish Villa for my 30th. From the welcome drink to the bonfire cocktails, every detail was thought through. The kids play zone kept the little ones busy all weekend.',
    rating: 5,
    villa: 'Dwarkadhish Villa',
  },
  {
    name: 'Sneha Iyer',
    location: 'Bengaluru',
    text:
      'Dwarka Villa was simply magical. The valley views with the morning mist rolling in were unreal. Compact, beautiful, perfect for a romantic getaway.',
    rating: 5,
    villa: 'Dwarka Villa',
  },
  {
    name: 'Karan & Ananya',
    location: 'Mumbai',
    text:
      'Sukoon Ghar truly lives up to its name. We worked from the balcony during the day and watched the sunset behind the mountains every evening. We will be back.',
    rating: 5,
    villa: 'Sukoon Ghar',
  },
  {
    name: 'Ishita Sharma',
    location: 'Delhi',
    text:
      'Hridayam Villa was warm, clean and so close to the market that we could walk down for evening snacks. Hosted with so much care — felt like a home, not a rental.',
    rating: 5,
    villa: 'Hridayam Villa',
  },
  {
    name: 'Devansh Patil',
    location: 'Pune',
    text:
      'Booked Dhanushkodi Retreat for a corporate offsite of 12. The team set up an outdoor projection screen for us in the garden. Above-and-beyond hospitality.',
    rating: 5,
    villa: 'Dhanushkodi Retreat',
  },
];

export const HIGHLIGHTS = [
  { icon: 'Waves', title: 'Private Pools', desc: 'Heated & temperature-controlled pools at select villas.' },
  { icon: 'TreePine', title: 'Manicured Gardens', desc: 'Landscaped outdoor lounges with bonfire pits.' },
  { icon: 'Sparkles', title: 'Daily Housekeeping', desc: 'Hotel-grade linens, towels and turndown service.' },
  { icon: 'ChefHat', title: 'Private Chef on Request', desc: 'Curated multi-cuisine menus, in-villa dining.' },
  { icon: 'Wifi', title: 'High-Speed Wi-Fi', desc: 'Work-from-villa ready connectivity throughout.' },
  { icon: 'ShieldCheck', title: '24×7 Concierge', desc: 'Single-point WhatsApp concierge for every stay.' },
];

export const EXPERIENCES = [
  {
    slug: 'family',
    title: 'Family Getaways',
    image: "/images/gallery/family1.webp",
    desc: 'Multi-bedroom villas with kid-safe pools, lawns and in-villa dining — designed for three-generation holidays.',
  },
  {
    slug: 'weekend',
    title: 'Weekend Trips',
    image: "/images/gallery/friends1.webp",
    desc: '48-hour escapes from Mumbai & Pune with same-day check-in, pre-stocked pantries and curated drives.',
  },
  {
    slug: 'group',
    title: 'Group Stays',
    image: "/images/gallery/friends2.webp",
    desc: 'Whole-villa buyouts for friend groups of 8–12 with bonfire decks, BBQ counters and games.',
  },
  {
    slug: 'corporate',
    title: 'Corporate Retreats',
    image: "/images/villas/dwarkadhish/dwarkadhish2.webp",
    desc: 'Offsite-ready villas with breakout rooms, projector setups and team-building experiences.',
  },
  {
    slug: 'celebrations',
    title: 'Celebrations',
    image: "/images/gallery/birthday1.webp",
    desc: 'Birthdays, anniversaries, baby-moons — curated decor, cake & cocktails, intimate and private.',
  },
  {
    slug: 'nature',
    title: 'Nature Experiences',
    image: "/images/locations/locations.webp",
    desc: 'Sunrise treks, valley walks, strawberry-farm tours and stargazing decks curated by local guides.',
  },
];

export const OFFERS = [
  {
    tag: 'Seasonal',
    title: 'Monsoon in the Sahyadris',
    desc: 'Special rates on Dwarka & Sukoon Ghar through the monsoon season — best-time-to-visit Panchgani.',
    discount: 'BEST RATES',
  },
  {
    tag: 'Weekend',
    title: 'Two-Night Weekend Escape',
    desc: 'Book Friday & Saturday and get complimentary Sunday brunch + late check-out till 1 PM.',
    discount: 'FREE BRUNCH',
  },
  {
    tag: 'Long Stay',
    title: 'Workation Long Stays',
    desc: 'Stay 5+ nights at Sukoon Ghar or Hridayam and unlock special rates with daily housekeeping.',
    discount: 'SPECIAL RATE',
  },
  {
    tag: 'Group',
    title: '4BHK Whole-Villa Buyout',
    desc: 'Book Dhanushkodi Retreat or Dwarkadhish Villa for groups and receive complimentary bonfire + BBQ setup.',
    discount: 'FREE SETUP',
  },
  {
    tag: 'Celebrations',
    title: 'Anniversary & Birthday Package',
    desc: 'Floral decor, cake, candle-lit dinner and welcome cocktails on us when you book 2+ nights.',
    discount: 'GIFTED',
  },
  {
    tag: 'Early Bird',
    title: 'Plan 30 Days Ahead',
    desc: 'Book any villa at least 30 days in advance and lock in our best available rates.',
    discount: 'BEST PRICE',
  },
];

export const CATEGORIES = ['Luxury Villas', 'Family Villas', 'Pool Villas'];
export const LOCATION_FILTERS = ['Mahabaleshwar', 'Panchgani', 'Lonavala'];
