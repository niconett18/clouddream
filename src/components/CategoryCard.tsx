"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  category: "pillow" | "bolster";
  imageUrl: string;
  title: string;
  description: string;
  delay?: number;
}

export default function CategoryCard({
  category,
  imageUrl,
  title,
  description,
  delay = 0,
}: CategoryCardProps) {
  return (
    <div className="h-full">
      <Card className="overflow-hidden h-full flex flex-col border-0 shadow-lg hover:shadow-xl transition-all duration-500 ease-in-out transform hover:scale-105 bg-white group">
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <CardContent className="flex-1 flex flex-col p-6 md:p-8">
          <h3 className="text-2xl font-bold mb-3 text-[#001435] group-hover:text-[#003366] transition-colors duration-300">{title}</h3>
          <p className="text-[#001435] mb-6 flex-1 group-hover:text-[#003366] transition-colors duration-300">{description}</p>
          <Button asChild className="mt-auto self-start group/button bg-[#001435] hover:bg-[#003366] hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out text-white">
            <Link href={`/our-product/${category}`}>
              Jelajahi
              <ArrowRight className="ml-2 h-4 w-4 group-hover/button:translate-x-1 transition-transform duration-300" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
