"use client";

import { motion } from "framer-motion";
import { Database, Lock, Zap, Code2 } from "lucide-react";
import React from "react";

const specs = [
  {
    title: "Database Specs",
    icon: Database,
    items: [
      "PostgreSQL 15+",
      "PgBouncer connection pooling",
      "Extensions pre-installed",
      "Daily backups with point-in-time recovery",
      "Up to 256GB memory",
      "Up to 4TB storage",
    ],
  },
  {
    title: "Security Features",
    icon: Lock,
    items: [
      "SOC2 Type II certified",
      "GDPR compliant",
      "ISO 27001 certified",
      "99.9% uptime SLA",
      "Enterprise SSO",
      "VPC isolation",
    ],
  },
  {
    title: "Edge Functions",
    icon: Zap,
    items: [
      "Deno runtime",
      "TypeScript support",
      "HTTP/WebSocket endpoints",
      "Scheduled tasks (cron)",
      "Database access",
      "Custom domains",
    ],
  },
  {
    title: "API Features",
    icon: Code2,
    items: [
      "Auto-generated APIs",
      "PostgREST 11+",
      "GraphQL support",
      "OpenAPI spec",
      "Cross-origin support",
      "Rate limiting",
    ],
  },
];

export function TechnicalSpecs() {
  return (
    <section className="py-24 px-4 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Technical Specifications</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Enterprise-grade infrastructure designed for scale
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {specs.map((spec, i) => (
            <motion.div
              key={spec.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-xl border border-gray-800 bg-black/50 p-6 hover:border-emerald-500/50 transition-all duration-500"
            >
              <div className="mb-4 flex items-center gap-4">
                <div className="rounded-lg bg-gray-800/50 p-2">
                  <spec.icon className="h-6 w-6 text-emerald-500" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {spec.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {spec.items.map((item, j) => (
                  <motion.li
                    key={j}
                    className="flex items-center gap-3 text-gray-400"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: j * 0.1 }}
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500/50" />
                    {item}
                  </motion.li>
                ))}
              </ul>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
