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
import dynamic from 'next/dynamic';
import HeroVisualConsole from '@/components/home/HeroVisualConsole';
import HeroQuickQuote from '@/components/home/HeroQuickQuote';

const TestimonialsSlider = dynamic(
  () => import('@/components/home/TestimonialsSlider'),
  {
    loading: () => (
      <div className="w-full min-h-[440px] animate-pulse bg-slate-100/70 rounded-3xl border border-slate-200" />
    ),
  }
);

const homeFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long does a website development project take with Prism Web Studio?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standard business showcase websites and landing pages are delivered in 5 to 7 working days. Custom e-commerce portals with PhonePe/GPay UPI integration require 10 to 14 days, while complex custom web applications take 2 to 4 weeks with full quality assurance.',
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
      name: 'Does Prism Web Studio offer WhatsApp alerts and AI automation for businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! We integrate automated WhatsApp lead notifications, 24/7 AI customer inquiry bots, automated CRM customer follow-ups, and instant quotation calculators that save hours of manual operational time.',
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
        text: 'Prism Web Studio is headquartered in Civil Lines / Golghar Commercial Hub, Gorakhpur, Uttar Pradesh (UP 273001), with our regional engineering lab in Kushinagar. We actively serve businesses across Gorakhpur, Deoria, Basti, Maharajganj, Lucknow, as well as pan-India and international clients.',
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold shadow-sm">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                <span>Gorakhpur & Purvanchal's Premier Digital Studio</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.12]">
                Digital Engineering & <br/>
                <span className="text-blue-600">AI Studio in Gorakhpur</span>
              </h1>
              
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl font-normal">
                Prism Web Studio is Gorakhpur’s premier digital engineering agency. We build ultra-fast custom web applications, online stores with UPI payments, and autonomous AI automation. Explore our dedicated <Link href="/web-development-company-in-gorakhpur" className="font-bold text-blue-700 underline underline-offset-4 hover:text-blue-800">Web Development Company in Gorakhpur</Link>, bespoke <Link href="/website-designer-in-gorakhpur" className="font-bold text-purple-700 underline underline-offset-4 hover:text-purple-800">Website Designer in Gorakhpur</Link>, and #1 <Link href="/seo-services-in-gorakhpur" className="font-bold text-emerald-700 underline underline-offset-4 hover:text-emerald-800">SEO Services in Gorakhpur</Link>.
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

              {/* Instant Quotation & Lead Form */}
              <HeroQuickQuote />

              {/* Verified Performance Metrics */}
              <div className="pt-6 border-t border-slate-200 grid grid-cols-3 gap-6">
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
      <section className="py-16 md:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              High-Converting Solutions
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Website Design &amp; Digital Growth in Gorakhpur
            </h2>
            <p className="text-base text-slate-700 leading-relaxed font-normal">
              We do not build generic template sites. We engineer custom, scalable digital ecosystems tailored to local retailers, healthcare clinics, educational institutes, and growing businesses in Gorakhpur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Service 1 */}
            <Link 
              href="/web-development-company-in-gorakhpur"
              className="p-6 sm:p-8 rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:border-blue-500 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition duration-200">
                  <Code2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition">
                  High-Speed Next.js Websites
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  Engineered using modern Next.js 15 and React. Your website opens in under 0.5s on mobile networks, passes 100/100 Core Web Vitals, and ranks higher on Google Search.
                </p>
                <ul className="space-y-2 text-xs text-slate-700 mb-6 font-medium">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" /> Sub-Second Mobile Loading Speed</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" /> 100/100 Google Core Web Vitals</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" /> Zero WordPress Bugs or Plugin Crashes</li>
                </ul>
              </div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 group-hover:text-blue-700 min-h-[44px]">
                <span>View Web Packages</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Service 2 */}
            <Link 
              href="/services"
              className="p-6 sm:p-8 rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:border-purple-500 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition duration-200">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-purple-600 transition">
                  WhatsApp &amp; AI Lead Automation
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  Never miss a customer inquiry. Automatically send customer leads directly to your WhatsApp, answer common customer questions 24/7, and generate instant quotations.
                </p>
                <ul className="space-y-2 text-xs text-slate-700 mb-6 font-medium">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0" /> Instant WhatsApp Lead Notifications</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0" /> 24/7 AI Customer Support Chatbot</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0" /> 3x Higher Customer Conversion Rate</li>
                </ul>
              </div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-600 group-hover:text-purple-700 min-h-[44px]">
                <span>Explore Automation</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Service 3 */}
            <Link 
              href="/services"
              className="p-6 sm:p-8 rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:border-emerald-500 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition duration-200">
                  <Server className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition">
                  E-Commerce &amp; Online Stores
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  Sell products across Gorakhpur and India with seamless PhonePe, Google Pay, Paytm UPI, and credit card payments. Instant order receipts sent to customer WhatsApp.
                </p>
                <ul className="space-y-2 text-xs text-slate-700 mb-6 font-medium">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> PhonePe, GPay &amp; UPI Integration</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Instant WhatsApp Order Receipts</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> 0% Commission &amp; 100% Code Ownership</li>
                </ul>
              </div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 group-hover:text-emerald-700 min-h-[44px]">
                <span>Explore Online Stores</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Service 4 */}
            <Link 
              href="/seo-services-in-gorakhpur"
              className="p-6 sm:p-8 rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:border-amber-500 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6 group-hover:bg-amber-600 group-hover:text-white transition duration-200">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition">
                  Local SEO &amp; Google 3-Pack
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  Rank your clinic, school, or retail business in the top 3 results of Google Maps and Google Search. Capture daily phone calls and walk-in store footfall in Gorakhpur.
                </p>
                <ul className="space-y-2 text-xs text-slate-700 mb-6 font-medium">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" /> Google Maps #1 Ranking Strategy</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" /> Complete Schema &amp; Local Citation Setup</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" /> Inbound Daily Phone Calls &amp; Leads</li>
                </ul>
              </div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 group-hover:text-amber-700 min-h-[44px]">
                <span>Check Local SEO Plans</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== 3. ARCHITECTURAL COMPARISON (WHY NEXT.JS BEATS CMS) ==================== */}
      <section className="cv-auto py-16 md:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Technical Comparison
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why Gorakhpur Businesses Choose Prism Web Studio?
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              Google algorithms rank websites based on speed, security, and Core Web Vitals. Here is why businesses in Gorakhpur and Eastern UP trust our custom Next.js engineering over slow, generic WordPress templates.
            </p>
          </div>

          {/* Desktop Table View (Hidden on mobile) */}
          <div className="hidden md:block overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-lg">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-100/80 text-xs font-bold uppercase tracking-wider text-slate-700">
                  <th className="py-5 px-6">Benchmark Parameter</th>
                  <th className="py-5 px-6 text-blue-700 bg-blue-50/60">Prism Custom Architecture (Next.js)</th>
                  <th className="py-5 px-6 text-slate-700">WordPress / Generic Builders</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
                <tr>
                  <td className="py-4 px-6 font-bold text-slate-900">Average Page Load Speed</td>
                  <td className="py-4 px-6 font-bold text-emerald-700 bg-blue-50/20">0.3s - 0.7s (Instant Edge Render)</td>
                  <td className="py-4 px-6 text-rose-600 font-medium">2.8s - 6.5s (Heavy Database Queries)</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-bold text-slate-900">Google Core Web Vitals Score</td>
                  <td className="py-4 px-6 font-bold text-emerald-700 bg-blue-50/20">98 - 100/100 (Passes All Audits)</td>
                  <td className="py-4 px-6 text-rose-600 font-medium">35 - 65/100 (Fails LCP & CLS)</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-bold text-slate-900">Security & Vulnerability Exposure</td>
                  <td className="py-4 px-6 font-bold text-emerald-700 bg-blue-50/20">Bank-Grade (Static Edge, Zero SQL Injection Risk)</td>
                  <td className="py-4 px-6 text-rose-600 font-medium">High Risk (Vulnerable Plugins & MySQL Exploits)</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-bold text-slate-900">Conversion Rate Benchmark</td>
                  <td className="py-4 px-6 font-bold text-emerald-700 bg-blue-50/20">3.8% - 6.2% Average Conversion</td>
                  <td className="py-4 px-6 text-slate-600 font-medium">1.1% - 1.8% Standard Industry Average</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-bold text-slate-900">Code & Intellectual Property Ownership</td>
                  <td className="py-4 px-6 font-bold text-emerald-700 bg-blue-50/20">100% Client Owned (Zero Recurring License Fees)</td>
                  <td className="py-4 px-6 text-slate-600 font-medium">Platform Lock-In & Mandatory Monthly Add-ons</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-bold text-slate-900">Mobile Fluidity & User Experience</td>
                  <td className="py-4 px-6 font-bold text-emerald-700 bg-blue-50/20">App-Like Navigation & Instant Caching</td>
                  <td className="py-4 px-6 text-slate-600 font-medium">Sluggish Screen Refreshes & Layout Shifts</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile Responsive Card Comparison Format (No horizontal scroll, high contrast) */}
          <div className="md:hidden space-y-4">
            {/* Card 1: Page Speed */}
            <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm space-y-3">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <span className="font-extrabold text-sm text-slate-900">Average Page Load Speed</span>
                <Zap className="w-4 h-4 text-blue-600" />
              </div>
              <div className="space-y-2">
                <div className="p-3 bg-emerald-50/80 border border-emerald-200 rounded-xl space-y-0.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-extrabold text-emerald-800 uppercase tracking-wide">Prism Next.js</span>
                    <span className="text-[11px] font-black text-emerald-700 bg-white px-2 py-0.5 rounded border border-emerald-300">0.3s - 0.7s</span>
                  </div>
                  <p className="text-xs text-emerald-950 font-medium pt-1">Instant Edge Render with zero latency</p>
                </div>
                <div className="p-3 bg-rose-50/80 border border-rose-200 rounded-xl space-y-0.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-extrabold text-rose-800 uppercase tracking-wide">WordPress / Builders</span>
                    <span className="text-[11px] font-black text-rose-700 bg-white px-2 py-0.5 rounded border border-rose-300">2.8s - 6.5s</span>
                  </div>
                  <p className="text-xs text-rose-950 font-medium pt-1">Heavy database queries and bloated PHP</p>
                </div>
              </div>
            </div>

            {/* Card 2: Core Web Vitals */}
            <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm space-y-3">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <span className="font-extrabold text-sm text-slate-900">Google Core Web Vitals</span>
                <Sparkles className="w-4 h-4 text-emerald-600" />
              </div>
              <div className="space-y-2">
                <div className="p-3 bg-emerald-50/80 border border-emerald-200 rounded-xl space-y-0.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-extrabold text-emerald-800 uppercase tracking-wide">Prism Next.js</span>
                    <span className="text-[11px] font-black text-emerald-700 bg-white px-2 py-0.5 rounded border border-emerald-300">98 - 100 / 100</span>
                  </div>
                  <p className="text-xs text-emerald-950 font-medium pt-1">Passes all Google audits with perfect signals</p>
                </div>
                <div className="p-3 bg-rose-50/80 border border-rose-200 rounded-xl space-y-0.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-extrabold text-rose-800 uppercase tracking-wide">WordPress / Builders</span>
                    <span className="text-[11px] font-black text-rose-700 bg-white px-2 py-0.5 rounded border border-rose-300">35 - 65 / 100</span>
                  </div>
                  <p className="text-xs text-rose-950 font-medium pt-1">Fails LCP & CLS layout shifts on mobile</p>
                </div>
              </div>
            </div>

            {/* Card 3: Security */}
            <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm space-y-3">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <span className="font-extrabold text-sm text-slate-900">Security & Vulnerability</span>
                <ShieldCheck className="w-4 h-4 text-purple-600" />
              </div>
              <div className="space-y-2">
                <div className="p-3 bg-emerald-50/80 border border-emerald-200 rounded-xl space-y-0.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-extrabold text-emerald-800 uppercase tracking-wide">Prism Next.js</span>
                    <span className="text-[11px] font-black text-emerald-700 bg-white px-2 py-0.5 rounded border border-emerald-300">Bank-Grade</span>
                  </div>
                  <p className="text-xs text-emerald-950 font-medium pt-1">Static Edge serverless, zero SQL injection risk</p>
                </div>
                <div className="p-3 bg-rose-50/80 border border-rose-200 rounded-xl space-y-0.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-extrabold text-rose-800 uppercase tracking-wide">WordPress / Builders</span>
                    <span className="text-[11px] font-black text-rose-700 bg-white px-2 py-0.5 rounded border border-rose-300">High Risk</span>
                  </div>
                  <p className="text-xs text-rose-950 font-medium pt-1">Vulnerable plugins and frequent database exploits</p>
                </div>
              </div>
            </div>

            {/* Card 4: Conversion Rate */}
            <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm space-y-3">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <span className="font-extrabold text-sm text-slate-900">Conversion Rate Benchmark</span>
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
              </div>
              <div className="space-y-2">
                <div className="p-3 bg-emerald-50/80 border border-emerald-200 rounded-xl space-y-0.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-extrabold text-emerald-800 uppercase tracking-wide">Prism Next.js</span>
                    <span className="text-[11px] font-black text-emerald-700 bg-white px-2 py-0.5 rounded border border-emerald-300">3.8% - 6.2%</span>
                  </div>
                  <p className="text-xs text-emerald-950 font-medium pt-1">3x higher conversion from sub-second speed</p>
                </div>
                <div className="p-3 bg-slate-100 border border-slate-200 rounded-xl space-y-0.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-extrabold text-slate-700 uppercase tracking-wide">WordPress / Builders</span>
                    <span className="text-[11px] font-bold text-slate-700 bg-white px-2 py-0.5 rounded border border-slate-300">1.1% - 1.8%</span>
                  </div>
                  <p className="text-xs text-slate-600 font-medium pt-1">Standard sluggish conversion rates</p>
                </div>
              </div>
            </div>

            {/* Card 5: IP Ownership */}
            <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm space-y-3">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <span className="font-extrabold text-sm text-slate-900">Code & IP Ownership</span>
                <Layers className="w-4 h-4 text-amber-600" />
              </div>
              <div className="space-y-2">
                <div className="p-3 bg-emerald-50/80 border border-emerald-200 rounded-xl space-y-0.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-extrabold text-emerald-800 uppercase tracking-wide">Prism Next.js</span>
                    <span className="text-[11px] font-black text-emerald-700 bg-white px-2 py-0.5 rounded border border-emerald-300">100% Owned</span>
                  </div>
                  <p className="text-xs text-emerald-950 font-medium pt-1">Zero vendor lock-in, full GitHub transfer</p>
                </div>
                <div className="p-3 bg-slate-100 border border-slate-200 rounded-xl space-y-0.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-extrabold text-slate-700 uppercase tracking-wide">WordPress / Builders</span>
                    <span className="text-[11px] font-bold text-slate-700 bg-white px-2 py-0.5 rounded border border-slate-300">Locked-in</span>
                  </div>
                  <p className="text-xs text-slate-600 font-medium pt-1">Monthly plugin licenses and platform dependency</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 4. GEOGRAPHIC AUTHORITY (INDIA & GLOBAL) ==================== */}
      <section className="cv-auto py-16 md:py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-4">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                Empowering Gorakhpur Retailers & Enterprises with Global Standards
              </h2>
              <p className="text-base text-slate-700 leading-relaxed font-normal">
                Prism Web Studio is headquartered in Gorakhpur (Civil Lines / Golghar), with our regional engineering lab in Kushinagar, actively helping commercial businesses in <strong>Golghar, Civil Lines, Medical College Road, and GIDA Industrial Area Gorakhpur</strong> dominate Google Search and drive high-converting customer inquiries.
              </p>
              <p className="text-sm text-slate-700 leading-relaxed font-normal">
                By combining modern engineering standards with local market understanding, our clients receive top 1% website quality at unbeatable return on investment.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs font-bold text-slate-800">
                <span className="px-3.5 py-1.5 rounded-lg bg-slate-100 border border-slate-200">📍 Gorakhpur HQ (Civil Lines / Golghar)</span>
                <span className="px-3.5 py-1.5 rounded-lg bg-slate-100 border border-slate-200">🏭 Purvanchal Lab (Kushinagar)</span>
                <span className="px-3.5 py-1.5 rounded-lg bg-slate-100 border border-slate-200">🚀 Serving Purvanchal &amp; Pan-India</span>
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
      <section className="cv-auto py-16 md:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12 md:mb-16">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                Proven Track Record
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
                Featured Engineering Blueprints
              </h2>
              <p className="text-sm sm:text-base text-slate-700 mt-2 max-w-2xl font-normal">
                Real-world solutions engineered for real-world enterprise growth. Explore our technical case studies.
              </p>
            </div>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-300 text-xs sm:text-sm font-bold text-slate-800 hover:bg-slate-50 active:scale-95 transition min-h-[48px]"
            >
              <span>View Full Portfolio</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Blueprint 1: Umid Commerce Showcase */}
            <div className="p-6 sm:p-7 rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:border-blue-500 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 aspect-[16/10] mb-6 group/img">
                  <div className="bg-slate-100 px-3 py-2 border-b border-slate-200 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                    </div>
                    <span className="text-[10px] text-slate-600 font-mono">umid-commerce-showcase.vercel.app</span>
                    <span className="text-[10px] text-blue-700 font-bold bg-blue-50 px-2 py-0.5 rounded">0.4s</span>
                  </div>

                  <div className="p-4 bg-gradient-to-br from-blue-50 via-white to-slate-50 h-full flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black text-slate-800 tracking-tight">STOREFRONT CHECKOUT</span>
                      <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">Live Client</span>
                    </div>
                    <div className="space-y-1.5 my-auto">
                      <div className="h-2 w-3/4 bg-blue-200 rounded"></div>
                      <div className="h-2 w-1/2 bg-slate-200 rounded"></div>
                      <div className="h-6 w-full bg-emerald-500/10 border border-emerald-500/30 rounded-lg flex items-center px-2 text-[10px] font-bold text-emerald-800">
                        Sub-second load times &amp; instant UPI
                      </div>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-xs opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center p-4">
                    <span className="px-4 py-2.5 bg-blue-600 text-white text-xs font-bold rounded-xl shadow-xl flex items-center gap-1.5">
                      <span>View Project Detail</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md uppercase">
                  E-Commerce Architecture
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-3 mb-2 group-hover:text-blue-600 transition">
                  Umid Commerce Showcase
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  High-speed modern commerce application engineered for seamless catalog browsing, rapid cart state updates, and frictionless checkout flow.
                </p>
                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs font-bold text-emerald-900 mb-6">
                  Outcome: Sub-second load times &amp; 3x Conversion Lift
                </div>
              </div>
              <Link 
                href="/portfolio/umid-commerce-showcase" 
                className="w-full inline-flex items-center justify-between min-h-[48px] px-4 py-3 rounded-xl border border-blue-200 bg-blue-50/70 hover:bg-blue-100 text-blue-700 text-xs font-bold transition active:scale-95 shadow-2xs group/btn"
              >
                <span>View Architecture Blueprint</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Blueprint 2: Sygnus Electrik */}
            <div className="p-6 sm:p-7 rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:border-purple-500 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 aspect-[16/10] mb-6 group/img">
                  <div className="bg-slate-100 px-3 py-2 border-b border-slate-200 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                    </div>
                    <span className="text-[10px] text-slate-600 font-mono">sygnuselectrik.com</span>
                    <span className="text-[10px] text-purple-700 font-bold bg-purple-50 px-2 py-0.5 rounded">EV Tech</span>
                  </div>

                  <div className="p-4 bg-gradient-to-br from-purple-50 via-white to-slate-50 h-full flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black text-slate-800 tracking-tight">CLEAN ENERGY PORTAL</span>
                      <span className="text-[10px] font-bold text-purple-800 bg-purple-100 px-2 py-0.5 rounded-full">Live Client</span>
                    </div>
                    <div className="space-y-1.5 my-auto">
                      <div className="h-2 w-2/3 bg-purple-200 rounded"></div>
                      <div className="h-2 w-1/2 bg-slate-200 rounded"></div>
                      <div className="h-6 w-full bg-purple-500/10 border border-purple-500/30 rounded-lg flex items-center px-2 text-[10px] font-bold text-purple-800">
                        200% Increase in Dealership Queries
                      </div>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-xs opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center p-4">
                    <span className="px-4 py-2.5 bg-purple-600 text-white text-xs font-bold rounded-xl shadow-xl flex items-center gap-1.5">
                      <span>View Project Detail</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                <span className="text-xs font-bold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-md uppercase">
                  Clean Tech &amp; Corporate
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-3 mb-2 group-hover:text-purple-600 transition">
                  Sygnus Electrik
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  Clean EV hardware and sustainable electrical solutions portal showcasing power technologies, fleet readiness, and commercial dealership queries.
                </p>
                <div className="p-3 bg-purple-50 rounded-xl border border-purple-200 text-xs font-bold text-purple-900 mb-6">
                  Outcome: 200% Increase in Dealership Queries
                </div>
              </div>
              <Link 
                href="/portfolio/sygnus-electrik" 
                className="w-full inline-flex items-center justify-between min-h-[48px] px-4 py-3 rounded-xl border border-purple-200 bg-purple-50/70 hover:bg-purple-100 text-purple-700 text-xs font-bold transition active:scale-95 shadow-2xs group/btn"
              >
                <span>View Architecture Blueprint</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Blueprint 3: Janayush Health Services */}
            <div className="p-6 sm:p-7 rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:border-emerald-500 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 aspect-[16/10] mb-6 group/img">
                  <div className="bg-slate-100 px-3 py-2 border-b border-slate-200 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                    </div>
                    <span className="text-[10px] text-slate-600 font-mono">janayushhealthservices.com</span>
                    <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded">Healthcare</span>
                  </div>

                  <div className="p-4 bg-gradient-to-br from-emerald-50 via-white to-slate-50 h-full flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black text-slate-800 tracking-tight">PATIENT APPOINTMENTS</span>
                      <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">Live Client</span>
                    </div>
                    <div className="space-y-1.5 my-auto">
                      <div className="h-2 w-3/4 bg-emerald-200 rounded"></div>
                      <div className="h-2 w-1/3 bg-slate-200 rounded"></div>
                      <div className="h-6 w-full bg-emerald-500/10 border border-emerald-500/30 rounded-lg flex items-center px-2 text-[10px] font-bold text-emerald-800">
                        2x Patient Online Appointments
                      </div>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-xs opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center p-4">
                    <span className="px-4 py-2.5 bg-emerald-600 text-white text-xs font-bold rounded-xl shadow-xl flex items-center gap-1.5">
                      <span>View Project Detail</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md uppercase">
                  Healthcare &amp; Clinics
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-3 mb-2 group-hover:text-emerald-600 transition">
                  Janayush Health Services
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  Patient-focused healthcare platform structured for simple appointment bookings, institutional credibility, and immediate medical inquiry channels.
                </p>
                <div className="p-3 bg-blue-50 rounded-xl border border-blue-200 text-xs font-bold text-blue-900 mb-6">
                  Outcome: 2x Patient Appointments &amp; Local SEO Lift
                </div>
              </div>
              <Link 
                href="/portfolio/janayush-health-services" 
                className="w-full inline-flex items-center justify-between min-h-[48px] px-4 py-3 rounded-xl border border-emerald-200 bg-emerald-50/70 hover:bg-emerald-100 text-emerald-700 text-xs font-bold transition active:scale-95 shadow-2xs group/btn"
              >
                <span>View Architecture Blueprint</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 6. SOCIAL PROOF & TESTIMONIALS (WITH AVATARS & MOBILE SLIDER) ==================== */}
      <section className="cv-auto py-16 md:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
      <section className="cv-auto py-16 md:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {/* Local Hub 1 */}
            <Link
              href="/web-development-company-in-gorakhpur"
              className="p-6 sm:p-8 rounded-3xl border border-slate-200 bg-slate-50/50 hover:border-blue-500 hover:bg-white hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition">
                  <Code2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition">
                  Web Development Company in Gorakhpur
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  High-speed Next.js websites, custom eCommerce portals, and software for local businesses with guaranteed 100/100 Core Web Vitals and zero plugins.
                </p>
                <div className="text-xs font-bold text-blue-700 mb-6 flex items-center gap-1">
                  Starting at ₹14,999 • 5-7 Days Delivery
                </div>
              </div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-white bg-blue-600 group-hover:bg-blue-700 px-5 py-3.5 rounded-xl transition text-center justify-center min-h-[48px] shadow-sm">
                <span>View Web Dev Packages</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Local Hub 2 */}
            <Link
              href="/website-designer-in-gorakhpur"
              className="p-6 sm:p-8 rounded-3xl border border-slate-200 bg-slate-50/50 hover:border-purple-500 hover:bg-white hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-purple-600 transition">
                  Website Designer in Gorakhpur
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  Award-winning mobile-first UI/UX designs, Figma interactive mockups, brand typography, and conversion-focused customer touchpoints.
                </p>
                <div className="text-xs font-bold text-purple-700 mb-6 flex items-center gap-1">
                  Custom UI/UX • 100% Mobile Responsive
                </div>
              </div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-white bg-purple-600 group-hover:bg-purple-700 px-5 py-3.5 rounded-xl transition text-center justify-center min-h-[48px] shadow-sm">
                <span>Explore Design Packages</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Local Hub 3 */}
            <Link
              href="/seo-services-in-gorakhpur"
              className="p-6 sm:p-8 rounded-3xl border border-slate-200 bg-slate-50/50 hover:border-emerald-500 hover:bg-white hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition">
                  <Search className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition">
                  SEO Services in Gorakhpur
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  Rank #1 on Google Maps (GMB 3-Pack) and Google Search. Drive inbound customer phone calls, store footfall, and high-ticket service leads.
                </p>
                <div className="text-xs font-bold text-emerald-700 mb-6 flex items-center gap-1">
                  Top 3 Google Maps Ranking • 30-60 Days
                </div>
              </div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-white bg-emerald-600 group-hover:bg-emerald-700 px-5 py-3.5 rounded-xl transition text-center justify-center min-h-[48px] shadow-sm">
                <span>Check Local SEO Plans</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
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
                className="text-xs font-bold text-blue-700 hover:text-blue-800 bg-white border border-slate-300 hover:border-blue-500 px-4 py-3 rounded-xl transition min-h-[48px] inline-flex items-center gap-1.5 shadow-2xs active:scale-95"
              >
                <span>Website Cost Guide (2026)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/blog/gorakhpur-retail-ecommerce-guide"
                className="text-xs font-bold text-emerald-700 hover:text-emerald-800 bg-white border border-slate-300 hover:border-emerald-500 px-4 py-3 rounded-xl transition min-h-[48px] inline-flex items-center gap-1.5 shadow-2xs active:scale-95"
              >
                <span>7 Reasons Retailers Need an Online Store</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/blog/school-college-hospital-website-design-gorakhpur"
                className="text-xs font-bold text-purple-700 hover:text-purple-800 bg-white border border-slate-300 hover:border-purple-500 px-4 py-3 rounded-xl transition min-h-[48px] inline-flex items-center gap-1.5 shadow-2xs active:scale-95"
              >
                <span>School & Clinic Website Blueprint</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 8. COMPREHENSIVE FAQS ==================== */}
      <section className="cv-auto py-16 md:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <h3 className="text-base font-bold text-slate-900">
                Q: How long does a website development project take with Prism Web Studio?
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                A: Standard business showcase websites and landing pages are delivered in 5 to 7 working days. Custom e-commerce portals with PhonePe/GPay UPI integration require 10 to 14 days, while complex custom web applications take 2 to 4 weeks with full quality assurance.
              </p>
            </div>

            <div className="border border-slate-200 rounded-2xl p-6 bg-white shadow-sm space-y-2">
              <h3 className="text-base font-bold text-slate-900">
                Q: Why should businesses choose custom Next.js development over WordPress or Shopify?
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                A: Custom Next.js applications eliminate bloated third-party plugins, security vulnerabilities, and sluggish database queries common in traditional CMS platforms. Next.js delivers sub-500ms load speeds, perfect 99+ Core Web Vitals, complete code ownership, and 3x higher conversion rates without monthly plugin licensing fees.
              </p>
            </div>

            <div className="border border-slate-200 rounded-2xl p-6 bg-white shadow-sm space-y-2">
              <h3 className="text-base font-bold text-slate-900">
                Q: Does Prism Web Studio offer WhatsApp alerts and AI automation for businesses?
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                A: Yes! We integrate automated WhatsApp lead notifications, 24/7 AI customer inquiry bots, automated CRM customer follow-ups, and instant quotation calculators that save hours of manual operational time.
              </p>
            </div>

            <div className="border border-slate-200 rounded-2xl p-6 bg-white shadow-sm space-y-2">
              <h3 className="text-base font-bold text-slate-900">
                Q: Who owns the intellectual property and source code of the project?
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                A: You own 100% of the customized frontend source code, visual designs, database schemas, and creative assets upon full milestone payment. We provide complete GitHub repository transfer with zero vendor lock-in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 9. FINAL HIGH-CONVERSION CTA STRIP ==================== */}
      <section className="cv-auto py-16 md:py-24 bg-blue-600 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
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
