"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Github, Twitter, Linkedin } from "lucide-react";

const footerLinks = {
  Product: [
    { name: "Database", href: "#" },
    { name: "Authentication", href: "#" },
    { name: "Edge Functions", href: "#" },
    { name: "Storage", href: "#" },
  ],
  Resources: [
    { name: "Documentation", href: "#" },
    { name: "API Reference", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Changelog", href: "#" },
  ],
  Company: [
    { name: "About", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Terms", href: "#" },
  ],
  Developers: [
    { name: "GitHub", href: "#" },
    { name: "Discord", href: "#" },
    { name: "Twitter", href: "#" },
  ],
};

const socialLinks = [
  { name: "GitHub", icon: Github, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
];

export function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black">
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-emerald-500 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-emerald-500" />
              <span className="font-semibold">Supabase</span>
            </div>

            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-emerald-500 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <link.icon className="w-5 h-5" />
                  <span className="sr-only">{link.name}</span>
                </motion.a>
              ))}
            </div>

            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} Supabase Inc.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
