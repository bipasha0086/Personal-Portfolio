"use client";

import { MoonStar, SunMedium } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex h-11 items-center gap-2 rounded-full border border-border/70 bg-surface/80 px-4 text-sm font-medium text-foreground shadow-[0_12px_40px_rgba(15,23,42,0.28)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-accent/50 hover:bg-surface"
      aria-label="Toggle dark mode"
    >
      {resolvedTheme ? isDark ? <SunMedium className="h-4 w-4" /> : <MoonStar className="h-4 w-4" /> : null}
      <span>{resolvedTheme ? (isDark ? "Light" : "Dark") : "Theme"}</span>
    </button>
  );
}