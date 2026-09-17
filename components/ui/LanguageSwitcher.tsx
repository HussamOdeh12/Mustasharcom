'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  currentLocale: 'en' | 'ar';
  className?: string;
}

export default function LanguageSwitcher({
  currentLocale,
  className = '',
}: LanguageSwitcherProps) {
  const pathname = usePathname() || '/';

  // Calculate target URL
  let targetUrl = '/';
  if (currentLocale === 'en') {
    // Switch to Arabic
    if (pathname === '/') {
      targetUrl = '/ar';
    } else {
      targetUrl = `/ar${pathname}`;
    }
  } else {
    // Switch to English
    if (pathname === '/ar' || pathname === '/ar/') {
      targetUrl = '/';
    } else if (pathname.startsWith('/ar/')) {
      targetUrl = pathname.replace(/^\/ar/, '') || '/';
    } else {
      targetUrl = '/';
    }
  }

  const label = currentLocale === 'en' ? 'العربية' : 'English';

  return (
    <Link
      href={targetUrl}
      className={`inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-semibold border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 hover:text-[#6B1426] dark:hover:text-[#F38C9C] hover:bg-zinc-100 dark:hover:bg-zinc-800/80 transition-all whitespace-nowrap shrink-0 ${className}`}
      aria-label={`Switch to ${label}`}
      title={`Switch to ${label}`}
      lang={currentLocale === 'en' ? 'ar' : 'en'}
      dir={currentLocale === 'en' ? 'rtl' : 'ltr'}
    >
      <Globe className="w-3.5 h-3.5 text-[#6B1426] dark:text-[#E63956]" />
      <span>{label}</span>
    </Link>
  );
}
