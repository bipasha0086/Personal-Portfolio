"use client";

import { Code2, MonitorPlay } from "lucide-react";
import { industrialTrainingEntries } from "@/content/portfolio";
import { Reveal } from "../reveal";
import { SectionShell } from "../section-shell";

export function IndustrialTrainingSection() {
  return (
    <SectionShell id="industrial-training">
      <div className="mb-6 flex justify-center sm:justify-start">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cyan-500 uppercase tracking-widest pb-2" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
          Industrial Training
        </h2>
      </div>

      <div className="flex flex-col items-start gap-6 mt-8">
        {industrialTrainingEntries.map((entry, index) => {
          return (
            <Reveal key={entry.role} delay={index * 0.1} className="w-full max-w-4xl">
              <article className="w-full rounded-[2rem] border border-border/50 bg-surface/40 p-6 sm:p-8 shadow-[0_20px_50px_rgba(8,12,30,0.3)] backdrop-blur-xl transition-all duration-500 hover:border-border hover:bg-surface/60 group">
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center">
                  
                  {/* Left Side: Icon & Period */}
                  <div className="flex flex-col items-start gap-4 shrink-0 md:w-1/4">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full border bg-green-600/10 dark:bg-green-500/10 border-green-600/20 dark:border-green-500/20 shadow-[0_0_15px_rgba(22,163,74,0.1)] dark:shadow-[0_0_15px_rgba(34,197,94,0.2)] text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform duration-500">
                      <Code2 className="h-8 w-8" />
                    </div>
                    <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-green-600 dark:text-green-400">
                      {entry.period}
                    </p>
                  </div>

                  {/* Right Side: Content */}
                  <div className="flex flex-col gap-2 flex-grow border-t pt-4 md:border-t-0 md:pt-0 md:border-l md:border-border/50 md:pl-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                      {entry.role}
                    </h3>
                    <p className="text-sm sm:text-base font-medium text-muted">
                      {entry.company}
                    </p>
                    <div className="mt-2 pt-2 md:mt-4 md:pt-4 border-t border-border/50 w-full">
                      <p className="text-sm sm:text-base leading-relaxed text-slate-300 text-justify" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
                        {entry.summary}
                      </p>
                    </div>
                  </div>

                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </SectionShell>
  );
}
