"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { photos } from "@/content/portfolio";
import { Reveal } from "../reveal";
import { SectionShell } from "../section-shell";

export function PhotosSection() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const displayedPhotos = showAll ? photos : photos.slice(0, 8);

  return (
    <SectionShell id="photos">
      <div className="space-y-8">
        <Reveal>
          <div className="space-y-2 max-w-3xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cyan-500 uppercase tracking-widest pb-2" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
              GALLERY
            </h2>
            <p className="text-xl font-bold uppercase tracking-[0.4em] text-violet-600/80 dark:text-violet-400/70">
              Photos & Screenshots
            </p>
          </div>
        </Reveal>

        <Reveal>
          <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <AnimatePresence>
              {displayedPhotos.map((photo) => (
                <motion.div
                  key={photo.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden rounded-xl cursor-pointer shadow-[0_10px_30px_rgba(8,12,24,0.3)] w-full aspect-[16/9] group border border-border/50"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedPhoto(photo.src)}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {photos.length > 8 && (
            <div className="mt-12 flex justify-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="px-8 py-3 rounded-full border border-violet-500/50 hover:bg-violet-500/10 text-violet-400 font-medium transition-all shadow-[0_0_15px_rgba(139,92,246,0.15)] hover:shadow-[0_0_25px_rgba(139,92,246,0.3)]"
              >
                {showAll ? "Show Less" : "Show More"}
              </button>
            </div>
          )}
        </Reveal>
      </div>

      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.button
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-[101]"
              onClick={() => setSelectedPhoto(null)}
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
              className="relative w-full max-w-6xl max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedPhoto}
                alt="Full view"
                className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionShell>
  );
}
