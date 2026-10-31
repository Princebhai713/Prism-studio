'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, Phone, Sparkles } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function HeroQuickQuote() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Web Development');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || phone.length < 10) {
      alert('Please enter a valid 10-digit mobile number');
      return;
    }

    setIsSubmitting(true);
    try {
      // Send quick lead to contact API or redirect with params
      const res = await fetch('/api/leads/quick', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, service, source: 'Hero Quick Quote' }),
      }).catch(() => null);

      setIsSubmitted(true);
      setTimeout(() => {
        router.push(`/contact?name=${encodeURIComponent(name)}&phone=${encodeURIComponent(phone)}&service=${encodeURIComponent(service)}&type=project`);
      }, 1200);
    } catch (err) {
      router.push(`/contact?name=${encodeURIComponent(name)}&phone=${encodeURIComponent(phone)}&service=${encodeURIComponent(service)}&type=project`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full mt-6 p-4 sm:p-5 rounded-2xl bg-white/95 border border-slate-200/90 shadow-xl shadow-blue-900/5 backdrop-blur-md min-h-[110px] flex flex-col justify-between">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-blue-600 fill-blue-600" />
          <span>Get Instant Quotation &amp; Call in 15 Mins</span>
        </span>
        <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
          ⚡ 100% Free
        </span>
      </div>

      {isSubmitted ? (
        <div className="py-4 text-center text-emerald-700 font-bold text-xs flex items-center justify-center gap-2 bg-emerald-50 rounded-xl border border-emerald-200">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>Thank you! Redirecting you to complete details...</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-12 gap-2.5">
          <div className="sm:col-span-4">
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent min-h-[42px]"
            />
          </div>

          <div className="sm:col-span-4">
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="10-digit Phone No."
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent min-h-[42px]"
            />
          </div>

          <div className="sm:col-span-4">
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent min-h-[42px]"
            >
              <option value="Web Development">Web Development (Next.js)</option>
              <option value="Website Redesign">Website Redesign (UI/UX)</option>
              <option value="E-Commerce Store">E-Commerce Store (UPI)</option>
              <option value="Local SEO & GMB">Local SEO &amp; Google Maps</option>
            </select>
          </div>

          <div className="sm:col-span-12">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 active:scale-[0.99] text-white font-bold text-xs rounded-xl shadow-md shadow-blue-500/20 transition flex items-center justify-center gap-2 min-h-[42px]"
            >
              <span>{isSubmitting ? 'Submitting...' : 'Request Quotation & Consultation →'}</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
