"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  return (
    <div 
      className="h-full animate-fadeInUp hover:translate-y-[-4px] md:hover:translate-y-[-8px] transition-all duration-500 ease-in-out"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <Link
        href={`/our-product/${product.category}/${product.slug}`}
        className="block h-full group"
      >
        <Card className="overflow-visible h-full flex flex-col border border-gray-100 hover:border-[#001435] hover:shadow-xl transition-all duration-500 ease-in-out transform group-hover:scale-[1.02] md:group-hover:scale-105 p-0">
          <div className="relative aspect-[4/3] w-full overflow-visible p-2">
            <Image
              src={product.images[0] || "/placeholder.jpg"}
              alt={product.name}
              fill
              className="object-contain w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 50vw, 33vw"
              priority={index < 4}
              quality={90}
            />
          </div>
          <CardContent className="flex-1 flex flex-col p-3 sm:p-4 md:p-6">
            <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-[#001435] group-hover:text-[#003366] transition-colors duration-300 leading-tight">
              {product.name}
            </h3>
            <p className="text-[#001435] text-sm mb-3 md:mb-4 line-clamp-3 flex-1 opacity-80 group-hover:opacity-100 transition-opacity duration-300 leading-relaxed text-justify">
              {product.shortDesc}
            </p>
            {product.price && (
              <div className="mt-auto">
                {product.originalPrice ? (
                  <div className="flex flex-col space-y-1">
                    <p className="text-gray-500 text-xs md:text-sm line-through">
                      Rp {product.originalPrice.toLocaleString('id-ID')}
                    </p>
                    <p className="text-[#001435] font-bold text-base md:text-lg group-hover:text-[#003366] transition-colors duration-300">
                      Rp {product.price.toLocaleString('id-ID')}
                    </p>
                  </div>
                ) : (
                  <p className="text-[#001435] font-bold text-base md:text-lg group-hover:text-[#003366] transition-colors duration-300">
                    Rp {product.price.toLocaleString('id-ID')}
                  </p>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}
