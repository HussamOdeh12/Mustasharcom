import { Locale, COMPANY_PROFILE, SERVICES_CATALOG, NAVIGATION_ITEMS, PROJECTS_RECORD } from './company-data';

export type SearchCategory = 'services' | 'pages' | 'projects' | 'compliance' | 'contact' | 'legal';

export interface SearchEntry {
  id: string;
  category: SearchCategory;
  categoryLabel: {
    en: string;
    ar: string;
  };
  title: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  href: {
    en: string;
    ar: string;
  };
  keywords?: string[];
}

export interface SearchResultItem {
  id: string;
  category: SearchCategory;
  categoryLabel: string;
  title: string;
  description: string;
  href: string;
  score: number;
}

// Generate the searchable static index from existing source of truth
export const SEARCH_INDEX: SearchEntry[] = [
  // 1. Practice Areas (Services)
  ...SERVICES_CATALOG.map((svc) => ({
    id: `svc-${svc.slug}`,
    category: 'services' as SearchCategory,
    categoryLabel: {
      en: 'Practice Area',
      ar: 'خدمة استشارية',
    },
    title: svc.title,
    description: svc.shortDesc,
    href: {
      en: `/services/${svc.slug}`,
      ar: `/ar/services/${svc.slug}`,
    },
    keywords: [
      svc.slug,
      ...svc.capabilities.map((c) => `${c.en} ${c.ar}`),
      ...svc.deliverables.map((d) => `${d.en} ${d.ar}`),
    ],
  })),

  // 2. Primary Corporate Pages
  {
    id: 'page-about',
    category: 'pages',
    categoryLabel: { en: 'Institutional', ar: 'الملف المؤسسي' },
    title: { en: 'About Mustasharcom', ar: 'نبذة عن الشركة والرؤية' },
    description: {
      en: 'National IT consultancy in Abu Dhabi, corporate heritage, vision, leadership, and operational strengths.',
      ar: 'شركة استشارية وطنية رائدة في أبوظبي، رؤية الشركة، قيادتها، ونطاق تميزها التشغيلي.',
    },
    href: { en: '/about', ar: '/ar/about' },
    keywords: ['about', 'leadership', 'heritage', 'vision', 'adra', 'licence', 'abu dhabi', 'نبذة', 'رؤية', 'قيادة'],
  },
  {
    id: 'page-services',
    category: 'pages',
    categoryLabel: { en: 'Institutional', ar: 'الملف المؤسسي' },
    title: { en: 'Services Directory', ar: 'دليل الخدمات الاستشارية' },
    description: {
      en: 'Comprehensive overview of all 6 specialised IT consultancy, data, AI, and ERP practice areas.',
      ar: 'استعراض شامل لكافة مجالات الخدمات الستة في الاستشارات، البيانات، الذكاء الاصطناعي وأنظمة ERP.',
    },
    href: { en: '/services', ar: '/ar/services' },
    keywords: ['services', 'consulting', 'capabilities', 'practices', 'خدمات', 'استشارات'],
  },
  {
    id: 'page-projects',
    category: 'pages',
    categoryLabel: { en: 'Institutional', ar: 'الملف المؤسسي' },
    title: { en: 'Projects & Contracts Register', ar: 'سجل المشاريع والتعاقدات' },
    description: {
      en: '12 verified enterprise and government engagements across Abu Dhabi and UAE Federal entities.',
      ar: '12 عقداً ومشروعاً موثقاً ومكتملاً مع جهات حكومية واتحادية كبرى في إمارة أبوظبي ودولة الإمارات.',
    },
    href: { en: '/projects', ar: '/ar/projects' },
    keywords: ['projects', 'contracts', 'engagements', 'clients', 'history', 'مشاريع', 'عقود', 'عملاء'],
  },
  {
    id: 'page-compliance',
    category: 'compliance',
    categoryLabel: { en: 'Governance', ar: 'الحوكمة والجودة' },
    title: { en: 'Quality, Compliance & Certifications', ar: 'الجودة والامتثال والشهادات المعتمدة' },
    description: {
      en: `ISO 9001:2015 Quality Management certification and official In-Country Value score of ${COMPANY_PROFILE.certifications.icv.score}.`,
      ar: `شهادة الجودة العالمية ISO 9001:2015 وشهادة القيمة المحلية المضافة ICV بنسبة ${COMPANY_PROFILE.certifications.icv.score}.`,
    },
    href: { en: '/quality-compliance', ar: '/ar/quality-compliance' },
    keywords: ['iso', 'iso 9001:2015', 'icv', 'in-country value', 'compliance', 'standards', 'جودة', 'امتثال', 'شهادات'],
  },
  {
    id: 'page-contact',
    category: 'contact',
    categoryLabel: { en: 'Communications', ar: 'التواصل والطلبات' },
    title: { en: 'Contact & RFP Submission', ar: 'التواصل وطلب العروض الفنية' },
    description: {
      en: 'Official contact channels, Abu Dhabi office location, telephone, email, and proposal request forms.',
      ar: 'قنوات التواصل الرسمية، عنوان المقر بأبوظبي، الهاتف، البريد الإلكتروني، واستمارة طلب العروض.',
    },
    href: { en: '/contact', ar: '/ar/contact' },
    keywords: ['contact', 'rfp', 'proposal', 'phone', 'email', 'address', 'office', 'تواصل', 'طلب عرض', 'هاتف'],
  },

  // 3. Representative Major Verified Engagements (Projects)
  ...PROJECTS_RECORD.map((proj) => ({
    id: `proj-${proj.id}`,
    category: 'projects' as SearchCategory,
    categoryLabel: { en: 'Project Record', ar: 'سجل المشاريع' },
    title: proj.project,
    description: {
      en: `${proj.client.en} · ${proj.period} · ${proj.progress} verified`,
      ar: `${proj.client.ar} · ${proj.period} · نسبة الإنجاز ${proj.progress}`,
    },
    href: {
      en: '/projects',
      ar: '/ar/projects',
    },
    keywords: [
      proj.client.en,
      proj.client.ar,
      proj.period,
      proj.category,
      proj.valueAED,
    ],
  })),

  // 4. Regulatory & Legal
  {
    id: 'page-privacy',
    category: 'legal',
    categoryLabel: { en: 'Legal', ar: 'القوانين والسياسات' },
    title: { en: 'Privacy Policy', ar: 'سياسة الخصوصية' },
    description: {
      en: 'Data protection governance formulated in accordance with UAE Federal Decree-Law No. 45 of 2021.',
      ar: 'حوكمة وحماية البيانات الشخصية وفقاً للمرسوم بقانون اتحادي رقم (45) لسنة 2021 بدولة الإمارات.',
    },
    href: { en: '/privacy', ar: '/ar/privacy' },
    keywords: ['privacy', 'data protection', 'uae law', 'gdpr', 'خصوصية', 'حماية البيانات'],
  },
  {
    id: 'page-terms',
    category: 'legal',
    categoryLabel: { en: 'Legal', ar: 'القوانين والسياسات' },
    title: { en: 'Terms of Service', ar: 'الشروط والأحكام' },
    description: {
      en: 'Institutional governance, intellectual property terms, and legal jurisdiction of Abu Dhabi courts.',
      ar: 'شروط استخدام الموقع، حقوق الملكية الفكرية، والاختصاص القضائي لمحاكم إمارة أبوظبي.',
    },
    href: { en: '/terms', ar: '/ar/terms' },
    keywords: ['terms', 'legal', 'conditions', 'jurisdiction', 'شروط', 'أحكام', 'قانون'],
  },
];

// Arabic normalization helper to match variations of hamzas, taa marbuta, and alif maqsura
function normalizeArabic(text: string): string {
  return text
    .replace(/[أإآ]/g, 'ا')
    .replace(/ة/g, 'ه')
    .replace(/ى/g, 'ي')
    .replace(/[\u064B-\u065F]/g, '') // remove tashkeel
    .toLowerCase()
    .trim();
}

function normalizeText(text: string, isArabic: boolean): string {
  if (isArabic) {
    return normalizeArabic(text);
  }
  return text.toLowerCase().trim();
}

export function searchSite(rawQuery: string, locale: Locale): SearchResultItem[] {
  const query = rawQuery.trim();
  if (!query || query.length < 2) {
    return [];
  }

  const isCurrentAr = locale === 'ar';
  const normQuery = normalizeText(query, isCurrentAr);

  const scoredResults: SearchResultItem[] = [];

  for (const item of SEARCH_INDEX) {
    const title = item.title[locale];
    const altTitle = item.title[isCurrentAr ? 'en' : 'ar'];
    const desc = item.description[locale];
    const category = item.categoryLabel[locale];

    const normTitle = normalizeText(title, isCurrentAr);
    const normAltTitle = normalizeText(altTitle, !isCurrentAr);
    const normDesc = normalizeText(desc, isCurrentAr);
    const normCategory = normalizeText(category, isCurrentAr);

    let score = 0;

    // Exact title match
    if (normTitle === normQuery) {
      score += 100;
    } else if (normTitle.startsWith(normQuery)) {
      score += 60;
    } else if (normTitle.includes(normQuery)) {
      score += 40;
    }

    // Secondary language title match
    if (normAltTitle.includes(normQuery)) {
      score += 25;
    }

    // Category match
    if (normCategory.includes(normQuery)) {
      score += 20;
    }

    // Description match
    if (normDesc.includes(normQuery)) {
      score += 15;
    }

    // Keywords match
    if (item.keywords) {
      for (const kw of item.keywords) {
        const normKw = normalizeText(kw, isCurrentAr);
        if (normKw.includes(normQuery)) {
          score += 10;
          break;
        }
      }
    }

    if (score > 0) {
      scoredResults.push({
        id: item.id,
        category: item.category,
        categoryLabel: item.categoryLabel[locale],
        title,
        description: desc,
        href: item.href[locale],
        score,
      });
    }
  }

  // Sort by relevance score descending, capped at 8 most relevant items
  return scoredResults
    .sort((a, b) => b.score - a.score)
    .slice(0, 8);
}
