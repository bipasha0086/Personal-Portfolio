"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Target, Briefcase, Zap, Code, User, Mail, Download } from "lucide-react";
import { socialLinks } from "@/content/portfolio";
import { SectionShell } from "../section-shell";
import { Reveal } from "../reveal";

const rotatingTitles = [
  "Innovator",
  "AI/ML Engineer",
  "Java Developer",
  "Object Oriented Programming",
  "Frontend Developer",
  "Problem Solver"
];

const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="#ffffff">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path fill="#0077b5" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const GmailIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path fill="#4285F4" d="M1.5 5.5v13a2 2 0 0 0 2 2h3.5v-10l5-3.5 5 3.5v10h3.5a2 2 0 0 0 2-2v-13l-10-7z" />
    <path fill="#EA4335" d="M22.5 5.5l-10 7-10-7v13a2 2 0 0 0 2 2h3.5v-15l4.5 3 4.5-3v15h3.5a2 2 0 0 0 2-2v-13z" />
    <path fill="#FBBC05" d="M12 12.5l5.5-4v10h-11v-10z" />
    <path fill="#34A853" d="M1.5 18.5v-10l5-3.5v13.5z" />
    {/* Clean, multi-color Gmail SVG representation */}
    <rect width="24" height="24" fill="none" />
    <path fill="#ea4335" d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
    {/* Just making it beautifully colorful */}
  </svg>
);

export function HeroSection() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [typedTitle, setTypedTitle] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const currentTitle = rotatingTitles[titleIndex];
    let position = 0;

    const typer = window.setInterval(() => {
      position += 1;
      setTypedTitle(currentTitle.slice(0, position));

      if (position >= currentTitle.length) {
        window.clearInterval(typer);
        window.setTimeout(() => {
          setTitleIndex((index) => (index + 1) % rotatingTitles.length);
        }, 2000);
      }
    }, 100);

    return () => window.clearInterval(typer);
  }, [titleIndex]);

  return (
    <SectionShell id="hero" className="flex flex-col items-center justify-center min-h-[95vh] pt-20" ref={containerRef}>
      <motion.div style={{ y, opacity }} className="w-full max-w-4xl mx-auto flex flex-col items-center text-center space-y-10 relative z-10">

        {/* Profile Photo */}
        <Reveal>
          <div className="relative group mx-auto w-max mt-8 mb-4">
            {/* Static Theme Ambient Glow */}
            <div className="absolute -inset-10 rounded-full bg-accent opacity-20 blur-[50px] group-hover:opacity-40 transition-opacity duration-700" />
            


            {/* Floating Picture Container */}
            <motion.div
              className="relative z-10 h-44 w-44 sm:h-56 sm:w-56 overflow-hidden rounded-full border-[4px] border-white/10 shadow-[0_0_50px_rgba(var(--accent),0.2)] bg-surface backdrop-blur-xl"
            >
              <img
                src="/profile.png"
                alt="Profile Photo"
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>
        </Reveal>

        {/* Name and Title */}
        <Reveal delay={0.1}>
          <div className="space-y-4 pt-4">
            <h1 className="font-[family-name:var(--font-display)] text-5xl sm:text-7xl font-extrabold tracking-tight text-foreground drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] uppercase">
              Bipasha
            </h1>
            <p className="text-lg sm:text-xl text-accent font-bold tracking-widest uppercase min-h-[30px]">
              {typedTitle}<span className="animate-pulse">_</span>
            </p>
          </div>
        </Reveal>

        {/* The Traits Badges: FOCUSED !! PROFESSIONAL !! RESILIENT */}
        <Reveal delay={0.2}>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 pt-6">
            {[
              { text: "FOCUSED", icon: Target },
              { text: "PROFESSIONAL", icon: Briefcase },
              { text: "RESILIENT", icon: Zap },
            ].map((trait, index) => {
              const Icon = trait.icon;
              return (
                <motion.div
                  key={trait.text}
                  className="group flex items-center gap-2.5 rounded-full border border-accent/20 bg-surface/30 px-6 py-3 backdrop-blur-lg shadow-[0_0_15px_rgba(107,125,255,0.05)] hover:border-accent/60 hover:bg-surface/50 hover:shadow-[0_0_30px_rgba(107,125,255,0.25)] transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -4 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <Icon className="h-4 w-4 text-accent group-hover:text-white transition-colors" />
                  <span className="text-xs sm:text-sm font-black tracking-[0.2em] text-foreground/90 group-hover:text-white transition-colors">
                    {trait.text}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </Reveal>

        {/* Social Links and Resume Download */}
        <Reveal delay={0.3}>
          <div className="pt-8 flex flex-col items-center gap-8">
            <div className="flex justify-center gap-6">
              {socialLinks.map((link) => {
                const isGithub = link.label === "GitHub";
                const isLinkedin = link.label === "LinkedIn";
                const Icon = isGithub ? GithubIcon : isLinkedin ? LinkedinIcon : GmailIcon;

                const hoverColor = isGithub ? "hover:text-white hover:bg-white/10 hover:border-white/50"
                  : isLinkedin ? "hover:text-white hover:bg-[#0077b5]/20 hover:border-[#0077b5]"
                    : "hover:text-white hover:bg-[#ea4335]/20 hover:border-[#ea4335]";

                const shadowColor = isGithub ? "hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                  : isLinkedin ? "hover:shadow-[0_0_30px_rgba(0,119,181,0.4)]"
                    : "hover:shadow-[0_0_30px_rgba(234,67,53,0.4)]";

                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
                    className={`group flex items-center justify-center h-16 w-16 rounded-full border border-accent/20 bg-surface/30 text-accent/80 transition-all duration-500 backdrop-blur-md shadow-[0_0_15px_rgba(107,125,255,0.05)] ${hoverColor} ${shadowColor}`}
                    whileHover={{ scale: 1.15, y: -6 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="h-7 w-7 transition-transform duration-500 group-hover:scale-110" />
                  </motion.a>
                );
              })}
            </div>

            {/* Download Resume Button */}
            <motion.a
              href="/BIPASHA_RESUME.pdf"
              download="Bipasha_Resume.pdf"
              className="shine-effect group relative inline-flex items-center justify-center gap-3 px-8 py-4 mt-2 rounded-full bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 text-white font-black tracking-[0.2em] uppercase overflow-hidden transition-all duration-500 hover:scale-105 shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_50px_rgba(64,224,255,0.7)]"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Download className="w-5 h-5 relative z-10 transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110" />
              <span className="relative z-10 text-sm drop-shadow-md">Download Resume</span>
            </motion.a>
          </div>
        </Reveal>

      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex flex-col items-center gap-3">
          <p className="text-[10px] uppercase tracking-[0.4em] text-muted/50 font-bold">Thank You</p>
          <div className="w-5 h-8 border border-border/40 rounded-full flex justify-center p-1 bg-surface/20 backdrop-blur-sm">
            <motion.div
              className="w-1 h-2 bg-accent rounded-full"
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>
      </motion.div>
    </SectionShell>
  );
}
