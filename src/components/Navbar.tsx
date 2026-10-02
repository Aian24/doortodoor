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
      setScrolled(window.scrollY > 20);

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm"
          : "bg-white border-b border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Static Logo on Left */}
        <Link href="/" className="flex items-center shrink-0">
          <div className="relative h-9 w-36 sm:w-44 flex items-center">
            <Image
              src="/logos/logo-compact.png"
              alt="ReLaunch.us Logo"
              width={180}
              height={36}
              priority
              className="object-contain object-left h-8 w-auto"
            />
          </div>
        </Link>

        {/* Desktop Navigation Links with Active Line Indicator */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2.5 h-full">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;

            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative h-20 flex items-center px-2.5 xl:px-3 text-[11px] xl:text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap group ${
                  isActive
                    ? "text-[#090D16] font-black"
                    : "text-slate-600 hover:text-[#090D16]"
                }`}
              >
                <span className="relative pb-1">
                  {link.label}
                  {/* Bottom Active Line Indicator hugging the text closely */}
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-[2.5px] rounded-full transition-all duration-200 ${
                      isActive
                        ? "bg-[#C0622A] opacity-100 scale-x-100"
                        : "bg-[#C0622A] opacity-0 scale-x-0 group-hover:opacity-60 group-hover:scale-x-100"
                    }`}
                  />
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Action Buttons with Consistent Styling */}
        <div className="hidden sm:flex items-center gap-2 xl:gap-3 shrink-0">
          <Link
            href="#bundle-builder"
            onClick={(e) => handleNavClick(e, "#bundle-builder")}
            className="inline-flex items-center justify-center gap-1.5 px-4 xl:px-5 py-2.5 bg-[#090D16] hover:bg-slate-800 text-white text-[11px] xl:text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-sm whitespace-nowrap active:translate-y-0.5"
          >
            <span>Build My Bundle</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <button
            type="button"
            onClick={() => openContactModal({ intent: "strategy-session" })}
            className="inline-flex items-center justify-center gap-1.5 px-4 xl:px-5 py-2.5 bg-[#C0622A] hover:bg-[#a84f1d] text-white text-[11px] xl:text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-sm whitespace-nowrap active:translate-y-0.5"
          >
            <span>Book a Call</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl bg-slate-100 text-slate-900 hover:bg-slate-200 transition-colors focus:outline-none"
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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 shadow-lg overflow-hidden"
          >
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
                    className={`flex items-center justify-between px-4 py-3 text-sm font-bold uppercase tracking-wider rounded-xl transition-colors whitespace-nowrap ${
                      isActive
                        ? "bg-slate-100 text-[#C0622A] border-l-4 border-[#C0622A]"
                        : "text-slate-800 hover:bg-slate-50 hover:text-[#C0622A]"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-[#C0622A]" />}
                  </Link>
                );
              })}
            </div>

            <div className="flex flex-col gap-2 pt-2 border-t border-slate-100">
              <Link
                href="#bundle-builder"
                onClick={(e) => {
                  handleNavClick(e, "#bundle-builder");
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#090D16] text-white text-xs font-bold uppercase tracking-wider rounded-xl whitespace-nowrap"
              >
                <span>Build My Bundle</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openContactModal({ intent: "strategy-session" });
                }}
                className="w-full flex items-center justify-center gap-1.5 py-3 bg-[#C0622A] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-sm whitespace-nowrap"
              >
                <span>Book a Call</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
