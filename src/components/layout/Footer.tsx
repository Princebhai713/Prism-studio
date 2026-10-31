'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Layers, ChevronDown } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [openSection, setOpenSection] = useState<string | null>('solutions');

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const footerSections = [
    {
      id: 'agency',
      title: 'Agency',
      links: [
        { name: 'About Prism', href: '/about' },
        { name: 'Our Portfolio', href: '/portfolio' },
        { name: 'Client Testimonials', href: '/testimonials' },
        { name: 'Insights Blog', href: '/blog' },
      ],
    },
    {
      id: 'solutions',
      title: 'Solutions',
      links: [
        { name: 'Web Development', href: '/services' },
        { name: 'AI Automation', href: '/services' },
        { name: 'UI/UX Design', href: '/services' },
        { name: 'System Maintenance', href: '/services' },
      ],
    },
    {
      id: 'connect',
      title: 'Connect',
      links: [
        { name: 'Start a Project', href: '/contact?type=project' },
        { name: 'Free Consultation', href: '/contact?type=consultation' },
        { name: 'Book a Discovery Call', href: '/contact?type=call' },
        { name: 'Help Center (FAQ)', href: '/faqs' },
      ],
    },
    {
      id: 'legal',
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cookie Protocol', href: '/privacy#cookies' },
      ],
    },
  ];

  return (
    <footer className="bg-slate-900 text-white pt-16 md:pt-20 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Brand Block (Both Mobile & Desktop) */}
        <div className="pb-8 md:pb-12 border-b border-slate-800 md:hidden space-y-4">
          <Link href="/" className="inline-flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black text-base shadow">
              <Layers className="w-5 h-5 text-white" />
            </div>
            <span className="font-extrabold text-xl tracking-tight text-white">Prism Studio</span>
          </Link>
          <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
            Crafting high-performance digital systems and AI solutions for ambitious businesses in Gorakhpur and worldwide.
          </p>
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-950/70 px-3 py-1 rounded-full border border-emerald-800/60">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Available for New Projects
            </span>
          </div>
        </div>

        {/* Mobile Accordion Navigation (Eliminates claustrophobic long stack) */}
        <div className="md:hidden divide-y divide-slate-800 border-b border-slate-800 mb-8">
          {footerSections.map((sec) => {
            const isOpen = openSection === sec.id;
            return (
              <div key={sec.id} className="py-1">
                <button
                  type="button"
                  onClick={() => toggleSection(sec.id)}
                  className="w-full py-3.5 flex items-center justify-between text-left font-bold text-sm text-slate-200 min-h-[48px]"
                  aria-expanded={isOpen}
                >
                  <span className="uppercase tracking-wider text-xs">{sec.title}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-blue-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <ul className="pb-3 space-y-1 pl-1">
                    {sec.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="flex items-center min-h-[44px] py-2 text-xs font-medium text-slate-300 hover:text-white transition"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>

        {/* Desktop 4-Column Grid View */}
        <div className="hidden md:grid md:grid-cols-12 gap-12 pb-16 border-b border-slate-800">
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black text-base shadow">
                <Layers className="w-5 h-5 text-white" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">Prism Studio</span>
            </Link>
            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              "Prism Studio - Crafting high-performance digital empires through expert engineering and AI-driven design."
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-950/70 px-3 py-1 rounded-full border border-emerald-800/60">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Available for Q4 Projects
              </span>
            </div>
          </div>

          {/* Col 1: Agency */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Agency</h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><Link href="/about" className="hover:text-white transition py-1 block">About Prism</Link></li>
              <li><Link href="/portfolio" className="hover:text-white transition py-1 block">Our Portfolio</Link></li>
              <li><Link href="/testimonials" className="hover:text-white transition py-1 block">Client Testimonials</Link></li>
              <li><Link href="/blog" className="hover:text-white transition py-1 block">Insights Blog</Link></li>
            </ul>
          </div>

          {/* Col 2: Solutions */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Solutions</h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><Link href="/services" className="hover:text-white transition py-1 block">Web Development</Link></li>
              <li><Link href="/services" className="hover:text-white transition py-1 block">AI Automation</Link></li>
              <li><Link href="/services" className="hover:text-white transition py-1 block">UI/UX Design</Link></li>
              <li><Link href="/services" className="hover:text-white transition py-1 block">System Maintenance</Link></li>
            </ul>
          </div>

          {/* Col 3: Connect */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Connect</h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><Link href="/contact?type=project" className="hover:text-white transition py-1 block">Start a Project</Link></li>
              <li><Link href="/contact?type=consultation" className="hover:text-white transition py-1 block">Free Consultation</Link></li>
              <li><Link href="/contact?type=call" className="hover:text-white transition py-1 block">Book a Discovery Call</Link></li>
              <li><Link href="/faqs" className="hover:text-white transition py-1 block">Help Center (FAQ)</Link></li>
            </ul>
          </div>

          {/* Col 4: Legal */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><Link href="/privacy" className="hover:text-white transition py-1 block">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition py-1 block">Terms of Service</Link></li>
              <li><Link href="/privacy#cookies" className="hover:text-white transition py-1 block">Cookie Protocol</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact Strip with Rich Visual Depth & Elevation */}
        <div className="my-8 md:my-10 p-5 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-800/90 via-slate-800/60 to-slate-800/90 border border-slate-700/80 shadow-2xl shadow-black/40 backdrop-blur-md grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-200">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shadow-sm shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="text-slate-400 font-semibold text-[11px] uppercase tracking-wider">Official Email</p>
              <a href="mailto:business@mintx.online" className="font-bold text-white hover:text-blue-400 transition text-sm min-h-[44px] inline-flex items-center">
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
              <a href="tel:+918601825502" className="font-bold text-white hover:text-emerald-400 transition text-sm min-h-[44px] inline-flex items-center">
                +91 86018 25502
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400 shadow-sm shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-slate-400 font-semibold text-[11px] uppercase tracking-wider">Gorakhpur Studio HQ</p>
              <p className="font-bold text-white text-sm">Civil Lines, Golghar, Gorakhpur, UP 273001</p>
            </div>
          </div>
        </div>

        {/* Hyperlocal Gorakhpur SEO Links Strip */}
        <div className="py-6 border-b border-slate-800 flex flex-wrap items-center justify-center md:justify-between gap-y-2.5 gap-x-4 text-xs text-slate-300">
          <span className="font-bold text-slate-200">Gorakhpur Services:</span>
          <Link href="/web-development-company-in-gorakhpur" className="hover:text-blue-400 transition min-h-[44px] inline-flex items-center">
            Web Development Company in Gorakhpur
          </Link>
          <span className="text-slate-700 hidden sm:inline">•</span>
          <Link href="/website-designer-in-gorakhpur" className="hover:text-purple-400 transition min-h-[44px] inline-flex items-center">
            Website Designer in Gorakhpur
          </Link>
          <span className="text-slate-700 hidden sm:inline">•</span>
          <Link href="/seo-services-in-gorakhpur" className="hover:text-emerald-400 transition min-h-[44px] inline-flex items-center">
            SEO Services in Gorakhpur
          </Link>
          <span className="text-slate-700 hidden sm:inline">•</span>
          <Link href="/blog/gorakhpur-website-cost-guide" className="hover:text-slate-100 transition min-h-[44px] inline-flex items-center">
            Gorakhpur Website Cost Guide (2026)
          </Link>
        </div>

        {/* Copyright & Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} Prism Web Studio. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-slate-200 transition min-h-[44px] inline-flex items-center">Privacy Policy</Link>
            <span>|</span>
            <Link href="/terms" className="hover:text-slate-200 transition min-h-[44px] inline-flex items-center">Terms of Use</Link>
          </div>
          <p className="text-slate-400 font-mono">Digital Excellence v3.0.4</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
