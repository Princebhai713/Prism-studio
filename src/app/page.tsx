import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  CheckCircle2, 
  Code2, 
  Cpu, 
  Zap, 
  ShieldCheck, 
  Sparkles, 
  Server, 
  Layers, 
  Search, 
  Phone, 
  MessageSquare
} from 'lucide-react';
import HeroVisualConsole from '@/components/home/HeroVisualConsole';
import TestimonialsSlider from '@/components/home/TestimonialsSlider';

const homeFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long does a custom web development project take with Prism Web Studio?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A standard custom business website engineered in Next.js typically takes 4 to 6 weeks from initial architecture planning to deployment. Complex SaaS platforms, custom AI agent integrations, or high-volume e-commerce architectures generally require 8 to 16 weeks depending on database schemas and API integrations.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why should businesses choose custom Next.js development over WordPress or Shopify?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Custom Next.js applications eliminate bloated third-party plugins, security vulnerabilities, and sluggish database queries common in traditional CMS platforms. Next.js delivers sub-500ms load speeds, perfect 99+ Core Web Vitals, complete code ownership, and 3x higher conversion rates without monthly plugin licensing fees.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Prism Web Studio offer AI automation and custom LLM chatbot integration?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We specialize in building autonomous AI customer support agents, automated CRM lead routing, Retrieval-Augmented Generation (RAG) knowledge systems, and custom workflow webhooks that eliminate up to 70% of repetitive operational overhead.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who owns the intellectual property and source code of the project?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You own 100% of the customized frontend source code, visual designs, database schemas, and creative assets upon full milestone payment. We provide complete GitHub repository transfer with zero vendor lock-in.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is Prism Web Studio located and which regions do you serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our primary engineering studio is headquartered in Kushinagar, Uttar Pradesh, India, with active client engagements spanning Gorakhpur, Lucknow, Delhi NCR, Mumbai, as well as global international clients across the United States, United Kingdom, and the United Arab Emirates.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide post-launch maintenance and technical support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every project includes an initial 30-day comprehensive bug-fix warranty. Additionally, we provide ongoing retainer packages covering 24/7 uptime monitoring, security patches, edge cache optimization, and continuous feature expansion.',
      },
    },
  ],
};

export default function HomePage() {
  return (
    <div className="space-y-0 bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }}
      />
      
      {/* ==================== 1. HERO SECTION WITH CRISP VISIBLE GRID & INTERACTIVE CONSOLE ==================== */}
      <section className="relative pt-16 pb-20 md:pb-24 border-b border-slate-200/80 bg-gradient-to-b from-slate-50/90 via-white to-white overflow-hidden">
        {/* Crisp Visible Dot-Matrix Engineering Pattern */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-25"
          style={{
            backgroundImage: `radial-gradient(#2563eb 1.2px, transparent 1.2px), radial-gradient(#64748b 1px, transparent 1px)`,
            backgroundSize: '36px 36px',
            backgroundPosition: '0 0, 18px 18px'
          }}
        />

        {/* Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-400/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold shadow-sm">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                <span>Gorakhpur & Purvanchal's #1 Web & AI Engineering Agency</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.12]">
                Top Web Development & <br/>
                <span className="text-blue-600">AI Studio in Gorakhpur</span>
              </h1>
              
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl font-normal">
                Prism Web Studio is the premier web development company and website designer in Gorakhpur. We engineer fast, high-converting custom websites, online e-commerce stores, and autonomous AI automation solutions tailored for growing businesses in Gorakhpur, Uttar Pradesh, and across the globe.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact?type=project"
                  className="relative inline-flex items-center gap-2 px-7 py-4 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-95 rounded-xl shadow-lg shadow-blue-500/25 transition-all duration-200 overflow-hidden group min-h-[48px]"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span>Start Your Project</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                </Link>

                <a
                  href="tel:+918601825502"
                  className="inline-flex items-center gap-2 px-6 py-4 text-sm font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl shadow-sm transition active:scale-95 min-h-[48px]"
                >
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span>Call: +91 86018 25502</span>
                </a>
              </div>

              {/* Verified Performance Metrics */}
              <div className="pt-8 border-t border-slate-200 grid grid-cols-3 gap-6">
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-slate-900">99+</p>
                  <p className="text-xs text-slate-700 font-semibold mt-0.5">Core Web Vitals Score</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-slate-900">&lt;500ms</p>
                  <p className="text-xs text-slate-700 font-semibold mt-0.5">Global Edge Latency</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-slate-900">100%</p>
                  <p className="text-xs text-slate-700 font-semibold mt-0.5">Source Code Ownership</p>
                </div>
              </div>
            </div>

            {/* Right Visual Interactive Engineering Console */}
            <div className="lg:col-span-5">
              <HeroVisualConsole />
            </div>

          </div>
        </div>
      </section>

      {/* ==================== 2. CORE CAPABILITIES (HOVER ELEVATION & HIGH CONTRAST) ==================== */}
      <section className="py-20 md:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Enterprise Engineering
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Professional Website Design Services in Gorakhpur
            </h2>
            <p className="text-base text-slate-700 leading-relaxed font-normal">
              We do not build generic template sites. We engineer custom, scalable digital ecosystems tailored to local retailers, healthcare clinics, educational institutes, and growing businesses in Gorakhpur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 */}
            <div className="p-8 rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-2xl hover:border-blue-500 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition duration-200">
                  <Code2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition">
                  Custom Next.js & React Web Apps
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  Engineered using the latest Next.js 15 App Router and React Server Components. Experience sub-second page transitions, dynamic rendering at edge locations, and flawless Core Web Vitals scores that search algorithms prioritize.
                </p>
                <ul className="space-y-2 text-xs text-slate-700 mb-6 font-medium">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" /> Server-Side Rendering (SSR) & SSG</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" /> Zero Layout Shift (CLS 0.00)</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" /> Semantic HTML & Rich JSON-LD</li>
                </ul>
              </div>
              <Link 
                href="/services" 
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 min-h-[44px] group/link"
              >
                <span>Explore Web Architecture</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Service 2 */}
            <div className="p-8 rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-2xl hover:border-purple-500 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition duration-200">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-purple-600 transition">
                  Autonomous AI & Business Automation
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  Integrate intelligent LLM agents into your customer acquisition pipelines. From intelligent self-learning customer support to automated CRM qualification and dynamic quote generators that operate 24/7 without manual delays.
                </p>
                <ul className="space-y-2 text-xs text-slate-700 mb-6 font-medium">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0" /> Custom Knowledge RAG Pipelines</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0" /> 70% First-Tier Ticket Deflection</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0" /> Webhook & CRM Sync (HubSpot, Stripe)</li>
                </ul>
              </div>
              <Link 
                href="/services" 
                className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-600 hover:text-purple-700 min-h-[44px] group/link"
              >
                <span>Explore AI Solutions</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Service 3 */}
            <div className="p-8 rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-2xl hover:border-emerald-500 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition duration-200">
                  <Server className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition">
                  Cloud SaaS & Multi-Tenant Systems
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  Scalable database architectures powered by PostgreSQL, Supabase, and distributed Redis caching. Designed from day one to handle traffic spikes, rigorous compliance audits, and multi-tenant data isolation seamlessly.
                </p>
                <ul className="space-y-2 text-xs text-slate-700 mb-6 font-medium">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Row-Level Security (RLS) Isolation</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Microservices & Serverless APIs</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Automated CI/CD Staging Pipelines</li>
                </ul>
              </div>
              <Link 
                href="/services" 
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 hover:text-emerald-700 min-h-[44px] group/link"
              >
                <span>Explore Cloud Platforms</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Service 4 */}
            <div className="p-8 rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-2xl hover:border-amber-500 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6 group-hover:bg-amber-600 group-hover:text-white transition duration-200">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition">
                  UI/UX & High-Converting CRO
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  Clean, human-centered UI/UX designed strictly to convert visitors into paying clients. We blend behavioral psychology, high-contrast visual hierarchy, and friction-free user journeys into unforgettable brand experiences.
                </p>
                <ul className="space-y-2 text-xs text-slate-700 mb-6 font-medium">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" /> Conversion Rate Optimization (CRO)</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" /> Mobile-First Responsive Design</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" /> Design System Tokens in Figma</li>
                </ul>
              </div>
              <Link 
                href="/services" 
                className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 hover:text-amber-700 min-h-[44px] group/link"
              >
                <span>Explore UI/UX Engineering</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 3. ARCHITECTURAL COMPARISON (WHY NEXT.JS BEATS CMS) ==================== */}
      <section className="py-20 md:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why Gorakhpur Businesses Choose Prism Web Studio?
            </h2>
            <p className="text-base text-slate-700 leading-relaxed">
              Google algorithms rank websites based on speed, security, and Core Web Vitals. Here is why businesses in Gorakhpur and Eastern UP trust our custom Next.js engineering over slow, generic WordPress templates.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-100/70 text-xs font-bold uppercase tracking-wider text-slate-700">
                  <th className="py-5 px-6">Benchmark Parameter</th>
                  <th className="py-5 px-6 text-blue-600 bg-blue-50/50">Prism Custom Architecture (Next.js)</th>
                  <th className="py-5 px-6">WordPress / Generic Builders</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
                <tr>
                  <td className="py-4 px-6 font-bold text-slate-900">Average Page Load Speed</td>
                  <td className="py-4 px-6 font-bold text-emerald-600 bg-blue-50/20">0.3s - 0.7s (Instant Edge Render)</td>
                  <td className="py-4 px-6 text-rose-500 font-medium">2.8s - 6.5s (Heavy Database Queries)</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-bold text-slate-900">Google Core Web Vitals Score</td>
                  <td className="py-4 px-6 font-bold text-emerald-600 bg-blue-50/20">98 - 100/100 (Passes All Audits)</td>
                  <td className="py-4 px-6 text-rose-500 font-medium">35 - 65/100 (Fails LCP & CLS)</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-bold text-slate-900">Security & Vulnerability Exposure</td>
                  <td className="py-4 px-6 font-bold text-emerald-600 bg-blue-50/20">Bank-Grade (Static Edge, Zero SQL Injection Risk)</td>
                  <td className="py-4 px-6 text-rose-500 font-medium">High Risk (Vulnerable Plugins & MySQL Exploits)</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-bold text-slate-900">Conversion Rate Benchmark</td>
                  <td className="py-4 px-6 font-bold text-emerald-600 bg-blue-50/20">3.8% - 6.2% Average Conversion</td>
                  <td className="py-4 px-6 text-slate-600 font-medium">1.1% - 1.8% Standard Industry Average</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-bold text-slate-900">Code & Intellectual Property Ownership</td>
                  <td className="py-4 px-6 font-bold text-emerald-600 bg-blue-50/20">100% Client Owned (Zero Recurring License Fees)</td>
                  <td className="py-4 px-6 text-slate-600 font-medium">Platform Lock-In & Mandatory Monthly Add-ons</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-bold text-slate-900">Mobile Fluidity & User Experience</td>
                  <td className="py-4 px-6 font-bold text-emerald-600 bg-blue-50/20">App-Like Navigation & Instant Caching</td>
                  <td className="py-4 px-6 text-slate-600 font-medium">Sluggish Screen Refreshes & Layout Shifts</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ==================== 4. GEOGRAPHIC AUTHORITY (INDIA & GLOBAL) ==================== */}
      <section className="py-16 md:py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-4">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                Empowering Gorakhpur Retailers & Enterprises with Global Standards
              </h2>
              <p className="text-base text-slate-700 leading-relaxed font-normal">
                Prism Web Studio operates from its premier digital engineering lab near Gorakhpur (Kushinagar HQ), actively helping commercial businesses in <strong>Golghar, Civil Lines, Medical College Road, and Industrial Area Gorakhpur</strong> dominate Google Search and drive high-converting customer inquiries.
              </p>
              <p className="text-sm text-slate-700 leading-relaxed font-normal">
                By combining Silicon Valley technical standards with regional operational efficiency, our clients receive top 1% engineering talent at unbeatable return on investment.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs font-bold text-slate-800">
                <span className="px-3.5 py-1.5 rounded-lg bg-slate-100 border border-slate-200">📍 Kushinagar & Gorakhpur HQ</span>
                <span className="px-3.5 py-1.5 rounded-lg bg-slate-100 border border-slate-200">🚀 Serving Pan-India</span>
                <span className="px-3.5 py-1.5 rounded-lg bg-slate-100 border border-slate-200">🌐 Global Delivery (US/UK/UAE)</span>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 space-y-2">
                <p className="text-3xl font-extrabold text-blue-600">30+</p>
                <h4 className="text-sm font-bold text-slate-900">Custom Systems Deployed</h4>
                <p className="text-xs text-slate-600">From high-conversion business sites to mission-critical SaaS tools.</p>
              </div>
              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 space-y-2">
                <p className="text-3xl font-extrabold text-purple-600">99.9%</p>
                <h4 className="text-sm font-bold text-slate-900">Guaranteed System Uptime</h4>
                <p className="text-xs text-slate-600">Multi-region cloud failovers and automated data redundancy.</p>
              </div>
              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 space-y-2">
                <p className="text-3xl font-extrabold text-emerald-600">&lt;24h</p>
                <h4 className="text-sm font-bold text-slate-900">Support Response SLA</h4>
                <p className="text-xs text-slate-600">Direct senior engineer communication with zero ticket bureaucracy.</p>
              </div>
              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 space-y-2">
                <p className="text-3xl font-extrabold text-amber-600">100%</p>
                <h4 className="text-sm font-bold text-slate-900">Contractual Transparency</h4>
                <p className="text-xs text-slate-600">Clear milestones, fixed quotations, and complete IP transfer.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 5. FEATURED CLIENT BLUEPRINTS ==================== */}
      <section className="py-20 md:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-16">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                Proven Track Record
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
                Featured Engineering Blueprints
              </h2>
              <p className="text-base text-slate-700 mt-2 max-w-2xl font-normal">
                Real-world solutions engineered for real-world enterprise growth. Explore our technical case studies.
              </p>
            </div>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-300 text-sm font-semibold text-slate-800 hover:bg-slate-50 transition min-h-[44px]"
            >
              <span>View Full Portfolio</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Blueprint 1 */}
            <div className="p-7 rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-2xl hover:border-blue-500 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 aspect-[16/10] mb-6 group/img">
                  <div className="bg-slate-100 px-3 py-2 border-b border-slate-200 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono">prism.io/ecommerce-scaling</span>
                    <span className="text-[10px] text-blue-600 font-bold bg-blue-50 px-2 py-0.5 rounded">0.4s</span>
                  </div>

                  <div className="p-4 bg-gradient-to-br from-blue-50 via-white to-slate-50 h-full flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black text-slate-800 tracking-tight">STOREFRONT CHECKOUT</span>
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">Active</span>
                    </div>
                    <div className="space-y-1.5 my-auto">
                      <div className="h-2 w-3/4 bg-blue-200 rounded"></div>
                      <div className="h-2 w-1/2 bg-slate-200 rounded"></div>
                      <div className="h-6 w-full bg-emerald-500/10 border border-emerald-500/30 rounded-lg flex items-center px-2 text-[10px] font-bold text-emerald-700">
                        10,000+ Concurrent Checkouts
                      </div>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center p-4">
                    <span className="px-4 py-2.5 bg-blue-600 text-white text-xs font-bold rounded-xl shadow-xl flex items-center gap-1.5">
                      <span>See Blueprint</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md uppercase">
                  SaaS Engineering
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-4 mb-2 group-hover:text-blue-600 transition">
                  E-Commerce Scaling Platform
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  Engineered a headless Next.js frontend with distributed PostgreSQL caching capable of sustaining 10,000+ concurrent checkouts with zero downtime.
                </p>
                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs font-bold text-emerald-900 mb-6">
                  Outcome: +300% Online Revenue & 0.4s Checkout Speed
                </div>
              </div>
              <Link 
                href="/portfolio/ecommerce-scaling" 
                className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 min-h-[44px]"
              >
                View Architecture Blueprint →
              </Link>
            </div>

            {/* Blueprint 2 */}
            <div className="p-7 rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-2xl hover:border-purple-500 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 aspect-[16/10] mb-6 group/img">
                  <div className="bg-slate-100 px-3 py-2 border-b border-slate-200 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono">prism.io/ai-customer-agent</span>
                    <span className="text-[10px] text-purple-600 font-bold bg-purple-50 px-2 py-0.5 rounded">RAG AI</span>
                  </div>

                  <div className="p-4 bg-gradient-to-br from-purple-50 via-white to-slate-50 h-full flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black text-slate-800 tracking-tight">AI CONTEXT AGENT</span>
                      <span className="text-[10px] font-bold text-purple-700 bg-purple-100 px-2 py-0.5 rounded-full">Autonomous</span>
                    </div>
                    <div className="space-y-1.5 my-auto">
                      <div className="h-2 w-2/3 bg-purple-200 rounded"></div>
                      <div className="h-2 w-1/2 bg-slate-200 rounded"></div>
                      <div className="h-6 w-full bg-purple-500/10 border border-purple-500/30 rounded-lg flex items-center px-2 text-[10px] font-bold text-purple-800">
                        70% Automated Ticket Resolution
                      </div>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center p-4">
                    <span className="px-4 py-2.5 bg-purple-600 text-white text-xs font-bold rounded-xl shadow-xl flex items-center gap-1.5">
                      <span>See Blueprint</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                <span className="text-xs font-bold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-md uppercase">
                  AI Automation
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-4 mb-2 group-hover:text-purple-600 transition">
                  Autonomous Support AI Agent
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  Constructed a proprietary RAG chatbot system connected to company documentation that autonomously resolves 70% of tier-1 support tickets.
                </p>
                <div className="p-3 bg-purple-50 rounded-xl border border-purple-200 text-xs font-bold text-purple-900 mb-6">
                  Outcome: 70% Ticket Deflection & $4,500/mo Saved
                </div>
              </div>
              <Link 
                href="/portfolio/ai-customer-agent" 
                className="text-xs font-bold text-purple-600 hover:text-purple-700 flex items-center gap-1 min-h-[44px]"
              >
                View Architecture Blueprint →
              </Link>
            </div>

            {/* Blueprint 3 */}
            <div className="p-7 rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-2xl hover:border-emerald-500 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 aspect-[16/10] mb-6 group/img">
                  <div className="bg-slate-100 px-3 py-2 border-b border-slate-200 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono">prism.io/healthcare-portal</span>
                    <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded">HIPAA</span>
                  </div>

                  <div className="p-4 bg-gradient-to-br from-emerald-50 via-white to-slate-50 h-full flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black text-slate-800 tracking-tight">CLINIC DISPATCH</span>
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">Secure</span>
                    </div>
                    <div className="space-y-1.5 my-auto">
                      <div className="h-2 w-3/4 bg-emerald-200 rounded"></div>
                      <div className="h-2 w-1/3 bg-slate-200 rounded"></div>
                      <div className="h-6 w-full bg-emerald-500/10 border border-emerald-500/30 rounded-lg flex items-center px-2 text-[10px] font-bold text-emerald-800">
                        2x Patient Online Appointments
                      </div>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center p-4">
                    <span className="px-4 py-2.5 bg-emerald-600 text-white text-xs font-bold rounded-xl shadow-xl flex items-center gap-1.5">
                      <span>See Blueprint</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md uppercase">
                  Web Development
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-4 mb-2 group-hover:text-emerald-600 transition">
                  Healthcare Patient Portal
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  Redesigned a clinic scheduling system with high-contrast accessibility standards and automated SMS dispatch, eliminating receptionist bottlenecks.
                </p>
                <div className="p-3 bg-blue-50 rounded-xl border border-blue-200 text-xs font-bold text-blue-900 mb-6">
                  Outcome: 2x Appointment Bookings & HIPAA Verified
                </div>
              </div>
              <Link 
                href="/portfolio/healthcare-portal" 
                className="text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1 min-h-[44px]"
              >
                View Architecture Blueprint →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 6. SOCIAL PROOF & TESTIMONIALS (WITH AVATARS & MOBILE SLIDER) ==================== */}
      <section className="py-20 md:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Verified Client Outcomes
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Trusted by Ambitious Founders & Local Market Leaders
            </h2>
            <p className="text-base text-slate-700 leading-relaxed font-normal">
              Read how our sub-second Next.js web systems and autonomous AI solutions unlock measurable business growth.
            </p>
          </div>

          <TestimonialsSlider />
        </div>
      </section>

      {/* ==================== 7. GORAKHPUR LOCAL BUSINESS DIRECTORY & HUBS ==================== */}
      <section className="py-20 md:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Hyperlocal Gorakhpur Services
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Dedicated Web & SEO Services for Gorakhpur
            </h2>
            <p className="text-base text-slate-700 leading-relaxed font-normal">
              Explore specialized regional service hubs engineered to help businesses in Golghar, Civil Lines, Medical Road, and Purvanchal capture 100% of their local digital demand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Local Hub 1 */}
            <div className="p-8 rounded-3xl border border-slate-200 bg-slate-50/50 hover:border-blue-500 hover:bg-white hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition">
                  <Code2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Web Development Company in Gorakhpur</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  High-speed Next.js websites, custom eCommerce portals, and software for local businesses with guaranteed 100/100 Core Web Vitals and zero plugins.
                </p>
                <div className="text-xs font-bold text-blue-700 mb-6 flex items-center gap-1">
                  Starting at ₹14,999 • 5-7 Days Delivery
                </div>
              </div>
              <Link
                href="/web-development-company-in-gorakhpur"
                className="inline-flex items-center gap-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 px-5 py-3.5 rounded-xl transition text-center justify-center min-h-[44px]"
              >
                <span>View Web Dev Packages</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Local Hub 2 */}
            <div className="p-8 rounded-3xl border border-slate-200 bg-slate-50/50 hover:border-purple-500 hover:bg-white hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Website Designer in Gorakhpur</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  Award-winning mobile-first UI/UX designs, Figma interactive mockups, brand typography, and conversion-focused customer touchpoints.
                </p>
                <div className="text-xs font-bold text-purple-700 mb-6 flex items-center gap-1">
                  Custom UI/UX • 100% Mobile Responsive
                </div>
              </div>
              <Link
                href="/website-designer-in-gorakhpur"
                className="inline-flex items-center gap-2 text-xs font-bold text-white bg-purple-600 hover:bg-purple-700 px-5 py-3.5 rounded-xl transition text-center justify-center min-h-[44px]"
              >
                <span>Explore Design Packages</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Local Hub 3 */}
            <div className="p-8 rounded-3xl border border-slate-200 bg-slate-50/50 hover:border-emerald-500 hover:bg-white hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition">
                  <Search className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">SEO Services in Gorakhpur</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  Rank #1 on Google Maps (GMB 3-Pack) and Google Search. Drive inbound customer phone calls, store footfall, and high-ticket service leads.
                </p>
                <div className="text-xs font-bold text-emerald-700 mb-6 flex items-center gap-1">
                  Top 3 Google Maps Ranking • 30-60 Days
                </div>
              </div>
              <Link
                href="/seo-services-in-gorakhpur"
                className="inline-flex items-center gap-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 px-5 py-3.5 rounded-xl transition text-center justify-center min-h-[44px]"
              >
                <span>Check Local SEO Plans</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                Latest Gorakhpur Business Guides:
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Understand accurate pricing benchmarks and retail digital transformation in eastern UP.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/blog/gorakhpur-website-cost-guide"
                className="text-xs font-semibold text-blue-600 hover:text-blue-700 bg-white border border-slate-200 hover:border-blue-400 px-3.5 py-2 rounded-lg transition min-h-[44px] inline-flex items-center"
              >
                Website Cost Guide (2026) →
              </Link>
              <Link
                href="/blog/gorakhpur-retail-ecommerce-guide"
                className="text-xs font-semibold text-emerald-600 hover:text-emerald-700 bg-white border border-slate-200 hover:border-emerald-400 px-3.5 py-2 rounded-lg transition min-h-[44px] inline-flex items-center"
              >
                7 Reasons Retailers Need an Online Store →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 8. COMPREHENSIVE FAQS ==================== */}
      <section className="py-20 md:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-slate-700">
              Clear, transparent answers about our engineering methodology, pricing, timelines, and guarantees.
            </p>
          </div>

          <div className="space-y-4">
            <div className="border border-slate-200 rounded-2xl p-6 bg-white shadow-sm space-y-2">
              <h4 className="text-base font-bold text-slate-900">
                Q: How long does a custom web development project take with Prism Web Studio?
              </h4>
              <p className="text-sm text-slate-700 leading-relaxed">
                A: A standard business website engineered in Next.js typically takes 4 to 6 weeks from initial architecture planning to deployment. Complex SaaS platforms, custom AI agent integrations, or high-volume e-commerce architectures generally require 8 to 16 weeks depending on database schemas and API integrations.
              </p>
            </div>

            <div className="border border-slate-200 rounded-2xl p-6 bg-white shadow-sm space-y-2">
              <h4 className="text-base font-bold text-slate-900">
                Q: Why should businesses choose custom Next.js development over WordPress or Shopify?
              </h4>
              <p className="text-sm text-slate-700 leading-relaxed">
                A: Custom Next.js applications eliminate bloated third-party plugins, security vulnerabilities, and sluggish database queries common in traditional CMS platforms. Next.js delivers sub-500ms load speeds, perfect 99+ Core Web Vitals, complete code ownership, and 3x higher conversion rates without monthly plugin licensing fees.
              </p>
            </div>

            <div className="border border-slate-200 rounded-2xl p-6 bg-white shadow-sm space-y-2">
              <h4 className="text-base font-bold text-slate-900">
                Q: Does Prism Web Studio offer AI automation and custom LLM chatbot integration?
              </h4>
              <p className="text-sm text-slate-700 leading-relaxed">
                A: Yes. We specialize in building autonomous AI customer support agents, automated CRM lead routing, Retrieval-Augmented Generation (RAG) knowledge systems, and custom workflow webhooks that eliminate up to 70% of repetitive operational overhead.
              </p>
            </div>

            <div className="border border-slate-200 rounded-2xl p-6 bg-white shadow-sm space-y-2">
              <h4 className="text-base font-bold text-slate-900">
                Q: Who owns the intellectual property and source code of the project?
              </h4>
              <p className="text-sm text-slate-700 leading-relaxed">
                A: You own 100% of the customized frontend source code, visual designs, database schemas, and creative assets upon full milestone payment. We provide complete GitHub repository transfer with zero vendor lock-in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 9. FINAL HIGH-CONVERSION CTA STRIP ==================== */}
      <section className="py-20 md:py-24 bg-blue-600 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center space-y-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
            Ready to Engineer Your High-Performance Digital Empire?
          </h2>
          <p className="text-blue-100 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Stop losing customers to slow, bloated websites. Partner with Prism Web Studio to build modern, conversion-driven web infrastructure designed for measurable growth.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact?type=project"
              className="w-full sm:w-auto px-8 py-4 bg-white text-blue-600 hover:bg-slate-100 active:scale-95 font-bold rounded-xl shadow-xl transition min-h-[48px] flex items-center justify-center"
            >
              Start Your Project Today
            </Link>
            <a
              href="https://wa.me/918601825502?text=Hello%20Prism%20Web%20Studio,%20I%20am%20interested%20in%20a%20consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white font-bold rounded-xl shadow-xl transition flex items-center justify-center gap-2 min-h-[48px]"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
