import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { getProjects } from '@/features/content/actions/content';

export default async function PortfolioPage() {
  const projects = await getProjects();

  return (
    <div className="space-y-0 min-h-[70vh] bg-white text-slate-900">
      
      {/* ==================== HERO SECTION ==================== */}
      <section className="pt-24 pb-14 bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
            Our Portfolio & Work
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            Client Projects & Bespoke Designs
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Explore our featured digital builds, custom Next.js web applications, e-commerce platforms, and architectural design showcases.
          </p>
        </div>
      </section>

      {/* ==================== PROJECTS GRID ==================== */}
      <section className="py-16 md:py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="flex justify-between items-center pb-8 border-b border-slate-200 mb-12">
            <h2 className="text-xl font-bold text-slate-900">
              Featured Case Studies & Concepts ({projects.length})
            </h2>
            <span className="text-xs text-slate-500 font-medium">
              Top 5 Architecture Concepts & 12 Live Client Platforms
            </span>
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p: any) => {
              const techStack = Array.isArray(p.tech_stack) 
                ? p.tech_stack 
                : typeof p.tech_stack === 'string' 
                  ? JSON.parse(p.tech_stack) 
                  : [];

              return (
                <div 
                  key={p.id || p.slug}
                  className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-2xl hover:border-blue-500 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Project Image Frame */}
                    <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 aspect-[16/10] mb-6 group/img">
                      <Image
                        src={p.image_url || 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop'}
                        alt={p.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover/img:scale-105"
                      />
                      
                      <div className="absolute top-3 left-3 z-10 flex gap-2">
                        {p.is_concept ? (
                          <span className="text-[10px] font-bold text-amber-900 bg-amber-100/90 backdrop-blur-sm border border-amber-300 px-2.5 py-1 rounded-full">
                            Top Concept Design
                          </span>
                        ) : (
                          <span className="text-[10px] font-bold text-emerald-900 bg-emerald-100/90 backdrop-blur-sm border border-emerald-300 px-2.5 py-1 rounded-full">
                            Live Project
                          </span>
                        )}
                      </div>

                      {/* Dark Hover Overlay */}
                      {p.live_url && (
                        <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-xs opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center p-4 z-20">
                          <a 
                            href={p.live_url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-xl flex items-center gap-2 transition"
                          >
                            <span>Open Live Preview</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-md uppercase">
                        {p.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition line-clamp-1">
                      <Link href={`/portfolio/${p.slug}`}>{p.title}</Link>
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 font-normal line-clamp-3">
                      {p.description}
                    </p>

                    {p.result && (
                      <div className="p-3 bg-emerald-50/70 rounded-xl border border-emerald-200 mb-4">
                        <p className="text-[10px] uppercase font-bold text-emerald-800 mb-0.5">Key Result / Feature</p>
                        <p className="text-xs font-black text-emerald-950 line-clamp-1">{p.result}</p>
                      </div>
                    )}
                  </div>

                  <div>
                    {techStack.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {techStack.slice(0, 4).map((tech: string) => (
                          <span 
                            key={tech}
                            className="text-[10px] font-bold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex gap-2">
                      <Link
                        href={`/portfolio/${p.slug}`}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 py-3 rounded-xl bg-slate-100 group-hover:bg-blue-600 group-hover:text-white text-slate-800 font-bold text-xs transition-colors min-h-[40px]"
                      >
                        <span>View Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      {p.live_url && (
                        <a
                          href={p.live_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3.5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center transition shrink-0"
                          title="Open Live Preview"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ==================== CTA BANNER ==================== */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Have a Specific Project in Mind?</h2>
          <p className="text-base text-blue-100 max-w-xl mx-auto leading-relaxed">
            Let's discuss how our engineering framework can be customized for your exact industry requirements and growth targets.
          </p>
          <div className="pt-2">
            <Link
              href="/contact?type=project"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-blue-600 font-bold text-sm shadow-xl hover:bg-blue-50 transition"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

export const revalidate = 3600;
