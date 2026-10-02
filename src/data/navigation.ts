export interface NavLink {
  label: string;
  href: string;
  badge?: string;
}

export const navLinks: NavLink[] = [
  { label: "Services", href: "#services" },
  { label: "AI", href: "#ai" },
  { label: "Method", href: "#method" },
  { label: "Bundles", href: "#bundle-builder" },
  { label: "Social", href: "#social" },
  { label: "Our Work", href: "#work" },
  { label: "Grader", href: "#nis-grader" },
];

export const contactInfo = {
  phone: "480-779-9875",
  phoneFormatted: "(480) 779-9875",
  phoneTel: "tel:4807799875",
  email: "care@relaunch.us",
  emailMailto: "mailto:care@relaunch.us",
  location: "Phoenix, Arizona",
  established: 2004,
  yearsInBusiness: 22,
};
