"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface HeroProps {
  title: string;
  subtitle?: string;
  showCta?: boolean;
  imageUrl?: string;
  mobileImageUrl?: string; // optional mobile-specific background
  height?: "small" | "medium" | "large";
  desktopObjectPosition?: string; // e.g. 'left center', '50% 30%'
  mobileObjectPosition?: string; // override for mobile if subject needs centering differently
  containOnDesktop?: boolean; // show full image on >= md screens (object-contain) so subject isn't cropped
}

export default function Hero({
  title,
  subtitle,
  showCta = false,
  imageUrl,
  mobileImageUrl,
  desktopObjectPosition = 'center center',
  mobileObjectPosition,
  containOnDesktop = false,
  height = "large",
}: HeroProps) {
  // Always use unified hero background for every page now
  const finalImageUrl = "/herobg-otherpage.png";
  const finalMobileImageUrl = "/herobg-otherpage.png";
  const heightClass = {
    small: "min-h-[40vh] md:min-h-[30vh]",
    medium: "min-h-[60vh] md:min-h-[50vh]",
    large: "min-h-[100vh] md:min-h-[80vh]",
  };

  return (
    <section className={`relative flex items-center justify-center ${heightClass[height]}`}>
      <div className="absolute inset-0 z-0">
        {/* Mobile background */}
        <Image
          src={finalMobileImageUrl}
          alt="Hero background"
          fill
          priority
          sizes="(max-width: 640px) 100vw, 50vw"
          className="block sm:hidden object-cover w-full h-full"
          style={mobileObjectPosition ? { objectPosition: mobileObjectPosition } : undefined}
        />
        {/* Desktop / tablet background always cover (avoid white gaps) */}
        <Image
          src={finalImageUrl}
          alt="Hero background"
          fill
          priority
          sizes="(max-width: 640px) 100vw, 100vw"
          className="hidden sm:block w-full h-full object-cover"
          style={{ objectPosition: desktopObjectPosition }}
        />
  {/* Removed overlay to ensure full visibility of background image. */}
      </div>

  <div className="container mx-auto px-4 sm:px-6 relative z-10 py-12 sm:py-16 flex flex-col items-center sm:items-start text-center sm:text-left max-w-2xl">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#001435] mb-4 md:mb-6 animate-fade-in-up leading-tight drop-shadow-[0_2px_4px_rgba(255,255,255,0.6)]"
        >
          {title}
        </h1>
        
        {subtitle && (
          <p
            className="text-base sm:text-lg md:text-xl text-[#001435] mb-6 md:mb-8 animate-fade-in-up px-2 sm:px-0 leading-relaxed drop-shadow-[0_2px_4px_rgba(255,255,255,0.6)]"
            style={{ animationDelay: "0.2s" }}
          >
            {subtitle}
          </p>
        )}

        {showCta && (
          <div
            className="flex flex-col sm:flex-row sm:justify-start gap-3 md:gap-4 animate-fade-in-up w-full max-w-xs sm:max-w-none"
            style={{ animationDelay: "0.4s" }}
          >
            <Button asChild size="lg" className="bg-[#001435] hover:bg-[#003366] w-full sm:w-auto">
              <Link href="/selector">PILIH PRODUK IDEAL</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-[#001435] text-[#001435] hover:bg-[#001435] hover:text-white w-full sm:w-auto">
              <Link href="/our-product">JELAJAHI PRODUK</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
