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
        <Sheet>
          <SheetTrigger className="lg:hidden p-2" aria-label="Open Menu">
            <Menu size={24} className="text-[#001435] hover:text-[#003366] transition-colors duration-300" />
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:w-80 pt-12 bg-brand-secondary">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <nav className="flex flex-col gap-6 mt-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`text-base font-medium tracking-wider text-[#001435] hover:text-[#003366] transition-all duration-300 ease-in-out transform hover:translate-x-2 ${
                    pathname === item.path ? "text-[#001435] font-semibold" : "text-[#001435] opacity-80 hover:opacity-100"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
