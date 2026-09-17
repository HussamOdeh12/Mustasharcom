import React from 'react';
import Link from 'next/link';

interface LogoProps {
  locale?: 'en' | 'ar';
  variant?: 'full' | 'compact' | 'symbol';
  className?: string;
  iconSize?: number;
}

export function MustasharcomSymbol({ size = 36, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        {/* Emerald green gradient */}
        <linearGradient id="emeraldGrad" x1="10" y1="20" x2="60" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00A86B" />
          <stop offset="100%" stopColor="#006B3F" />
        </linearGradient>
        {/* Burgundy gradient */}
        <linearGradient id="burgundyGrad" x1="60" y1="20" x2="110" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#8B1E3F" />
          <stop offset="100%" stopColor="#5E0F23" />
        </linearGradient>
        {/* Inner subtle shadow */}
        <filter id="ribbonShadow" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.25" />
        </filter>
      </defs>

      {/* Left Emerald Ribbon Arm of 'M' */}
      <path
        d="M20 96V36C20 28 26 22 34 22H38C42 22 46 24 48 28L60 48L44 68L34 55V96H20Z"
        fill="url(#emeraldGrad)"
      />
      
      {/* Left Emerald Folded Chevron Cross */}
      <path
        d="M34 22L60 52L86 22H98C94 22 90 25 88 28L60 62L44 42L34 22Z"
        fill="#008751"
        opacity="0.9"
      />

      {/* Center Weave Ribbon Overpass */}
      <path
        d="M44 42L60 62L76 42L86 54L60 84L34 54L44 42Z"
        fill="url(#emeraldGrad)"
        filter="url(#ribbonShadow)"
      />

      {/* Right Burgundy Folded Chevron Cross */}
      <path
        d="M60 84L76 68L86 80L60 106L34 80L44 68L60 84Z"
        fill="url(#burgundyGrad)"
      />

      {/* Right Burgundy Ribbon Arm of 'M' */}
      <path
        d="M100 96V36C100 28 94 22 86 22H82C78 22 74 24 72 28L60 48L76 68L86 55V96H100Z"
        fill="url(#burgundyGrad)"
      />
    </svg>
  );
}

export default function Logo({
  locale = 'en',
  variant = 'full',
  className = '',
  iconSize = 36,
}: LogoProps) {
  const homeHref = locale === 'ar' ? '/ar' : '/';

  if (variant === 'symbol') {
    return (
      <Link
        href={homeHref}
        className={`inline-flex items-center shrink-0 transition-transform hover:scale-105 ${className}`}
        aria-label="Mustasharcom Home"
      >
        <MustasharcomSymbol size={iconSize} />
      </Link>
    );
  }

  return (
    <Link
      href={homeHref}
      className={`group inline-flex items-center gap-2.5 sm:gap-3 shrink-0 transition-opacity hover:opacity-95 select-none ${className}`}
      aria-label="Mustasharcom for Informatics Solutions"
    >
      <div className="relative shrink-0 transition-transform duration-200 group-hover:scale-105">
        <MustasharcomSymbol size={iconSize} />
      </div>

      <div className="flex flex-col text-start shrink-0">
        <div className="flex items-center tracking-tight whitespace-nowrap leading-none">
          <span className="font-bold text-base sm:text-lg text-zinc-900 dark:text-zinc-50 font-sans">
            Mustashar
          </span>
          <span className="font-bold text-base sm:text-lg text-[#6B1426] dark:text-[#F38C9C] font-sans">
            Com
          </span>
        </div>
        <span className="text-[10px] sm:text-[11px] font-semibold text-[#6B1426] dark:text-[#F38C9C] tracking-tight leading-tight mt-0.5 whitespace-nowrap font-sans">
          مستشاركم للحلول المعلوماتية
        </span>
      </div>
    </Link>
  );
}
