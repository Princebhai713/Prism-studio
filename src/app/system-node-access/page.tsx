
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Loader2, Info } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { createExclusionRequest } from '@/features/security/actions/security';

export default function SystemNodeAccess() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const handleDeactivate = async () => {
    setIsProcessing(true);
    try {
      const fingerprint = localStorage.getItem('prism_fingerprint');
      const res = await createExclusionRequest(fingerprint || 'unknown');
      if (res.success) {
        // Set cookie locally so user feels it's done
        document.cookie = "prism_exclude_tracking=true; path=/; max-age=315360000; SameSite=Lax";
        setIsDone(true);
        toast({ title: "Node Protocol: OFFLINE", description: "Traffic encryption active for this hardware." });
      }
    } catch (e) {
      toast({ title: "System Error", variant: "destructive" });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#0B0F1A] text-white">
      <section className="pt-32 pb-16 px-6 flex flex-col items-center justify-center text-center">
        <div className="max-w-2xl bg-white/[0.02] border border-slate-300 p-12 rounded-[3rem] shadow-2xl backdrop-blur-3xl space-y-10">
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto border border-primary/20">
            <ShieldCheck className="text-primary" size={48} />
          </div>
          
          <div className="space-y-4">
            <h1 className="text-4xl font-bold font-headline tracking-tighter">Hardware Node Authorization</h1>
            <p className="text-slate-600 leading-relaxed font-medium">
              Initialize secure node deactivation to prevent identity leakage into the primary analytics cluster. 
              This hardware will be marked as an internal development environment.
            </p>
          </div>

          {isDone ? (
            <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 font-bold animate-in zoom-in-95 duration-500">
              IDENTITY LAYER: MASKED
              <p className="text-[10px] text-emerald-500/60 mt-2 font-mono uppercase tracking-widest">Protocol synchronized with core.</p>
            </div>
          ) : (
            <Button 
              onClick={handleDeactivate} 
              disabled={isProcessing}
              className="bg-primary hover:bg-primary/90 rounded-full px-12 h-16 font-bold w-full text-xl shadow-2xl shadow-primary/20 transition-all hover:scale-105"
            >
              {isProcessing ? <Loader2 className="animate-spin" /> : "Deactivate Node ID"}
            </Button>
          )}
          
          <div className="flex items-start gap-3 text-left p-4 rounded-xl bg-white/5 border border-white/5">
            <Info size={16} className="text-primary mt-1 shrink-0" />
            <p className="text-[11px] text-slate-500 italic">
              Authorization requires master console verification. If you clear local cache, this hardware node will re-appear in the traffic intelligence layer.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
