import React from 'react';
import Link from 'next/link';

interface LogoProps {
  locale?: 'en' | 'ar';
  variant?: 'full' | 'compact' | 'symbol';
  tone?: 'auto' | 'light';
  className?: string;
  iconSize?: number;
}

export function MustasharcomSymbol({ size = 34, className = '' }: { size?: number; className?: string }) {
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
        <linearGradient id="emeraldGrad" x1="10" y1="20" x2="60" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2DD4A4" />
          <stop offset="100%" stopColor="#007A4D" />
        </linearGradient>
        <linearGradient id="burgundyGrad" x1="60" y1="20" x2="110" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#9E2448" />
          <stop offset="100%" stopColor="#6B1426" />
        </linearGradient>
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
        opacity="0.92"
      />

      {/* Center Weave Ribbon Overpass */}
      <path
        d="M44 42L60 62L76 42L86 54L60 84L34 54L44 42Z"
        fill="url(#emeraldGrad)"
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
  tone = 'auto',
  className = '',
  iconSize = 34,
}: LogoProps) {
  const homeHref = locale === 'ar' ? '/ar' : '/';

  if (variant === 'symbol') {
    return (
      <Link
        href={homeHref}
        className={`inline-flex items-center shrink-0 transition-opacity hover:opacity-90 ${className}`}
        aria-label="Mustasharcom Home"
      >
        <MustasharcomSymbol size={iconSize} />
      </Link>
    );
  }

  const primaryTextClass =
    tone === 'light'
      ? 'text-[#F4F6F5]'
      : 'text-[#0B1713] dark:text-[#F4F6F5]';

  const accentTextClass =
    tone === 'light'
      ? 'text-[#2DD4A4]'
      : 'text-[#6B1426] dark:text-[#2DD4A4]';

  return (
    <Link
      href={homeHref}
      className={`group inline-flex items-center gap-2.5 shrink-0 transition-opacity hover:opacity-90 select-none whitespace-nowrap ${className}`}
      aria-label="Mustasharcom for Informatics Solutions"
    >
      <MustasharcomSymbol size={iconSize} />

      <span className="inline-flex items-baseline tracking-tight whitespace-nowrap leading-none text-lg sm:text-xl font-bold">
        <span className={primaryTextClass}>
          {locale === 'ar' ? 'مستشار' : 'Mustashar'}
        </span>
        <span className={accentTextClass}>
          {locale === 'ar' ? 'كم' : 'com'}
        </span>
      </span>
    </Link>
  );
}
