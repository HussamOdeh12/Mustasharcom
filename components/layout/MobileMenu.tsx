'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, ArrowRight, ArrowLeft } from 'lucide-react';
import { Locale, NAVIGATION_ITEMS, SERVICES_CATALOG, COMPANY_PROFILE } from '@/lib/company-data';
import { UI_STRINGS } from '@/lib/translations';
import GlobalSearch from '../ui/GlobalSearch';
import ThemeToggle from '../ui/ThemeToggle';
import LanguageSwitcher from '../ui/LanguageSwitcher';

interface MobileMenuProps {
  locale: Locale;
}

export default function MobileMenu({ locale }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const pathname = usePathname();
  const t = UI_STRINGS[locale];
  const isRtl = locale === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const contactHref = locale === 'ar' ? '/ar/contact' : '/contact';
  const complianceHref = locale === 'ar' ? '/ar/quality-compliance' : '/quality-compliance';

  useEffect(() => {
    setIsOpen(false);
    setServicesExpanded(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden flex items-center gap-1.5">
      <GlobalSearch locale={locale} variant="compact" />

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="p-2.5 rounded-md text-[#0B1713] dark:text-[#F4F6F5] hover:bg-[#F3EFEA] dark:hover:bg-[#10221C] border border-[#E3DFD7] dark:border-[#1A2E26] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6B1426] cursor-pointer"
        aria-label={isOpen ? (isRtl ? 'إغلاق القائمة' : 'Close menu') : isRtl ? 'فتح القائمة' : 'Open menu'}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {isOpen && (
        <div
          className="fixed inset-x-0 top-16 sm:top-[72px] bottom-0 z-50 bg-[#FAF8F5] dark:bg-[#07110E] border-t border-[#E3DFD7] dark:border-[#1A2E26] overflow-y-auto px-4 sm:px-6 py-6 flex flex-col justify-between shadow-2xl"
          dir={isRtl ? 'rtl' : 'ltr'}
        >
          <div className="flex flex-col gap-5">
            <div className="w-full">
              <GlobalSearch locale={locale} variant="mobile" />
            </div>

            <nav className="flex flex-col divide-y divide-[#E3DFD7] dark:divide-[#1A2E26]" aria-label="Mobile Navigation">
              {NAVIGATION_ITEMS.map((item) => {
                const isActive = pathname === item.href[locale];

                if (item.key === 'services') {
                  return (
                    <div key={item.key} className="py-2.5">
                      <button
                        type="button"
                        onClick={() => setServicesExpanded((prev) => !prev)}
                        className={`w-full flex items-center justify-between py-2 text-base font-semibold transition-colors ${
                          isActive || servicesExpanded
                            ? 'text-[#6B1426] dark:text-[#2DD4A4]'
                            : 'text-[#0B1713] dark:text-[#F4F6F5]'
                        }`}
                      >
                        <span>{item.label[locale]}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            servicesExpanded ? 'rotate-180 text-[#6B1426] dark:text-[#2DD4A4]' : 'text-[#687670]'
                          }`}
                        />
                      </button>

                      {servicesExpanded && (
                        <div className="mt-2 py-2 px-3 rounded-md bg-[#F3EFEA]/70 dark:bg-[#0C1A15] border border-[#E3DFD7] dark:border-[#1A2E26] flex flex-col gap-2">
                          <Link
                            href={item.href[locale]}
                            className="text-xs font-bold text-[#6B1426] dark:text-[#2DD4A4] py-1"
                          >
                            {isRtl ? '← استعراض جميع الخدمات' : '→ View All Consulting Practices'}
                          </Link>
                          {SERVICES_CATALOG.map((svc) => (
                            <Link
                              key={svc.slug}
                              href={locale === 'ar' ? `/ar/services/${svc.slug}` : `/services/${svc.slug}`}
                              className="flex items-baseline gap-2.5 text-xs text-[#485650] dark:text-[#A6B5AF] hover:text-[#0B1713] dark:hover:text-white py-1.5 transition-colors"
                            >
                              <span className="font-mono text-[11px] text-[#6B1426] dark:text-[#2DD4A4] shrink-0">
                                {svc.number}.
                              </span>
                              <span>{svc.title[locale]}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.key}
                    href={item.href[locale]}
                    className={`py-3.5 text-base font-semibold transition-colors ${
                      isActive
                        ? 'text-[#6B1426] dark:text-[#2DD4A4]'
                        : 'text-[#0B1713] dark:text-[#F4F6F5] hover:text-[#6B1426] dark:hover:text-[#2DD4A4]'
                    }`}
                  >
                    {item.label[locale]}
                  </Link>
                );
              })}
            </nav>

            {/* Unboxed Sovereign Metadata */}
            <div className="pt-2 text-xs text-[#687670] dark:text-[#8FA19A] flex flex-wrap items-center gap-2">
              <span>{COMPANY_PROFILE.ownership[locale]}</span>
              <span aria-hidden="true">·</span>
              <Link href={complianceHref} className="hover:underline font-mono">
                ICV {COMPANY_PROFILE.certifications.icv.score}
              </Link>
              <span aria-hidden="true">·</span>
              <Link href={complianceHref} className="hover:underline font-mono">
                {COMPANY_PROFILE.certifications.iso.standard}
              </Link>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-[#E3DFD7] dark:border-[#1A2E26] flex flex-col gap-4">
            <div className="flex items-center justify-between gap-3">
              <LanguageSwitcher currentLocale={locale} className="flex-1 justify-center py-2.5" />
              <ThemeToggle locale={locale} showLabel className="flex-1 justify-center py-2.5" />
            </div>

            <Link
              href={contactHref}
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-md bg-[#6B1426] hover:bg-[#82182E] dark:bg-[#2DD4A4] text-white dark:text-[#06110D] text-sm font-semibold transition-colors whitespace-nowrap"
            >
              <span>{t.requestRfp}</span>
              <ArrowIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
