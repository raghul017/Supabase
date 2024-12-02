"use client";

import { motion } from "framer-motion";
import { Github, MessageSquare } from "lucide-react";
import Link from "next/link";

export function CommunitySection() {
  return (
    <section className="py-24 px-4 border-t border-gray-800">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Join the community</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Discover what our community has to say about their Supabase
            experience
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="#"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <Github className="w-5 h-5" />
              GitHub discussions
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <MessageSquare className="w-5 h-5" />
              Discord
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
