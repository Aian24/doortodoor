export interface AiServicePillar {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  tag?: string;
}

export const aiSectionData = {
  badge: "21st Century Laundry Technology",
  headline: "Modern Laundry. Zero Hassle.",
  subheadline:
    "We brought Huntington’s long-standing, reputable Village Laundromat into the 21st Century with seamless online ordering, smart order tracking, and high-efficiency commercial equipment.",
  ctaText: "Schedule Your First Pickup",
  ctaHref: "https://doortodoorlaundry.curbsidelaundries.com/",
};

export const aiPillarsData: AiServicePillar[] = [
  {
    id: "online-ordering",
    icon: "Smartphone",
    title: "1-Click Online Ordering",
    description: "Schedule your pickup, track past orders, and manage recurring deliveries in seconds.",
    features: [
      "Curbside Laundries software platform",
      "Instant recurring or on-demand booking",
      "Custom wash preference storage",
    ],
    tag: "Easy Booking",
  },
  {
    id: "sms-tracking",
    icon: "BellRing",
    title: "Live SMS & Status Alerts",
    description: "Receive real-time notifications when your driver is en route, picked up, and delivered.",
    features: [
      "Driver ETA notifications",
      "Photo confirmation on delivery",
      "Digital weight & itemized receipt",
    ],
    tag: "Real-Time",
  },
  {
    id: "custom-preferences",
    icon: "Sliders",
    title: "Personalized Wash Profiles",
    description: "Set your exact preferences once: detergent type, softener, water temp, and fold style.",
    features: [
      "Free & clear hypoallergenic soaps",
      "Hang dry & delicates instructions",
      "Separate whites, lights & darks",
    ],
    tag: "Custom Care",
  },
  {
    id: "commercial-routing",
    icon: "Truck",
    title: "Optimized Long Island Routes",
    description: "Smart logistics routing ensures timely daily and weekly pickup routes across Long Island.",
    features: [
      "Huntington, Greenlawn, Melville & beyond",
      "Dedicated commercial delivery vans",
      "Guaranteed 24–48h delivery windows",
    ],
    tag: "Fast Logistics",
  },
  {
    id: "eco-washers",
    icon: "Droplets",
    title: "Eco-Friendly Commercial Washers",
    description: "High-efficiency commercial extractors remove more water, cutting energy and drying time.",
    features: [
      "High G-force extraction technology",
      "Eco-smart water conservation",
      "Gentle fabric-preserving agitation",
    ],
    tag: "Eco-Smart",
  },
  {
    id: "contactless-bags",
    icon: "ShieldCheck",
    title: "Contactless Doorstep Security",
    description: "Durable, weather-resistant laundry bags with secure personalized customer ID tags.",
    features: [
      "Free heavy-duty nylon laundry bag",
      "Unique customer barcode tracking",
      "Weather-sealed protective packaging",
    ],
    tag: "Secure",
  },
  {
    id: "business-invoicing",
    icon: "Receipt",
    title: "Commercial Account Management",
    description: "Dedicated account dashboard with consolidated monthly invoicing and volume discounts.",
    features: [
      "Itemized scale weight receipts",
      "Multi-location business support",
      "Custom commercial rate locks",
    ],
    tag: "B2B Accounts",
  },
  {
    id: "franchise-system",
    icon: "Store",
    title: "Turnkey Franchise Platform",
    description: "Proven pickup & delivery business model ready to expand into new territories nationwide.",
    features: [
      "Full technology & branding suite",
      "Equipment & route operations training",
      "Visit doortodoorlaundryfranchise.com",
    ],
    tag: "Franchise",
  },
];
