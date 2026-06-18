import './globals.css';
import { Toaster } from '@/components/ui/sonner';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import WhatsAppFloat from '@/components/site/WhatsAppFloat';
import TopBar from '@/components/site/TopBar';
import Providers from "./providers";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export const metadata = {
  metadataBase: new URL("https://www.naturesweethomes.com"),

  title: {
    default:
      "Natures Sweet Homes | Luxury Villas in Mahabaleshwar, Panchgani & Lonavala",
    template: "%s | Natures Sweet Homes",
  },

  description:
    "Luxury private villas and holiday homes in Mahabaleshwar, Panchgani and Lonavala. Private pools, mountain views and professionally managed stays.",

  keywords: [
    "Luxury Villas Mahabaleshwar",
  "Private Pool Villas Mahabaleshwar",
  "Luxury Villas Panchgani",
  "Private Pool Villas Panchgani",
  "Luxury Villas Lonavala",
  "Holiday Homes Maharashtra",
  "Weekend Villas Near Pune",
  "Weekend Villas Near Mumbai",
  "Villas in Mahabaleshwar",
  "Villas in Panchgani",
  "Villas in Lonavala",
  "Luxury Villa Booking Maharashtra",
  "Family Villas Maharashtra",
  "Group Villas Maharashtra",
  "Natures Sweet Homes"
  ],

  authors: [
    {
      name: "Natures Sweet Homes",
    },
  ],

  creator: "Natures Sweet Homes",
  publisher: "Natures Sweet Homes",
 applicationName: "Natures Sweet Homes",
category: "Travel",
referrer: "origin-when-cross-origin",
themeColor: "#2FA56E", 
formatDetection: {
  email: true,
  address: true,
  telephone: true,
},


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
      "Natures Sweet Homes | Luxury Villas in Mahabaleshwar, Panchgani & Lonavala",
    description:
      "Book luxury private pool villas and holiday homes in Mahabaleshwar, Panchgani and Lonavala. Professionally managed stays with mountain views, premium amenities and unforgettable experiences in Maharashtra.",

    url: "https://www.naturesweethomes.com",
    siteName: "Natures Sweet Homes",
    locale: "en_IN",
    type: "website",

    images: [
      {
        url: "https://www.naturesweethomes.com/og-image3.jpg ",
        width: 1200,
        height: 630,
        alt: "Natures Sweet Homes",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Natures Sweet Homes | Luxury Villas in Mahabaleshwar, Panchgani & Lonavala",
    description:
      "Luxury private villas and holiday homes across Maharashtra.",

    images: ["/og-image.jpg"],
  },

  icons: {
  icon: [
    {
      url: "/circlelogo.png",
      sizes: "32x32",
      type: "image/png",
    },
  ],
 manifest: "/site.webmanifest",
  shortcut: "/circlelogo.png",
  apple: "/circlelogo.png",
},
 verification: {
    google: "5PsMk4dzsE1IkHdUULCyzqS3o_eM-VqZBYVvmZxUkUw",
    pinterest: "de300e9fa952ce6e086535a8bc1519ca",
  },
};
export default function RootLayout({ children }) {
const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'VacationRental',

  name: 'Natures Sweet Homes',

  url: 'https://naturessweethomes.com',

  logo:
    'https://naturessweethomes.com/circlelogo.png',

  image:
    'https://naturessweethomes.com/og-image3.jpg',

  telephone: '+918010368931',

  email: 'naturesweethomes@gmail.com',

  priceRange: '₹₹₹',

  description:
    'Luxury private villas and holiday homes in Mahabaleshwar, Panchgani and Lonavala.',

  geo: {
    '@type': 'GeoCoordinates',
    latitude: '17.9239',
    longitude: '73.7315',
  },

  areaServed: [
    {
      '@type': 'City',
      name: 'Mahabaleshwar',
    },
    {
      '@type': 'City',
      name: 'Panchgani',
    },
    {
      '@type': 'City',
      name: 'Lonavala',
    },
  ],

  address: {
    '@type': 'PostalAddress',
    streetAddress:
      'M. No. 551, At. Post Bhilar, Tal. Mahabaleshwar, Dist. Satara',
    addressLocality:
      'Panchgani',
    addressRegion:
      'Maharashtra',
    postalCode:
      '412805',
    addressCountry:
      'India',
  },

  aggregateRating: {
    '@type':
      'AggregateRating',
    ratingValue:
      '4.9',
    reviewCount:
      '200',
  },
};
return (
<html lang="en-IN">
<head>
<meta
name="p:domain_verify"
content="de300e9fa952ce6e086535a8bc1519ca"
/>
</head>

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


