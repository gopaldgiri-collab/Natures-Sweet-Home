import { notFound } from 'next/navigation';
import { VILLAS, CONTACT } from '@/lib/site-data';
import VillaDetailClient from './VillaDetailClient';

export async function generateStaticParams() {
  return VILLAS.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const villa = VILLAS.find((v) => v.slug === slug);
  if (!villa) {
    return {
      title: "Villa Not Found \u2014 Natures Sweet Homes",
      description: "The villa you are looking for could not be found.",
    };
  }
  const title = villa.seoTitle || `${villa.name} \u2014 ${villa.tagline || villa.location} | Natures Sweet Homes`;
  const description = villa.seoDescription || villa.description.slice(0, 160);
  const url = `${CONTACT.websiteUrl || 'https://www.naturesweethomes.com'}/villas/${villa.slug}`;
  const keywords = [
    villa.name,
    villa.tagline,
    `Villa in ${villa.location}`,
    `${villa.bedrooms}BHK Villa in ${villa.location}`,
    villa.pool ? `Private Pool Villa in ${villa.location}` : null,
    `Luxury Villa in ${villa.location}`,
    `Holiday Home in ${villa.location}`,
    `Villas in ${villa.area || villa.location}`,
    'Natures Sweet Homes',
    'Panchgani villa rental',
    'Mahabaleshwar villa booking',
    'Weekend getaway near Pune Mumbai',
  ].filter(Boolean).join(', ');

  return {
    title: { absolute: title },
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      siteName: "Natures Sweet Homes",
      images: [{ url: villa.cover, width: 1200, height: 800, alt: villa.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [villa.cover],
    },
    robots: { index: true, follow: true },
  };
}

export default async function VillaPage({ params }) {
  const { slug } = await params;
  const villa = VILLAS.find((v) => v.slug === slug);
  if (!villa) return notFound();

  const ldJson = {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    name: villa.name,
    description: villa.description,
    image: villa.gallery,
    address: {
      '@type': 'PostalAddress',
      addressLocality: villa.area || villa.location,
      addressRegion: 'Maharashtra',
      addressCountry: 'IN',
    },
    telephone: CONTACT.phone,
    email: CONTACT.email,
    url: `${CONTACT.websiteUrl}/villas/${villa.slug}`,
    amenityFeature: villa.amenities.map((a) => ({ '@type': 'LocationFeatureSpecification', name: a })),
    numberOfRooms: villa.bedrooms,
    occupancy: { '@type': 'QuantitativeValue', maxValue: villa.occupancy },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '24' },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
      />
      <VillaDetailClient slug={slug} />
    </>
  );
}
