import { Metadata } from 'next';

export const defaultSEO: Metadata = {
  title: {
    template: '%s | Cloudream',
    default: 'Cloudream | Premium Pillows and Bolsters'
  },
  description: "Experience ultimate comfort with Cloudream's premium range of pillows and bolsters. Handcrafted with quality materials for a better night's sleep.",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://clouddream.com/',
    siteName: 'Cloudream',
    images: [
      {
        url: 'https://clouddream.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Cloudream - Premium Pillows and Bolsters',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@clouddream',
    site: '@clouddream',
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
    image: product.images.map(img => `https://clouddream.com${img}`),
    sku: product.sku,
    ...(product.price && {
      offers: {
        '@type': 'Offer',
        price: product.price,
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: `https://clouddream.com${product.url}`,
      },
    }),
  };
};

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Cloudream',
  url: 'https://clouddream.com',
  logo: 'https://clouddream.com/logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+62-21-1234-5678',
    contactType: 'customer service',
    availableLanguage: ['Indonesian'],
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Jl. Kenyamanan No. 123',
    addressLocality: 'Kota Tidur',
    addressRegion: 'Jakarta',
    postalCode: '12345',
    addressCountry: 'ID',
  },
  sameAs: [
    'https://www.facebook.com/clouddream',
    'https://www.instagram.com/clouddream',
    'https://twitter.com/clouddream',
  ],
};
