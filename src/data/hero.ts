export interface HeroStat {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
}

export const heroData = {
  kicker: "Huntington, Long Island NY · 30+ Years Serving The Community · Family Owned",
  headline: "You Leave It, We Clean It.",
  subheadline:
    "Got laundry? We can help! Whether you leave it at your door or ours, we’ll wash, dry, fluff, and fold all your laundry for you. Free pickup & delivery across Long Island with lightning-fast 24–48 hour turnaround.",
  primaryCta: {
    label: "Schedule a Pickup",
    href: "https://doortodoorlaundry.curbsidelaundries.com/",
  },
  secondaryCta: {
    label: "Explore Services",
    href: "#pickup-delivery",
  },
  couponCode: "FIRST10",
  couponOffer: "Get $10 OFF + A FREE Laundry Bag on your first pickup order with code FIRST10",
  stats: [
    {
      value: 30,
      suffix: "+",
      label: "Years in Service",
      sublabel: "Trusted Huntington Laundromat",
    },
    {
      value: 24,
      suffix: "h",
      label: "Fast Turnaround",
      sublabel: "24 to 48 hour delivery",
    },
    {
      value: 100,
      suffix: "%",
      label: "Fresh Guarantee",
      sublabel: "Sorted, sanitized & neatly folded",
    },
    {
      value: 1,
      suffix: ".10",
      label: "Wash & Fold From",
      sublabel: "Starting at $1.10/lb drop-off",
    },
  ] as HeroStat[],
  serviceAreas: [
    "Huntington (11743)",
    "Greenlawn (11740)",
    "Huntington Station (11746)",
    "South Huntington (11746)",
    "Melville (11747)",
    "West Hills (11743)",
    "Syosset (11791)",
    "Massapequa (11758)",
  ],
  pillars: [
    {
      title: "Doorstep Pickup & Delivery",
      description: "Convenient online scheduling with contactless doorstep pickup throughout Long Island.",
      tag: "Pickup & Delivery",
    },
    {
      title: "Professional Wash & Fold",
      description: "Lights and darks separated, premium hypoallergenic detergents, dried and neatly packaged.",
      tag: "Fluff & Fold",
    },
    {
      title: "Commercial & Business Accounts",
      description: "Tailored commercial laundry for medical clinics, gyms, spas, Airbnbs, and pet groomers.",
      tag: "Commercial B2B",
    },
  ],
};
