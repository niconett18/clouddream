"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

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
    small: "min-h-[40vh] md:min-h-[30vh]",
    medium: "min-h-[60vh] md:min-h-[50vh]",
    large: "min-h-[90vh] md:min-h-[70vh]",
  };

  return (
    <section className={`relative bg-white ${heightClass[height]} flex items-center`}>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center py-8 sm:py-12">
          <div className="text-center sm:text-left order-2 sm:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#001435] mb-4 leading-tight animate-fade-in-up">
              {title}
            </h1>
            {subtitle && (
              <p
                className="text-base sm:text-lg md:text-xl text-[#001435] mb-6 max-w-xl mx-auto sm:mx-0 animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                {subtitle}
              </p>
            )}
            {showCta && (
              <div
                className="flex flex-col sm:flex-row sm:justify-start justify-center gap-3 md:gap-4 animate-fade-in-up"
                style={{ animationDelay: "0.4s" }}
              >
                <Button asChild size="lg" className="bg-[#001435] hover:bg-[#003366] hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out text-white w-full sm:w-auto">
                  <Link href="/our-product">Jelajahi Produk</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-[#001435] text-[#001435] hover:bg-[#001435] hover:text-white hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out w-full sm:w-auto"
                >
                  <Link href="/contact">Hubungi Kami</Link>
                </Button>
              </div>
            )}
          </div>
          <div className="relative w-full aspect-[4/3] sm:aspect-[3/2] order-1 sm:order-2 overflow-visible">
            {/* Use Image with object-contain to prevent cropping */}
            <Image
              src={imageUrl}
              alt="Hero visual"
              fill
              priority
              className="object-contain w-full h-full"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
