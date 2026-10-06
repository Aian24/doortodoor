"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/data/navigation";
import { useContactModal } from "@/context/ContactModalContext";
import { Menu, X, ArrowUpRight, ArrowRight } from "lucide-react";

export default function Navbar() {
  const { openContactModal } = useContactModal();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      if (window.scrollY < 200) {
        setActiveSection("");
        return;
      }

      // Dynamically calculate which section is currently active based on real DOM position
      const sections = navLinks
        .map((link) => {
          const id = link.href.replace("#", "");
          const el = document.getElementById(id);
          return el ? { href: link.href, top: el.offsetTop - 140 } : null;
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
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const id = href.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 80;
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
        scrolled
          ? "bg-white/75 backdrop-blur-xl border-b border-slate-200/80 shadow-[0_4px_25px_rgba(0,0,0,0.04)] py-2.5 sm:py-3"
          : "bg-white/20 sm:bg-transparent backdrop-blur-md border-b border-black/[0.04] py-2.5 sm:py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 flex items-center justify-between gap-3 sm:gap-4">
        {/* Crisp Dark Brand Logo for Light/Frosted Header */}
        <Link href="/" className="flex items-center shrink-0">
          <div className="relative h-8 w-32 sm:w-38 flex items-center">
            <Image
              src="/logos/logo-compact.png"
              alt="ReLaunch.us Logo"
              width={160}
              height={32}
              priority
              className="object-contain object-left h-7 w-auto drop-shadow-xs"
            />
          </div>
        </Link>

        {/* Desktop Navigation Links with Active Line Indicator */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;

            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative py-1.5 px-3 text-[11px] xl:text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap group ${
                  isActive
                    ? "text-[#090D16] font-black"
                    : "text-slate-700 hover:text-[#C0622A]"
                }`}
              >
                <span className="relative pb-1">
                  {link.label}
                  {/* Bottom Active Line Indicator */}
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-[2px] rounded-full transition-all duration-200 ${
                      isActive
                        ? "bg-[#C0622A] opacity-100 scale-x-100"
                        : "bg-[#C0622A] opacity-0 scale-x-0 group-hover:opacity-80 group-hover:scale-x-100"
                    }`}
                  />
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2 xl:gap-2.5 shrink-0">
          <Link
            href="#bundle-builder"
            onClick={(e) => handleNavClick(e, "#bundle-builder")}
            className="inline-flex items-center justify-center gap-1.5 px-3.5 xl:px-4 py-2 bg-[#C0622A] hover:bg-[#a84f1d] text-white text-[11px] font-bold uppercase tracking-wider rounded-xl transition-all shadow-sm hover:shadow-md whitespace-nowrap active:translate-y-0.5 hover:scale-102"
          >
            <span>Build My Bundle</span>
            <ArrowRight className="w-3 h-3 text-white" />
          </Link>

          <button
            type="button"
            onClick={() => openContactModal({ intent: "strategy-session" })}
            className="inline-flex items-center justify-center gap-1.5 px-3.5 xl:px-4 py-2 bg-[#C0622A] hover:bg-[#a84f1d] text-white text-[11px] font-bold uppercase tracking-wider rounded-xl transition-all shadow-sm hover:shadow-md whitespace-nowrap active:translate-y-0.5 hover:scale-102 cursor-pointer"
          >
            <span>Book a Call</span>
            <ArrowUpRight className="w-3 h-3 text-white" />
          </button>
        </div>

        {/* Mobile Hamburger Button with comfortable margin from right */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-xl bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors focus:outline-none border border-slate-200 shadow-xs mr-2 shrink-0 cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-nav-drawer"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="lg:hidden max-w-7xl mx-auto px-4 sm:px-6 mt-2 pointer-events-auto"
          >
            <div className="bg-white/95 backdrop-blur-2xl border border-slate-200 rounded-2xl p-4 shadow-2xl overflow-hidden">
              <div className="flex flex-col gap-1 mb-4">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href;

                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={(e) => {
                        handleNavClick(e, link.href);
                        setMobileMenuOpen(false);
                      }}
                      className={`flex items-center justify-between px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl transition-colors whitespace-nowrap ${
                        isActive
                          ? "bg-orange-50 text-[#C0622A] border-l-4 border-[#C0622A]"
                          : "text-slate-800 hover:bg-slate-100 hover:text-[#C0622A]"
                      }`}
                    >
                      <span>{link.label}</span>
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#C0622A]" />}
                    </Link>
                  );
                })}
              </div>

              <div className="flex flex-col gap-2 pt-2 border-t border-slate-200">
                <Link
                  href="#bundle-builder"
                  onClick={(e) => {
                    handleNavClick(e, "#bundle-builder");
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#C0622A] hover:bg-[#a84f1d] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-sm whitespace-nowrap"
                >
                  <span>Build My Bundle</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openContactModal({ intent: "strategy-session" });
                  }}
                  className="w-full flex items-center justify-center gap-1.5 py-2.5 bg-[#C0622A] hover:bg-[#a84f1d] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-sm whitespace-nowrap"
                >
                  <span>Book a Call</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
