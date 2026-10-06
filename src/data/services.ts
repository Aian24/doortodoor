export interface ServiceItem {
  id: string;
  num: string;
  title: string;
  category: "Residential Services" | "Commercial Accounts" | "Specialty Care";
  iconName: string;
  summaryTags: string[];
  deliverables: string[];
  shortDescription: string;
  howItSells: string;
  pricingNote: string;
  badge?: string;
  basePriceMonthly: number;
  image?: string;
  portalLink?: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "pickup-delivery",
    num: "01",
    title: "Laundry Pickup & Delivery",
    category: "Residential Services",
    iconName: "Truck",
    badge: "Most Popular",
    image: "/images/service-pickup.png",
    summaryTags: [
      "Doorstep pickup & drop-off",
      "24–48 hour turnaround",
      "Recurring or on-demand",
      "Real-time SMS updates",
    ],
    deliverables: [
      "Convenient contactless porch pickup & delivery",
      "Next-day / 48-hour delivery right to your front door",
      "Recurring weekly/bi-weekly or as-needed scheduling",
      "Lights and darks sorted & washed separately",
      "Crisply folded and sealed in weather-proof bags",
    ],
    shortDescription:
      "We bring fresh, professional laundromat results right to your doorstep. Schedule online in clicks, leave your bags out, and we handle the rest.",
    howItSells:
      "Reclaim 4+ hours every week. No sorting, washing, drying, or folding required — just fresh laundry delivered back to you.",
    pricingNote: "$1.75/lb recurring · $1.80/lb as-needed ($45 min)",
    basePriceMonthly: 45,
    portalLink: "https://doortodoorlaundry.curbsidelaundries.com/",
  },
  {
    id: "wash-fold",
    num: "02",
    title: "Wash, Dry & Fold (Drop-Off)",
    category: "Residential Services",
    iconName: "Sparkles",
    image: "/images/service-wash-fold.png",
    summaryTags: [
      "Same-day & next-day options",
      "Starts at $1.10 per pound",
      "Separated lights & darks",
      "Premium hypoallergenic detergents",
    ],
    deliverables: [
      "Drop off anytime during operating hours",
      "Same-day turnaround available (drop off by noon)",
      "Next-day turnaround at just $1.10/lb",
      "Clothes hung on hangers or folded neatly",
      "Socks paired, shirts stacked, pants creased",
    ],
    shortDescription:
      "Drop off your dirty laundry at our Huntington location (215 New York Ave). We wash, dry, fluff, and fold everything to perfection.",
    howItSells:
      "Save time without waiting on machines. Drop it off on your morning commute and pick it up fresh and clean.",
    pricingNote: "$1.10/lb next-day · +$0.20/lb same-day ($20 min)",
    basePriceMonthly: 20,
    portalLink: "https://doortodoorlaundry.curbsidelaundries.com/",
  },
  {
    id: "ironed-shirts",
    num: "03",
    title: "Ironed Shirts & Pressing",
    category: "Specialty Care",
    iconName: "Shirt",
    badge: "Special Offer",
    image: "/images/special-ironed-shirts.webp",
    summaryTags: [
      "10 shirts for $29.50 special",
      "Hand pressed & hung",
      "Crisp collars & cuffs",
      "Regular $3.50 each",
    ],
    deliverables: [
      "Special deal: 10 shirts wash 'n press for $29.50",
      "Individual shirts washed & professionally pressed",
      "Returned on hangers in protective garment bags",
      "Custom starch level upon request (light, medium, heavy)",
      "Serving all of Long Island",
    ],
    shortDescription:
      "Look sharp without the hassle. Professional wash and pressing for dress shirts, blouses, and business attire with crisp collars and smooth finishes.",
    howItSells:
      "High-end dry cleaner results at a fraction of the cost. 10 shirts for just $29.50.",
    pricingNote: "$29.50 for 10 shirts (Regular $3.50 each)",
    basePriceMonthly: 29.5,
    portalLink: "https://doortodoorlaundry.curbsidelaundries.com/",
  },
  {
    id: "commercial-laundry",
    num: "04",
    title: "Commercial Laundry Solutions",
    category: "Commercial Accounts",
    iconName: "Building2",
    badge: "Business Accounts",
    image: "/images/service-commercial.jpg",
    summaryTags: [
      "Medical, Spas, Gyms & Airbnbs",
      "Customized pickup schedules",
      "Dedicated commercial bins",
      "Itemized monthly invoicing",
    ],
    deliverables: [
      "Full linen, towel, scrub, and uniform management",
      "OSHA-compliant medical sanitization protocols",
      "Daily, bi-weekly, or on-demand pickup routes",
      "Dedicated laundry bins and bags for your business",
      "Volume discounts and flexible commercial billing",
    ],
    shortDescription:
      "Let us take care of the laundry so you can focus on growing your business. High-capacity commercial equipment engineered for Long Island businesses.",
    howItSells:
      "Ensure your guests, patients, and clients always experience pristine, freshly laundered linens and towels with 100% reliability.",
    pricingNote: "Custom volume-based pricing · Free bid request",
    basePriceMonthly: 150,
    portalLink: "https://www.doortodoorlaundry.com/commercial-laundry/request-a-bid/",
  },
  {
    id: "bedding-comforters",
    num: "05",
    title: "Comforters, Blankets & Bedding",
    category: "Specialty Care",
    iconName: "Layers",
    badge: "$19.99 Promo",
    image: "/images/special-comforters.png",
    summaryTags: [
      "Any size comforter $19.99",
      "Quilts & heavy blankets",
      "Deep sanitized wash",
      "Fluffed and fresh",
    ],
    deliverables: [
      "Special price: $19.99 ONLY for any size comforter / quilt",
      "Down comforters & extra heavy blankets (+$10)",
      "High-capacity commercial washers provide full agitation",
      "Low-heat even drying to protect fill & fabric",
      "Folded and packed in breathable bedding bags",
    ],
    shortDescription:
      "Bulky comforters, duvets, and quilts that won't fit in standard home washers get thoroughly washed, deep-sanitized, and fluffed in our oversized machines.",
    howItSells:
      "Protect your expensive home bedding with professional commercial laundering for just $19.99.",
    pricingNote: "$19.99 any size (Down comforters +$10)",
    basePriceMonthly: 19.99,
    portalLink: "https://doortodoorlaundry.curbsidelaundries.com/",
  },
  {
    id: "self-service",
    num: "06",
    title: "Self-Service Laundromat",
    category: "Residential Services",
    iconName: "Clock",
    image: "/images/service-self-serve.png",
    summaryTags: [
      "215 New York Ave, Huntington",
      "Open 7 days a week",
      "High-capacity modern washers",
      "Free high-speed drying",
    ],
    deliverables: [
      "Open Monday – Saturday 8am–9pm (Last wash 8pm)",
      "Open Sunday 8am–6pm (Last wash 4:30pm)",
      "Multiple washer sizes from single load to 8-load giants",
      "High-efficiency dryers with free drying specials",
      "Clean, well-lit, fully attended modern facility",
    ],
    shortDescription:
      "Visit our spotlessly clean, modern Huntington laundromat (formerly Village Laundromat, serving the community for over 30 years). Fast washers, free drying specials.",
    howItSells:
      "Get all of your household laundry done in under an hour with our heavy-duty commercial machines.",
    pricingNote: "Pay per machine · Vending & supplies on site",
    basePriceMonthly: 10,
    portalLink: "https://www.google.com/maps/dir/Current+Location/40.87548,-73.424398",
  },
  {
    id: "delicates-hypoallergenic",
    num: "07",
    title: "Delicates & Hypoallergenic Care",
    category: "Specialty Care",
    iconName: "Heart",
    summaryTags: [
      "Free & Clear detergents",
      "Air-dry & delicate cycles",
      "Baby & sensitive skin safe",
      "Custom wash profiles",
    ],
    deliverables: [
      "Hypoallergenic, dye-free, and fragrance-free detergents",
      "Gentle cold-water wash cycles for delicate fabrics",
      "Hang dry and lay flat drying options",
      "Baby clothes and sensitive skin treatments",
      "Eco-friendly fabric softeners upon request",
    ],
    shortDescription:
      "Have sensitive skin or specialty garments? Specify your detergent and drying preferences in your online profile, and we follow them down to the exact detail.",
    howItSells:
      "Complete peace of mind knowing your family's sensitive skin and favorite garments are treated with gentle care.",
    pricingNote: "Included in standard Wash & Fold rates",
    basePriceMonthly: 45,
    portalLink: "https://doortodoorlaundry.curbsidelaundries.com/",
  },
  {
    id: "service-coverage",
    num: "08",
    title: "Long Island Service Areas",
    category: "Residential Services",
    iconName: "MapPin",
    image: "/images/service-location.png",
    summaryTags: [
      "Huntington & Greenlawn",
      "Melville & South Huntington",
      "Huntington Station & West Hills",
      "Fast daily routes",
    ],
    deliverables: [
      "Huntington (11743) & Greenlawn (11740)",
      "Huntington Station & South Huntington (11746)",
      "Melville (11747) & West Hills (11743)",
      "Syosset (11791), Massapequa (11758) & surrounding areas",
      "Convenient scheduled pickup days right to your neighborhood",
    ],
    shortDescription:
      "Based out of Huntington, NY, Door to Door Laundry proudly services residents, families, and businesses across Suffolk and Nassau counties.",
    howItSells:
      "Fast, local service from neighbors you trust. We know Long Island routes and guarantee reliable delivery times.",
    pricingNote: "Free delivery on all pickup orders over $45",
    basePriceMonthly: 45,
    portalLink: "#service-areas",
  },
];
