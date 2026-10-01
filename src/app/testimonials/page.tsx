
"use client";

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Quote, Star, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const ALL_TESTIMONIALS = [
  {
    name: "Alex Rivers",
    role: "CEO, InnovateTech",
    company: "InnovateTech Solutions",
    quote: "Prism transformed our digital presence completely. Their AI integration saved us 40 hours a week in operational overhead. The ROI was visible within the first month.",
    rating: 5,
    project: "SaaS Automation"
  },
  {
    name: "Sarah Chen",
    role: "Founder, BloomSaaS",
    company: "Bloom Lifestyle",
    quote: "Cleanest code I've seen in years. Fast, responsive, and beautifully designed. Highly recommend Prism Studio for any serious startup looking to scale.",
    rating: 5,
    project: "E-commerce Redesign"
  },
  {
    name: "Marcus Thorne",
    role: "CTO, Global Logistics",
    company: "LogiGlobal Inc",
    quote: "Our website redesign led to a 150% increase in conversions within the first month. Prism knows exactly what they are doing when it comes to performance.",
    rating: 5,
    project: "Enterprise ERP"
  },
  {
    name: "Elena Rodriguez",
    role: "Marketing Director",
    company: "Artisan Co",
    quote: "The design team at Prism has a unique eye for detail. They didn't just build a site; they built a brand identity that resonates with our luxury audience.",
    rating: 5,
    project: "Branding & Web"
  },
  {
    name: "David Park",
    role: "Tech Lead",
    company: "NextGen Robotics",
    quote: "Scalability was our biggest concern. Prism built a foundation that handles our traffic spikes without breaking a sweat. Excellent engineering.",
    rating: 5,
    project: "Web App Development"
  }
];

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-white">
      
      <section className="relative pt-32 pb-12 bg-slate-50 text-slate-900 text-center px-6">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
          style={{ backgroundImage: 'radial-gradient(circle, black 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
        />
        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <Badge className="bg-primary/20 text-primary border-primary/20 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
            Social Proof
          </Badge>
          <h1 className="font-headline text-5xl md:text-7xl font-bold leading-tight">
            Trusted by <span className="text-gradient">Innovators</span>
          </h1>
          <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto font-body">
            Don't just take our word for it. Hear what industry leaders have to say about working with Prism Web Studio.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ALL_TESTIMONIALS.map((t, idx) => (
            <Card key={idx} className="bg-slate-50 border-slate-200 hover:shadow-2xl transition-all duration-500 rounded-[2.5rem] flex flex-col h-full group">
              <CardContent className="p-10 space-y-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start">
                  <Quote className="text-primary w-12 h-12 opacity-20 transition-transform group-hover:scale-110" />
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                
                <p className="text-slate-700 leading-relaxed text-lg font-body flex-1 italic">
                  "{t.quote}"
                </p>

                <div className="pt-8 border-t border-slate-200 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-primary font-bold text-xl shadow-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-lg flex items-center gap-2">
                      {t.name} <CheckCircle2 size={16} className="text-emerald-500" />
                    </p>
                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">{t.role} • {t.company}</p>
                  </div>
                </div>
                
                <div className="mt-4">
                  <Badge variant="outline" className="bg-white border-slate-200 text-slate-600 text-[10px] uppercase font-bold px-3">
                    Project: {t.project}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

    </main>
  );
}
