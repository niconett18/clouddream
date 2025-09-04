import React from 'react';

export const SleepPositionIcons = {
  telentang: () => (
    <svg viewBox="0 0 80 60" className="w-full h-full" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
      <rect x="5" y="30" width="70" height="20" rx="10" fill="#E5E7EB" stroke="#001435" strokeWidth="3"/>
      <circle cx="40" cy="18" r="10" fill="#DBEAFE" stroke="#001435" strokeWidth="3"/>
      <rect x="24" y="26" width="32" height="24" rx="6" fill="#DBEAFE" stroke="#001435" strokeWidth="3"/>
    </svg>
  ),
  miring: () => (
    <svg viewBox="0 0 80 60" className="w-full h-full" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
      <rect x="5" y="30" width="70" height="20" rx="10" fill="#E5E7EB" stroke="#001435" strokeWidth="3"/>
      <circle cx="32" cy="22" r="10" fill="#DBEAFE" stroke="#001435" strokeWidth="3"/>
      <ellipse cx="40" cy="38" rx="18" ry="14" fill="#DBEAFE" stroke="#001435" strokeWidth="3"/>
    </svg>
  ),
  tengkurap: () => (
    <svg viewBox="0 0 80 60" className="w-full h-full" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
      <rect x="5" y="30" width="70" height="20" rx="10" fill="#E5E7EB" stroke="#001435" strokeWidth="3"/>
      <circle cx="40" cy="24" r="10" fill="#DBEAFE" stroke="#001435" strokeWidth="3"/>
      <rect x="28" y="32" width="24" height="14" rx="4" fill="#DBEAFE" stroke="#001435" strokeWidth="3"/>
    </svg>
  )
};

export const FirmnessIcons = {
  lembut: () => (
  <svg viewBox="0 0 80 60" className="w-full h-full" width="100%" height="100%">
      {/* Soft pillow with wavy line */}
      <rect x="15" y="25" width="50" height="20" rx="10" fill="#FEE2E2" stroke="#001435" strokeWidth="3"/>
      <path d="M15 30 Q25 20 35 30 Q45 20 55 30 Q65 20 65 30" stroke="#001435" strokeWidth="3" fill="none"/>
      <circle cx="30" cy="15" r="3" fill="#F87171"/>
      <circle cx="50" cy="15" r="3" fill="#F87171"/>
    </svg>
  ),
  sedang: () => (
  <svg viewBox="0 0 80 60" className="w-full h-full" width="100%" height="100%">
      {/* Medium firmness pillow */}
      <rect x="15" y="25" width="50" height="20" rx="10" fill="#FEF3C7" stroke="#001435" strokeWidth="3"/>
      <line x1="20" y1="35" x2="60" y2="35" stroke="#001435" strokeWidth="3"/>
      <circle cx="30" cy="18" r="3" fill="#FBBF24"/>
      <circle cx="50" cy="18" r="3" fill="#FBBF24"/>
    </svg>
  ),
  keras: () => (
  <svg viewBox="0 0 80 60" className="w-full h-full" width="100%" height="100%">
      {/* Firm pillow with solid lines */}
      <rect x="15" y="25" width="50" height="20" rx="10" fill="#DBEAFE" stroke="#001435" strokeWidth="3"/>
      <line x1="20" y1="30" x2="60" y2="30" stroke="#001435" strokeWidth="3"/>
      <line x1="20" y1="35" x2="60" y2="35" stroke="#001435" strokeWidth="3"/>
      <line x1="20" y1="40" x2="60" y2="40" stroke="#001435" strokeWidth="3"/>
    </svg>
  )
};

export const LoftIcons = {
  rendah: () => (
  <svg viewBox="0 0 80 60" className="w-full h-full" width="100%" height="100%">
      {/* Low pillow */}
      <rect x="20" y="38" width="40" height="10" rx="5" fill="#F3F4F6" stroke="#001435" strokeWidth="3"/>
      {/* Height indicator */}
      <line x1="12" y1="43" x2="12" y2="30" stroke="#001435" strokeWidth="3"/>
      <text x="8" y="37" fontSize="10" fill="#001435" fontWeight="bold">Low</text>
    </svg>
  ),
  sedang: () => (
  <svg viewBox="0 0 80 60" className="w-full h-full" width="100%" height="100%">
      {/* Medium pillow */}
      <rect x="20" y="32" width="40" height="16" rx="8" fill="#FEF3C7" stroke="#001435" strokeWidth="3"/>
      {/* Height indicator */}
      <line x1="12" y1="40" x2="12" y2="22" stroke="#001435" strokeWidth="3"/>
      <text x="8" y="31" fontSize="10" fill="#001435" fontWeight="bold">Med</text>
    </svg>
  ),
  tinggi: () => (
  <svg viewBox="0 0 80 60" className="w-full h-full" width="100%" height="100%">
      {/* High pillow */}
      <rect x="20" y="25" width="40" height="22" rx="11" fill="#DBEAFE" stroke="#001435" strokeWidth="3"/>
      {/* Height indicator */}
      <line x1="12" y1="36" x2="12" y2="15" stroke="#001435" strokeWidth="3"/>
      <text x="6" y="25" fontSize="10" fill="#001435" fontWeight="bold">High</text>
    </svg>
  )
};

export const AllergyIcons = {
  ya: () => (
  <svg viewBox="0 0 80 60" className="w-full h-full" width="100%" height="100%">
      {/* Shield with X for allergic */}
      <circle cx="40" cy="25" r="18" fill="#FEE2E2" stroke="#001435" strokeWidth="4"/>
      <path d="M30 20 L50 30 M50 20 L30 30" stroke="#001435" strokeWidth="4"/>
      <text x="40" y="50" textAnchor="middle" fontSize="10" fill="#001435" fontWeight="bold">No Feathers</text>
    </svg>
  ),
  tidak: () => (
  <svg viewBox="0 0 80 60" className="w-full h-full" width="100%" height="100%">
      {/* Check mark for OK with feathers */}
      <circle cx="40" cy="25" r="18" fill="#ECFDF5" stroke="#001435" strokeWidth="4"/>
      <path d="M30 25 L36 31 L48 21" stroke="#10B981" strokeWidth="4" fill="none"/>
      <text x="40" y="50" textAnchor="middle" fontSize="10" fill="#001435" fontWeight="bold">Feathers OK</text>
    </svg>
  )
};

export const HeatIcons = {
  panas: () => (
  <svg viewBox="0 0 80 60" className="w-full h-full" width="100%" height="100%">
      {/* Hot thermometer */}
      <rect x="25" y="20" width="30" height="25" rx="15" fill="#FEE2E2" stroke="#001435" strokeWidth="3"/>
      <circle cx="40" cy="37" r="8" fill="#EF4444"/>
      <rect x="36" y="10" width="8" height="25" fill="#EF4444"/>
      <path d="M20 10 Q25 5 30 10" stroke="#F87171" strokeWidth="3" fill="none"/>
      <path d="M50 10 Q55 5 60 10" stroke="#F87171" strokeWidth="3" fill="none"/>
      <text x="40" y="56" textAnchor="middle" fontSize="10" fill="#001435" fontWeight="bold">Hot</text>
    </svg>
  ),
  normal: () => (
  <svg viewBox="0 0 80 60" className="w-full h-full" width="100%" height="100%">
      {/* Normal thermometer */}
      <rect x="25" y="20" width="30" height="25" rx="15" fill="#DBEAFE" stroke="#001435" strokeWidth="3"/>
      <circle cx="40" cy="37" r="8" fill="#3B82F6"/>
      <rect x="36" y="15" width="8" height="25" fill="#3B82F6"/>
      <circle cx="20" cy="15" r="3" fill="#93C5FD"/>
      <circle cx="60" cy="15" r="3" fill="#93C5FD"/>
      <text x="40" y="56" textAnchor="middle" fontSize="10" fill="#001435" fontWeight="bold">Normal</text>
    </svg>
  )
};

export const BolsterIcons = {
  ya: () => (
    <svg viewBox="0 0 80 60" className="w-full h-full">
      {/* Pillow + Bolster */}
      <rect x="10" y="25" width="25" height="15" rx="7" fill="#DBEAFE" stroke="#001435" strokeWidth="3"/>
      <rect x="45" y="20" width="25" height="20" rx="10" fill="#DBEAFE" stroke="#001435" strokeWidth="3"/>
      <text x="40" y="52" textAnchor="middle" fontSize="10" fill="#001435" fontWeight="bold">+ Bolster</text>
    </svg>
  ),
  tidak: () => (
    <svg viewBox="0 0 80 60" className="w-full h-full">
      {/* Just pillow */}
      <rect x="25" y="20" width="30" height="18" rx="9" fill="#F3F4F6" stroke="#001435" strokeWidth="3"/>
      <text x="40" y="52" textAnchor="middle" fontSize="10" fill="#001435" fontWeight="bold">Pillow Only</text>
    </svg>
  )
};

export const BudgetIcons = {
  hemat: () => (
    <svg viewBox="0 0 80 60" className="w-full h-full">
      {/* Single coin */}
      <circle cx="40" cy="20" r="15" fill="#FEF3C7" stroke="#001435" strokeWidth="4"/>
      <text x="40" y="25" textAnchor="middle" fontSize="12" fill="#92400E" fontWeight="bold">Rp</text>
      <text x="40" y="50" textAnchor="middle" fontSize="10" fill="#001435" fontWeight="bold">≤ 700K</text>
    </svg>
  ),
  menengah: () => (
    <svg viewBox="0 0 80 60" className="w-full h-full">
      {/* Two coins */}
      <circle cx="28" cy="20" r="12" fill="#FEF3C7" stroke="#001435" strokeWidth="4"/>
      <circle cx="52" cy="20" r="12" fill="#FEF3C7" stroke="#001435" strokeWidth="4"/>
      <text x="28" y="24" textAnchor="middle" fontSize="10" fill="#92400E" fontWeight="bold">Rp</text>
      <text x="52" y="24" textAnchor="middle" fontSize="10" fill="#92400E" fontWeight="bold">Rp</text>
      <text x="40" y="50" textAnchor="middle" fontSize="10" fill="#001435" fontWeight="bold">700K-1.5M</text>
    </svg>
  ),
  premium: () => (
    <svg viewBox="0 0 80 60" className="w-full h-full">
      {/* Three coins */}
      <circle cx="22" cy="20" r="10" fill="#FEF3C7" stroke="#001435" strokeWidth="4"/>
      <circle cx="40" cy="20" r="10" fill="#FEF3C7" stroke="#001435" strokeWidth="4"/>
      <circle cx="58" cy="20" r="10" fill="#FEF3C7" stroke="#001435" strokeWidth="4"/>
      <text x="22" y="24" textAnchor="middle" fontSize="8" fill="#92400E" fontWeight="bold">Rp</text>
      <text x="40" y="24" textAnchor="middle" fontSize="8" fill="#92400E" fontWeight="bold">Rp</text>
      <text x="58" y="24" textAnchor="middle" fontSize="8" fill="#92400E" fontWeight="bold">Rp</text>
      <text x="40" y="50" textAnchor="middle" fontSize="10" fill="#001435" fontWeight="bold">&gt; 1.5M</text>
    </svg>
  )
};
