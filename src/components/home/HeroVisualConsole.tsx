'use client';

import React, { useState } from 'react';
import { 
  Zap, 
  ShieldCheck, 
  Cpu, 
  CheckCircle2, 
  Activity, 
  Bot, 
  Layers, 
  ArrowRight, 
  Sparkles,
  Server,
  Globe2
} from 'lucide-react';
import Link from 'next/link';

export default function HeroVisualConsole() {
  const [activeTab, setActiveTab] = useState<'vitals' | 'ai' | 'stack'>('vitals');

  return (
    <div className="relative rounded-3xl border border-slate-200/90 bg-white shadow-2xl shadow-blue-500/10 overflow-hidden transition-all">
      {/* Console Window Header (macOS style) */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 bg-slate-50/90">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-400"></div>
          <div className="w-3 h-3 rounded-full bg-amber-400"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
          <span className="ml-2 text-xs font-mono font-bold text-slate-500">prism-engine-v3.0.4</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
            Gorakhpur Edge Active
          </span>
        </div>
      </div>

      {/* Interactive Tabs Navigation */}
      <div className="grid grid-cols-3 border-b border-slate-100 bg-slate-50/50 p-1.5 gap-1 text-xs font-bold text-slate-600">
        <button
          onClick={() => setActiveTab('vitals')}
          className={`py-2 px-3 rounded-xl flex items-center justify-center gap-1.5 transition ${
            activeTab === 'vitals'
              ? 'bg-white text-blue-600 shadow-sm border border-slate-200'
              : 'hover:text-slate-900 hover:bg-white/50'
          }`}
        >
          <Activity className="w-3.5 h-3.5" />
          <span>Core Vitals</span>
        </button>

        <button
          onClick={() => setActiveTab('ai')}
          className={`py-2 px-3 rounded-xl flex items-center justify-center gap-1.5 transition ${
            activeTab === 'ai'
              ? 'bg-white text-purple-600 shadow-sm border border-slate-200'
              : 'hover:text-slate-900 hover:bg-white/50'
          }`}
        >
          <Bot className="w-3.5 h-3.5" />
          <span>AI Assistant</span>
        </button>

        <button
          onClick={() => setActiveTab('stack')}
          className={`py-2 px-3 rounded-xl flex items-center justify-center gap-1.5 transition ${
            activeTab === 'stack'
              ? 'bg-white text-emerald-600 shadow-sm border border-slate-200'
              : 'hover:text-slate-900 hover:bg-white/50'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>Next.js Stack</span>
        </button>
      </div>

      {/* Tab 1: Core Web Vitals Radar & Live Performance */}
      {activeTab === 'vitals' && (
        <div className="p-6 space-y-5 animate-fade-in">
          {/* Lighthouse Score Card */}
          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 shadow-inner">
            <div className="flex items-center justify-between text-xs text-slate-700 mb-2">
              <span className="font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                Google Lighthouse Benchmark
              </span>
              <span className="font-black text-emerald-700 bg-emerald-100/70 px-2.5 py-0.5 rounded-full border border-emerald-300">
                100 / 100
              </span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
              <div className="bg-emerald-500 h-3 rounded-full w-[100%] transition-all duration-1000"></div>
            </div>
            <div className="grid grid-cols-4 gap-2 text-center mt-3 text-[11px] font-semibold text-slate-600">
              <div className="p-1.5 bg-white rounded-lg border border-slate-100">
                <span className="block text-slate-900 font-extrabold">0.4s</span> FCP
              </div>
              <div className="p-1.5 bg-white rounded-lg border border-slate-100">
                <span className="block text-slate-900 font-extrabold">0.7s</span> LCP
              </div>
              <div className="p-1.5 bg-white rounded-lg border border-slate-100">
                <span className="block text-slate-900 font-extrabold">0.00</span> CLS
              </div>
              <div className="p-1.5 bg-white rounded-lg border border-slate-100">
                <span className="block text-slate-900 font-extrabold">12ms</span> INP
              </div>
            </div>
          </div>

          {/* Metric Highlights */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 rounded-2xl border border-blue-100 bg-blue-50/60">
              <div className="flex items-center justify-between">
                <span className="text-xs text-blue-700 font-bold uppercase tracking-wider">Edge TTFB</span>
                <Globe2 className="w-4 h-4 text-blue-600" />
              </div>
              <p className="text-2xl font-black text-blue-950 mt-1">38ms</p>
              <p className="text-[11px] text-blue-700 font-medium mt-1">Gorakhpur / Delhi CDN node</p>
            </div>

            <div className="p-4 rounded-2xl border border-emerald-100 bg-emerald-50/60">
              <div className="flex items-center justify-between">
                <span className="text-xs text-emerald-800 font-bold uppercase tracking-wider">Conversion Lift</span>
                <Zap className="w-4 h-4 text-emerald-600" />
              </div>
              <p className="text-2xl font-black text-emerald-950 mt-1">+180%</p>
              <p className="text-[11px] text-emerald-700 font-medium mt-1">Avg client ROI in 60 days</p>
            </div>
          </div>

          {/* Security Badge */}
          <div className="p-3.5 rounded-2xl border border-slate-200 bg-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">Zero-Plugin Next.js Architecture</p>
                <p className="text-[11px] text-slate-600">Enterprise DDoS shield & Row-Level Security</p>
              </div>
            </div>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
              SSL A+
            </span>
          </div>
        </div>
      )}

      {/* Tab 2: AI Agent Customer Support Simulator */}
      {activeTab === 'ai' && (
        <div className="p-6 space-y-4 animate-fade-in">
          <div className="p-3 bg-purple-50 rounded-2xl border border-purple-200 flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-purple-600 text-white flex items-center justify-center shrink-0">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-purple-950">Prism Bilingual AI Agent</p>
              <p className="text-[11px] text-purple-700">Autonomous WhatsApp & Web Lead Qualifier</p>
            </div>
          </div>

          {/* Simulated Chat Dialogue */}
          <div className="space-y-3 bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs">
            {/* User message */}
            <div className="flex justify-end">
              <div className="bg-blue-600 text-white p-3 rounded-2xl rounded-tr-none max-w-[85%] shadow-sm">
                <p className="font-medium">
                  "Kya aap Gorakhpur me e-commerce website banate hain with UPI & WhatsApp ordering?"
                </p>
                <span className="text-[9px] text-blue-200 block text-right mt-1">10:42 AM</span>
              </div>
            </div>

            {/* AI Agent Reply */}
            <div className="flex justify-start">
              <div className="bg-white text-slate-800 p-3 rounded-2xl rounded-tl-none border border-slate-200 max-w-[88%] shadow-sm space-y-2">
                <p className="font-semibold text-slate-900">
                  "Haan bilkul! Hum Next.js 15 par ultra-fast online stores banate hain jisme PhonePe/GPay UPI payments aur automated WhatsApp order dispatch shamil hota hai. 5-7 din me delivery!"
                </p>
                <div className="pt-1 flex flex-wrap gap-1.5">
                  <span className="text-[10px] font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
                    ✓ Verified Catalog Synced
                  </span>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    ✓ 0% Commission
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-1">
            <Link
              href="/contact?type=project"
              className="w-full py-2.5 px-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm transition"
            >
              <span>Test AI Workflow for Your Business</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}

      {/* Tab 3: Tech Stack Blueprint */}
      {activeTab === 'stack' && (
        <div className="p-6 space-y-4 animate-fade-in">
          <div className="space-y-2.5">
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between text-xs">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
                <span className="font-bold text-slate-900">Next.js 15 App Router</span>
              </div>
              <span className="text-slate-600 text-[11px] font-mono">React Server Components</span>
            </div>

            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between text-xs">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-600"></span>
                <span className="font-bold text-slate-900">Tailwind CSS 3.4</span>
              </div>
              <span className="text-slate-600 text-[11px] font-mono">Zero Runtime CSS Overhead</span>
            </div>

            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between text-xs">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
                <span className="font-bold text-slate-900">PostgreSQL + Supabase</span>
              </div>
              <span className="text-slate-600 text-[11px] font-mono">Row-Level Security & PgBouncer</span>
            </div>

            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between text-xs">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-600"></span>
                <span className="font-bold text-slate-900">Edge Network Deployment</span>
              </div>
              <span className="text-slate-600 text-[11px] font-mono">Global CDN Anycast Routing</span>
            </div>
          </div>

          <div className="pt-2">
            <Link
              href="/services"
              className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm transition"
            >
              <span>Explore Full Architecture</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}

      {/* Console Bottom Status Footer */}
      <div className="px-5 py-3 border-t border-slate-100 bg-slate-50/80 flex items-center justify-between text-[11px] text-slate-600">
        <span className="flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
          100% Client Source Code Ownership
        </span>
        <span className="font-mono text-slate-500">HTTP/3 QUIC</span>
      </div>
    </div>
  );
}
