
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

const FAQS = [
  {
    q: "How long does a typical project take?",
    a: "Most business websites are delivered within 4-6 weeks, while complex SaaS platforms or AI integrations can take 3-5 months depending on the scope."
  },
  {
    q: "Do you use templates or build custom?",
    a: "We exclusively build custom solutions. We believe templates limit business potential and brand uniqueness."
  },
  {
    q: "Are your websites mobile-responsive?",
    a: "Absolutely. We follow a 'Mobile-First' design philosophy, ensuring a seamless experience across all screens."
  },
  {
    q: "Will my website be SEO-friendly?",
    a: "Yes. Technical SEO is baked into our development process, from fast loading times to clean semantic HTML."
  }
];

export function FAQ() {
  return (
    <section className="py-24 max-w-4xl mx-auto px-6 bg-white">
      <div className="text-center mb-16 space-y-4">
        <h2 className="font-headline text-4xl font-bold text-slate-900">Frequently Asked Questions</h2>
        <p className="text-slate-500 text-lg">Everything you need to know about starting your project with Prism Studio.</p>
      </div>

      <Accordion type="single" collapsible className="w-full space-y-4">
        {FAQS.map((faq, idx) => (
          <AccordionItem key={idx} value={`item-${idx}`} className="border rounded-2xl px-6 py-2 border-slate-200 bg-slate-50">
            <AccordionTrigger className="text-lg font-bold text-slate-900 hover:no-underline hover:text-primary transition-colors">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-slate-600 leading-relaxed text-base pt-2">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
        <Button asChild variant="outline" className="rounded-full px-10 h-14 text-lg border-slate-300 bg-transparent hover:bg-slate-50 text-slate-900 transition-all hover:scale-105 duration-300">
          <Link href="/faqs">View All FAQs</Link>
        </Button>
        <Button asChild variant="ghost" className="rounded-full px-10 h-14 text-lg text-primary hover:bg-primary/5 transition-all">
          <Link href="/contact?type=question" className="flex items-center gap-2">
            Ask a Custom Question <ArrowRight size={18} />
          </Link>
        </Button>
      </div>
    </section>
  );
}
