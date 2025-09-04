import { Metadata } from "next";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Hubungi Kami",
  description: "Hubungi Cloudream untuk pertanyaan, pesanan, atau dukungan pelanggan",
};

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Hubungi Kami"
        subtitle="Kami ingin mendengar dari Anda. Hubungi kami untuk pertanyaan atau informasi apa pun."
        height="medium"
        imageUrl=""
      />

      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-[#001435] px-4">Hubungi Kami</h2>
              <p className="text-[#001435] mb-6 md:mb-8 px-4 text-sm md:text-base leading-relaxed">
                Ada pertanyaan tentang produk kami atau butuh bantuan dengan pesanan? Tim layanan pelanggan yang ramah siap membantu Anda. Hubungi kami melalui salah satu cara di bawah ini.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 px-4">
                {/* Location section removed per request */}

                <div className="flex flex-col items-center space-y-3 p-4 md:p-6 bg-gray-50 rounded-lg">
                  <div className="bg-[#001435]/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-[#001435]" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold mb-1 text-[#001435]">WhatsApp</h3>
                    <p className="text-[#001435] text-sm md:text-base">
                      <a href="https://wa.me/6281212561603" className="underline decoration-[#001435]/30 hover:decoration-[#001435] transition-colors" target="_blank" rel="noopener noreferrer">081212561603</a>
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center space-y-3 p-4 md:p-6 bg-gray-50 rounded-lg">
                  <div className="bg-[#001435]/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-[#001435]" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold mb-1 text-[#001435]">Email</h3>
                    <p className="text-[#001435] text-sm md:text-base">
                      <a href="mailto:cloudream.sleep@gmail.com" className="underline decoration-[#001435]/30 hover:decoration-[#001435] transition-colors">cloudream.sleep@gmail.com</a>
                    </p>
                  </div>
                </div>

                {/* Working hours removed per request */}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
