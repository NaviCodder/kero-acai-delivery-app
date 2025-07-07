
import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: 1,
    name: "Açaí Tradicional",
    description: "Açaí puro batido na hora com a cremosidade perfeita",
    price: 8.90,
    image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=400&fit=crop&crop=center",
    category: "acai",
    size: "300ml",
    popular: true
  },
  {
    id: 2,
    name: "Açaí com Granola",
    description: "Açaí tradicional com granola crocante e banana",
    price: 12.90,
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=400&fit=crop&crop=center",
    category: "acai",
    size: "400ml",
    toppings: ["granola", "banana"],
    popular: true
  },
  {
    id: 3,
    name: "Açaí Premium",
    description: "Açaí especial com frutas variadas, granola e mel",
    price: 16.90,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=400&fit=crop&crop=center",
    category: "acai",
    size: "500ml",
    toppings: ["granola", "banana", "morango", "mel", "coco"]
  },
  {
    id: 4,
    name: "Bowl Fitness",
    description: "Açaí com proteína, aveia, frutas e pasta de amendoim",
    price: 18.90,
    image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=400&h=400&fit=crop&crop=center",
    category: "fitness",
    size: "500ml",
    toppings: ["proteína", "aveia", "pasta de amendoim", "banana"]
  },
  {
    id: 5,
    name: "Smoothie de Açaí",
    description: "Bebida refrescante de açaí com frutas vermelhas",
    price: 10.90,
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=400&fit=crop&crop=center",
    category: "bebida",
    size: "400ml"
  },
  {
    id: 6,
    name: "Açaí Zero Açúcar",
    description: "Açaí diet adoçado naturalmente com stevia",
    price: 14.90,
    image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=400&h=400&fit=crop&crop=center",
    category: "diet",
    size: "400ml",
    toppings: ["granola sem açúcar", "frutas vermelhas"]
  }
];
