import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/exclude-me/', '/system-node-access/'],
    },
    sitemap: 'https://prismwebstudio.mintx.online/sitemap.xml',
  };
}
