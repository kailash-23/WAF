import headphonesImg from "@/assets/headphones.jpg";
import backpackImg from "@/assets/backpack.jpg";
import smartphoneImg from "@/assets/smartphone.jpg";
import deskLampImg from "@/assets/desk-lamp.jpg";
import watchImg from "@/assets/watch.jpg";
import cameraImg from "@/assets/camera.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  description: string;
  features: string[];
  seller: string;
}

export interface Review {
  id: string;
  productId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Wireless Premium Headphones",
    price: 199.99,
    image: headphonesImg,
    rating: 4.5,
    reviews: 128,
    category: "Electronics",
    description: "Premium wireless headphones with active noise cancellation and 30-hour battery life. Experience crystal-clear audio with deep bass and crisp highs.",
    features: [
      "Active Noise Cancellation",
      "30-hour battery life",
      "Bluetooth 5.0",
      "Quick charge (15 min = 3 hours)",
      "Premium leather padding"
    ],
    seller: "TechAudio Pro"
  },
  {
    id: "2",
    name: "Minimalist Travel Backpack",
    price: 89.99,
    image: backpackImg,
    rating: 4.8,
    reviews: 67,
    category: "Accessories",
    description: "A sleek, minimalist backpack perfect for daily commutes and weekend adventures. Made with durable materials and thoughtful organization.",
    features: [
      "Water-resistant canvas",
      "Laptop compartment (up to 15\")",
      "Multiple organizational pockets",
      "Comfortable padded straps",
      "YKK zippers"
    ],
    seller: "Urban Nomad"
  },
  {
    id: "3",
    name: "Flagship Smartphone Pro",
    price: 899.99,
    image: smartphoneImg,
    rating: 4.7,
    reviews: 234,
    category: "Electronics",
    description: "Latest flagship smartphone with professional camera system, all-day battery, and lightning-fast performance for work and play.",
    features: [
      "6.7\" OLED display",
      "Triple camera system",
      "5G connectivity",
      "All-day battery life",
      "Water resistant IP68"
    ],
    seller: "Mobile Tech"
  },
  {
    id: "4",
    name: "Modern LED Desk Lamp",
    price: 79.99,
    image: deskLampImg,
    rating: 4.6,
    reviews: 45,
    category: "Home & Office",
    description: "Adjustable LED desk lamp with multiple brightness levels and color temperatures. Perfect for work, study, or reading.",
    features: [
      "Adjustable arm and head",
      "Multiple brightness levels",
      "Color temperature control",
      "USB charging port",
      "Touch controls"
    ],
    seller: "Illuminate Design"
  },
  {
    id: "5",
    name: "Classic Leather Watch",
    price: 249.99,
    image: watchImg,
    rating: 4.4,
    reviews: 89,
    category: "Accessories",
    description: "Timeless leather watch with Swiss movement and sapphire crystal. Elegant design suitable for both casual and formal occasions.",
    features: [
      "Swiss quartz movement",
      "Sapphire crystal glass",
      "Genuine leather strap",
      "Water resistant 50m",
      "Date display"
    ],
    seller: "Timepiece Classic"
  },
  {
    id: "6",
    name: "Mirrorless Camera Kit",
    price: 1299.99,
    image: cameraImg,
    rating: 4.9,
    reviews: 156,
    category: "Electronics",
    description: "Professional mirrorless camera with 24MP sensor and 4K video recording. Perfect for photographers and content creators.",
    features: [
      "24MP APS-C sensor",
      "4K video recording",
      "In-body stabilization",
      "WiFi connectivity",
      "Includes 18-55mm lens"
    ],
    seller: "PhotoPro Gear"
  }
];

export const reviews: Review[] = [
  {
    id: "1",
    productId: "1",
    userName: "Sarah M.",
    rating: 5,
    comment: "Amazing sound quality! The noise cancellation is perfect for my daily commute.",
    date: "2024-01-15"
  },
  {
    id: "2",
    productId: "1",
    userName: "Mike R.",
    rating: 4,
    comment: "Great headphones, battery life is as advertised. Comfortable for long sessions.",
    date: "2024-01-10"
  },
  {
    id: "3",
    productId: "2",
    userName: "Emma L.",
    rating: 5,
    comment: "Perfect size for daily use. Love the minimalist design and quality materials.",
    date: "2024-01-12"
  },
  {
    id: "4",
    productId: "3",
    userName: "David K.",
    rating: 5,
    comment: "Camera quality is outstanding! Fast performance and great display.",
    date: "2024-01-08"
  },
  {
    id: "5",
    productId: "4",
    userName: "Lisa P.",
    rating: 4,
    comment: "Perfect lighting for my home office. Easy to adjust and good build quality.",
    date: "2024-01-14"
  }
];