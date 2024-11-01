export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  type: 'sale' | 'rent';
  images: string[];
  featured: boolean;
  amenities: string[];
  createdAt: string;
}

export interface User {
  id: string;
  email: string;
  role: 'admin' | 'user';
  name: string;
}