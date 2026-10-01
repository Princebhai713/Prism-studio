import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { getProjects } from '@/features/content/actions/content';

export async function Projects() {
  const data = await getProjects();
  const projects = data.slice(0, 3);

  return (
    <section id="portfolio" className="py-24 bg-slate-50 min-h-[1400px] md:min-h-[600px]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <h2 className="font-headline text-3xl md:text-5xl font-bold text-slate-900">Proven Results</h2>
            <p className="text-slate-600 text-lg md:text-xl">
              Showcasing high-impact digital empires we've built for our global agency clients.
            </p>
          </div>
          <Button asChild variant="outline" className="rounded-full px-8 h-12 border-slate-300 bg-transparent hover:bg-slate-50 text-slate-900 transition-all hover:scale-105 duration-300">
            <Link href="/portfolio">Full Agency Portfolio</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.length > 0 ? projects.map((p) => (
            <Card key={p.id} className="group overflow-hidden bg-white border-slate-200 hover:shadow-xl transition-all duration-500 rounded-3xl h-full flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={p.image_url || '/android-chrome-512x512.png'}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button asChild variant="secondary" size="sm" className="rounded-full shadow-lg">
                    <Link href={`/portfolio/${p.slug}`}>
                      <span className="sr-only">See Blueprint for {p.title}</span>
                      <span aria-hidden="true">See Blueprint</span> <ExternalLink className="ml-2 w-4 h-4" aria-hidden="true" />
                    </Link>
                  </Button>
                </div>
              </div>
              <CardContent className="p-8 space-y-4 flex-1 flex flex-col">
                <div className="flex-1 space-y-4">
                  <div>
                    <p className="text-primary text-xs font-bold uppercase tracking-wider mb-1">{p.category}</p>
                    <h3 className="font-headline text-2xl font-bold text-slate-900">{p.title}</h3>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">{p.description}</p>
                </div>
                <div className="pt-4 border-t border-slate-100">
                  <p className="text-xs font-semibold text-primary uppercase tracking-tight">Key Result</p>
                  <p className="text-sm text-slate-700 font-bold">{p.result}</p>
                </div>
              </CardContent>
            </Card>
          )) : (
            <div className="col-span-full text-center py-20 text-slate-600 italic">Our studio portfolio is being synchronized. Check back soon.</div>
          )}
        </div>
      </div>
    </section>
  );
}
