export interface Product {
  sku: number;
  name: string;
  image: string;
}

export interface Price {
  sku: number;
  price: number;
  discount: number;
}

export interface ProductWithPrice {
  sku: number;
  name: string;
  image: string;
  price: number;
  discount: number;
}
