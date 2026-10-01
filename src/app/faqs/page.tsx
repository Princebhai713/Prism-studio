
"use client";

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, MessageSquare, Mail, Phone, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const DETAILED_FAQS = [
  {
    category: "Project Timeline & Process",
    items: [
      {
        q: "How long does a typical project take?",
        a: "A standard business website typically takes 4-6 weeks from discovery to launch. Complex SaaS applications or AI integrations can take 3-5 months depending on the technical requirements and feature list."
      },
      {
        q: "What is your development process?",
        a: "Our process follows 7 key phases: Discovery, Strategic Planning, UI/UX Design, Development, Rigorous Testing, Deployment, and Post-Launch Support. We provide weekly updates at every stage."
      },
      {
        q: "Will I have a dedicated project manager?",
        a: "Yes. Every project at Prism is assigned a dedicated lead who will be your primary point of contact and ensure everything stays on schedule."
      }
    ]
  },
  {
    category: "Technical & Design",
    items: [
      {
        q: "Do you use WordPress or templates?",
        a: "We exclusively build custom digital solutions using modern stacks like Next.js and React. We do not use off-the-shelf templates because we believe they limit your brand's growth and site performance."
      },
      {
        q: "Is my website SEO-friendly?",
        a: "Technical SEO is a core part of our build process. We optimize for Core Web Vitals, implement clean semantic HTML, and ensure lightning-fast load times out of the box."
      },
      {
        q: "Will the design be mobile-responsive?",
        a: "Absolutely. We follow a 'Mobile-First' philosophy. Your site will look and function perfectly across desktops, tablets, and smartphones."
      }
    ]
  },
  {
    category: "Pricing & Support",
    items: [
      {
        q: "How do you handle project pricing?",
        a: "We provide fixed-fee quotes based on a detailed scope of work. For long-term development, we also offer retainer-based models. We ensure 100% transparency with no hidden costs."
      },
      {
        q: "Do you offer post-launch maintenance?",
        a: "Yes, we offer ongoing maintenance packages that include security updates, performance monitoring, and content updates to keep your digital empire running smoothly."
      }
    ]
  }
];

export default function DetailedFAQPage() {
  return (
    <main className="min-h-screen bg-white">
      
      <section className="relative pt-32 pb-12 bg-slate-50 text-slate-900 text-center px-6">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
          style={{ backgroundImage: 'radial-gradient(circle, black 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
        />
        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <Badge className="bg-primary/20 text-primary border-primary/20 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
            Help Center
          </Badge>
          <h1 className="font-headline text-5xl md:text-7xl font-bold leading-tight">
            Questions? <span className="text-gradient">Answered.</span>
          </h1>
          <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto font-body">
            Find quick answers to common questions about our process, technology, and pricing.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="space-y-20">
          {DETAILED_FAQS.map((cat, idx) => (
            <div key={idx} className="space-y-8">
              <h2 className="font-headline text-3xl font-bold text-slate-900 border-l-4 border-primary pl-6">
                {cat.category}
              </h2>
              <Accordion type="single" collapsible className="w-full space-y-4">
                {cat.items.map((item, i) => (
                  <AccordionItem key={i} value={`${idx}-${i}`} className="border rounded-3xl px-8 py-2 border-slate-200 bg-slate-50 hover:bg-white transition-all">
                    <AccordionTrigger className="text-xl font-bold text-slate-900 hover:no-underline hover:text-primary transition-colors text-left">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600 leading-relaxed text-lg pt-4">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* Support CTA - Optimized for General Support */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto rounded-[3rem] bg-slate-50 p-12 md:p-20 text-center space-y-10 relative overflow-hidden">
          <div className="relative z-10 space-y-6">
            <h2 className="font-headline text-3xl md:text-5xl font-bold text-white">Still have questions?</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Our team is ready to help you navigate your digital transformation journey. No pressure, just solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 h-16 font-bold">
                <Link href="/contact?type=general" className="flex items-center gap-2">Contact Support <ArrowRight size={18} /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-10 h-16 border-slate-300 text-white hover:bg-slate-100">
                <Link href="/contact?type=consultation">Book a Call</Link>
              </Button>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] -mr-32 -mt-32" />
        </div>
      </section>

    </main>
  );
}
