import { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Award, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: "Pelajari tentang DD Pillow, misi kami, dan komitmen kami terhadap produk tidur berkualitas",
};

const certifications = [
  {
    name: "ISO 9001",
    description: "Sistem Manajemen Kualitas",
    icon: <Award className="h-10 w-10 text-[#001435]" />,
  },
  {
    name: "OEKO-TEX",
    description: "Sertifikasi Standard 100",
    icon: <Shield className="h-10 w-10 text-[#001435]" />,
  },
  {
    name: "GOTS",
    description: "Global Organic Textile Standard",
    icon: <Check className="h-10 w-10 text-[#001435]" />,
  },
  {
    name: "ISO 14001",
    description: "Manajemen Lingkungan",
    icon: <Shield className="h-10 w-10 text-[#001435]" />,
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        title="Tentang DD Pillow"
        subtitle="Cerita, misi, dan komitmen kami terhadap kualitas"
        height="medium"
      />

      {/* Company Story */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Cerita Kami</h2>
            <p className="text-[#001435] mb-4">
              Didirikan pada tahun 2015, DD Pillow dimulai dengan misi sederhana: menciptakan bantal dan guling yang benar-benar meningkatkan kualitas tidur dan meningkatkan kesejahteraan. Pendiri kami, setelah menderita sakit leher kronis, tidak dapat menemukan bantal yang memberikan dukungan dan kenyamanan yang tepat. Hal ini mengarah pada pengembangan bantal memory foam pertama kami, yang dirancang khusus untuk memberikan keselarasan tulang belakang yang optimal.
            </p>
            <p className="text-[#001435] mb-4">
              Apa yang dimulai sebagai solusi untuk masalah pribadi dengan cepat berkembang menjadi perusahaan yang berdedikasi untuk membantu orang lain merasakan tidur yang lebih baik. Hari ini, DD Pillow telah memperluas lini produknya untuk mencakup berbagai bantal dan guling yang dirancang untuk posisi tidur, tipe tubuh, dan preferensi kenyamanan yang berbeda.
            </p>
            <p className="text-[#001435]">
              Kami tetap berkomitmen pada prinsip-prinsip pendiri kami: bahan berkualitas, keahlian ahli, dan kepuasan pelanggan. Setiap produk yang kami buat adalah hasil dari penelitian, pengujian, dan penyempurnaan yang ekstensif untuk memastikan Anda mendapatkan tidur terbaik.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/about-company.jpg"
              alt="DD Pillow Team"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </Section>

      {/* Mission */}
      <Section className="bg-accent/5">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Misi Kami</h2>
          <p className="text-[#001435] text-lg mb-6">
            Di DD Pillow, kami percaya bahwa tidur berkualitas adalah fondasi dari kehidupan yang sehat dan produktif. Misi kami adalah menciptakan produk tidur premium yang membantu orang bangun dengan segar, berenergi, dan siap menghadapi hari.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <Check className="h-8 w-8 text-[#001435]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Kualitas</h3>
              <p className="text-[#001435]">
                Kami hanya menggunakan bahan terbaik dan mempertahankan standar kontrol kualitas yang ketat.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-[#001435]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Inovasi</h3>
              <p className="text-[#001435]">
                Kami terus meneliti dan mengembangkan teknologi baru untuk meningkatkan kualitas tidur.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-[#001435]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Keberlanjutan</h3>
              <p className="text-[#001435]">
                Kami berkomitmen pada proses manufaktur yang bertanggung jawab terhadap lingkungan.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Factory & Quality */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/factory.jpg"
              alt="DD Pillow Factory"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold mb-6">Pabrik & Standar Kualitas Kami</h2>
            <p className="text-[#001435] mb-4">
              Fasilitas manufaktur canggih kami menggabungkan keahlian tradisional dengan teknologi modern. Setiap bantal dan guling dibuat dengan teliti oleh pengrajin terampil dengan pengalaman puluhan tahun, memastikan kualitas luar biasa dan perhatian terhadap detail.
            </p>
            <p className="text-[#001435] mb-4">
              Kami mempertahankan standar kontrol kualitas yang ketat sepanjang proses produksi. Setiap produk menjalani pengujian ketat untuk kenyamanan, dukungan, daya tahan, dan keamanan sebelum meninggalkan fasilitas kami. Kami bangga mengatakan bahwa tingkat pengembalian kami kurang dari 1%, bukti komitmen kami terhadap kualitas.
            </p>
            <p className="text-[#001435]">
              Selain standar kualitas internal kami, kami mematuhi sertifikasi internasional untuk bahan dan proses manufaktur. Ini memastikan bahwa produk kami tidak hanya memberikan kenyamanan luar biasa tetapi juga aman untuk Anda dan lingkungan.
            </p>
          </div>
        </div>
      </Section>

      {/* Certifications */}
      <Section className="bg-accent/5">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Sertifikasi Kami</h2>
          <p className="text-[#001435] max-w-2xl mx-auto">
            DD Pillow memenuhi dan melampaui standar industri untuk kualitas, keamanan, dan keberlanjutan
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <div className="mx-auto mb-4 w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                  {cert.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{cert.name}</h3>
                <p className="text-[#001435]">{cert.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
