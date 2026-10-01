"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { submitContactForm } from "@/features/contact/actions/contact";

function ContactFormInner() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [intent, setIntent] = useState("Start Your Project");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [projectType, setProjectType] = useState("Business Website");
  const [budget, setBudget] = useState("₹25,000 - ₹50,000 (Standard)");
  const [description, setDescription] = useState("");
  const [hasPromo, setHasPromo] = useState(true);
  const [promoCode, setPromoCode] = useState("PRISM10");
  const [promoApplied, setPromoApplied] = useState(true);
  const [promoMessage, setPromoMessage] = useState(
    "Applied: PRISM10 (10% discount) - You saved 10% on your first service!"
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const typeParam = searchParams.get("type");
    if (typeParam === "project") setIntent("Start Your Project");
    else if (typeParam === "consultation") setIntent("Free Consultation");
    else if (typeParam === "call") setIntent("Book a Call");
    else if (typeParam === "general") setIntent("General Support");
  }, [searchParams]);

  const handleApplyPromo = (e: React.MouseEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === "PRISM10") {
      setPromoApplied(true);
      setPromoMessage(
        "Applied: PRISM10 (10% discount) - You saved 10% on your first service!"
      );
    } else {
      setPromoApplied(false);
      setPromoMessage("Invalid promo code. Please try PRISM10.");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const sessionId = typeof window !== 'undefined' ? sessionStorage.getItem('prism_session_id') : null;
      const visitorId = typeof window !== 'undefined' ? localStorage.getItem('prism_visitor_id') : null;
      const fingerprint = typeof window !== 'undefined' ? localStorage.getItem('prism_fingerprint') : null;
      const sessionStart = typeof window !== 'undefined' ? sessionStorage.getItem('prism_session_start') : null;
      const referrerId = typeof window !== 'undefined' ? localStorage.getItem('prism_referrer_id') : null;

      const payload = {
        fullName,
        email,
        phone,
        intent,
        projectType,
        budgetRange: budget,
        description,
        applied_promo_code: hasPromo && promoApplied ? promoCode : null,
        sessionId,
        visitorId,
        fingerprint,
        sessionStart: sessionStart ? parseInt(sessionStart) : Date.now(),
        referrerId
      };

      const res = await submitContactForm(payload, intent === "Start Your Project" ? "project" : intent === "Free Consultation" ? "consultation" : intent === "Book a Call" ? "call" : "service");

      if (res && res.success) {
        router.push("/contact/thanks");
      } else {
        setErrorMessage(res?.error || "Submission failed. Please try again.");
      }
    } catch (err: any) {
      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-white text-slate-900">
      {/* HERO SECTION */}
      <section className="pt-16 pb-14 bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            Start Your Journey
          </h1>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Choose how you'd like to connect and we'll guide you with the right solution.
          </p>
        </div>
      </section>

      {/* INTERACTIVE CONTACT FORM */}
      <section className="py-16 md:py-20 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xl shadow-slate-100/60 space-y-8"
          >
            {/* Dropdown: What would you like to do? */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                What would you like to do?*
              </label>
              <select
                value={intent}
                onChange={(e) => setIntent(e.target.value)}
                className="w-full px-4 py-3 text-sm font-semibold border border-slate-300 rounded-xl focus:outline-none focus:border-blue-600 bg-white"
              >
                <option value="Start Your Project">Start Your Project</option>
                <option value="Free Consultation">Free Consultation</option>
                <option value="Book a Call">Book a Call</option>
                <option value="General Support">General Support</option>
                <option value="Ask a Custom Question">Ask a Custom Question</option>
              </select>
            </div>

            {/* Primary Form Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Full Name*
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-3 text-sm border border-slate-300 rounded-xl focus:outline-none focus:border-blue-600 bg-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Email Address*
                </label>
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 text-sm border border-slate-300 rounded-xl focus:outline-none focus:border-blue-600 bg-white"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Phone Number*
              </label>
              <div className="flex gap-2">
                <span className="inline-flex items-center px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 text-sm font-bold text-slate-700 shrink-0">
                  +91 (India)
                </span>
                <input
                  type="tel"
                  required
                  placeholder="86018 25502"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="flex-1 px-4 py-3 text-sm border border-slate-300 rounded-xl focus:outline-none focus:border-blue-600 bg-white"
                />
              </div>
            </div>

            {/* Project Specific Fields */}
            {(intent === "Start Your Project" || intent === "Free Consultation") && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 bg-slate-50 rounded-2xl border border-slate-200">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Project Type*
                  </label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full px-4 py-2.5 text-xs font-semibold border border-slate-300 rounded-lg focus:outline-none focus:border-blue-600 bg-white"
                  >
                    <option value="Business Website">Business Website</option>
                    <option value="SaaS / Web App">SaaS / Web App</option>
                    <option value="E-commerce">E-commerce</option>
                    <option value="AI Automation">AI Automation</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Budget Range*
                  </label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full px-4 py-2.5 text-xs font-semibold border border-slate-300 rounded-lg focus:outline-none focus:border-blue-600 bg-white"
                  >
                    <option value="₹25,000 - ₹50,000 (Standard)">
                      ₹25,000 - ₹50,000 (Standard)
                    </option>
                    <option value="₹50,000 - ₹1,50,000 (Growth)">
                      ₹50,000 - ₹1,50,000 (Growth)
                    </option>
                    <option value="₹1,50,000+ (Enterprise)">
                      ₹1,50,000+ (Enterprise)
                    </option>
                  </select>
                </div>
              </div>
            )}

            {/* Description / Message */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Project Description / Message*
              </label>
              <textarea
                rows={4}
                required
                placeholder="Tell us more about your requirements or questions..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-4 py-3 text-sm border border-slate-300 rounded-xl focus:outline-none focus:border-blue-600 bg-white"
              />
            </div>

            {/* Referral / Promo Code Section */}
            <div className="p-5 bg-blue-50/50 rounded-2xl border border-blue-200 space-y-3">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="promo"
                  checked={hasPromo}
                  onChange={(e) => setHasPromo(e.target.checked)}
                  className="w-4 h-4 text-blue-600 rounded border-slate-300 cursor-pointer"
                />
                <label
                  htmlFor="promo"
                  className="text-xs font-semibold text-slate-800 cursor-pointer"
                >
                  I have a referral or promo code
                </label>
              </div>

              {hasPromo && (
                <div className="space-y-2 pt-1">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="e.g. PRISM10"
                      className="px-3 py-2 text-xs font-mono font-bold uppercase border border-slate-300 rounded-lg bg-white w-40 focus:outline-none focus:border-blue-600"
                    />
                    <button
                      type="button"
                      onClick={handleApplyPromo}
                      className="px-4 py-2 bg-blue-600 text-white text-xs font-bold rounded-lg hover:bg-blue-700 transition"
                    >
                      Apply
                    </button>
                  </div>
                  {promoMessage && (
                    <p
                      className={`text-xs font-semibold flex items-center gap-1.5 ${
                        promoApplied ? "text-emerald-700" : "text-rose-600"
                      }`}
                    >
                      <span>{promoApplied ? "✔" : "✖"}</span> {promoMessage}
                    </p>
                  )}
                </div>
              )}
            </div>

            {errorMessage && (
              <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold">
                {errorMessage}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl shadow-md transition disabled:opacity-50"
            >
              {isSubmitting ? "Submitting Request..." : "Submit Request"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-slate-500">Loading form...</div>}>
      <ContactFormInner />
    </Suspense>
  );
}
