export interface Product {
  title: string;
  description: string;
  pictures: string[];
  id: string;
  price: number;
  category: Category;
  brand: Brand;
  state: string;
  createdAt: Date;
  availability: Availability;
  city: string;
  averageStar: number;
}

export interface Availability {
  available: boolean;
  type: string;
  feed?: number;
}
export interface Brand {
  name: string;
  logo?: string;
  site?: string;
}

export interface Category {
  title: string;
  description?: string;
  icon?: string;
}
