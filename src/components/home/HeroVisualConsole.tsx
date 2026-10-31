'use client';

import React, { useState } from 'react';
import { 
  Zap, 
  ShieldCheck, 
  Sparkles, 
  Bot, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  Gauge, 
  Globe2,
  TrendingUp
} from 'lucide-react';
import Link from 'next/link';

export default function HeroVisualConsole() {
  const [activeTab, setActiveTab] = useState<'vitals' | 'ai' | 'stack'>('vitals');

  return (
    <div className="relative rounded-2xl md:rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50 overflow-hidden transition-all min-h-[460px] md:min-h-[480px]">
      {/* Sleek Header Bar */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-slate-100 bg-slate-50/80">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-blue-600"></div>
          <span className="text-xs font-bold text-slate-800 tracking-wide">
            Live Performance Metrics
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100/80 px-2.5 py-0.5 rounded-full border border-emerald-300">
            Gorakhpur Edge Active
          </span>
        </div>
      </div>

      {/* Accessible Tab Switcher */}
      <div className="grid grid-cols-3 border-b border-slate-100 bg-slate-50/40 p-1.5 gap-1 text-xs font-bold">
        <button
          type="button"
          onClick={() => setActiveTab('vitals')}
          className={`py-2 px-2.5 rounded-xl flex items-center justify-center gap-1.5 transition text-xs font-bold min-h-[44px] ${
            activeTab === 'vitals'
              ? 'bg-white text-blue-700 shadow-sm border border-slate-200'
              : 'text-slate-700 hover:text-slate-900 hover:bg-white/60'
          }`}
          aria-label="View Core Web Vitals"
        >
          <Gauge className="w-3.5 h-3.5 text-blue-600 shrink-0" />
          <span className="truncate">Speed Vitals</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('ai')}
          className={`py-2 px-2.5 rounded-xl flex items-center justify-center gap-1.5 transition text-xs font-bold min-h-[44px] ${
            activeTab === 'ai'
              ? 'bg-white text-purple-700 shadow-sm border border-slate-200'
              : 'text-slate-700 hover:text-slate-900 hover:bg-white/60'
          }`}
          aria-label="View AI Assistant Simulation"
        >
          <Bot className="w-3.5 h-3.5 text-purple-600 shrink-0" />
          <span className="truncate">AI Assistant</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('stack')}
          className={`py-2 px-2.5 rounded-xl flex items-center justify-center gap-1.5 transition text-xs font-bold min-h-[44px] ${
            activeTab === 'stack'
              ? 'bg-white text-emerald-700 shadow-sm border border-slate-200'
              : 'text-slate-700 hover:text-slate-900 hover:bg-white/60'
          }`}
          aria-label="View Next.js Architecture Stack"
        >
          <Layers className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <span className="truncate">Modern Stack</span>
        </button>
      </div>

      {/* Tab 1: Speed & Vitals */}
      {activeTab === 'vitals' && (
        <div className="p-4 sm:p-6 space-y-4 min-h-[340px] flex flex-col justify-between">
          {/* Lighthouse Score Card */}
          <div className="bg-slate-50/90 rounded-2xl p-4 border border-slate-200/80">
            <div className="flex items-center justify-between text-xs mb-2.5">
              <span className="font-bold text-slate-800 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                Google Lighthouse Speed Audit
              </span>
              <span className="font-extrabold text-xs text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-300">
                100 / 100 Perfect
              </span>
            </div>
            
            <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
              <div className="bg-emerald-500 h-2.5 rounded-full w-full"></div>
            </div>

            <div className="grid grid-cols-4 gap-2 text-center mt-3 text-xs font-medium">
              <div className="p-2 bg-white rounded-xl border border-slate-200 shadow-2xs">
                <span className="block text-slate-900 font-extrabold text-sm">0.4s</span>
                <span className="text-[11px] text-slate-700 font-semibold">FCP</span>
              </div>
              <div className="p-2 bg-white rounded-xl border border-slate-200 shadow-2xs">
                <span className="block text-slate-900 font-extrabold text-sm">0.7s</span>
                <span className="text-[11px] text-slate-700 font-semibold">LCP</span>
              </div>
              <div className="p-2 bg-white rounded-xl border border-slate-200 shadow-2xs">
                <span className="block text-slate-900 font-extrabold text-sm">0.00</span>
                <span className="text-[11px] text-slate-700 font-semibold">CLS</span>
              </div>
              <div className="p-2 bg-white rounded-xl border border-slate-200 shadow-2xs">
                <span className="block text-slate-900 font-extrabold text-sm">12ms</span>
                <span className="text-[11px] text-slate-700 font-semibold">INP</span>
              </div>
            </div>
          </div>

          {/* Key Metric Highlights */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3.5 rounded-2xl border border-blue-200/80 bg-blue-50/50">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-blue-900 uppercase tracking-wide">
                  Edge TTFB
                </span>
                <Globe2 className="w-4 h-4 text-blue-600" />
              </div>
              <p className="text-2xl font-black text-slate-900 mt-1">38ms</p>
              <p className="text-xs text-slate-700 font-medium mt-0.5">Instant CDN Delivery</p>
            </div>

            <div className="p-3.5 rounded-2xl border border-emerald-200/80 bg-emerald-50/50">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-900 uppercase tracking-wide">
                  Conversion Lift
                </span>
                <TrendingUp className="w-4 h-4 text-emerald-600" />
              </div>
              <p className="text-2xl font-black text-slate-900 mt-1">+180%</p>
              <p className="text-xs text-slate-700 font-medium mt-0.5">Average Client ROI</p>
            </div>
          </div>

          {/* Architecture Guarantee */}
          <div className="p-3 rounded-xl border border-slate-200 bg-white flex items-center justify-between gap-2">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
              <p className="text-xs font-bold text-slate-800">
                Zero-Plugin Architecture (Zero Malware Risk)
              </p>
            </div>
            <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 shrink-0">
              SSL A+
            </span>
          </div>
        </div>
      )}

      {/* Tab 2: AI Customer Qualifier */}
      {activeTab === 'ai' && (
        <div className="p-4 sm:p-6 space-y-4 min-h-[340px] flex flex-col justify-between">
          <div className="p-3 bg-purple-50 rounded-2xl border border-purple-200 flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-purple-600 text-white flex items-center justify-center shrink-0">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">Prism Bilingual AI Agent</p>
              <p className="text-xs text-slate-700">Autonomous WhatsApp & Web Lead Qualifier</p>
            </div>
          </div>

          {/* Simulated Dialogue */}
          <div className="space-y-2.5 bg-slate-50 p-3.5 rounded-2xl border border-slate-200 text-xs">
            <div className="flex justify-end">
              <div className="bg-blue-600 text-white p-2.5 rounded-2xl rounded-tr-none max-w-[85%] shadow-xs">
                <p className="font-medium text-xs">
                  "Kya aap Gorakhpur me e-commerce website banate hain with UPI & WhatsApp ordering?"
                </p>
              </div>
            </div>

            <div className="flex justify-start">
              <div className="bg-white text-slate-800 p-2.5 rounded-2xl rounded-tl-none border border-slate-200 max-w-[90%] shadow-xs space-y-1.5">
                <p className="font-semibold text-slate-900 text-xs">
                  "Haan bilkul! Hum Next.js 15 par ultra-fast online stores banate hain jisme PhonePe/GPay UPI payments aur WhatsApp automated dispatch shamil hota hai. 5-7 din me delivery!"
                </p>
                <div className="flex flex-wrap gap-1">
                  <span className="text-[10px] font-bold text-purple-800 bg-purple-100 px-2 py-0.5 rounded border border-purple-200">
                    ✓ Live Catalog Synced
                  </span>
                  <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded border border-emerald-200">
                    ✓ 0% Commission
                  </span>
                </div>
              </div>
            </div>
          </div>

          <Link
            href="/contact?type=project"
            className="w-full py-3 px-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm transition min-h-[44px] active:scale-95"
          >
            <span>Test AI Workflow for Your Business</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      )}

      {/* Tab 3: Tech Stack */}
      {activeTab === 'stack' && (
        <div className="p-4 sm:p-6 space-y-3 min-h-[340px] flex flex-col justify-between">
          <div className="space-y-2">
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
                <span className="font-bold text-slate-900">Next.js 15 App Router</span>
              </div>
              <span className="text-slate-700 text-[11px] font-semibold">Sub-0.5s Transitions</span>
            </div>

            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-600"></span>
                <span className="font-bold text-slate-900">Tailwind CSS</span>
              </div>
              <span className="text-slate-700 text-[11px] font-semibold">Zero Runtime CSS</span>
            </div>

            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
                <span className="font-bold text-slate-900">PostgreSQL Cloud DB</span>
              </div>
              <span className="text-slate-700 text-[11px] font-semibold">Bank-Grade Security</span>
            </div>

            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-600"></span>
                <span className="font-bold text-slate-900">Global Anycast CDN</span>
              </div>
              <span className="text-slate-700 text-[11px] font-semibold">300+ Edge Nodes</span>
            </div>
          </div>

          <Link
            href="/services"
            className="w-full py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm transition min-h-[44px] active:scale-95"
          >
            <span>Explore Engineering Services</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      )}

      {/* Footer Strip */}
      <div className="px-4 sm:px-6 py-2.5 border-t border-slate-100 bg-slate-50/80 flex items-center justify-between text-xs text-slate-700">
        <span className="flex items-center gap-1.5 font-semibold">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
          100% Client Source Code Ownership
        </span>
        <span className="font-bold text-slate-800 text-[11px]">HTTP/3 Edge</span>
      </div>
    </div>
  );
}
