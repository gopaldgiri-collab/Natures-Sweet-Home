import HomePageClient from "./HomePageClient";
import Image from "next/image";

export const metadata = {
  title:
    "Luxury Villas in Mahabaleshwar, Panchgani & Lonavala | Natures Sweet Homes",

  description:
    "Book luxury private pool villas and holiday homes in Mahabaleshwar, Panchgani and Lonavala. Professionally managed stays with mountain views, premium amenities and unforgettable experiences in Maharashtra.",

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

  alternates: {
    canonical:
      "https://naturessweethomes.com",
  },

  openGraph: {
    title:
      "Luxury Villas in Mahabaleshwar, Panchgani & Lonavala | Natures Sweet Homes",

    description:
      "Luxury private pool villas and holiday homes in Maharashtra.",

    url:
      "https://naturessweethomes.com",

    type: "website",

    images: [
      {
        url:
          "https://naturessweethomes.com/images/hero/hero1.webp",
        width: 1200,
        height: 630,
        alt:
          "Luxury Villas in Mahabaleshwar Panchgani and Lonavala",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Luxury Villas in Mahabaleshwar, Panchgani & Lonavala | Natures Sweet Homes",

    description:
      "Luxury private villas and holiday homes across Maharashtra.",

    images: [
      "https://naturessweethomes.com/images/hero/hero1.webp",
    ],
  },
};

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name:
          "Which are the best luxury villas in Mahabaleshwar?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Natures Sweet Homes offers professionally managed luxury private villas and holiday homes in Mahabaleshwar, Panchgani and Lonavala."
        }
      },
      {
        "@type": "Question",
        name:
          "Do your villas have private swimming pools?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. Several of our villas offer private pools, mountain views and premium amenities."
        }
      },
      {
        "@type": "Question",
        name:
          "Are the villas suitable for families and groups?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. Our villas are ideal for families, friends, celebrations, corporate offsites and weekend getaways."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            faqSchema
          ),
        }}
      />

      <HomePageClient />
    </>
  );
}
