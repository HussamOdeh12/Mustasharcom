'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Award, Shield, ArrowRight, ArrowLeft } from 'lucide-react';
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

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setServicesExpanded(false);
  }, [pathname]);

  // Lock body scroll when mobile drawer is open
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
      {/* Compact Search Trigger for Mobile */}
      <GlobalSearch locale={locale} variant="compact" />

      {/* Hamburger Toggle Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="p-2 rounded-lg text-zinc-700 dark:text-zinc-200 hover:text-[#6B1426] dark:hover:text-[#F38C9C] hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6B1426] cursor-pointer"
        aria-label={isOpen ? (isRtl ? 'إغلاق القائمة' : 'Close menu') : isRtl ? 'فتح القائمة' : 'Open menu'}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div
          className="fixed inset-x-0 top-[65px] bottom-0 z-50 bg-white dark:bg-[#0B0F19] border-t border-zinc-200 dark:border-zinc-800 overflow-y-auto px-4 py-6 flex flex-col justify-between shadow-2xl animate-in slide-in-from-top-2 duration-150"
          dir={isRtl ? 'rtl' : 'ltr'}
        >
          <div className="flex flex-col gap-5">
            {/* Mobile Search Input Bar */}
            <div className="w-full">
              <GlobalSearch locale={locale} variant="mobile" />
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col divide-y divide-zinc-100 dark:divide-zinc-800" aria-label="Mobile Navigation">
              {NAVIGATION_ITEMS.map((item) => {
                const isActive = pathname === item.href[locale];

                if (item.key === 'services') {
                  return (
                    <div key={item.key} className="py-2.5">
                      <button
                        type="button"
                        onClick={() => setServicesExpanded((prev) => !prev)}
                        className={`w-full flex items-center justify-between py-1.5 text-base font-semibold transition-colors ${
                          isActive || servicesExpanded
                            ? 'text-[#6B1426] dark:text-[#F38C9C]'
                            : 'text-zinc-800 dark:text-zinc-200'
                        }`}
                      >
                        <span>{item.label[locale]}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            servicesExpanded ? 'rotate-180 text-[#6B1426] dark:text-[#F38C9C]' : 'text-zinc-600'
                          }`}
                        />
                      </button>

                      {servicesExpanded && (
                        <div className="mt-2 pr-3 pl-3 flex flex-col gap-2 border-r-2 rtl:border-r-2 ltr:border-l-2 rtl:border-l-0 border-zinc-200 dark:border-zinc-700/80 my-2">
                          <Link
                            href={item.href[locale]}
                            className="text-xs font-bold text-[#6B1426] dark:text-[#F38C9C] py-1"
                          >
                            {isRtl ? '← جميع الخدمات الاستشارية' : '→ All Consulting Services'}
                          </Link>
                          {SERVICES_CATALOG.map((svc) => (
                            <Link
                              key={svc.slug}
                              href={locale === 'ar' ? `/ar/services/${svc.slug}` : `/services/${svc.slug}`}
                              className="text-xs text-zinc-600 dark:text-zinc-400 hover:text-[#6B1426] dark:hover:text-white py-1 transition-colors"
                            >
                              {svc.title[locale]}
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
                    className={`py-3 text-base font-semibold transition-colors ${
                      isActive
                        ? 'text-[#6B1426] dark:text-[#F38C9C]'
                        : 'text-zinc-800 dark:text-zinc-200 hover:text-[#6B1426] dark:hover:text-white'
                    }`}
                  >
                    {item.label[locale]}
                  </Link>
                );
              })}
            </nav>

            {/* Credibility & Compliance Indicators in Mobile Drawer */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <Link
                href={complianceHref}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-50 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 text-xs font-medium text-zinc-700 dark:text-zinc-300"
              >
                <Award className="w-4 h-4 text-[#008751]" />
                <span>ICV {COMPANY_PROFILE.certifications.icv.score}</span>
              </Link>
              <Link
                href={complianceHref}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-50 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 text-xs font-medium text-zinc-700 dark:text-zinc-300"
              >
                <Shield className="w-4 h-4 text-[#6B1426] dark:text-[#F38C9C]" />
                <span>{COMPANY_PROFILE.certifications.iso.standard}</span>
              </Link>
            </div>
          </div>

          {/* Bottom Drawer Actions */}
          <div className="pt-6 mt-6 border-t border-zinc-200 dark:border-zinc-800 flex flex-col gap-4">
            <div className="flex items-center justify-between gap-3">
              <LanguageSwitcher currentLocale={locale} className="flex-1 justify-center py-2" />
              <ThemeToggle locale={locale} showLabel className="flex-1 justify-center py-2" />
            </div>

            <Link
              href={contactHref}
              className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-lg bg-[#6B1426] hover:bg-[#8B1E3F] text-white text-sm font-semibold shadow-md transition-colors"
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
