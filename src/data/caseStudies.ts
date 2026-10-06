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
  image: string;
  displayUrl: string;
  liveUrl?: string;
  clientQuote?: string;
}

export const caseStudiesData: CaseStudy[] = [
  {
    id: "medical-healthcare",
    title: "Medical Clinics & Healthcare Facilities",
    category: "Sanitary Medical Laundry",
    industry: "Healthcare",
    description:
      "OSHA-compliant sanitized wash, dry, and fold service for medical scrubs, lab coats, patient gowns, and clinical linens with strict pathogen control protocols.",
    metricLabel: "Hygienic Sanitization",
    metricValue: "100%",
    tags: ["OSHA Compliant", "Scrubs & Lab Coats", "Sanitized Packaging", "Dedicated Bins"],
    icon: "Stethoscope",
    bgColor: "#0F172A",
    image: "/images/service-commercial.jpg",
    displayUrl: "doortodoorlaundry.com/commercial-laundry",
    liveUrl: "https://www.doortodoorlaundry.com/commercial-laundry/medical-laundry-service-in-huntington-ny/",
    clientQuote: "Door to Door Laundry provides flawless, sterile linen service for our medical staff on a dependable schedule.",
  },
  {
    id: "gyms-spas",
    title: "Gyms, Fitness Centers & Spas",
    category: "High-Volume Towel Service",
    industry: "Fitness & Wellness",
    description:
      "Daily fresh, plush, ultra-absorbent towel laundering and delivery for boutique gyms, pilates studios, luxury spas, and wellness clubs across Long Island.",
    metricLabel: "Daily Towels Delivered",
    metricValue: "1,200+",
    tags: ["Plush Towels", "Daily Route Pickups", "Odor Elimination", "Volume Discounts"],
    icon: "Activity",
    bgColor: "#0F172A",
    image: "/images/service-wash-fold.png",
    displayUrl: "doortodoorlaundry.com/commercial-laundry",
    liveUrl: "https://www.doortodoorlaundry.com/commercial-laundry/gyms-and-spa-laundry-service-in-huntington-ny/",
    clientQuote: "Our gym members always have clean, fresh towels waiting. They have never missed a single scheduled pickup.",
  },
  {
    id: "vacation-rentals",
    title: "Airbnb & Vacation Rental Hosts",
    category: "Hospitality Bedding & Linens",
    industry: "Short-Term Rentals",
    description:
      "Rapid turnover laundering for bed sheets, pillowcases, duvet covers, bath towels, and kitchen linens to guarantee 5-star cleanliness ratings from every guest.",
    metricLabel: "Turnaround Speed",
    metricValue: "24-48h",
    tags: ["Airbnb & VRBO", "Crisp Bed Sheets", "Fast Turnover", "Stain Removal"],
    icon: "Hotel",
    bgColor: "#0F172A",
    image: "/images/service-pickup.png",
    displayUrl: "doortodoorlaundry.com/commercial-laundry",
    liveUrl: "https://www.doortodoorlaundry.com/commercial-laundry/vacation-rentals-laundry-service-in-huntington-ny/",
    clientQuote: "Turnover days used to be a nightmare. Now our fresh linens arrive crisply folded and ready for new guests.",
  },
  {
    id: "pet-grooming",
    title: "Pet Grooming & Veterinary Clinics",
    category: "Heavy-Duty Animal Care Laundry",
    industry: "Pet Care",
    description:
      "Specialized high-extraction washing that thoroughly removes pet hair, dander, heavy mud, and odors from grooming towels, pet beds, and blankets.",
    metricLabel: "Hair & Odor Removal",
    metricValue: "100%",
    tags: ["Pet Hair Extraction", "Deep Sanitization", "Heavy Duty Towels", "Huntington Service"],
    icon: "HeartHandshake",
    bgColor: "#0F172A",
    image: "/images/service-self-serve.png",
    displayUrl: "doortodoorlaundry.com/commercial-laundry",
    liveUrl: "https://www.doortodoorlaundry.com/commercial-laundry/pet-grooming-laundry-service-in-huntington-ny/",
    clientQuote: "Pet hair destroys regular washers. Door to Door handles our heavy grooming towel load effortlessly.",
  },
  {
    id: "restaurants-catering",
    title: "Restaurants, Cafes & Catering",
    category: "Food Service Linens",
    industry: "Hospitality & Dining",
    description:
      "Heavy-duty grease and food stain removal for tablecloths, cloth napkins, chef aprons, bar towels, and kitchen cleaning cloths.",
    metricLabel: "Weekly Linen Turnover",
    metricValue: "500+ lbs",
    tags: ["Grease Treatment", "Table Linens", "Chef Uniforms", "Weekly Delivery"],
    icon: "Utensils",
    bgColor: "#0F172A",
    image: "/images/service-wash-fold.png",
    displayUrl: "doortodoorlaundry.com/commercial-laundry",
    liveUrl: "https://www.doortodoorlaundry.com/commercial-laundry/linen-services-near-huntington-ny/",
    clientQuote: "Our dining room tables look immaculate with their freshly pressed, stain-free tablecloths.",
  },
  {
    id: "nursing-assisted-living",
    title: "Nursing Homes & Assisted Living",
    category: "Senior Care & Resident Laundry",
    industry: "Healthcare",
    description:
      "Gentle, respectful, individually labeled resident personal garment laundering and facility bed linen care with hypoallergenic detergents.",
    metricLabel: "Resident Care Rating",
    metricValue: "5.0 ★",
    tags: ["Hypoallergenic Soaps", "Individual Garment Care", "Bed Linens", "Reliable Delivery"],
    icon: "ShieldCheck",
    bgColor: "#0F172A",
    image: "/images/service-commercial.jpg",
    displayUrl: "doortodoorlaundry.com/commercial-laundry",
    liveUrl: "https://www.doortodoorlaundry.com/commercial-laundry/nursing-home-assisted-living-laundry-service-in-huntington-ny/",
    clientQuote: "Residents' personal garments are returned soft, clean, and properly labeled without mix-ups.",
  },
  {
    id: "colleges-universities",
    title: "Colleges & Student Housing",
    category: "Campus Laundry Solutions",
    industry: "Education",
    description:
      "Semester bulk laundry plans and athletic department uniform washing for college students and sports teams across Long Island.",
    metricLabel: "Student Time Saved",
    metricValue: "6+ hrs/wk",
    tags: ["Student Plans", "Athletic Gear", "Dorm Pickup", "Semester Packages"],
    icon: "GraduationCap",
    bgColor: "#0F172A",
    image: "/images/service-pickup.png",
    displayUrl: "doortodoorlaundry.com/commercial-laundry",
    liveUrl: "https://www.doortodoorlaundry.com/commercial-laundry/college-laundry-service-in-huntington-ny/",
    clientQuote: "Parents and students love having reliable door-to-door laundry so they can focus on their studies.",
  },
  {
    id: "corporate-uniforms",
    title: "Corporate Staff & Uniform Laundering",
    category: "Workwear & Pressing",
    industry: "Corporate Services",
    description:
      "Professional wash, dry, and pressing service for security personnel, hotel staff, maintenance crews, and executive button-down dress shirts.",
    metricLabel: "Shirts Pressed / Week",
    metricValue: "800+",
    tags: ["Shirt Pressing", "Garment Bags", "Hanger Delivery", "Uniform Programs"],
    icon: "Shirt",
    bgColor: "#0F172A",
    image: "/images/special-ironed-shirts.webp",
    displayUrl: "doortodoorlaundry.com/shirt-ironing-services",
    liveUrl: "https://www.doortodoorlaundry.com/shirt-ironing-services/",
    clientQuote: "Our front desk staff always looks sharp with Door to Door's 10-shirt wash and press special.",
  },
];

export const clientLogos = [
  "Huntington Medical Care",
  "Long Island Wellness Spa",
  "Village Athletic Club",
  "North Shore Airbnbs",
  "Huntington Veterinary Group",
  "Bistro 215 Dining",
  "Harbor Senior Living",
  "Suffolk Sports Academy",
  "Long Island Realty Suites",
  "Syosset Dental Center",
];
