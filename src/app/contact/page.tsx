import { Metadata } from "next";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

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
              <h2 className="text-2xl font-bold mb-6">Hubungi Kami</h2>
              <p className="text-gray-600 mb-8">
                Ada pertanyaan tentang produk kami atau butuh bantuan dengan pesanan? Tim layanan pelanggan yang ramah siap membantu Anda. Hubungi kami melalui salah satu cara di bawah ini.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col items-center space-y-3 p-6 bg-gray-50 rounded-lg">
                  <div className="bg-accent/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Lokasi Kami</h3>
                    <p className="text-gray-600">
                      Jl. Kenyamanan No. 123<br />
                      Kota Tidur, Jakarta 12345<br />
                      Indonesia
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center space-y-3 p-6 bg-gray-50 rounded-lg">
                  <div className="bg-accent/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Telepon</h3>
                    <p className="text-gray-600">+62 21 1234-5678</p>
                  </div>
                </div>

                <div className="flex flex-col items-center space-y-3 p-6 bg-gray-50 rounded-lg">
                  <div className="bg-accent/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">info@clouddream.com</p>
                  </div>
                </div>

                <div className="flex flex-col items-center space-y-3 p-6 bg-gray-50 rounded-lg">
                  <div className="bg-accent/10 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Jam Kerja</h3>
                    <p className="text-gray-600">
                      Senin - Jumat: 09:00 - 18:00<br />
                      Sabtu: 10:00 - 16:00<br />
                      Minggu: Tutup
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
