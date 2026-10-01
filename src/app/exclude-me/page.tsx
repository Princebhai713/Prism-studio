'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ShieldX, CheckCircle2, AlertTriangle } from 'lucide-react';

export default function ExcludeMePage() {
  const [isExcluded, setIsExcluded] = useState(false);

  useEffect(() => {
    setIsExcluded(document.cookie.includes('prism_exclude_tracking=true'));
  }, []);

  const handleExclusion = () => {
    // Set a cookie that expires in 10 years
    document.cookie = "prism_exclude_tracking=true; path=/; max-age=315360000; SameSite=Lax";
    setIsExcluded(true);
  };

  const clearExclusion = () => {
    document.cookie = "prism_exclude_tracking=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    setIsExcluded(false);
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="pt-32 pb-16 px-6 flex flex-col items-center justify-center text-center">
        <div className="max-w-xl bg-card border border-slate-300 p-12 rounded-[2.5rem] shadow-2xl space-y-8">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
            {isExcluded ? <ShieldX className="text-primary" size={40} /> : <AlertTriangle className="text-amber-500" size={40} />}
          </div>
          
          <div className="space-y-4">
            <h1 className="text-3xl font-bold font-headline">Internal Team Access</h1>
            <p className="text-slate-600 leading-relaxed">
              If you are a team member, click the button below to stop your device from being tracked in the analytics database.
            </p>
          </div>

          {isExcluded ? (
            <div className="space-y-6">
              <div className="flex items-center justify-center gap-2 text-emerald-500 font-bold">
                <CheckCircle2 size={20} /> Tracking is DISABLED for this device
              </div>
              <Button variant="outline" onClick={clearExclusion} className="rounded-full border-slate-300 text-xs">
                Enable Tracking Again
              </Button>
            </div>
          ) : (
            <Button onClick={handleExclusion} className="bg-primary hover:bg-primary/90 rounded-full px-10 h-14 font-bold w-full text-lg">
              Block My Tracking
            </Button>
          )}
          
          <p className="text-[10px] text-slate-500 italic">
            This settings uses a browser cookie. If you clear your browser data, you will need to revisit this page.
          </p>
        </div>
      </section>
    </main>
  );
}
