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
      className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium border border-[#DCE3DF] dark:border-[#174B3E] text-[#17211D] dark:text-[#DCE6E2] hover:text-[#174B3E] dark:hover:text-[#18C6A0] hover:bg-[#ECE9E2] dark:hover:bg-[#10352C] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#18C6A0] whitespace-nowrap shrink-0 ${className}`}
      aria-label={`Switch to ${label}`}
      title={`Switch to ${label}`}
      lang={currentLocale === 'en' ? 'ar' : 'en'}
      dir={currentLocale === 'en' ? 'rtl' : 'ltr'}
    >
      <Globe className="w-3.5 h-3.5 text-[#174B3E] dark:text-[#18C6A0]" />
      <span>{label}</span>
    </Link>
  );
}
