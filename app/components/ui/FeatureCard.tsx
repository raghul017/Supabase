"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image?: React.ReactNode;
  points?: string[];
  className?: string;
}

export default function FeatureCard({
  title,
  description,
  icon: Icon,
  image,
  points,
  className = "",
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`group relative rounded-xl border border-gray-800 bg-gray-900/50 p-6 hover:border-emerald-500/50 transition-all duration-500 ${className}`}
    >
      <div className="mb-4 flex items-center gap-4">
        <div className="rounded-lg bg-gray-800/50 p-2">
          <Icon className="h-6 w-6 text-emerald-500" />
        </div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <p className="mb-4 text-sm text-gray-400">{description}</p>
      {image && (
        <div className="mb-6 overflow-hidden rounded-lg border border-gray-800">
          {image}
        </div>
      )}
      {points && (
        <ul className="space-y-2">
          {points.map((point, i) => (
            <li
              key={i}
              className="flex items-center gap-2 text-sm text-gray-400"
            >
              <div className="h-1 w-1 rounded-full bg-emerald-500/50" />
              {point}
            </li>
          ))}
        </ul>
      )}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
    </motion.div>
  );
}
