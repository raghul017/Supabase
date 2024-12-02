"use client";

import { motion } from "framer-motion";

export function DashboardPreview() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Stay productive and manage your app
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            without leaving the dashboard
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-xl border border-gray-800 bg-black overflow-hidden"
        >
          {/* Dashboard UI */}
          <div className="p-4 border-b border-gray-800">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
          </div>
          <div className="p-8">
            <div className="grid grid-cols-12 gap-4">
              {/* Sidebar */}
              <div className="col-span-3 space-y-2">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="h-8 bg-gray-800 rounded animate-pulse"
                    style={{ animationDelay: `${i * 100}ms` }}
                  />
                ))}
              </div>
              {/* Main content */}
              <div className="col-span-9 space-y-4">
                <div className="h-32 bg-gray-800 rounded animate-pulse" />
                <div className="grid grid-cols-3 gap-4">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="h-24 bg-gray-800 rounded animate-pulse"
                      style={{ animationDelay: `${i * 100}ms` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
