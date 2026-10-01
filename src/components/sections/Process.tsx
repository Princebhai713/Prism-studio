
"use client";

const STEPS = [
  { title: "Requirement Discussion", desc: "Understanding your vision, business goals, and target audience." },
  { title: "Planning", desc: "Strategic mapping of site architecture, features, and timeline." },
  { title: "UI/UX Design", desc: "Crafting intuitive interfaces and premium brand aesthetics." },
  { title: "Development", desc: "High-quality coding with performance and scalability as priority." },
  { title: "Testing", desc: "Rigorous quality assurance across all devices and edge cases." },
  { title: "Delivery", desc: "Deployment to production and final performance optimization." },
  { title: "Support", desc: "Continuous monitoring and iterative improvements post-launch." }
];

export function Process() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-headline text-4xl font-bold text-slate-900">Our Process</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            A transparent and proven methodology for turning ideas into digital realities.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="absolute left-[31px] md:left-1/2 top-0 bottom-0 w-px bg-slate-200 hidden md:block" />
          
          <div className="space-y-12">
            {STEPS.map((s, idx) => (
              <div key={idx} className={`relative flex items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-white shadow-md z-10" />
                
                <div className={`flex-1 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className={`p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-md transition-all duration-300 max-w-md mx-auto ${idx % 2 === 0 ? 'md:mr-0' : 'md:ml-0'}`}>
                    <span className="text-primary font-bold text-lg">0{idx + 1}</span>
                    <h3 className="font-headline text-2xl font-bold mt-2 mb-3 text-slate-900">{s.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
