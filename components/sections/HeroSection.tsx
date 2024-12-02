"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CodePreview } from "@/components/ui/code-preview";
import { useEffect, useState } from "react";

interface TrailPoint {
  x: number;
  y: number;
  id: number;
}

export function HeroSection() {
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const { scrollY } = useScroll();
  const gridOpacity = useTransform(scrollY, [0, 400], [0.4, 0]);
  const gridSize = 32; // 2rem = 32px

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLElement;
      const rect = target.getBoundingClientRect();
      const x = Math.floor((e.clientX - rect.left) / gridSize) * gridSize;
      const y = Math.floor((e.clientY - rect.top) / gridSize) * gridSize;

      setTrail((prevTrail) => {
        const newPoint = { x, y, id: Date.now() };
        return [newPoint, ...prevTrail.slice(0, 5)];
      });
    };

    const container = document.querySelector(".hero-container") as HTMLElement;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove as EventListener);
      return () =>
        container.removeEventListener(
          "mousemove",
          handleMouseMove as EventListener
        );
    }
  }, [gridSize]);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center hero-container">
      {/* Base grid */}
      <motion.div
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.4)_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)]"
        style={{ opacity: gridOpacity }}
      />

      {/* Trail effect */}
      {trail.map((point) => (
        <motion.div
          key={point.id}
          className="absolute w-8 h-8 pointer-events-none"
          initial={{ opacity: 0.7, scale: 1.2 }}
          animate={{ opacity: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{
            left: point.x,
            top: point.y,
            backgroundColor: "rgba(16, 185, 129, 0.3)",
            boxShadow: "0 0 20px rgba(16, 185, 129, 0.2)",
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8 py-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Build in a weekend
            <br />
            <span className="bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
              Scale to millions
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-400">
            Build your next big thing with Supabase. Get started with free
            authentication, real-time subscriptions, and automatic API
            generation.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" variant="primary">
              Start your project <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Documentation
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Code preview */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative max-w-4xl mx-auto w-full px-4"
      >
        <div className="relative rounded-xl border border-gray-800 bg-black/50 overflow-hidden">
          <CodePreview />
        </div>
      </motion.div>
    </div>
  );
}
