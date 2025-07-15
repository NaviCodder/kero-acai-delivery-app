
import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: 1,
    name: "Açaí com mix",
    description: "Açaí cremoso com mix de ingredientes.",
    image: "/logo-keroacai.png",
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
    id: 2,
    name: "Açaí 100% puro",
    description: "Açaí 100% puro, sem misturas.",
    image: "/logo-keroacai.png",
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
    id: 3,
    name: "Coca-Cola Original",
    description: "Refrigerante Coca-Cola Original lata.",
    image: "/logo-keroacai.png",
    category: "refrigerante",
    variants: [
      { size: "350 ml lata", description: "Coca-Cola Original", price: 8.99 }
    ]
  },
  {
    id: 4,
    name: "Coca-Cola Zero",
    description: "Refrigerante Coca-Cola Zero lata.",
    image: "/logo-keroacai.png",
    category: "refrigerante",
    variants: [
      { size: "350 ml lata", description: "Coca-Cola Zero", price: 8.99 }
    ]
  },
  {
    id: 5,
    name: "Pepsi Zero",
    description: "Refrigerante Pepsi Zero lata.",
    image: "/logo-keroacai.png",
    category: "refrigerante",
    variants: [
      { size: "350 ml lata", description: "Pepsi Zero", price: 7.29 }
    ]
  },
  {
    id: 6,
    name: "Heineken Long Neck",
    description: "Cerveja Heineken Long Neck.",
    image: "/logo-keroacai.png",
    category: "cerveja",
    variants: [
      { size: "330 ml", description: "Heineken Long Neck", price: 9.49 }
    ]
  },
  {
    id: 7,
    name: "Heineken Puro Malte",
    description: "Cerveja Heineken Puro Malte.",
    image: "/logo-keroacai.png",
    category: "cerveja",
    variants: [
      { size: "473 ml", description: "Heineken Puro Malte", price: 8.99 }
    ]
  }
];
