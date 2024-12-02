"use client";

import { motion } from "framer-motion";

export function GridPattern() {
  return (
    <div className="absolute inset-0 -z-10">
      {/* Base grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f1114_1px,transparent_1px),linear-gradient(to_bottom,#0f1114_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_-20%,#000_70%,transparent_110%)]" />

      {/* Animated light beams */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"
            style={{
              top: `${25 + i * 25}%`,
              filter: "blur(1px)",
            }}
            animate={{
              x: ["-100%", "100%"],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: i * 2,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Animated grid cells */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32"
            style={{
              border: "1px solid rgba(16, 185, 129, 0.1)",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 0.5, 0],
              scale: [0.8, 1, 0.8],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              delay: i * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black/80" />
    </div>
  );
}
