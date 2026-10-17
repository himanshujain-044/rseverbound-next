import {
  Product,
  OurApplication,
  Feature,
  FutureScopeItem,
} from './src/app/types/home-types';

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

export const OurApplications: OurApplication[] = [
  {
    id: 1,
    icon: 'hospital',
    title: 'Hospitals & high-rise buildings',
    description:
      'For high-occupancy or poorly ventilated areas where smoke inhalation is a major risk.',
    wire: 'ZHFR HOUSE WIRE',
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
    iconPaths: [
      'M15 11h6v10h-6M7 11h4M7 15h4M7 19h4M8 7V4h3v3M18 15h.01M18 18h.01',
    ],
  },
];
export const feature: Feature[] = [
  {
    id: 1,
    title: 'Guaranteed coil length',
    description:
      'Every coil is supplied with a guaranteed length, so you can plan and purchase with confidence.',
    iconPaths: ['M20 6 9 17l-5-5'],
  },
  {
    id: 2,
    title: 'High-purity electrolytic copper',
    description:
      'High-purity electrolytic copper helps minimize resistance and heat buildup, enhancing electrical conductivity.',
    iconPaths: ['M13 2 3 14h9l-1 8 10-12h-9l1-8Z'],
  },
  {
    id: 3,
    title: 'Focused product range',
    description:
      'We offer PVC wires, aluminium wires, house wires, and multistrand wires for common electrical installation needs.',
    iconPaths: ['m12 3 9 5-9 5-9-5 9-5Z', 'm3 12 9 5 9-5', 'm3 16 9 5 9-5'],
  },
];

export const futureScope: FutureScopeItem[] = [
  {
    id: 1,
    title: 'Enhanced safety standards',
    description:
      'Expand the product range with advanced flame-retardant and low-smoke cable solutions.',
    iconPaths: ['M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z', 'm9 12 2 2 4-4'],
  },
  {
    id: 2,
    title: 'Sustainable manufacturing',
    description:
      'Explore responsible material sourcing, recyclable packaging, and efficient manufacturing processes.',
    iconPaths: [
      'M11 20A7 7 0 0 1 4 13c0-6 8-9 16-9 0 8-3 16-9 16Z',
      'M8 16c2-3 5-5 9-7',
    ],
  },
  {
    id: 3,
    title: 'Broader market reach',
    description:
      'Explore new distribution partnerships and expand access to residential, commercial, and infrastructure projects.',
    iconPaths: ['M3 3v18h18', 'm19 9-5 5-4-4-5 5'],
  },
];