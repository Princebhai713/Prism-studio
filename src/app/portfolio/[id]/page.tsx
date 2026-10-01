import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, CheckCircle, ShieldCheck, Zap, Server, Code2 } from 'lucide-react';
import { Metadata } from 'next';

interface Props {
  params: Promise<{ id: string }>;
}

const projectsData: Record<string, {
  title: string;
  category: string;
  industry: string;
  status: string;
  timeline: string;
  performance: string;
  lead: string;
  challenge: string;
  solution: string;
  architectureDetails: string[];
  outcome: string;
  outcomeDetail: string;
  techStack: string[];
  liveUrl?: string;
}> = {
  'ecommerce-scaling': {
    title: 'E-Commerce Scaling Platform',
    category: 'SaaS Engineering',
    industry: 'SaaS & Retail',
    status: 'Delivered',
    timeline: '6 Weeks',
    performance: 'Sub-second Latency (<400ms)',
    lead: 'Architecting high-concurrency headless e-commerce infrastructure built to sustain viral flash sales with sub-second page transitions.',
    challenge: 'The client was losing up to 45% of potential checkouts during high-volume advertising campaigns. Their legacy WordPress/WooCommerce monolithic store suffered from database connection exhaustion, unoptimized image payloads, and an average checkout latency of 4.8 seconds.',
    solution: 'Prism Web Studio decoupled the frontend from the database engine using Next.js 15 App Router and React Server Components. We implemented PgBouncer connection pooling on PostgreSQL, deployed an in-memory Redis caching cluster for real-time inventory decrementing, and offloaded payment processing to asynchronous Stripe webhooks.',
    architectureDetails: [
      'Next.js 15 Incremental Static Regeneration (ISR) ensures product catalog pages render in under 80ms from edge nodes.',
      'Distributed Redis cache handles flash sale stock validation without straining the primary PostgreSQL database.',
      'Fully responsive, zero-layout-shift checkout interface strictly following WCAG accessibility guidelines.',
      'Automated Google Merchant Center structured JSON-LD product schema for instant search engine indexing.',
    ],
    outcome: '"+300% Online Checkout Volume with 0.4s Global Latency."',
    outcomeDetail: 'By reducing checkout friction and page latency by over 80%, bounce rates dropped from 52% to 18%, resulting in an immediate 3x increase in gross merchandise value (GMV).',
    techStack: ['Next.js 15', 'React Server Components', 'PostgreSQL', 'Redis Cache', 'Tailwind CSS', 'Stripe Payments API'],
    liveUrl: 'https://example.com',
  },
  'ai-customer-agent': {
    title: 'Autonomous Support AI Agent',
    category: 'AI Automation',
    industry: 'Customer Support & AI',
    status: 'Delivered',
    timeline: '4 Weeks',
    performance: 'Sub-3s Resolution Time',
    lead: 'Constructing proprietary Retrieval-Augmented Generation (RAG) agents to autonomously resolve tier-1 customer inquiries 24/7.',
    challenge: 'The client\'s customer service desk was overwhelmed with over 800 repetitive inquiries daily concerning order tracking, return policies, and product compatibility, driving customer support costs up and leading to 6-hour response delays.',
    solution: 'We engineered a closed-domain RAG AI agent using Pinecone vector embeddings and Claude 3.5 Sonnet. The system parses customer queries, retrieves verified answers strictly from internal documentation, and executes automated order status lookups via secure REST APIs.',
    architectureDetails: [
      'Private vector embeddings prevent AI hallucinations by constraining answers strictly to verified company documentation.',
      'End-to-end webhook integration with WhatsApp Business API and web client chat widgets.',
      'Automated sentiment analysis flags frustrated customers and instantly escalates conversations to human managers.',
      'Full compliance with GDPR privacy standards, ensuring zero customer PII is utilized for external model training.',
    ],
    outcome: '"70% First-Tier Ticket Deflection with $4,500/Month Saved."',
    outcomeDetail: 'Customer satisfaction (CSAT) scores improved from 3.8 to 4.9 out of 5, while the internal human support team was freed to focus on high-touch enterprise accounts.',
    techStack: ['OpenAI GPT-4o', 'LangChain', 'Python FastAPI', 'Pinecone Vector DB', 'Next.js', 'PostgreSQL'],
    liveUrl: 'https://example.com',
  },
  'healthcare-portal': {
    title: 'Healthcare Patient Portal',
    category: 'Web Development',
    industry: 'Doctors & Healthcare',
    status: 'Delivered',
    timeline: '5 Weeks',
    performance: '100% Accessibility Score',
    lead: 'Redesigning patient scheduling and diagnostic record delivery with mobile-first accessibility and HIPAA compliance.',
    challenge: 'Patients found the clinic\'s old portal confusing and difficult to use on smartphones, leading to crowded waiting rooms, missed appointments, and heavy receptionist phone congestion.',
    solution: 'We designed a high-contrast, distraction-free booking workflow in Next.js with automated SMS confirmation reminders via Twilio, intuitive doctor schedule calendars, and encrypted patient record viewing.',
    architectureDetails: [
      'Encrypted PostgreSQL database with Row-Level Security ensuring strict patient record isolation.',
      'High-contrast color palette and 100% keyboard accessibility compliant with Section 508 and WCAG standards.',
      'Automated dual-channel SMS and email appointment reminders reducing clinic no-show rates by 65%.',
      'Instant doctor availability synchronization preventing accidental double-booking.',
    ],
    outcome: '"2x Increase in Online Bookings within 60 Days."',
    outcomeDetail: 'Clinic staff saved 25+ hours weekly previously spent answering appointment phone calls, while patient satisfaction ratings increased across all demographics.',
    techStack: ['React', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Twilio SMS Gateway', 'HIPAA Shield'],
    liveUrl: 'https://example.com',
  },
  'edtech-learning-engine': {
    title: 'EdTech Adaptive Learning Platform',
    category: 'Web Development',
    industry: 'Education & Training',
    status: 'Delivered',
    timeline: '7 Weeks',
    performance: 'Sub-500ms Video Streaming',
    lead: 'Engineering an interactive online classroom and quiz portal with real-time student telemetry and offline lesson caching.',
    challenge: 'Students on low-bandwidth rural mobile networks suffered from video buffering, lost quiz progress, and slow page updates on generic LMS software.',
    solution: 'We built a bespoke Next.js web application utilizing edge video transcoding, client-side optimistic UI state management, and lightweight WebSocket connections for instant quiz answer scoring.',
    architectureDetails: [
      'Progressive Web App (PWA) capabilities enabling students to cache study notes and quiz questions for offline study.',
      'AWS CloudFront global edge CDN distribution delivering smooth video streaming even on 3G mobile connections.',
      'Real-time student leaderboard and assessment analytics computed in sub-50ms via Redis.',
      'Modular curriculum management dashboard allowing instructors to publish courses without developer assistance.',
    ],
    outcome: '"+240% Student Course Completion Rate."',
    outcomeDetail: 'Eliminating mobile buffering and providing instant quiz feedback doubled daily active study time and established the platform as an industry leader in its sector.',
    techStack: ['Next.js 15', 'TypeScript', 'PostgreSQL', 'Redis', 'AWS CloudFront', 'Tailwind CSS'],
    liveUrl: 'https://example.com',
  },
  'real-estate-crm': {
    title: 'Real Estate Lead Engine & CRM',
    category: 'SaaS Engineering',
    industry: 'Real Estate & Property',
    status: 'Delivered',
    timeline: '6 Weeks',
    performance: '60fps Map Navigation',
    lead: 'Constructing an interactive property listing directory with instant map search, automated valuation webhooks, and WhatsApp alerts.',
    challenge: 'Prospective buyers were dropping off due to slow-loading map interfaces, outdated listings, and delayed responses from sales brokers.',
    solution: 'We engineered an ultra-fast property search platform utilizing Mapbox GL, Supabase real-time database synchronization, and automated broker routing via WhatsApp Business API.',
    architectureDetails: [
      'Vector tile map rendering ensuring smooth 60fps zooming across thousands of concurrent geographic coordinates.',
      'Instant property valuation calculator computing mortgage projections and rental yields on the fly.',
      'Automated broker lead routing based on property location and price tier within 15 seconds of inquiry submission.',
      'Schema.org RealEstateListing structured data unlocking rich Google search carousels.',
    ],
    outcome: '"+180% High-Intent Lead Submissions."',
    outcomeDetail: 'Automated valuation calculations and instant broker dispatch cut lead qualification time from 24 hours to 90 seconds, dramatically closing buyer inquiry drop-offs.',
    techStack: ['Next.js', 'Mapbox GL', 'Supabase Real-time', 'Tailwind CSS', 'WhatsApp Business API'],
    liveUrl: 'https://example.com',
  },
};

import { getProjectBySlug } from '@/features/content/actions/content';
import { ProjectDetailClient } from './ProjectDetailClient';

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  const dynamicProject = await getProjectBySlug(id);

  if (dynamicProject) {
    return <ProjectDetailClient project={dynamicProject} />;
  }

  const project = projectsData[id];

  if (!project) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-32 text-center space-y-4">
        <h1 className="text-3xl font-extrabold text-slate-900">Blueprint Not Found</h1>
        <p className="text-sm text-slate-600">The project blueprint you are looking for might have been moved or removed.</p>
        <div className="pt-4">
          <Link href="/portfolio" className="px-6 py-3 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 transition">
            Back to All Blueprints
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-0 bg-white text-slate-900">
      
      {/* ==================== PROJECT HERO & BREADCRUMB ==================== */}
      <section className="pt-16 pb-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-slate-900 transition"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to All Blueprints
            </Link>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500">
              <span>Blueprints</span>
              <span>/</span>
              <span className="text-blue-600 font-bold">{project.category}</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {project.title}
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                {project.lead}
              </p>
            </div>

            <Link
              href="/contact?type=project"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white text-xs font-bold shadow-md hover:bg-blue-700 transition shrink-0"
            >
              Request Similar Build
            </Link>
          </div>

          {/* Quick Metrics Strip */}
          <div className="mt-8 pt-6 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs text-slate-600">
            <div>
              <p className="font-bold text-slate-400 uppercase tracking-wider text-[10px]">Industry</p>
              <p className="font-bold text-slate-900 text-sm mt-0.5">{project.industry}</p>
            </div>
            <div>
              <p className="font-bold text-slate-400 uppercase tracking-wider text-[10px]">Timeline</p>
              <p className="font-bold text-slate-900 text-sm mt-0.5">{project.timeline}</p>
            </div>
            <div>
              <p className="font-bold text-slate-400 uppercase tracking-wider text-[10px]">Performance</p>
              <p className="font-bold text-emerald-600 text-sm mt-0.5">{project.performance}</p>
            </div>
            <div>
              <p className="font-bold text-slate-400 uppercase tracking-wider text-[10px]">Project Status</p>
              <p className="font-bold text-slate-900 text-sm mt-0.5">{project.status}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CASE STUDY DEEP DIVE ==================== */}
      <section className="py-16 md:py-20 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-12">
          
          {/* Section 1: The Challenge */}
          <div className="space-y-4">
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              1. The Technical & Operational Challenge
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {project.challenge}
            </p>
          </div>

          {/* Section 2: The Architectural Solution */}
          <div className="space-y-4">
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              2. Our Engineered Architectural Solution
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {project.solution}
            </p>

            <div className="p-6 md:p-8 bg-slate-50 rounded-3xl border border-slate-200 space-y-3 mt-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700">
                Core Architectural Highlights:
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                {project.architectureDetails.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section 3: Measurable Business Outcome */}
          <div className="p-8 rounded-3xl bg-blue-50/50 border border-blue-200 space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-100 px-2.5 py-1 rounded-md">
              Verified Business Impact
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
              {project.outcome}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {project.outcomeDetail}
            </p>
          </div>

          {/* Section 4: Tech Stack Breakdown */}
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <h3 className="text-xl font-bold text-slate-900">
              Technology Stack Utilized
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 rounded-xl"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Box */}
          <div className="p-8 bg-slate-900 text-white rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-xl font-bold">Ready to engineer a similar solution?</h4>
              <p className="text-xs text-slate-400">Schedule a 30-minute discovery call with our lead systems architect.</p>
            </div>
            <Link
              href="/contact?type=project"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-lg transition shrink-0"
            >
              Start Your Project →
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
