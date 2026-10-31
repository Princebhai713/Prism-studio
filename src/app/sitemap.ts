import type { MetadataRoute } from 'next';
import { getBlogs, getProjects } from '@/features/content/actions/content';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://prismwebstudio.mintx.online';
  
  // Fetch dynamic blog posts
  let blogRoutes: MetadataRoute.Sitemap = [];
  try {
    const blogs = await getBlogs();
    blogRoutes = blogs.map((post: any) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.updated_at || post.published_at),
      changeFrequency: 'weekly',
      priority: 0.6,
    }));
  } catch (error) {
    console.error("Sitemap: Failed to load blogs", error);
  }

  // Fetch dynamic portfolio projects
  let projectRoutes: MetadataRoute.Sitemap = [];
  try {
    const projects = await getProjects();
    projectRoutes = projects.map((project: any) => ({
      url: `${baseUrl}/portfolio/${project.slug}`,
      lastModified: new Date(project.updated_at || project.created_at || new Date()),
      changeFrequency: 'monthly',
      priority: 0.6,
    }));
  } catch (error) {
    console.error("Sitemap: Failed to load projects", error);
  }

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/web-development-company-in-gorakhpur`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/website-designer-in-gorakhpur`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/seo-services-in-gorakhpur`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/portfolio`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.8 },
    { url: `${baseUrl}/blog/gorakhpur-website-cost-guide`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/blog/gorakhpur-retail-ecommerce-guide`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/blog/school-college-hospital-website-design-gorakhpur`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/blog/rank-number-1-google-maps-gorakhpur`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/faqs`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/testimonials`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 }
  ];

  // Combine and deduplicate routes by URL, preserving the highest priority
  const combined = [...staticRoutes, ...blogRoutes, ...projectRoutes];
  const uniqueRoutesMap = new Map<string, MetadataRoute.Sitemap[0]>();

  for (const route of combined) {
    const existing = uniqueRoutesMap.get(route.url);
    if (!existing || (route.priority || 0) > (existing.priority || 0)) {
      uniqueRoutesMap.set(route.url, route);
    }
  }

  return Array.from(uniqueRoutesMap.values());
}
