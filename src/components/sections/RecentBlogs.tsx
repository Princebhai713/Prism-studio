import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { getBlogs } from '@/features/content/actions/content';
import { ArrowRight } from 'lucide-react';

export async function RecentBlogs() {
  const data = await getBlogs();
  const blogs = data.slice(0, 3);

  return (
    <section className="py-24 bg-slate-50 min-h-[600px]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <h2 className="font-headline text-3xl md:text-5xl font-bold text-slate-900">Insights & Updates</h2>
            <p className="text-slate-600 text-lg md:text-xl">
              Thoughts, news, and technical deep-dives from the Prism Studio team.
            </p>
          </div>
          <Button asChild variant="outline" className="rounded-full px-8 h-12 border-slate-300 bg-transparent hover:bg-white text-slate-900 transition-all hover:scale-105 duration-300">
            <Link href="/blog">Read All Articles</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group h-full">
                <Card className="h-full overflow-hidden bg-white border-slate-200 hover:shadow-xl transition-all duration-500 rounded-3xl flex flex-col">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={post.image_url || '/android-chrome-512x512.png'}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-8 flex-1 flex flex-col">
                    <div className="flex-1 space-y-4">
                      <p className="text-primary text-xs font-bold uppercase tracking-wider">{post.category}</p>
                      <h3 className="font-headline text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                    <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-sm font-semibold text-slate-900 group-hover:text-primary transition-colors">
                      Read Article <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))
          }
        </div>
      </div>
    </section>
  );
}
