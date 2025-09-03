"use client";

import Link from "next/link";
import { Instagram, MapPin, Phone, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#E8D8C7]/5 pt-12 md:pt-16 pb-6 md:pb-8">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-[#001435]">Cloudream</h3>
            <p className="text-[#001435] mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
              Bantal dan guling premium yang dibuat untuk tidur malam yang sempurna.
            </p>
            <div className="flex flex-wrap gap-4 mt-2">
              <a
                href="https://wa.me/6281212561603"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#001435] hover:text-[#003366] transition-all duration-300 hover:translate-x-1 text-sm"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} /> <span className="uppercase tracking-wide">WA 081212561603</span>
              </a>
              <a
                href="mailto:cloudream.sleep@gmail.com"
                className="flex items-center gap-2 text-[#001435] hover:text-[#003366] transition-all duration-300 hover:translate-x-1 text-sm"
                aria-label="Email"
              >
                <Mail size={18} /> <span className="tracking-wide">cloudream.sleep@gmail.com</span>
              </a>
              <a
                href="https://instagram.com/cloudream.sleep"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#001435] hover:text-[#003366] transition-all duration-300 hover:translate-x-1 text-sm"
                aria-label="Instagram"
              >
                <Instagram size={18} /> <span className="uppercase tracking-wide">@cloudream.sleep</span>
              </a>
              <a
                href="https://www.tiktok.com/@cloudream.sleep"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#001435] hover:text-[#003366] transition-all duration-300 hover:translate-x-1 text-sm"
                aria-label="TikTok"
              >
                {/* Simple musical note substitute icon using SVG (keeping current color) */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 18V5l12-2v13"/><circle cx="9" cy="18" r="3"/><circle cx="21" cy="16" r="3"/></svg>
                <span className="uppercase tracking-wide">@cloudream.sleep</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-[#001435]">Tautan Cepat</h3>
            <ul className="space-y-2 md:space-y-3">
              {[
                { name: "Beranda", path: "/" },
                { name: "Tentang Kami", path: "/about" },
                { name: "Produk Kami", path: "/our-product" },
                { name: "Kontak", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-[#001435] hover:text-[#003366] transition-all duration-300 ease-in-out transform hover:translate-x-1 text-sm md:text-base touch-target block py-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-[#001435]">Produk</h3>
            <ul className="space-y-2 md:space-y-3">
              {[
                { name: "Bantal", path: "/our-product/pillow" },
                { name: "Guling", path: "/our-product/bolster" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-[#001435] hover:text-[#003366] transition-all duration-300 ease-in-out transform hover:translate-x-1 text-sm md:text-base touch-target block py-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-[#001435]">Hubungi Kami</h3>
            <ul className="space-y-3 md:space-y-4">
              {/* Location removed per request */}
              <li className="flex items-center space-x-3">
                <Phone className="text-[#001435] flex-shrink-0" size={18} />
                <a href="tel:+6281212561603" className="text-[#001435] text-sm md:text-base hover:text-[#003366] transition-colors">WA 081212561603</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-[#001435] flex-shrink-0" size={18} />
                <a href="mailto:cloudream.sleep@gmail.com" className="text-[#001435] text-sm md:text-base hover:text-[#003366] transition-colors">cloudream.sleep@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#E8D8C7] mt-12 md:mt-16 pt-6 md:pt-8 text-center text-[#001435] text-xs md:text-sm">
          <p>© {new Date().getFullYear()} Cloudream. Semua hak dilindungi undang-undang.</p>
        </div>
      </div>
    </footer>
  );
}
