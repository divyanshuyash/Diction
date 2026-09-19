import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";
import PageIntro from "@/components/PageIntro";
import CallToAction from "@/components/CallToAction";
import { insights } from "@/lib/siteContent";

export const metadata: Metadata = { title: "Insights", description: "Practical thinking on positioning, authority, trust, websites and AI-era digital presence." };

const coverThemes = [
  { kicker: "Field note 01", coverTitle: "Seen ≠ remembered", palette: "bg-[#1a1320] text-white", accent: "bg-[#a467db]" },
  { kicker: "Field note 02", coverTitle: "Position before output", palette: "bg-[#ded8ce] text-[#151515]", accent: "bg-[#151515]" },
  { kicker: "Field note 03", coverTitle: "Trust is the scarce asset", palette: "bg-[#7d42b5] text-white", accent: "bg-white" },
] as const;

function InsightCard({ insight, index }: { insight: (typeof insights)[number]; index: number }) {
  const theme = coverThemes[index] ?? coverThemes[0];
  const number = String(index + 1).padStart(2, "0");

  return (
    <Link href={`/insights/${insight.slug}`} className="insight-card group flex h-full flex-col overflow-hidden border border-black/12 bg-[#f9f6f0] transition-[transform,box-shadow] hover:-translate-y-1">
      <div className={`insight-cover relative min-h-64 overflow-hidden p-7 ${theme.palette}`}>
        <div className="absolute right-5 top-1/2 -translate-y-1/2 text-[11rem] font-black leading-none tracking-[-0.12em] opacity-[0.06]" aria-hidden="true">D</div>
        <div className={`absolute bottom-7 right-7 h-1 w-16 ${theme.accent}`} aria-hidden="true" />
        <div className="relative flex h-full min-h-48 flex-col justify-between">
          <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.16em] opacity-65"><span>Diction / {theme.kicker}</span><span>{number}</span></div>
          <h3 className="max-w-[10ch] text-[clamp(2rem,3vw,2.7rem)] font-semibold leading-[0.92] tracking-[-0.06em]">{theme.coverTitle}</h3>
        </div>
      </div>
      <div className="flex min-h-72 flex-1 flex-col p-7 md:p-8">
        <div className="flex items-start justify-between gap-4">
          <p className="section-label max-w-[18ch] text-[#7134cb]">{insight.category}</p>
          <span className="shrink-0 rounded-full border border-black/10 bg-black/[0.035] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.1em] text-black/48">{insight.readTime}</span>
        </div>
        <h2 className="mt-6 text-[1.75rem] font-semibold leading-[1.02] tracking-[-0.05em] text-[#111]">{insight.title}</h2>
        <p className="mt-5 text-[0.94rem] leading-6 text-black/62">{insight.excerpt}</p>
        <div className="mt-auto flex items-center justify-between border-t border-black/10 pt-6 text-xs font-bold uppercase tracking-[0.12em]">
          <span className="text-black/38">Diction insight</span>
          <span className="flex items-center gap-2 text-[#7134cb]">Read essay <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" /></span>
        </div>
      </div>
    </Link>
  );
}

export default function InsightsPage() {
  return <main className="bg-[#080808] text-white"><PageHeader /><PageIntro eyebrow="Diction insights" title="Clear thinking for a recognisable presence." description="Practical essays for founders and experts who want to build authority, trust and opportunity without chasing every platform or trend." primary={{ label: "Read the latest insight", href: `/insights/${insights[0].slug}` }} secondary={{ label: "Use a free tool", href: "/tools" }} backgroundImage={{ src: "/hero-insights-founder.png", alt: "Founder developing ideas at a desk" }} /><section className="section-pad bg-[#f1eee8] px-6 text-[#111] md:px-10"><div className="mx-auto max-w-[1220px]"><div className="mx-auto max-w-3xl text-center"><p className="section-label text-[#7134cb]">The field notes</p><h2 className="editorial-heading mx-auto mt-6">Ideas worth returning to.</h2><p className="body-large mx-auto mt-6 max-w-2xl text-black/52">Three concise essays on the systems beneath a recognisable digital presence.</p></div><div className="mt-12 grid gap-5 lg:grid-cols-3">{insights.map((insight, index) => <InsightCard key={insight.slug} insight={insight} index={index} />)}</div></div></section><CallToAction title="Reading creates context. Diagnosis creates priority." body="Use a free Diction tool to understand which part of your digital presence deserves attention first." href="/tools" label="Explore free tools" /><PageFooter /></main>;
}
