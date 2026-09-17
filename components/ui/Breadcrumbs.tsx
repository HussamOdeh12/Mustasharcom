import React from 'react';
import Link from 'next/link';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Locale } from '@/lib/company-data';
import { UI_STRINGS } from '@/lib/translations';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  locale: Locale;
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ locale, items }: BreadcrumbsProps) {
  const isRtl = locale === 'ar';
  const Separator = isRtl ? ChevronLeft : ChevronRight;
  const t = UI_STRINGS[locale];

  const allItems = [
    { label: t.breadcrumbsHome, href: locale === 'ar' ? '/ar' : '/' },
    ...items,
  ];

  // Generate Schema.org BreadcrumbList JSON-LD
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: allItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: item.href ? `https://mustasharcom.ae${item.href}` : undefined,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav
        aria-label="Breadcrumbs"
        className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 py-2.5 overflow-x-auto whitespace-nowrap"
        dir={isRtl ? 'rtl' : 'ltr'}
      >
        {allItems.map((item, idx) => {
          const isLast = idx === allItems.length - 1;

          return (
            <React.Fragment key={idx}>
              {idx > 0 && <Separator className="w-3.5 h-3.5 text-zinc-400 shrink-0" />}
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="hover:text-[#6B1426] dark:hover:text-zinc-200 transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="font-semibold text-zinc-900 dark:text-zinc-200" aria-current={isLast ? 'page' : undefined}>
                  {item.label}
                </span>
              )}
            </React.Fragment>
          );
        })}
      </nav>
    </>
  );
}
