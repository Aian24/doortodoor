import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#DC1F62",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Laundry Pickup & Delivery Service in Long Island, NY | Door to Door Laundry",
  description:
    "Save time with Door to Door Laundry’s pickup and delivery service in Long Island, NY. Fast 24-48h turnaround, top-quality wash & fold, ironed shirts, and unbeatable convenience. Open 7 days at 215 New York Ave, Huntington, NY.",
  keywords: [
    "Door to Door Laundry",
    "Laundry pickup and delivery Long Island",
    "Wash and fold Huntington NY",
    "Laundromat Huntington NY 11743",
    "Commercial laundry service Long Island",
    "Laundry delivery Greenlawn",
    "Laundry service Melville NY",
    "Ironed shirts pressing Long Island",
    "Curbside laundries pickup",
    "Drop off laundry service NY",
  ],
  authors: [{ name: "Door to Door Laundry" }],
  creator: "Door to Door Laundry",
  openGraph: {
    title: "Laundry Pickup & Delivery Service in Long Island, NY | Door to Door Laundry",
    description:
      "Save time with Door to Door Laundry’s pickup and delivery service in Long Island, NY. Fast 24-48h turnaround, top-quality wash & fold, and unbeatable convenience.",
    url: "https://www.doortodoorlaundry.com/",
    siteName: "Door to Door Laundry",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/logos/door-to-door-logo.png",
    shortcut: "/logos/door-to-door-logo.png",
    apple: "/logos/door-to-door-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Catamaran:wght@400;500;600;700;800;900&family=Inter:wght@400;500;600;700;800;900&family=Roboto:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#FAF9F6] text-[#0F172A] font-sans antialiased selection:bg-[#DC1F62] selection:text-white">
        {children}
      </body>
    </html>
  );
}
