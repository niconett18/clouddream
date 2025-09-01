export type Product = {
  id: string;
  category: "pillow" | "bolster";
  name: string;
  slug: string;
  shortDesc: string;
  longDesc: string;
  price: number | null;
  originalPrice?: number | null;
  images: string[];
  specs: {
    size: string[];
    fill: string;
    cover: string;
    firmness: 'Soft' | 'Medium' | 'Firm';
  };
  shopeeLink?: string;
};

export const products: Product[] = [
  // Pillows
  {
    id: "p001",
    category: "pillow",
    name: "Bantal Hotel Hilton 100% Bulu Angsa Asli",
    slug: "hilton-pillow",
    shortDesc: "Bantal Single List Biru No Tag - Type Hilton, Type King Hilton dengan 100% bulu angsa asli dan garansi 1 tahun.",
    longDesc: "Rasakan kemewahan bantal hotel Hilton dengan 100% bulu angsa asli. Bantal premium ini memberikan kenyamanan luar biasa dengan kelembutan dan dukungan yang sempurna. Dilengkapi garansi 1 tahun dan free bubble wrap untuk pengiriman yang aman.",
    price: 637000,
    originalPrice: 799000,
    images: [
      "/products/pillow/Hilton NEW.jpg",
    ],
    specs: {
      size: ["Single", "King"],
      fill: "100% Bulu Angsa Asli",
      cover: "Premium hotel grade fabric",
      firmness: "Medium"
    },
    shopeeLink: "https://shopee.co.id/Bantal-Hotel-Hilton-100-Bulu-Angsa-Asli-Garansi-1-Tahun-Free-Bubble-Wrap-i.1549079815.40802829369"
  },
  {
    id: "p002",
    category: "pillow",
    name: "Bantal Hotel Hyatt 100% Bulu Angsa Asli",
    slug: "hyatt-pillow",
    shortDesc: "Bantal Single List Abu No Tag - Type Hyatt, Type King Hyatt dengan teknologi anti kempes dan garansi 1 tahun.",
    longDesc: "Bantal hotel Hyatt dengan kualitas premium menggunakan 100% bulu angsa asli. Dirancang khusus dengan teknologi anti kempes untuk mempertahankan bentuk dan kenyamanan jangka panjang. Dilengkapi garansi 1 tahun dan free bubble wrap.",
    price: 767000,
    originalPrice: 1249000,
    images: [
      "/products/pillow/Hyatt NEW.jpg",
    ],
    specs: {
      size: ["Single", "King"],
      fill: "100% Bulu Angsa Asli",
      cover: "Premium hotel grade fabric",
      firmness: "Medium"
    },
    shopeeLink: "https://shopee.co.id/Bantal-Hotel-Hyatt-100-Bulu-Angsa-Asli-Anti-Kempes-Garansi-1-Tahun-Free-Bubble-Wrap-i.1549079815.41902884245"
  },
  {
    id: "p003",
    category: "pillow",
    name: "Bantal Hotel Fairmont 100% Bulu Angsa Asli",
    slug: "fairmont-pillow",
    shortDesc: "Bantal Single List Putih - Type Fairmont, Type King Fairmont dengan kualitas premium dan garansi 1 tahun.",
    longDesc: "Bantal hotel Fairmont menghadirkan kemewahan tidur dengan 100% bulu angsa asli. Desain elegan dengan list putih memberikan sentuhan mewah pada kamar tidur Anda. Kualitas premium dengan garansi 1 tahun dan free bubble wrap.",
    price: 1017000,
    originalPrice: 1275000,
    images: [
      "/products/pillow/Fairmont NEW.jpg",
    ],
    specs: {
      size: ["Single", "King"],
      fill: "100% Bulu Angsa Asli",
      cover: "Premium hotel grade fabric",
      firmness: "Medium"
    },
    shopeeLink: "https://shopee.co.id/Bantal-Hotel-Fairmont-100-Bulu-Angsa-Asli-Garansi-1-Tahun-Free-Bubble-Wrap-i.1549079815.27337130820"
  },
  {
    id: "p004",
    category: "pillow",
    name: "Feather World Classic Bantal Hotel",
    slug: "classic-feather-world",
    shortDesc: "Bantal Double List Hitam TAG FW - Type Classic dengan 40% Down, 100% bulu angsa asli dan teknologi anti kempes.",
    longDesc: "Feather World Classic menghadirkan bantal hotel premium dengan 100% bulu angsa asli dan 40% down. Dilengkapi teknologi anti kempes untuk menjaga bentuk dan kenyamanan. Garansi 1 tahun untuk kepuasan pelanggan.",
    price: 617000,
    originalPrice: 729000,
    images: [
      "/products/pillow/Classic NEW.jpg",
    ],
    specs: {
      size: ["Double"],
      fill: "100% Bulu Angsa Asli, 40% Down",
      cover: "Premium hotel grade fabric",
      firmness: "Medium"
    },
    shopeeLink: "https://shopee.co.id/Feather-World-Classic-Bantal-Hotel-100-Bulu-Angsa-Asli-40-Down-Anti-Kempes-Garansi-1-Tahun-i.1549079815.44452353994"
  },
  {
    id: "p005",
    category: "pillow",
    name: "Feather World Royal Bantal Hotel",
    slug: "royal-feather-world",
    shortDesc: "Bantal Double List Abu TAG FW - Type Royal dengan 70% Down, bulu angsa asli dan teknologi anti kempes.",
    longDesc: "Feather World Royal adalah pilihan premium dengan 70% down dan bulu angsa asli. Memberikan kenyamanan maksimal dengan teknologi anti kempes. Garansi 1 tahun dan free bubble wrap untuk pengalaman tidur yang luar biasa.",
    price: 1747000,
    originalPrice: 2349000,
    images: [
      "/products/pillow/Royal NEW.jpg",
    ],
    specs: {
      size: ["Double"],
      fill: "Bulu Angsa Asli, 70% Down",
      cover: "Premium hotel grade fabric",
      firmness: "Soft"
    },
    shopeeLink: "https://shopee.co.id/Feather-World-Royal-Bantal-Hotel-Bulu-Angsa-70-Down-Anti-Kempes-Garansi-1-Tahun-Free-Bubble-i.1549079815.40402354819"
  },
  {
    id: "p006",
    category: "pillow",
    name: "Feather World Regent Bantal Hotel",
    slug: "regent-feather-world",
    shortDesc: "Bantal Double List Coklat TAG FW - Type Regent dengan 100% Down, bulu angsa premium dan teknologi anti kempes.",
    longDesc: "Feather World Regent menghadirkan kemewahan tertinggi dengan 100% down dan bulu angsa premium. Kualitas terbaik dengan teknologi anti kempes untuk pengalaman tidur yang tak terlupakan. Garansi 1 tahun dan free bubble wrap.",
    price: 3097000,
    originalPrice: 3719000,
    images: [
      "/products/pillow/Regent NEW.jpg",
    ],
    specs: {
      size: ["Double"],
      fill: "Bulu Angsa Premium, 100% Down",
      cover: "Premium hotel grade fabric",
      firmness: "Soft"
    },
    shopeeLink: "https://shopee.co.id/Feather-World-Regent-Bantal-Hotel-Bulu-Angsa-100-Down-Anti-Kempes-Garansi-1-Tahun-Free-BubbleWrap-i.1549079815.42302359518"
  },
  {
    id: "p007",
    category: "pillow",
    name: "Bantal Hotel Silky Feather",
    slug: "silky-feather-pillow",
    shortDesc: "Bantal Double List Ungu Tag FW - Type Silky Feather dengan 70% bulu angsa dan sutra sintetis untuk medium feel.",
    longDesc: "Bantal Hotel Silky Feather menggabungkan 70% bulu angsa dengan sutra sintetis untuk memberikan rasa medium yang sempurna. Teknologi anti kempes memastikan daya tahan dan kenyamanan jangka panjang.",
    price: 379000,
    originalPrice: 429000,
    images: [
      "/products/pillow/Silky Feather NEW.jpg",
    ],
    specs: {
      size: ["Double"],
      fill: "70% Bulu Angsa, Sutra Sintetis",
      cover: "Premium hotel grade fabric",
      firmness: "Medium"
    },
    shopeeLink: "https://shopee.co.id/Bantal-Hotel-Silky-Feather-70-Bulu-Angsa-Sutra-Sintetis-%E2%80%93-Medium-Feel-Anti-Kempes-i.1549079815.24345785140"
  },
  
  // Bolsters
  {
    id: "b001",
    category: "bolster",
    name: "Guling Hotel Hilton Bulu Angsa Asli",
    slug: "hilton-bolster",
    shortDesc: "Guling List Biru - Bolster Hilton dengan bulu angsa asli 100% padat dan kenyal, garansi 1 tahun.",
    longDesc: "Guling Hotel Hilton dengan kualitas premium menggunakan bulu angsa asli 100%. Desain padat dan kenyal memberikan dukungan optimal untuk kenyamanan tidur. Garansi 1 tahun untuk kepuasan pelanggan.",
    price: 837000,
    originalPrice: 1249000,
    images: [
      "/products/bolster/Bolster Hilton NEW.jpg",
    ],
    specs: {
      size: ["Standard"],
      fill: "Bulu Angsa Asli 100%",
      cover: "Premium hotel grade fabric",
      firmness: "Medium"
    },
    shopeeLink: "https://shopee.co.id/Guling-Hotel-Hilton-Bulu-Angsa-Asli-100-Padat-dan-Kenyal-Garansi-1-Tahun-i.1549079815.24995398146?is_from_login=true"
  },
  {
    id: "b002",
    category: "bolster",
    name: "Guling Hotel Hyatt Bulu Angsa Asli",
    slug: "hyatt-bolster",
    shortDesc: "Guling List Abu - Bolster Hyatt dengan bulu angsa asli empuk dan lentur, garansi 1 tahun dan free bubble wrap.",
    longDesc: "Guling Hotel Hyatt memberikan kenyamanan dengan tekstur empuk dan lentur dari bulu angsa asli berkualitas tinggi. Desain yang ergonomis untuk mendukung berbagai posisi tidur. Garansi 1 tahun dan free bubble wrap.",
    price: 957000,
    originalPrice: 1249000,
    images: [
      "/products/bolster/Bolster Hyatt NEW.jpg",
    ],
    specs: {
      size: ["Standard"],
      fill: "Bulu Angsa Asli",
      cover: "Premium hotel grade fabric",
      firmness: "Soft"
    },
    shopeeLink: "https://shopee.co.id/Guling-Hotel-Hyatt-Bulu-Angsa-Asli-Empuk-dan-Lentur-Garansi-1-Tahun-Free-Bubble-Wrap-i.1549079815.41902895274"
  }
];

export const getProductsByCategory = (category: "pillow" | "bolster"): Product[] => {
  return products.filter(product => product.category === category);
};

export const getProductBySlug = (category: string, slug: string): Product | undefined => {
  return products.find(product => product.category === category && product.slug === slug);
};

export const getAllProducts = (): Product[] => {
  return products;
};
