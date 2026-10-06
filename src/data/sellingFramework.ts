export interface HeroPersona {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  icon: string;
  targetExamples: string;
  primaryDesire: string;
  externalProblem: string;
  internalProblem: string;
  whatIsAtStake: string;
  successLooksLike: string;
  ctaText: string;
  ctaHref: string;
}

export interface SellingLayer {
  layer: string;
  weight: number;
  weightPercent: string;
  role: string;
  whereItApplies: string;
  color: string;
}

export interface PlanStep {
  stepNumber: string;
  title: string;
  description: string;
  detail: string;
  iconName: string;
}

export const twoHeroesData: HeroPersona[] = [
  {
    id: "residential-families",
    title: "Busy Households & Families",
    subtitle: "Parents, Professionals, Students & Local Residents",
    badge: "Residential Laundry",
    icon: "Home",
    targetExamples: "Huntington, Greenlawn, Melville, South Huntington & Long Island homes",
    primaryDesire: "Reclaim 4+ hours every week and never stress over overflowing laundry hampers",
    externalProblem: "Laundry piles up constantly, taking away precious free time and weekends",
    internalProblem: "Exhausted from endless washing, drying, matching socks, and folding loads",
    whatIsAtStake: "Spending your only free weekend hours stuck in front of the washer and dryer",
    successLooksLike: "Clean, fresh, perfectly folded clothes delivered right back to your doorstep",
    ctaText: "Schedule Doorstep Pickup",
    ctaHref: "https://doortodoorlaundry.curbsidelaundries.com/",
  },
  {
    id: "commercial-business",
    title: "Commercial & Business Accounts",
    subtitle: "Medical, Spas, Gyms, Airbnbs, Salons & Pet Grooming",
    badge: "Commercial Laundry",
    icon: "Building2",
    targetExamples: "Medical clinics, fitness clubs, short-term rentals, groomers, restaurants",
    primaryDesire: "Pristine, hygienic linens & towels delivered on a seamless, predictable schedule",
    externalProblem: "In-house laundry wastes staff time, damages machines, and risks inconsistent quality",
    internalProblem: "Worried about linen shortages, guest complaints, and high replacement costs",
    whatIsAtStake: "Negative reviews, sanitary compliance issues, and wasted operational budget",
    successLooksLike: "Dedicated commercial bins, dependable route pickups, and itemized billing",
    ctaText: "Request a Commercial Bid",
    ctaHref: "https://www.doortodoorlaundry.com/commercial-laundry/request-a-bid/",
  },
];

export const sellingFrameworkLayers: SellingLayer[] = [
  {
    layer: "Sorting & Fabric Care",
    weight: 35,
    weightPercent: "35%",
    role: "Lights, darks, and delicate fabrics are separated. Checked for forgotten items in pockets.",
    whereItApplies: "Intake sorting, wash cycle optimization, temperature controls",
    color: "#DC1F62",
  },
  {
    layer: "Sanitized Wash & Premium Detergents",
    weight: 30,
    weightPercent: "30%",
    role: "Commercial-grade deep cleaning with premium hypoallergenic, eco-friendly detergents.",
    whereItApplies: "Washer cycles, odor elimination, fabric softening",
    color: "#0284C7",
  },
  {
    layer: "Low-Heat Drying & Steam Pressing",
    weight: 25,
    weightPercent: "25%",
    role: "Gentle low-heat drying prevents shrinkage; shirts and blouses are professionally pressed.",
    whereItApplies: "Dryers, shirt pressing, collar & cuff finishing",
    color: "#DC1F62",
  },
  {
    layer: "Master Folding & Protective Packaging",
    weight: 10,
    weightPercent: "10%",
    role: "Items are crisply folded, socks paired, shirts stacked, and sealed in clean weather-proof bags.",
    whereItApplies: "Final packaging, bag tagging, route delivery",
    color: "#0F172A",
  },
];

export const threeStepPlan: PlanStep[] = [
  {
    stepNumber: "01",
    title: "Schedule Online in Clicks",
    description: "Choose your pickup day, select recurring or on-demand, and enter any custom laundry preferences.",
    detail: "Takes under 60 seconds on any phone, tablet, or computer. Use code FIRST10 for $10 off.",
    iconName: "Calendar",
  },
  {
    stepNumber: "02",
    title: "Leave It at Your Door",
    description: "Place your dirty laundry in any bag (or your Door to Door Laundry bag) on your porch or lobby.",
    detail: "No need to wait around or be home. Our friendly driver collects your bags contact-free.",
    iconName: "Package",
  },
  {
    stepNumber: "03",
    title: "We Wash, Dry & Master Fold",
    description: "Our experienced team sorts, washes, sanitizes, dries, and folds your laundry to crisp perfection.",
    detail: "Over 30 years of laundry expertise ensures your fabrics are treated with exceptional care.",
    iconName: "Sparkles",
  },
  {
    stepNumber: "04",
    title: "Fresh Delivery to Your Door",
    description: "Your clean, neatly stacked laundry is delivered back within 24 to 48 hours, ready to put away!",
    detail: "Real-time SMS updates notify you the moment your fresh laundry arrives at your door.",
    iconName: "Truck",
  },
];
