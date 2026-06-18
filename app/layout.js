import './globals.css';
import { Toaster } from '@/components/ui/sonner';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import WhatsAppFloat from '@/components/site/WhatsAppFloat';
import TopBar from '@/components/site/TopBar';
import Providers from "./providers";
import './globals.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export const metadata = {
  metadataBase: new URL('https://www.naturesweethomes.com'),
  title: {
    default: "Natures Sweet Homes — Luxury Private Villas in Panchgani, Mahabaleshwar & Lonavala",
    template: "%s | Natures Sweet Homes",
  },
  description:
    'Professionally managed luxury private villas and holiday homes in Panchgani, Mahabaleshwar and Lonavala. Boutique pool villas, hotel-grade service, WhatsApp-first booking. Your Comfort, Our Priority.',
  keywords:
    'villa rental Panchgani, luxury villa Mahabaleshwar, pool villa Lonavala, holiday home rental Maharashtra, weekend villa Mumbai Pune, villas near Mapro Garden, Bhilar villa, private pool villa Panchgani, Natures Sweet Homes',
  alternates: { canonical: 'https://www.naturesweethomes.com' },
other: {
  "p:domain_verify": "de300e9fa952ce6e086535a8bc1519ca",
},
  openGraph: {
    title: "Natures Sweet Homes — Luxury Villas in the Sahyadris",
    description: 'Boutique luxury villas with private pools, manicured gardens and hotel-grade hospitality in Panchgani. Book direct on WhatsApp.',
    url: 'https://www.naturesweethomes.com',
    siteName: "Natures Sweet Homes",
    type: 'website',
    locale: 'en_IN',
  },
  twitter: { card: 'summary_large_image', title: "Natures Sweet Homes — Luxury Villas in the Sahyadris", description: 'Boutique luxury villas with private pools and hotel-grade hospitality. Book direct on WhatsApp.' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    name: "Natures Sweet Homes",
    description: 'Professionally managed luxury private villas and holiday homes in Panchgani, Mahabaleshwar and Lonavala.',
    url: 'https://www.naturesweethomes.com',
    telephone: '+918010368931',
    email: 'naturesweethomes@gmail.com',
    image: 'https://www.naturesweethomes.com/logo.png',
	address: {
  '@type': 'PostalAddress',
  streetAddress: 'M. No. 551, At. Post Bhilar, Tal. Mahabaleshwar, Dist. Satara',
  addressLocality: 'Panchgani',
  addressRegion: 'Maharashtra',
  postalCode: '412805',
  addressCountry: 'India'
},
    sameAs: ['https://www.instagram.com/naturessweethomes', 'https://www.facebook.com/share/15E4azKoTg/', 'https://g.co/kgs/bqVpxYE'],
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '200' },
  };
return (
  <html lang="en">
    <body className="bg-background text-foreground antialiased">
      <Providers>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(orgJsonLd),
          }}
        />

        <TopBar />
        <Header />

        <main className="min-h-screen">
          {children}
        </main>

        <Footer />
        <WhatsAppFloat />
        <Toaster richColors position="top-right" />
      </Providers>
    </body>
  </html>
);
}

