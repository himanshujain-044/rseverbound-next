

export type OurApplicationIcon = 'hospital' | 'store' | 'building';

export interface OurApplication {
  id: number;
  icon: 'hospital' | 'store' | 'building';
  title: string;
  description: string;
  wire: string;
  iconPaths: string[];
}

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

export interface Feature {
  id: number;
  title: string;
  description: string;
  iconPaths: string[];
}

export interface FutureScopeItem {
  id: number;
  title: string;
  description: string;
  iconPaths: string[];
}

