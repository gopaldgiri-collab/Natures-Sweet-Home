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
  metadataBase: new URL("https://www.naturesweethomes.com"),

  title: {
    default:
      "Natures Sweet Homes | Luxury Villas in Panchgani, Mahabaleshwar & Lonavala",
    template: "%s | Natures Sweet Homes",
  },

  description:
    "Luxury private villas and holiday homes in Panchgani, Mahabaleshwar and Lonavala. Private pools, mountain views and professionally managed stays.",

  keywords: [
    "Luxury Villas Panchgani",
    "Luxury Villas Mahabaleshwar",
    "Luxury Villas Lonavala",
    "Private Pool Villas",
    "Holiday Homes Maharashtra",
    "Weekend Villas Near Pune",
    "Weekend Villas Near Mumbai",
    "Natures Sweet Homes",
    "Villas in Panchgani",
    "Villas in Mahabaleshwar",
    "Villas in Lonavala"
  ],

  authors: [
    {
      name: "Natures Sweet Homes",
    },
  ],

  creator: "Natures Sweet Homes",
  publisher: "Natures Sweet Homes",

  alternates: {
    canonical: "https://www.naturesweethomes.com",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  openGraph: {
    title:
      "Natures Sweet Homes | Luxury Villas in Panchgani, Mahabaleshwar & Lonavala",
    description:
      "Luxury private villas, mountain retreats and private pool stays across Maharashtra.",

    url: "https://www.naturesweethomes.com",
    siteName: "Natures Sweet Homes",
    locale: "en_IN",
    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Natures Sweet Homes",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Natures Sweet Homes | Luxury Villas in Panchgani, Mahabaleshwar & Lonavala",
    description:
      "Luxury private villas and holiday homes across Maharashtra.",

    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/circlelogo2.png",
    shortcut: "/circlelogo2.png",
    apple: "/circlelogo2.png",
  },
 verification: {
    google: "5PsMk4dzsE1IkHdUULCyzqS3o_eM-VqZBYVvmZxUkUw",
    pinterest: "de300e9fa952ce6e086535a8bc1519ca",
  },
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
    image: 'https://www.naturesweethomes.com/og-image.png',
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

