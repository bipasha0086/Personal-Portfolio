"use client";

import { Award, Sparkles } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { achievements } from "@/content/portfolio";
import { Reveal } from "../reveal";
import { SectionHeading } from "../section-heading";
import { SectionShell } from "../section-shell";

const themes = [
  {
    clickedBg: "bg-gradient-to-br from-rose-500 to-orange-500",
    dateBg: "bg-white/20 border-white/30 text-white",
    hoverBg: "hover:border-rose-500/40 hover:shadow-[0_20px_60px_rgba(244,63,94,0.15)]"
  },
  {
    clickedBg: "bg-gradient-to-br from-violet-500 to-fuchsia-500",
    dateBg: "bg-white/20 border-white/30 text-white",
    hoverBg: "hover:border-violet-500/40 hover:shadow-[0_20px_60px_rgba(139,92,246,0.15)]"
  },
  {
    clickedBg: "bg-gradient-to-br from-emerald-500 to-teal-500",
    dateBg: "bg-white/20 border-white/30 text-white",
    hoverBg: "hover:border-emerald-500/40 hover:shadow-[0_20px_60px_rgba(16,185,129,0.15)]"
  },
  {
    clickedBg: "bg-gradient-to-br from-blue-500 to-indigo-500",
    dateBg: "bg-white/20 border-white/30 text-white",
    hoverBg: "hover:border-blue-500/40 hover:shadow-[0_20px_60px_rgba(59,130,246,0.15)]"
  }
];

function AchievementCard({ item, index, theme }: any) {
  const [isClicked, setIsClicked] = useState(false);
  
  const bgClass = isClicked 
    ? `${theme.clickedBg} border-transparent shadow-xl scale-[1.02] shadow-2xl z-10 relative` 
    : `bg-gradient-to-br from-surface/80 to-surface/40 border-border/50 backdrop-blur-xl ${theme.hoverBg} hover:-translate-y-2 z-0`;
    
  const textClass = isClicked ? "text-white" : "text-foreground group-hover:text-foreground";
  const descClass = isClicked ? "text-white/90" : "text-muted/80";
  const dateBgClass = isClicked ? theme.dateBg : "bg-teal-500/10 border-teal-500/20 text-teal-400";
  const prizeBgClass = isClicked ? theme.dateBg : "bg-amber-500/10 border-amber-500/20 text-amber-500";
  const posBgClass = isClicked ? "bg-white/20 text-white border-white/30" : "bg-white/5 text-foreground/90 border-white/10";
  const projBgClass = isClicked ? "bg-white/20 text-white border-white/30" : "bg-indigo-500/10 text-indigo-400 border-indigo-500/20";
  const iconBgClass = isClicked ? "bg-white/20 border-white/30 text-white" : "bg-white/5 border-border/70";

  return (
    <motion.div 
      className={`group flex flex-col cursor-pointer rounded-[1.75rem] border p-6 sm:p-8 transition-all duration-500 ${bgClass}`}
      onClick={() => setIsClicked(!isClicked)}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-start justify-between mb-6">
        <div className={`flex items-center justify-center h-14 w-14 rounded-2xl border text-2xl shadow-inner transition-transform duration-300 group-hover:scale-110 ${iconBgClass}`}>
          {item.icon || <Award className="h-6 w-6 text-accent-strong" />}
        </div>
        <div className="flex flex-col items-end gap-2">
          {item.date && (
            <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide border transition-colors duration-500 ${dateBgClass}`}>
              {item.date}
            </span>
          )}
          {item.prize && (
            <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide border transition-colors duration-500 ${prizeBgClass}`}>
              Prize: {item.prize}
            </span>
          )}
        </div>
      </div>
      
      <div className="flex-grow space-y-4">
        <div>
          <h3 className={`text-xl sm:text-2xl font-bold transition-colors duration-500 ${textClass}`}>
            {item.title}
          </h3>
          <div className="mt-3 flex flex-wrap items-center gap-2.5 text-sm">
            {item.position && (
              <span className={`font-semibold px-2.5 py-1 rounded-md border transition-colors duration-500 ${posBgClass}`}>{item.position}</span>
            )}
            {item.project && (
              <span className={`font-semibold px-2.5 py-1 rounded-md border transition-colors duration-500 ${projBgClass}`}>Project: {item.project}</span>
            )}
          </div>
        </div>
        <p className={`text-sm leading-relaxed pt-2 transition-colors duration-500 ${descClass}`}>{item.detail}</p>
      </div>
    </motion.div>
  );
}

export function AchievementsSection() {
  return (
    <SectionShell id="achievements">
      <div className="mb-12 space-y-4">
        <Reveal>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cyan-500 uppercase tracking-widest pb-2" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
            Achievements
          </h2>
        </Reveal>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {achievements.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.08}>
            <AchievementCard item={item} index={index} theme={themes[index % themes.length]} />
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}