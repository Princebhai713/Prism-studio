import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/exclude-me/', '/system-node-access/', '/api/'],
      },
      {
        userAgent: ['Googlebot', 'Bingbot', 'Applebot', 'DuckDuckBot'],
        allow: '/',
        disallow: ['/exclude-me/', '/system-node-access/'],
      },
      {
        userAgent: ['GPTBot', 'ClaudeBot', 'PerplexityBot'],
        allow: '/',
      }
    ],
    sitemap: 'https://prismwebstudio.mintx.online/sitemap.xml',
  };
}
