export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  image: string;
  benefits: string[];
  howToUse: string;
  variations: { label: string; quantity: number; price: number; originalPrice: number }[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "Psyllium 100% Puro",
    slug: "Psyllium 100% Puro Concentrato Life In 60 Cápsulas | Natural Rico em Fibras e Auxilia na Saciedade.",
    description: "Fórmula inteligente com Psyllium natural para aumentar a saciedade, auxiliar no controle do apetite e apoiar o equilíbrio intestinal. Sensação de leveza e mais controle ao longo do dia com uso contínuo.",
    shortDescription: "Controle de apetite e aceleração metabólica",
    price: 89.90,
    originalPrice: 149.90,
    rating: 5,
    reviews: 347,
      image: "/imagem_principal.jpeg",
    benefits: ["Reduz a fome em até 60%", "Acelera o metabolismo", "Aumenta a saciedade", "100% natural"],
    howToUse: "Tome 2 cápsulas ao dia, 30 minutos antes das principais refeições, com um copo de água.",
    variations: [
      { label: "1 Pote (30 dias)", quantity: 1, price: 89.90, originalPrice: 149.90 },
      { label: "2 Potes (60 dias)", quantity: 2, price: 159.90, originalPrice: 299.80 },
      { label: "3 Potes (90 dias)", quantity: 3, price: 209.90, originalPrice: 449.70 },
    ],
  },
  {
    id: "2",
    name: "NatuDetox",
    slug: "natudetox",
    description: "Blend exclusivo de Clorella, Chá Verde e Gengibre para desintoxicação profunda e redução do inchaço abdominal.",
    shortDescription: "Desintoxicação e redução de inchaço",
    price: 79.90,
    originalPrice: 129.90,
    rating: 5,
    reviews: 218,
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400&h=400&fit=crop",
    benefits: ["Elimina toxinas", "Reduz inchaço abdominal", "Melhora a digestão", "Aumenta a disposição"],
    howToUse: "Tome 2 cápsulas ao dia pela manhã, em jejum, com um copo de água.",
    variations: [
      { label: "1 Pote (30 dias)", quantity: 1, price: 79.90, originalPrice: 129.90 },
      { label: "2 Potes (60 dias)", quantity: 2, price: 139.90, originalPrice: 259.80 },
      { label: "3 Potes (90 dias)", quantity: 3, price: 189.90, originalPrice: 389.70 },
    ],
  },
  {
    id: "3",
    name: "NatuBurn",
    slug: "natuburn",
    description: "Termogênico natural potente com Cafeína, Pimenta Caiena e L-Carnitina. Queime gordura enquanto treina ou faz atividades do dia a dia.",
    shortDescription: "Termogênico natural para queima de gordura",
    price: 99.90,
    originalPrice: 169.90,
    rating: 5,
    reviews: 412,
    image: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?w=400&h=400&fit=crop",
    benefits: ["Aumenta a queima calórica", "Dá mais energia", "Acelera resultados", "Sem efeito rebote"],
    howToUse: "Tome 1 cápsula 30 minutos antes do treino ou pela manhã.",
    variations: [
      { label: "1 Pote (30 dias)", quantity: 1, price: 99.90, originalPrice: 169.90 },
      { label: "2 Potes (60 dias)", quantity: 2, price: 179.90, originalPrice: 339.80 },
      { label: "3 Potes (90 dias)", quantity: 3, price: 239.90, originalPrice: 509.70 },
    ],
  },
  {
    id: "4",
    name: "NatuFibra",
    slug: "natufibra",
    description: "Complexo de fibras naturais com Psyllium, Aveia e Linhaça para regular o intestino e prolongar a saciedade.",
    shortDescription: "Regulação intestinal e saciedade prolongada",
    price: 69.90,
    originalPrice: 109.90,
    rating: 4,
    reviews: 189,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop",
    benefits: ["Regula o intestino", "Prolonga a saciedade", "Reduz absorção de gordura", "Rico em fibras"],
    howToUse: "Tome 2 cápsulas ao dia com bastante água, preferencialmente antes das refeições.",
    variations: [
      { label: "1 Pote (30 dias)", quantity: 1, price: 69.90, originalPrice: 109.90 },
      { label: "2 Potes (60 dias)", quantity: 2, price: 119.90, originalPrice: 219.80 },
      { label: "3 Potes (90 dias)", quantity: 3, price: 159.90, originalPrice: 329.70 },
    ],
  },
];

export const getProductBySlug = (slug: string) => products.find((p) => p.slug === slug);
