export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  highlight: string;
  serviceUsed: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "april-k",
    name: "April K.",
    role: "Local Resident",
    company: "Huntington, NY",
    quote:
      "Excellent folding! So neatly delivered right to my front porch. Having my family's laundry picked up and returned fresh saves me hours every single week.",
    rating: 5,
    highlight: "Excellent folding! So neatly delivered",
    serviceUsed: "Pickup & Delivery Wash & Fold",
  },
  {
    id: "rodney-n",
    name: "Rodney N.",
    role: "Google Reviewer",
    company: "Long Island, NY",
    quote:
      "Nice clean place with great customer service. The staff is always helpful and the machines are modern and fast. Best laundromat in Huntington by far.",
    rating: 5,
    highlight: "Nice clean place & great machines",
    serviceUsed: "Self-Service & Drop-Off",
  },
  {
    id: "israel-h",
    name: "Israel H.",
    role: "Verified Customer",
    company: "Greenlawn, NY",
    quote:
      "Nice and clean with free drying specials. Dropped off my comforters and heavy winter blankets and they came back smelling amazing and fluffed up perfectly.",
    rating: 5,
    highlight: "Nice and clean with free drying",
    serviceUsed: "Comforter & Blanket Special",
  },
  {
    id: "anthony-s",
    name: "Anthony S.",
    role: "Business Owner",
    company: "Melville, NY",
    quote:
      "Great place! We use their commercial towel and linen service for our fitness center. Dependable pickup schedule, fair pricing, and great communication.",
    rating: 5,
    highlight: "Great place & dependable service",
    serviceUsed: "Commercial Towel & Linen Service",
  },
  {
    id: "maria-d",
    name: "Maria D.",
    role: "Household Client",
    company: "South Huntington, NY",
    quote:
      "The 10 shirts wash and press special for $29.50 is an unbelievable deal. Collars are crisp, buttons intact, and hung on hangers ready for work.",
    rating: 5,
    highlight: "10 Shirts Wash & Press Special",
    serviceUsed: "Ironed Shirts Service",
  },
];
