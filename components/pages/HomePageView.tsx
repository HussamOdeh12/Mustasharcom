import React from 'react';
import HeroSection from '../sections/HeroSection';
import CompanyCredibilityBar from '../sections/CompanyCredibilityBar';
import WhoWeAreSection from '../sections/WhoWeAreSection';
import ServicesGrid from '../sections/ServicesGrid';
import DataAiSpotlight from '../sections/DataAiSpotlight';
import ExperienceSection from '../sections/ExperienceSection';
import CredentialsSection from '../sections/CredentialsSection';
import CtaBanner from '../sections/CtaBanner';
import FeaturedProjectsSection from '../sections/FeaturedProjectsSection';
import SectionReveal from '../ui/SectionReveal';
import { Locale } from '@/lib/company-data';

interface HomePageViewProps {
  locale: Locale;
}

export default function HomePageView({ locale }: HomePageViewProps) {
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

      {/* 7. Selected Engagements Snapshot (Server-Rendered Highlights) */}
      <SectionReveal>
        <FeaturedProjectsSection locale={locale} />
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
