"use client";

import { motion } from "framer-motion";
import { languages } from "@/content/portfolio";
import { SectionShell } from "../section-shell";
import { Reveal } from "../reveal";

export function LanguagesSection() {
  return (
    <SectionShell id="languages" className="py-24">
      <div className="mb-12 flex justify-center sm:justify-start">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cyan-500 uppercase tracking-widest pb-2" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
          Languages
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {languages.map((lang, index) => {
          // Unique gradient for each language
          const gradient = 
            index === 0 ? "from-blue-400 to-cyan-300" :
            index === 1 ? "from-purple-400 to-pink-300" :
            "from-emerald-400 to-teal-300";
            
          const glow = 
            index === 0 ? "group-hover:shadow-[0_0_40px_rgba(56,189,248,0.3)]" :
            index === 1 ? "group-hover:shadow-[0_0_40px_rgba(232,121,249,0.3)]" :
            "group-hover:shadow-[0_0_40px_rgba(52,211,153,0.3)]";

          return (
            <Reveal key={lang.name} delay={index * 0.15}>
              <motion.div
                className={`group relative flex flex-col items-center justify-center h-64 rounded-[2.5rem] border border-white/10 bg-surface/20 backdrop-blur-xl transition-all duration-500 overflow-hidden ${glow}`}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Animated Background Blob */}
                <div className={`absolute -inset-20 opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-[60px] bg-gradient-to-br ${gradient} rounded-full animate-spin-slow`} />
                
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center px-6">
                  <h3 className={`text-4xl sm:text-5xl font-black uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-br ${gradient} drop-shadow-lg mb-4 transition-transform duration-500 group-hover:scale-110`}>
                    {lang.name}
                  </h3>
                  
                  <div className="h-px w-12 bg-white/20 mb-4 group-hover:w-24 group-hover:bg-white/50 transition-all duration-500" />
                  
                  <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-slate-300 group-hover:text-white transition-colors duration-300">
                    {lang.proficiency}
                  </p>
                </div>
              </motion.div>
            </Reveal>
          );
        })}
      </div>
    </SectionShell>
  );
}
