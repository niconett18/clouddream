"use client";

import { useState } from "react";
import Image from "next/image";

interface ImageGalleryProps {
  images: string[];
  productName: string;
}

export default function ImageGallery({
  images,
  productName,
}: ImageGalleryProps) {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="grid grid-cols-1 gap-4">
      {/* Main Image */}
      <div className="relative aspect-square overflow-hidden rounded-lg border border-gray-100">
        <Image
          src={mainImage}
          alt={`${productName} main view`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setMainImage(image)}
            className={`relative aspect-square rounded-md overflow-hidden border-2 transition-all ${
              mainImage === image
                ? "border-accent"
                : "border-transparent hover:border-gray-300"
            }`}
            aria-label={`View ${productName} image ${index + 1}`}
          >
            <Image
              src={image}
              alt={`${productName} thumbnail ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 25vw, 100px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
