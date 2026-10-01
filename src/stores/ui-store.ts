
"use client";

import { useState, useEffect } from 'react';

export type AppSettings = {
  showSocialProof: boolean;
  heroBadge: string;
  heroTitle: string;
  heroText: string;
};

const DEFAULT_SETTINGS: AppSettings = {
  showSocialProof: true,
  heroBadge: "Empowering Digital Innovation",
  heroTitle: "Prism Web Studio: Crafting Fast, Secure & AI-Powered Digital Empires.",
  heroText: "Accelerate your business growth with cutting-edge performance, modern design, and seamless AI integration.",
};

export function useAppSettings() {
  const [settings, setSettings] = useState<AppSettings>(DEFAULT_SETTINGS);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // In a real app, this would fetch from the DB table 'site_settings'
    // For now we persist in localStorage for instant feedback
    const stored = localStorage.getItem('prism_app_settings');
    if (stored) {
      try {
        setSettings(JSON.parse(stored));
      } catch (e) {
        console.error("Failed to parse settings", e);
      }
    }
    setIsLoaded(true);
  }, []);

  const updateSettings = (newSettings: Partial<AppSettings>) => {
    const updated = { ...settings, ...newSettings };
    setSettings(updated);
    localStorage.setItem('prism_app_settings', JSON.stringify(updated));
    // Optional: Call a server action here to sync with the Postgres DB
  };

  return { settings, updateSettings, isLoaded };
}
