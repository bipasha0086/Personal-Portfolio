"use client";

import { motion } from "framer-motion";
import { Cpu, Layers3, Palette } from "lucide-react";
import { skillCategories, interpersonalSkills } from "@/content/portfolio";
import { Reveal } from "../reveal";
import { SectionShell } from "../section-shell";

const categoryIcons = [Palette, Layers3, Cpu];

export function SkillsSection() {
  return (
    <SectionShell id="skills">
      <div className="space-y-8">
        {/* Header */}
        <Reveal>
          <div className="space-y-2 max-w-3xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cyan-500 uppercase tracking-widest pb-2" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
              EXPERTISE
            </h2>
            <p className="text-xl font-bold uppercase tracking-[0.4em] text-violet-600/80 dark:text-violet-400/70">
              Technical Skills
            </p>
          </div>
        </Reveal>

        {/* Skills Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = categoryIcons[index] ?? Cpu;

            return (
              <Reveal key={category.title} delay={index * 0.1}>
                <motion.div
                  className="premium-glow-card group rounded-[2rem] border border-border/60 bg-surface/40 p-8 shadow-[0_15px_45px_rgba(8,12,24,0.2)] backdrop-blur-xl transition"
                  whileHover={{ scale: 1.02, y: -6 }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
                    e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
                  }}
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <motion.div
                      className="inline-flex items-center justify-center h-12 w-12 rounded-2xl border border-border/50 bg-surface/60 text-violet-600 dark:text-violet-400 group-hover:border-fuchsia-500 dark:group-hover:border-fuchsia-400 transition shadow-inner"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Icon className="h-6 w-6" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-fuchsia-600 dark:group-hover:text-fuchsia-400 transition">{category.title}</h3>
                      <p className="text-xs text-muted">{category.description}</p>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-5 mt-4">
                    {category.items.map((item: { name: string; level: number }) => (
                      <div key={item.name} className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-bold text-foreground" style={{ fontFamily: '"Times New Roman", Times, serif' }}>{item.name}</span>
                          <span className="text-xs font-bold text-fuchsia-600 dark:text-fuchsia-400">{item.level}%</span>
                        </div>
                        <div className="h-2 rounded-full bg-surface/60 border border-border/40 relative">
                          <motion.div
                            className="h-full rounded-full bg-gradient-to-r from-violet-600 dark:from-violet-500 to-fuchsia-500 dark:to-fuchsia-400 shadow-[0_0_12px_rgba(217,70,239,0.2)] dark:shadow-[0_0_12px_rgba(217,70,239,0.4)] relative"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.level}%` }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}
                          >
                             <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full blur-[1px] animate-pulse" />
                          </motion.div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>

        {/* Professional Core Skills Header */}
        <Reveal>
          <div className="pt-8 space-y-2 max-w-3xl">
            <p className="text-xl font-bold uppercase tracking-[0.4em] text-violet-600/80 dark:text-violet-400/70">
              Professional Core Skills
            </p>
          </div>
        </Reveal>

        {/* Interpersonal Skills Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {interpersonalSkills.map((skill, index) => (
            <Reveal key={skill.name} delay={index * 0.1}>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-foreground" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
                    {skill.name}
                  </span>
                  <span className="text-xs font-bold text-fuchsia-600 dark:text-fuchsia-400">{skill.level}%</span>
                </div>
                <div className="h-2 rounded-full bg-surface/60 border border-border/40 relative">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-violet-600 dark:from-violet-500 to-fuchsia-500 dark:to-fuchsia-400 shadow-[0_0_12px_rgba(217,70,239,0.2)] dark:shadow-[0_0_12px_rgba(217,70,239,0.4)] relative"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
                     <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full blur-[1px] animate-pulse" />
                  </motion.div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
