import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import CategoryCard from "@/components/CategoryCard";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Star } from "lucide-react";
import { organizationJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Home",
  description: "DD Pillow - Premium pillows and bolsters for the perfect night's sleep",
};

const features = [
  {
    title: "Premium Materials",
    description:
      "We source only the highest quality materials for our products, ensuring durability and comfort that lasts for years.",
    icon: <Star className="h-10 w-10 text-[#001435]" />,
  },
  {
    title: "Expert Craftsmanship",
    description:
      "Each product is meticulously crafted by skilled artisans with decades of experience in pillow and bolster making.",
    icon: <Star className="h-10 w-10 text-[#001435]" />,
  },
  {
    title: "Better Sleep Guarantee",
    description:
      "Experience improved sleep quality with our ergonomically designed products that provide optimal support and comfort.",
    icon: <Star className="h-10 w-10 text-[#001435]" />,
  },
];

const testimonials = [
  {
    content:
      "The memory foam pillow from DD Pillow has completely transformed my sleep. I wake up without any neck pain for the first time in years!",
    author: "Sarah Johnson",
    role: "Verified Customer",
  },
  {
    content:
      "I was skeptical about spending this much on a pillow, but it's worth every penny. The quality is exceptional and it holds its shape perfectly.",
    author: "Michael Chen",
    role: "Verified Customer",
  },
  {
    content:
      "The body alignment bolster has been a game-changer for my pregnancy. I can finally get comfortable sleep in my third trimester!",
    author: "Emily Rodriguez",
    role: "Verified Customer",
  },
];

export default function Home() {
  return (
    <>
      {/* JsonLd would go here - Handled by metadata in production */}
      
      <Hero
        title="Experience the Perfect Night's Sleep"
        subtitle="Premium pillows and bolsters crafted for ultimate comfort and support"
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
                <p className="text-[#001435]">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Featured Products */}
      <Section className="bg-[#E8D8C7]/5">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#001435]">Featured Products</h2>
          <p className="text-[#001435] max-w-2xl mx-auto">
            Discover our most popular premium sleep products, designed for comfort and support
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <CategoryCard
            category="pillow"
            title="Premium Pillows"
            description="Experience exceptional comfort with our range of premium pillows designed for all sleep positions and preferences."
            imageUrl="/products/pillow/classic-1.jpg"
            delay={0.2}
          />
          <CategoryCard
            category="bolster"
            title="Supportive Bolsters"
            description="Our ergonomic bolsters provide targeted support for your neck, back, and joints for improved sleep quality."
            imageUrl="/products/bolster/cylindrical-1.jpg"
            delay={0.4}
          />
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#001435]">What Our Customers Say</h2>
          <p className="text-[#001435] max-w-2xl mx-auto">
            Don't just take our word for it. Here's what people are saying about DD Pillow products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-[#E8D8C7] bg-white hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-[#001435] text-[#001435]"
                    />
                  ))}
                </div>
                <p className="text-[#001435] mb-6">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-[#001435]">{testimonial.author}</p>
                  <p className="text-sm text-[#001435]">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-[#E8D8C7]/10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#001435]">Ready for Better Sleep?</h2>
          <p className="text-[#001435] mb-8">
            Transform your sleep experience with DD Pillow's premium range of pillows and bolsters. Your journey to better sleep starts here.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-[#001435] hover:bg-[#001435] text-white">
              <Link href="/our-product">Explore Products</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-[#001435] text-[#001435] hover:bg-[#E8D8C7]/10">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
