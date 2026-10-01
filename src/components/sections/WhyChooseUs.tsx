
"use client";

import { CheckCircle2, FastForward, Code, Palette, Zap, Cpu, Search } from 'lucide-react';

const REASONS = [
  { icon: <FastForward />, title: "Fast Delivery", text: "Optimized workflows ensuring your project hits the market ahead of schedule." },
  { icon: <Code />, title: "Clean Code", text: "Future-proof development with modular, readable, and highly maintainable codebases." },
  { icon: <Palette />, title: "Modern Design", text: "Aesthetics that resonate with current digital trends and premium brand values." },
  { icon: <Cpu />, title: "AI Integration", text: "Leveraging LLMs and automation to give your business a modern edge." },
  { icon: <Zap />, title: "Custom Solutions", text: "No templates. Every line of code is tailored to your specific business needs." },
  { icon: <Search />, title: "SEO Friendly", text: "Built-in optimization ensuring your brand ranks high on day one." }
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-slate-900">Why Choose Us</h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            At Prism Studio, we don't just build websites; we build scalable digital solutions. We solve complex business problems through clean design and intelligent automation.
          </p>
          
          <div className="space-y-4">
            <h3 className="font-headline text-2xl font-semibold text-slate-900">Our Working Style</h3>
            <ul className="space-y-4">
              {[
                "Collaborative & transparent communication",
                "Agile methodology for continuous improvement",
                "Focus on ROI and measurable business results",
                "Long-term partnership approach"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center space-x-3 text-slate-700">
                  <CheckCircle2 className="text-primary w-5 h-5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {REASONS.map((r, idx) => (
            <div key={idx} className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:shadow-md transition-all duration-300 h-full flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="shrink-0 w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm border border-slate-100">
                  <div className="w-6 h-6 [&>svg]:w-full [&>svg]:h-full">
                    {r.icon}
                  </div>
                </div>
                <h4 className="font-headline text-xl font-bold text-slate-900">{r.title}</h4>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">
                {r.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
