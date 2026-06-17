"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X } from "lucide-react";
import { courseeraCertificates } from "@/content/portfolio";
import { Reveal } from "../reveal";
import { SectionHeading } from "../section-heading";
import { SectionShell } from "../section-shell";

type Certificate = {
  id: number;
  name: string;
  src: string;
  type: string;
};

export function CertificationsSection() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [showAll, setShowAll] = useState(false);

  // Show 10 certificates initially (includes both images and PDFs)
  const displayedCerts = showAll ? courseeraCertificates : courseeraCertificates.slice(0, 10);

  return (
    <SectionShell id="certifications">
      <SectionHeading
        eyebrow="Certifications"
      />

      <Reveal>
        <motion.div layout className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          <AnimatePresence>
            {displayedCerts.map((cert, index) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: showAll ? 0 : index * 0.05 }}
                className="relative overflow-hidden rounded-xl cursor-pointer shadow-lg aspect-[4/3] group border border-border/50 bg-surface/80 flex flex-col items-center justify-center text-center"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCert(cert as Certificate)}
              >
                {cert.type === "image" ? (
                  <img
                    src={cert.src}
                    alt={cert.name}
                    className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                ) : (
                  <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none bg-white">
                    <iframe
                      src={`${cert.src}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                      className="absolute top-0 left-0 w-[150%] h-[150%] origin-top-left scale-[0.66] border-0"
                      title={cert.name}
                      tabIndex={-1}
                    />
                  </div>
                )}
                
                {/* Overlay with expand icon */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                  <Maximize2 className="text-white w-8 h-8 opacity-0 group-hover:opacity-100 transition-transform duration-300 scale-50 group-hover:scale-100" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {courseeraCertificates.length > 10 && (
          <motion.div layout className="mt-12 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 rounded-full border border-accent/50 hover:bg-accent/10 text-accent font-medium transition-all shadow-[0_0_15px_rgba(var(--accent),0.15)] hover:shadow-[0_0_25px_rgba(var(--accent),0.3)] flex items-center gap-2"
            >
              {showAll ? "Show Less" : `Show More (${courseeraCertificates.length - 10} Certificates)`}
            </button>
          </motion.div>
        )}
      </Reveal>

      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-md p-4 sm:p-8"
            onClick={() => setSelectedCert(null)}
          >
            <motion.button
              className="absolute top-6 right-6 p-3 rounded-full bg-surface text-foreground hover:bg-surface/80 border border-border transition-colors z-[101]"
              onClick={() => setSelectedCert(null)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-6 h-6" />
            </motion.button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl h-[80vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedCert.type === "image" ? (
                <img
                  src={selectedCert.src}
                  alt={selectedCert.name}
                  className="max-w-full max-h-full rounded-xl shadow-2xl object-contain border border-border/50"
                />
              ) : (
                <iframe
                  src={selectedCert.src}
                  className="w-full h-full rounded-xl shadow-2xl border border-border/50 bg-white"
                  title={selectedCert.name}
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionShell>
  );
}