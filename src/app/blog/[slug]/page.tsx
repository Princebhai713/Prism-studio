import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getBlogBySlug, getBlogs } from '@/features/content/actions/content';
import { BlogPostClient } from './BlogPostClient';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const blogs = await getBlogs();
  return blogs.map((post: any) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);

  if (!post) {
    return {
      title: 'Article Not Found | Prism Web Studio',
      description: 'The requested article could not be found.',
    };
  }

  const title = post.meta_title || `${post.title} | Prism Web Studio`;
  const description = post.meta_description || post.excerpt;
  const canonicalUrl = `https://prismwebstudio.mintx.online/blog/${post.slug}`;
  const ogImage = post.image_url || 'https://prismwebstudio.mintx.online/og-image.png';

  return {
    title,
    description,
    keywords: post.keywords || [],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'Prism Web Studio',
      type: 'article',
      publishedTime: post.published_at,
      authors: [post.author_name || 'Satyarth Maurya'],
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  const allBlogs = await getBlogs();
  const relatedPosts = allBlogs.filter((b: any) => b.slug !== post.slug).slice(0, 3);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.meta_description || post.excerpt,
    image: post.image_url ? [post.image_url] : ['https://prismwebstudio.mintx.online/og-image.png'],
    datePublished: post.published_at || new Date().toISOString(),
    dateModified: post.published_at || new Date().toISOString(),
    author: {
      '@type': 'Person',
      name: post.author_name || 'Satyarth Maurya',
      jobTitle: 'Founder & Lead Systems Architect',
      url: 'https://prismwebstudio.mintx.online/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Prism Web Studio',
      url: 'https://prismwebstudio.mintx.online',
      logo: {
        '@type': 'ImageObject',
        url: 'https://prismwebstudio.mintx.online/favicon.ico',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://prismwebstudio.mintx.online/blog/${post.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <BlogPostClient post={post} relatedPosts={relatedPosts} />
    </>
  );
}
