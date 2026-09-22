"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

type QuickRead = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
};

export default function QuickReadsCarousel({ reads }: { reads: readonly QuickRead[] }) {
  const rail = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  function updateActive() {
    const element = rail.current;
    if (!element) return;
    const cards = Array.from(element.children);
    const closest = cards.reduce((best, card, index) => {
      const distance = Math.abs((card as HTMLElement).offsetLeft - element.scrollLeft);
      return distance < best.distance ? { index, distance } : best;
    }, { index: 0, distance: Number.POSITIVE_INFINITY });
    setActive(closest.index);
  }

  function move(direction: -1 | 1) {
    const next = Math.max(0, Math.min(reads.length - 1, active + direction));
    rail.current?.children[next]?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
    setActive(next);
  }

  return (
    <div className="quick-read-carousel">
      <div className="quick-read-controls">
        <p aria-live="polite" className="text-xs font-bold uppercase tracking-[0.14em] text-black/44">Idea {String(active + 1).padStart(2, "0")} of {String(reads.length).padStart(2, "0")}</p>
        <div className="flex gap-2">
          <button type="button" onClick={() => move(-1)} disabled={active === 0} aria-label="Previous quick read" className="quick-read-arrow"><ArrowLeft size={16} /></button>
          <button type="button" onClick={() => move(1)} disabled={active === reads.length - 1} aria-label="Next quick read" className="quick-read-arrow"><ArrowRight size={16} /></button>
        </div>
      </div>
      <div ref={rail} onScroll={updateActive} className="quick-read-rail" aria-label="Five-minute clarity reads">
        {reads.map((read, index) => (
          <article key={read.slug} className="quick-read-card">
            <div className="flex items-start justify-between gap-5">
              <p className="section-label text-[#7134cb]">{read.category}</p>
              <span className="quick-read-number">{String(index + 1).padStart(2, "0")}</span>
            </div>
            <div className="mt-auto">
              <p className="text-sm font-medium text-black/42">{read.readTime} · one useful idea</p>
              <h3 className="mt-4 max-w-[18ch] text-[clamp(2rem,5vw,3.2rem)] font-semibold leading-[0.96] tracking-[-0.055em]">{read.title}</h3>
              <p className="mt-5 max-w-[52ch] text-base leading-relaxed text-black/56">{read.excerpt}</p>
              <Link href={`/insights/${read.slug}`} className="quick-read-link">Read this idea <ArrowRight size={16} aria-hidden="true" /></Link>
            </div>
          </article>
        ))}
      </div>
      <div className="quick-read-progress" aria-hidden="true"><span style={{ width: `${((active + 1) / reads.length) * 100}%` }} /></div>
      <p className="mt-4 text-sm text-black/45">Swipe, scroll or use the arrows. One idea is enough.</p>
    </div>
  );
}
