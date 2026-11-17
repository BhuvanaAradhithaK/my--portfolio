import React from "react";
import { Github, ExternalLink, Code } from "lucide-react";

export interface ProjectCardProps {
  name: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  category?: string;
  date?: string;
}

export default function ProjectCard({
  name,
  description,
  techStack,
  githubUrl,
  category = "Software Engineering",
  date = "2026",
}: ProjectCardProps) {
  return (
    <div className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-sm bg-gradient-to-b from-[#111116] via-[#0b0b0f] to-black border border-zinc-800/90 shadow-[0_10px_30px_rgba(0,0,0,0.8)] transition-all duration-300 hover:-translate-y-1.5 hover:border-red-800/80 hover:shadow-[0_20px_40px_rgba(153,27,27,0.25)] overflow-hidden">
      {/* Subtle top crimson hairline accent on hover */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Background ambient radial highlight */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-red-950/20 blur-2xl rounded-full pointer-events-none group-hover:bg-red-900/30 transition-colors duration-300" />

      <div>
        {/* Card Header: Category & Date */}
        <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-3.5">
          <span className="inline-flex items-center gap-1.5 font-gothic tracking-widest uppercase text-red-500">
            <span>❖</span>
            {category}
          </span>
          <span className="text-zinc-600 font-sans tracking-wide">{date}</span>
        </div>

        {/* Project Name */}
        <h3 className="font-gothic text-xl sm:text-2xl font-bold uppercase tracking-wider text-zinc-100 group-hover:text-red-300 transition-colors duration-300 mb-3">
          {name}
        </h3>

        {/* Project Description */}
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-sans mb-6">
          {description}
        </p>

        {/* Tech-Stack Tags */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center px-2.5 py-1 rounded-sm text-xs font-mono text-zinc-300 bg-zinc-900/90 border border-zinc-800 group-hover:border-zinc-700 hover:!border-red-700/70 hover:!text-red-300 transition-colors duration-200"
              >
                #{tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer: View on GitHub Link */}
      <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-zinc-950 border border-zinc-800 text-zinc-200 font-gothic text-xs uppercase tracking-widest group-hover:border-red-900 group-hover:text-red-300 group-hover:bg-red-950/30 hover:!border-red-500 hover:!text-white hover:!shadow-[0_0_15px_rgba(220,38,38,0.35)] transition-all duration-300"
        >
          <Github size={15} className="text-zinc-400 group-hover:text-red-400" />
          <span>View on GitHub</span>
          <ExternalLink size={12} className="opacity-70" />
        </a>

        <span className="text-[10px] text-zinc-600 font-mono tracking-tight hidden sm:inline">
          Open Source
        </span>
      </div>
    </div>
  );
}
