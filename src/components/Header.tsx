"use client";


import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
// Removed Sheet (side drawer) in favor of custom top-drop menu
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";

const navItems = [
  { name: "BERANDA", path: "/" },
  { name: "PRODUK KAMI", path: "/our-product" },
  { name: "PILIH PRODUK", path: "/selector" },
  { name: "TENTANG KAMI", path: "/about" },
  { name: "KONTAK", path: "/contact" },
];

export default function Header() {
  const [underlineStyle, setUnderlineStyle] = useState({ width: 0, left: 0 });
  const [isInitialized, setIsInitialized] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const firstMobileLinkRef = useRef<HTMLAnchorElement | null>(null);
  const triggerButtonRef = useRef<HTMLButtonElement | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const navItemRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({});
  const pathname = usePathname();


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

  // Scroll lock & ESC close for mobile menu
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
        triggerButtonRef.current?.focus();
      }
      if (e.key === 'Tab') {
        const panel = document.getElementById('mobile-top-panel');
        if (!panel) return;
        const focusables = panel.querySelectorAll<HTMLElement>('a[href],button:not([disabled]),[tabindex]:not([tabindex="-1"])');
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', onKey);
    setTimeout(() => firstMobileLinkRef.current?.focus(), 0);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener('keydown', onKey);
    };
  }, [isMobileMenuOpen]);

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
        
        {/* Mobile Navigation - custom top-drop */}
        <button
          ref={triggerButtonRef}
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-top-panel"
          className="lg:hidden p-2 relative group focus:outline-none focus:ring-2 focus:ring-[#001435]/20 rounded-lg"
        >
          <div className="w-7 h-7 flex flex-col justify-center items-center space-y-1">
            <span className={`w-6 h-0.5 bg-[#001435] rounded-full transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2 bg-[#003366]' : 'group-hover:bg-[#003366]'}`}></span>
            <span className={`w-6 h-0.5 bg-[#001435] rounded-full transition-all ${isMobileMenuOpen ? 'opacity-0 scale-0' : 'group-hover:bg-[#003366]'}`}></span>
            <span className={`w-6 h-0.5 bg-[#001435] rounded-full transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2 bg-[#003366]' : 'group-hover:bg-[#003366]'}`}></span>
          </div>
        </button>
      </div>
      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-[#001435]/30 backdrop-blur-[2px] lg:hidden z-[60]"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
      {/* Top-drop panel */}
      <div
        id="mobile-top-panel"
        role="dialog"
        aria-modal="true"
        className={`lg:hidden fixed left-0 right-0 top-0 z-[70] origin-top bg-brand-secondary border-b shadow-sm transition-transform duration-200 ${isMobileMenuOpen ? 'scale-y-100' : 'scale-y-0 pointer-events-none'} transform`}
        style={{ transformOrigin: 'top' }}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="h-14 flex items-center justify-between">
            <Link href="/" className="flex items-center" aria-label="Cloudream Logo">
              <Image src="/logoclouddream.svg" alt="Cloudream Logo" width={150} height={50} className="h-10 w-auto" />
            </Link>
            <button
              onClick={() => { setIsMobileMenuOpen(false); triggerButtonRef.current?.focus(); }}
              aria-label="Close menu"
              className="w-10 h-10 grid place-items-center focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true"><path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            </button>
          </div>
          <nav aria-label="Mobile" className="pb-2">
            {navItems.map((item, idx) => (
              <Link
                key={item.path}
                href={item.path}
                ref={idx === 0 ? firstMobileLinkRef : undefined}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block uppercase tracking-wide font-medium py-4 border-t first:border-t-0 border-gray-200/40 text-[#001435]"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
