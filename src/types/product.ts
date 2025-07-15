
export interface Product {
  id: number;
  name: string;
  description: string;
  price?: number;
  image: string;
  category: string;
  size?: string;
  toppings?: string[];
  popular?: boolean;
  calories?: number;
  vegan?: boolean;
  rating?: number; // média de avaliações
  reviews?: number; // quantidade de avaliações
  videoUrl?: string; // vídeo curto de preparo
  variants?: Array<{
    size: string;
    description: string;
    price: number;
  }>;
}

export interface CartItem extends Product {
  quantity: number;
  selectedToppings?: string[];
}
