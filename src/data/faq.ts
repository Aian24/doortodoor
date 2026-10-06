export interface FaqItem {
  question: string;
  answer: string;
  category: "Pickup & Delivery" | "Pricing & Billing" | "Laundry Care & Process" | "Commercial Accounts";
}

export const faqData: FaqItem[] = [
  {
    question: "How does Door to Door Laundry pickup and delivery work?",
    answer:
      "It’s as easy as 1-2-3! Simply click 'Schedule a Pickup' on our website, select your preferred pickup and delivery dates, choose any custom washing preferences (like detergent type or water temperature), and place your laundry bags outside your front door or with your building lobby. Our friendly driver collects your bags, our Huntington facility washes, dries, and neatly folds everything, and delivers it back to you within 24 to 48 hours.",
    category: "Pickup & Delivery",
  },
  {
    question: "Do I need to be home when you pick up or deliver my laundry?",
    answer:
      "No, you do not need to be home! Most customers leave their laundry bags on their front porch, by the front door, with a building concierge, or in an agreed-upon safe location. You’ll receive real-time SMS notifications when our driver is on the way, when bags are picked up, and photo confirmation when clean clothes are delivered.",
    category: "Pickup & Delivery",
  },
  {
    question: "What are your prices for Wash & Fold and Pickup & Delivery?",
    answer:
      "Our drop-off Wash & Fold at our Huntington location (215 New York Ave) starts at just $1.10 per pound for next-day service ($20 minimum order) and +$0.20/lb for same-day service (drop off by noon). For pickup and delivery, recurring service is $1.75 per pound and as-needed service is $1.80 per pound ($45 minimum order). Plus, new customers get $10 OFF and a free reusable laundry bag on their first pickup order with promo code FIRST10!",
    category: "Pricing & Billing",
  },
  {
    question: "What areas of Long Island do you service?",
    answer:
      "We proudly service Huntington (11743), Greenlawn (11740), Huntington Station (11746), South Huntington (11746), Melville (11747), West Hills (11743/11746), Syosset (11791), Massapequa (11758), Commack (11725), Northport (11768), and surrounding Long Island communities. You can enter your zip code in our coverage tool to confirm instant pickup availability.",
    category: "Pickup & Delivery",
  },
  {
    question: "How do you wash my clothes? Are whites and colors separated?",
    answer:
      "Yes, absolutely! We always sort your laundry into lights and darks, and wash them in separate commercial machines. We use premium commercial-grade detergents, offer hypoallergenic free & clear options, and dry at gentle temperatures to protect your fabrics and prevent shrinkage. Everything is crisply folded, socks paired, and sealed in weather-protective packaging.",
    category: "Laundry Care & Process",
  },
  {
    question: "Can I request hypoallergenic detergent or hang-dry for delicates?",
    answer:
      "Yes! When scheduling your order online, you can select 'Free & Clear' hypoallergenic detergent (at no extra charge) and specify items that require air-drying or delicate handling. Your preferences are saved to your account profile for every future order.",
    category: "Laundry Care & Process",
  },
  {
    question: "What specials and discounts do you offer?",
    answer:
      "We offer three popular specials: (1) First Order Special: $10 off + free laundry bag with code FIRST10; (2) Ironed Shirts: 10 shirts wash 'n press for $29.50 (regular $3.50 ea); and (3) Comforter & Quilt Special: Any size comforter or heavy blanket cleaned for just $19.99 (down/extra-heavy +$10).",
    category: "Pricing & Billing",
  },
  {
    question: "Do you offer commercial laundry service for businesses?",
    answer:
      "Yes! We provide tailored commercial linen and towel laundering for medical & dental clinics, luxury spas, gyms, Airbnbs/vacation rentals, pet groomers, restaurants, assisted living facilities, and colleges across Long Island. We offer dedicated commercial bins, flexible pickup frequencies, and volume-discounted monthly invoicing. You can request a free bid directly through our website.",
    category: "Commercial Accounts",
  },
  {
    question: "Where is your physical laundromat located and what are the hours?",
    answer:
      "Our laundromat (formerly Village Laundromat, serving Huntington for over 30 years) is located at 215 New York Avenue, Huntington, NY 11743. We are open Monday through Saturday from 8:00 AM to 9:00 PM (last wash at 8:00 PM) and Sunday from 8:00 AM to 6:00 PM (last wash at 4:30 PM).",
    category: "Pickup & Delivery",
  },
];
