"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface NavItem {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
}

const NAV: NavItem[] = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about" },
  { label: "PRODUCT KNOWLEDGE & CARE", href: "/product-knowledge" },
  {
    label: "OUR PRODUCT",
    children: [
      { label: "PILLOW", href: "/our-product/pillow" },
      { label: "BOLSTER", href: "/our-product/bolster" },
    ],
  },
  { label: "ARTICLE", href: "/articles" },
  { label: "CONTACT", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [prodOpen, setProdOpen] = useState(false);
  const pathname = usePathname();
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  // Lock body scroll & focus management
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      setTimeout(() => firstLinkRef.current?.focus(), 0);
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Reset nested menu when closing
  useEffect(() => {
    if (!open) setProdOpen(false);
  }, [open]);

  // Focus trap & ESC handling
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
        triggerRef.current?.focus();
        return;
      }
      if (e.key === "Tab" && panelRef.current) {
        const focusables = panelRef.current.querySelectorAll<HTMLElement>(
          'a[href],button:not([disabled]),[tabindex]:not([tabindex="-1"])'
        );
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            (last as HTMLElement).focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            (first as HTMLElement).focus();
          }
        }
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open]);

  const close = () => {
    setOpen(false);
    triggerRef.current?.focus();
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-brand-secondary">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center" aria-label="Cloudreams home">
          <Image
            src="/logoclouddream.svg"
            alt="Cloudreams Logo"
            width={150}
            height={48}
            className="h-10 w-auto"
            priority
          />
        </Link>
        {/* Desktop simple nav (structural only, colors preserved) */}
        <nav className="hidden sm:flex gap-6 text-xs font-medium tracking-wide">
          {NAV.filter(n => n.href).map(item => (
            <Link
              key={item.label}
              href={item.href!}
              className={`uppercase transition-opacity ${pathname === item.href ? 'opacity-100' : 'opacity-80 hover:opacity-100'}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          ref={triggerRef}
            type="button"
          aria-label="Open menu"
          aria-controls="mobile-top-panel"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="sm:hidden inline-flex items-center justify-center w-10 h-10 focus:outline-none focus:ring-2 focus:ring-offset-2"
        >
          <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
        </button>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[60] sm:hidden bg-[#001435]/30"
          onClick={close}
          aria-hidden="true"
        />
      )}

      <div
        id="mobile-top-panel"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Main navigation"
        className={`sm:hidden fixed left-0 right-0 top-0 z-[70] origin-top shadow-md border-b bg-brand-secondary ${open ? 'animate-slideDown' : 'hidden'}`}
      >
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6">
          <div className="h-14 flex items-center justify-between">
            <Link href="/" className="flex items-center" aria-label="Cloudreams home (menu)">
              <Image
                src="/logoclouddream.svg"
                alt="Cloudreams Logo"
                width={140}
                height={46}
                className="h-10 w-auto"
                priority
              />
            </Link>
            <button
              type="button"
              aria-label="Close menu"
              onClick={close}
              className="w-10 h-10 grid place-items-center focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true"><path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            </button>
          </div>
          <nav className="pb-2" aria-label="Mobile primary">
            {NAV.map((item, idx) => {
              if (item.children) {
                return (
                  <div key={item.label} className="border-t first:border-t-0">
                    <button
                      type="button"
                      className="menu-row flex items-center justify-between w-full uppercase"
                      aria-expanded={prodOpen}
                      aria-controls="submenu-products"
                      onClick={() => setProdOpen(v => !v)}
                    >
                      <span>{item.label}</span>
                      <span aria-hidden="true" className="ml-4 select-none">{prodOpen ? '−' : '+'}</span>
                    </button>
                    {prodOpen && (
                      <div id="submenu-products" className="pl-4 border-t" ref={idx === 0 ? undefined : undefined}>
                        {item.children.map(child => (
                          <Link
                            key={child.href}
                            ref={!firstLinkRef.current ? firstLinkRef : undefined}
                            href={child.href}
                            className="submenu-row"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              const linkEl = (
                <Link
                  key={item.href}
                  ref={!firstLinkRef.current ? firstLinkRef : undefined}
                  href={item.href!}
                  className="menu-row uppercase"
                >
                  {item.label}
                </Link>
              );
              return linkEl;
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
