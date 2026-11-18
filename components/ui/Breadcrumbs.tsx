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
        className="flex items-center gap-1.5 text-xs text-[#697671] dark:text-[#A3B8B0] py-2.5 overflow-x-auto whitespace-nowrap"
        dir={isRtl ? 'rtl' : 'ltr'}
      >
        {allItems.map((item, idx) => {
          const isLast = idx === allItems.length - 1;

          return (
            <React.Fragment key={idx}>
              {idx > 0 && <Separator className="w-3.5 h-3.5 text-[#697671] dark:text-[#A3B8B0] shrink-0" />}
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="hover:text-[#174B3E] dark:hover:text-[#18C6A0] transition-colors focus:outline-none focus-visible:underline"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="font-medium text-[#17211D] dark:text-[#F4F7F5]" aria-current={isLast ? 'page' : undefined}>
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
