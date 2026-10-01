"use client";

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ExternalLink, 
  Lightbulb, 
  Target,
  ArrowLeft
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function ProjectDetailClient({ project }: { project: any }) {
  const techStack = Array.isArray(project.tech_stack) 
    ? project.tech_stack 
    : typeof project.tech_stack === 'string' 
      ? JSON.parse(project.tech_stack) 
      : [];

  return (
    <div className="animate-fade-in-up">
      <section className="relative pt-32 pb-12 overflow-hidden bg-slate-50 text-slate-900">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
          style={{ backgroundImage: 'radial-gradient(circle, black 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
        />
        <div className="max-w-5xl mx-auto px-6 text-center space-y-8 relative z-10">
          <Badge className="bg-primary/20 text-primary border-primary/20 px-4 py-1 rounded-full text-sm font-bold uppercase">
            Portfolio / {project.category}
          </Badge>
          <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight">
            {project.title}
          </h1>
          {project.live_url && (
            <div className="pt-6">
              <Button asChild size="lg" variant="outline" className="rounded-full px-10 h-16 text-lg border-slate-300 hover:bg-slate-100 text-slate-700">
                <a href={project.live_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  View Live Project <ExternalLink size={18} />
                </a>
              </Button>
            </div>
          )}
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-24 space-y-32">
        <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl border-8 border-slate-50">
          <Image src={project.image_url || 'https://picsum.photos/seed/prism/1200/800'} alt={project.title} fill className="object-cover" priority />
        </div>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-6">
            <h2 className="font-headline text-3xl font-bold text-slate-900 flex items-center gap-3">
              <Target className="text-primary" /> Context
            </h2>
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <p className="text-xs font-bold text-primary uppercase">Industry</p>
                <p className="text-slate-900 font-semibold">{project.category}</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <p className="text-xs font-bold text-primary uppercase">Status</p>
                <p className="text-slate-900 font-semibold">{project.is_concept ? 'Concept' : 'Delivered'}</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Description</h3>
            <p className="text-slate-600 text-xl leading-relaxed whitespace-pre-wrap">{project.description}</p>
          </div>
        </section>

        <section className="p-12 md:p-20 rounded-[3rem] bg-slate-50 text-slate-900 relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="shrink-0 w-24 h-24 bg-primary/20 rounded-3xl flex items-center justify-center text-primary">
              <Lightbulb size={48} />
            </div>
            <div className="space-y-4">
              <h2 className="font-headline text-3xl font-bold">Key Outcome</h2>
              <p className="text-slate-300 text-2xl leading-relaxed italic">"{project.result}"</p>
            </div>
          </div>
        </section>

        <section className="space-y-12">
          <h2 className="font-headline text-4xl font-bold text-slate-900 text-center">Engineered With</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((item: string, idx: number) => (
              <Badge key={idx} className="bg-slate-50 text-slate-600 border-slate-200 px-6 py-3 rounded-2xl text-lg font-bold">
                {item}
              </Badge>
            ))}
          </div>
        </section>

        <div className="flex justify-center pt-12">
          <Button asChild variant="outline" size="lg" className="rounded-full px-12 h-16 text-lg border-slate-200 gap-2">
            <Link href="/portfolio"><ArrowLeft size={18} /> Back to Portfolio</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
