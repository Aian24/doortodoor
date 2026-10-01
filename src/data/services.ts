export interface ServiceItem {
  id: string;
  num: string;
  title: string;
  category: "Core Marketing" | "Advanced Tech" | "Strategy & Creative";
  iconName: string;
  shortDescription: string;
  deliverables: string[];
  howItSells: string;
  pricingNote: string;
  badge?: string;
  basePriceMonthly: number;
}

export const servicesData: ServiceItem[] = [
  {
    id: "marketing-ads",
    num: "01",
    title: "Marketing & Paid Ads (PPC & SEO)",
    category: "Core Marketing",
    iconName: "Megaphone",
    shortDescription: "High-intent Meta & Google advertising, local SEO optimization, Google Business Profile management, and clean attribution reporting.",
    deliverables: [
      "Meta (Facebook/Instagram) & Google Ads management",
      "Local SEO & Google Business Profile NAP optimization",
      "Conversion tracking & monthly ROI dashboards",
      "Ad creative refreshing & continuous A/B split testing",
    ],
    howItSells: "Ads lead with the customer's burning problem; local listings convert active searchers into inbound phone calls immediately.",
    pricingNote: "Monthly management subscription (Ad spend billed separately)",
    basePriceMonthly: 790,
  },
  {
    id: "brand-design",
    num: "02",
    title: "Brand Identity & Design",
    category: "Strategy & Creative",
    iconName: "Palette",
    shortDescription: "Archetype-driven visual identity, logo design, typography systems, marketing collateral, and comprehensive brand guideline books.",
    deliverables: [
      "Primary, secondary, and badge logo variations",
      "Typography, color palette & solid design tokens",
      "Print, signage, business cards & vehicle wraps",
      "Digital ad templates & social media design kits",
    ],
    howItSells: "Identity is anchored to one clear archetype so every visual asset reinforces your authority and selling pitch.",
    pricingNote: "Available as recurring creative support or project setup",
    basePriceMonthly: 490,
  },
  {
    id: "ai-automation",
    num: "03",
    title: "AI Automation & Lead Pipelines",
    category: "Advanced Tech",
    iconName: "Cpu",
    badge: "High Velocity",
    shortDescription: "Custom Zapier, Base44, and AI workflows that capture, qualify, and follow up with leads 24/7 without manual staff intervention.",
    deliverables: [
      "Instant lead response & SMS/Email follow-up sequences",
      "24/7 Website AI qualification & booking assistants",
      "CRM pipeline automations & automated data syncing",
      "Custom AI content generation tuned to your brand voice",
    ],
    howItSells: "Automated systems capture every incoming prospect instantly, eliminating lead leakage and speeding up the sale.",
    pricingNote: "Setup + monthly workflow maintenance and compute retainer",
    basePriceMonthly: 690,
  },
  {
    id: "web-development",
    num: "04",
    title: "Web & App Development",
    category: "Core Marketing",
    iconName: "Code2",
    badge: "Next.js Powered",
    shortDescription: "Lightning-fast, mobile-optimized websites built on modern React and Next.js. Engineered with the 4-layer selling framework to turn visitors into buyers.",
    deliverables: [
      "Custom responsive design (Desktop, Tablet, Mobile)",
      "StoryBrand SB7 wireframes and conversion copywriting",
      "Ultra-fast page loads with 95+ Google Lighthouse scores",
      "Managed hosting, security, and ongoing care plan",
    ],
    howItSells: "Every single page follows SB7 structure and ends in one clear call to action. No fluff, no dead ends.",
    pricingNote: "Included in bundle care plans + initial deployment",
    basePriceMonthly: 890,
  },
  {
    id: "video-content",
    num: "05",
    title: "Video & Content Production",
    category: "Strategy & Creative",
    iconName: "Video",
    shortDescription: "Short-form video ads, Reels, product explainers, and conversion-focused copywriting that transform attention into revenue.",
    deliverables: [
      "Programmatic video ad generation for Meta & TikTok",
      "High-converting video scripts and direct hooks",
      "Short-form vertical video editing & captioning",
      "SEO articles, email copywriting, and sales assets",
    ],
    howItSells: "Video content dramatizes the customer's transformation from painful problem to triumphant result.",
    pricingNote: "Monthly production batches tailored to your volume",
    basePriceMonthly: 590,
  },
  {
    id: "email-marketing",
    num: "06",
    title: "Email Marketing & Retention",
    category: "Core Marketing",
    iconName: "Mail",
    shortDescription: "Automated welcome flows, abandoned browse sequences, promotional campaigns, and audience segmentation that maximize customer lifetime value.",
    deliverables: [
      "Automated welcome, nurture, and re-engagement flows",
      "Weekly or bi-weekly broadcast newsletter campaigns",
      "Deliverability monitoring & list hygiene management",
      "Revenue attribution & cohort performance tracking",
    ],
    howItSells: "Turns past buyers and warm leads into repeat revenue without paying for new ad impressions.",
    pricingNote: "Monthly retainer with full campaign copywriting and design",
    basePriceMonthly: 450,
  },
  {
    id: "custom-software",
    num: "07",
    title: "Custom Software & Client Portals",
    category: "Advanced Tech",
    iconName: "Layers",
    badge: "Enterprise Grade",
    shortDescription: "Bespoke web applications, customer portals, internal operational tools, and complex data migrations (built with Base44, React, Python).",
    deliverables: [
      "Self-service customer & client management portals",
      "Custom internal workflow software & database dashboards",
      "Legacy data migration & API integrations",
      "Dedicated continuous maintenance & SLA support",
    ],
    howItSells: "Custom tools shorten the cycle from prospect to transaction and streamline operational costs.",
    pricingNote: "Scoped architecture build + monthly support retainer",
    basePriceMonthly: 1200,
  },
  {
    id: "nis-audit",
    num: "08",
    title: "NIS Sales Audit & Advisory",
    category: "Strategy & Creative",
    iconName: "BarChart3",
    badge: "Strategic Core",
    shortDescription: "Comprehensive four-layer diagnostic scoring your website, ad creative, funnel leaks, and competitive positioning with actionable fixes.",
    deliverables: [
      "Full four-layer NIS marketing diagnostic report",
      "Competitor messaging & traffic gap analysis",
      "Prioritized roadmap of high-ROI marketing fixes",
      "Monthly strategic executive advisory session with Robert",
    ],
    howItSells: "Directly exposes exactly where your current marketing fails to sell and hands you the blueprint to fix it.",
    pricingNote: "Free initial grader; comprehensive deep-dive audit available",
    basePriceMonthly: 350,
  },
];
