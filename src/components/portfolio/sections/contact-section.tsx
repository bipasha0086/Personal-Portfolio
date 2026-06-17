"use client";

import { Mail, Phone, User, MessageSquare } from "lucide-react";
import { Reveal } from "../reveal";
import { SectionHeading } from "../section-heading";
import { SectionShell } from "../section-shell";

export function ContactSection() {
  return (
    <SectionShell id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Let's connect and build something great."
        titleClassName="!text-xl sm:!text-2xl"
      />

      <div className="mt-8 flex justify-start">
        <Reveal className="w-full max-w-4xl rounded-[2rem] border border-border/70 bg-surface/75 p-8 sm:p-12 backdrop-blur-xl flex flex-col shadow-[0_0_40px_rgba(107,125,255,0.05)] hover:shadow-[0_0_60px_rgba(107,125,255,0.1)] transition-shadow duration-500">
          <div className="flex items-center gap-3 text-accent-strong mb-10">
            <MessageSquare className="h-6 w-6" />
            <p className="text-sm font-semibold uppercase tracking-[0.3em]">Contact Details</p>
          </div>
          
          <div className="space-y-10">
            <div className="flex items-start sm:items-center gap-6">
              <div className="shrink-0 rounded-full bg-accent/10 p-5 text-accent ring-1 ring-accent/20">
                <User className="h-7 w-7" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-muted">Name</p>
                <p className="mt-1.5 text-2xl font-medium text-foreground">Bipasha</p>
              </div>
            </div>
            
            <div className="flex items-start sm:items-center gap-6">
              <div className="shrink-0 rounded-full bg-accent/10 p-5 text-accent ring-1 ring-accent/20">
                <Phone className="h-7 w-7" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-muted">Phone No</p>
                <p className="mt-1.5 text-2xl font-medium text-foreground">+91 9877841193</p>
              </div>
            </div>

            <div className="flex items-start sm:items-center gap-6">
              <div className="shrink-0 rounded-full bg-accent/10 p-5 text-accent ring-1 ring-accent/20">
                <Mail className="h-7 w-7" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-muted">Gmail</p>
                <div className="mt-1.5">
                  <a href="mailto:rehanbipasha0086@gmail.com" className="block text-2xl font-medium text-foreground hover:text-accent transition-colors">
                    rehanbipasha0086@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}