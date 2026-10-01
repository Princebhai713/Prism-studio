import React from 'react';
import Link from 'next/link';
import { ArrowRight, Check, Sparkles, PhoneCall, Code2, Cpu, Server, Layers, ShieldCheck, Zap, HelpCircle } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Custom Web Development, AI Automation & SaaS Services | Prism Web Studio',
  description:
    'Comprehensive digital engineering services: Custom Next.js web development, autonomous AI agent integration, multi-tenant SaaS architecture, and conversion-optimized UI/UX.',
  keywords: [
    'Custom Next.js Web Development Services',
    'AI Automation Agency India',
    'SaaS Engineering Kushinagar',
    'Full Stack React Development',
    'Web App Development Packages',
    'Enterprise Cloud Solutions',
  ],
};

const serviceFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What deliverables are included in Prism Studio web development packages?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every project includes custom Figma UI/UX designs, clean modular Next.js/React frontend code, responsive mobile layouts, complete Technical SEO setup (Core Web Vitals 99+, meta tags, sitemaps, JSON-LD schema), SSL certification, analytics integration, and full GitHub repository ownership.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you migrate our existing WordPress or PHP website to Next.js?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We specialize in zero-downtime headless migrations from WordPress, Wix, Shopify, or legacy PHP to Next.js. We preserve your existing SEO rankings, backlink structures, and 301 redirect mappings while drastically slashing load times from 5s to under 0.6s.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you handle project payments and milestones?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We operate on transparent milestone payments: 50% mobilization deposit upon contract signing and SOW approval, 25% upon visual and interactive design approval, and 25% final balance upon production deployment and source code transfer.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you sign Non-Disclosure Agreements (NDAs)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We protect all proprietary client concepts, trade secrets, and internal company data under legally enforceable mutual NDAs prior to architectural discussions.',
      },
    },
  ],
};

export default function ServicesPage() {
  return (
    <div className="space-y-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceFaqSchema) }}
      />

      {/* ==================== HERO SECTION ==================== */}
      <section className="pt-16 pb-16 bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            High-Performance Services Engineered to <br/>
            <span className="text-blue-600">Scale Your Revenue</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            From lightning-fast custom business websites to multi-tenant cloud platforms and autonomous AI support systems — we architect digital solutions built for long-term dominance.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact?type=project"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 text-white font-bold text-sm shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition hover:scale-105"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#packages"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-slate-300 text-slate-700 font-bold text-sm bg-white hover:bg-slate-50 transition"
            >
              View Pricing Packages
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== 4 DETAILED SERVICE PILLARS ==================== */}
      <section className="py-20 md:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-20">
          
          {/* Pillar 1: Web Development */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                <Code2 className="w-6 h-6" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Custom Web Application & Next.js Development
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Traditional WordPress sites struggle with sluggish database bottlenecks and plugin vulnerabilities. We hand-craft custom web platforms using Next.js 15, TypeScript, and Tailwind CSS that render at edge locations worldwide in under 500 milliseconds.
              </p>
              <div className="space-y-2 text-sm text-slate-700">
                <p className="font-semibold text-slate-900">What We Deliver:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Full Server Components (RSC)</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Perfect 99+ Core Web Vitals</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Headless CMS / Dynamic DB</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Automated XML Sitemaps & Schema</li>
                </ul>
              </div>
              <div className="pt-2">
                <Link href="/contact?type=project" className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1">
                  Request Custom Web Blueprint →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500">Tech Stack & Architecture</h4>
              <div className="flex flex-wrap gap-2">
                {['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Vercel Edge', 'PostgreSQL', 'Prisma ORM'].map(t => (
                  <span key={t} className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-800 shadow-sm">{t}</span>
                ))}
              </div>
              <div className="p-4 bg-blue-50/60 rounded-2xl border border-blue-100 text-xs text-blue-900 leading-relaxed">
                💡 <strong>Conversion Impact:</strong> Google research proves that reducing mobile load times by just 0.1s increases retail conversion rates by 8.4%. Our bespoke architectures consistently beat industry benchmarks by 300%.
              </div>
            </div>
          </div>

          {/* Pillar 2: AI Automation */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 lg:order-2 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
                <Cpu className="w-6 h-6" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Autonomous AI Systems & Workflow Automation
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Empower your business with domain-specific AI agents that operate around the clock. We build secure Retrieval-Augmented Generation (RAG) knowledge systems that answer complex customer inquiries, pre-qualify leads, and trigger automated backend workflows.
              </p>
              <div className="space-y-2 text-sm text-slate-700">
                <p className="font-semibold text-slate-900">What We Deliver:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-600 shrink-0" /> Custom GPT-4o / Claude Agents</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-600 shrink-0" /> Vector Database Memory (Pinecone)</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-600 shrink-0" /> Automated Lead Scoring & Routing</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-600 shrink-0" /> WhatsApp & Telegram Bot APIs</li>
                </ul>
              </div>
              <div className="pt-2">
                <Link href="/contact?type=project" className="text-xs font-bold text-purple-600 hover:text-purple-700 flex items-center gap-1">
                  Automate Your Operations →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 lg:order-1 p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500">AI Stack & Safety Protocols</h4>
              <div className="flex flex-wrap gap-2">
                {['OpenAI API', 'LangChain', 'FastAPI', 'Pinecone Vector DB', 'Python', 'Webhooks', 'Stripe Sync'].map(t => (
                  <span key={t} className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-800 shadow-sm">{t}</span>
                ))}
              </div>
              <div className="p-4 bg-purple-50/60 rounded-2xl border border-purple-100 text-xs text-purple-900 leading-relaxed">
                🤖 <strong>Operational ROI:</strong> Clients deploying our autonomous triage agents report cutting first-response times from 4 hours to 3 seconds, deflecting 70% of routine tickets while slashing customer support costs.
              </div>
            </div>
          </div>

          {/* Pillar 3: Cloud SaaS */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                <Server className="w-6 h-6" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                SaaS Platform Architecture & Cloud DevOps
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Turn your software idea into a resilient, scalable digital enterprise. We architect multi-tenant SaaS backends with strict tenant data isolation, automated billing, role-based access control (RBAC), and serverless auto-scaling.
              </p>
              <div className="space-y-2 text-sm text-slate-700">
                <p className="font-semibold text-slate-900">What We Deliver:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Multi-Tenant Row-Level Security</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Stripe Subscription Billing</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Real-time Websockets & Push</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> 99.9% Uptime Cloud Architecture</li>
                </ul>
              </div>
              <div className="pt-2">
                <Link href="/contact?type=project" className="text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1">
                  Architect Your SaaS →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500">Infrastructure & Data Layer</h4>
              <div className="flex flex-wrap gap-2">
                {['PostgreSQL', 'Supabase', 'Redis Cluster', 'AWS S3', 'Docker', 'GitHub Actions', 'Cloudflare CDN'].map(t => (
                  <span key={t} className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-800 shadow-sm">{t}</span>
                ))}
              </div>
              <div className="p-4 bg-emerald-50/60 rounded-2xl border border-emerald-100 text-xs text-emerald-900 leading-relaxed">
                🛡️ <strong>Zero Data Leaks:</strong> We implement Row-Level Security at the database kernel level, guaranteeing that tenant A can never inspect tenant B data, even under unexpected application exceptions.
              </div>
            </div>
          </div>

          {/* Pillar 4: UI/UX Design */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 lg:order-2 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                <Sparkles className="w-6 h-6" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                UI/UX Design Systems & Conversion Optimization
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Design is not decorative art — it is the psychological architecture of conversion. We engineer clean, high-contrast, distraction-free interfaces that guide prospective buyers intuitively toward checkout or inquiry.
              </p>
              <div className="space-y-2 text-sm text-slate-700">
                <p className="font-semibold text-slate-900">What We Deliver:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-600 shrink-0" /> Complete Figma Design System</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-600 shrink-0" /> Mobile UX & Micro-interactions</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Conversion Funnel Diagnostics</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Typography & Color Psychology</li>
                </ul>
              </div>
              <div className="pt-2">
                <Link href="/contact?type=project" className="text-xs font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1">
                  Upgrade Your Brand Design →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 lg:order-1 p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500">Design Frameworks</h4>
              <div className="flex flex-wrap gap-2">
                {['Figma', 'Design Tokens', 'Tailwind Grid', 'Framer Motion', 'WCAG 2.1 AA', 'User Testing'].map(t => (
                  <span key={t} className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-800 shadow-sm">{t}</span>
                ))}
              </div>
              <div className="p-4 bg-amber-50/60 rounded-2xl border border-amber-100 text-xs text-amber-900 leading-relaxed">
                ✨ <strong>Human-First Aesthetics:</strong> We avoid jarring neon cyber elements in favor of clean slate backgrounds, crisp typography, and intentional primary accents that project established authority.
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ==================== PACKAGES & TRANSPARENT PRICING ==================== */}
      <section id="packages" className="py-20 md:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Transparent Packages with Zero Hidden Costs
            </h2>
            <p className="text-base text-slate-600">
              Clear scope, fixed-fee deliverables, and complete intellectual property ownership. Choose the plan that aligns with your growth target.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Package */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-2xl hover:border-blue-500 hover:-translate-y-2 transition-all duration-300">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                  Startup Launchpad
                </span>
                <div className="mt-4 mb-2">
                  <span className="text-4xl font-black text-slate-900">₹25,000</span>
                  <span className="text-xs text-slate-600 font-semibold ml-2">/ $350 (One-Time)</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-6 font-normal">
                  Ideal for emerging businesses seeking an ultra-fast, professional digital presence to establish market credibility.
                </p>

                <div className="space-y-3 text-xs text-slate-700 border-t border-slate-100 pt-6 mb-8">
                  <p className="font-bold text-slate-900">Package Deliverables:</p>
                  <ul className="space-y-2.5 font-medium">
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Custom 5-Page Next.js Application</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Sub-0.8s Global Edge Load Speed</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Foundational Technical SEO & Sitemaps</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> 100% Mobile Responsive UX</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> 30-Day Defect Warranty</li>
                  </ul>
                </div>
              </div>

              <Link
                href="/contact?type=project"
                className="w-full py-3.5 rounded-xl border border-blue-600 text-blue-600 text-center font-bold text-xs hover:bg-blue-50 transition min-h-[44px] flex items-center justify-center"
              >
                Choose Startup Package
              </Link>
            </div>

            {/* Pro Package */}
            <div className="p-8 rounded-3xl bg-blue-50/50 border-2 border-blue-600 shadow-xl hover:shadow-2xl hover:-translate-y-2 flex flex-col justify-between relative scale-[1.02] transition-all duration-300">
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[11px] font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow">
                Most Popular for Growth
              </span>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
                  Business Scaler
                </span>
                <div className="mt-4 mb-2">
                  <span className="text-4xl font-black text-slate-900">₹60,000</span>
                  <span className="text-xs text-slate-600 font-semibold ml-2">/ $800 (One-Time)</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-6 font-normal">
                  Perfect for established firms requiring dynamic database CMS, AI assistant integration, and conversion optimization.
                </p>

                <div className="space-y-3 text-xs text-slate-700 border-t border-blue-200/60 pt-6 mb-8">
                  <p className="font-bold text-slate-900">Everything in Startup, plus:</p>
                  <ul className="space-y-2.5 font-medium">
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600 shrink-0" /> Up to 12 Custom Dynamic Pages</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600 shrink-0" /> Autonomous Customer Support Chatbot</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600 shrink-0" /> Database Integration (PostgreSQL/Supabase)</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600 shrink-0" /> Automated Lead Triage & Email Webhooks</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600 shrink-0" /> Google Search Console & Schema Indexing</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600 shrink-0" /> 60-Day Dedicated Support Warranty</li>
                  </ul>
                </div>
              </div>

              <Link
                href="/contact?type=project"
                className="w-full py-3.5 rounded-xl bg-blue-600 text-white text-center font-bold text-xs shadow-md hover:bg-blue-700 transition min-h-[44px] flex items-center justify-center"
              >
                Choose Business Scaler
              </Link>
            </div>

            {/* Enterprise Package */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-2xl hover:border-purple-500 hover:-translate-y-2 transition-all duration-300">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-100 px-3 py-1 rounded-full">
                  Enterprise Cloud & SaaS
                </span>
                <div className="mt-4 mb-2">
                  <span className="text-4xl font-black text-slate-900">₹1,50,000+</span>
                  <span className="text-xs text-slate-600 font-semibold ml-2">/ $2,000+ (Custom Scope)</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-6 font-normal">
                  For enterprises launching proprietary software, multi-tenant SaaS tools, or deep LLM autonomous pipelines.
                </p>

                <div className="space-y-3 text-xs text-slate-700 border-t border-slate-100 pt-6 mb-8">
                  <p className="font-bold text-slate-900">Everything in Scaler, plus:</p>
                  <ul className="space-y-2.5 font-medium">
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-600 shrink-0" /> Multi-Tenant SaaS Architecture & RLS</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-600 shrink-0" /> Custom LLM RAG Vector Search Engine</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-600 shrink-0" /> Stripe / Razorpay Subscription Engine</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-600 shrink-0" /> Multi-Region Cloud Deployment & SLA</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-600 shrink-0" /> Dedicated Technical Lead & NDA</li>
                  </ul>
                </div>
              </div>

              <Link
                href="/contact?type=project"
                className="w-full py-3.5 rounded-xl border border-slate-800 bg-slate-900 text-white text-center font-bold text-xs hover:bg-black transition min-h-[44px] flex items-center justify-center"
              >
                Schedule Architecture Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SERVICE FAQS ==================== */}
      <section className="py-20 md:py-24 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-extrabold text-slate-900">Services & Contracting FAQs</h2>
            <p className="text-sm text-slate-600">Everything you need to know about working with our engineering team.</p>
          </div>

          <div className="space-y-4">
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 space-y-2">
              <h4 className="text-base font-bold text-slate-900">Q: What deliverables are included in Prism Studio web development packages?</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                A: Every project includes custom Figma UI/UX designs, clean modular Next.js/React frontend code, responsive mobile layouts, complete Technical SEO setup (Core Web Vitals 99+, meta tags, sitemaps, JSON-LD schema), SSL certification, analytics integration, and full GitHub repository ownership.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 space-y-2">
              <h4 className="text-base font-bold text-slate-900">Q: Can you migrate our existing WordPress or PHP website to Next.js?</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                A: Yes. We specialize in zero-downtime headless migrations from WordPress, Wix, Shopify, or legacy PHP to Next.js. We preserve your existing SEO rankings, backlink structures, and 301 redirect mappings while drastically slashing load times from 5s to under 0.6s.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 space-y-2">
              <h4 className="text-base font-bold text-slate-900">Q: How do you handle project payments and milestones?</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                A: We operate on transparent milestone payments: 50% mobilization deposit upon contract signing and SOW approval, 25% upon visual and interactive design approval, and 25% final balance upon production deployment and source code transfer.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 space-y-2">
              <h4 className="text-base font-bold text-slate-900">Q: Do you sign Non-Disclosure Agreements (NDAs)?</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                A: Yes. We protect all proprietary client concepts, trade secrets, and internal company data under legally enforceable mutual NDAs prior to architectural discussions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== BOTTOM CONSULTATION CTA ==================== */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Need a Custom Technical Architecture?</h2>
          <p className="text-base text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Every business has unique scaling requirements. Schedule a free 30-minute discovery consultation directly with our lead architect to map your optimal tech stack.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact?type=consultation"
              className="px-8 py-4 rounded-xl bg-white text-blue-600 font-bold text-sm shadow-lg hover:bg-blue-50 transition"
            >
              Book Free Discovery Call
            </Link>
            <a
              href="tel:+918601825502"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-blue-400 bg-blue-700/80 text-white font-bold text-sm hover:bg-blue-800 transition"
            >
              <PhoneCall className="w-4 h-4" /> Call: +91 86018 25502
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
