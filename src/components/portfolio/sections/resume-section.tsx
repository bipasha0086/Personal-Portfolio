"use client";

import { Download, FileText, MoveRight } from "lucide-react";
import { resumeHighlights } from "@/content/portfolio";
import { Reveal } from "../reveal";
import { SectionHeading } from "../section-heading";
import { SectionShell } from "../section-shell";

function downloadResume() {
  const resumeText = [
    "Your Name",
    "Senior Software Engineer",
    "",
    "Highlights:",
    ...resumeHighlights.map((item) => `- ${item}`),
    "",
    "Experience, projects, and contact details should be customized for the final version.",
  ].join("\n");

  const blob = new Blob([resumeText], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "resume.txt";
  anchor.click();
  URL.revokeObjectURL(url);
}

export function ResumeSection() {
  return (
    <SectionShell id="resume">
      <SectionHeading
        eyebrow="Resume"
        title="A fast overview for recruiters and collaborators who want the signal quickly."
        description="The preview card captures the shape of the profile, while the download action gives a portable version that can be swapped for a PDF later."
      />

      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal className="rounded-[2rem] border border-border/70 bg-[linear-gradient(145deg,rgba(14,23,42,0.94),rgba(16,24,39,0.66))] p-6 backdrop-blur-xl">
          <div className="flex items-center gap-3 text-accent-strong">
            <FileText className="h-5 w-5" />
            <p className="text-sm font-semibold uppercase tracking-[0.3em]">Resume preview</p>
          </div>
          <div className="mt-6 space-y-4 rounded-[1.75rem] border border-white/8 bg-white/5 p-6">
            <h3 className="font-[family-name:var(--font-display)] text-3xl text-foreground">Your Name</h3>
            <p className="text-sm uppercase tracking-[0.28em] text-muted">Senior software engineer</p>
            <div className="space-y-3 pt-2">
              {resumeHighlights.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm leading-7 text-muted">
                  <span className="mt-2 h-2 w-2 rounded-full bg-accent-strong" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="rounded-[2rem] border border-border/70 bg-surface/75 p-6 backdrop-blur-xl">
          <p className="text-xs uppercase tracking-[0.3em] text-muted">Career summary</p>
          <h3 className="mt-3 text-2xl font-semibold text-foreground">Built for product teams that care about quality.</h3>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
            The work is centered on clean architecture, accessible interactions, and reliable delivery. That usually means less noise, more clarity, and interfaces people trust immediately.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <button
              type="button"
              onClick={downloadResume}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(75,118,255,0.35)] transition hover:-translate-y-0.5 hover:bg-accent-strong"
            >
              Download resume <Download className="h-4 w-4" />
            </button>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border/70 bg-white/5 px-5 py-3 text-sm font-semibold text-foreground transition hover:border-accent/50 hover:bg-surface"
            >
              Start a conversation <MoveRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}