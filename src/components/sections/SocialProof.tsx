
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Quote } from 'lucide-react';
import Link from 'next/link';

const TESTIMONIALS = [
  {
    name: "Alex Rivers",
    role: "CEO, InnovateTech",
    quote: "Prism transformed our digital presence completely. Their AI integration saved us 40 hours a week in operational overhead.",
  },
  {
    name: "Sarah Chen",
    role: "Founder, BloomSaaS",
    quote: "Cleanest code I've seen in years. Fast, responsive, and beautifully designed. Highly recommend Prism Studio.",
  },
  {
    name: "Marcus Thorne",
    role: "CTO, Global Logistics",
    quote: "Our website redesign led to a 150% increase in conversions within the first month. Prism knows exactly what they are doing.",
  }
];

export function SocialProof() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-headline text-4xl font-bold text-slate-900">Trusted by Industry Leaders</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            We've partnered with forward-thinking companies to build robust digital solutions that scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <Card key={idx} className="bg-slate-50 border-slate-100 hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-8 space-y-6">
                <Quote className="text-primary w-8 h-8 opacity-30" />
                <p className="text-slate-700 leading-relaxed text-lg">"{t.quote}"</p>
                <div className="pt-4 border-t border-slate-200">
                  <p className="font-bold text-slate-900">{t.name}</p>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="link" className="text-primary hover:text-primary/80 font-semibold">
            <Link href="/testimonials" aria-label="View all client testimonials">View More Testimonials →</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
