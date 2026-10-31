'use client';

import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';

export function MobileBottomCtaBar() {
  return (
    <aside 
      aria-label="Quick Mobile Contact Actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] px-4 py-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom,0px))]"
    >
      <div className="max-w-md mx-auto grid grid-cols-2 gap-3">
        {/* Direct Call Button */}
        <a
          href="tel:+918601825502"
          className="flex items-center justify-center gap-2 min-h-[48px] px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold shadow-sm active:scale-95 transition"
          aria-label="Direct Phone Call to Prism Web Studio"
        >
          <Phone className="w-4 h-4 text-blue-400 shrink-0" />
          <span>Call Now</span>
        </a>

        {/* WhatsApp Instant Consultation Button */}
        <a
          href="https://wa.me/918601825502?text=Hello%20Prism%20Web%20Studio,%20I%20am%20interested%20in%20a%20website%20consultation"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 min-h-[48px] px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-sm active:scale-95 transition"
          aria-label="Chat with Prism Web Studio on WhatsApp"
        >
          <MessageSquare className="w-4 h-4 shrink-0" />
          <span>WhatsApp</span>
        </a>
      </div>
    </aside>
  );
}

export default MobileBottomCtaBar;
