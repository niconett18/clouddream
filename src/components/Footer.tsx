"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#E8D8C7]/5 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#001435]">DD Pillow</h3>
            <p className="text-[#001435] mb-6">
              Bantal dan guling premium yang dibuat untuk tidur malam yang sempurna.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#001435] hover:text-[#003366] transition-all duration-300 ease-in-out transform hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#001435] hover:text-[#003366] transition-all duration-300 ease-in-out transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#001435] hover:text-[#003366] transition-all duration-300 ease-in-out transform hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#001435]">Tautan Cepat</h3>
            <ul className="space-y-3">
              {[
                { name: "Beranda", path: "/" },
                { name: "Tentang Kami", path: "/about" },
                { name: "Produk Kami", path: "/our-product" },
                { name: "Kontak", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-[#001435] hover:text-[#003366] transition-all duration-300 ease-in-out transform hover:translate-x-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#001435]">Produk</h3>
            <ul className="space-y-3">
              {[
                { name: "Bantal", path: "/our-product/pillow" },
                { name: "Guling", path: "/our-product/bolster" },
                { name: "Perawatan Produk", path: "/product-knowledge" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-[#001435] hover:text-[#003366] transition-all duration-300 ease-in-out transform hover:translate-x-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#001435]">Hubungi Kami</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="text-[#001435] mt-1 flex-shrink-0" size={18} />
                <span className="text-[#001435]">
                  Jl. Kenyamanan No. 123, Kota Tidur, Jakarta 12345
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-[#001435] flex-shrink-0" size={18} />
                <span className="text-[#001435]">+62 21 1234-5678</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-[#001435] flex-shrink-0" size={18} />
                <span className="text-[#001435]">info@ddpillow.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#E8D8C7] mt-16 pt-8 text-center text-[#001435] text-sm">
          <p>© {new Date().getFullYear()} DD Pillow. Semua hak dilindungi undang-undang.</p>
        </div>
      </div>
    </footer>
  );
}
