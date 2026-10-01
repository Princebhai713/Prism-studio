'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, Layers, Phone, MessageSquare, ExternalLink, Sparkles } from 'lucide-react';

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/25 group-hover:scale-105 group-hover:bg-blue-700 transition duration-200">
              <Layers className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-slate-900 group-hover:text-blue-600 transition">
                Prism Studio
              </span>
              <span className="text-[10px] tracking-widest uppercase font-bold text-blue-600 -mt-1">
                Digital Engineering
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-[15px] min-h-[44px] inline-flex items-center relative transition duration-200 ${
                    isActive
                      ? 'font-bold text-blue-600'
                      : 'font-semibold text-slate-700 hover:text-blue-600'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-2 left-0 right-0 h-0.5 bg-blue-600 rounded-full animate-fade-in" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Direct Actions (Phone, WhatsApp, Project CTA) */}
          <div className="hidden md:flex items-center gap-3">
            {/* Quick Call Link */}
            <a
              href="tel:+918601825502"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-slate-700 bg-slate-100/80 hover:bg-blue-50 hover:text-blue-700 border border-slate-200 rounded-xl transition min-h-[44px]"
              title="Call Prism Studio directly"
            >
              <Phone className="w-3.5 h-3.5 text-blue-600" />
              <span>+91 86018 25502</span>
            </a>

            {/* WhatsApp Quick Link */}
            <a
              href="https://wa.me/918601825502?text=Hello%20Prism%20Web%20Studio,%20I%20am%20interested%20in%20discussing%20a%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl transition min-h-[44px]"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span className="hidden xl:inline">WhatsApp</span>
            </a>

            {/* Start Project CTA Button with Shimmer */}
            <Link
              href="/contact?type=project"
              className="relative inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-95 rounded-xl shadow-md shadow-blue-500/20 hover:shadow-lg transition overflow-hidden group min-h-[44px]"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <span>Start Project</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
            </Link>
          </div>

          {/* Mobile Direct Action + Toggle Bar */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Mobile Call Icon CTA */}
            <a
              href="tel:+918601825502"
              className="w-11 h-11 flex items-center justify-center rounded-xl bg-blue-50 text-blue-700 border border-blue-200 active:scale-95 transition"
              aria-label="Direct Phone Call"
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* Mobile WhatsApp Icon CTA */}
            <a
              href="https://wa.me/918601825502?text=Hello%20Prism%20Web%20Studio,%20I%20want%20to%20discuss%20a%20website"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 active:scale-95 transition"
              aria-label="Direct WhatsApp Chat"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            {/* Hamburger Toggle Button (44px min target) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-11 h-11 flex items-center justify-center rounded-xl bg-slate-100 text-slate-800 hover:bg-slate-200 active:scale-95 transition"
              aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-slate-900" /> : <Menu className="w-6 h-6 text-slate-900" />}
            </button>
          </div>

        </div>
      </header>

      {/* Full-Width Mobile Slide Drawer with Backdrop */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          {/* Backdrop Blur Overlay */}
          <div 
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity animate-fade-in"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Container (100% full width on mobile, no right-side gap) */}
          <div className="relative w-full bg-white shadow-2xl flex flex-col justify-between overflow-y-auto max-h-[100dvh] z-10">
            {/* Drawer Header */}
            <div className="p-6 border-b border-slate-200 flex items-center justify-between bg-slate-50/80">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md">
                  <Layers className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="font-extrabold text-lg text-slate-900">Prism Studio</span>
                  <span className="text-[10px] uppercase font-bold text-blue-600 -mt-1">Gorakhpur & Purvanchal Hub</span>
                </div>
              </Link>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-11 h-11 flex items-center justify-center rounded-xl bg-slate-200/80 text-slate-800 hover:bg-slate-300 transition"
                aria-label="Close Navigation"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Links with High Contrast & min 48px tap targets */}
            <div className="p-6 space-y-2 flex-1">
              <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                Main Navigation
              </div>
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between min-h-[48px] px-4 py-3 rounded-xl text-base font-bold transition ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                        : 'text-slate-800 hover:bg-slate-100 hover:text-blue-600'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ArrowRight className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                  </Link>
                );
              })}

              {/* Local Hyperlocal Gorakhpur Hub Links */}
              <div className="pt-4 mt-4 border-t border-slate-200">
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Gorakhpur Dedicated Services
                </div>
                <div className="space-y-1.5">
                  <Link
                    href="/web-development-company-in-gorakhpur"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-4 py-2.5 rounded-lg text-xs font-bold text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition"
                  >
                    <span>Web Development in Gorakhpur</span>
                    <span className="text-[10px] text-blue-600 bg-blue-50 px-2 py-0.5 rounded font-mono">₹14,999+</span>
                  </Link>
                  <Link
                    href="/website-designer-in-gorakhpur"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-4 py-2.5 rounded-lg text-xs font-bold text-slate-700 hover:bg-purple-50 hover:text-purple-700 transition"
                  >
                    <span>Website Designer in Gorakhpur</span>
                    <span className="text-[10px] text-purple-600 bg-purple-50 px-2 py-0.5 rounded font-mono">UI/UX</span>
                  </Link>
                  <Link
                    href="/seo-services-in-gorakhpur"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-4 py-2.5 rounded-lg text-xs font-bold text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition"
                  >
                    <span>SEO Services in Gorakhpur</span>
                    <span className="text-[10px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded font-mono">GMB #1</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Mobile Drawer Bottom Contact Actions */}
            <div className="p-6 bg-slate-50 border-t border-slate-200 space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="tel:+918601825502"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white border border-slate-200 text-slate-800 text-xs font-bold shadow-sm active:scale-95 transition"
                >
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span>Call Studio</span>
                </a>
                <a
                  href="https://wa.me/918601825502?text=Hello%20Prism%20Studio,%20I%20want%20to%20start%20a%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 text-white text-xs font-bold shadow-sm active:scale-95 transition"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <Link
                href="/contact?type=project"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-blue-600 text-white text-sm font-bold shadow-md shadow-blue-500/20 active:scale-95 transition"
              >
                <span>Start Your Project Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
