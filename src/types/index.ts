export interface Product {
  id: number;
  name: string;
  category: string;
  specs: string;
  price: number;
  image: string;
  label: string;
}

export interface CartItem {
  id: number;
  quantity: number;
}
