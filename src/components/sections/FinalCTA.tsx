"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function FinalCTA() {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-slate-50">
      <div className="max-w-5xl mx-auto text-center space-y-10 p-16 rounded-[3rem] bg-white border border-slate-200 shadow-2xl relative overflow-hidden">
        <div className="space-y-6 relative z-10">
          <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            Ready to Build Your Digital Empire?
          </h2>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto">
            Stop waiting for the right moment. Let's start crafting your high-performance, AI-powered future today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 h-16 text-lg font-bold btn-glow">
              <Link href="/contact?type=project">Start Your Project</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-10 h-16 text-lg border-slate-300 bg-transparent hover:bg-slate-50 text-slate-900 transition-all hover:scale-105 duration-300">
              <Link href="/contact?type=consultation">Book a Free Consultation</Link>
            </Button>
          </div>
        </div>

        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 blur-[100px] -ml-32 -mb-32" />
      </div>
    </section>
  );
}
