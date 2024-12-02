"use client";

export function GridBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      {/* Simple grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.3)_1px,transparent_1px)] bg-[size:2rem_2rem]" />
    </div>
  );
}
