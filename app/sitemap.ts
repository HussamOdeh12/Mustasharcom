import { MetadataRoute } from 'next';
import { SERVICES_CATALOG } from '@/lib/company-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mustasharcom.ae';

  const baseRoutes = [
    '',
    '/about',
    '/services',
    '/projects',
    '/quality-compliance',
    '/contact',
    '/privacy',
    '/terms',
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // English static routes
  for (const route of baseRoutes) {
    sitemapEntries.push({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: route === '' ? 'weekly' : 'monthly',
      priority: route === '' ? 1.0 : 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}${route}`,
          ar: `${baseUrl}/ar${route}`,
        },
      },
    });
  }

  // Arabic static routes
  for (const route of baseRoutes) {
    sitemapEntries.push({
      url: `${baseUrl}/ar${route}`,
      lastModified: new Date(),
      changeFrequency: route === '' ? 'weekly' : 'monthly',
      priority: route === '' ? 1.0 : 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}${route}`,
          ar: `${baseUrl}/ar${route}`,
        },
      },
    });
  }

  // Dynamic service detail routes in EN and AR
  for (const svc of SERVICES_CATALOG) {
    sitemapEntries.push({
      url: `${baseUrl}/services/${svc.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          en: `${baseUrl}/services/${svc.slug}`,
          ar: `${baseUrl}/ar/services/${svc.slug}`,
        },
      },
    });
    sitemapEntries.push({
      url: `${baseUrl}/ar/services/${svc.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          en: `${baseUrl}/services/${svc.slug}`,
          ar: `${baseUrl}/ar/services/${svc.slug}`,
        },
      },
    });
  }

  return sitemapEntries;
}
