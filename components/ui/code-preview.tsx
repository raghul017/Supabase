"use client";

import { motion } from "motion/react";

export function CodePreview() {
  return (
    <div className="p-4">
      <pre className="text-sm text-gray-400 overflow-x-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <code>{`// Example code
const { data, error } = await supabase
  .from('users')
  .select('*')
  .eq('id', userId)

if (error) {
  console.error('Error:', error.message)
  return
}

console.log('User data:', data)`}</code>
        </motion.div>
      </pre>
    </div>
  );
}
