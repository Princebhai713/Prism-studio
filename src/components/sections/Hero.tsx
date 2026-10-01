import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 flex flex-col items-center justify-center text-center px-6 min-h-[500px]">
      
      <div className="max-w-5xl mx-auto space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900 max-w-4xl mx-auto">
          Prism Studio<br />
          <span className="text-primary">Professional Web Services</span>
        </h1>
        
        <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          We build fast, reliable, and user-friendly websites for businesses of all sizes.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 h-12 text-base font-medium">
            <Link href="/contact?type=project" className="flex items-center gap-2">
              Start Your Project
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="px-8 h-12 text-base border-slate-300 text-slate-700 hover:bg-slate-100">
            <Link href="#portfolio">View Portfolio</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
