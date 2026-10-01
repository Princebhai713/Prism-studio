'use server';

import { query } from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { uploadToCloudinary } from '@/lib/cloudinary';

/**
 * Dynamic Content Fetching & Writing (CMS Core).
 */

// IMAGE UPLOAD (Cloudinary)
export async function uploadFile(fileUri: string) {
  try {
    if (!fileUri) return { success: false, error: 'No data provided' };
    const result = await uploadToCloudinary(fileUri);
    return { success: true, url: result.secure_url };
  } catch (error: any) {
    console.error('Upload Action Error:', error.message);
    return { success: false, error: error.message || 'Upload failed' };
  }
}

// BLOGS
const DEFAULT_BLOGS = [
  {
    id: 101,
    slug: 'why-custom-nextjs-websites-convert',
    title: 'Why Custom Next.js Websites Convert 3x Better Than WordPress Templates',
    excerpt: 'Discover the speed, security, and conversion advantages of building custom Next.js web applications over sluggish drag-and-drop website templates.',
    category: 'Web Development',
    image_url: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=800&auto=format&fit=crop',
    published_at: '2026-09-28T10:00:00.000Z',
    author_name: 'Satyarth Maurya',
    meta_title: 'Why Custom Next.js Websites Convert 3x Better Than Templates',
    meta_description: 'Learn why fast, custom Next.js websites outperform pre-made templates in user experience, Google speed scores, and client conversions.',
    keywords: ['Next.js Development', 'Custom Web Design', 'Web Performance', 'Conversion Rate Optimization'],
    content: `# Why Custom Next.js Websites Convert 3x Better Than WordPress Templates

In today's fast-paced digital economy, your website is often the first impression a potential client has of your business. Yet millions of businesses rely on bloated, slow-loading templates built on outdated CMS architectures.

At **Prism Web Studio**, we engineer custom **Next.js and React web applications** designed for raw speed, airtight security, and maximum conversion rates. Here is why custom engineering wins every single time.

---

## 1. Sub-Second Load Speed (Core Web Vitals Domination)

Google research shows that **53% of mobile users abandon a website** if it takes longer than 3 seconds to load.

Traditional template builders load dozens of unused plugins, render-blocking scripts, and bloated CSS files. In contrast, Next.js utilizes **Server-Side Rendering (SSR)** and **Static Site Generation (SSG)** to deliver pre-rendered HTML in under 500 milliseconds.

* **95+ Google Lighthouse Performance Score**
* **Instant First Contentful Paint (FCP)**
* **Zero Layout Shift (CLS)**

---

## 2. Frictionless User Experience (UX) Designed Around Your Conversion Goal

Templates force your business to adapt to someone else's visual constraints. Custom engineering allows us to craft a **tailored user flow**:

1. **Clear Value Proposition**: Immediate clarity in the hero section.
2. **Strategic Social Proof**: Seamless client testimonials and portfolio showcases.
3. **Friction-Free Contact CTA**: One-click WhatsApp, call, and instant estimation forms.

---

## 3. Top-Tier Security & Zero Plugin Vulnerabilities

WordPress sites are target number one for automated malware bots due to third-party plugin vulnerabilities.

With custom Next.js architecture hosted on Vercel or AWS Edge infrastructure:
* There is **no database vulnerability exposed** to the frontend.
* Static edge routing prevents SQL injection and cross-site scripting (XSS).
* Automatic SSL encryption and continuous deployment pipelines keep your brand safe.

---

## Conclusion: Invest in an Enterprise Digital Asset

A custom website is not an expense—it is a **24/7 high-converting sales machine**. Ready to upgrade from slow templates? [Contact Prism Web Studio today](/contact) for a free technical consultation!`
  },
  {
    id: 102,
    slug: 'rank-number-1-google-maps-gorakhpur',
    title: 'How Businesses in Gorakhpur Can Rank #1 on Google Maps in 30 Days',
    excerpt: 'A step-by-step local SEO guide for Gorakhpur business owners to dominate local search results, claim the Google 3-Pack, and attract 10x more phone calls.',
    category: 'SEO & Local Search',
    image_url: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=800&auto=format&fit=crop',
    published_at: '2026-09-25T10:00:00.000Z',
    author_name: 'Prism SEO Team',
    meta_title: 'How Businesses in Gorakhpur Can Rank #1 on Google Maps in 30 Days',
    meta_description: 'Complete Local SEO strategy for Gorakhpur businesses to rank #1 on Google Maps 3-Pack, gain 5-star reviews, and drive local customer inquiries.',
    keywords: ['Gorakhpur Local SEO', 'Google Business Profile Gorakhpur', 'Rank #1 Google Maps', 'Gorakhpur Marketing'],
    content: `# How Businesses in Gorakhpur Can Rank #1 on Google Maps in 30 Days

When local customers in Gorakhpur search for *"Best Web Designer in Gorakhpur"*, *"Top School in Gorakhpur"*, or *"Doctor near me in Gorakhpur"*, Google shows them the **Google Maps 3-Pack** at the very top of the search results.

If your business isn't appearing in those top 3 map spots, you are losing over **70% of potential local customers** to your competitors.

Here is the exact step-by-step Local SEO blueprint we use at **Prism Web Studio** to rank local businesses #1 in Gorakhpur and Eastern UP.

---

## Step 1: Optimize Your Google Business Profile (GBP / GMB)

Your Google Business Profile is the heart of local SEO.

1. **Exact Business Title**: Use your official business name along with your primary service keyword (e.g., *Prism Web Studio - Web Design & SEO Gorakhpur*).
2. **Complete NAP Consistency**: Ensure your **Name, Address, and Phone Number** match identically across your website, Google, Justdial, and social profiles.
3. **Geo-Tagged High-Resolution Photos**: Upload photos of your office, team, and projects tagged with Gorakhpur location data.

---

## Step 2: Build a Review Engine (5-Star Google Reviews)

Google's ranking algorithm heavily weighs review velocity and keyword context:

* Ask satisfied clients to write detailed reviews containing keywords like: *"Best website maker in Gorakhpur"* or *"Top service in Gorakhpur"*.
* Reply to **every single review** within 24 hours to signal an active business profile to Google.

---

## Step 3: Implement Geo-Targeted Local Schema Markup

Add 'LocalBusiness' JSON-LD structured data to your website code:
* Explicitly declare your 'addressLocality: "Gorakhpur"', 'postalCode: "273001"', and exact latitude/longitude coordinates.
* Embed an interactive Google Map on your contact page.

---

## Step 4: Local Directories & Citations

Register your business profile with consistent NAP data on top Indian directories:
* Justdial Gorakhpur Listing
* Sulekha & Indiamart
* Indiacom & TradeIndia

---

## Need Local SEO Dominance in Gorakhpur?

At **Prism Web Studio**, we help local clinics, schools, retailers, and service providers in Gorakhpur capture top search rankings. [Book your Free Local SEO Audit today](/contact)!`
  },
  {
    id: 103,
    slug: 'react-native-vs-native-mobile-apps',
    title: 'React Native vs Native Apps: Building Cross-Platform Mobile Apps for Businesses',
    excerpt: 'Learn why fast-growing companies choose React Native for cross-platform iOS and Android apps to cut development costs by 50% without sacrificing speed.',
    category: 'App Engineering',
    image_url: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop',
    published_at: '2026-09-20T10:00:00.000Z',
    author_name: 'Satyarth Maurya',
    meta_title: 'React Native vs Native Apps: Cross-Platform Mobile App Guide',
    meta_description: 'Compare React Native vs Native Swift/Kotlin development. Understand how cross-platform apps deliver 60 FPS performance at half the cost.',
    keywords: ['React Native Development', 'Cross-Platform Mobile Apps', 'Mobile App Architecture', 'iOS and Android Development'],
    content: `# React Native vs Native Apps: Building Cross-Platform Mobile Apps for Businesses

When planning a new mobile app for your business, one of the biggest architectural decisions is choosing between **Native Mobile Development** (Swift for iOS, Kotlin for Android) and **Cross-Platform Engineering** (React Native).

For 95% of business applications, **React Native** has emerged as the clear winner for cost-efficiency, launch speed, and maintainability.

---

## Why Top Companies Choose React Native

React Native allows software engineers to write code once in JavaScript/TypeScript and render true native UI components across both iOS and Android platforms.

### Key Business Advantages:

1. **50% Lower Development Cost**: Instead of hiring two separate teams for iOS and Android, one unified codebase powers both mobile stores.
2. **Faster Time-to-Market**: Ship your mobile application in weeks rather than months with rapid hot-reloading and shared business logic.
3. **60 FPS Smooth Performance**: React Native bridges directly to native GPU acceleration, delivering butter-smooth 60 frames-per-second animations.
4. **Over-The-Air (OTA) Updates**: Push bug fixes and minor feature updates directly to users' devices without waiting for App Store approval delays.

---

## When to Choose React Native vs Full Native

| Feature | React Native | Native (Swift/Kotlin) |
| :--- | :--- | :--- |
| **Development Speed** | ⚡ Extremely Fast | 🐢 Slower (2 Codebases) |
| **Budget Efficiency** | 💰 50% Savings | 💸 Expensive |
| **Performance** | 🚀 60 FPS (Native Feel) | 🚀 60 FPS (Maximum) |
| **Best For** | E-Commerce, SaaS, Booking, Healthcare, Social Apps | 3D Mobile Gaming, AR/VR |

---

## Build Your Mobile App With Prism Web Studio

Whether you need an e-commerce shopping app, a patient booking portal, or an internal enterprise workforce app, **Prism Web Studio** builds high-performance mobile apps tailored to your business goals. [Start your mobile app project today](/contact)!`
  },
  {
    id: 104,
    slug: 'how-ai-chatbots-reduce-support-costs',
    title: 'How AI Chatbots and LLM Automations Reduce Support Costs by 70%',
    excerpt: 'Explore how custom AI agents and WhatsApp automated bots handle 24/7 customer queries, qualify leads, and slash operational overhead.',
    category: 'AI Automation',
    image_url: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop',
    published_at: '2026-09-15T10:00:00.000Z',
    author_name: 'Prism AI Specialist',
    meta_title: 'How AI Chatbots & LLM Automations Slash Support Costs by 70%',
    meta_description: 'Discover how AI customer support agents, LLMs, and automated WhatsApp bots resolve customer inquiries 24/7 without manual intervention.',
    keywords: ['AI Chatbot Development', 'LLM Automation', 'Customer Support AI', 'WhatsApp Bot Automation'],
    content: `# How AI Chatbots and LLM Automations Reduce Support Costs by 70%

Managing customer support teams and lead qualification manually is expensive, slow, and prone to human error. Modern clients expect **instant answers at 2 AM on a Sunday**, not a response email 48 hours later.

By integrating **Custom AI Agents and Large Language Model (LLM) Automations**, businesses are slashing operational overhead while increasing customer satisfaction scores.

---

## How Custom AI Agents Work

Unlike old, rigid decision-tree chatbots that annoy users with fixed options, modern AI agents utilize **Retrieval-Augmented Generation (RAG)**:

1. **Custom Knowledge Base**: The AI is trained on your exact company documentation, FAQs, catalog prices, and policy guidelines.
2. **Natural Conversation**: It understands complex user queries in plain English, Hindi, or local languages.
3. **Instant Action**: It can check order statuses, book appointments, collect client phone numbers, and send calendar invites directly into your CRM.

---

## 3 Game-Changing AI Automation Workflows for Businesses

### 1. WhatsApp Business AI Assistant
Automate your WhatsApp channel to greet potential clients, answer pricing questions, send product brochures, and qualify leads 24/7.

### 2. Intelligent Support Ticket Deflection
Resolve up to **70% of common customer support tickets** (like refund status, operating hours, delivery tracking) automatically without human intervention.

### 3. Automated Lead Scoring & CRM Sync
When a prospect fills out a website form or sends an inquiry, AI automatically analyzes their intent, assigns a lead score, and notifies your sales team via Instant SMS/Email.

---

## Transform Your Customer Support With AI

Ready to automate repetitive tasks and scale your customer engagement effortlessly? [Explore Prism Web Studio's AI Automation Services](/services)!`
  },
  {
    id: 105,
    slug: '5-elements-high-converting-landing-pages',
    title: '5 Essential Elements of High-Converting Business Landing Pages',
    excerpt: 'Stop losing web traffic. Learn the 5 proven conversion rate optimization (CRO) principles that turn casual site visitors into paying clients.',
    category: 'Business Growth',
    image_url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    published_at: '2026-09-10T10:00:00.000Z',
    author_name: 'Satyarth Maurya',
    meta_title: '5 Essential Elements of High-Converting Landing Pages',
    meta_description: 'Master Conversion Rate Optimization (CRO). Discover the 5 vital components of high-converting landing pages that double your leads.',
    keywords: ['Landing Page Optimization', 'CRO Conversion Rate', 'Lead Generation Funnel', 'High Converting Web Design'],
    content: `# 5 Essential Elements of High-Converting Business Landing Pages

Are you spending money on Google Ads or social media marketing, only to find that visitors leave your site without filling out a form or making a call?

Driving web traffic is only half the battle. If your landing page isn't engineered for **Conversion Rate Optimization (CRO)**, you are leaking revenue.

Here are the 5 essential elements every high-converting landing page must have.

---

## 1. A High-Impact Hero Headline

You have **3 seconds** to answer three questions in the visitor's mind:
* *What do you offer?*
* *How does it benefit me?*
* *What should I do next?*

Avoid vague corporate jargon. Use bold, clear, benefit-driven headlines (e.g., *"We Build Web & Mobile Products That Scale"*).

---

## 2. Frictionless & Contextual CTAs (Calls to Action)

Make taking action effortless:
* Use high-contrast primary action buttons (*"Start Your Project"*, *"Get Instant Estimate"*).
* Offer multiple direct contact methods, including **WhatsApp direct chat** and phone call links for mobile visitors.

---

## 3. Visual Social Proof & Credibility Signals

People trust people, not claims. Include:
* Real client logos and testimonials with full names and photos.
* Verified metrics and key outcomes (e.g., *"100% In-House Team"*, *"3x Lead Increase"*).

---

## 4. Asymmetrical Feature Layouts (Scannable Content)

Modern users do not read long paragraphs; they **scan page layouts**. Use structured cards, bullet points, clean typography, and visual badges to highlight core benefits.

---

## 5. Sub-Second Mobile Performance

Over 75% of landing page visits originate from mobile devices. If your page takes 5 seconds to load on mobile 4G networks, over half your ad budget is wasted.

---

## Boost Your Conversion Rates With Prism Web Studio

We design and engineer bespoke, high-converting landing pages built to turn traffic into revenue. [Get a free conversion review today](/contact)!`
  },
  {
    id: 106,
    slug: 'why-website-speed-impacts-revenue',
    title: 'Why Website Speed and Core Web Vitals Directly Impact Business Revenue',
    excerpt: 'Every second of delay costs 7% in conversions. Discover how serverless Edge hosting, image compression, and clean code drive revenue.',
    category: 'Security & Speed',
    image_url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    published_at: '2026-09-05T10:00:00.000Z',
    author_name: 'Prism Engineering Lead',
    meta_title: 'Why Website Speed and Core Web Vitals Impact Business Revenue',
    meta_description: 'Learn how website speed, Google Core Web Vitals (LCP, FID, CLS), and edge hosting directly increase revenue and Google search rankings.',
    keywords: ['Core Web Vitals', 'Website Speed Optimization', 'Google Lighthouse Score', 'Web Performance Impact'],
    content: `# Why Website Speed and Core Web Vitals Directly Impact Business Revenue

In modern digital commerce, **speed equals revenue**.

According to Amazon and Google research:
* A **100-millisecond delay** in page load speed can decrease conversion rates by **7%**.
* Pages that load within **1 second** have a conversion rate **3x higher** than pages that load in 5 seconds.

Here is how technical speed and Google's **Core Web Vitals** directly influence your business bottom line.

---

## Understanding Google Core Web Vitals

Google uses three core performance metrics as direct ranking signals:

1. **LCP (Largest Contentful Paint)**: How fast the main content loads. Target: **Under 2.5 seconds**.
2. **INP (Interaction to Next Paint)**: How responsive the page feels when clicked. Target: **Under 200 milliseconds**.
3. **CLS (Cumulative Layout Shift)**: How visually stable the layout is during loading. Target: **Under 0.1**.

---

## How Prism Web Studio Achieves 95+ Lighthouse Scores

We optimize every single layer of your web stack:

* **Next.js Server Actions & Edge Middleware**: Code executes close to the user on global CDN servers.
* **Automatic Next/Image WebP Compression**: Images are resized, compressed, and lazy-loaded dynamically.
* **Zero Bloated Plugins**: We write clean, modular React components without heavy third-party library clutter.
* **Database Query Caching**: PostgreSQL queries are cached and optimized with connection pooling.

---

## Is Your Website Running Slow?

Don't let slow load times drain your ad spend and rankings. [Request a Free Performance & Speed Audit](/contact) from Prism Web Studio!`
  },
  {
    id: 107,
    slug: 'saas-architecture-2026',
    title: 'SaaS Architecture: Best Practices for Building Scalable Web Apps in 2026',
    excerpt: 'A technical deep-dive into building multi-tenant, sub-second latency SaaS platforms using Next.js 15, PostgreSQL, and Serverless Edge architecture.',
    category: 'Engineering',
    image_url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop',
    published_at: '2026-09-01T10:00:00.000Z',
    author_name: 'Satyarth Maurya',
    meta_title: 'SaaS Architecture: Best Practices for Scalable Apps in 2026',
    meta_description: 'Discover modern SaaS engineering principles: Next.js App Router, serverless edge API routes, database pooling, and tenant isolation.',
    keywords: ['SaaS Architecture', 'Next.js 15', 'Full-Stack Web Engineering', 'Cloud Scalability'],
    content: `# SaaS Architecture: Best Practices for Building Scalable Web Apps in 2026

Building a modern Software-as-a-Service (SaaS) application requires more than just a slick UI. To handle thousands of concurrent users, process real-time payments, and deliver sub-second response times, you need an enterprise-grade backend and frontend architecture.

At **Prism Web Studio**, we engineer scalable SaaS MVPs and enterprise web applications. Here are the core architectural principles every modern SaaS platform should follow in 2026.

---

## 1. Next.js 15 App Router & Serverless Edge Rendering

Traditional server-rendered applications suffer from latency when users are located far from the main database server.

By leveraging **Next.js App Router** with Edge Middleware:
* Static pages and public marketing assets are cached globally on CDN edge nodes.
* Dynamic dashboard data is fetched using **Server Actions** and optimistic UI updates, rendering views instantly.

---

## 2. Multi-Tenant Database Architecture & Connection Pooling

Database bottlenecks are the #1 reason SaaS platforms crash under heavy user load.

### Best Practices:
1. **Connection Pooling**: Use connection poolers (like Neon or Supabase Bouncer) to handle thousands of concurrent requests without exceeding connection limits.
2. **Row-Level Security (RLS)**: Isolate client data at the database level so tenant A can never access tenant B's data.
3. **Automated Backups**: Continuous point-in-time recovery (PITR) for disaster recovery.

---

## 3. Asymmetrical API Design & Microservices Decoupling

Instead of monolithic API routes, decouple heavy background jobs (like PDF invoice generation, email dispatches, and LLM processing) using background worker queues.

* **Frontend**: Instant optimistic response to the user.
* **Background Workers**: Asynchronous execution via Serverless Functions.

---

## Ready to Launch Your SaaS MVP?

Whether you are building a B2B SaaS dashboard, an e-commerce platform, or a custom internal tool, **Prism Web Studio** delivers production-ready code in weeks. [Start your SaaS build with us today](/contact)!`
  }
];

export async function getBlogs() {
  try {
    const res = await query("SELECT * FROM blogs WHERE status = 'published' ORDER BY published_at DESC");
    if (res.rows.length === 0) {
      return DEFAULT_BLOGS;
    }
    return res.rows;
  } catch (error) {
    console.error('getBlogs Error:', error);
    return DEFAULT_BLOGS;
  }
}

export async function getAllBlogsAdmin() {
  try {
    const res = await query('SELECT * FROM blogs ORDER BY created_at DESC');
    if (res.rows.length === 0) return DEFAULT_BLOGS;
    return res.rows;
  } catch (error) {
    return DEFAULT_BLOGS;
  }
}

export async function getBlogBySlug(slug: string) {
  try {
    if (!slug) return null;
    const cleanSlug = slug.trim().toLowerCase();

    // Map common aliases to default slugs to prevent 404s
    const aliasMap: Record<string, string> = {
      'saas-architecture-best-practices': 'saas-architecture-2026',
      'future-of-ai-automation': 'how-ai-chatbots-reduce-support-costs',
      'why-custom-websites-convert': 'why-custom-nextjs-websites-convert'
    };

    const targetSlug = aliasMap[cleanSlug] || cleanSlug;

    let res = await query('SELECT * FROM blogs WHERE slug = $1 OR slug = $2 OR id::text = $1', [cleanSlug, targetSlug]);
    if (res.rows.length > 0) return res.rows[0];

    // Fallback to DEFAULT_BLOGS array
    const found = DEFAULT_BLOGS.find(b => b.slug === targetSlug || b.slug === cleanSlug || b.id.toString() === cleanSlug);
    return found || null;
  } catch (error) {
    console.error('getBlogBySlug Error:', error);
    const cleanSlug = (slug || '').trim().toLowerCase();
    const aliasMap: Record<string, string> = {
      'saas-architecture-best-practices': 'saas-architecture-2026',
      'future-of-ai-automation': 'how-ai-chatbots-reduce-support-costs',
      'why-custom-websites-convert': 'why-custom-nextjs-websites-convert'
    };
    const targetSlug = aliasMap[cleanSlug] || cleanSlug;
    return DEFAULT_BLOGS.find(b => b.slug === targetSlug || b.slug === cleanSlug || b.id.toString() === cleanSlug) || null;
  }
}

export async function upsertBlog(data: any) {
  try {
    const { 
      id, title, slug, content, excerpt, category, image_url, author_name, status,
      meta_title, meta_description, keywords 
    } = data;
    
    const cleanSlug = (slug || title || '').toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    const publishedAt = status === 'published' ? new Date() : null;

    if (id) {
      await query(
        `UPDATE blogs SET 
          title = $1, slug = $2, content = $3, excerpt = $4, 
          category = $5, image_url = $6, author_name = $7, status = $8,
          published_at = COALESCE($9, published_at),
          meta_title = $10, meta_description = $11, keywords = $12
         WHERE id = $13`,
        [
          title, cleanSlug, content, excerpt, category, image_url, author_name, status, 
          publishedAt, meta_title, meta_description, keywords, id
        ]
      );
    } else {
      await query(
        `INSERT INTO blogs (title, slug, content, excerpt, category, image_url, author_name, status, published_at, meta_title, meta_description, keywords) 
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`,
        [
          title, cleanSlug, content, excerpt, category, image_url, author_name, status, 
          publishedAt || new Date(), meta_title, meta_description, keywords
        ]
      );
    }
    revalidatePath('/blog');
    revalidatePath(`/blog/${cleanSlug}`);
    revalidatePath('/admin/blogs');
    return { success: true };
  } catch (error: any) {
    console.error('Upsert Blog Error:', error.message);
    return { success: false, error: error.message };
  }
}

export async function deleteBlog(id: number) {
  try {
    await query('DELETE FROM blogs WHERE id = $1', [id]);
    revalidatePath('/blog');
    revalidatePath('/admin/blogs');
    return { success: true };
  } catch (e) {
    return { success: false };
  }
}

// FAQS
export async function getFaqs() {
  try {
    const res = await query('SELECT * FROM faqs ORDER BY display_order ASC');
    return res.rows;
  } catch (error) { return []; }
}

export async function upsertFaq(data: any) {
  try {
    const { id, question, answer, category, display_order } = data;
    if (id) {
      await query('UPDATE faqs SET question = $1, answer = $2, category = $3, display_order = $4 WHERE id = $5', [question, answer, category, display_order, id]);
    } else {
      await query('INSERT INTO faqs (question, answer, category, display_order) VALUES ($1, $2, $3, $4)', [question, answer, category, display_order]);
    }
    revalidatePath('/faqs');
    revalidatePath('/admin/faqs');
    return { success: true };
  } catch (error) { return { success: false }; }
}

export async function deleteFaq(id: number) {
  try {
    await query('DELETE FROM faqs WHERE id = $1', [id]);
    revalidatePath('/faqs');
    revalidatePath('/admin/faqs');
    return { success: true };
  } catch (e) { return { success: false }; }
}

const DEFAULT_PROJECTS = [
  {
    id: 1,
    title: 'Aurélia Studio - Editorial Minimalist Luxury',
    slug: 'aurelia-studio-luxury',
    category: 'Architecture & Interior',
    description: 'Editorial Minimalist Luxury theme featuring Warm Beige & Cream palette, high-end residential villas, and editorial typography.',
    result: 'Bespoke High-End Luxury Real Estate Showcase',
    image_url: 'https://res.cloudinary.com/drmjnzcfv/image/upload/v1790857223/prism-portfolio-live-screenshots/aurelia-studio-luxury.png',
    live_url: 'https://aurelia-luxury.pb6620113.workers.dev/',
    tech_stack: ['Next.js', 'Editorial Luxury UI', 'Tailwind CSS'],
    is_concept: true
  },
  {
    id: 2,
    title: 'AURA Japandi Interiors - Organic Modern',
    slug: 'aura-japandi-interiors',
    category: 'Architecture & Interior',
    description: 'Organic Modern theme featuring Oat & Light Oak palette, curved cards, and interactive Before & After transformation showcase.',
    result: 'Interactive Before & After Room Transformation',
    image_url: 'https://res.cloudinary.com/drmjnzcfv/image/upload/v1790857225/prism-portfolio-live-screenshots/aura-japandi-interiors.png',
    live_url: 'https://aura-japandi.pb6620113.workers.dev/',
    tech_stack: ['React', 'Japandi UX', 'Interactive Slider'],
    is_concept: true
  },
  {
    id: 3,
    title: 'AURA Architects - Bold Dark Mode',
    slug: 'aura-architects-dark',
    category: 'Architecture & Interior',
    description: 'Obsidian black & Metallic gold accents with 3D service cards and impact metrics for architectural firms.',
    result: 'Bold Architectural Presentation & High Impact Metrics',
    image_url: 'https://res.cloudinary.com/drmjnzcfv/image/upload/v1790857227/prism-portfolio-live-screenshots/aura-architects-dark.png',
    live_url: 'https://aura-dark.pb6620113.workers.dev/',
    tech_stack: ['Next.js', 'Dark Mode UI', '3D Cards', 'Framer Motion'],
    is_concept: true
  },
  {
    id: 4,
    title: 'Modern Abode - Live Cost Estimator',
    slug: 'modern-abode-cost-estimator',
    category: 'Architecture & Interior',
    description: 'Sage Green & Terracotta theme with an integrated Live Interactive Budget Calculator (calculates costs based on area slider & finish selection).',
    result: 'Live Interactive Construction Cost Estimator',
    image_url: 'https://i.ibb.co/HLsPJNsr/image.png',
    live_url: 'https://modern-abode.pb6620113.workers.dev/',
    tech_stack: ['Next.js', 'Interactive Budget Calculator', 'Tailwind CSS'],
    is_concept: true
  },
  {
    id: 5,
    title: 'Heritage & Co. - Royal Bespoke Craftsmanship',
    slug: 'heritage-co-royal',
    category: 'Architecture & Interior',
    description: 'Royal Navy Blue, Ivory & Gold Gilded frames for palatial estates and bespoke furniture atelier.',
    result: 'Royal Bespoke Furniture Atelier Showcase',
    image_url: 'https://res.cloudinary.com/drmjnzcfv/image/upload/v1790857232/prism-portfolio-live-screenshots/heritage-co-royal.png',
    live_url: 'https://heritage-co.pb6620113.workers.dev/',
    tech_stack: ['Next.js', 'Royal Classic UI', 'Tailwind CSS'],
    is_concept: true
  },
  {
    id: 6,
    title: 'Umid Commerce Showcase',
    slug: 'umid-commerce-showcase',
    category: 'E-Commerce',
    description: 'High-speed modern commerce application prototype built for seamless catalog browsing, rapid cart state updates, and frictionless checkout flow.',
    result: 'Sub-second load times & frictionless checkout',
    image_url: 'https://res.cloudinary.com/drmjnzcfv/image/upload/v1790857236/prism-portfolio-live-screenshots/umid-commerce-showcase.png',
    live_url: 'https://umid-commerce-showcase.vercel.app/',
    tech_stack: ['Next.js', 'Vercel', 'Tailwind CSS', 'React'],
    is_concept: false
  },
  {
    id: 7,
    title: 'Sygnus Electrik',
    slug: 'sygnus-electrik',
    category: 'Clean Energy',
    description: 'Clean EV hardware and sustainable electrical solutions landing page showcasing power technologies, fleet readiness, and commercial dealership queries.',
    result: '200% Increase in Commercial Dealership Queries',
    image_url: 'https://res.cloudinary.com/drmjnzcfv/image/upload/v1790857247/prism-portfolio-live-screenshots/sygnus-electrik.png',
    live_url: 'https://sygnuselectrik.com/',
    tech_stack: ['Next.js', 'Green Tech UI', 'Vercel Edge', 'Tailwind CSS'],
    is_concept: false
  },
  {
    id: 8,
    title: 'Avadon UAE',
    slug: 'avadon-uae',
    category: 'Corporate & Luxury',
    description: 'Clean corporate presence tailored for Middle Eastern business standards, emphasizing brand trust, international business relations, and portfolio presentation.',
    result: 'International Corporate Presence in Dubai, UAE',
    image_url: 'https://res.cloudinary.com/drmjnzcfv/image/upload/v1790857266/prism-portfolio-live-screenshots/avadon-uae.png',
    live_url: 'https://avadon.ae/',
    tech_stack: ['Next.js', 'Dubai UAE Local', 'Corporate UI', 'Tailwind CSS'],
    is_concept: false
  },
  {
    id: 9,
    title: 'Janayush Health Services',
    slug: 'janayush-health-services',
    category: 'Healthcare',
    description: 'Patient-focused healthcare service website structured for simple appointment bookings, institutional credibility, and immediate medical inquiry channels.',
    result: 'Seamless Patient Appointments & Medical Inquiries',
    image_url: 'https://res.cloudinary.com/drmjnzcfv/image/upload/v1790857304/prism-portfolio-live-screenshots/janayush-health-services.png',
    live_url: 'https://janayushhealthservices.com/',
    tech_stack: ['Next.js', 'Healthcare UX', 'Appointment Engine'],
    is_concept: false
  },
  {
    id: 10,
    title: 'Apex Institute',
    slug: 'apex-institute',
    category: 'Education',
    description: 'Focused institute website designed to present academic programs, student resources, and a clear path for prospective learners to connect.',
    result: 'Increased Admissions & Student Inquiries',
    image_url: 'https://res.cloudinary.com/drmjnzcfv/image/upload/v1790857309/prism-portfolio-live-screenshots/apex-institute.png',
    live_url: 'https://apex-institute.vercel.app/',
    tech_stack: ['Next.js', 'EdTech UI', 'Vercel', 'Tailwind CSS'],
    is_concept: false
  },
  {
    id: 11,
    title: 'Edvibe',
    slug: 'edvibe',
    category: 'Education',
    description: 'Contemporary education platform experience built to make learning content, course discovery, and student engagement feel simple and accessible.',
    result: 'High Student Engagement & Course Discovery',
    image_url: 'https://res.cloudinary.com/drmjnzcfv/image/upload/v1790857315/prism-portfolio-live-screenshots/edvibe.png',
    live_url: 'https://edvibe.vercel.app/',
    tech_stack: ['Next.js', 'LMS Portal', 'React', 'Vercel'],
    is_concept: false
  }
];

export async function getProjects() {
  try {
    const res = await query('SELECT * FROM projects ORDER BY created_at DESC');
    if (res.rows.length === 0) {
      return DEFAULT_PROJECTS;
    }
    return res.rows.map(row => {
      const match = DEFAULT_PROJECTS.find(d => d.slug === row.slug || d.title === row.title);
      return {
        ...row,
        image_url: row.image_url || match?.image_url || 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop',
        live_url: row.live_url || match?.live_url,
      };
    });
  } catch (error) { 
    console.error('getProjects Error:', error);
    return DEFAULT_PROJECTS; 
  }
}

export async function getProjectBySlug(slug: string) {
  try {
    if (!slug) return null;
    const cleanSlug = slug.toLowerCase().trim();
    const res = await query('SELECT * FROM projects WHERE slug = $1 OR id::text = $1', [cleanSlug]);
    if (res.rows.length > 0) {
      const row = res.rows[0];
      const match = DEFAULT_PROJECTS.find(d => d.slug === row.slug || d.title === row.title);
      return {
        ...row,
        image_url: row.image_url || match?.image_url || 'https://i.ibb.co/Qvdv5wQZ/Umid-Commerce-Showcase.png" alt="Umid-Commerce-Showcase',
        live_url: row.live_url || match?.live_url,
      };
    }
    
    // Fallback to DEFAULT_PROJECTS array
    const found = DEFAULT_PROJECTS.find(p => p.slug === cleanSlug || p.id.toString() === cleanSlug);
    return found || null;
  } catch (error) {
    console.error("getProjectBySlug Error:", error);
    const cleanSlug = (slug || '').toLowerCase().trim();
    return DEFAULT_PROJECTS.find(p => p.slug === cleanSlug || p.id.toString() === cleanSlug) || null;
  }
}
export async function upsertProject(data: any) {
  try {
    const { id, title, slug, description, category, tech_stack, image_url, live_url, is_concept, result, keywords } = data;
    const cleanSlug = (slug || title || '').toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    
    if (id) {
      await query(
        `UPDATE projects SET 
          title = $1, slug = $2, description = $3, category = $4, 
          tech_stack = $5, image_url = $6, live_url = $7, 
          is_concept = $8, result = $9
         WHERE id = $10`, 
        [title, cleanSlug, description, category, JSON.stringify(tech_stack), image_url, live_url, is_concept, result, id]
      );
    } else {
      await query(
        `INSERT INTO projects (title, slug, description, category, tech_stack, image_url, live_url, is_concept, result) 
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`, 
        [title, cleanSlug, description, category, JSON.stringify(tech_stack), image_url, live_url, is_concept, result]
      );
    }
    revalidatePath('/portfolio');
    revalidatePath('/admin/projects');
    return { success: true };
  } catch (error) { 
    console.error("Upsert Project Error:", error);
    return { success: false }; 
  }
}

export async function deleteProject(id: number) {
  try {
    await query('DELETE FROM projects WHERE id = $1', [id]);
    revalidatePath('/portfolio');
    revalidatePath('/admin/projects');
    return { success: true };
  } catch (e) { return { success: false }; }
}

// SERVICES
export async function getServices() {
  try {
    const servicesRes = await query('SELECT * FROM services WHERE is_active = true ORDER BY created_at ASC');
    return servicesRes.rows;
  } catch (error) { 
    console.error('getServices Error:', error);
    return []; 
  }
}

export async function upsertService(data: any) {
  try {
    const { id, title, slug, description, icon_name, category, is_active, meta_title, meta_description } = data;
    if (id) {
      await query(
        `UPDATE services SET 
          title = $1, slug = $2, description = $3, icon_name = $4, 
          category = $5, is_active = $6
         WHERE id = $7`, 
        [title, slug, description, icon_name, category, is_active, id]
      );
    } else {
      await query(
        `INSERT INTO services (title, slug, description, icon_name, category, is_active) 
         VALUES ($1, $2, $3, $4, $5, $6)`, 
        [title, slug, description, icon_name, category, is_active]
      );
    }
    revalidatePath('/services');
    revalidatePath('/admin/services');
    return { success: true };
  } catch (error) { return { success: false }; }
}

// TESTIMONIALS
export async function getAllTestimonialsAdmin() {
  try {
    const res = await query('SELECT * FROM testimonials ORDER BY created_at DESC');
    return res.rows;
  } catch (error) { return []; }
}

export async function upsertTestimonial(data: any) {
  try {
    const { id, client_name, company_name, review_text, rating, image_url, is_featured, is_active, status } = data;
    if (id) {
      await query('UPDATE testimonials SET client_name = $1, company_name = $2, review_text = $3, rating = $4, image_url = $5, is_featured = $6, is_active = $7, status = $8 WHERE id = $9', [client_name, company_name, review_text, rating, image_url, is_featured, is_active, status, id]);
    } else {
      await query('INSERT INTO testimonials (client_name, company_name, review_text, rating, image_url, is_featured, is_active, status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', [client_name, company_name, review_text, rating, image_url, is_featured, is_active, status]);
    }
    revalidatePath('/testimonials');
    revalidatePath('/admin/testimonials');
    return { success: true };
  } catch (error) { return { success: false }; }
}
