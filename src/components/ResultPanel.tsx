"use client";

import { useEffect, useRef, type ReactNode } from "react";

export default function ResultPanel({ children }: { children: ReactNode }) {
  const panel = useRef<HTMLDivElement>(null);
  useEffect(() => {
    panel.current?.focus();
  }, []);
  return (
    <div ref={panel} tabIndex={-1} aria-label="Your assessment results" className="rounded-[2rem] border border-white/12 bg-white/[0.035] p-6 md:p-10">
      {children}
    </div>
  );
}
