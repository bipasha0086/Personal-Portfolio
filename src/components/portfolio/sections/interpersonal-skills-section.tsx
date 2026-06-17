"use client";

import { motion } from "framer-motion";
import { interpersonalSkills } from "@/content/portfolio";
import { SectionShell } from "../section-shell";
import { Reveal } from "../reveal";

export function InterpersonalSkillsSection() {
  return (
    <SectionShell id="interpersonal" className="py-24">
      <Reveal>
        <div className="space-y-4 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cyan-500 uppercase tracking-widest pb-2" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
            Professional Interpersonal Skills
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted/80 font-light" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
            The essential capabilities that drive effective problem-solving, collaboration, and leadership.
          </p>
        </div>
      </Reveal>

      <div className="mt-16 grid gap-8 md:grid-cols-2 max-w-4xl mx-auto px-4">
        {interpersonalSkills.map((skill, index) => (
          <Reveal key={skill.name} delay={index * 0.1}>
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-foreground" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
                  {skill.name}
                </span>
                <span className="text-sm font-bold text-accent-strong">{skill.level}%</span>
              </div>
              <div className="h-2.5 w-full rounded-full bg-surface/60 border border-border/40 relative">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-accent to-accent-strong shadow-[0_0_15px_rgba(64,224,255,0.5)] relative"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                   <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white rounded-full blur-[1px] animate-pulse" />
                </motion.div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
