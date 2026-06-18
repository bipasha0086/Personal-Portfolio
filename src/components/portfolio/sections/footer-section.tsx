"use client";

import { Mail } from "lucide-react";
import { socialLinks } from "@/content/portfolio";

export function FooterSection() {
  return (
    <footer className="border-t border-border/70 py-12 flex justify-center items-center">
      <div className="flex flex-col items-center gap-4">
        <p className="text-2xl font-black tracking-[0.3em] uppercase text-blue-500 animate-pulse drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
          Thank You
        </p>
        <a href="#contact" className="text-sm font-semibold tracking-widest uppercase text-muted hover:text-blue-400 transition-colors">
          Let's Connect
        </a>
      </div>
    </footer>
  );
}