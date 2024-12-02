"use client";

import { motion } from "framer-motion";

const ShootingStars = () => (
  <>
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={`star-${i}`}
        className="absolute h-[1px] w-[100px] bg-gradient-to-r from-emerald-500 to-transparent"
        style={{
          top: `${Math.random() * 100}%`,
          left: "-100px",
          rotate: "30deg",
        }}
        animate={{
          x: ["0vw", "200vw"],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: i * 4,
          ease: "linear",
        }}
      />
    ))}
  </>
);

const GridPattern = () => (
  <svg className="absolute inset-0 w-full h-full opacity-30">
    <pattern
      id="grid"
      x="0"
      y="0"
      width="32"
      height="32"
      patternUnits="userSpaceOnUse"
    >
      <path
        d="M0 32V0h32"
        fill="none"
        stroke="rgba(128,128,128,0.1)"
        strokeWidth="0.5"
      />
    </pattern>
    <rect width="100%" height="100%" fill="url(#grid)" />
  </svg>
);

const LaserBeam = () => (
  <motion.div
    className="absolute w-1 h-1 bg-emerald-500 rounded-full"
    style={{
      filter: "blur(1px)",
      boxShadow: "0 0 10px 2px rgba(16, 185, 129, 0.3)",
    }}
    animate={{
      x: ["-100vw", "200vw"],
      y: ["50vh", "50vh"],
    }}
    transition={{
      duration: 1.5,
      repeat: Infinity,
      ease: "linear",
    }}
  />
);

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-gray-950">
      {/* Base grid with SVG pattern */}
      <GridPattern />

      {/* Laser beams */}
      <div className="absolute inset-0 overflow-hidden">
        <LaserBeam />
        <ShootingStars />
      </div>

      {/* Animated grid cells */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`cell-${i}`}
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
          >
            <svg className="w-full h-full">
              <pattern
                id={`hex-${i}`}
                x="0"
                y="0"
                width="16"
                height="16"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M8 1L15 4.5V11.5L8 15L1 11.5V4.5L8 1Z"
                  stroke="rgba(16, 185, 129, 0.2)"
                  fill="none"
                  strokeWidth="0.5"
                />
              </pattern>
              <rect width="100%" height="100%" fill={`url(#hex-${i})`} />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950/50 to-gray-950" />
    </div>
  );
}
