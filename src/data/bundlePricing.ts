export interface BundleTier {
  id: string;
  name: string;
  countLabel: string;
  pricePerLb: number;
  minOrder: number;
  turnaround: string;
  discountBadge: string;
  description: string;
  highlighted?: boolean;
}

export interface SelectableAddon {
  id: string;
  name: string;
  category: string;
  basePrice: number;
  unitLabel: string;
  description: string;
  popular?: boolean;
}

export const bundleTiers: BundleTier[] = [
  {
    id: "dropoff-nextday",
    name: "Drop-Off Next-Day",
    countLabel: "At Huntington Laundromat",
    pricePerLb: 1.10,
    minOrder: 20,
    turnaround: "Next Day (24 hrs)",
    discountBadge: "Best Value ($1.10/lb)",
    description: "Drop off your laundry at 215 New York Ave. Washed, dried, and neatly folded for next-day pickup.",
    highlighted: false,
  },
  {
    id: "dropoff-sameday",
    name: "Drop-Off Same-Day",
    countLabel: "Rush Service",
    pricePerLb: 1.30,
    minOrder: 20,
    turnaround: "Same Day (Drop off by noon)",
    discountBadge: "Fastest Turnaround",
    description: "Drop off before 12:00 PM and pick up your clean, crisp, folded clothes the very same evening.",
    highlighted: false,
  },
  {
    id: "pickup-recurring",
    name: "Recurring Pickup & Delivery",
    countLabel: "Weekly / Bi-Weekly Doorstep",
    pricePerLb: 1.75,
    minOrder: 45,
    turnaround: "24–48 Hours",
    discountBadge: "Most Convenient ($1.75/lb)",
    description: "Automatic scheduled pickup and delivery right to your door. Set it once and never do laundry again.",
    highlighted: true,
  },
  {
    id: "pickup-asneeded",
    name: "As-Needed Pickup & Delivery",
    countLabel: "On-Demand Doorstep",
    pricePerLb: 1.80,
    minOrder: 45,
    turnaround: "24–48 Hours",
    discountBadge: "Flexible ($1.80/lb)",
    description: "Schedule pickups whenever you need them with zero recurring commitment. Perfect for busy weeks.",
    highlighted: false,
  },
];

export const selectableServices: SelectableAddon[] = [
  {
    id: "ironed-shirts-bundle",
    name: "10 Shirts Wash & Press Special",
    category: "Pressing",
    basePrice: 29.50,
    unitLabel: "per 10 shirts",
    description: "10 dress shirts washed, crisply ironed, and hung on hangers (regular $3.50 each).",
    popular: true,
  },
  {
    id: "comforter-standard",
    name: "Comforter / Quilt / Heavy Blanket (Any Size)",
    category: "Bedding",
    basePrice: 19.99,
    unitLabel: "per piece",
    description: "Deep sanitized wash and fluff for twin, full, queen, or king comforters and heavy quilts.",
    popular: true,
  },
  {
    id: "comforter-down",
    name: "Down / Extra-Heavy Comforter",
    category: "Bedding",
    basePrice: 29.99,
    unitLabel: "per piece",
    description: "Gentle low-heat drying and thorough agitation for premium down and oversized duvets.",
  },
  {
    id: "individual-shirt",
    name: "Individual Pressed Shirt / Blouse",
    category: "Pressing",
    basePrice: 3.50,
    unitLabel: "per shirt",
    description: "Wash, hand-press, and return on hanger with collar stays.",
  },
  {
    id: "hypoallergenic-soap",
    name: "Hypoallergenic / Free & Clear Detergent",
    category: "Custom Care",
    basePrice: 0.00,
    unitLabel: "Included Free",
    description: "Dye-free, fragrance-free, sensitive-skin approved detergent option upon request.",
  },
  {
    id: "hang-dry-delicates",
    name: "Delicate Garment Air-Dry / Hang Dry",
    category: "Custom Care",
    basePrice: 5.00,
    unitLabel: "per bundle",
    description: "Special items hung to dry to protect wool, silk, spandex, and activewear fabrics.",
  },
];
