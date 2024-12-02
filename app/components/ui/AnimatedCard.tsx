"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
}

export default function AnimatedCard({
  children,
  className = "",
}: AnimatedCardProps) {
  return (
    <motion.div
      className={`group relative rounded-lg border border-gray-800/50 bg-gray-900/30 backdrop-blur-xl transition-all duration-300 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute inset-[1px] rounded-lg bg-gray-900/90 backdrop-blur-xl" />
      <div className="relative">{children}</div>
    </motion.div>
  );
}
