"use client";

import { motion } from "framer-motion";
import React from "react";

const benchmarks = [
  {
    metric: "Query Performance",
    value: "0.3ms",
    comparison: "50% faster",
    detail: "Average response time for indexed queries",
  },
  {
    metric: "Connection Time",
    value: "1.2ms",
    comparison: "3x faster",
    detail: "Time to first byte with connection pooling",
  },
  {
    metric: "Edge Latency",
    value: "<50ms",
    comparison: "Global P95",
    detail: "Edge function cold start time",
  },
  {
    metric: "Cache Hit Ratio",
    value: "99.9%",
    comparison: "Industry leading",
    detail: "Distributed cache performance",
  },
];

export function Benchmarks() {
  return (
    <section className="py-24 px-4 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl font-extralight text-white mb-4">
            Performance Benchmarks
          </h2>
          <p className="text-sm font-extralight text-gray-400 max-w-2xl mx-auto">
            Industry-leading performance across all metrics
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benchmarks.map((benchmark, i) => (
            <motion.div
              key={benchmark.metric}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-xl border border-gray-800 bg-gradient-to-b from-black/50 to-black/30 backdrop-blur-sm p-8 hover:border-emerald-500/50 transition-all duration-500"
            >
              {/* Animated gradient background */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(16, 185, 129, 0.15), transparent 70%)",
                }}
              />

              {/* Content */}
              <div className="relative space-y-4">
                <motion.div
                  className="text-4xl font-extralight bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent tracking-tight"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {benchmark.value}
                </motion.div>

                <div className="h-px w-12 bg-gradient-to-r from-emerald-500/50 to-transparent" />

                <div>
                  <h3 className="text-base font-extralight text-white mb-1">
                    {benchmark.metric}
                  </h3>
                  <p className="text-xs font-extralight text-emerald-500">
                    {benchmark.comparison}
                  </p>
                  <p className="text-xs text-gray-400 mt-2 font-extralight">
                    {benchmark.detail}
                  </p>
                </div>
              </div>

              {/* Hover effects */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Performance visualization */}
        <motion.div
          className="mt-16 h-64 relative rounded-xl border border-gray-800 bg-black/30 overflow-hidden backdrop-blur-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent" />

          {/* Animated bars */}
          <div className="absolute inset-0">
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-[1px]"
                style={{
                  left: `${(i / 50) * 100}%`,
                  height: `${30 + Math.random() * 70}%`,
                  bottom: 0,
                  background: `linear-gradient(to top, rgb(16 185 129 / 0.3), transparent)`,
                }}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.02,
                  duration: 0.5,
                  ease: "circOut",
                }}
              />
            ))}
          </div>

          {/* Floating particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-0.5 h-0.5 rounded-full bg-emerald-500/30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
