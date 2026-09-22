"use client";

import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { InsightArticle } from "@/lib/insightContent";

export default function QuickReadDeck({ article }: { article: InsightArticle }) {
  const rail = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const slides = article.sections;

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
    const next = Math.max(0, Math.min(slides.length - 1, active + direction));
    rail.current?.children[next]?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
    setActive(next);
  }

  return (
    <div className="quick-read-deck">
      <div className="quick-read-controls">
        <p aria-live="polite" className="text-xs font-bold uppercase tracking-[0.14em] text-black/44">Idea {String(active + 1).padStart(2, "0")} of {String(slides.length).padStart(2, "0")}</p>
        <div className="flex gap-2">
          <button type="button" onClick={() => move(-1)} disabled={active === 0} aria-label="Previous idea" className="quick-read-arrow"><ArrowLeft size={16} /></button>
          <button type="button" onClick={() => move(1)} disabled={active === slides.length - 1} aria-label="Next idea" className="quick-read-arrow"><ArrowRight size={16} /></button>
        </div>
      </div>
      <div ref={rail} onScroll={updateActive} className="quick-read-deck-rail" aria-label={`${article.title} idea cards`}>
        {slides.map((section, index) => (
          <article key={section.heading} className="quick-read-deck-slide">
            <div className="quick-read-deck-copy"><p className="quick-read-deck-index">{String(index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</p><h2 className="mx-auto mt-5 max-w-[17ch] text-[clamp(2rem,5.2vw,3.8rem)] font-semibold leading-[0.94] tracking-[-0.06em]">{section.heading}</h2><p className="mx-auto mt-5 max-w-[58ch] text-[1rem] leading-relaxed text-white/74 md:text-[1.08rem]">{section.paragraphs[0]}</p>{section.points ? <ul className="quick-read-points">{section.points.slice(0, 3).map((point) => <li key={point}>{point}</li>)}</ul> : null}</div>
          </article>
        ))}
      </div>
      <div className="quick-read-progress" aria-hidden="true"><span style={{ width: `${((active + 1) / slides.length) * 100}%` }} /></div>
      <p className="mt-4 text-sm text-black/45">Swipe through the cards. Stop when you have the useful bit.</p>
    </div>
  );
}
