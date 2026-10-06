"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, contactInfo } from "@/data/navigation";
import { useContactModal } from "@/context/ContactModalContext";
import {
  Menu,
  X,
  Phone,
  Calendar,
  Sparkles,
  User,
  LogIn,
} from "lucide-react";

export default function Navbar() {
  const { openContactModal } = useContactModal();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (window.scrollY < 200) {
        setActiveSection("");
        return;
      }

      const sections = navLinks
        .map((link) => {
          const id = link.href.replace("#", "");
          const el = document.getElementById(id);
          return el ? { href: link.href, top: el.offsetTop - 120 } : null;
        })
        .filter((s): s is { href: string; top: number } => s !== null)
        .sort((a, b) => a.top - b.top);

      let current = "";
      for (const section of sections) {
        if (window.scrollY >= section.top) {
          current = section.href;
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const id = href.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 90;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
        setActiveSection(href);
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full">
      <div
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-slate-200/90 shadow-md py-2 sm:py-2.5"
            : "bg-white/95 backdrop-blur-md border-b border-slate-200/60 py-2.5 sm:py-3.5"
        }`}
      >
        <div className="w-full max-w-[1750px] mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2 lg:gap-3">
          {/* Door to Door Laundry Brand Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <div className="relative h-9 sm:h-10 w-40 sm:w-48 flex items-center">
              <Image
                src="/logos/door-to-door-horizontal.png"
                alt="Door To Door Laundry"
                width={220}
                height={48}
                priority
                className="object-contain object-left h-8 sm:h-9 w-auto"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-0.5 xl:gap-1 2xl:gap-1.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;

              if (link.isExternal) {
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative py-1.5 px-1.5 xl:px-2 text-[10.5px] xl:text-[11px] 2xl:text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-[#DC1F62] transition-all whitespace-nowrap group"
                  >
                    <span className="relative pb-1">
                      {link.label}
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-[#DC1F62] opacity-0 scale-x-0 group-hover:opacity-80 group-hover:scale-x-100 transition-all duration-200" />
                    </span>
                  </a>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative py-1.5 px-1.5 xl:px-2 text-[10.5px] xl:text-[11px] 2xl:text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap group ${
                    isActive
                      ? "text-[#DC1F62] font-black"
                      : "text-slate-700 hover:text-[#DC1F62]"
                  }`}
                >
                  <span className="relative pb-1">
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-[2px] rounded-full transition-all duration-200 ${
                        isActive
                          ? "bg-[#DC1F62] opacity-100 scale-x-100"
                          : "bg-[#DC1F62] opacity-0 scale-x-0 group-hover:opacity-80 group-hover:scale-x-100"
                      }`}
                    />
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs: Direct Clean Log In Button */}
          <div className="hidden lg:flex items-center shrink-0">
            <a
              href={contactInfo.portalLoginUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-pink-50/80 hover:bg-[#DC1F62] hover:text-white text-slate-800 text-xs font-bold uppercase tracking-wider rounded-xl transition-all border border-pink-200/80 hover:border-[#DC1F62] active:translate-y-0.5 whitespace-nowrap shadow-xs hover:shadow-md group"
            >
              <LogIn className="w-3.5 h-3.5 text-[#DC1F62] group-hover:text-white transition-colors" />
              <span>Log In</span>
            </a>
          </div>

          {/* Mobile Menu & Quick Log In */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={contactInfo.portalLoginUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 bg-pink-50 text-slate-800 text-xs font-bold uppercase tracking-wider rounded-lg border border-pink-200"
            >
              Log In
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-xl bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors focus:outline-none border border-slate-200"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              key="mobile-nav-drawer"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="xl:hidden max-w-7xl mx-auto px-4 sm:px-6 mt-2 pointer-events-auto"
            >
              <div className="bg-white/98 backdrop-blur-2xl border border-slate-200 rounded-2xl p-4 shadow-2xl overflow-hidden">
                <div className="flex flex-col gap-1 mb-3">
                  {navLinks.map((link) => {
                    const isActive = activeSection === link.href;

                    if (link.isExternal) {
                      return (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center justify-between px-3.5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl text-slate-800 hover:bg-slate-100 hover:text-[#DC1F62] transition-colors"
                        >
                          <span>{link.label}</span>
                          <span className="text-[10px] text-slate-400 font-normal">↗</span>
                        </a>
                      );
                    }

                    return (
                      <Link
                        key={link.label}
                        href={link.href}
                        onClick={(e) => {
                          handleNavClick(e, link.href);
                          setMobileMenuOpen(false);
                        }}
                        className={`flex items-center justify-between px-3.5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl transition-colors ${
                          isActive
                            ? "bg-pink-50 text-[#DC1F62] border-l-4 border-[#DC1F62]"
                            : "text-slate-800 hover:bg-slate-100 hover:text-[#DC1F62]"
                        }`}
                      >
                        <span>{link.label}</span>
                        {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#DC1F62]" />}
                      </Link>
                    );
                  })}
                </div>

                <div className="flex flex-col gap-2 pt-3 border-t border-slate-200">
                  <a
                    href={contactInfo.portalOrderUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 bg-[#DC1F62] hover:bg-[#BE185D] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Schedule a Pickup</span>
                  </a>

                  <a
                    href={contactInfo.portalLoginUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider rounded-xl border border-slate-200"
                  >
                    <LogIn className="w-4 h-4 text-[#0284C7]" />
                    <span>Customer Log In</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      openContactModal({ intent: "commercial-bid" });
                    }}
                    className="w-full flex items-center justify-center gap-1.5 py-2.5 bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-sm"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Request Commercial Bid</span>
                  </button>

                  <a
                    href={contactInfo.phoneTel}
                    className="w-full flex items-center justify-center gap-2 py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-bold rounded-xl border border-slate-200"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#DC1F62]" />
                    <span>Call (631) 769-9922</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
