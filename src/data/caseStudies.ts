export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  industry: string;
  description: string;
  metricLabel: string;
  metricValue: string;
  tags: string[];
  icon: string;
  bgColor: string;
}

export const caseStudiesData: CaseStudy[] = [
  {
    id: "carmen-hotel",
    title: "Carmen Hotel",
    category: "Hospitality & Travel",
    industry: "Luxury Hospitality",
    description: "Complete luxury brand identity overhaul, responsive direct-booking website, and targeted Meta & Google ad campaigns.",
    metricLabel: "Direct Booking Lift",
    metricValue: "+240%",
    tags: ["Brand Identity", "Web Platform", "Paid Ads", "SEO"],
    icon: "Hotel",
    bgColor: "#090D16",
  },
  {
    id: "golf-central",
    title: "Golf Central Magazine",
    category: "Digital Publishing Platform",
    industry: "Sports & Media",
    description: "Custom digital publishing architecture, subscriber paywall engine, and automated interactive issue distribution platform.",
    metricLabel: "Active Digital Readers",
    metricValue: "185,000+",
    tags: ["Custom Platform", "React/Python", "Paywall", "Automation"],
    icon: "Trophy",
    bgColor: "#090D16",
  },
  {
    id: "ehr-migration",
    title: "Enterprise EHR Data Migration",
    category: "Enterprise Software & Data",
    industry: "Healthcare Systems",
    description: "Engineered a custom, fault-tolerant migration pipeline moving 25,502 confidential clinical records with zero downtime.",
    metricLabel: "Records Migrated",
    metricValue: "25,502",
    tags: ["Custom Software", "Data Engineering", "HIPAA Compliance", "Python"],
    icon: "Database",
    bgColor: "#090D16",
  },
  {
    id: "turflife",
    title: "Turflife",
    category: "Home Services & Contracting",
    industry: "Landscape & Contracting",
    description: "High-performance website build, Google Local Services ads, and instant SMS lead-response pipeline for contractor crews.",
    metricLabel: "Monthly Inbound Leads",
    metricValue: "3.8x",
    tags: ["Contractor Lead Gen", "Local SEO", "AI Follow-Up", "Web Design"],
    icon: "Trees",
    bgColor: "#090D16",
  },
  {
    id: "chicago-dog-42",
    title: "Chicago Dog 42",
    category: "Food & Beverage",
    industry: "Restaurant Franchising",
    description: "Full brand launch from scratch — physical signage, online ordering website, and viral geo-targeted social video ads.",
    metricLabel: "Opening Month Foot Traffic",
    metricValue: "+180%",
    tags: ["Brand Launch", "Social Ads", "Web Ordering", "Print & Signage"],
    icon: "Utensils",
    bgColor: "#090D16",
  },
  {
    id: "aspiration-bank",
    title: "Aspiration Bank",
    category: "FinTech & Banking",
    industry: "Financial Services",
    description: "Brand positioning strategy, interactive landing page architectures, and automated customer onboarding funnels.",
    metricLabel: "Conversion Rate Increase",
    metricValue: "+44%",
    tags: ["FinTech", "Conversion Rate", "Landing Pages", "SB7 Copy"],
    icon: "Landmark",
    bgColor: "#090D16",
  },
  {
    id: "volcano-forest",
    title: "Volcano Forest Resort",
    category: "Eco-Resort & Lodging",
    industry: "Eco-Tourism",
    description: "Visual identity design, multi-currency booking engine, and international SEO content marketing strategy.",
    metricLabel: "Organic Search Revenue",
    metricValue: "+310%",
    tags: ["Rebrand", "Direct Booking", "Content SEO", "Video Production"],
    icon: "Compass",
    bgColor: "#090D16",
  },
  {
    id: "jacksonville",
    title: "City of Jacksonville",
    category: "Municipal & Public Sector",
    industry: "Government Communications",
    description: "Strategic digital communications framework, public notification portal, and civic engagement systems.",
    metricLabel: "Citizen Portal Reach",
    metricValue: "450k+",
    tags: ["Strategic Comms", "Web Portal", "Public Sector", "Accessibility"],
    icon: "Building2",
    bgColor: "#090D16",
  },
];

export const clientLogos = [
  "Carmen Hotel",
  "City of Jacksonville",
  "Chicago Dog 42",
  "Volcano Forest Resort",
  "Aspiration Bank",
  "Turflife",
  "Golf Central Magazine",
  "Swing Perfect",
  "Phoenix Limo Services",
  "QuinnLan Realty",
  "Cana Behavioral Health",
  "ACME Rewards Club",
  "Phoenix Chiropractic",
  "OptiFlow",
];
