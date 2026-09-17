import React from 'react';
import Link from 'next/link';
import { Target, Compass, Award, ArrowRight, ArrowLeft } from 'lucide-react';
import { Locale, COMPANY_PROFILE } from '@/lib/company-data';
import { UI_STRINGS } from '@/lib/translations';

interface WhoWeAreSectionProps {
  locale: Locale;
}

export default function WhoWeAreSection({ locale }: WhoWeAreSectionProps) {
  const t = UI_STRINGS[locale];
  const isRtl = locale === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;
  const aboutHref = locale === 'ar' ? '/ar/about' : '/about';

  return (
    <section
      id="who-we-are"
      className="py-16 md:py-24 bg-[#FBF9F5] dark:bg-[#090D16] border-b border-zinc-200/80 dark:border-zinc-800/80 transition-colors"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Mission & Identity */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#6B1426] dark:text-[#F38C9C] block mb-2">
                {t.whoWeAre}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight leading-tight">
                {locale === 'ar'
                  ? 'شريك استشاري وتقني متخصص لمؤسسات أبوظبي منذ 2019'
                  : 'A Trusted IT Advisory & Technical Partner in Abu Dhabi Since 2019'}
              </h2>
            </div>

            {/* Official Profile Quote Banner */}
            <div className="p-5 rounded-2xl bg-white dark:bg-[#111726] border border-zinc-200 dark:border-zinc-800 shadow-xs">
              <p className="text-sm sm:text-base text-zinc-800 dark:text-zinc-200 font-medium italic leading-relaxed">
                &ldquo;{COMPANY_PROFILE.quote[locale]}&rdquo;
              </p>
              <span className="text-xs text-zinc-600 dark:text-zinc-400 mt-2 block font-semibold">
                — {COMPANY_PROFILE.name[locale]}
              </span>
            </div>

            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {locale === 'ar'
                ? 'تأسست شركة مستشاركم للحلول المعلوماتية ذ.م.م في العاصمة أبوظبي كشركة وطنية إماراتية بنسبة 100%. نلتزم بتقديم استشارات برمجية وتقنية متكاملة بأسهل الطرق الممكنة للتنفيذ، مع التركيز على فهم عميق لدورات عمل المؤسسات وتحقيق أعلى كفاءة تشغيلية بأقل تكلفة ممكنة.'
                : 'Mustasharcom for Informatics Solutions LLC was established in Abu Dhabi as a 100% UAE national-owned enterprise. We are dedicated to delivering integrated software consultancy in the most easily implemented way, bridging organizational strategy with disciplined technical execution to maximize institutional value while optimizing operational cost.'}
            </p>

            <div className="pt-2">
              <Link
                href={aboutHref}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#6B1426] dark:text-[#F38C9C] hover:underline"
              >
                <span>{locale === 'ar' ? 'تعرف على فلسفة مستشاركم وفريق القيادة' : 'Learn More About Our Philosophy & Leadership'}</span>
                <ArrowIcon className="w-3.5 h-3.5 shrink-0" />
              </Link>
            </div>
          </div>

          {/* Right Column: 3 Structured Value Cards */}
          <div className="lg:col-span-6 space-y-4">
            <div className="p-6 rounded-2xl bg-white dark:bg-[#111726] border border-zinc-200 dark:border-zinc-800 shadow-xs flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#6B1426]/10 text-[#6B1426] dark:bg-[#6B1426]/20 dark:text-[#F38C9C] flex items-center justify-center shrink-0">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-1">
                  {t.ourMission}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {COMPANY_PROFILE.mission[locale]}
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#111726] border border-zinc-200 dark:border-zinc-800 shadow-xs flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#008751] dark:bg-emerald-950/60 dark:text-[#34D399] flex items-center justify-center shrink-0">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-1">
                  {t.ourApproach}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {COMPANY_PROFILE.consultancyApproach[locale]}
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#111726] border border-zinc-200 dark:border-zinc-800 shadow-xs flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-1">
                  {locale === 'ar' ? 'فريق كفاءات متعدد التخصصات' : 'Multi-Disciplinary Delivery Team'}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {locale === 'ar'
                    ? 'فريق متمرس يضم مدراء مشاريع، ومبرمجين، وخبراء جودة يعملون جنباً إلى جنب مع عملائنا في أبوظبي لضمان استدامة الحلول والالتزام بأعلى معايير الحوكمة.'
                    : 'A seasoned team of project managers, programmers, and quality assurance specialists working closely with our clients in Abu Dhabi to ensure durable solutions and global best practices.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
