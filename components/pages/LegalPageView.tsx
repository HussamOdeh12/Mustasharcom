import React from 'react';
import Breadcrumbs from '../ui/Breadcrumbs';
import ReadingProgressBar from '../ui/ReadingProgressBar';
import { Locale, COMPANY_PROFILE } from '@/lib/company-data';
import { UI_STRINGS } from '@/lib/translations';

interface LegalPageViewProps {
  locale: Locale;
  type: 'privacy' | 'terms';
}

export default function LegalPageView({ locale, type }: LegalPageViewProps) {
  const t = UI_STRINGS[locale];
  const isRtl = locale === 'ar';
  const isPrivacy = type === 'privacy';

  const title = isPrivacy ? t.privacyPolicy : t.termsOfService;
  const breadcrumbLabel = isPrivacy ? t.breadcrumbsPrivacy : t.breadcrumbsTerms;

  return (
    <>
      <ReadingProgressBar locale={locale} />
      <main id="main-content" className="flex-1 pt-24 md:pt-28" dir={isRtl ? 'rtl' : 'ltr'}>
        {/* Breadcrumbs */}
        <div className="border-b border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <Breadcrumbs
              locale={locale}
              items={[{ label: breadcrumbLabel }]}
            />
          </div>
        </div>

        {/* Hero Header */}
        <section className="py-12 md:py-16 border-b border-zinc-200/80 dark:border-zinc-800/80 bg-[#FBF9F5] dark:bg-[#090D16]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6B1426] dark:text-[#F38C9C] mb-2 block">
              {locale === 'ar' ? 'السياسات القانونية والتنظيمية' : 'Governance & Regulatory Terms'}
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-3">
              {title}
            </h1>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
              {locale === 'ar'
                ? 'آخر تحديث: 2026 · متوافق مع قوانين حماية البيانات والشفافية في دولة الإمارات العربية المتحدة'
                : 'Last updated: 2026 · Formulated under UAE Federal Decree-Law No. 45 of 2021 regarding Personal Data Protection'}
            </p>
          </div>
        </section>

        {/* Content Body */}
        <section className="py-14 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#111726] border border-zinc-200 dark:border-zinc-800 shadow-xs prose dark:prose-invert max-w-none text-xs sm:text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              {isPrivacy ? (
                locale === 'ar' ? (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">1. مقدمة ونطاق التطبيق</h2>
                      <p>
                        تلتزم &quot;مستشاركم للحلول المعلوماتية&quot; (المشار إليها بـ &quot;الشركة&quot;)، المرخصة في إمارة أبوظبي برقم رخصة تجارية (CN-2769971)، بحماية خصوصية وسرية البيانات والمعلومات التي تتلقاها من العملاء، والجهات الحكومية، والزوار عبر موقعها الرسمي ({'https://mustasharcom.ae'}).
                      </p>
                    </div>

                    <div>
                      <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">2. البيانات التي نجمعها</h2>
                      <p>
                        يقتصر جمع البيانات على المعلومات المهنية الضرورية لمعالجة الاستفسارات الاستشارية ومناقصات المشاريع (RFP):
                      </p>
                      <ul className="list-disc pr-5 space-y-1 mt-2">
                        <li>الاسم الكامل والمسمى الوظيفي.</li>
                        <li>الجهة الحكومية أو المؤسسة التابع لها مقدم الطلب.</li>
                        <li>البريد الإلكتروني المؤسسي ورقم الهاتف المعتمد.</li>
                        <li>المتطلبات التقنية ونطاق العمل المرفوع في الاستفسار.</li>
                      </ul>
                    </div>

                    <div>
                      <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">3. الغرض من معالجة البيانات</h2>
                      <p>
                        تُستخدم البيانات حصراً للتواصل المهني، وتقييم المتطلبات الاستشارية، وتقديم العروض الفنية، والامتثال للالتزامات التعاقدية والتنظيمية في دولة الإمارات العربية المتحدة. لا نقوم إطلاقاً ببيع أو تأجير أو مشاركة البيانات لأغراض تسويقية تجارية خارجية.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">4. أمن البيانات وسريتها</h2>
                      <p>
                        نطبق ضوابط تقنية وتنظيمية متقدمة وفق متطلبات الآيزو 9001:2015 لحماية الأنظمة والمراسلات ضد الوصول غير المصرح به أو التعديل أو الإفصاح.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">5. التواصل ومسؤول الخصوصية</h2>
                      <p>
                        لأي استفسارات بخصوص سياسة الخصوصية، يرجى التواصل مع المكتب الرئيسي عبر البريد الإلكتروني: info@mustasharcom.ae أو هاتفياً على الرقم: 8099 658 2 971+.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">1. Introduction & Scope</h2>
                      <p>
                        Mustasharcom for Informatics Solutions (&quot;Mustasharcom&quot;, &quot;we&quot;, &quot;us&quot;), licensed by the Abu Dhabi Department of Economic Development (Licence CN-2769971), respects your privacy and is committed to protecting the confidentiality of institutional and personal information gathered through our corporate website (https://mustasharcom.ae).
                      </p>
                    </div>

                    <div>
                      <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">2. Information We Collect</h2>
                      <p>
                        We only gather professional information voluntarily submitted for consulting engagements and project RFP tenders:
                      </p>
                      <ul className="list-disc pl-5 space-y-1 mt-2">
                        <li>Representative Name and Official Designation.</li>
                        <li>Government Entity or Enterprise Affiliation.</li>
                        <li>Work Email Address and Contact Phone Number.</li>
                        <li>Project Scopes and Technical Tender Specifications.</li>
                      </ul>
                    </div>

                    <div>
                      <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">3. Purpose of Processing</h2>
                      <p>
                        Information submitted is utilized exclusively for evaluating consulting mandates, preparing formal technical proposals, and administering institutional service agreements. We never monetize, sell, or disclose partner data to third parties.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">4. Data Governance & Security</h2>
                      <p>
                        We enforce strict cybersecurity controls and procedural safeguards aligned with ISO 9001:2015 Quality Management standards and UAE Federal Decree-Law No. 45 of 2021 regarding Personal Data Protection.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">5. Contact Information</h2>
                      <p>
                        For inquiries concerning our data governance practices, contact our Abu Dhabi headquarters at info@mustasharcom.ae or via telephone at +971 2 658 8099.
                      </p>
                    </div>
                  </div>
                )
              ) : locale === 'ar' ? (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">1. شروط الاستخدام والتعاقد</h2>
                    <p>
                      تنظم هذه الشروط استخدام الموقع الإلكتروني لمستشاركم للحلول المعلوماتية. يمثل تصفح الموقع موافقة ضمنية على هذه الضوابط والامتثال للأنظمة المعمول بها في إمارة أبوظبي ودولة الإمارات العربية المتحدة.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">2. الملكية الفكرية وحقوق النشر</h2>
                    <p>
                      جميع المحتويات، والشعارات، والتصاميم، والنصوص، وسجلات المشاريع المنشورة على هذا الموقع مملوكة حصرياً لـ &quot;مستشاركم للحلول المعلوماتية&quot; ومحمية بموجب قوانين الملكية الفكرية وحقوق المؤلف المعمول بها في دولة الإمارات.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">3. الاتفاقيات والعقود الرسمية</h2>
                    <p>
                      المعلومات المعروضة في هذا الموقع تهدف إلى التعريف بالقدرات الاستشارية والتقنية. وتخضع أي علاقة تعاقدية لتقديم خدمات أو مشاريع لاتفاقيات خطية مستقلة وموافقات رسمية معتمدة وفق أطر المشتريات المعنية.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">4. القانون الواجب التطبيق والاختصاص القضائي</h2>
                    <p>
                      تخضع هذه الشروط وتُفسر وفقاً لقوانين إمارة أبوظبي والقوانين الاتحادية لدولة الإمارات العربية المتحدة، ويكون لمحاكم أبوظبي الاختصاص القضائي الحصري في أي نزاع ينشأ عنها.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">1. Terms of Engagement & Site Usage</h2>
                    <p>
                      These Terms govern the access and use of the Mustasharcom for Informatics Solutions corporate web platform. Accessing this site signifies acceptance of these conditions and adherence to Abu Dhabi and UAE federal laws.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">2. Intellectual Property</h2>
                    <p>
                      All trademarks, corporate marks, methodologies, narrative structures, and project portfolio summaries displayed on this website are the proprietary property of Mustasharcom for Informatics Solutions and protected under UAE intellectual property laws.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">3. Contractual Formalities</h2>
                    <p>
                      Content on this platform is provided for corporate informational purposes. All professional services, consultancy mandates, and procurement relationships are formalized solely through executed service agreements, statements of work (SOW), or government purchase orders.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">4. Governing Law & Jurisdiction</h2>
                    <p>
                      These terms shall be governed by and construed in accordance with the laws of the Emirate of Abu Dhabi and the Federal laws of the United Arab Emirates. The courts of Abu Dhabi shall hold exclusive jurisdiction.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
