# Portfolio Architecture

## Component Hierarchy

- `app/layout.tsx`
  - `ThemeProvider`
  - global metadata
- `app/page.tsx`
  - `PortfolioPage`
- `components/portfolio/portfolio-page.tsx`
  - `AnimatedBackground`
  - `CursorGlow`
  - `ScrollProgress`
  - sticky header
  - section stack
  - `BackToTop`
- `components/portfolio/sections/*`
  - `HeroSection`
  - `AboutSection`
  - `SkillsSection`
  - `ExperienceSection`
  - `ProjectsSection`
  - `AchievementsSection`
  - `CertificationsSection`
  - `ResumeSection`
  - `TestimonialsSection`
  - `ContactSection`
  - `FooterSection`
- `components/portfolio/shared/*`
  - `Reveal`
  - `SectionShell`
  - `SectionHeading`
  - `ThemeToggle`
  - `BackToTop`

## Page Layout

1. Full-screen hero with typing headline, CTAs, profile card, and social proof.
2. About section with journey timeline, highlight cards, and stats.
3. Skills section with categorized proficiency cards and animated progress.
4. Experience section with expandable leadership timeline entries.
5. Projects showcase with filtering, spotlight card, and external links.
6. Achievements and certifications with premium cards and verification actions.
7. Resume section with preview, summary, and download action.
8. Testimonials carousel for social proof.
9. Contact section with elegant form and availability status.
10. Minimal footer.

## Design System

### Color Palette

- Background: deep navy and near-black surfaces.
- Primary accent: electric blue.
- Secondary accent: violet and indigo.
- Surfaces: glassy slate panels with soft borders.
- Text: high-contrast cool white with muted blue-gray secondary text.

### Typography

- Display: `Space Grotesk` for hero and section headlines.
- Body: `Manrope` for readable, modern copy.
- Mono: `JetBrains Mono` for technical labels and metrics.

### Visual Language

- Glassmorphism panels with subtle blur and translucent borders.
- Soft neumorphic depth via layered shadows.
- Radial gradients, floating orbs, and ambient lighting.
- Rounded rectangles and generous spacing.

## Animation Plan

- Hero typing loop for dynamic first impression.
- Scroll-triggered section reveals with staggered children.
- Button and card hover lift with shadow and scale.
- Interactive cursor glow for premium atmosphere.
- Animated scroll progress indicator.
- Back-to-top appearance after scroll threshold.
- Testimonials carousel crossfade and auto-advance.

## Folder Structure

```text
src/
  app/
    globals.css
    layout.tsx
    page.tsx
  components/
    portfolio/
      animated-background.tsx
      back-to-top.tsx
      cursor-glow.tsx
      portfolio-page.tsx
      reveal.tsx
      section-heading.tsx
      section-shell.tsx
      theme-toggle.tsx
      sections/
        about-section.tsx
        achievements-section.tsx
        certifications-section.tsx
        contact-section.tsx
        experience-section.tsx
        footer-section.tsx
        hero-section.tsx
        projects-section.tsx
        resume-section.tsx
        skills-section.tsx
        testimonials-section.tsx
    providers/
      theme-provider.tsx
  content/
    portfolio.ts
```

## Notes

- The content is centralized so the site can be personalized quickly.
- Sections are isolated so each block can evolve independently.
- Motion and theme support are layered on top of a clean semantic document structure.