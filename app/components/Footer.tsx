"use client";

import React from "react";
import { ArrowUp, Heart } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-zinc-900 bg-black text-zinc-400 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Subtle top gothic glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-2xl h-[1px] bg-gradient-to-r from-transparent via-red-900/60 to-transparent" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Name and Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <span className="font-gothic text-base font-bold uppercase tracking-widest text-zinc-200">
            Bhuvana Aradhitha K
          </span>
          <span className="hidden sm:inline text-zinc-700">|</span>
          <span className="font-gothic text-xs tracking-wider text-zinc-500">
            © 2026 Bhuvana Aradhitha K. All rights reserved.
          </span>
        </div>

        {/* Center / Aesthetic tagline */}
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-600">
          <span>❖</span>
          <span>Forged with Java, C, and Python</span>
          <span>❖</span>
        </div>

        {/* Back to Top */}
        <div>
          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-zinc-950 border border-zinc-800 text-zinc-400 hover:text-white hover:border-red-900 hover:bg-red-950/20 text-xs font-gothic uppercase tracking-widest transition-all duration-300"
            aria-label="Back to top"
          >
            <span>Ascend</span>
            <ArrowUp size={13} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
