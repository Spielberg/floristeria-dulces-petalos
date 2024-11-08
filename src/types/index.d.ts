export interface Product {
  id: string;
  name: string;
  binomialName: string;
  price: number;
  imgUrl: string;
  wateringsPerWeek: number;
  fertilizerType: 'nitrogen' | 'phosphorus';
  heightInCm: number;
}

export interface BreadcrumbLink {
  to: string;
  label: string;
}

export type ProductsApiResponse = Product[];
export type ProductApiResponse = Product;