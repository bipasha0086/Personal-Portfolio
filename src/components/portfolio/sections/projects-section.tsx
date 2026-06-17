"use client";

import { ArrowUpRight, Code2, Brain, LineChart, ShoppingCart, Presentation, CalendarDays, Laptop } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { projectFilters, projects } from "@/content/portfolio";
import { Reveal } from "../reveal";
import { SectionHeading } from "../section-heading";
import { SectionShell } from "../section-shell";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const getCategoryIcon = (category: string, className: string) => {
  switch (category) {
    case "AI & ML": return <Brain className={className} />;
    case "Analytics": return <LineChart className={className} />;
    case "Web App": return <ShoppingCart className={className} />;
    case "Platform": return <Presentation className={className} />;
    case "Productivity": return <CalendarDays className={className} />;
    default: return <Laptop className={className} />;
  }
};

const cardThemes = [
  {
    categoryText: "text-rose-600/80 dark:text-rose-400/70",
    hoverBorder: "hover:border-rose-500/60 dark:hover:border-rose-400/60",
    hoverText: "group-hover:text-rose-600 dark:group-hover:text-rose-400",
    badgeBg: "bg-rose-600/10 dark:bg-rose-500/20",
    badgeBorder: "border-rose-600/30 dark:border-rose-400/40",
    badgeText: "text-rose-600 dark:text-rose-400",
    btnBg: "bg-rose-600/10 dark:bg-rose-500/10",
    btnBorder: "border-rose-600/30 dark:border-rose-400/30",
    btnHover: "hover:bg-rose-600 hover:border-rose-500",
    btnIcon: "text-rose-700 dark:text-rose-400",
    shadow: "hover:shadow-[0_0_20px_rgba(244,63,94,0.3)]",
  },
  {
    categoryText: "text-blue-600/80 dark:text-blue-400/70",
    hoverBorder: "hover:border-blue-500/60 dark:hover:border-blue-400/60",
    hoverText: "group-hover:text-blue-600 dark:group-hover:text-blue-400",
    badgeBg: "bg-blue-600/10 dark:bg-blue-500/20",
    badgeBorder: "border-blue-600/30 dark:border-blue-400/40",
    badgeText: "text-blue-600 dark:text-blue-400",
    btnBg: "bg-blue-600/10 dark:bg-blue-500/10",
    btnBorder: "border-blue-600/30 dark:border-blue-400/30",
    btnHover: "hover:bg-blue-600 hover:border-blue-500",
    btnIcon: "text-blue-700 dark:text-blue-400",
    shadow: "hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]",
  },
  {
    categoryText: "text-emerald-600/80 dark:text-emerald-400/70",
    hoverBorder: "hover:border-emerald-500/60 dark:hover:border-emerald-400/60",
    hoverText: "group-hover:text-emerald-600 dark:group-hover:text-emerald-400",
    badgeBg: "bg-emerald-600/10 dark:bg-emerald-500/20",
    badgeBorder: "border-emerald-600/30 dark:border-emerald-400/40",
    badgeText: "text-emerald-600 dark:text-emerald-400",
    btnBg: "bg-emerald-600/10 dark:bg-emerald-500/10",
    btnBorder: "border-emerald-600/30 dark:border-emerald-400/30",
    btnHover: "hover:bg-emerald-600 hover:border-emerald-500",
    btnIcon: "text-emerald-700 dark:text-emerald-400",
    shadow: "hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]",
  },
  {
    categoryText: "text-purple-600/80 dark:text-purple-400/70",
    hoverBorder: "hover:border-purple-500/60 dark:hover:border-purple-400/60",
    hoverText: "group-hover:text-purple-600 dark:group-hover:text-purple-400",
    badgeBg: "bg-purple-600/10 dark:bg-purple-500/20",
    badgeBorder: "border-purple-600/30 dark:border-purple-400/40",
    badgeText: "text-purple-600 dark:text-purple-400",
    btnBg: "bg-purple-600/10 dark:bg-purple-500/10",
    btnBorder: "border-purple-600/30 dark:border-purple-400/30",
    btnHover: "hover:bg-purple-600 hover:border-purple-500",
    btnIcon: "text-purple-700 dark:text-purple-400",
    shadow: "hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]",
  },
  {
    categoryText: "text-amber-600/80 dark:text-amber-400/70",
    hoverBorder: "hover:border-amber-500/60 dark:hover:border-amber-400/60",
    hoverText: "group-hover:text-amber-600 dark:group-hover:text-amber-400",
    badgeBg: "bg-amber-600/10 dark:bg-amber-500/20",
    badgeBorder: "border-amber-600/30 dark:border-amber-400/40",
    badgeText: "text-amber-600 dark:text-amber-400",
    btnBg: "bg-amber-600/10 dark:bg-amber-500/10",
    btnBorder: "border-amber-600/30 dark:border-amber-400/30",
    btnHover: "hover:bg-amber-600 hover:border-amber-500",
    btnIcon: "text-amber-700 dark:text-amber-400",
    shadow: "hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]",
  },
  {
    categoryText: "text-cyan-600/80 dark:text-cyan-400/70",
    hoverBorder: "hover:border-cyan-500/60 dark:hover:border-cyan-400/60",
    hoverText: "group-hover:text-cyan-600 dark:group-hover:text-cyan-400",
    badgeBg: "bg-cyan-600/10 dark:bg-cyan-500/20",
    badgeBorder: "border-cyan-600/30 dark:border-cyan-400/40",
    badgeText: "text-cyan-600 dark:text-cyan-400",
    btnBg: "bg-cyan-600/10 dark:bg-cyan-500/10",
    btnBorder: "border-cyan-600/30 dark:border-cyan-400/30",
    btnHover: "hover:bg-cyan-600 hover:border-cyan-500",
    btnIcon: "text-cyan-700 dark:text-cyan-400",
    shadow: "hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]",
  },
];

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filteredProjects = projects.filter((project) => activeFilter === "All" || project.category === activeFilter);

  return (
    <SectionShell id="projects">
      <div className="space-y-12">
        {/* Header */}
        <div className="space-y-8">
          <Reveal>
            <div className="space-y-4">
              <p className="text-xs font-bold uppercase tracking-[0.4em] text-teal-600/80 dark:text-teal-400/70">Work</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cyan-500 uppercase tracking-widest pb-2" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
                Projects
              </h2>
              <p className="max-w-2xl text-lg text-muted/80 font-light">
                A curated collection of work spanning digital design, product engineering, and systems thinking.
              </p>
            </div>
          </Reveal>

          {/* Filters */}
          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-3">
              {projectFilters.map((filter) => (
                <motion.button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-lg border px-5 py-3 text-sm font-bold uppercase tracking-[0.2em] transition ${
                    activeFilter === filter
                      ? "border-teal-600/60 dark:border-teal-400/60 bg-gradient-to-r from-teal-600 dark:from-teal-400 to-cyan-600 dark:to-cyan-500 text-white shadow-[0_20px_50px_rgba(45,212,191,0.25)]"
                      : "border-border/50 bg-surface/40 text-muted/80 hover:border-teal-600/40 dark:hover:border-teal-400/40 hover:text-foreground hover:bg-surface/60"
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {filter}
                </motion.button>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Project Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => {
            const theme = cardThemes[index % cardThemes.length];
            return (
            <Reveal key={project.id} delay={index * 0.08}>
              <motion.div
                className={`premium-glow-card group relative overflow-hidden rounded-xl border border-border/40 bg-gradient-to-br from-surface/50 to-surface/20 backdrop-blur-sm ${theme.hoverBorder} hover:bg-surface/60 transition shadow-[0_10px_30px_rgba(8,12,30,0.1)] flex flex-col h-full`}
                whileHover={{ rotateY: -1, scale: 1.02, y: -6 }}
                style={{ perspective: 1200 }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
                  e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
                }}
              >
                {/* Edge-to-edge Project Banner / Image */}
                <div className={`relative w-full aspect-video overflow-hidden border-b border-border/20 bg-gradient-to-br ${project.bannerGradient || 'from-surface via-transparent to-teal-600/10 dark:to-teal-500/10'}`}>
                  {(project as any).image ? (
                    <img src={(project as any).image} alt={project.name} className="absolute inset-0 w-full h-full object-cover object-top brightness-125 transition-transform duration-700 group-hover:scale-105 z-10" />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 bg-white/5 blur-3xl rounded-full absolute" />
                      {getCategoryIcon(project.category, "w-24 h-24 text-foreground/10 mix-blend-overlay drop-shadow-xl relative z-10")}
                    </div>
                  )}
                </div>

                <div className="p-6 sm:p-8 space-y-6 flex-grow flex flex-col relative z-10">
                  {/* Header */}
                  <div className="space-y-3 flex-grow">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className={`text-xs font-bold uppercase tracking-[0.3em] ${theme.categoryText}`}>{project.category}</p>
                        <h3 className={`text-2xl font-bold text-foreground ${theme.hoverText} transition`}>
                          {project.name}
                        </h3>
                      </div>
                      {project.featured && (
                        <span className={`px-3 py-1 rounded-lg ${theme.badgeBg} border ${theme.badgeBorder} text-xs font-bold ${theme.badgeText}`}>
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted/75 leading-relaxed transition-all duration-300 group-hover:-translate-y-1 group-hover:text-foreground/90">{project.description}</p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="text-xs px-2 py-1 rounded border border-white/20 bg-white/5 text-white font-medium tracking-wide">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-xs px-2 py-1 text-white/80 font-medium">+{project.technologies.length - 4}</span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="pt-4 mt-auto w-full flex justify-end">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className={`group relative flex items-center justify-center w-12 h-12 rounded-full ${theme.btnBg} border ${theme.btnBorder} ${theme.btnHover} transition-all shadow-[0_0_10px_rgba(0,0,0,0.1)] ${theme.shadow}`}
                      whileHover={{ scale: 1.15, rotate: 360 }}
                      transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    >
                      <GithubIcon className={`h-5 w-5 ${theme.btnIcon} group-hover:text-white transition-colors`} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          )})}
        </div>
      </div>
    </SectionShell>
  );
}
