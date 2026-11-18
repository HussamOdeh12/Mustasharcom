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
import { Locale } from '@/lib/company-data';

interface HomePageViewProps {
  locale: Locale;
}

export default function HomePageView({ locale }: HomePageViewProps) {
  return (
    <main id="main-content" className="flex-1">
      {/* 1. Cinematic Full-Viewport Dark Hero */}
      <HeroSection locale={locale} />

      {/* 2. Sovereign Credibility Strip */}
      <CompanyCredibilityBar locale={locale} />

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
