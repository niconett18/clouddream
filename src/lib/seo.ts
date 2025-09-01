import { Metadata } from 'next';

export const defaultSEO: Metadata = {
  title: {
    template: '%s | DD Pillow',
    default: 'DD Pillow | Premium Pillows and Bolsters'
  },
  description: "Experience ultimate comfort with DD Pillow's premium range of pillows and bolsters. Handcrafted with quality materials for a better night's sleep.",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ddpillow.com/',
    siteName: 'DD Pillow',
    images: [
      {
        url: 'https://ddpillow.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DD Pillow - Premium Pillows and Bolsters',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@ddpillow',
    site: '@ddpillow',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export const productJsonLd = (product: {
  name: string;
  description: string;
  images: string[];
  sku: string;
  price?: number;
  url: string;
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.images.map(img => `https://ddpillow.com${img}`),
    sku: product.sku,
    ...(product.price && {
      offers: {
        '@type': 'Offer',
        price: product.price,
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: `https://ddpillow.com${product.url}`,
      },
    }),
  };
};

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'DD Pillow',
  url: 'https://ddpillow.com',
  logo: 'https://ddpillow.com/logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-555-123-4567',
    contactType: 'customer service',
    availableLanguage: ['English'],
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Comfort Lane',
    addressLocality: 'Sleep City',
    addressRegion: 'CA',
    postalCode: '90210',
    addressCountry: 'US',
  },
  sameAs: [
    'https://www.facebook.com/ddpillow',
    'https://www.instagram.com/ddpillow',
    'https://twitter.com/ddpillow',
  ],
};
