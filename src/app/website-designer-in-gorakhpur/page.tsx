import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Palette,
  Layout,
  Smartphone,
  Sparkles,
  CheckCircle2,
  MapPin,
  Phone,
  ArrowRight,
  Eye,
  ShieldCheck,
  MousePointerClick,
  Layers,
  Zap,
  Star,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Professional Website Designer in Gorakhpur | Modern UI/UX Design Agency",
  description:
    "Looking for the best website designer in Gorakhpur? Prism Web Studio crafts stunning, modern, mobile-friendly websites with clean typography, intuitive user experience, and high sales conversion.",
  keywords: [
    "Website Designer in Gorakhpur",
    "Web Designer Gorakhpur",
    "UI UX Designer Gorakhpur",
    "Best Website Designing Agency Gorakhpur",
    "Responsive Web Design Gorakhpur",
    "Creative Web Designer Purvanchal",
    "Graphic & Web Design Gorakhpur",
  ],
  alternates: {
    canonical: "https://prismwebstudio.mintx.online/website-designer-in-gorakhpur",
  },
};

export default function WebsiteDesignerGorakhpur() {
  const designerSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Prism Web Studio - Website Designer in Gorakhpur",
    description:
      "Award-winning UI/UX website design agency in Gorakhpur crafting responsive, conversion-focused digital designs for local businesses.",
    url: "https://prismwebstudio.mintx.online/website-designer-in-gorakhpur",
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
    areaServed: ["Gorakhpur", "Golghar", "Civil Lines", "Mohaddipur", "Purvanchal"],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Website design aur development me kya antar hota hai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Website design me user experience (UX), visuals, color theory aur layout design aata hai taki website dekhne me sundar lage aur user aasaani se call ya order kare. Web development me us design ko fast, secure code (Next.js/React) me convert kiya jata hai. Prism Web Studio me hum dono expert level par deliver karte hain.",
        },
      },
      {
        "@type": "Question",
        name: "Kya meri existing outdated website ko redesign kiya ja sakta hai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Haan! Agar aapki purani website slow hai ya mobile phone par achi nahi dikhti, hum complete modern redesign karte hain jisse aapka brand modern lage aur aapke conversions 2x-3x badh sakein.",
        },
      },
    ],
  };

  return (
    <div className="w-full bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(designerSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO SECTION */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Modern Aesthetics & Conversion-Driven UI/UX</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
              Premier Website Designer in <span className="text-purple-600">Gorakhpur</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              We design elegant, high-impact digital experiences that transform visitors into loyal paying customers. Zero cookie-cutter templates—pure, custom-crafted visual excellence.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl shadow-lg shadow-purple-500/20 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Request Custom UI Design</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+918601825502"
                className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 hover:border-slate-300 text-slate-800 font-bold rounded-xl shadow-sm hover:shadow transition flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-purple-600" />
                <span>Call: +91 86018 25502</span>
              </a>
            </div>

            {/* Design Metric Badges */}
            <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-left">
              <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-sm">
                <div className="text-2xl font-black text-purple-600">100%</div>
                <div className="text-xs text-slate-500 font-medium">Bespoke Design</div>
              </div>
              <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-sm">
                <div className="text-2xl font-black text-purple-600">Mobile-First</div>
                <div className="text-xs text-slate-500 font-medium">Responsive Layouts</div>
              </div>
              <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-sm">
                <div className="text-2xl font-black text-purple-600">3.4x</div>
                <div className="text-xs text-slate-500 font-medium">Conversion Lift</div>
              </div>
              <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-sm">
                <div className="text-2xl font-black text-purple-600">Figma</div>
                <div className="text-xs text-slate-500 font-medium">Interactive Mockups</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DESIGN PHILOSOPHY */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-purple-600">
              The Prism Design Standard
            </h2>
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Design That Doesn’t Just Look Good—It Sells
            </h3>
            <p className="text-slate-600 text-base md:text-lg">
              In a crowded market, your website is your 24/7 digital showroom. We make sure every pixel conveys credibility, trust, and authority.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl border border-slate-200 bg-slate-50/50 hover:border-purple-500 hover:bg-white transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-purple-600 text-white flex items-center justify-center mb-6">
                <Smartphone className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Hyper-Responsive Mobile UI</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Over 82% of web traffic in Gorakhpur comes from smartphones. We engineer thumb-friendly navigation, rapid-tap checkout funnels, and zero-pinch zoom layouts.
              </p>
              <ul className="text-xs text-slate-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Touch-optimized buttons and drawers
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Fluid typography that scales across screens
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Instant bottom action bars for mobile
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl border border-slate-200 bg-slate-50/50 hover:border-purple-500 hover:bg-white transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-purple-600 text-white flex items-center justify-center mb-6">
                <MousePointerClick className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Psychological UX & Visual Hierarchy</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                We organize information so visitors immediately understand what you do, why you are the best choice in Gorakhpur, and exactly where to click to hire or buy.
              </p>
              <ul className="text-xs text-slate-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> F-pattern and Z-pattern scanning layouts
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> High-contrast Call to Action buttons
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Social proof & trust badge placement
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl border border-slate-200 bg-slate-50/50 hover:border-purple-500 hover:bg-white transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-purple-600 text-white flex items-center justify-center mb-6">
                <Palette className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Custom Brand Identity Systems</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                We craft distinct color palettes, typography pairings, custom iconography, and brand identity manuals that separate you from local competitors.
              </p>
              <ul className="text-xs text-slate-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Modern minimalist design aesthetics
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Custom SVG vector illustrations
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Micro-animations for luxury feel
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* DESIGN PACKAGES */}
      <section className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-purple-600">
              Transparent Pricing
            </h2>
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Website Design Packages in Gorakhpur
            </h3>
            <p className="text-slate-600 text-base md:text-lg">
              No hidden costs, no surprises. Direct design excellence engineered for local market leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Starter Identity
                </span>
                <h4 className="text-2xl font-bold text-slate-900 mt-2">Single Page Showcase</h4>
                <div className="mt-4 mb-6">
                  <span className="text-3xl font-black text-slate-900">₹9,999</span>
                  <span className="text-xs text-slate-500 block mt-1">One-time investment</span>
                </div>
                <ul className="space-y-3 text-xs text-slate-600 mb-8">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 1-Page High Converting Landing Page
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Mobile & Tablet Responsive
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> WhatsApp Direct Chat Widget
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Google Map Location Integration
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Free Domain & Cloud Hosting (1st Year)
                  </li>
                </ul>
              </div>
              <Link
                href="/contact"
                className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white text-center text-xs font-bold rounded-xl transition"
              >
                Choose Starter
              </Link>
            </div>

            <div className="p-8 bg-purple-50/50 rounded-2xl border-2 border-purple-600 shadow-lg relative flex flex-col justify-between">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-purple-600 text-white text-[11px] font-bold rounded-full uppercase tracking-wider">
                Most Popular in Gorakhpur
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-purple-700">
                  Business Flagship
                </span>
                <h4 className="text-2xl font-bold text-slate-900 mt-2">Complete Brand Experience</h4>
                <div className="mt-4 mb-6">
                  <span className="text-3xl font-black text-purple-700">₹19,999</span>
                  <span className="text-xs text-slate-500 block mt-1">Full 5-8 Page Architecture</span>
                </div>
                <ul className="space-y-3 text-xs text-slate-700 mb-8">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-600" /> Up to 8 Custom Designed Pages
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-600" /> Figma Interactive Prototype Review
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-600" /> Full On-Page Local SEO Setup
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-600" /> Lead Capture Forms + CRM Webhook
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-600" /> 1-Year Free Domain, Hosting & Support
                  </li>
                </ul>
              </div>
              <Link
                href="/contact"
                className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white text-center text-xs font-bold rounded-xl shadow-md transition"
              >
                Choose Flagship
              </Link>
            </div>

            <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Enterprise / E-Commerce
                </span>
                <h4 className="text-2xl font-bold text-slate-900 mt-2">Custom Storefront UI</h4>
                <div className="mt-4 mb-6">
                  <span className="text-3xl font-black text-slate-900">₹39,999</span>
                  <span className="text-xs text-slate-500 block mt-1">Multi-Category Store Design</span>
                </div>
                <ul className="space-y-3 text-xs text-slate-600 mb-8">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Full E-Commerce UX & Checkout UI
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Product Filter & Search Design
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Customer Account & Order Tracking UI
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Payment Gateway Integration Design
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Dedicated Account Manager & Training
                  </li>
                </ul>
              </div>
              <Link
                href="/contact"
                className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white text-center text-xs font-bold rounded-xl transition"
              >
                Choose E-Commerce
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* DESIGN PROCESS */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-purple-600">
              Streamlined Execution
            </h2>
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Our 4-Step Design Process
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 border border-slate-200 rounded-2xl bg-slate-50">
              <div className="text-3xl font-black text-purple-600 mb-2">01</div>
              <h4 className="text-base font-bold text-slate-900 mb-1">Discovery & Wireframes</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We understand your target audience in Gorakhpur and sketch wireframe structures before writing any code.
              </p>
            </div>
            <div className="p-6 border border-slate-200 rounded-2xl bg-slate-50">
              <div className="text-3xl font-black text-purple-600 mb-2">02</div>
              <h4 className="text-base font-bold text-slate-900 mb-1">Visual Mockup in Figma</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                You get to review the exact colors, typography, and layout of your website before it goes live.
              </p>
            </div>
            <div className="p-6 border border-slate-200 rounded-2xl bg-slate-50">
              <div className="text-3xl font-black text-purple-600 mb-2">03</div>
              <h4 className="text-base font-bold text-slate-900 mb-1">Clean Next.js Code</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We turn your approved visual mockup into lightning-fast, production-grade Next.js 15 & React code.
              </p>
            </div>
            <div className="p-6 border border-slate-200 rounded-2xl bg-slate-50">
              <div className="text-3xl font-black text-purple-600 mb-2">04</div>
              <h4 className="text-base font-bold text-slate-900 mb-1">Launch & Google Ranking</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We deploy your site to global edge CDNs and index it immediately on Google Search Console.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-purple-600">
              Got Questions?
            </h2>
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Website Designing FAQs Gorakhpur
            </h3>
          </div>

          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-white border border-slate-200">
              <h4 className="text-lg font-bold text-slate-900 mb-2">
                Kya aap mere purane logo aur brand colors ko use kar sakte hain?
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Haan! Hum aapke existing brand colors aur logo ko modernize karke website me use karte hain. Agar aapko new logo ya branding chahiye, to wo bhi hamare packages me shamil ho sakta hai.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200">
              <h4 className="text-lg font-bold text-slate-900 mb-2">
                Website design me kitna samay lagta hai?
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Standard business websites 5-7 working days me complete design aur develop ho jati hain. Complex e-commerce stores ke liye 10-15 din ka time lagta hai.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200">
              <h4 className="text-lg font-bold text-slate-900 mb-2">
                Kya design mobile screen par responsive hoga?
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                100%! Hum 'Mobile-First' philosophy follow karte hain. Aapki website iPhone, Android smartphones, tablets aur desktops har size par perfectly display hogi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">
            Elevate Your Brand Identity in Gorakhpur
          </h2>
          <p className="text-purple-100 text-base md:text-lg max-w-2xl mx-auto">
            Work with Gorakhpur's premier digital design team. Get a free visual design consultation today.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-white text-purple-700 hover:bg-slate-100 font-bold rounded-xl shadow-lg transition"
            >
              Get Free Design Consultation
            </Link>
            <a
              href="tel:+918601825502"
              className="w-full sm:w-auto px-8 py-4 bg-purple-900 hover:bg-purple-950 text-white font-bold rounded-xl shadow-lg transition flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call Us Directly</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
