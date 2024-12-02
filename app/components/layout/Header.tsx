"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="relative group px-4 py-2 text-sm text-gray-400 hover:text-emerald-500 transition-colors"
  >
    <span>{children}</span>
    <motion.div
      className="absolute bottom-0 left-0 w-0 h-[1px] bg-emerald-500"
      whileHover={{ width: "100%" }}
      transition={{ duration: 0.2 }}
    />
  </Link>
);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50">
      {/* Gradient border */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />

      {/* Backdrop */}
      <div className="absolute inset-0 backdrop-blur-md bg-gray-950/50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <motion.div
                className="w-8 h-8 rounded bg-emerald-500"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="w-full h-full text-gray-950"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M16 4L28 12V20L16 28L4 20V12L16 4Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </motion.div>
              <span className="text-lg font-bold bg-gradient-to-r from-emerald-500 to-emerald-300 bg-clip-text text-transparent">
                DarkUI
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-4">
            <NavLink href="/features">Features</NavLink>
            <NavLink href="/pricing">Pricing</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/login">Login</NavLink>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/signup"
                className="px-4 py-2 rounded-lg bg-emerald-500 text-gray-950 hover:bg-emerald-400 transition-colors"
              >
                Start Free
              </Link>
            </motion.div>
          </nav>

          <button
            className="md:hidden text-gray-400 hover:text-emerald-500 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="px-4 pt-2 pb-3 space-y-1 bg-gray-950/80 backdrop-blur-md">
            <Link
              href="/features"
              className="block px-3 py-2 text-gray-400 hover:text-emerald-500 transition-colors"
            >
              Features
            </Link>
            {/* Add other mobile menu links */}
          </div>
        </motion.div>
      )}
    </header>
  );
}
