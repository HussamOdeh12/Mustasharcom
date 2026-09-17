import React from 'react';
import Link from 'next/link';
import { ChevronDown, ArrowRight, ArrowLeft } from 'lucide-react';
import Logo from '../ui/Logo';
import GlobalSearch from '../ui/GlobalSearch';
import ThemeToggle from '../ui/ThemeToggle';
import LanguageSwitcher from '../ui/LanguageSwitcher';
import MobileMenu from './MobileMenu';
import { Locale, NAVIGATION_ITEMS, SERVICES_CATALOG, COMPANY_PROFILE } from '@/lib/company-data';
import { UI_STRINGS } from '@/lib/translations';

interface HeaderProps {
  locale: Locale;
}

export default function Header({ locale }: HeaderProps) {
  const t = UI_STRINGS[locale];
  const isRtl = locale === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;
  const contactHref = locale === 'ar' ? '/ar/contact' : '/contact';

  return (
    <>
      {/* Accessible Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#6B1426] focus:text-white focus:rounded-md focus:shadow-lg text-xs font-semibold focus:outline-none"
      >
        {t.skipToContent}
      </a>

      {/* Main Server Header Shell */}
      <header
        className="sticky top-0 left-0 right-0 z-50 bg-white/90 dark:bg-[#0B0F19]/90 backdrop-blur-md border-b border-zinc-200/80 dark:border-zinc-800/80 py-3 transition-colors shadow-xs"
        dir={isRtl ? 'rtl' : 'ltr'}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Left: Brand Logo + UAE Sovereign Pill */}
            <div className="flex items-center gap-3 shrink-0">
              <Logo locale={locale} />

              <span className="hidden xl:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200/80 dark:border-zinc-700/80 whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-[#008751]" />
                <span>{COMPANY_PROFILE.ownership[locale]}</span>
              </span>
            </div>

            {/* Center: Desktop Navigation (Pure Server HTML + CSS Hover Dropdowns) */}
            <nav
              className="hidden lg:flex items-center gap-1 xl:gap-2"
              aria-label="Main Navigation"
            >
              {NAVIGATION_ITEMS.map((item) => {
                if (item.key === 'services') {
                  return (
                    <div key={item.key} className="relative group">
                      <Link
                        href={item.href[locale]}
                        className="inline-flex items-center gap-1 px-3 py-2 rounded-lg text-xs font-semibold text-zinc-700 dark:text-zinc-200 hover:text-[#6B1426] dark:hover:text-[#F38C9C] hover:bg-zinc-100/80 dark:hover:bg-zinc-800/80 transition-colors whitespace-nowrap group-hover:text-[#6B1426] dark:group-hover:text-[#F38C9C]"
                      >
                        <span>{item.label[locale]}</span>
                        <ChevronDown className="w-3.5 h-3.5 text-zinc-600 transition-transform duration-200 group-hover:rotate-180 group-hover:text-[#6B1426] dark:group-hover:text-[#F38C9C]" />
                      </Link>

                      {/* Pure CSS Dropdown for Services */}
                      <div className="absolute top-full -mt-0.5 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-150 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto z-50 ltr:left-0 rtl:right-0">
                        <div className="w-80 p-2 rounded-xl bg-white dark:bg-[#111726] border border-zinc-200 dark:border-zinc-800 shadow-xl divide-y divide-zinc-100 dark:divide-zinc-800/60">
                          <div className="p-2">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 px-2 block mb-1">
                              {locale === 'ar' ? 'الخدمات الاستشارية المعتمدة' : 'Practice Areas'}
                            </span>
                            <div className="space-y-0.5">
                              {SERVICES_CATALOG.map((svc) => (
                                <Link
                                  key={svc.slug}
                                  href={locale === 'ar' ? `/ar/services/${svc.slug}` : `/services/${svc.slug}`}
                                  className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800/80 transition-colors group/item"
                                >
                                  <div className="w-1.5 h-1.5 rounded-full bg-[#6B1426] dark:bg-[#E63956] shrink-0 mt-1.5 group-hover/item:scale-125 transition-transform" />
                                  <div className="flex flex-col">
                                    <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-100 group-hover/item:text-[#6B1426] dark:group-hover/item:text-[#F38C9C] transition-colors leading-tight">
                                      {svc.title[locale]}
                                    </span>
                                    <span className="text-[11px] text-zinc-600 dark:text-zinc-400 line-clamp-1 mt-0.5">
                                      {svc.shortDesc[locale]}
                                    </span>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>

                          <div className="p-2 bg-zinc-50/60 dark:bg-zinc-800/30 rounded-b-lg">
                            <Link
                              href={item.href[locale]}
                              className="flex items-center justify-between px-2 py-1.5 text-xs font-bold text-[#6B1426] dark:text-[#F38C9C] hover:underline"
                            >
                              <span>{locale === 'ar' ? 'استعراض كافة الخدمات' : 'View All 5 Capabilities'}</span>
                              <ArrowIcon className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.key}
                    href={item.href[locale]}
                    className="px-3 py-2 rounded-lg text-xs font-semibold text-zinc-700 dark:text-zinc-200 hover:text-[#6B1426] dark:hover:text-[#F38C9C] hover:bg-zinc-100/80 dark:hover:bg-zinc-800/80 transition-colors whitespace-nowrap"
                  >
                    {item.label[locale]}
                  </Link>
                );
              })}
            </nav>

            {/* Right: Actions, Search, Theme, Language & RFP CTA */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              {/* Desktop Global Search Trigger (Lazy client island) */}
              <GlobalSearch locale={locale} variant="header" />

              {/* Language Switcher (Client Island) */}
              <LanguageSwitcher currentLocale={locale} />

              {/* Theme Toggle (Client Island) */}
              <ThemeToggle locale={locale} />

              {/* Desktop RFP CTA Button (Server Component) */}
              <Link
                href={contactHref}
                className="hidden sm:inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-[#6B1426] hover:bg-[#8B1E3F] text-white text-xs font-semibold shadow-xs hover:shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6B1426] cursor-pointer whitespace-nowrap"
              >
                <span>{t.requestRfp}</span>
                <ArrowIcon className="w-3.5 h-3.5 shrink-0" />
              </Link>

              {/* Mobile Menu & Drawer (Client Island) */}
              <MobileMenu locale={locale} />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
