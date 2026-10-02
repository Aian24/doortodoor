"use client";

import Image from "next/image";
import Link from "next/link";
import { navLinks, contactInfo } from "@/data/navigation";
import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#090D16] text-white pt-12 pb-8 select-none border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-slate-800">
          {/* Col 1: Brand & Logo */}
          <div className="lg:col-span-4 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center bg-white px-3.5 py-1.5 rounded-xl shadow-xs hover:shadow-sm transition-shadow"
            >
              <Image
                src="/logos/logo-compact.png"
                alt="ReLaunch.us Logo"
                width={140}
                height={28}
                className="h-7 w-auto object-contain"
              />
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm font-normal">
              Marketing, AI &amp; digital services for businesses ready to grow. Subscription-based. No contracts. Real results.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#C0622A]">
              <MapPin className="w-3.5 h-3.5" />
              <span>Phoenix, AZ · Est. 2004</span>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-slate-400">
              Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a href="#services" className="hover:text-[#C0622A] transition-colors">
                  Marketing &amp; Advertising
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#C0622A] transition-colors">
                  Brand &amp; Design
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#C0622A] transition-colors">
                  AI Services
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#C0622A] transition-colors">
                  Web &amp; App Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#C0622A] transition-colors">
                  Video &amp; Content
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#C0622A] transition-colors">
                  Email &amp; SMS Marketing
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-slate-400">
              Company
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-[#C0622A] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://relaunch-social-orbit.base44.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C0622A] transition-colors text-[#C0622A] font-semibold"
                >
                  Client Portal ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-slate-400">
              Contact
            </h4>

            <div className="space-y-2.5 text-xs text-slate-300">
              <a
                href={contactInfo.phoneTel}
                className="flex items-center gap-2 hover:text-[#C0622A] transition-colors font-mono"
              >
                <Phone className="w-3.5 h-3.5 text-[#C0622A]" />
                <span>{contactInfo.phoneFormatted}</span>
              </a>

              <a
                href={contactInfo.emailMailto}
                className="flex items-center gap-2 hover:text-[#C0622A] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#C0622A]" />
                <span>{contactInfo.email}</span>
              </a>

              <div className="pt-2">
                <span className="text-[11px] text-slate-500 block">Bundle Builder</span>
                <a href="#bundle-builder" className="text-xs text-[#C0622A] underline">
                  relaunch.us/#bundle-builder
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} ReLaunch Marketing &amp; Advertising · Phoenix, AZ
          </div>

          <div className="flex items-center gap-6">
            <span>Built by ReLaunch</span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-slate-800 hover:bg-[#C0622A] text-white transition-colors"
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

