import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Beranda",
  description: "Cloudream - Bantal dan guling premium untuk tidur malam yang sempurna",
};

const features = [
  {
    title: "Bahan Premium",
    description:
      "Kami hanya menggunakan bahan berkualitas terbaik untuk produk kami, memastikan daya tahan dan kenyamanan yang bertahan selama bertahun-tahun.",
    icon: <Star className="h-10 w-10 text-[#001435]" />,
  },
  {
    title: "Keahlian Ahli",
    description:
      "Setiap produk dibuat dengan teliti oleh pengrajin terampil dengan pengalaman puluhan tahun dalam pembuatan bantal dan guling.",
    icon: <Star className="h-10 w-10 text-[#001435]" />,
  },
  {
    title: "Jaminan Tidur Lebih Baik",
    description:
      "Rasakan peningkatan kualitas tidur dengan produk yang dirancang secara ergonomis untuk memberikan dukungan dan kenyamanan optimal.",
    icon: <Star className="h-10 w-10 text-[#001435]" />,
  },
];

const featuredProducts = [
  {
    id: "p002",
    category: "pillow" as const,
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
      firmness: "Medium" as const
    },
    shopeeLink: "https://shopee.co.id/Bantal-Hotel-Hyatt-100-Bulu-Angsa-Asli-Anti-Kempes-Garansi-1-Tahun-Free-Bubble-Wrap-i.1549079815.41902884245"
  },
  {
    id: "b002",
    category: "bolster" as const,
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
      firmness: "Soft" as const
    },
    shopeeLink: "https://shopee.co.id/Guling-Hotel-Hyatt-Bulu-Angsa-Asli-Empuk-dan-Lentur-Garansi-1-Tahun-Free-Bubble-Wrap-i.1549079815.41902895274"
  }
];

export default function Home() {
  return (
    <>
      {/* JsonLd would go here - Handled by metadata in production */}
      
      <Hero
        title="Rasakan Tidur Malam yang Sempurna"
        subtitle="Bantal dan guling premium yang dibuat untuk kenyamanan dan dukungan terbaik"
        showCta={true}
      />

      {/* Features Section */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow bg-white">
              <CardContent className="p-8">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-[#001435]">{feature.title}</h3>
                <p className="text-[#001435] text-justify">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Featured Products */}
      <Section className="bg-[#E8D8C7]/5">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#001435]">Produk Unggulan</h2>
          <p className="text-[#001435] max-w-2xl mx-auto">
            Temukan produk tidur premium paling populer kami, dirancang untuk kenyamanan dan dukungan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </Section>

      {/* Trusted by Luxury Hospitality Brands */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#001435]">Dipercaya oleh Brand Perhotelan Mewah</h2>
          <p className="text-[#001435] max-w-2xl mx-auto">
            Cloudream telah menjadi pilihan utama hotel-hotel mewah terkemuka untuk memberikan pengalaman tidur yang tak terlupakan bagi tamu mereka
          </p>
        </div>

        <div className="flex justify-center">
          <div className="relative w-full max-w-4xl">
            <Image
              src="/Trusted By Luxury Hospitality Brands.jpg"
              alt="Dipercaya oleh Brand Perhotelan Mewah - Logo hotel-hotel mewah yang menggunakan produk Cloudream"
              width={1200}
              height={400}
              className="w-full h-auto object-contain rounded-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
            />
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-[#001435] text-lg font-medium">
            Bergabunglah dengan brand-brand ternama yang telah mempercayai kualitas Cloudream
          </p>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-[#E8D8C7]/10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#001435]">Siap untuk Tidur Lebih Baik?</h2>
          <p className="text-[#001435] mb-8 text-justify">
            Ubah pengalaman tidur Anda dengan rangkaian premium bantal dan guling Cloudream. Perjalanan Anda menuju tidur yang lebih baik dimulai di sini.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-[#001435] hover:bg-[#001435] text-white">
              <Link href="/our-product">Jelajahi Produk</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-[#001435] text-[#001435] hover:bg-[#E8D8C7]/10">
              <Link href="/contact">Hubungi Kami</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
