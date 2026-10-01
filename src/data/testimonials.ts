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
    id: "quinnlan-realty",
    name: "Jerry Q.",
    role: "Managing Principal",
    company: "QuinnLan Realty Group",
    quote:
      "Bobby and his team were excellent — creative, cost-effective, and very responsive. They reformatted my entire website with minimal disruption and delivered exactly what I envisioned. It immediately began generating real inquiries.",
    rating: 5,
    highlight: "Delivered exactly what I envisioned",
    serviceUsed: "Web Platform & Rebrand",
  },
  {
    id: "phoenix-limo",
    name: "Paschal F.",
    role: "Operations Director",
    company: "Phoenix Limo Services",
    quote:
      "Above excellent service. They developed our website and email capture — everything went right on time. Punctual, creative, and they meet every expectation without fail. The automated booking integration saved us dozens of hours weekly.",
    rating: 5,
    highlight: "Everything went right on time",
    serviceUsed: "Web & AI Lead Pipeline",
  },
  {
    id: "acme-rewards",
    name: "Cameron L.",
    role: "Founder & CEO",
    company: "ACME Rewards Club",
    quote:
      "Bobby and his team are professional, consistent, and get things done in a reasonable time frame. They helped with my website and backend CRM integration. Consistently excellent quality across every deliverable.",
    rating: 5,
    highlight: "Consistently excellent quality",
    serviceUsed: "Custom Software & CRM",
  },
];
