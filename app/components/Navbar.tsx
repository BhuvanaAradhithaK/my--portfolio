"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Skull } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-md border-b border-zinc-800/80 shadow-[0_4px_20px_rgba(0,0,0,0.8)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Name */}
          <a
            href="#"
            className="group flex items-center gap-2.5 text-zinc-100 hover:text-red-400 transition-colors duration-300"
          >
            <span className="w-8 h-8 rounded-sm bg-zinc-950 border border-zinc-800 group-hover:border-red-800/80 group-hover:shadow-[0_0_12px_rgba(185,28,28,0.5)] flex items-center justify-center transition-all duration-300">
              <span className="font-gothic text-xs text-red-500 font-bold tracking-tighter">BK</span>
            </span>
            <span className="font-gothic text-lg sm:text-xl font-bold tracking-widest uppercase bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-400 bg-clip-text text-transparent group-hover:from-red-200 group-hover:to-red-400 transition-all duration-300">
              Bhuvana Aradhitha K
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative px-4 py-2 font-gothic text-sm uppercase tracking-widest text-zinc-300 hover:text-zinc-100 transition-all duration-300 group"
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  <span className="text-[10px] text-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    ❖
                  </span>
                  {link.label}
                </span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-transparent via-red-600 to-transparent group-hover:w-full transition-all duration-300" />
              </a>
            ))}

            <a
              href="#contact"
              className="ml-4 px-4 py-1.5 font-gothic text-xs uppercase tracking-widest text-red-400 border border-red-900/60 bg-red-950/20 rounded-sm hover:bg-red-900/40 hover:border-red-600 hover:text-zinc-100 hover:shadow-[0_0_15px_rgba(220,38,38,0.3)] transition-all duration-300"
            >
              Get in Touch
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-red-400 hover:bg-zinc-900/60 border border-transparent hover:border-zinc-800 rounded transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-zinc-800/80 px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 font-gothic text-sm uppercase tracking-widest text-zinc-300 hover:text-red-400 hover:bg-zinc-900/60 rounded border border-transparent hover:border-zinc-800 transition-all duration-200"
            >
              <span className="text-red-600 mr-2">❖</span>
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center w-full py-2.5 font-gothic text-xs uppercase tracking-widest text-zinc-100 bg-red-950/40 border border-red-800/80 rounded hover:bg-red-900/50 hover:shadow-[0_0_15px_rgba(220,38,38,0.4)] transition-all"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
