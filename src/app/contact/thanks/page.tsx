import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You | Prism Studio",
  description: "We've received your request and our team will get back to you within 24 hours.",
};

export default function ContactThanksPage() {
  return (
    <div className="w-full bg-slate-50 min-h-[70vh] flex items-center justify-center py-24 md:py-32">
      <div className="max-w-2xl mx-auto px-6 lg:px-8 w-full">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 text-center shadow-xl space-y-6">
          {/* Animated / Crisp Checkmark */}
          <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-3xl font-black shadow-inner">
            ✓
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Thank You!
          </h1>

          <p className="text-base text-slate-600 leading-relaxed max-w-lg mx-auto">
            "We’ve received your request and our team is already reviewing it. We usually get back to you within 24 hours."
          </p>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-500 font-medium">
            Note: "We may reach out to you via email or phone for a quick discovery call."
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 text-white text-xs font-bold shadow hover:bg-blue-700 transition"
            >
              Back to Home
            </Link>
            <Link
              href="/portfolio"
              className="w-full sm:w-auto px-6 py-3 rounded-xl border border-slate-300 text-slate-700 text-xs font-bold hover:bg-slate-50 transition"
            >
              ← View More Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
