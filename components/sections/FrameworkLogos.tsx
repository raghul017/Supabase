"use client";

import { motion } from "framer-motion";

const frameworks = [
  {
    name: "Next.js",
    logo: "/logos/nextjs.svg",
  },
  {
    name: "React",
    logo: "/logos/react.svg",
  },
  {
    name: "Vue",
    logo: "/logos/vue.svg",
  },
  {
    name: "Angular",
    logo: "/logos/angular.svg",
  },
  {
    name: "Svelte",
    logo: "/logos/svelte.svg",
  },
  {
    name: "Flutter",
    logo: "/logos/flutter.svg",
  },
  {
    name: "Android",
    logo: "/logos/android.svg",
  },
  {
    name: "iOS",
    logo: "/logos/apple.svg",
  },
];

export function FrameworkLogos() {
  return (
    <div className="relative">
      {/* Gradient fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10" />

      {/* Scrolling logos */}
      <div className="flex gap-12 items-center justify-center opacity-75">
        <motion.div
          className="flex gap-12 items-center"
          animate={{
            x: [0, -1920],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...frameworks, ...frameworks].map((framework, i) => (
            <div
              key={`${framework.name}-${i}`}
              className="relative w-12 h-12 grayscale hover:grayscale-0 transition-all duration-200"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 via-gray-900/50 to-gray-900/0 group-hover:opacity-0 transition-opacity" />
              {/* Placeholder for logos */}
              <div className="w-full h-full rounded-full bg-gray-800 animate-pulse" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
