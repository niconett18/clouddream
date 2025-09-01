import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ImageGallery from "@/components/ImageGallery";
import { Button } from "@/components/ui/button";
import { getProductBySlug } from "@/data/products";
import { ChevronRight, MessageCircle, Check } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}): Promise<Metadata> {
  const { category, slug } = await params;
  const product = getProductBySlug(category, slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: product.name,
    description: product.shortDesc,
    openGraph: {
      images: [{ url: product.images[0], width: 800, height: 600, alt: product.name }],
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  const product = getProductBySlug(category, slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <Section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex mb-8 text-sm">
            <ol className="flex items-center space-x-1">
              <li>
                <Link href="/" className="text-gray-500 hover:text-accent">
                  Home
                </Link>
              </li>
              <li className="flex items-center space-x-1">
                <ChevronRight className="h-4 w-4 text-gray-400" />
                <Link href="/our-product" className="text-gray-500 hover:text-accent">
                  Our Products
                </Link>
              </li>
              <li className="flex items-center space-x-1">
                <ChevronRight className="h-4 w-4 text-gray-400" />
                <Link
                  href={`/our-product/${category}`}
                  className="text-gray-500 hover:text-accent"
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}s
                </Link>
              </li>
              <li className="flex items-center space-x-1">
                <ChevronRight className="h-4 w-4 text-gray-400" />
                <span className="text-gray-900 font-medium">{product.name}</span>
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div>
              <ImageGallery images={product.images} productName={product.name} />
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                <p className="text-gray-500 mb-4">SKU: {product.id}</p>
                {product.price && (
                  <div className="space-y-2">
                    {product.originalPrice ? (
                      <div className="flex flex-col space-y-1">
                        <p className="text-lg text-gray-500 line-through">
                          Rp {product.originalPrice.toLocaleString('id-ID')}
                        </p>
                        <p className="text-2xl font-bold text-accent">
                          Rp {product.price.toLocaleString('id-ID')}
                        </p>
                        <div className="inline-block bg-red-100 text-red-800 text-sm font-medium px-2 py-1 rounded-lg">
                          Save Rp {(product.originalPrice - product.price).toLocaleString('id-ID')}
                        </div>
                      </div>
                    ) : (
                      <p className="text-2xl font-bold text-accent">
                        Rp {product.price.toLocaleString('id-ID')}
                      </p>
                    )}
                  </div>
                )}
              </div>

              <div className="prose max-w-none text-gray-700">
                <p>{product.longDesc}</p>
              </div>

              {/* Specs */}
              <div className="space-y-4 border-t border-b border-gray-200 py-6">
                <h3 className="text-lg font-semibold">Specifications</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Available Sizes:</strong> {product.specs.size.join(", ")}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Fill Material:</strong> {product.specs.fill}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Cover Material:</strong> {product.specs.cover}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Firmness:</strong> {product.specs.firmness}
                    </span>
                  </li>
                </ul>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                {product.shopeeLink ? (
                  <Button asChild size="lg" className="gap-2 bg-orange-500 hover:bg-orange-600">
                    <Link href={product.shopeeLink} target="_blank" rel="noopener noreferrer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M20.84 2.05L12.93.83c-.78-.13-1.07-.13-1.85 0L3.16 2.05c-.69.11-.69.2-.69.89v18.12c0 .69 0 .78.69.89l7.92 1.22c.78.13 1.07.13 1.85 0l7.91-1.22c.69-.11.69-.2.69-.89V2.94c0-.69 0-.78-.69-.89zM12 3.8c4.6 0 8.33 3.73 8.33 8.33S16.6 20.46 12 20.46s-8.33-3.73-8.33-8.33S7.4 3.8 12 3.8zm-.93 4.69l-3.76 6.51a.5.5 0 0 0 .43.74h1.87a.5.5 0 0 0 .43-.25l1.96-3.4 1.96 3.4a.5.5 0 0 0 .43.25h1.87a.5.5 0 0 0 .43-.74l-3.76-6.51a.5.5 0 0 0-.86 0z"/>
                      </svg>
                      Beli di Shopee
                    </Link>
                  </Button>
                ) : (
                  <Button asChild size="lg" className="gap-2">
                    <Link href="/contact">
                      <MessageCircle className="h-5 w-5" />
                      Contact Us About This Product
                    </Link>
                  </Button>
                )}
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="gap-2 border-green-600 text-green-600 hover:bg-green-50"
                >
                  <Link
                    href={`https://wa.me/15551234567?text=I'm%20interested%20in%20the%20${encodeURIComponent(
                      product.name
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="none"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Related Information */}
      <Section className="bg-accent/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Care & Maintenance</h2>
          <div className="prose max-w-none text-gray-700">
            <p>
              To keep your {product.name} in optimal condition and extend its lifespan, follow these care instructions:
            </p>
            <ul>
              <li>
                Remove and wash the cover as directed on the care label, typically in cold water on a gentle cycle.
              </li>
              <li>
                For {product.category === "pillow" ? "memory foam pillows" : "bolsters"}, the core should not be washed. Spot clean with mild soap and water if necessary.
              </li>
              <li>Allow to air dry completely before replacing the cover.</li>
              <li>Fluff and rotate regularly to maintain shape and even wear.</li>
              <li>Keep away from direct sunlight and heat sources.</li>
            </ul>
            <p>
              For more detailed care instructions, please visit our{" "}
              <Link href="/product-knowledge" className="text-accent hover:underline">
                Product Knowledge & Care
              </Link>{" "}
              page.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
