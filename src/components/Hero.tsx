"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

interface HeroProps {
  title: string;
  subtitle?: string;
  showCta?: boolean;
  imageUrl?: string;
  height?: "small" | "medium" | "large";
}

export default function Hero({
  title,
  subtitle,
  showCta = false,
  imageUrl = "/hero-bg.jpg",
  height = "large",
}: HeroProps) {
  const heightClass = {
    small: "min-h-[30vh]",
    medium: "min-h-[50vh]",
    large: "min-h-[80vh]",
  };

  return (
    <section
      className={`relative flex items-center justify-center ${heightClass[height]} bg-gradient-to-r from-[#E8D8C7]/10 to-[#E8D8C7]/5 overflow-hidden`}
    >
      {imageUrl && (
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
          <div className="absolute inset-0 bg-white/70" />
        </div>
      )}

      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center py-16">
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#001435] mb-6 animate-fade-in-up"
        >
          {title}
        </h1>
        
        {subtitle && (
          <p
            className="text-lg md:text-xl text-[#001435] max-w-2xl mx-auto mb-8 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            {subtitle}
          </p>
        )}

        {showCta && (
          <div 
            className="flex flex-wrap justify-center gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button asChild size="lg" className="bg-[#001435] hover:bg-[#003366] hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out text-white">
              <Link href="/our-product">Jelajahi Produk</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-[#001435] text-[#001435] hover:bg-[#001435] hover:text-white hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
              <Link href="/contact">Hubungi Kami</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
