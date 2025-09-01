"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ProductCard from "@/components/ProductCard";
import { getAllProducts } from "@/data/products";

export default function OurProductPage() {
  const allProducts = getAllProducts();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(cat => cat !== category)
        : [...prev, category]
    );
  };

  const filteredProducts = selectedCategories.length === 0 
    ? allProducts 
    : allProducts.filter(product => selectedCategories.includes(product.category));

  return (
    <>
      <Hero
        title="Produk Kami"
        subtitle="Bantal dan guling premium yang dibuat untuk kenyamanan dan dukungan luar biasa"
        height="medium"
      />

      <Section>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#001435]">Jelajahi Koleksi Kami</h2>
            <p className="text-[#001435] max-w-2xl mx-auto">
              Kami menawarkan rangkaian lengkap produk tidur yang dirancang untuk memenuhi berbagai kebutuhan dan preferensi
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Categories Sidebar */}
            <div className="lg:w-80 lg:ml-8 flex-shrink-0">
              <div className="space-y-10">
                <h3 className="text-xl font-medium text-gray-600 uppercase tracking-wider">Categories</h3>
                <div className="space-y-8">
                  <label className="flex items-center space-x-5 cursor-pointer">
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes('pillow')}
                        onChange={() => handleCategoryToggle('pillow')}
                        className="sr-only"
                      />
                      <div className={`w-4 h-4 border transition-colors duration-150 ${
                        selectedCategories.includes('pillow') 
                          ? 'bg-[#001435] border-[#001435]' 
                          : 'border-gray-300'
                      }`}>
                        {selectedCategories.includes('pillow') && (
                          <svg className="w-3 h-3 text-white absolute top-0.5 left-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <span className="text-lg text-gray-700 font-medium">
                      Bantal <span className="text-gray-400 font-normal">(7)</span>
                    </span>
                  </label>
                  <label className="flex items-center space-x-5 cursor-pointer">
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes('bolster')}
                        onChange={() => handleCategoryToggle('bolster')}
                        className="sr-only"
                      />
                      <div className={`w-4 h-4 border transition-colors duration-150 ${
                        selectedCategories.includes('bolster') 
                          ? 'bg-[#001435] border-[#001435]' 
                          : 'border-gray-300'
                      }`}>
                        {selectedCategories.includes('bolster') && (
                          <svg className="w-3 h-3 text-white absolute top-0.5 left-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <span className="text-lg text-gray-700 font-medium">
                      Guling <span className="text-gray-400 font-normal">(2)</span>
                    </span>
                  </label>
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product, index) => (
                    <ProductCard key={product.id} product={product} index={index} />
                  ))
                ) : (
                  <div className="col-span-full text-center py-12">
                    <p className="text-[#001435] text-lg">
                      Tidak ada produk yang ditemukan untuk kategori yang dipilih.
                    </p>
                  </div>
                )}
              </div>

              {/* Product Count */}
              <div className="mt-8 text-center">
                <p className="text-[#001435] text-sm">
                  Menampilkan {filteredProducts.length} dari {allProducts.length} produk
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
