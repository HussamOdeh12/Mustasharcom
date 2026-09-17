import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Shield, Award, FileCheck } from 'lucide-react';
import Logo from '../ui/Logo';
import { Locale, COMPANY_PROFILE, SERVICES_CATALOG, NAVIGATION_ITEMS } from '@/lib/company-data';
import { UI_STRINGS } from '@/lib/translations';

interface FooterProps {
  locale: Locale;
}

export default function Footer({ locale }: FooterProps) {
  const t = UI_STRINGS[locale];
  const isRtl = locale === 'ar';

  const privacyHref = locale === 'ar' ? '/ar/privacy' : '/privacy';
  const termsHref = locale === 'ar' ? '/ar/terms' : '/terms';
  const complianceHref = locale === 'ar' ? '/ar/quality-compliance' : '/quality-compliance';

  return (
    <footer
      className="bg-zinc-50 dark:bg-[#080B12] text-zinc-700 dark:text-zinc-300 border-t border-zinc-200 dark:border-zinc-800/80 transition-colors"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-zinc-200 dark:border-zinc-800">
          {/* Col 1: Brand & Positioning */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <Logo locale={locale} />
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-sm mt-1">
              {COMPANY_PROFILE.tagline[locale]}
            </p>

            {/* Compliance Pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              <Link
                href={complianceHref}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white dark:bg-zinc-800/70 border border-zinc-200 dark:border-zinc-700 text-[11px] font-semibold text-zinc-800 dark:text-zinc-200 hover:border-[#6B1426] transition-colors"
              >
                <Award className="w-3.5 h-3.5 text-[#008751]" />
                <span>ICV {COMPANY_PROFILE.certifications.icv.score}</span>
              </Link>
              <Link
                href={complianceHref}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white dark:bg-zinc-800/70 border border-zinc-200 dark:border-zinc-700 text-[11px] font-semibold text-zinc-800 dark:text-zinc-200 hover:border-[#6B1426] transition-colors"
              >
                <Shield className="w-3.5 h-3.5 text-[#6B1426] dark:text-[#F38C9C]" />
                <span>{COMPANY_PROFILE.certifications.iso.standard}</span>
              </Link>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white dark:bg-zinc-800/70 border border-zinc-200 dark:border-zinc-700 text-[11px] font-medium text-zinc-600 dark:text-zinc-400">
                <FileCheck className="w-3.5 h-3.5 text-zinc-600" />
                <span>Lic. {COMPANY_PROFILE.licence.number}</span>
              </span>
            </div>

            <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-2">
              {locale === 'ar'
                ? 'مرخصة رسمياً من دائرة التنمية الاقتصادية في أبوظبي لتقديم الاستشارات وإدارة المشاريع والأنظمة الذكية.'
                : 'Formally licensed by Abu Dhabi Department of Economic Development (ADRA) for smart systems, data analytics, and IT consultancy.'}
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
              {locale === 'ar' ? 'روابط رئيسية' : 'Navigation'}
            </span>
            <ul className="flex flex-col gap-2 text-sm">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href[locale]}
                    prefetch={true}
                    className="text-zinc-600 dark:text-zinc-400 hover:text-[#6B1426] dark:hover:text-white transition-colors"
                  >
                    {item.label[locale]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services Directory */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
              {locale === 'ar' ? 'الخدمات الاستشارية' : 'Practice Areas'}
            </span>
            <ul className="flex flex-col gap-2 text-sm">
              {SERVICES_CATALOG.map((svc) => (
                <li key={svc.slug}>
                  <Link
                    href={locale === 'ar' ? `/ar/services/${svc.slug}` : `/services/${svc.slug}`}
                    prefetch={true}
                    className="text-zinc-600 dark:text-zinc-400 hover:text-[#6B1426] dark:hover:text-white transition-colors line-clamp-1"
                  >
                    {svc.title[locale]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Official Contact Information */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
              {t.registeredOffice}
            </span>
            <div className="flex flex-col gap-3 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#6B1426] dark:text-[#E63956] shrink-0 mt-0.5" />
                <span>{COMPANY_PROFILE.office.address[locale]}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#6B1426] dark:text-[#E63956] shrink-0" />
                <a
                  href={`tel:${COMPANY_PROFILE.office.tel1.replace(/\s+/g, '')}`}
                  className="hover:text-[#6B1426] dark:hover:text-white transition-colors dir-ltr font-mono"
                >
                  {COMPANY_PROFILE.office.telFax}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#6B1426] dark:text-[#E63956] shrink-0" />
                <a
                  href={`mailto:${COMPANY_PROFILE.office.email}`}
                  className="hover:text-[#6B1426] dark:hover:text-white transition-colors"
                >
                  {COMPANY_PROFILE.office.email}
                </a>
              </div>
              <div className="text-[11px] text-zinc-600 dark:text-zinc-400 pt-1">
                <span>P.O. Box {COMPANY_PROFILE.office.poBox} · Abu Dhabi, UAE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-600 dark:text-zinc-400">
          <p>
            © {new Date().getFullYear()} {COMPANY_PROFILE.name[locale]}. {t.rightsReserved}
          </p>
          <div className="flex items-center gap-6">
            <Link href={privacyHref} prefetch={true} className="hover:text-[#6B1426] dark:hover:text-white transition-colors">
              {t.privacyPolicy}
            </Link>
            <Link href={termsHref} prefetch={true} className="hover:text-[#6B1426] dark:hover:text-white transition-colors">
              {t.termsOfService}
            </Link>
            <Link href={complianceHref} prefetch={true} className="hover:text-[#6B1426] dark:hover:text-white transition-colors">
              {t.qualityCompliance}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
