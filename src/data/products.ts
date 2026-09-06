import type { Product } from "../types";

export const products: Product[] = [
  {
    id: 1,
    name: "Phantom X",
    category: "Gaming PCs",
    specs: "RTX 4070 SUPER � Ryzen 7 � 32GB DDR5",
    price: 1699,
    image: "/images/phantom.jpg",
    label: "FAN FAVORITE",
  },
  {
    id: 2,
    name: "Nova Pro",
    category: "Gaming PCs",
    specs: "RTX 4060 � Intel Core i5 � 16GB DDR5",
    price: 1099,
    image: "/images/nova.jpg",
    label: "YOUR FIRST UPGRADE",
  },
  {
    id: 3,
    name: "Eclipse 27",
    category: "Monitors",
    specs: "27-inch QHD � 165Hz � IPS display",
    price: 299,
    image: "/images/monitor.jpg",
    label: "EVERY FRAME MATTERS",
  },
  {
    id: 4,
    name: "Pulse 75",
    category: "Accessories",
    specs: "Mechanical � RGB backlight � Compact layout",
    price: 89,
    image: "/images/keyboard.jpg",
    label: "COMPLETE YOUR SETUP",
  },
];

export const formatPrice = (price: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);
