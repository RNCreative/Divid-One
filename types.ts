export interface Project {
  id: string;
  title: string;
  description: string;
  image: string; // URL path
  category: 'Particulier' | 'Zakelijk';
  fullDescription?: string;
  gallery?: string[];
  location?: string;
  year?: string;
  tags?: string[];
}

export interface BrandInfo {
  name: string;
  description: string;
  website?: string;
}

export interface ServiceCategory {
  id: 'particulier' | 'zakelijk';
  title: string;
  intro: string;
  features: string[];
  brands: BrandInfo[];
  image: string;
}

export interface NavItem {
  label: string;
  path: string;
}