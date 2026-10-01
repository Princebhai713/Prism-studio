import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Search,
  TrendingUp,
  MapPin,
  Target,
  BarChart3,
  CheckCircle2,
  Phone,
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe2,
  Award,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Best SEO Services in Gorakhpur | #1 Local SEO Agency | Prism Web Studio",
  description:
    "Dominate Google Search in Gorakhpur! Prism Web Studio provides data-driven Local SEO, Google Business Profile (GMB) optimization, and technical SEO to bring local customers directly to your shop or office.",
  keywords: [
    "SEO Services in Gorakhpur",
    "Best SEO Company in Gorakhpur",
    "Local SEO Agency Gorakhpur",
    "Google Business Profile Optimization Gorakhpur",
    "GMB Ranking Gorakhpur",
    "Digital Marketing Agency Gorakhpur",
    "Google Map Ranking Gorakhpur",
  ],
  alternates: {
    canonical: "https://prismwebstudio.mintx.online/seo-services-in-gorakhpur",
  },
};

export default function SeoServicesGorakhpur() {
  const seoSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Prism Web Studio - SEO Services in Gorakhpur",
    description:
      "Premier Local SEO & Google Business Profile optimization agency helping Gorakhpur businesses rank #1 on Google Search & Google Maps.",
    url: "https://prismwebstudio.mintx.online/seo-services-in-gorakhpur",
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
    areaServed: ["Gorakhpur", "Golghar", "Civil Lines", "Purvanchal"],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Gorakhpur me Google me #1 rank karne me kitna time lagta hai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Local SEO aur Google Maps (GMB 3-Pack) me results aane me aam taur par 30 se 60 din lagte hain. Hamari technical on-page optimization aur sub-second speed se aapki website Google ke pehle page par tezi se aane lagti hai.",
        },
      },
      {
        "@type": "Question",
        name: "Kya Google Maps profile (GMB) optimize karna zaroori hai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Haan! 76% local customers jo Gorakhpur me services search karte hain (jaise 'doctor near me' ya 'best restaurant in Golghar'), wo Google Maps ke top 3 results se call karte hain. Hum aapka GMB profile 100% optimize karte hain.",
        },
      },
      {
        "@type": "Question",
        name: "Kya SEO paid ads (Google Ads) se behtar hai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Google Ads me jab tak aap paise denge tab tak clicks aayenge. Par SEO ek long-term asset hai jo 24/7 bina kisi per-click cost ke free organic phone calls aur leads generate karta hai.",
        },
      },
    ],
  };

  return (
    <div className="w-full bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seoSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO SECTION */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Dominate Local Search & Google Maps</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
              Top SEO Services in <span className="text-emerald-600">Gorakhpur</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Get more phone calls, foot traffic, and sales. We help doctors, lawyers, retailers, and coaching institutes rank #1 on Google Search and Google Maps across Gorakhpur and Purvanchal.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Get Free SEO Audit Report</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+918601825502"
                className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 hover:border-slate-300 text-slate-800 font-bold rounded-xl shadow-sm hover:shadow transition flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>Call: +91 86018 25502</span>
              </a>
            </div>

            {/* Quick Proof Grid */}
            <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-left">
              <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-sm">
                <div className="text-2xl font-black text-emerald-600">Top 3</div>
                <div className="text-xs text-slate-500 font-medium">Google Maps 3-Pack</div>
              </div>
              <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-sm">
                <div className="text-2xl font-black text-emerald-600">30-60 Days</div>
                <div className="text-xs text-slate-500 font-medium">Fast Keyword Ranking</div>
              </div>
              <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-sm">
                <div className="text-2xl font-black text-emerald-600">0% Spam</div>
                <div className="text-xs text-slate-500 font-medium">White-Hat Techniques</div>
              </div>
              <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-sm">
                <div className="text-2xl font-black text-emerald-600">10x ROI</div>
                <div className="text-xs text-slate-500 font-medium">Over Traditional Ads</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS OF GORAKHPUR LOCAL SEO */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-600">
              Battle-Tested Methodologies
            </h2>
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              How We Put Your Business on the Top of Google in Gorakhpur
            </h3>
            <p className="text-slate-600 text-base md:text-lg">
              Generic SEO tactics don't work for local markets. We use hyper-localized, data-driven optimization designed specifically for eastern UP search trends.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl border border-slate-200 bg-slate-50/50 hover:border-emerald-500 hover:bg-white transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Google Business Profile (GMB) Optimization</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                We claim, verify, and fully optimize your Google Business listing with category selection, geotagged product photos, keyword-optimized descriptions, and regular high-converting posts.
              </p>
              <ul className="text-xs text-slate-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> NAP Consistency (Name, Address, Phone)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Automated 5-Star Review Generation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Hyperlocal Geo-fencing Strategy
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl border border-slate-200 bg-slate-50/50 hover:border-emerald-500 hover:bg-white transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-6">
                <Search className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Technical & On-Page SEO Architecture</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                We optimize your website’s code, meta tags, schema markup, and content density so Google immediately identifies you as Gorakhpur's primary service authority.
              </p>
              <ul className="text-xs text-slate-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Sub-second Core Web Vitals score
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> JSON-LD Schema (LocalBusiness, GeoCoordinates)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Optimized H1/H2 tags and keyword density
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl border border-slate-200 bg-slate-50/50 hover:border-emerald-500 hover:bg-white transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Local Citations & High-Trust Backlinks</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                We secure verified business listings on reputable Indian directories (Justdial, IndiaMART, Sulekha, YellowPages) to build unbreakable search domain authority.
              </p>
              <ul className="text-xs text-slate-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 100% Manual Citation Submissions
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Local Industry Backlink Outreach
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Monthly Transparent Ranking Reports
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SEO PACKAGES */}
      <section className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-600">
              Transparent SEO Packages
            </h2>
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Invest in Continuous Organic Customer Growth
            </h3>
            <p className="text-slate-600 text-base md:text-lg">
              No long lock-in contracts. Transparent monthly deliverables and measurable phone call growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Local Map Starter
                </span>
                <h4 className="text-2xl font-bold text-slate-900 mt-2">GMB Fast-Rank</h4>
                <div className="mt-4 mb-6">
                  <span className="text-3xl font-black text-slate-900">₹7,999</span>
                  <span className="text-xs text-slate-500 block mt-1">per month</span>
                </div>
                <ul className="space-y-3 text-xs text-slate-600 mb-8">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Google Business Profile Full Setup
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 10 Target Local Keywords
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 20 Local Business Citations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Review Generation QR Code Template
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Monthly Call & Search Impression Report
                  </li>
                </ul>
              </div>
              <Link
                href="/contact"
                className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white text-center text-xs font-bold rounded-xl transition"
              >
                Choose GMB Starter
              </Link>
            </div>

            <div className="p-8 bg-emerald-50/50 rounded-2xl border-2 border-emerald-600 shadow-lg relative flex flex-col justify-between">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-emerald-600 text-white text-[11px] font-bold rounded-full uppercase tracking-wider">
                Best For Local Dominance
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                  Complete Growth
                </span>
                <h4 className="text-2xl font-bold text-slate-900 mt-2">Gorakhpur Dominator</h4>
                <div className="mt-4 mb-6">
                  <span className="text-3xl font-black text-emerald-700">₹14,999</span>
                  <span className="text-xs text-slate-500 block mt-1">per month</span>
                </div>
                <ul className="space-y-3 text-xs text-slate-700 mb-8">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> GMB 3-Pack Optimization + Website SEO
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 25 High-Intent Commercial Keywords
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 2 Local Blog Articles per month
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Complete Technical Core Web Vitals Fix
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 50 Verified Citations & Directory Listings
                  </li>
                </ul>
              </div>
              <Link
                href="/contact"
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-center text-xs font-bold rounded-xl shadow-md transition"
              >
                Start Growth Plan
              </Link>
            </div>

            <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Purvanchal Leader
                </span>
                <h4 className="text-2xl font-bold text-slate-900 mt-2">Regional Expansion</h4>
                <div className="mt-4 mb-6">
                  <span className="text-3xl font-black text-slate-900">₹27,999</span>
                  <span className="text-xs text-slate-500 block mt-1">per month</span>
                </div>
                <ul className="space-y-3 text-xs text-slate-600 mb-8">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Multi-City SEO (Gorakhpur, Deoria, Basti, Kushinagar)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 50+ High Competition Keywords
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 4 High-Authority Industry Articles
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Competitor Backlink Interception
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Weekly Video Calls & Dedicated SEO Strategist
                  </li>
                </ul>
              </div>
              <Link
                href="/contact"
                className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white text-center text-xs font-bold rounded-xl transition"
              >
                Choose Regional
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-600">
              Common Inquiries
            </h2>
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Gorakhpur SEO Services FAQs
            </h3>
          </div>

          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <h4 className="text-lg font-bold text-slate-900 mb-2">
                Kya aap rank #1 ki guarantee dete hain?
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Google ki official guidelines ke mutabiq koi bhi rank #1 ki 100% guarantee nahi de sakta, lekin hamari proven white-hat methodologies aur technical architecture ke zariye hamare 95% clients 60 din ke andar Google ke top 3 results me rank karte hain.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <h4 className="text-lg font-bold text-slate-900 mb-2">
                Agar meri website WordPress ya kisi aur platform par hai to kya SEO ho sakta hai?
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Haan! Hum WordPress, Shopify, Next.js, ya custom HTML websites sabhi ka technical SEO audit aur optimization karte hain.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <h4 className="text-lg font-bold text-slate-900 mb-2">
                Hum aapse meeting kaise fix kar sakte hain?
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Aap hume call ya WhatsApp kar sakte hain +91 86018 25502 par. Hamara representative aapke Gorakhpur office/shop par visit karke ya online Google Meet ke zariye detailed SEO proposal de sakta hai.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">
            Stop Losing Customers to Competitors on Google
          </h2>
          <p className="text-emerald-100 text-base md:text-lg max-w-2xl mx-auto">
            Get your free Gorakhpur SEO Audit today and see how many local customers are searching for your services right now.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-white text-emerald-700 hover:bg-slate-100 font-bold rounded-xl shadow-lg transition"
            >
              Claim Free SEO Audit
            </Link>
            <a
              href="tel:+918601825502"
              className="w-full sm:w-auto px-8 py-4 bg-emerald-800 hover:bg-emerald-900 text-white font-bold rounded-xl shadow-lg transition flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call +91 86018 25502</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
