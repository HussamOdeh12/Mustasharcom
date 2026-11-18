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
        className="flex items-center gap-1.5 text-xs text-[#687670] dark:text-[#8FA19A] py-2.5 overflow-x-auto whitespace-nowrap"
        dir={isRtl ? 'rtl' : 'ltr'}
      >
        {allItems.map((item, idx) => {
          const isLast = idx === allItems.length - 1;

          return (
            <React.Fragment key={idx}>
              {idx > 0 && <Separator className="w-3.5 h-3.5 text-[#687670] dark:text-[#8FA19A] shrink-0" />}
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="hover:text-[#0B1713] dark:hover:text-[#F4F6F5] transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="font-medium text-[#0B1713] dark:text-[#F4F6F5]" aria-current={isLast ? 'page' : undefined}>
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
