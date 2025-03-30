import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/dashboard'], // Disallow private pages
    },
    sitemap: 'https://mcc-egy.com/sitemap.xml',
  };
}
