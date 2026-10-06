export interface SpecialOffer {
  id: string;
  name: string;
  priceDisplay: string;
  badge: string;
  image: string;
  tagline: string;
  description: string;
  features: string[];
  couponCode?: string;
  ctaText: string;
  ctaUrl: string;
  popular?: boolean;
}

export const specialsData = {
  badge: "Specials & Promotions",
  title: "Door to Door Laundry Deals",
  headline: "Top-Tier Clean. Unbeatable Value.",
  tagline:
    "Take advantage of our limited-time special promotions across Long Island. Claim $10 off your first order, get discounted shirt ironing, or join our growing franchise network.",
  portalUrl: "https://doortodoorlaundry.curbsidelaundries.com/",
  serviceAreas: ["Huntington", "Greenlawn", "Huntington Station", "Melville", "South Huntington", "West Hills"],
  stats: [
    { value: 10, suffix: "$ Off", label: "First pickup order with code FIRST10" },
    { value: 29, suffix: ".50", label: "10 Shirts Wash & Press Special" },
    { value: 19, suffix: ".99", label: "Any size comforter or quilt special" },
    { value: 30, suffix: "+ Yrs", label: "Serving Huntington & Long Island" },
  ],
  steps: [
    {
      num: "01",
      title: "Choose Your Special Offer",
      description: "Pick from our first-order coupon, ironed shirts special, or comforter cleaning promo.",
    },
    {
      num: "02",
      title: "Schedule Your Pickup or Drop-Off",
      description: "Book online in under 60 seconds and enter your promo code at checkout.",
    },
    {
      num: "03",
      title: "We Clean, Steam & Fold to Perfection",
      description: "Our experienced Huntington laundry team handles your garments with professional care.",
    },
    {
      num: "04",
      title: "Enjoy Fresh, Pristine Laundry",
      description: "Delivered back to your door or ready for pickup in 24–48 hours, looking and smelling incredible.",
    },
  ],
  tiers: [
    {
      id: "first-order-special",
      name: "First Order Special",
      priceDisplay: "$10 OFF",
      badge: "New Customers",
      image: "/images/special-first-order.png",
      tagline: "Free Laundry Bag + $10 Off Your First Pickup Order",
      description: "Get started with Door to Door Laundry today. We'll give you a free reusable heavy-duty laundry bag and $10 off your first order.",
      couponCode: "FIRST10",
      features: [
        "Use promo code FIRST10 at checkout",
        "Free heavy-duty nylon laundry bag included",
        "Valid for any pickup and delivery order",
        "24–48 hour rapid turnaround",
      ],
      ctaText: "Claim $10 Off with FIRST10",
      ctaUrl: "https://doortodoorlaundry.curbsidelaundries.com/",
      popular: true,
    },
    {
      id: "ironed-shirts-special",
      name: "10 Ironed Shirts Special",
      priceDisplay: "$29.50",
      badge: "Huge Savings",
      image: "/images/special-ironed-shirts.webp",
      tagline: "10 Dress Shirts Wash N' Press for $29.50 (Regular $3.50 ea)",
      description: "Keep your professional wardrobe looking sharp without expensive dry cleaning bills. Professional wash, press, and hanger return.",
      features: [
        "10 shirts washed & hand-pressed for $29.50",
        "Regular individual price: $3.50 per shirt",
        "Returned crisp on hangers in protective poly bags",
        "Serving all of Long Island",
      ],
      ctaText: "Order Ironed Shirts",
      ctaUrl: "https://doortodoorlaundry.curbsidelaundries.com/",
    },
    {
      id: "comforters-quilts-special",
      name: "Comforters & Quilts Special",
      priceDisplay: "$19.99",
      badge: "Any Size Bedding",
      image: "/images/special-comforters.png",
      tagline: "Quilts, Heavy Blankets & Comforters for $19.99 ONLY",
      description: "Don't overload your home washer. Oversized commercial washers deep clean and sanitize any size comforter or blanket.",
      features: [
        "Special price: $19.99 ONLY for any size (Twin to King)",
        "Down & extra-heavy comforters are just +$10",
        "Deep sanitized high-capacity wash & low-heat fluff",
        "Serving all of Long Island",
      ],
      ctaText: "Order Bedding Cleaning",
      ctaUrl: "https://doortodoorlaundry.curbsidelaundries.com/",
    },
    {
      id: "franchise-opportunity",
      name: "Join Our Franchise",
      priceDisplay: "Franchise",
      badge: "Business Opportunity",
      image: "/images/over-30-years.png",
      tagline: "Bring Door to Door Laundry to Your Community",
      description: "Join a proven, recurring revenue business model in the booming laundry pickup and delivery industry with complete turnkey support.",
      features: [
        "Turnkey Curbside Laundries software platform",
        "Comprehensive brand assets and marketing blueprints",
        "Equipment, van setup & route logistics training",
        "Visit doortodoorlaundryfranchise.com",
      ],
      ctaText: "Explore Franchise Info",
      ctaUrl: "https://doortodoorlaundryfranchise.com/",
    },
  ] as SpecialOffer[],
};
