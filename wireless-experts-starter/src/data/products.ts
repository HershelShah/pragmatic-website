// Product data for search and listings
// Add new products here as they become available

export interface Product {
  id: string;
  name: string;
  title: string;
  category: string;
  categorySlug: string;
  description: string;
  image: string;
  url: string;
  badge?: string;
  specs: Record<string, string>;
  keywords: string[];
  available: boolean;
  showInGrid?: boolean; // false = only searchable, not shown in product grids
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  badge?: string;
}

export const categories: Category[] = [
  {
    name: 'Laser Projectors',
    slug: 'laser-projectors',
    description: 'Professional-grade laser projectors for digital signage and large venue applications.',
    badge: 'Pragmatic Signage'
  },
  {
    name: 'Medical Displays',
    slug: 'medical-displays',
    description: 'DICOM calibrated medical and dental imaging monitors for healthcare facilities.',
    badge: 'Pragmatic Healthcare'
  },
  {
    name: 'Line Array Speakers',
    slug: 'line-array-speakers',
    description: 'Compact high-performance line array speakers with Defined Acoustical Coverage.',
    badge: 'PHA Series'
  }
];

export const products: Product[] = [
  {
    id: 'plp-hd63',
    name: 'PLP-HD63',
    title: 'PLP-HD63 Laser Projector',
    category: 'Laser Projectors',
    categorySlug: 'laser-projectors',
    description: 'Professional 6200 lumen WUXGA laser projector designed for digital signage. Features 20,000 hour lifespan, 24/7 operation capability.',
    image: '/images/products/laser-projectors/plp-hd63/plp-hd63-front.webp',
    url: '/products/laser-projectors/plp-hd63',
    badge: 'Pragmatic Signage',
    specs: {
      brightness: '6200 ANSI lumens',
      resolution: 'WUXGA (1920x1200)',
      lifespan: '20,000 hours',
      technology: '3-LCD'
    },
    keywords: [
      'laser', 'projector', 'digital signage', 'WUXGA', '6200 lumens',
      '3-LCD', 'HDBaseT', 'signage', 'display', 'video',
      'hospital', 'retail', 'hotel', 'mall', 'museum', 'corporate'
    ],
    available: true,
    showInGrid: true
  },
  {
    id: 'pvp-72a',
    name: 'PVP-72A',
    title: 'PVP-72A Laser Projector with Android',
    category: 'Laser Projectors',
    categorySlug: 'laser-projectors',
    description: 'Smart 7200 lumen WUXGA laser projector with built-in Android OS. WiFi, Bluetooth, 20,000 hour lifespan.',
    image: '/images/products/laser-projectors/pvp-72a/pvp-72a-front.webp',
    url: '/products/laser-projectors/pvp-72a',
    badge: 'Pragmatic Signage',
    specs: {
      brightness: '7200 lumens',
      resolution: 'WUXGA (1920x1200)',
      lifespan: '20,000 hours',
      os: 'Android Built-in'
    },
    keywords: [
      'laser', 'projector', 'digital signage', 'WUXGA', '7200 lumens',
      'DLP', 'android', 'smart', 'wifi', 'bluetooth', 'wireless',
      'signage', 'display', 'video', 'standalone'
    ],
    available: true,
    showInGrid: true
  },
  {
    id: 'pim-21b',
    name: 'PIM-21B',
    title: 'PIM-21B Medical Imaging Monitor',
    category: 'Medical Displays',
    categorySlug: 'medical-displays',
    description: '21.5" DICOM calibrated medical/dental imaging monitor. Full HD 1920x1080, 3-year warranty.',
    image: '/images/products/medical-displays/pim-21b/pim-21b-front.webp',
    url: '/products/medical-displays/pim-21b',
    badge: 'Pragmatic Healthcare',
    specs: {
      size: '21.5"',
      resolution: '1920 x 1080',
      calibration: 'DICOM',
      warranty: '3 years'
    },
    keywords: [
      'medical', 'monitor', 'display', 'DICOM', 'dental', 'imaging',
      'x-ray', 'radiology', 'healthcare', 'hospital', 'clinic',
      'LED', 'LCD', 'diagnostic'
    ],
    available: true,
    showInGrid: true
  },
  {
    id: 'pha-4',
    name: 'PHA-4',
    title: 'PHA-4 Line Array Speaker',
    category: 'Line Array Speakers',
    categorySlug: 'line-array-speakers',
    description: 'Compact 9" line array speaker with 48W max power. 2" x 2" footprint with DAC technology.',
    image: '/images/products/line-array-speakers/pha-series.webp',
    url: '/products/line-array-speakers',
    badge: 'PHA Series',
    specs: {
      power: '48W max',
      sensitivity: '83dB @ 1W/1m',
      dimensions: '9" x 2" x 2"'
    },
    keywords: [
      'speaker', 'line array', 'audio', 'PA', 'sound', 'compact',
      'DAC', 'directional', 'commercial', 'retail', 'hospitality'
    ],
    available: true,
    showInGrid: false
  },
  {
    id: 'pha-8',
    name: 'PHA-8',
    title: 'PHA-8 Line Array Speaker',
    category: 'Line Array Speakers',
    categorySlug: 'line-array-speakers',
    description: '18.5" line array speaker with 96W max power. High sensitivity 87dB for medium coverage.',
    image: '/images/products/line-array-speakers/pha-series.webp',
    url: '/products/line-array-speakers',
    badge: 'PHA Series',
    specs: {
      power: '96W max',
      sensitivity: '87dB @ 1W/1m',
      dimensions: '18.5" x 2" x 2"'
    },
    keywords: [
      'speaker', 'line array', 'audio', 'PA', 'sound',
      'DAC', 'directional', 'commercial', 'conference', 'worship'
    ],
    available: true,
    showInGrid: false
  },
  {
    id: 'pha-184',
    name: 'PHA-184',
    title: 'PHA-184 Line Array Speaker',
    category: 'Line Array Speakers',
    categorySlug: 'line-array-speakers',
    description: '18" line array speaker with 48W max power. Dual-ported design with 360° sound dispersion for home theater and digital signage.',
    image: '/images/products/line-array-speakers/pha-series.webp',
    url: '/products/line-array-speakers',
    badge: 'PHA Series',
    specs: {
      power: '48W max',
      sensitivity: '84dB @ 1W/1m',
      dimensions: '18" x 2" x 2"'
    },
    keywords: [
      'speaker', 'line array', 'audio', 'PA', 'sound',
      'DAC', 'directional', 'home theater', 'digital signage', 'plasma', 'LCD'
    ],
    available: true,
    showInGrid: false
  },
  {
    id: 'pha-16',
    name: 'PHA-16',
    title: 'PHA-16 Line Array Speaker',
    category: 'Line Array Speakers',
    categorySlug: 'line-array-speakers',
    description: '25" line array speaker with 192W max power. Available in black, white, or silver.',
    image: '/images/products/line-array-speakers/pha-series.webp',
    url: '/products/line-array-speakers',
    badge: 'PHA Series',
    specs: {
      power: '192W max',
      sensitivity: '94dB @ 1W/1m',
      dimensions: '25" x 2" x 2"'
    },
    keywords: [
      'speaker', 'line array', 'audio', 'PA', 'sound', 'high power',
      'DAC', 'directional', 'stadium', 'arena', 'theater'
    ],
    available: true,
    showInGrid: false
  },
  {
    id: 'pha-25',
    name: 'PHA-25',
    title: 'PHA-25 Line Array Speaker',
    category: 'Line Array Speakers',
    categorySlug: 'line-array-speakers',
    description: '42" line array speaker with 288W max power. Large venue coverage.',
    image: '/images/products/line-array-speakers/pha-series.webp',
    url: '/products/line-array-speakers',
    badge: 'PHA Series',
    specs: {
      power: '288W max',
      sensitivity: '96dB @ 1W/1m',
      dimensions: '42" x 2" x 2"'
    },
    keywords: [
      'speaker', 'line array', 'audio', 'PA', 'sound', 'high power',
      'DAC', 'directional', 'stadium', 'arena', 'large venue'
    ],
    available: true,
    showInGrid: false
  },
  {
    id: 'pha-264',
    name: 'PHA-264',
    title: 'PHA-264 Line Array Speaker',
    category: 'Line Array Speakers',
    categorySlug: 'line-array-speakers',
    description: '26" line array speaker with 48W max power. Efficient design for extended coverage.',
    image: '/images/products/line-array-speakers/pha-series.webp',
    url: '/products/line-array-speakers',
    badge: 'PHA Series',
    specs: {
      power: '48W max',
      sensitivity: '84dB @ 1W/1m',
      dimensions: '26" x 2" x 2"'
    },
    keywords: [
      'speaker', 'line array', 'audio', 'PA', 'sound',
      'DAC', 'directional', 'transport', 'station', 'airport'
    ],
    available: true,
    showInGrid: false
  },
  {
    id: 'pha-5125',
    name: 'PHA-5125',
    title: 'PHA-5125 Line Array Speaker',
    category: 'Line Array Speakers',
    categorySlug: 'line-array-speakers',
    description: '51" line array speaker with 288W max power. Maximum coverage for large installations.',
    image: '/images/products/line-array-speakers/pha-series.webp',
    url: '/products/line-array-speakers',
    badge: 'PHA Series',
    specs: {
      power: '288W max',
      sensitivity: '94dB @ 1W/1m',
      dimensions: '51" x 2" x 2"'
    },
    keywords: [
      'speaker', 'line array', 'audio', 'PA', 'sound', 'high power',
      'DAC', 'directional', 'stadium', 'arena', 'large venue', 'sports'
    ],
    available: true,
    showInGrid: false
  }
];

// Helper function to search products
export function searchProducts(query: string): Product[] {
  if (!query.trim()) {
    return products.filter(p => p.available);
  }

  const searchTerms = query.toLowerCase().split(/\s+/);

  return products.filter(product => {
    if (!product.available) return false;

    const searchableText = [
      product.name,
      product.title,
      product.category,
      product.description,
      ...product.keywords,
      ...Object.values(product.specs)
    ].join(' ').toLowerCase();

    return searchTerms.every(term => searchableText.includes(term));
  });
}
