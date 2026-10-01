import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Code2,
  Rocket,
  ShieldCheck,
  CheckCircle2,
  Clock,
  MapPin,
  Phone,
  Mail,
  Zap,
  Star,
  Users,
  Search,
  Globe2,
  Cpu,
  Layers,
  HelpCircle,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Best Web Development Company in Gorakhpur | Prism Web Studio",
  description:
    "Looking for the top web development company in Gorakhpur? Prism Web Studio builds lightning-fast Next.js websites, custom eCommerce portals, and software for local businesses with guaranteed 100/100 Core Web Vitals.",
  keywords: [
    "Web Development Company in Gorakhpur",
    "Website Development Gorakhpur",
    "Best Web Developers Gorakhpur",
    "Custom Software Development Gorakhpur",
    "Next.js Developers Gorakhpur",
    "eCommerce Website Development Gorakhpur",
    "Website Banwane Ki Company Gorakhpur",
  ],
  alternates: {
    canonical: "https://prismwebstudio.mintx.online/web-development-company-in-gorakhpur",
  },
};

export default function WebDevelopmentCompanyGorakhpur() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Prism Web Studio - Web Development Company in Gorakhpur",
    description:
      "Premier custom website and web application development agency serving Gorakhpur, Golghar, Civil Lines, and Purvanchal.",
    url: "https://prismwebstudio.mintx.online/web-development-company-in-gorakhpur",
    telephone: "+918601825502",
    email: "business@mintx.online",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Civil Lines & Medical College Road Corridor",
      addressLocality: "Gorakhpur",
      addressRegion: "Uttar Pradesh",
      postalCode: "273001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 26.7606,
      longitude: 83.3732,
    },
    areaServed: [
      "Gorakhpur",
      "Golghar",
      "Civil Lines",
      "Medical College Road",
      "Mohaddipur",
      "Taramandal",
      "GIDA",
      "Buxipur",
      "Deoria",
      "Kushinagar",
      "Basti",
    ],
    priceRange: "₹₹",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "20:00",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Gorakhpur me business website banwane me kitna kharcha aata hai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Gorakhpur me ek professional business website banwane ka kharcha ₹14,999 se shuru hota hai standard business websites ke liye, aur ₹34,999 se ₹69,999 tak jata hai custom e-commerce ya AI-integrated portals ke liye. Prism Web Studio me koi hidden fees nahi hoti aur domain, hosting, SSL aur 1 saal technical maintenance included hota hai.",
        },
      },
      {
        "@type": "Question",
        name: "Website banne me kitna time lagta hai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ek standard high-speed company profile website 5 se 7 dino me live ho jati hai. Full-featured e-commerce portals ya custom management software ke liye 2 se 3 hafte ka samay lagta hai.",
        },
      },
      {
        "@type": "Question",
        name: "Kyun Prism Web Studio Gorakhpur ki number 1 web development agency hai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Hum slow WordPress templates use nahi karte. Hum ultra-modern Next.js 15, React aur Tailwind CSS par custom code likhte hain jisse aapki website 0.5 second me load hoti hai aur Google me rank karne me aasan hoti hai.",
        },
      },
    ],
  };

  return (
    <div className="w-full bg-white text-slate-900">
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO SECTION */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
              <MapPin className="w-3.5 h-3.5" />
              <span>Gorakhpur & Purvanchal's Top Engineering Agency</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
              Best Web Development Company in <span className="text-blue-600">Gorakhpur</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Empowering businesses across Golghar, Civil Lines, Medical Road, and GIDA with high-converting, sub-second Next.js web applications, e-commerce stores, and AI automations.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/20 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Get Free Project Estimate</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+918601825502"
                className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 hover:border-slate-300 text-slate-800 font-bold rounded-xl shadow-sm hover:shadow transition flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-blue-600" />
                <span>Call: +91 86018 25502</span>
              </a>
            </div>

            {/* Quick Proof Badges */}
            <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-left">
              <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-sm">
                <div className="text-2xl font-black text-blue-600">&lt;0.5s</div>
                <div className="text-xs text-slate-500 font-medium">Page Load Speed</div>
              </div>
              <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-sm">
                <div className="text-2xl font-black text-blue-600">100/100</div>
                <div className="text-xs text-slate-500 font-medium">Core Web Vitals</div>
              </div>
              <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-sm">
                <div className="text-2xl font-black text-blue-600">50+</div>
                <div className="text-xs text-slate-500 font-medium">Local Deployments</div>
              </div>
              <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-sm">
                <div className="text-2xl font-black text-blue-600">24/7</div>
                <div className="text-xs text-slate-500 font-medium">Local Tech Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY GORAKHPUR BUSINESSES CHOOSE US */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Local Authority & Superior Engineering
            </h2>
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Why Businesses in Gorakhpur Switch to Prism Web Studio
            </h3>
            <p className="text-slate-600 text-base md:text-lg">
              90% of local agencies in Gorakhpur sell obsolete, bloated WordPress themes that take 6+ seconds to load and crash during peak sales. We engineer modern digital flagships built for scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl border border-slate-200 bg-slate-50/50 hover:border-blue-500 hover:bg-white transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Ultra Fast Next.js Architecture</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Google prioritizes fast websites. We hand-code our web applications using Next.js 15 and React, delivering sub-second load times that keep visitors engaged and boost local search rankings.
              </p>
              <ul className="text-xs text-slate-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Server-Side Rendering (SSR)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Automatic WebP Image Optimization
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Zero Unnecessary Bloat or Plugins
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl border border-slate-200 bg-slate-50/50 hover:border-blue-500 hover:bg-white transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-6">
                <Search className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Built-in Gorakhpur Local SEO</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Every website we deliver is baked with local geo-coordinates, JSON-LD Schema markup, and hyperlocal keyword integration so you appear #1 on Google Maps and Local Pack.
              </p>
              <ul className="text-xs text-slate-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Google Business Profile Sync
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Schema.org LocalBusiness Rich Snippets
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Hyperlocal Landing Page Setup
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl border border-slate-200 bg-slate-50/50 hover:border-blue-500 hover:bg-white transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">High-Converting Lead Funnels</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                A pretty website that doesn’t generate customer phone calls or WhatsApp messages is useless. We optimize every CTA, button, and contact form for maximum local conversions.
              </p>
              <ul className="text-xs text-slate-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Instant WhatsApp Click-to-Chat
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Direct Tap-to-Call Buttons
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Automated Email & SMS Notifications
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CORE WEB SERVICES FOR GORAKHPUR CLIENTS */}
      <section className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Full-Lifecycle Solutions
            </h2>
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Web Development Services Tailored for Gorakhpur
            </h3>
            <p className="text-slate-600 text-base md:text-lg">
              From established retailers in Golghar to manufacturing units in GIDA, our custom solutions fuel long-term digital growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded">
                  Corporate & Services
                </span>
                <h4 className="text-2xl font-bold text-slate-900 mt-4 mb-3">
                  Custom Corporate Websites for Gorakhpur Businesses
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Perfect for hospitals, educational institutes, coaching centers, chartered accountants, and construction firms across Purvanchal. Built with custom interactive calculators, student inquiry forms, and doctor appointment scheduling.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="text-xs text-slate-700 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600" /> Mobile-first responsive design for 100% device compatibility
                  </div>
                  <div className="text-xs text-slate-700 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600" /> Content Management System (CMS) for instant self-updates
                  </div>
                  <div className="text-xs text-slate-700 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600" /> Bank-grade SSL certificate and enterprise cloud security
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-500">Starting from</span>
                  <div className="text-xl font-bold text-slate-900">₹14,999</div>
                </div>
                <Link
                  href="/contact"
                  className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg transition"
                >
                  Book Free Consultation
                </Link>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-purple-600 bg-purple-50 px-2.5 py-1 rounded">
                  Direct-to-Consumer
                </span>
                <h4 className="text-2xl font-bold text-slate-900 mt-4 mb-3">
                  Gorakhpur E-Commerce & Online Store Development
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Empowering retailers in Buxipur, Golghar, and Bank Road to sell clothing, electronics, groceries, and handicraft products online. Features Razorpay/UPI integration, automated WhatsApp order updates, and inventory tracking.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="text-xs text-slate-700 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-600" /> Zero-commission payment gateway setup (PhonePe, Google Pay, Cards)
                  </div>
                  <div className="text-xs text-slate-700 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-600" /> Automated shipping label generation (Shiprocket / Delhivery)
                  </div>
                  <div className="text-xs text-slate-700 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-600" /> Abandoned cart recovery via automated WhatsApp alerts
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-500">Starting from</span>
                  <div className="text-xl font-bold text-slate-900">₹34,999</div>
                </div>
                <Link
                  href="/contact"
                  className="px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold rounded-lg transition"
                >
                  Start Your Store
                </Link>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded">
                  Operations & ERP
                </span>
                <h4 className="text-2xl font-bold text-slate-900 mt-4 mb-3">
                  Custom Web Portals & Billing Softwares for GIDA
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Bespoke inventory management, distribution portals, and billing software engineered for manufacturing units, distributors, and logistics firms in GIDA Gorakhpur and industrial corridors.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="text-xs text-slate-700 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Multi-branch inventory tracking with GST compliance
                  </div>
                  <div className="text-xs text-slate-700 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Role-based access control for accountants, managers, and drivers
                  </div>
                  <div className="text-xs text-slate-700 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> PostgreSQL cloud database with automated daily backups
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-500">Starting from</span>
                  <div className="text-xl font-bold text-slate-900">₹49,999</div>
                </div>
                <Link
                  href="/contact"
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg transition"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-2.5 py-1 rounded">
                  AI & Automation
                </span>
                <h4 className="text-2xl font-bold text-slate-900 mt-4 mb-3">
                  AI WhatsApp Bots & Customer Support Agents
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Stop missing customer inquiries after business hours. Our AI agents understand Hindi & English, answering questions about pricing, booking appointments, and qualifying leads 24/7.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="text-xs text-slate-700 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600" /> Bilingual Hindi + English Natural Language Understanding
                  </div>
                  <div className="text-xs text-slate-700 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600" /> Direct WhatsApp Business Cloud API Integration
                  </div>
                  <div className="text-xs text-slate-700 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600" /> Automatic calendar scheduling with Google Calendar
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-500">Starting from</span>
                  <div className="text-xl font-bold text-slate-900">₹24,999</div>
                </div>
                <Link
                  href="/contact"
                  className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold rounded-lg transition"
                >
                  Explore AI Bots
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL AREAS SERVED IN GORAKHPUR */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl font-black text-slate-900">
              Areas We Serve in Gorakhpur & Surrounding Districts
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              We offer in-person consultations across Gorakhpur and nearby cities.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 text-center">
            {[
              "Golghar",
              "Civil Lines",
              "Medical College Rd",
              "Mohaddipur",
              "Taramandal",
              "GIDA Industrial",
              "Buxipur",
              "Bank Road",
              "Rapti Nagar",
              "Rustampur",
              "Deoria Bypass",
              "Kushinagar",
            ].map((loc) => (
              <div
                key={loc}
                className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 hover:border-blue-500 hover:bg-blue-50/50 transition cursor-default"
              >
                {loc}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Clear Answers
            </h2>
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Gorakhpur Web Development FAQs
            </h3>
          </div>

          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-white border border-slate-200">
              <h4 className="text-lg font-bold text-slate-900 mb-2">
                Gorakhpur me website banwane me kitna kharcha aata hai?
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Prism Web Studio me ek basic 5-page fast business website ₹14,999 se shuru hoti hai. Isme custom design, high-speed cloud hosting, .com/.in domain, SSL certificate, WhatsApp chat widget aur 1 year free maintenance shamil hai. E-commerce portals ₹34,999 se shuru hote hain.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200">
              <h4 className="text-lg font-bold text-slate-900 mb-2">
                Website banne ke baad kya mujhe maintenance ke liye extra pay karna hoga?
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Nahi! Hamare sabhi plans me 1 year ka free technical support, automated daily backups, aur small text/image changes free of charge shamil hote hain.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200">
              <h4 className="text-lg font-bold text-slate-900 mb-2">
                Kya meri website Google me top rank karegi?
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Haan! Hum har website me comprehensive On-Page SEO, Google Business Profile schema markup, and sub-second loading speeds implement karte hain jisse aapka business Gorakhpur me search karne wale customers ko top par dikhai de.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200">
              <h4 className="text-lg font-bold text-slate-900 mb-2">
                Kya hum offline aapse mil sakte hain?
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Bilkul! Hum Gorakhpur (Golghar, Civil Lines) aur Kushinagar me available hain. Aap hume +91 86018 25502 par call karke in-person meeting schedule kar sakte hain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA STRIP */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">
            Ready to Dominate Gorakhpur’s Digital Market?
          </h2>
          <p className="text-blue-100 text-base md:text-lg max-w-2xl mx-auto">
            Get a lightning-fast, high-converting website built specifically for your business. Talk to our engineering team today.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-white text-blue-600 hover:bg-slate-100 font-bold rounded-xl shadow-lg transition"
            >
              Start Your Project Today
            </Link>
            <a
              href="https://wa.me/918601825502?text=Hello%20Prism%20Web%20Studio,%20I%20want%20to%20build%20a%20website%20in%20Gorakhpur"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl shadow-lg transition flex items-center justify-center gap-2"
            >
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
