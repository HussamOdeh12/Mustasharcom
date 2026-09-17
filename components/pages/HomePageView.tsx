import React from 'react';
import HeroSection from '../sections/HeroSection';
import CompanyCredibilityBar from '../sections/CompanyCredibilityBar';
import WhoWeAreSection from '../sections/WhoWeAreSection';
import ServicesGrid from '../sections/ServicesGrid';
import DataAiSpotlight from '../sections/DataAiSpotlight';
import ExperienceSection from '../sections/ExperienceSection';
import CredentialsSection from '../sections/CredentialsSection';
import CtaBanner from '../sections/CtaBanner';
import ProjectsExplorer from '../projects/ProjectsExplorer';
import SectionReveal from '../ui/SectionReveal';
import { Locale } from '@/lib/company-data';
import { UI_STRINGS } from '@/lib/translations';
import Link from 'next/link';
import { ArrowRight, ArrowLeft } from 'lucide-react';

interface HomePageViewProps {
  locale: Locale;
}

export default function HomePageView({ locale }: HomePageViewProps) {
  const t = UI_STRINGS[locale];
  const isRtl = locale === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <main id="main-content" className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection locale={locale} />

        {/* 2. Company Credibility Bar */}
        <CompanyCredibilityBar locale={locale} />

        {/* 3. Who We Are */}
        <SectionReveal>
          <WhoWeAreSection locale={locale} />
        </SectionReveal>

        {/* 4. Services Grid */}
        <SectionReveal>
          <ServicesGrid locale={locale} />
        </SectionReveal>

        {/* 5. Data / Analytics / AI Spotlight */}
        <SectionReveal>
          <DataAiSpotlight locale={locale} />
        </SectionReveal>

        {/* 6. Public Sector Experience & Heritage */}
        <SectionReveal>
          <ExperienceSection locale={locale} />
        </SectionReveal>

        {/* 7. Selected Engagements Snapshot */}
        <SectionReveal>
          <section
            id="engagements"
            className="py-16 md:py-24 bg-zinc-50/70 dark:bg-[#0E131F] border-b border-zinc-200/80 dark:border-zinc-800/80 transition-colors"
            dir={isRtl ? 'rtl' : 'ltr'}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                <div className="max-w-2xl flex flex-col gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#6B1426] dark:text-[#F38C9C]">
                    {t.selectedEngagements}
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight leading-tight">
                    {locale === 'ar'
                      ? '17 عقداً ومشروعاً معتمداً للقطاع الحكومي'
                      : '17 Verified Public Sector Mandates & Contracts'}
                  </h2>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {locale === 'ar'
                      ? 'سجل أعمال موثق يتجاوز 69 مليون درهم تم تنفيذه مع بلدية مدينة أبوظبي، دائرة البلديات والنقل، وهيئة أبوظبي الرقمية.'
                      : 'Over AED 69M+ in delivered and ongoing contract value with Abu Dhabi City Municipality, DMT, and ADDA.'}
                  </p>
                </div>

                <Link
                  href={locale === 'ar' ? '/ar/projects' : '/projects'}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#6B1426] dark:text-[#F38C9C] hover:underline whitespace-nowrap shrink-0"
                >
                  <span className="whitespace-nowrap">{t.viewProjects}</span>
                  <ArrowIcon className="w-3.5 h-3.5 shrink-0" />
                </Link>
              </div>

              {/* Interactive Explorer Component */}
              <ProjectsExplorer locale={locale} />
            </div>
          </section>
        </SectionReveal>

        {/* 8. Quality & Compliance Credentials */}
        <SectionReveal>
          <CredentialsSection locale={locale} />
        </SectionReveal>

        {/* 9. Call to Action Banner */}
        <SectionReveal>
          <CtaBanner locale={locale} />
        </SectionReveal>
      </main>
  );
}
