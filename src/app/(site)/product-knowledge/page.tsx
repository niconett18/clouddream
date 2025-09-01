"use client";

import Hero from "@/components/Hero";
import Section from "@/components/Section";

export const dynamic = 'force-dynamic';

export default function ProductKnowledgePage() {
  return (
    <>
      <Hero
        title="Product Knowledge & Care"
        subtitle="Learn about pillow materials, sizes, firmness levels, and how to care for your DD Pillow products"
        height="medium"
      />

      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Understanding Pillow Materials</h2>
            <p className="text-gray-600">
              Learn about the different materials we use to create our premium pillows and bolsters
            </p>
          </div>

          <div className="space-y-8">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Memory Foam</h3>
              <p className="text-gray-600">
                Memory foam molds to your head and neck, providing personalized support. It&apos;s excellent for pressure relief and maintaining proper spinal alignment. Our memory foam is CertiPUR-US certified, ensuring it&apos;s free from harmful chemicals and has low VOC emissions.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cooling Gel</h3>
              <p className="text-gray-600">
                Our cooling gel technology is infused into select memory foam pillows to help regulate temperature. The gel absorbs and dissipates heat, keeping the pillow surface cool throughout the night. Ideal for hot sleepers or warm climates.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Down Alternative</h3>
              <p className="text-gray-600">
                Our hypoallergenic down alternative fill mimics the softness and loft of natural down without using animal products. Made from ultra-fine microfibers, it provides plush comfort while being suitable for those with allergies or ethical concerns.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Care Instructions</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Memory Foam Pillows</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Remove and wash the cover as directed on the care label</li>
                    <li>The foam core should not be washed - spot clean if necessary</li>
                    <li>Allow the foam to air dry completely before replacing the cover</li>
                    <li>Replace your pillow every 2-3 years for optimal support</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Down Alternative Pillows</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Most are machine washable - check the care label</li>
                    <li>Wash in warm water on gentle cycle with mild detergent</li>
                    <li>Tumble dry on low heat with clean tennis balls</li>
                    <li>Replace every 1-2 years for best performance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
