"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Sahi", href: "/sahi" },
  { name: "Temples", href: "/temples" },
  { name: "Ponds", href: "/ponds" },
  { name: "Schools", href: "/schools" },
  { name: "Leadership", href: "/leadership" },
  { name: "Events", href: "/events" },
  { name: "Gallery", href: "/gallery" },
  { name: "Projects", href: "/projects" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 py-3 shadow-lg backdrop-blur-xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className={`text-2xl font-black tracking-tighter transition-colors ${isScrolled ? 'text-primary-900' : 'text-white'}`}>
              RAGADIPADA
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs font-black uppercase tracking-[0.15em] transition-colors ${
                  isScrolled ? 'text-stone-700 hover:text-primary-600' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className={`rounded-full px-8 py-2.5 text-xs font-black uppercase tracking-widest transition-all hover:scale-105 active:scale-95 ${
                isScrolled ? 'bg-primary-900 text-white shadow-lg' : 'bg-white text-primary-900'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className={`h-7 w-7 transition-colors ${isScrolled ? 'text-primary-900' : 'text-white'}`}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            </svg>
          </button>
        </div>
      </div>
    </nav>

    {/* Backdrop - Moved Outside Nav */}
    <div
      className={`fixed inset-0 z-[60] bg-primary-900/40 backdrop-blur-sm transition-opacity duration-500 lg:hidden ${
        isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      onClick={() => setIsMobileMenuOpen(false)}
    />

    {/* Mobile Sidebar - Moved Outside Nav */}
    <div
      className={`fixed top-0 right-0 z-[70] h-full w-[85%] max-w-sm overflow-y-auto bg-white p-8 shadow-2xl transition-transform duration-500 ease-in-out lg:hidden ${
        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Close Button */}
      <button
        className="absolute top-6 right-6 p-2 text-primary-900 hover:rotate-90 transition-transform duration-300"
        onClick={() => setIsMobileMenuOpen(false)}
        aria-label="Close Menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="h-8 w-8"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="mt-16 flex flex-col gap-1">
        <span className="mb-6 text-[10px] font-black uppercase tracking-[0.3em] text-stone-400">Main Menu</span>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="rounded-xl py-4 text-2xl font-black text-primary-900 transition-all hover:translate-x-2 hover:text-primary-600"
          >
            {link.name}
          </Link>
        ))}
        <div className="mt-8 pt-8 border-t border-stone-100">
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block rounded-2xl bg-primary-900 py-5 text-center text-xs font-black uppercase tracking-[0.2em] text-white shadow-2xl transition-all hover:scale-[1.02] active:scale-95"
          >
            Get in Touch
          </Link>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-8 right-8 text-center">
        <p className="text-[10px] font-black uppercase tracking-widest text-stone-400">© 2026 Ragadipada</p>
      </div>
    </div>
    </>
  );
}
