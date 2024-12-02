"use client";

import { motion } from "motion/react";

const partners = [
  {
    name: "AWS",
    logo: "/logos/aws.svg",
    description: "Deploy on AWS infrastructure",
  },
  {
    name: "Vercel",
    logo: "/logos/vercel.svg",
    description: "Zero-config Vercel deployments",
  },
  {
    name: "Netlify",
    logo: "/logos/netlify.svg",
    description: "One-click Netlify integration",
  },
];

export function InfrastructurePartners() {
  return (
    <section className="py-24 px-4 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Infrastructure to innovate
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Scale with ease using modern cloud infrastructure
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-xl border border-gray-800 bg-black/50 p-8 hover:border-emerald-500/50 transition-all duration-500"
            >
              <div className="h-12 mb-6">
                <div className="w-12 h-12 bg-gray-800 rounded animate-pulse" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{partner.name}</h3>
              <p className="text-sm text-gray-400">{partner.description}</p>

              {/* Hover effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
