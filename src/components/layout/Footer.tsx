import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Layers } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white pt-20 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* 4 Columns Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-slate-800">
          
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black text-base shadow">
                <Layers className="w-5 h-5 text-white" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">Prism Studio</span>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              "Prism Studio - Crafting high-performance digital empires through expert engineering and AI-driven design."
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-800/50">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Available for Q4 Projects
              </span>
            </div>
          </div>

          {/* Col 1: Agency */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Agency</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="/about" className="hover:text-white transition">About Prism</Link></li>
              <li><Link href="/portfolio" className="hover:text-white transition">Our Portfolio</Link></li>
              <li><Link href="/testimonials" className="hover:text-white transition">Client Testimonials</Link></li>
              <li><Link href="/blog" className="hover:text-white transition">Insights Blog</Link></li>
            </ul>
          </div>

          {/* Col 2: Solutions */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Solutions</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="/services" className="hover:text-white transition">Web Development</Link></li>
              <li><Link href="/services" className="hover:text-white transition">AI Automation</Link></li>
              <li><Link href="/services" className="hover:text-white transition">UI/UX Design</Link></li>
              <li><Link href="/services" className="hover:text-white transition">System Maintenance</Link></li>
            </ul>
          </div>

          {/* Col 3: Connect */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Connect</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="/contact?type=project" className="hover:text-white transition">Start a Project</Link></li>
              <li><Link href="/contact?type=consultation" className="hover:text-white transition">Free Consultation</Link></li>
              <li><Link href="/contact?type=call" className="hover:text-white transition">Book a Discovery Call</Link></li>
              <li><Link href="/faqs" className="hover:text-white transition">Help Center (FAQ)</Link></li>
            </ul>
          </div>

          {/* Col 4: Legal */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition">Terms of Service</Link></li>
              <li><Link href="/privacy#cookies" className="hover:text-white transition">Cookie Protocol</Link></li>
            </ul>
          </div>

        </div>

        {/* Contact Strip with Rich Visual Depth & Elevation */}
        <div className="my-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-800/90 via-slate-800/60 to-slate-800/90 border border-slate-700/80 shadow-2xl shadow-black/40 backdrop-blur-md grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-300">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shadow-sm shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="text-slate-400 font-semibold text-[11px] uppercase tracking-wider">Official Email</p>
              <a href="mailto:business@mintx.online" className="font-bold text-white hover:text-blue-400 transition text-sm">
                business@mintx.online
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-sm shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-slate-400 font-semibold text-[11px] uppercase tracking-wider">Direct Studio Line</p>
              <a href="tel:+918601825502" className="font-bold text-white hover:text-emerald-400 transition text-sm">
                +91 86018 25502
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400 shadow-sm shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-slate-400 font-semibold text-[11px] uppercase tracking-wider">Gorakhpur & Purvanchal Hub</p>
              <p className="font-bold text-white text-sm">Gorakhpur & Kushinagar, UP, India</p>
            </div>
          </div>
        </div>

        {/* Hyperlocal Gorakhpur SEO Links Strip */}
        <div className="py-6 border-b border-slate-800 flex flex-wrap items-center justify-center md:justify-between gap-y-2 gap-x-4 text-[11px] text-slate-400">
          <span className="font-bold text-slate-300">Gorakhpur Services:</span>
          <Link href="/web-development-company-in-gorakhpur" className="hover:text-blue-400 transition">
            Web Development Company in Gorakhpur
          </Link>
          <span className="text-slate-700 hidden sm:inline">•</span>
          <Link href="/website-designer-in-gorakhpur" className="hover:text-purple-400 transition">
            Website Designer in Gorakhpur
          </Link>
          <span className="text-slate-700 hidden sm:inline">•</span>
          <Link href="/seo-services-in-gorakhpur" className="hover:text-emerald-400 transition">
            SEO Services in Gorakhpur
          </Link>
          <span className="text-slate-700 hidden sm:inline">•</span>
          <Link href="/blog/gorakhpur-website-cost-guide" className="hover:text-slate-200 transition">
            Gorakhpur Website Cost Guide (2026)
          </Link>
        </div>

        {/* Copyright & Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} Prism Web Studio. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-slate-300 transition">Privacy Policy</Link>
            <span>|</span>
            <Link href="/terms" className="hover:text-slate-300 transition">Terms of Use</Link>
          </div>
          <p className="text-slate-600 font-mono">Digital Excellence v3.0.4</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
