"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

// Generate static stars data outside component to maintain hook purity
const starsData = Array.from({ length: 400 }).map((_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  size: Math.random() * 2.5 + 1, // 1px to 3.5px
  delay: Math.random() * 5,
  duration: Math.random() * 3 + 2,
  opacity: Math.random() * 0.8 + 0.2
}));

// Shooting stars data
const shootingStarsData = Array.from({ length: 15 }).map((_, i) => ({
  id: `shooting-${i}`,
  top: `${Math.random() * 50}%`,
  left: `${-20 - Math.random() * 30}%`,
  delay: Math.random() * 15,
  duration: Math.random() * 2 + 1.5,
  length: Math.random() * 100 + 50,
}));

export function AnimatedBackground() {
  const [isMounted, setIsMounted] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 100, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      const normalizedX = (e.clientX / window.innerWidth) * 2 - 1;
      const normalizedY = (e.clientY / window.innerHeight) * 2 - 1;
      mouseX.set(normalizedX);
      mouseY.set(normalizedY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Enhanced 3D Parallax offsets
  const layer1X = useTransform(smoothMouseX, [-1, 1], [-25, 25]);
  const layer1Y = useTransform(smoothMouseY, [-1, 1], [-25, 25]);
  
  const layer2X = useTransform(smoothMouseX, [-1, 1], [-80, 80]);
  const layer2Y = useTransform(smoothMouseY, [-1, 1], [-80, 80]);
  
  const hologramX = useTransform(smoothMouseX, [-1, 1], [60, -60]);
  const hologramY = useTransform(smoothMouseY, [-1, 1], [60, -60]);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#020617]">
      {/* Deep Holographic Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0f172a]/80 via-[#020617]/90 to-[#000000]" />

      {isMounted && (
        <>
          {/* Hologram Effects (Large glowing 3D orbs/rings) */}
          <motion.div
            className="absolute left-[10%] top-[-10%] h-[60rem] w-[60rem] rounded-full border-[2px] border-pink-500/10 bg-rose-500/10 blur-[100px]"
            style={{ x: hologramX, y: hologramY }}
            animate={{ scale: [1, 1.1, 1], rotateX: [0, 15, 0], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute right-[-10%] bottom-[-10%] h-[50rem] w-[50rem] rounded-full border-[1px] border-cyan-400/20 bg-sky-500/10 blur-[120px]"
            style={{ x: layer2X, y: layer2Y }}
            animate={{ scale: [1, 1.25, 1], rotateY: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute left-[40%] top-[30%] h-[40rem] w-[40rem] rounded-full border border-amber-500/20 bg-orange-500/10 blur-[150px]"
            style={{ x: layer1X, y: layer1Y }}
            animate={{ opacity: [0.2, 0.5, 0.2], rotateZ: [0, 45, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Starfield Layer 1 (Far stars, slow parallax) */}
          <motion.div className="absolute inset-0" style={{ x: layer1X, y: layer1Y }}>
            {starsData.slice(0, 200).map((star) => (
              <motion.div
                key={star.id}
                className="absolute rounded-full bg-slate-300 shadow-[0_0_12px_rgba(255,255,255,0.6)]"
                style={{ left: star.left, top: star.top, width: star.size, height: star.size }}
                animate={{ opacity: [star.opacity * 0.2, star.opacity, star.opacity * 0.2], scale: [0.8, 1.2, 0.8] }}
                transition={{ duration: star.duration, delay: star.delay, repeat: Infinity, ease: "easeInOut" }}
              />
            ))}
          </motion.div>

          {/* Starfield Layer 2 (Near stars, fast parallax, glowing) */}
          <motion.div className="absolute inset-0" style={{ x: layer2X, y: layer2Y }}>
            {starsData.slice(200).map((star) => (
              <motion.div
                key={star.id}
                className="absolute rounded-full bg-cyan-100 shadow-[0_0_20px_rgba(34,211,238,1)]"
                style={{ left: star.left, top: star.top, width: star.size * 1.5, height: star.size * 1.5 }}
                animate={{ opacity: [0.1, 1, 0.1], scale: [0.8, 1.5, 0.8] }}
                transition={{ duration: star.duration * 1.2, delay: star.delay, repeat: Infinity, ease: "easeInOut" }}
              />
            ))}
          </motion.div>

          {/* Shooting Stars */}
          <div className="absolute inset-0 overflow-hidden">
            {shootingStarsData.map((star) => (
              <motion.div
                key={star.id}
                className="absolute h-[2px] bg-gradient-to-r from-transparent via-white to-transparent rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                style={{ top: star.top, left: star.left, width: star.length, rotate: 35 }}
                animate={{ 
                  x: ['0vw', '120vw'],
                  y: ['0vh', '120vh'],
                  opacity: [0, 1, 0]
                }}
                transition={{ duration: star.duration, delay: star.delay, repeat: Infinity, ease: "linear" }}
              />
            ))}
          </div>
        </>
      )}

      {/* Subtle vignette to focus the center and blend edges */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.5)_60%,rgba(0,0,0,1)_100%)]" />
    </div>
  );
}