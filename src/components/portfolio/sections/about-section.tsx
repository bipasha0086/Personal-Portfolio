"use client";

import { BadgeCheck, Sparkles } from "lucide-react";
import { aboutHighlights, aboutMetrics, aboutTimeline } from "@/content/portfolio";
import { Reveal } from "../reveal";
import { SectionHeading } from "../section-heading";
import { SectionShell } from "../section-shell";

export function AboutSection() {
  return (
    <SectionShell id="about">
      <div className="mb-6 flex justify-center sm:justify-start">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cyan-500 uppercase tracking-widest pb-2" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
          About
        </h2>
      </div>

      <div className="flex flex-col gap-8">
        
        {/* Left Column: Bio, Photo, and Highlights */}
        <div className="space-y-6">
          <Reveal className="rounded-[2rem] border border-border/60 bg-surface/40 p-8 shadow-[0_20px_50px_rgba(8,12,30,0.3)] backdrop-blur-xl">
            <div className="flex flex-col sm:flex-row items-start gap-8">
              {/* Bio description */}
              <div className="w-full space-y-3 text-justify text-base sm:text-lg leading-normal text-white drop-shadow-md" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
                  <p>
                    I am Bipasha, a Computer Science and Engineering student at Chandigarh University with a interest for Artificial Intelligence, Machine Learning, and Software Development. I enjoy transforming innovative ideas into impactful technology solutions that address real-world challenges.
                  </p>
                  <p>
                    My journey in technology has been shaped by hands-on experience in AI/ML, data analytics, and full-stack development. I have worked on projects including Mind Healix, an AI-powered mental wellness platform, EducoLink, a smart educational solution, Spam Detection Systems, and Handwritten Digit Recognition Models, gaining practical expertise in designing intelligent and scalable applications.
                  </p>
                  <p>
                    My technical skill set includes Python, Java, C++, SQL, Machine Learning, Data Analytics, Power BI, and Generative AI. I continuously explore emerging technologies and actively participate in hackathons, innovation challenges, and technical communities to strengthen my problem-solving and leadership abilities.
                  </p>
                  <p>
                    Samsung Innovation Campus Hackathon Winner, Build for Bharat 2026 Runner-Up, and Bharat Tech Experience Winner, achievements that reflect my commitment to innovation, teamwork, and continuous learning.
                  </p>
                  <p>
                    My goal is to build technology that creates meaningful impact, leveraging AI and software engineering to solve complex problems and contribute to the future of intelligent systems. Whether developing machine learning models, designing software solutions, or exploring cutting-edge technologies, I am driven by curiosity, creativity, and a desire to make a difference.
                  </p>
                </div>
              </div>

          </Reveal>
        </div>

      </div>
    </SectionShell>
  );
}