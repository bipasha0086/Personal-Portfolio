"use client";

import { GraduationCap, Calendar, BookOpen, Sparkles } from "lucide-react";
import { educationEntries } from "@/content/portfolio";
import { Reveal } from "../reveal";
import { SectionHeading } from "../section-heading";
import { SectionShell } from "../section-shell";
import { motion } from "framer-motion";

export function EducationSection() {
  return (
    <SectionShell id="education">
      <div className="mb-12 flex justify-center sm:justify-start">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cyan-500 uppercase tracking-widest pb-2" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
          Education
        </h2>
      </div>

      <div className="flex flex-col gap-6">
        {educationEntries.map((edu, index) => (
          <Reveal key={edu.degree} delay={index * 0.1}>
            <motion.div
              className="group relative flex flex-col sm:flex-row sm:items-center justify-between rounded-2xl border border-border/60 bg-surface/40 p-6 backdrop-blur-xl hover:border-amber-600/50 dark:hover:border-amber-500/50 hover:bg-surface/60 transition shadow-[0_10px_40px_rgba(8,12,24,0.05)] dark:shadow-[0_10px_40px_rgba(8,12,24,0.25)]"
              whileHover={{ y: -2, scale: 1.01 }}
            >
              {/* Glow effect on hover */}
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-amber-500/10 dark:from-amber-500/20 to-orange-500/10 dark:to-orange-400/20 opacity-0 group-hover:opacity-100 transition blur-[1px] pointer-events-none" />

              <div className="relative flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 w-full text-foreground" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
                <div className="flex-1">
                  <h3 className="text-xl font-bold group-hover:text-amber-600 dark:group-hover:text-amber-400 transition">
                    {edu.school}
                  </h3>
                  <p className="text-base font-bold text-muted mt-1">
                    {edu.degree}
                  </p>
                  {edu.details.map((detail, i) => {
                    if (!detail.includes('CGPA') && !detail.includes('Score')) {
                      return (
                        <p key={i} className="text-sm text-muted/80 mt-2 leading-relaxed">
                          {detail}
                        </p>
                      );
                    }
                    return null;
                  })}
                </div>
                
                <div className="flex flex-col sm:items-end gap-1 mt-3 sm:mt-0 shrink-0">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-600/20 dark:border-amber-500/20 bg-amber-600/10 dark:bg-amber-500/5 px-3 py-1 text-sm font-semibold tracking-wider text-amber-600 dark:text-amber-400 whitespace-nowrap">
                    <Calendar className="h-4 w-4" /> {edu.period}
                  </span>
                  <p className="text-sm font-bold text-orange-600 dark:text-orange-400 mt-2 sm:text-right">
                    {edu.details.find(d => d.includes('CGPA') || d.includes('Score')) || ''}
                  </p>
                </div>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
