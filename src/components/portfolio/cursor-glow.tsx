"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import { Sparkles } from "lucide-react";

export function CursorGlow() {
  const pointerX = useMotionValue(-50);
  const pointerY = useMotionValue(-50);

  const cursorX = useMotionValue(-240);
  const cursorY = useMotionValue(-240);
  const haloX = useMotionValue(-280);
  const haloY = useMotionValue(-280);

  const smoothX = useSpring(cursorX, { stiffness: 160, damping: 26, mass: 0.35 });
  const smoothY = useSpring(cursorY, { stiffness: 160, damping: 26, mass: 0.35 });
  const smoothHaloX = useSpring(haloX, { stiffness: 60, damping: 28, mass: 0.7 });
  const smoothHaloY = useSpring(haloY, { stiffness: 60, damping: 28, mass: 0.7 });

  const trail1X = useSpring(pointerX, { stiffness: 140, damping: 20, mass: 0.5 });
  const trail1Y = useSpring(pointerY, { stiffness: 140, damping: 20, mass: 0.5 });
  const trail2X = useSpring(pointerX, { stiffness: 100, damping: 22, mass: 0.8 });
  const trail2Y = useSpring(pointerY, { stiffness: 100, damping: 22, mass: 0.8 });
  const trail3X = useSpring(pointerX, { stiffness: 70, damping: 25, mass: 1.1 });
  const trail3Y = useSpring(pointerY, { stiffness: 70, damping: 25, mass: 1.1 });
  const trail4X = useSpring(pointerX, { stiffness: 45, damping: 28, mass: 1.4 });
  const trail4Y = useSpring(pointerY, { stiffness: 45, damping: 28, mass: 1.4 });

  useEffect(() => {
    const handleMove = (event: PointerEvent) => {
      pointerX.set(event.clientX);
      pointerY.set(event.clientY);

      cursorX.set(event.clientX - 160); // 320/2
      cursorY.set(event.clientY - 160);
      haloX.set(event.clientX - 280); // 560/2
      haloY.set(event.clientY - 280);
    };

    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, [cursorX, cursorY, haloX, haloY, pointerX, pointerY]);

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-0 hidden h-80 w-80 rounded-full bg-[radial-gradient(circle,_rgba(72,219,255,0.17),rgba(91,124,255,0.08)_42%,transparent_72%)] blur-3xl lg:block"
        style={{ x: smoothHaloX, y: smoothHaloY }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-0 hidden h-64 w-64 rounded-full border border-white/8 bg-[radial-gradient(circle,_rgba(255,255,255,0.08),transparent_60%)] backdrop-blur-2xl lg:block"
        style={{ x: smoothX, y: smoothY }}
        transition={{ type: "spring", stiffness: 80, damping: 20 }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-0 hidden h-28 w-28 rounded-full border border-accent/35 bg-[radial-gradient(circle,_rgba(72,219,255,0.3),rgba(91,124,255,0.16)_54%,transparent_80%)] shadow-[0_0_60px_rgba(72,219,255,0.18)] lg:block"
        style={{ x: smoothX, y: smoothY }}
        animate={{ scale: [1, 1.06, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Trailing Stars Effects */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-50 hidden -ml-3 -mt-3 text-accent lg:block opacity-90"
        style={{ x: trail1X, y: trail1Y }}
      >
        <Sparkles className="h-6 w-6 animate-pulse drop-shadow-[0_0_8px_rgba(107,125,255,0.8)]" />
      </motion.div>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-50 hidden -ml-2 -mt-2 text-accent-strong lg:block opacity-75"
        style={{ x: trail2X, y: trail2Y }}
      >
        <Sparkles className="h-4 w-4 animate-pulse drop-shadow-[0_0_6px_rgba(64,224,255,0.8)]" />
      </motion.div>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-50 hidden -ml-1 -mt-1 lg:block opacity-60"
        style={{ x: trail3X, y: trail3Y }}
      >
        <div className="h-2 w-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,1)] blur-[0.5px]" />
      </motion.div>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-50 hidden -ml-0.5 -mt-0.5 lg:block opacity-40"
        style={{ x: trail4X, y: trail4Y }}
      >
        <div className="h-1 w-1 rounded-full bg-accent shadow-[0_0_6px_rgba(107,125,255,1)]" />
      </motion.div>
    </>
  );
}
