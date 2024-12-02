"use client";

import { motion } from "motion/react";

export function DatabasePreview() {
  return (
    <section className="py-24 px-4 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="rounded-xl border border-gray-800 bg-black overflow-hidden"
        >
          <div className="p-4 border-b border-gray-800">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
          </div>
          <div className="p-8">
            <pre className="text-sm text-gray-400">
              <code>{`// Example database query
const { data, error } = await supabase
  .from('countries')
  .select('name, capital')
  .eq('continent', 'Europe')
  .order('name', { ascending: true })
`}</code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
