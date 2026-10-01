'use client';

import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2, Building, MapPin } from 'lucide-react';

interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  company: string;
  location: string;
  avatarBg: string;
  initials: string;
  rating: number;
  highlightMetric: string;
  quote: string;
  projectType: string;
}

const testimonialsData: TestimonialItem[] = [
  {
    id: 1,
    name: "Alex Rivers",
    role: "CEO & Co-Founder",
    company: "InnovateTech Global",
    location: "San Francisco, USA",
    avatarBg: "from-blue-600 to-indigo-600",
    initials: "AR",
    rating: 5,
    highlightMetric: "40 hrs/wk saved • 180% Lead Lift",
    quote: "Prism transformed our digital infrastructure completely. Their Next.js architecture and custom AI automation eliminated 40 hours a week in manual operational bottlenecks. The ROI was visible within the first 30 days.",
    projectType: "SaaS & AI Integration"
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Director of Brand",
    company: "Bloom Lifestyle Retail",
    location: "London, UK",
    avatarBg: "from-purple-600 to-pink-600",
    initials: "SC",
    rating: 5,
    highlightMetric: "+300% Checkout GMV • 0.4s LCP",
    quote: "Cleanest, most performant code I have seen in years. Our e-commerce checkout now loads under 0.5s globally. Conversions jumped 3x. Highly recommended for any serious business ready to scale without technical debt.",
    projectType: "E-Commerce Architecture"
  },
  {
    id: 3,
    name: "Marcus Thorne",
    role: "Chief Technology Officer",
    company: "LogiGlobal Industrial",
    location: "Dubai, UAE",
    avatarBg: "from-emerald-600 to-teal-600",
    initials: "MT",
    rating: 5,
    highlightMetric: "+150% Conversion • 99.99% Uptime",
    quote: "Our multi-tenant logistics portal handles massive data volume with zero downtime. Satyarth and the Prism engineering team are rare masters of PostgreSQL row-level security and sub-second edge routing.",
    projectType: "Enterprise Web Portal"
  },
  {
    id: 4,
    name: "Dr. Vikram Singhania",
    role: "Managing Director",
    company: "Apex Healthcare & Diagnostics",
    location: "Gorakhpur / Lucknow, UP",
    avatarBg: "from-amber-600 to-orange-600",
    initials: "VS",
    rating: 5,
    highlightMetric: "2.4x Patient Appointments • GMB #1",
    quote: "Gorakhpur me itni high-standard web development agency milna mushkil tha. Prism ne hamare clinic ke liye online appointment booking aur Google Maps ranking optimize kiya. Phone calls daily double ho gaye hain.",
    projectType: "Healthcare Portal & Local SEO"
  }
];

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full">
      {/* Mobile Interactive Carousel View (hidden on lg) */}
      <div className="block lg:hidden">
        <div className="relative bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xl shadow-slate-100">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[11px] font-bold text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full uppercase tracking-wider">
              {testimonialsData[currentIndex].projectType}
            </span>
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(testimonialsData[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
          </div>

          <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6 italic">
            "{testimonialsData[currentIndex].quote}"
          </p>

          <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 mb-6">
            <span className="text-[10px] font-bold uppercase text-emerald-800 tracking-wider block">
              Verified Business Outcome
            </span>
            <span className="text-xs font-black text-emerald-900">
              {testimonialsData[currentIndex].highlightMetric}
            </span>
          </div>

          {/* User Profile Bar with Real Avatar */}
          <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${testimonialsData[currentIndex].avatarBg} text-white font-extrabold flex items-center justify-center text-sm shadow-md shrink-0`}>
              {testimonialsData[currentIndex].initials}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <h4 className="text-sm font-bold text-slate-900 truncate">
                  {testimonialsData[currentIndex].name}
                </h4>
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              </div>
              <p className="text-xs text-slate-600 truncate">
                {testimonialsData[currentIndex].role} • {testimonialsData[currentIndex].company}
              </p>
              <p className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5">
                <MapPin className="w-3 h-3 text-slate-400" />
                {testimonialsData[currentIndex].location}
              </p>
            </div>
          </div>

          {/* Navigation Controls (Min 44px touch targets) */}
          <div className="flex items-center justify-between pt-6 mt-6 border-t border-slate-100">
            <div className="flex gap-1.5">
              {testimonialsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    currentIndex === idx ? 'w-6 bg-blue-600' : 'w-2 bg-slate-200'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="w-11 h-11 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 flex items-center justify-center active:scale-95 transition"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-11 h-11 rounded-xl bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-md active:scale-95 transition"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Responsive Grid View (visible on lg screens) */}
      <div className="hidden lg:grid grid-cols-3 gap-8">
        {testimonialsData.slice(0, 3).map((item) => (
          <div
            key={item.id}
            className="p-8 rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-2xl hover:border-blue-500 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full uppercase tracking-wider">
                  {item.projectType}
                </span>
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>

              <p className="text-slate-700 text-sm leading-relaxed mb-6 italic">
                "{item.quote}"
              </p>

              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 mb-6">
                <span className="text-[10px] font-bold uppercase text-emerald-800 tracking-wider block">
                  Verified Outcome
                </span>
                <span className="text-xs font-black text-emerald-900">
                  {item.highlightMetric}
                </span>
              </div>
            </div>

            {/* Client Profile Card */}
            <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.avatarBg} text-white font-extrabold flex items-center justify-center text-sm shadow-md shrink-0 group-hover:scale-105 transition-transform`}>
                {item.initials}
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <h4 className="text-sm font-bold text-slate-900 truncate">{item.name}</h4>
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                </div>
                <p className="text-xs text-slate-600 truncate">{item.role}</p>
                <p className="text-[11px] text-slate-500 truncate">{item.company} • {item.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
