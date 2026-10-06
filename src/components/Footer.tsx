"use client";

import Image from "next/image";
import Link from "next/link";
import { navLinks, contactInfo } from "@/data/navigation";
import { Phone, Mail, MapPin, ArrowUp, Clock, ExternalLink, Sparkles } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white text-slate-700 pt-14 pb-8 select-none border-t border-pink-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-slate-100">
          
          {/* Col 1: Brand & Logo (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center p-1 rounded-xl"
            >
              <Image
                src="/logos/door-to-door-horizontal.png"
                alt="Door To Door Laundry"
                width={180}
                height={40}
                className="h-8 w-auto object-contain"
              />
            </Link>

            <p className="text-xs text-slate-600 leading-relaxed max-w-sm font-normal">
              Door to Door Laundry is a family-owned laundry service operating a reputable laundromat which has served the Huntington, NY community for over 30 years. You leave it, we clean it.
            </p>

            <div className="space-y-1.5 text-xs text-slate-600">
              <a
                href={contactInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#0284C7] hover:underline font-medium"
              >
                <MapPin className="w-3.5 h-3.5 text-[#DC1F62] shrink-0" />
                <span>215 New York Avenue, Huntington, NY 11743</span>
              </a>

              <div className="flex items-start gap-2 text-slate-500 pt-1">
                <Clock className="w-3.5 h-3.5 text-[#0284C7] shrink-0 mt-0.5" />
                <span className="leading-snug">
                  MON–SAT: 8AM–9PM (Last wash 8PM)<br />
                  SUN: 8AM–6PM (Last wash 4:30PM)
                </span>
              </div>
            </div>
          </div>

          {/* Col 2: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-[#DC1F62]">
              Laundry Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>
                <a href="#pickup-delivery" className="hover:text-[#DC1F62] transition-colors">
                  Pick Up &amp; Delivery
                </a>
              </li>
              <li>
                <a href="#wash-fold" className="hover:text-[#DC1F62] transition-colors">
                  Wash, Dry &amp; Fold Drop-Off
                </a>
              </li>
              <li>
                <a href="#ironed-shirts" className="hover:text-[#DC1F62] transition-colors">
                  Ironed Shirts Special ($29.50)
                </a>
              </li>
              <li>
                <a href="#commercial-laundry" className="hover:text-[#DC1F62] transition-colors">
                  Commercial Laundry &amp; Linens
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-[#DC1F62] transition-colors">
                  Comforters &amp; Quilts ($19.99)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#DC1F62] transition-colors">
                  Self-Service Laundromat
                </a>
              </li>
              <li>
                <a href="#service-areas" className="hover:text-[#DC1F62] transition-colors">
                  Long Island Service Areas
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation & Portals (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-[#DC1F62]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>
                <a href="#pricing" className="hover:text-[#DC1F62] transition-colors">
                  Pricing Calculator
                </a>
              </li>
              <li>
                <a href="#specials" className="hover:text-[#DC1F62] transition-colors">
                  Specials &amp; Deals
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#DC1F62] transition-colors">
                  About Us &amp; Reviews
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#DC1F62] transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href={contactInfo.portalOrderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#DC1F62] transition-colors text-[#DC1F62] font-bold"
                >
                  Schedule Pickup ↗
                </a>
              </li>
              <li>
                <a
                  href={contactInfo.franchiseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0284C7] transition-colors text-[#0284C7] font-semibold"
                >
                  Join Our Franchise ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Phone (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-[#DC1F62]">
              Contact &amp; Ordering
            </h4>

            <div className="space-y-2.5 text-xs text-slate-600">
              <a
                href={contactInfo.phoneTel}
                className="flex items-center gap-2 hover:text-[#DC1F62] transition-colors font-mono font-bold text-sm text-[#0F172A]"
              >
                <Phone className="w-4 h-4 text-[#DC1F62]" />
                <span>{contactInfo.phoneFormatted}</span>
              </a>

              <a
                href={`tel:+1${contactInfo.phoneAlt.replace(/\D/g, "")}`}
                className="flex items-center gap-2 hover:text-[#DC1F62] transition-colors font-mono text-slate-500"
              >
                <Phone className="w-3.5 h-3.5 text-[#0284C7]" />
                <span>{contactInfo.phoneAltFormatted} (Alt)</span>
              </a>

              <a
                href={contactInfo.emailMailto}
                className="flex items-center gap-2 hover:text-[#DC1F62] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#0284C7]" />
                <span>{contactInfo.email}</span>
              </a>

              <div className="pt-2">
                <span className="text-[11px] text-slate-500 block">Online Ordering Portal</span>
                <a
                  href={contactInfo.portalOrderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#DC1F62] underline font-medium hover:text-[#BE185D]"
                >
                  doortodoorlaundry.curbsidelaundries.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            Copyright © 2026 Door to Door Laundry · 215 New York Ave, Huntington, NY 11743 · All Rights Reserved.
          </div>

          <div className="flex items-center gap-4">
            <a
              href={contactInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#DC1F62] transition-colors"
            >
              Instagram
            </a>
            <a
              href={contactInfo.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#DC1F62] transition-colors"
            >
              Facebook
            </a>
            <a
              href={contactInfo.yelpUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#DC1F62] transition-colors"
            >
              Yelp
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-pink-50 hover:bg-[#DC1F62] text-[#DC1F62] hover:text-white border border-pink-200 transition-colors ml-2 shadow-xs"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
