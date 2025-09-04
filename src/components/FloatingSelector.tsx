'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MessageCircleQuestion, X } from 'lucide-react';

export default function FloatingSelector() {
  const [isVisible, setIsVisible] = useState(true);
  const pathname = usePathname();

  // Hide the floating button on the selector page itself
  if (pathname === '/selector') {
    return null;
  }

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Action Button */}
      <div className="relative group">
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap">
            Temukan bantal ideal Anda
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
          </div>
        </div>

        {/* Pulse animation - behind the button */}
        <div className="absolute inset-0 rounded-full bg-[#001435] animate-ping opacity-20 -z-10"></div>

        {/* Main Button */}
        <Button
          asChild
          size="lg"
          className="relative z-10 w-16 h-16 rounded-full bg-[#001435] hover:bg-[#003366] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        >
          <Link href="/selector">
            <MessageCircleQuestion className="w-6 h-6 text-white" />
          </Link>
        </Button>

        {/* Close button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute -top-2 -right-2 w-6 h-6 bg-gray-500 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors duration-200 z-20"
          aria-label="Tutup"
        >
          <X className="w-3 h-3 text-white" />
        </button>
      </div>
    </div>
  );
}
