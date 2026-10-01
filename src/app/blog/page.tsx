import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Calendar, User, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { getBlogs } from '@/features/content/actions/content';
import { format } from 'date-fns';

export default async function BlogPage() {
  const blogs = await getBlogs();

  return (
    <main className="min-h-screen bg-white">
      
      <section className="relative pt-32 pb-12 bg-slate-50 text-slate-900 text-center px-6">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
          style={{ backgroundImage: 'radial-gradient(circle, black 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
        />
        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <Badge className="bg-primary/20 text-primary border-none px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block">
            Thoughts & Perspectives
          </Badge>
          <h1 className="font-headline text-5xl md:text-6xl font-bold leading-tight">
            Our <span className="text-primary">Insights</span>
          </h1>
          <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto font-body">
            Stay updated with the latest trends in web development, AI integration, and digital design.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.length > 0 ? (
            blogs.map((post) => (
              <Card key={post.id} className="group overflow-hidden bg-white border-slate-200 hover:shadow-2xl transition-all duration-500 rounded-[2.5rem] flex flex-col">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={post.image_url || '/android-chrome-512x512.png'}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    data-ai-hint="blog post"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-white border-none px-3 py-1 text-[10px] font-bold uppercase tracking-wider">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 text-xs text-slate-600 mb-4">
                    <span className="flex items-center gap-1.5"><Calendar size={14} /> {format(new Date(post.published_at), 'MMM d, yyyy')}</span>
                    <span className="flex items-center gap-1.5"><User size={14} /> {post.author_name}</span>
                  </div>
                  <h3 className="font-headline text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors mb-4 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto pt-6 border-t border-slate-100">
                    <Link href={`/blog/${post.slug}`} className="text-primary font-bold text-sm flex items-center gap-2 group/btn">
                      Read Full Article <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-20 text-slate-600 italic">
              No blog posts have been published yet. Check back soon!
            </div>
          )}
        </div>
      </section>

    </main>
  );
}
export const revalidate = 3600;
