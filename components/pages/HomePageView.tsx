import React from 'react';
import HeroSection from '../sections/HeroSection';
import CompanyCredibilityBar from '../sections/CompanyCredibilityBar';
import WhoWeAreSection from '../sections/WhoWeAreSection';
import ServicesCarousel from '../sections/ServicesCarousel';
import DataAiSpotlight from '../sections/DataAiSpotlight';
import FeaturedProjectsSection from '../sections/FeaturedProjectsSection';
import ExperienceSection from '../sections/ExperienceSection';
import CredentialsSection from '../sections/CredentialsSection';
import CtaBanner from '../sections/CtaBanner';
import SectionReveal from '../ui/SectionReveal';
import ScrollJourneyLine from '../motion/ScrollJourneyLine';
import { Locale } from '@/lib/company-data';

interface HomePageViewProps {
  locale: Locale;
}

export default function HomePageView({ locale }: HomePageViewProps) {
  const isRtl = locale === 'ar';

  return (
    <main id="main-content" className="relative flex-1">
      {/* Continuous full-page SVG journey rail synchronized with total scroll percentage */}
      <ScrollJourneyLine mode="page" isRtl={isRtl} />

      {/* 1. Cinematic Full-Viewport Dark Hero */}
      <HeroSection locale={locale} />

      {/* 2. Sovereign Credibility Strip */}
      <CompanyCredibilityBar locale={locale} />

      {/* Scroll-drawn SVG journey connector from Hero into Institutional Profile */}
      <ScrollJourneyLine
        mode="bridge"
        surface="light"
        label={
          locale === 'ar'
            ? 'المسار الاستشاري · من الرؤية إلى التنفيذ'
            : 'Advisory Journey · From Strategy to Sovereign Delivery'
        }
      />

      {/* 3. Oversized Editorial About Statement & Boardroom Split */}
      <SectionReveal>
        <WhoWeAreSection locale={locale} />
      </SectionReveal>

      {/* 4. Interactive Horizontal Services Carousel (Consilio Pattern) */}
      <SectionReveal>
        <ServicesCarousel locale={locale} />
      </SectionReveal>

      {/* 5. Interactive Data, Analytics & AI Architecture Spotlight */}
      <SectionReveal>
        <DataAiSpotlight locale={locale} />
      </SectionReveal>

      {/* Scroll-drawn SVG journey connector bridging Data & AI into Delivered Case Studies */}
      <ScrollJourneyLine
        mode="bridge"
        surface="dark"
        label={
          locale === 'ar'
            ? 'الأثر الموثق · 17 عقداً حكومياً في أبوظبي'
            : 'Verified Impact · 17 Public-Sector Mandates Delivered'
        }
      />

      {/* 6. Large-Scale Editorial Case Studies Showcase */}
      <SectionReveal>
        <FeaturedProjectsSection locale={locale} />
      </SectionReveal>

      {/* 7. Interactive 3-Stage Consultancy Approach & Strategic Difference */}
      <SectionReveal>
        <ExperienceSection locale={locale} />
      </SectionReveal>

      {/* 8. Sovereign Licensing, ISO 9001 & ICV Architectural Ledger */}
      <SectionReveal>
        <CredentialsSection locale={locale} />
      </SectionReveal>

      {/* 9. High-Contrast Closing Consultation Banner */}
      <SectionReveal>
        <CtaBanner locale={locale} />
      </SectionReveal>
    </main>
  );
}
