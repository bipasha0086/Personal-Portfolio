"use client";

import { Rocket, Landmark, GraduationCap, BriefcaseBusiness } from "lucide-react";
import { experienceEntries } from "@/content/portfolio";
import { Reveal } from "../reveal";
import { SectionHeading } from "../section-heading";
import { SectionShell } from "../section-shell";

// Map roles to specific Lucide icons and colors for a premium look
const getRoleStyle = (role: string) => {
  if (role.includes("Ambassador")) {
    return {
      Icon: Rocket,
      colorClass: "text-pink-400",
      bgClass: "bg-pink-500/10 border-pink-500/20 shadow-[0_0_15px_rgba(244,114,182,0.2)]"
    };
  }
  if (role.includes("Secretary")) {
    return {
      Icon: Landmark,
      colorClass: "text-blue-400",
      bgClass: "bg-blue-500/10 border-blue-500/20 shadow-[0_0_15px_rgba(96,165,250,0.2)]"
    };
  }
  if (role.includes("Representative")) {
    return {
      Icon: GraduationCap,
      colorClass: "text-purple-400",
      bgClass: "bg-purple-500/10 border-purple-500/20 shadow-[0_0_15px_rgba(192,132,252,0.2)]"
    };
  }
  return {
    Icon: BriefcaseBusiness,
    colorClass: "text-accent-strong",
    bgClass: "bg-white/5 border-border/70"
  };
};

export function ExperienceSection() {
  return (
    <SectionShell id="experience">
      <div className="mb-6 flex justify-center sm:justify-start">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cyan-500 uppercase tracking-widest pb-2" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
          Experience
        </h2>
      </div>

      <div className="space-y-6 mt-8 relative before:absolute before:inset-0 before:ml-8 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
        {experienceEntries.map((entry, index) => {
          const { Icon, colorClass, bgClass } = getRoleStyle(entry.role);
          const isEven = index % 2 === 0;

          return (
            <Reveal key={entry.role} delay={index * 0.1}>
              <div className={`relative flex items-center justify-between md:justify-normal group ${isEven ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline Icon Marker */}
                <div className={`flex items-center justify-center w-16 h-16 rounded-full border-2 border-surface bg-background shrink-0 md:order-1 ${isEven ? 'md:-translate-x-1/2' : 'md:translate-x-1/2'} shadow-xl z-10 transition-transform duration-500 group-hover:scale-110`}>
                  <div className={`flex items-center justify-center w-12 h-12 rounded-full border ${bgClass} ${colorClass}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                {/* Content Card */}
                <article className={`w-[calc(100%-5rem)] md:w-[calc(50%-2.5rem)] rounded-[2rem] border border-border/50 bg-surface/40 p-6 sm:p-8 shadow-[0_20px_50px_rgba(8,12,30,0.3)] backdrop-blur-xl transition-all duration-500 hover:border-border hover:bg-surface/60 ${isEven ? 'text-left md:text-right' : 'text-left'}`}>
                  <div className={`flex flex-col gap-2 ${isEven ? 'md:items-end' : 'md:items-start'}`}>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-2">
                      <p className={`text-xs sm:text-sm font-bold uppercase tracking-widest ${colorClass}`}>
                        {entry.period}
                      </p>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                      {entry.role}
                    </h3>

                    <p className="text-sm sm:text-base font-medium text-muted">
                      {entry.company}
                    </p>

                    <div className="mt-4 pt-4 border-t border-border/50 w-full">
                      <p className="text-sm sm:text-base leading-relaxed text-slate-300 text-justify" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
                        {entry.summary}
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </Reveal>
          );
        })}
      </div>
    </SectionShell>
  );
}