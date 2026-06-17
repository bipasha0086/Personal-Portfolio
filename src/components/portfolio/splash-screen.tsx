"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide the splash screen after the animation sequence completes (e.g., 3.5 seconds)
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background overflow-hidden"
        >
          {/* Animated Background Glows */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.5, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute h-[40rem] w-[40rem] rounded-full bg-pink-500/20 blur-[120px] mix-blend-screen"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.4, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
            className="absolute top-1/2 left-1/4 h-[30rem] w-[30rem] rounded-full bg-cyan-500/20 blur-[100px] mix-blend-screen"
          />

          <div className="relative z-10 flex flex-col items-center gap-4 text-center">
            {/* "Hello!!" */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 uppercase">
                Hello!!
              </h1>
            </motion.div>

            {/* "Welcome to my portfolio" */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <p className="text-lg md:text-2xl font-medium tracking-[0.2em] text-foreground/80 uppercase">
                Welcome to my portfolio
              </p>
            </motion.div>

            {/* Glowing Loading Line */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "200px", opacity: 1 }}
              transition={{ duration: 1.5, delay: 1.2, ease: "easeInOut" }}
              className="mt-8 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent shadow-[0_0_15px_rgba(236,72,153,0.8)]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
