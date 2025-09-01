"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import CategoryCard from "@/components/CategoryCard";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const features = [
  {
    title: "Bahan Premium",
    description:
      "Kami hanya menggunakan bahan berkualitas tertinggi untuk produk kami, memastikan daya tahan dan kenyamanan yang bertahan selama bertahun-tahun.",
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
      "Rasakan kualitas tidur yang lebih baik dengan produk yang dirancang ergonomis untuk memberikan dukungan dan kenyamanan optimal.",
    icon: <Star className="h-10 w-10 text-[#001435]" />,
  },
];

const testimonials = [
  {
    content:
      "Bantal memory foam dari DD Pillow benar-benar mengubah kualitas tidur saya. Saya bangun tanpa sakit leher untuk pertama kalinya dalam bertahun-tahun!",
    author: "Sarah Johnson",
    role: "Pelanggan Terverifikasi",
  },
  {
    content:
      "Awalnya saya ragu mengeluarkan uang sebanyak ini untuk bantal, tapi ternyata sangat sebanding. Kualitasnya luar biasa dan tetap mempertahankan bentuknya dengan sempurna.",
    author: "Michael Chen",
    role: "Pelanggan Terverifikasi",
  },
  {
    content:
      "Guling penyeimbang tubuh ini benar-benar mengubah segalanya untuk kehamilan saya. Akhirnya saya bisa tidur nyaman di trimester ketiga!",
    author: "Emily Rodriguez",
    role: "Pelanggan Terverifikasi",
  },
];

export default function Home() {
  return (
    <>
      <Hero
        title="Rasakan Tidur Malam yang Sempurna"
        subtitle="Bantal dan guling premium yang dibuat untuk kenyamanan dan dukungan terbaik"
        showCta={true}
      />

      {/* Features Section */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-xl transition-all duration-500 ease-in-out transform hover:scale-105 bg-white group">
              <CardContent className="p-8">
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-[#001435] group-hover:text-[#003366] transition-colors duration-300">{feature.title}</h3>
                <p className="text-[#001435] group-hover:text-[#003366] transition-colors duration-300">{feature.description}</p>
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
          <CategoryCard
            category="pillow"
            title="Bantal Premium"
            description="Rasakan kenyamanan luar biasa dengan rangkaian bantal premium kami yang dirancang untuk semua posisi tidur dan preferensi."
            imageUrl="/products/pillow/classic-1.jpg"
            delay={0.2}
          />
          <CategoryCard
            category="bolster"
            title="Guling Penyangga"
            description="Guling ergonomis kami memberikan dukungan yang tepat sasaran untuk leher, punggung, dan sendi untuk meningkatkan kualitas tidur."
            imageUrl="/products/bolster/cylindrical-1.jpg"
            delay={0.4}
          />
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#001435]">Kata Pelanggan Kami</h2>
          <p className="text-[#001435] max-w-2xl mx-auto">
            Jangan hanya percaya kata kami. Inilah yang dikatakan orang tentang produk DD Pillow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-[#E8D8C7] bg-white hover:shadow-xl hover:scale-105 transition-all duration-500 ease-in-out group">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-[#001435] text-[#001435] group-hover:scale-110 transition-transform duration-300"
                      style={{ animationDelay: `${i * 100}ms` }}
                    />
                  ))}
                </div>
                <p className="text-[#001435] mb-6 group-hover:text-[#003366] transition-colors duration-300">&quot;{testimonial.content}&quot;</p>
                <div>
                  <p className="font-semibold text-[#001435] group-hover:text-[#003366] transition-colors duration-300">{testimonial.author}</p>
                  <p className="text-sm text-[#001435] group-hover:text-[#003366] transition-colors duration-300">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-[#E8D8C7]/10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#001435]">Siap untuk Tidur Lebih Baik?</h2>
          <p className="text-[#001435] mb-8">
            Ubah pengalaman tidur Anda dengan rangkaian premium bantal dan guling DD Pillow. Perjalanan menuju tidur yang lebih baik dimulai dari sini.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-[#001435] hover:bg-[#003366] hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out text-white">
              <Link href="/our-product">Jelajahi Produk</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-[#001435] text-[#001435] hover:bg-[#001435] hover:text-white hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
              <Link href="/contact">Hubungi Kami</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
