
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  size?: string;
  toppings?: string[];
  popular?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
  selectedToppings?: string[];
}
