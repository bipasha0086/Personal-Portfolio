"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { AnimatedBackground } from "./animated-background";
import { BackToTop } from "./back-to-top";
import { CursorGlow } from "./cursor-glow";
import { SplashScreen } from "./splash-screen";
import { ThemeToggle } from "./theme-toggle";
import { navigationLinks } from "@/content/portfolio";
import { AboutSection } from "./sections/about-section";
import { AchievementsSection } from "./sections/achievements-section";
import { CertificationsSection } from "./sections/certifications-section";
import { ContactSection } from "./sections/contact-section";
import { EducationSection } from "./sections/education-section";
import { ExperienceSection } from "./sections/experience-section";
import { IndustrialTrainingSection } from "./sections/industrial-training-section";
import { FooterSection } from "./sections/footer-section";
import { HeroSection } from "./sections/hero-section";
import { InterpersonalSkillsSection } from "./sections/interpersonal-skills-section";
import { LanguagesSection } from "./sections/languages-section";
import { ProjectsSection } from "./sections/projects-section";
import { SkillsSection } from "./sections/skills-section";
import { PhotosSection } from "./sections/photos-section";

export function PortfolioPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 110, damping: 26, mass: 0.2 });

  return (
    <div className="relative isolate overflow-hidden">
      <SplashScreen />
      <AnimatedBackground />
      <CursorGlow />
      <motion.div
        className="fixed inset-x-0 top-0 z-50 h-1 origin-left bg-[linear-gradient(90deg,rgba(75,118,255,1),rgba(72,219,255,1))]"
        style={{ scaleX }}
      />

      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-2xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
          <div aria-hidden="true"></div>

          <nav className="hidden items-center gap-8 lg:flex">
            {navigationLinks.map((item) => (
              <a key={item.label} href={item.href} className="text-lg font-semibold text-muted transition-colors hover:text-foreground">
                {item.label}
              </a>
            ))}
          </nav>

        </div>
      </header>

      <main className="relative mx-auto w-full max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        {/* <InterpersonalSkillsSection /> */}
        <ExperienceSection />
        <IndustrialTrainingSection />
        <ProjectsSection />
        <PhotosSection />
        <AchievementsSection />
        <LanguagesSection />
        <CertificationsSection />
        <ContactSection />
        <FooterSection />
      </main>

      <BackToTop />

      <div className="pointer-events-none fixed inset-x-0 bottom-0 h-40 bg-[linear-gradient(to_top,rgba(3,7,18,0.8),transparent)]" />
    </div>
  );
}