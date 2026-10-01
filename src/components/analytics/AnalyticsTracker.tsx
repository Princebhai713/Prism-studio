'use client';

import { useEffect, useCallback, useRef, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
import { 
  trackVisitor, 
  trackSession, 
  trackPageView, 
  trackEvent, 
  trackCTA, 
  trackFormEvent 
} from '@/features/analytics/actions/analytics';
import { generateFingerprint } from '@/lib/fingerprint';

export function AnalyticsTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const scrollDepthRef = useRef(0);
  const startTimeRef = useRef(Date.now());
  const rageClickRef = useRef({ count: 0, lastTarget: null as HTMLElement | null, lastTime: 0 });
  const initializationRef = useRef(false);
  const [isSessionReady, setIsSessionReady] = useState(false);
  
  const getOrSetId = useCallback((key: string) => {
    if (typeof window === 'undefined') return '';
    let id = localStorage.getItem(key);
    if (!id) {
      id = uuidv4();
      localStorage.setItem(key, id);
    }
    return id;
  }, []);

  const getDetailedInfo = async () => {
    if (typeof window === 'undefined') return {};
    const ua = navigator.userAgent;
    let geo = { city: 'unknown', country: 'unknown' };
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3000);
      const res = await fetch('https://ipapi.co/json/', { signal: controller.signal });
      clearTimeout(timeoutId);
      if (res.ok) {
        const data = await res.json();
        geo = { city: data.city || 'unknown', country: data.country_name || 'unknown' };
      }
    } catch (e) {}

    return {
      device: {
        type: /mobile/i.test(ua) ? 'mobile' : 'desktop',
        platform: navigator.platform,
      },
      browser: { ua, language: navigator.language },
      geo
    };
  };

  useEffect(() => {
    // 🛑 EXCLUSION CHECK
    if (typeof window !== 'undefined' && document.cookie.includes('prism_exclude_tracking=true')) {
      console.log('[Analytics] Tracking disabled for team member.');
      return;
    }

    if (initializationRef.current) {
      if (sessionStorage.getItem('prism_session_id')) {
        setIsSessionReady(true);
      }
      return;
    }
    initializationRef.current = true;

    async function initTracking() {
      // Check if session already exists
      let sessionId = sessionStorage.getItem('prism_session_id');
      if (sessionId) {
        setIsSessionReady(true);
        // We still need to bind events
      } else {
        const visitorId = getOrSetId('prism_visitor_id');
        sessionId = uuidv4(); 
        sessionStorage.setItem('prism_session_id', sessionId);
        sessionStorage.setItem('prism_session_start', Date.now().toString());

        const fingerprint = await generateFingerprint();
        localStorage.setItem('prism_fingerprint', fingerprint);

        const urlRef = searchParams.get('ref');
        if (urlRef) localStorage.setItem('prism_referrer_id', urlRef);

        const details = await getDetailedInfo();

        await trackVisitor({ 
          visitorId, 
          fingerprint, 
          details,
          referrerId: localStorage.getItem('prism_referrer_id')
        });

        await trackSession({ 
          sessionId, 
          visitorId, 
          info: {
            landingPage: window.location.pathname,
            referrer: document.referrer || 'direct',
            utm: {
              source: searchParams.get('utm_source'),
              medium: searchParams.get('utm_medium'),
              campaign: searchParams.get('utm_campaign'),
            },
            clickIds: {
              gclid: searchParams.get('gclid'),
              fbclid: searchParams.get('fbclid'),
            }
          } 
        });
        
        setIsSessionReady(true);
      }

      const handleScroll = () => {
        const scrollPercent = Math.round((window.scrollY + window.innerHeight) / document.documentElement.scrollHeight * 100);
        if (scrollPercent > scrollDepthRef.current) scrollDepthRef.current = scrollPercent;
      };

      const handleClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const clickable = target.closest('button, a');
        
        const now = Date.now();
        if (rageClickRef.current.lastTarget === target && (now - rageClickRef.current.lastTime < 500)) {
          rageClickRef.current.count++;
          if (rageClickRef.current.count >= 3 && sessionId) {
            trackEvent({ sessionId, type: 'rage_click', label: target.tagName, path: window.location.pathname });
            rageClickRef.current.count = 0;
          }
        } else {
          rageClickRef.current.count = 1;
          rageClickRef.current.lastTarget = target;
        }
        rageClickRef.current.lastTime = now;

        if (clickable && sessionId) {
          const label = clickable.textContent?.trim().substring(0, 50) || 'unlabeled';
          const targetUrl = (clickable as HTMLAnchorElement).href || '';
          const elementId = clickable.id || '';
          
          sessionStorage.setItem('prism_last_cta', label);

          trackCTA({ 
            sessionId, 
            ctaName: label, 
            page: window.location.pathname,
            targetUrl,
            elementId
          });
        }
      };

      window.addEventListener('scroll', handleScroll);
      document.addEventListener('click', handleClick);
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
        document.removeEventListener('click', handleClick);
      };
    }

    initTracking();
  }, [getOrSetId, searchParams]);

  useEffect(() => {
    if (!isSessionReady) return;

    // 🛑 EXCLUSION CHECK
    if (typeof window !== 'undefined' && document.cookie.includes('prism_exclude_tracking=true')) return;

    const sessionId = sessionStorage.getItem('prism_session_id');
    if (!sessionId) return;

    const trackCurrentPage = async () => {
      const timeSpent = Math.round((Date.now() - startTimeRef.current) / 1000);
      await trackPageView({
        sessionId,
        path: pathname,
        title: document.title,
        metrics: {
          timeSpent,
          scrollDepth: scrollDepthRef.current,
          loadTime: window.performance.now(),
        },
        metadata: {
          referrer: document.referrer
        }
      });
      startTimeRef.current = Date.now();
      scrollDepthRef.current = 0;
    };

    trackCurrentPage();
  }, [pathname, isSessionReady]);

  return null;
}
