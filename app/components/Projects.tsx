import React from "react";
import ProjectCard, { ProjectCardProps } from "./ProjectCard";
import { Github, FolderGit2 } from "lucide-react";

export default function Projects() {
  const projectsData: ProjectCardProps[] = [
    {
      name: "System Monitor & Process Inspector",
      description:
        "A lightweight Unix terminal utility engineered to monitor real-time CPU states, memory pages, process trees, and POSIX threads using native system calls.",
      techStack: ["C", "Linux System Calls", "POSIX", "Memory Management"],
      githubUrl: "https://github.com/BhuvanaAradhithaK/system-monitor",
      category: "Systems & Low-Level",
      date: "2026",
    },
    {
      name: "Algorithmic Path Finder",
      description:
        "A structured graph traversal and pathfinding visualizer implementing Dijkstra's, A* heuristic search, and breadth-first search to compute optimal routes.",
      techStack: ["Java", "OOP", "Data Structures", "Graph Algorithms"],
      githubUrl: "https://github.com/BhuvanaAradhithaK/path-finder",
      category: "Algorithms & OOP",
      date: "2026",
    },
    {
      name: "Automated Data Scraper & Engine",
      description:
        "An intelligent web harvesting and analytics pipeline designed to extract distributed web feeds, clean unstructured content, and generate formatted analytical insights.",
      techStack: ["Python", "BeautifulSoup", "Data Analysis", "Automation"],
      githubUrl: "https://github.com/BhuvanaAradhithaK/data-insights-scraper",
      category: "Automation & Data",
      date: "2026",
    },
  ];

  return (
    <section id="projects" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Gothic Section Header */}
      <div className="text-center space-y-3 mb-16">
        <span className="font-gothic text-xs tracking-[0.3em] uppercase text-red-500 font-semibold">
          ✦ Selected Creations ✦
        </span>
        <h2 className="font-gothic text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wider text-zinc-100">
          Featured Projects
        </h2>
        <div className="flex items-center justify-center gap-3 pt-1">
          <div className="h-[1px] w-12 bg-red-800/80" />
          <span className="text-red-600 text-xs">❖</span>
          <div className="h-[1px] w-12 bg-red-800/80" />
        </div>
        <p className="text-zinc-400 text-sm sm:text-base max-w-lg mx-auto pt-2">
          A showcase of code forged across low-level systems, algorithmic problem solving, and automated workflows.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {projectsData.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>

      {/* GitHub Repository CTA Footer */}
      <div className="mt-14 text-center">
        <div className="inline-flex flex-col sm:flex-row items-center gap-3 p-4 px-6 rounded-sm bg-zinc-950/80 border border-zinc-800 hover:border-red-900/60 transition-colors">
          <span className="text-zinc-400 text-sm font-sans flex items-center gap-2">
            <FolderGit2 size={16} className="text-red-500" />
            Looking to explore more experiments and source code?
          </span>
          <a
            href="https://github.com/BhuvanaAradhithaK"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-gothic text-xs uppercase tracking-widest text-red-400 hover:text-red-300 font-semibold transition-colors"
          >
            Visit @BhuvanaAradhithaK on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
