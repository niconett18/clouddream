import { Metadata } from "next";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with DD Pillow for inquiries, orders, or customer support",
};

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out with any questions or inquiries."
        height="medium"
      />

      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                Have questions about our products or need assistance with an order? Our friendly customer service team is here to help. Reach out through any of the methods below.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col items-center space-y-3 p-6 bg-gray-50 rounded-lg">
                  <div className="bg-accent/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Our Location</h3>
                    <p className="text-gray-600">
                      123 Comfort Lane<br />
                      Sleep City, CA 90210<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center space-y-3 p-6 bg-gray-50 rounded-lg">
                  <div className="bg-accent/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex flex-col items-center space-y-3 p-6 bg-gray-50 rounded-lg">
                  <div className="bg-accent/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">info@ddpillow.com</p>
                  </div>
                </div>

                <div className="flex flex-col items-center space-y-3 p-6 bg-gray-50 rounded-lg">
                  <div className="bg-accent/10 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
