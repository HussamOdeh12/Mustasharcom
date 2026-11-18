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

  let targetUrl = '/';
  if (currentLocale === 'en') {
    if (pathname === '/') {
      targetUrl = '/ar';
    } else {
      targetUrl = `/ar${pathname}`;
    }
  } else {
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
      className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium border border-[#E3DFD7] dark:border-[#1A2E26] text-[#2C3A34] dark:text-[#C8D4CE] hover:text-[#0B1713] dark:hover:text-white hover:bg-[#F3EFEA] dark:hover:bg-[#10221C] transition-colors whitespace-nowrap shrink-0 ${className}`}
      aria-label={`Switch to ${label}`}
      title={`Switch to ${label}`}
      lang={currentLocale === 'en' ? 'ar' : 'en'}
      dir={currentLocale === 'en' ? 'rtl' : 'ltr'}
    >
      <Globe className="w-3.5 h-3.5 text-[#6B1426] dark:text-[#2DD4A4]" />
      <span>{label}</span>
    </Link>
  );
}
