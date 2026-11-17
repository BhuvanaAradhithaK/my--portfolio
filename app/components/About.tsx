import React from "react";
import { Terminal, Code2, Cpu, Sparkles, BookOpen } from "lucide-react";

export default function About() {
  const coreSkills = [
    {
      name: "Java",
      level: "Core Competency",
      description: "Object-oriented architecture, data structures, multithreading & algorithmic problem solving.",
      icon: "☕",
      color: "from-amber-900/40 via-red-950/30 to-black",
      border: "border-red-900/50 hover:border-red-500",
    },
    {
      name: "C",
      level: "Systems & Memory",
      description: "Low-level programming, pointers, manual memory allocation, POSIX APIs, and high performance.",
      icon: "⚙️",
      color: "from-blue-950/40 via-zinc-950/30 to-black",
      border: "border-zinc-800 hover:border-zinc-400",
    },
    {
      name: "Python",
      level: "Automation & Logic",
      description: "Rapid prototyping, scripting, data manipulation, automation bots, and algorithm exploration.",
      icon: "🐍",
      color: "from-emerald-950/40 via-zinc-950/30 to-black",
      border: "border-emerald-950/60 hover:border-emerald-600/70",
    },
  ];

  const skillChips = [
    "Java",
    "C",
    "Python",
    "Data Structures",
    "Algorithms",
    "Object-Oriented Programming (OOP)",
    "System Architecture",
    "Memory Management",
    "Linux / Shell",
    "Git & GitHub",
    "Problem Solving",
    "Software Design",
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Gothic Section Header */}
      <div className="text-center space-y-3 mb-16">
        <span className="font-gothic text-xs tracking-[0.3em] uppercase text-red-500 font-semibold">
          ✦ The Chronicle ✦
        </span>
        <h2 className="font-gothic text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wider text-zinc-100">
          About Me
        </h2>
        <div className="flex items-center justify-center gap-3 pt-1">
          <div className="h-[1px] w-12 bg-red-800/80" />
          <span className="text-red-600 text-xs">❖</span>
          <div className="h-[1px] w-12 bg-red-800/80" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Bio Card */}
        <div className="lg:col-span-7 space-y-6">
          <div className="relative p-6 sm:p-8 rounded-sm bg-gradient-to-b from-zinc-900/90 to-black border border-zinc-800/90 shadow-[0_10px_35px_rgba(0,0,0,0.8)] backdrop-blur-sm group hover:border-red-900/60 transition-all duration-300">
            {/* Corner Gothic Flourishes */}
            <div className="absolute top-2 left-2 text-[10px] text-red-900/70 select-none">┌</div>
            <div className="absolute top-2 right-2 text-[10px] text-red-900/70 select-none">┐</div>
            <div className="absolute bottom-2 left-2 text-[10px] text-red-900/70 select-none">└</div>
            <div className="absolute bottom-2 right-2 text-[10px] text-red-900/70 select-none">┘</div>

            <div className="flex items-center gap-3 mb-4">
              <span className="p-2 rounded bg-zinc-950 border border-zinc-800 text-red-500">
                <BookOpen size={18} />
              </span>
              <h3 className="font-gothic text-lg sm:text-xl font-bold text-zinc-100 uppercase tracking-wider">
                Student & Perpetual Builder
              </h3>
            </div>

            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed font-sans font-normal">
              I am a student with a lot of interest in coding and building new things.
              I thrive on understanding how computational systems operate beneath the surface,
              channeling my curiosity into structured code and real-world solutions.
            </p>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed pt-3">
              Whether optimizing algorithmic logic in <span className="text-zinc-200 font-semibold">Java</span>,
              managing pointers and system resources in <span className="text-zinc-200 font-semibold">C</span>,
              or orchestrating automated workflows in <span className="text-zinc-200 font-semibold">Python</span>,
              I am continually refining my craft and seeking out novel challenges to solve.
            </p>

            {/* Quote banner */}
            <div className="mt-6 pt-5 border-t border-zinc-800/80 flex items-center gap-3 text-zinc-400 italic text-sm">
              <span className="text-red-600 font-gothic text-lg">“</span>
              <span>Driven by an unquenchable curiosity to explore, break down, and construct.</span>
            </div>
          </div>

          {/* Quick Pillars */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="p-4 rounded-sm bg-black/60 border border-zinc-900 text-center hover:border-zinc-800 transition-colors">
              <div className="font-gothic text-xl font-bold text-red-500">3+</div>
              <div className="text-xs text-zinc-400 tracking-wider uppercase font-gothic mt-1">Core Techs</div>
            </div>
            <div className="p-4 rounded-sm bg-black/60 border border-zinc-900 text-center hover:border-zinc-800 transition-colors">
              <div className="font-gothic text-xl font-bold text-zinc-200">100%</div>
              <div className="text-xs text-zinc-400 tracking-wider uppercase font-gothic mt-1">Curiosity</div>
            </div>
            <div className="col-span-2 sm:col-span-1 p-4 rounded-sm bg-black/60 border border-zinc-900 text-center hover:border-zinc-800 transition-colors">
              <div className="font-gothic text-xl font-bold text-zinc-300">2026</div>
              <div className="text-xs text-zinc-400 tracking-wider uppercase font-gothic mt-1">Builder Year</div>
            </div>
          </div>
        </div>

        {/* Right: Skills Section */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 rounded-sm bg-zinc-950/90 border border-zinc-800/90 shadow-[0_10px_35px_rgba(0,0,0,0.8)] backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-4">
              <Terminal size={18} className="text-red-500" />
              <h3 className="font-gothic text-base uppercase tracking-widest font-bold text-zinc-200">
                Key Languages
              </h3>
            </div>

            {/* Core 3 Languages Cards */}
            <div className="space-y-3">
              {coreSkills.map((skill) => (
                <div
                  key={skill.name}
                  className={`p-3.5 rounded-sm bg-gradient-to-r ${skill.color} border ${skill.border} transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(0,0,0,0.7)]`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xl">{skill.icon}</span>
                      <div>
                        <h4 className="font-gothic text-base font-bold text-zinc-100 uppercase tracking-wider">
                          {skill.name}
                        </h4>
                        <span className="text-[11px] font-mono text-zinc-400 tracking-wide">
                          {skill.level}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="mt-2 text-xs text-zinc-400 leading-relaxed font-sans">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Skill Tags / Chips (Requested explicitly) */}
            <div className="mt-6 pt-5 border-t border-zinc-800/80">
              <h4 className="font-gothic text-xs uppercase tracking-widest text-zinc-400 mb-3 flex items-center gap-1.5">
                <span>❖</span>
                <span>Skills & Knowledge Tags</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {skillChips.map((chip, idx) => {
                  const isPrimary = ["Java", "C", "Python"].includes(chip);
                  return (
                    <span
                      key={chip}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-xs font-medium font-sans tracking-wide transition-all duration-300 hover:scale-105 cursor-default ${
                        isPrimary
                          ? "bg-red-950/50 text-red-200 border border-red-800/80 hover:bg-red-900/60 hover:border-red-500 hover:shadow-[0_0_12px_rgba(220,38,38,0.4)]"
                          : "bg-zinc-900/80 text-zinc-300 border border-zinc-800 hover:border-zinc-600 hover:text-zinc-100 hover:bg-zinc-800/60"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          isPrimary ? "bg-red-500" : "bg-zinc-600"
                        }`}
                      />
                      {chip}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
