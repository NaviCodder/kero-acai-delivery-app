
import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: 10,
    name: "Açaí no Copo – Misto",
    description: "Açaí com mix, cremoso e refrescante.",
    image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=400&fit=crop&crop=center",
    category: "acai-misto",
    variants: [
      { size: "300 ml", description: "Açaí com mix", price: 23.99 },
      { size: "400 ml", description: "Açaí com mix", price: 27.99 },
      { size: "500 ml", description: "Açaí com mix", price: 32.99 },
      { size: "700 ml", description: "Açaí com mix", price: 30.99 },
    ],
    calories: 220,
    vegan: false,
    rating: 4.8,
    reviews: 41
  },
  {
    id: 11,
    name: "Açaí Puro – Natural",
    description: "Açaí 100% puro, sem misturas.",
    image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=400&h=400&fit=crop&crop=center",
    category: "acai-puro",
    variants: [
      { size: "300 ml", description: "Açaí 100% puro", price: 17.99 },
      { size: "400 ml", description: "Açaí 100% puro", price: 20.99 },
      { size: "500 ml", description: "Açaí 100% puro", price: 24.99 },
    ],
    calories: 180,
    vegan: true,
    rating: 4.9,
    reviews: 37
  },
  {
    id: 12,
    name: "Coca-Cola Original",
    description: "Refrigerante Coca-Cola Original lata.",
    image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?w=400&h=400&fit=crop&crop=center",
    category: "refrigerante",
    variants: [
      { size: "350 ml lata", description: "Coca-Cola Original", price: 8.99 }
    ]
  },
  {
    id: 13,
    name: "Coca-Cola Zero",
    description: "Refrigerante Coca-Cola Zero lata.",
    image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?w=400&h=400&fit=crop&crop=center",
    category: "refrigerante",
    variants: [
      { size: "350 ml lata", description: "Coca-Cola Zero", price: 8.99 }
    ]
  },
  {
    id: 14,
    name: "Pepsi Zero",
    description: "Refrigerante Pepsi Zero lata.",
    image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?w=400&h=400&fit=crop&crop=center",
    category: "refrigerante",
    variants: [
      { size: "350 ml lata", description: "Pepsi Zero", price: 7.29 }
    ]
  },
  {
    id: 15,
    name: "Heineken Long Neck",
    description: "Cerveja Heineken Long Neck.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=400&fit=crop&crop=center",
    category: "cerveja",
    variants: [
      { size: "330 ml", description: "Heineken Long Neck", price: 9.49 }
    ]
  },
  {
    id: 16,
    name: "Heineken Puro Malte",
    description: "Cerveja Heineken Puro Malte.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=400&fit=crop&crop=center",
    category: "cerveja",
    variants: [
      { size: "473 ml", description: "Heineken Puro Malte", price: 8.99 }
    ]
  },
  {
    id: 1,
    name: "Açaí Tradicional",
    description: "Açaí puro batido na hora com a cremosidade perfeita.",
    price: 8.90,
    image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=400&fit=crop&crop=center",
    category: "acai",
    size: "300ml",
    popular: true,
    calories: 180,
    vegan: true,
    rating: 4.7,
    reviews: 32,
    videoUrl: "https://www.youtube.com/embed/1APwq1df6Mw"
  },
  {
    id: 2,
    name: "Açaí com Granola",
    description: "Açaí tradicional com granola crocante e banana.",
    price: 12.90,
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=400&fit=crop&crop=center",
    category: "acai",
    size: "400ml",
    toppings: ["granola", "banana"],
    popular: true,
    calories: 240,
    vegan: true,
    rating: 4.9,
    reviews: 21,
    videoUrl: "https://www.youtube.com/embed/1APwq1df6Mw"
  },
  {
    id: 3,
    name: "Açaí Premium",
    description: "Açaí especial com frutas variadas, granola e mel.",
    price: 16.90,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=400&fit=crop&crop=center",
    category: "acai",
    size: "500ml",
    toppings: ["granola", "banana", "morango", "mel", "coco"],
    calories: 320,
    vegan: false,
    rating: 4.8,
    reviews: 18,
    videoUrl: "https://www.youtube.com/embed/1APwq1df6Mw"
  },
  {
    id: 4,
    name: "Bowl Fitness",
    description: "Açaí com proteína, aveia, frutas e pasta de amendoim.",
    price: 18.90,
    image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=400&h=400&fit=crop&crop=center",
    category: "fitness",
    size: "500ml",
    toppings: ["proteína", "aveia", "pasta de amendoim", "banana"],
    calories: 350,
    vegan: false,
    rating: 4.6,
    reviews: 11,
    videoUrl: "https://www.youtube.com/embed/1APwq1df6Mw"
  },
  {
    id: 5,
    name: "Smoothie de Açaí",
    description: "Bebida refrescante de açaí com frutas vermelhas.",
    price: 10.90,
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=400&fit=crop&crop=center",
    category: "bebida",
    size: "400ml",
    calories: 120,
    vegan: true,
    rating: 4.5,
    reviews: 7,
    videoUrl: "https://www.youtube.com/embed/1APwq1df6Mw"
  },
  {
    id: 6,
    name: "Açaí Zero Açúcar",
    description: "Açaí diet adoçado naturalmente com stevia.",
    price: 14.90,
    image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=400&h=400&fit=crop&crop=center",
    category: "diet",
    size: "400ml",
    toppings: ["granola sem açúcar", "frutas vermelhas"],
    calories: 110,
    vegan: true,
    rating: 4.4,
    reviews: 5,
    videoUrl: "https://www.youtube.com/embed/1APwq1df6Mw"
  }
];
