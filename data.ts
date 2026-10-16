export interface Product {
  id: number;
  category: string;
  label: string;
  title: string;
  description: string;
  coil: string;
  size: string;
  primaryUse: string;
  priceLabel: string;
  priceRange: string;
  image: string;
}

export interface Application {
  id: number;
  icon: 'hospital' | 'store' | 'building';
  title: string;
  description: string;
  wire: string;
  iconPaths: string[];
  iconRect?: {
    x: number;
    y: number;
    width: number;
    height: number;
    rx?: number;
  };
}

export const categories = [
  'House Wires',
  'ZHFR Wires',
  'Flame-Retardant Cables',
  'FRLSH Wires',
  'Building Wires',
  'Coaxial Cables',
];

export const productFilters = [
  'All products',
  'Zero Halogen Flame Retardant',
  'Flame Retardant Low Smoke',
  'Flame Retardant',
];

export const products: Product[] = [
  {
    id: 1,
    category: 'Zero Halogen Flame Retardant',
    label: 'MULTISTRAND HOUSE WIRE',
    title: 'ZHFR - Zero Halogen Flame Retardant',
    description: 'No toxic halogen gases or dense black smoke in a fire.',
    coil: '90m',
    size: '1.0mm – 1.5mm',
    primaryUse: 'Hospitals, high-rise buildings, malls, and theaters.',
    priceLabel: 'Indicative price range',
    priceRange: '₹1,800 – ₹2,400 per 90m coil · 1.0mm – 1.5mm',
    image: '/products/product-img-1.png',
  },
  {
    id: 2,
    category: 'Flame Retardant Low Smoke',
    label: 'MULTISTRAND HOUSE WIRE',
    title: 'FRLSH - Flame Retardant Low Smoke',
    description:
      'Designed to resist catching fire, with less smoke and hydrochloric acid than standard wires.',
    coil: '90m',
    size: '1.0mm – 1.5mm',
    primaryUse: 'Residential apartments and offices.',
    priceLabel: 'Indicative price range',
    priceRange: '₹1,400 – ₹2,100 per 90m coil · 1.0mm – 1.5mm',
    image: '/products/product-img-2.png',
  },
  {
    id: 3,
    category: 'Flame Retardant',
    label: 'MULTISTRAND HOUSE WIRE',
    title: 'Flame Retardant',
    description: 'Contact us to discuss your wiring requirements.',
    coil: '90m',
    size: '1.0mm – 1.5mm',
    primaryUse: 'Enquire for application details.',
    priceLabel: 'Indicative price range',
    priceRange: 'Confirm current price before ordering.',
    image: '/products/product-img-3.png',
  },
];

export const applications: Application[] = [
  {
    id: 1,
    icon: 'hospital',
    title: 'Hospitals & high-rise buildings',
    description:
      'For high-occupancy or poorly ventilated areas where smoke inhalation is a major risk.',
    wire: 'ZHFR HOUSE WIRE',
    iconRect: { x: 3, y: 7, width: 14, height: 14, rx: 2 },
    iconPaths: ['M10 3v8M6 7h8M8 21v-5h4v5M17 11h4v10h-4'],
  },
  {
    id: 2,
    icon: 'store',
    title: 'Malls & theaters',
    description:
      'Zero halogen flame retardant wire for spaces where smoke inhalation is a concern.',
    wire: 'ZHFR HOUSE WIRE',
    iconPaths: [
      'M3 10l2-6h14l2 6M4 10v10h16V10',
      'M4 10a3 3 0 006 0 3 3 0 006 0 3 3 0 006 0M9 20v-5h6v5',
    ],
  },
  {
    id: 3,
    icon: 'building',
    title: 'Apartments & offices',
    description:
      'For modern residential apartments and offices, balancing safety and cost.',
    wire: 'FRLSH HOUSE WIRE',
    iconRect: { x: 3, y: 7, width: 12, height: 14, rx: 1 },
    iconPaths: [
      'M15 11h6v10h-6M7 11h4M7 15h4M7 19h4M8 7V4h3v3M18 15h.01M18 18h.01',
    ],
  },
];
