import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { framework } from "@/lib/siteContent";

export default function DictionFramework({ compact = false }: { compact?: boolean }) {
  const items = framework.slice(0, compact ? 4 : framework.length);
  return (
    <section className="section-pad overflow-hidden bg-[#050505] text-white">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="grid gap-9 lg:grid-cols-[1fr_360px] lg:items-end">
          <div><p className="section-label text-[#8db7ff]">The D.I.C.T.I.O.N. framework</p><h2 className="editorial-heading mt-7">Seven connected parts. <span className="text-white/38">One recognisable presence.</span></h2></div>
          <p className="text-base leading-relaxed text-white/48">A digital presence becomes useful when positioning, audience, content, trust, platforms, opportunities and relationships reinforce one another.</p>
        </div>
      </div>
      <div className="mx-auto mt-14 max-w-[1280px] px-6 pb-8 md:px-10">
        <div className={`grid gap-4 sm:grid-cols-2 ${compact ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
          {items.map((item, index) => (
            <article key={`${item.letter}-${item.title}`} className={`flex min-h-[360px] flex-col rounded-[1.35rem] border p-7 ${!compact && index === items.length - 1 ? "lg:col-span-3" : ""} ${index === 3 ? "border-[#2f7cf6] bg-[#2f7cf6] text-white" : "border-white/13 bg-white/[0.03] text-white"}`}>
              <span className={`text-4xl font-semibold tracking-[-0.06em] ${index === 3 ? "text-white" : "text-[#8db7ff]"}`}>{item.letter}</span>
              <div className="mt-auto">
                <h3 className="text-3xl font-semibold leading-none tracking-[-0.05em]">{item.title}</h3>
                <p className={`mt-5 text-sm leading-relaxed ${index === 3 ? "text-white/72" : "text-white/48"}`}>{item.description}</p>
                <p className="mt-7 border-t border-white/14 pt-5 text-sm font-semibold leading-relaxed">{item.question}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">{compact ? <Link href="/about#framework" className="button-dark">See how all seven parts work together <ArrowRight size={16} aria-hidden="true" /></Link> : <Link href="/tools/digital-presence-score" className="button-dark">Measure the seven parts <ArrowRight size={16} aria-hidden="true" /></Link>}</div>
    </section>
  );
}
