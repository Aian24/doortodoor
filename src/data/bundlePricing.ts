export interface BundleTier {
  id: string;
  name: string;
  countLabel: string;
  minServices: number;
  maxServices: number;
  discountPercent: number;
  discountBadge: string;
  description: string;
  highlighted?: boolean;
}

export interface SelectableService {
  id: string;
  name: string;
  category: string;
  basePrice: number;
  description: string;
  popular?: boolean;
}

export const bundleTiers: BundleTier[] = [
  {
    id: "starter",
    name: "Starter",
    countLabel: "1 Service",
    minServices: 1,
    maxServices: 1,
    discountPercent: 0,
    discountBadge: "Standard Rate",
    description: "Get started with one dedicated high-impact recurring marketing or tech service.",
    highlighted: false,
  },
  {
    id: "growth",
    name: "Growth",
    countLabel: "2–3 Services",
    minServices: 2,
    maxServices: 3,
    discountPercent: 10,
    discountBadge: "Save 10%",
    description: "Build serious momentum with complementary services working in synergy.",
    highlighted: false,
  },
  {
    id: "scale",
    name: "Scale",
    countLabel: "4–5 Services",
    minServices: 4,
    maxServices: 5,
    discountPercent: 15,
    discountBadge: "Save 15%",
    description: "A complete growth engine — ads, web, social, and automations perfectly aligned.",
    highlighted: false,
  },
  {
    id: "mission-control",
    name: "Mission Control",
    countLabel: "6+ Services",
    minServices: 6,
    maxServices: 99,
    discountPercent: 20,
    discountBadge: "Save 20%",
    description: "Your full turnkey marketing & tech department at a fraction of in-house headcount cost.",
    highlighted: true,
  },
];

export const selectableServices: SelectableService[] = [
  {
    id: "marketing-ads",
    name: "Paid Ads (Meta & Google) + Local SEO",
    category: "Traffic & Leads",
    basePrice: 790,
    description: "Full ad campaign setup, Google Business Profile ranking & conversion optimization.",
    popular: true,
  },
  {
    id: "relaunch-social",
    name: "ReLaunch Social Autopilot",
    category: "Social Presence",
    basePrice: 497,
    description: "Multi-platform automated scheduling, content creation & monthly publishing.",
    popular: true,
  },
  {
    id: "web-dev",
    name: "Web Platform & Continuous Care Plan",
    category: "Digital Assets",
    basePrice: 890,
    description: "High-performance Next.js website hosting, SB7 landing pages & security updates.",
    popular: true,
  },
  {
    id: "ai-automation",
    name: "AI Lead Capture & Automated CRM Workflows",
    category: "Automation",
    basePrice: 690,
    description: "24/7 AI qualification chatbots, instant SMS/Email follow-up & Zapier/Base44 pipelines.",
    popular: true,
  },
  {
    id: "video-creative",
    name: "Video Ad Creative & Content Batches",
    category: "Creative",
    basePrice: 590,
    description: "Short-form video ads, Reels, programmatic renders & conversion scripts.",
  },
  {
    id: "email-marketing",
    name: "Email Retention & Automated Flow Sequences",
    category: "Retention",
    basePrice: 450,
    description: "Welcome flows, broadcast campaigns, list segmentation & deliverability care.",
  },
  {
    id: "brand-design",
    name: "Brand Design & Marketing Collateral Kit",
    category: "Creative",
    basePrice: 490,
    description: "Archetype identity, sales decks, print collateral & ad visual assets.",
  },
  {
    id: "custom-software",
    name: "Custom Client Portal & Internal Tools Retainer",
    category: "Software",
    basePrice: 1200,
    description: "Dedicated React/Base44 portal development, API integrations & SLA uptime.",
  },
  {
    id: "nis-advisory",
    name: "NIS Sales Audit & Monthly CMO Strategy",
    category: "Strategy",
    basePrice: 350,
    description: "Monthly 4-layer diagnostic scoring, competitive intelligence & executive strategy call.",
  },
];
