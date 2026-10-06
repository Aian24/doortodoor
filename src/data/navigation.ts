export interface NavLink {
  label: string;
  href: string;
  badge?: string;
  isExternal?: boolean;
}

export const navLinks: NavLink[] = [
  { label: "Pickup & Delivery", href: "#pickup-delivery" },
  { label: "Wash & Fold", href: "#wash-fold" },
  { label: "Ironed Shirts", href: "#ironed-shirts" },
  { label: "Commercial", href: "#commercial-laundry" },
  { label: "Self-Service", href: "#self-service" },
  { label: "Service Areas", href: "#service-areas" },
  { label: "About Us", href: "#about" },
  { label: "Specials", href: "#specials" },
  { label: "Franchise", href: "https://doortodoorlaundryfranchise.com/", isExternal: true },
];

export const contactInfo = {
  phone: "631-769-9922",
  phoneAlt: "631-949-6300",
  phoneFormatted: "(631) 769-9922",
  phoneAltFormatted: "(631) 949-6300",
  phoneTel: "tel:+16317699922",
  email: "wash@villagelaundromat.com",
  emailMailto: "mailto:wash@villagelaundromat.com",
  address: "215 New York Avenue",
  cityStateZip: "Huntington, NY 11743",
  fullAddress: "215 New York Avenue, Huntington, NY 11743",
  googleMapsUrl: "https://www.google.com/maps/dir/Current+Location/40.87548,-73.424398",
  hoursWeekday: "MON - SAT: 8:00 AM - 9:00 PM (Last wash @ 8:00 PM)",
  hoursSunday: "SUN: 8:00 AM - 6:00 PM (Last wash @ 4:30 PM)",
  portalOrderUrl: "https://doortodoorlaundry.curbsidelaundries.com/",
  portalSignUpUrl: "https://doortodoorlaundry.curbsidelaundries.com/Account/SignUp",
  portalLoginUrl: "https://doortodoorlaundry.curbsidelaundries.com/Home/Index",
  franchiseUrl: "https://doortodoorlaundryfranchise.com/",
  instagramUrl: "https://www.instagram.com/door.to.door.laundry?utm_source=qr&igsh=bWhsbjM0Zmp0d3h6",
  facebookUrl: "https://www.facebook.com/DoorToDoorLaundryL/?rdid=2RWPnFDHENUMiUpC",
  yelpUrl: "https://www.yelp.com/biz/door-to-door-laundry-huntington",
  established: 1994,
  yearsInBusiness: 30,
};
