"use client";

const navigation = [
  { name: "BERANDA", path: "/" },
  { name: "PRODUK KAMI", path: "/our-product" },
  { name: "TENTANG KAMI", path: "/about" },
  { name: "KONTAK", path: "/contact" },
];

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const navItems = [
  { name: "BERANDA", path: "/" },
  { name: "PRODUK KAMI", path: "/our-product" },
  { name: "TENTANG KAMI", path: "/about" },
  { name: "KONTAK", path: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [underlineStyle, setUnderlineStyle] = useState({ width: 0, left: 0 });
  const [isInitialized, setIsInitialized] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const navItemRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({});
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Set initial underline position for active item with a small delay
    const timer = setTimeout(() => {
      updateUnderlinePosition(pathname);
      setIsInitialized(true);
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  const updateUnderlinePosition = (path: string) => {
    const activeItem = navItemRefs.current[path];
    if (activeItem && navRef.current) {
      const activeRect = activeItem.getBoundingClientRect();
      const navRect = navRef.current.getBoundingClientRect();
      
      setUnderlineStyle({
        width: activeRect.width,
        left: activeRect.left - navRect.left,
      });
    }
  };

  const handleMouseEnter = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (navRef.current) {
      const item = event.currentTarget;
      const nav = navRef.current;
      const itemRect = item.getBoundingClientRect();
      const navRect = nav.getBoundingClientRect();
      
      setUnderlineStyle({
        width: itemRect.width,
        left: itemRect.left - navRect.left,
      });
    }
  };

  const handleMouseLeave = () => {
    // Return to active item position
    updateUnderlinePosition(pathname);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-brand-secondary shadow-sm py-4`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity duration-300">
          <Image 
            src="/logoclouddream.svg" 
            alt="Cloudream Logo" 
            width={180} 
            height={58}
            className="h-14 w-auto"
            priority
          />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:block" ref={navRef}>
          <NavigationMenu>
            <NavigationMenuList 
              className="flex gap-8 relative"
              onMouseLeave={handleMouseLeave}
            >
              {/* Animated underline */}
              <div 
                className={`absolute bottom-[-4px] h-0.5 bg-[#001435] transition-all duration-500 ease-out rounded-full ${
                  isInitialized ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  width: `${underlineStyle.width}px`,
                  left: `${underlineStyle.left}px`,
                }}
              />
              {navItems.map((item) => (
                <NavigationMenuItem key={item.path}>
                  <Link
                    href={item.path}
                    ref={(el) => {
                      navItemRefs.current[item.path] = el;
                    }}
                    onMouseEnter={handleMouseEnter}
                    className={`text-sm font-medium tracking-wider text-[#001435] hover:text-[#003366] transition-all duration-300 ease-in-out relative transform hover:scale-105 ${
                      pathname === item.path
                        ? "text-[#001435] font-semibold"
                        : "text-[#001435] opacity-80 hover:opacity-100"
                    }`}
                  >
                    {item.name}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
        
        {/* Mobile Navigation */}
        <Sheet onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger className="lg:hidden p-2 relative group focus:outline-none focus:ring-2 focus:ring-[#001435]/20 rounded-lg" aria-label="Toggle Menu">
            <div className="w-7 h-7 flex flex-col justify-center items-center space-y-1">
              <div 
                className={`w-6 h-0.5 bg-[#001435] rounded-full transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen 
                    ? 'rotate-45 translate-y-2 bg-[#003366]' 
                    : 'group-hover:bg-[#003366] group-hover:w-7'
                }`}
              ></div>
              <div 
                className={`w-6 h-0.5 bg-[#001435] rounded-full transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen 
                    ? 'opacity-0 scale-0' 
                    : 'group-hover:bg-[#003366] group-hover:w-7'
                }`}
              ></div>
              <div 
                className={`w-6 h-0.5 bg-[#001435] rounded-full transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen 
                    ? '-rotate-45 -translate-y-2 bg-[#003366]' 
                    : 'group-hover:bg-[#003366] group-hover:w-7'
                }`}
              ></div>
            </div>
          </SheetTrigger>
          <SheetContent 
            side="right" 
            className="w-full pt-16 bg-white/95 backdrop-blur-md border-l border-gray-200/50 shadow-xl"
          >
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            
            {/* Logo in mobile menu */}
            <div className="flex justify-center mb-8 pb-6 border-b border-gray-200/30">
              <Image 
                src="/logoclouddream.svg" 
                alt="Cloudream Logo" 
                width={160} 
                height={50}
                className="h-12 w-auto"
              />
            </div>
            
            <nav className="flex flex-col gap-2 px-2">
              {navItems.map((item, index) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`relative px-6 py-4 text-lg font-medium tracking-wide rounded-xl transition-all duration-300 ease-out group text-center ${
                    pathname === item.path 
                      ? "text-white bg-gradient-to-r from-[#001435] to-[#003366] shadow-lg" 
                      : "text-[#001435] hover:bg-[#001435]/8 hover:text-[#003366] hover:shadow-md"
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: 'slideInFromRight 0.6s ease-out forwards'
                  }}
                >
                  <span className="relative z-10 transition-transform duration-200 group-hover:translate-x-1">
                    {item.name}
                  </span>
                  {pathname !== item.path && (
                    <div className="absolute inset-0 bg-gradient-to-r from-[#001435]/5 to-[#003366]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  )}
                </Link>
              ))}
            </nav>
            
            {/* Contact info in mobile menu */}
            <div className="mt-12 px-6 text-center">
              <div className="text-sm text-[#001435]/80 mb-2">Hubungi Kami</div>
              <div className="text-xs text-[#001435]/60">Premium Sleep Solutions</div>
            </div>
            
            {/* Footer in mobile menu */}
            <div className="absolute bottom-6 left-6 right-6 text-center">
              <p className="text-xs text-gray-500/80">
                © 2024 Cloudream
              </p>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
