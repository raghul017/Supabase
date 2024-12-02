"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Twitter } from "lucide-react";

const testimonials = [
  {
    content:
      "Supabase has completely transformed our development workflow. The real-time features and PostgreSQL support are game-changing.",
    author: {
      name: "Sarah Chen",
      handle: "@sarahcodes",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=1",
      role: "Senior Developer",
      company: "TechCorp",
    },
  },
  {
    content:
      "The authentication system is rock-solid and the database performance is incredible. Couldn't be happier with our choice.",
    author: {
      name: "Alex Rivera",
      handle: "@arivera",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=2",
      role: "CTO",
      company: "StartupX",
    },
  },
  {
    content:
      "Edge Functions have simplified our serverless architecture. The developer experience is unmatched.",
    author: {
      name: "James Wilson",
      handle: "@jwilson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=3",
      role: "Lead Engineer",
      company: "DevCo",
    },
  },
];

export function CustomerStories() {
  return (
    <section className="py-24 px-4 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Loved by developers
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative group rounded-xl border border-gray-800 bg-black/50 p-6 hover:border-emerald-500/50 transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.author.avatar}
                      alt={testimonial.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">
                      {testimonial.author.name}
                    </div>
                    <div className="text-sm text-gray-400">
                      {testimonial.author.role}
                    </div>
                  </div>
                </div>
                <Twitter className="w-5 h-5 text-blue-400" />
              </div>
              <p className="text-gray-400">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
