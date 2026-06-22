"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { AnimatedBackground } from "./animated-background";
import { BackToTop } from "./back-to-top";
import { CursorGlow } from "./cursor-glow";
import { SplashScreen } from "./splash-screen";
import { ThemeToggle } from "./theme-toggle";
import { navigationLinks } from "@/content/portfolio";
import dynamic from "next/dynamic";
import { HeroSection } from "./sections/hero-section";

const AboutSection = dynamic(() => import("./sections/about-section").then((mod) => mod.AboutSection));
const AchievementsSection = dynamic(() => import("./sections/achievements-section").then((mod) => mod.AchievementsSection));
const CertificationsSection = dynamic(() => import("./sections/certifications-section").then((mod) => mod.CertificationsSection));
const ContactSection = dynamic(() => import("./sections/contact-section").then((mod) => mod.ContactSection));
const EducationSection = dynamic(() => import("./sections/education-section").then((mod) => mod.EducationSection));
const ExperienceSection = dynamic(() => import("./sections/experience-section").then((mod) => mod.ExperienceSection));
const IndustrialTrainingSection = dynamic(() => import("./sections/industrial-training-section").then((mod) => mod.IndustrialTrainingSection));
const FooterSection = dynamic(() => import("./sections/footer-section").then((mod) => mod.FooterSection));
const InterpersonalSkillsSection = dynamic(() => import("./sections/interpersonal-skills-section").then((mod) => mod.InterpersonalSkillsSection));
const LanguagesSection = dynamic(() => import("./sections/languages-section").then((mod) => mod.LanguagesSection));
const ProjectsSection = dynamic(() => import("./sections/projects-section").then((mod) => mod.ProjectsSection));
const SkillsSection = dynamic(() => import("./sections/skills-section").then((mod) => mod.SkillsSection));
const PhotosSection = dynamic(() => import("./sections/photos-section").then((mod) => mod.PhotosSection));

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
        <div className="flex w-full items-center justify-between px-6 py-4 lg:px-12">
          <div className="flex items-center">
            <span className="text-xl sm:text-2xl font-black tracking-widest uppercase text-foreground bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
              Welcome
            </span>
          </div>

          <nav className="hidden items-center gap-8 lg:flex">
            {navigationLinks.map((item) => (
              <a key={item.label} href={item.href} className="text-base sm:text-lg font-semibold text-muted transition-colors hover:text-foreground whitespace-nowrap">
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