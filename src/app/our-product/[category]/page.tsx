import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ProductCard from "@/components/ProductCard";
import { getProductsByCategory } from "@/data/products";
import { ChevronRight } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  
  if (category !== "pillow" && category !== "bolster") {
    return {
      title: "Kategori Tidak Ditemukan",
    };
  }

  const categoryTitle = category === "pillow" ? "Bantal" : "Guling";
  
  return {
    title: categoryTitle,
    description: `Jelajahi rangkaian ${categoryTitle.toLowerCase()} premium kami yang dirancang untuk kenyamanan dan dukungan luar biasa`,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  
  if (category !== "pillow" && category !== "bolster") {
    notFound();
  }

  const products = getProductsByCategory(category as "pillow" | "bolster");
  const categoryTitle = category === "pillow" ? "Bantal" : "Guling";

  return (
    <>
      <Hero
        title={categoryTitle}
        subtitle={`Rangkaian ${categoryTitle.toLowerCase()} premium kami yang dirancang untuk kenyamanan dan dukungan luar biasa`}
        height="medium"
      />

      <Section>
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex mb-8 text-sm">
            <ol className="flex items-center space-x-1">
              <li>
                <Link href="/" className="text-gray-500 hover:text-accent">
                  Beranda
                </Link>
              </li>
              <li className="flex items-center space-x-1">
                <ChevronRight className="h-4 w-4 text-gray-400" />
                <Link href="/our-product" className="text-gray-500 hover:text-accent">
                  Produk Kami
                </Link>
              </li>
              <li className="flex items-center space-x-1">
                <ChevronRight className="h-4 w-4 text-gray-400" />
                <span className="text-gray-900 font-medium">{categoryTitle}</span>
              </li>
            </ol>
          </nav>

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{categoryTitle}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {category === "pillow"
                ? "Bantal premium kami dirancang untuk memberikan kenyamanan dan dukungan luar biasa untuk tidur malam yang lebih baik."
                : "Guling pendukung kami membantu menjaga keselarasan yang tepat dan mengurangi tekanan untuk meningkatkan kualitas tidur."}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
