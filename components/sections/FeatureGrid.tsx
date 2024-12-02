"use client";

import { motion } from "framer-motion";
import { Database, Lock, Zap } from "lucide-react";

const features = [
  {
    title: "Postgres Database",
    description:
      "Every project is a full Postgres database, the world's most trusted relational database.",
    icon: Database,
    image: (
      <div className="relative aspect-square bg-black">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f1114_1px,transparent_1px),linear-gradient(to_bottom,#0f1114_1px,transparent_1px)] bg-[size:1rem_1rem]" />
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 via-transparent to-transparent" />
      </div>
    ),
    points: ["100% portable", "Built-in Auth with RLS", "Easy to extend"],
  },
  {
    title: "Authentication",
    description:
      "Add user sign ups and logins, securing your data with Row Level Security.",
    icon: Lock,
    image: (
      <div className="relative aspect-square bg-black">
        <div className="grid grid-cols-2 gap-2 p-4">
          <div className="space-y-2">
            <div className="h-8 bg-gray-800 rounded animate-pulse" />
            <div className="h-8 bg-gray-800/50 rounded" />
          </div>
          <div className="space-y-2">
            <div className="h-8 bg-gray-800/50 rounded" />
            <div className="h-8 bg-gray-800 rounded animate-pulse delay-200" />
          </div>
        </div>
      </div>
    ),
    points: ["Multiple providers", "Row level security", "Secure by default"],
  },
  {
    title: "Edge Functions",
    description:
      "Easily write custom code without deploying or scaling servers.",
    icon: Zap,
    image: (
      <div className="relative aspect-square bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-transparent to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <code className="text-xs text-emerald-500/80">
            $ supabase functions serve
          </code>
        </div>
      </div>
    ),
    points: ["TypeScript support", "Database access", "Instant deployments"],
  },
];

export function FeatureGrid() {
  return (
    <div className="grid lg:grid-cols-3 gap-6">
      {features.map((feature, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2 }}
          viewport={{ once: true }}
          className="group relative rounded-xl border border-gray-800 bg-black/50 p-6 hover:border-emerald-500/50 transition-all duration-500"
        >
          <div className="mb-4 flex items-center gap-4">
            <div className="rounded-lg bg-gray-800/50 p-2">
              <feature.icon className="h-6 w-6 text-emerald-500" />
            </div>
            <h3 className="text-lg font-semibold text-white">
              {feature.title}
            </h3>
          </div>
          <p className="mb-4 text-sm text-gray-400">{feature.description}</p>
          <div className="mb-6 overflow-hidden rounded-lg border border-gray-800">
            {feature.image}
          </div>
          <ul className="space-y-2">
            {feature.points.map((point, j) => (
              <li
                key={j}
                className="flex items-center gap-2 text-sm text-gray-400"
              >
                <div className="h-1 w-1 rounded-full bg-emerald-500/50" />
                {point}
              </li>
            ))}
          </ul>
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
        </motion.div>
      ))}
    </div>
  );
}
