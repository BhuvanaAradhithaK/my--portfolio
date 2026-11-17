import React from "react";
import { ArrowDown, Flame, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-24 pb-16 overflow-hidden gothic-mesh"
    >
      {/* Gothic Ambient Glow & Vignette */}
      <div className="absolute inset-0 pointer-events-none gothic-grid opacity-30" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-red-950/20 blur-[120px] rounded-full pointer-events-none" />

      {/* Subtle Gothic Crest Badge */}
      <div className="relative z-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-800/90 bg-zinc-950/80 backdrop-blur-md mb-8 hover:border-red-900/60 transition-colors duration-300 shadow-[0_0_15px_rgba(0,0,0,0.6)]">
        <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
        <span className="font-gothic text-xs tracking-[0.25em] uppercase text-zinc-400">
          Portfolio & Archive
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
      </div>

      {/* Main Name in Large Gothic Typography */}
      <div className="relative z-10 max-w-5xl mx-auto space-y-4">
        <h1 className="font-gothic font-extrabold uppercase text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-400 drop-shadow-[0_5px_15px_rgba(0,0,0,0.9)]">
          Bhuvana Aradhitha K
        </h1>

        {/* Gothic Decorative Divider */}
        <div className="flex items-center justify-center gap-4 py-2 opacity-80">
          <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-r from-transparent to-red-700" />
          <span className="text-red-600 text-sm sm:text-base">❖</span>
          <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-l from-transparent to-red-700" />
        </div>

        {/* One-Line Intro */}
        <p className="font-gothic text-lg sm:text-2xl md:text-3xl text-zinc-300 font-medium tracking-wide max-w-2xl mx-auto drop-shadow-sm">
          &ldquo;Enthusiastic and a curious kid&rdquo;
        </p>

        {/* Short Subtext / Mission */}
        <p className="text-zinc-500 text-sm sm:text-base max-w-xl mx-auto font-sans tracking-wide pt-2">
          Exploring the architecture of code, low-level mechanics, and software craftsmanship through the shadows of curiosity.
        </p>
      </div>

      {/* Two Action Buttons with Gothic Hover Effects */}
      <div className="relative z-10 mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-md">
        <a
          href="#projects"
          className="group relative w-full sm:w-auto px-8 py-3.5 rounded-sm bg-gradient-to-r from-red-950 via-zinc-950 to-zinc-900 border border-red-900/80 text-zinc-100 font-gothic text-sm font-semibold uppercase tracking-widest overflow-hidden transition-all duration-300 hover:scale-105 hover:border-red-500 hover:shadow-[0_0_25px_rgba(220,38,38,0.45)] text-center"
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            View My Work
            <span className="text-red-500 group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-red-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </a>

        <a
          href="#contact"
          className="group relative w-full sm:w-auto px-8 py-3.5 rounded-sm bg-black/80 border border-zinc-800 text-zinc-300 font-gothic text-sm font-semibold uppercase tracking-widest transition-all duration-300 hover:scale-105 hover:text-white hover:border-zinc-500 hover:bg-zinc-900/70 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] text-center"
        >
          <span className="relative z-10">Contact Me</span>
        </a>
      </div>

      {/* Scroll Down Indicator */}
      <div className="relative z-10 mt-16 sm:mt-24">
        <a
          href="#about"
          className="inline-flex flex-col items-center gap-2 text-zinc-500 hover:text-red-400 transition-colors duration-300 group"
          aria-label="Scroll to About section"
        >
          <span className="font-gothic text-[11px] uppercase tracking-[0.2em] text-zinc-500 group-hover:text-red-400">
            Descend
          </span>
          <ArrowDown size={18} className="animate-bounce text-zinc-600 group-hover:text-red-500" />
        </a>
      </div>
    </section>
  );
}
