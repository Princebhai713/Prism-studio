"use client";

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { 
  CheckCircle2, 
  Target, 
  Eye, 
  History, 
  Rocket, 
  Users, 
  Code, 
  Zap, 
  ShieldCheck,
  Award
} from 'lucide-react';
import Link from 'next/link';

const WHAT_WE_DO = [
  "Agency-Level Web Development",
  "Enterprise System Redesign",
  "Custom SaaS Engineering",
  "UI/UX for Scaling Brands",
  "AI Integration & Automation",
  "Managed Technical Support"
];

const HOW_WE_WORK = [
  { step: "01", title: "Strategic Discovery", desc: "Our team dives deep into your business architecture and growth hurdles." },
  { step: "02", title: "Technical Blueprinting", desc: "Mapping out a scalable infrastructure designed for 10x growth." },
  { step: "03", title: "Elite Design", desc: "Agency-grade interfaces that align perfectly with premium brand values." },
  { step: "04", title: "Agile Development", desc: "Fast, secure, and modular coding by our specialized engineering team." },
  { step: "05", title: "Quality Assurance", desc: "Internal team testing across hundreds of device configurations." },
  { step: "06", title: "Launch & Optimize", desc: "Seamless deployment with post-launch performance monitoring." },
  { step: "07", title: "Ongoing Partnership", desc: "Continuous innovation to keep your digital empire ahead of the curve." }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-12 overflow-hidden bg-slate-50 text-slate-900">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
          style={{ backgroundImage: 'radial-gradient(circle, black 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
        />
        <div className="max-w-5xl mx-auto px-6 text-center space-y-8 animate-fade-in-up relative z-10">
          <Badge className="bg-primary/20 text-primary border-none px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
            Agency Credentials: 3+ Years Excellence
          </Badge>
          <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight">
            The <span className="text-gradient">Agency</span> for Digital Empires
          </h1>
          <p className="text-slate-600 text-xl md:text-2xl max-w-3xl mx-auto font-body leading-relaxed">
            Prism Web Studio is a collective of designers, engineers, and strategists dedicated to building modern digital solutions for high-growth businesses.
          </p>
        </div>
      </section>

      {/* 2. Our Identity */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-sm">
              <Award size={18} /> Our Core Identity
            </div>
            <h2 className="font-headline text-4xl font-bold text-slate-900">Moving Beyond Solo Development</h2>
            <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
              <p>
                Founded 3 years ago, Prism Web Studio started with a vision to provide a full-team agency experience to businesses that were tired of the limitations of solo freelancers.
              </p>
              <p>
                In today’s landscape, a successful digital product requires more than just code. It requires strategic design, technical architecture, and proactive support. That's why we built a complete agency ecosystem.
              </p>
              <p>
                Our specialized team brings together 3+ years of expertise in Next.js, AI automation, and enterprise-grade UI/UX to ensure your business doesn't just launch, but thrives.
              </p>
            </div>
          </div>
          <div className="relative aspect-square rounded-[3rem] overflow-hidden bg-slate-100 border border-slate-200 shadow-2xl">
            <img 
              src="https://res.cloudinary.com/drmjnzcfv/image/upload/v1775291280/prism-studio-uploads/vgytqz5vw76evij7ozio.png" 
              alt="Agency Team Illustration" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* 3 & 4. Mission & Vision */}
      <section className="py-24 bg-slate-50 border-y border-slate-200 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-10 rounded-[2.5rem] bg-white border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8">
              <Target size={32} />
            </div>
            <h3 className="font-headline text-3xl font-bold text-slate-900 mb-6">Our Mission</h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              To empower businesses globally by providing access to a high-performance agency team that delivers clear, reliable, and scalable digital engineering.
            </p>
          </Card>
          <Card className="p-10 rounded-[2.5rem] bg-white border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-8">
              <Eye size={32} />
            </div>
            <h3 className="font-headline text-3xl font-bold text-slate-900 mb-6">Our Vision</h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              To be the world’s most trusted digital partner for businesses seeking to redefine their industry through modern AI and performance-driven design.
            </p>
          </Card>
        </div>
      </section>

      {/* 5. What We Do */}
      <section className="py-24 px-6 max-w-7xl mx-auto text-center">
        <div className="space-y-4 mb-16">
          <h2 className="font-headline text-4xl font-bold text-slate-900">Agency Capabilities</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            We provide an end-to-end suite of digital services designed for long-term growth.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHAT_WE_DO.map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-primary/20 transition-all group">
              <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <CheckCircle2 size={20} />
              </div>
              <span className="font-bold text-slate-800 text-lg">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 6. How We Work */}
      <section className="py-24 bg-slate-50 text-slate-900 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-20">
            <h2 className="font-headline text-4xl font-bold">The Agency Process</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Our structured methodology ensures high-quality delivery within committed agency timelines.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {HOW_WE_WORK.map((item, idx) => (
              <div key={idx} className="space-y-6 p-8 rounded-3xl bg-white/5 border border-slate-300 hover:bg-white/10 transition-all">
                <span className="text-primary font-bold text-3xl opacity-50">{item.step}</span>
                <h4 className="font-headline text-xl font-bold">{item.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Final CTA Section */}
      <section className="py-32 px-6 bg-slate-50 text-slate-900 text-center">
        <div className="max-w-4xl mx-auto space-y-10">
          <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tight">
            Partner with a Full Team
          </h2>
          <p className="text-slate-600 text-xl leading-relaxed">
            Stop juggling freelancers. Get a dedicated agency partner focused on your business ROI.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-12 h-16 text-xl font-bold btn-glow transition-all hover:scale-105">
              <Link href="/contact?type=project">Start Your Project</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}