export interface FaqItem {
  question: string;
  answer: string;
  category: "Pricing & Billing" | "Services & Delivery" | "ReLaunch Method";
}

export const faqData: FaqItem[] = [
  {
    question: "How does the ReLaunch bundle subscription work?",
    answer:
      "Unlike traditional agencies that charge massive non-refundable retainers or fragmented project fees, ReLaunch lets you select exactly the services your business needs into one consolidated monthly subscription. When you bundle 2–3 services, you save 10%. With 4–5 services, you save 15%. With 6 or more services (Mission Control), you save 20% across your entire stack.",
    category: "Pricing & Billing",
  },
  {
    question: "Are there long-term contracts or cancellation penalties?",
    answer:
      "No contracts whatsoever. All services operate on a month-to-month subscription basis. You can add services, scale down, pause, or cancel at any time directly through your client portal with 30 days notice.",
    category: "Pricing & Billing",
  },
  {
    question: "What is the 'ReLaunch Method' and the 4-layer selling framework?",
    answer:
      "The ReLaunch Method is our internal framework ensuring that every deliverable—whether an ad, a website, or an automation flow—is engineered specifically to generate calls and sales. It combines StoryBrand SB7 (35%), Hero's Journey narrative (30%), Draper emotional positioning (25%), and Archetype consistency (10%). Anything that doesn't sell doesn't ship.",
    category: "ReLaunch Method",
  },
  {
    question: "What is the difference between Track A and Track B for ReLaunch Social?",
    answer:
      "In Track A (starting at $297/mo), you supply raw photos or smartphone videos of your day-to-day work, and our team handles professional editing, caption writing, hashtag research, and automated multi-channel scheduling. In Track B (starting at $597/mo), we create all graphics, educational posts, motion visuals, and short video ads 100% done-for-you from scratch.",
    category: "Services & Delivery",
  },
  {
    question: "How quickly does a new website or marketing engine launch?",
    answer:
      "ReLaunch Social portals and AI automation pipelines go live within 24–48 hours of onboarding. Complete custom Next.js website redesigns typically deploy within 2 to 3 weeks depending on asset approvals.",
    category: "Services & Delivery",
  },
  {
    question: "Can you build custom platforms, portals, or databases?",
    answer:
      "Yes. In addition to core local marketing, we architect custom enterprise software, client portals, automated CRM pipelines, and complex data migrations (such as our 25,502-record medical EHR migration build and the Golf Central Magazine digital platform).",
    category: "Services & Delivery",
  },
  {
    question: "How do I get started?",
    answer:
      "You can build your custom bundle on this page in 60 seconds, take our Free NIS Marketing Grader to diagnose your current marketing, or book a 15-minute introductory strategy session with our team.",
    category: "Pricing & Billing",
  },
];
