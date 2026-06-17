"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useEffect, useState } from "react";
import { testimonials } from "@/content/portfolio";
import { Reveal } from "../reveal";
import { SectionHeading } from "../section-heading";
import { SectionShell } from "../section-shell";

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % testimonials.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, []);

  const testimonial = testimonials[activeIndex];

  return (
    <SectionShell id="testimonials">
      <SectionHeading
        eyebrow="Testimonials"
        title="Social proof presented with the same care as the rest of the experience."
        description="A carousel keeps the section compact while still giving room for a few strong voices."
      />

      <Reveal className="rounded-[2rem] border border-border/70 bg-[linear-gradient(145deg,rgba(14,23,42,0.94),rgba(16,24,39,0.66))] p-6 backdrop-blur-xl">
        <div className="flex items-center justify-between gap-4">
          <div className="rounded-2xl border border-border/70 bg-white/5 p-3 text-accent-strong">
            <Quote className="h-5 w-5" />
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveIndex((index) => (index - 1 + testimonials.length) % testimonials.length)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-white/5 text-foreground transition hover:border-accent/50 hover:bg-surface"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => setActiveIndex((index) => (index + 1) % testimonials.length)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-white/5 text-foreground transition hover:border-accent/50 hover:bg-surface"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={testimonial.author}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="mt-8 grid gap-5 lg:grid-cols-[1.3fr_0.7fr] lg:items-end"
          >
            <p className="max-w-3xl text-2xl leading-relaxed text-foreground sm:text-3xl">
              {testimonial.quote}
            </p>
            <div className="rounded-[1.5rem] border border-white/8 bg-white/5 p-5">
              <p className="text-sm font-semibold text-foreground">{testimonial.author}</p>
              <p className="mt-1 text-sm text-muted">{testimonial.role}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-6 flex gap-2">
          {testimonials.map((item, index) => (
            <button
              key={item.author}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all ${activeIndex === index ? "w-10 bg-accent" : "w-2.5 bg-white/20"}`}
              aria-label={`Show testimonial from ${item.author}`}
            />
          ))}
        </div>
      </Reveal>
    </SectionShell>
  );
}