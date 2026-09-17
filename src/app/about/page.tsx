import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";
import PageIntro from "@/components/PageIntro";
import DictionFramework from "@/components/DictionFramework";
import CallToAction from "@/components/CallToAction";

export const metadata: Metadata = { title: "About Diction", description: "The beliefs, standards and seven-part framework behind Diction's approach to digital presence." };

const beliefs = [
  ["Expertise should be legible", "Credible work should not become invisible because its digital expression is unclear, fragmented or generic."],
  ["Recognition is designed", "Being known is not a fame metric. It is the result of a consistent association between a person, an idea and useful proof."],
  ["Depth creates premium", "Clear thinking, thoughtful evidence and a coherent experience matter more than decoration or volume."],
  ["Systems outlast tactics", "Platforms change. A strong position, recognisable point of view and trusted relationship system remain useful."],
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-[#050505] text-white"><PageHeader /><PageIntro eyebrow="About Diction" title="For founders who deserve to be known." description="Diction helps credible founders and experts turn what they know into a clear, trusted and opportunity-generating digital presence—without performing for every platform." primary={{ label: "Explore the framework", href: "#framework" }} secondary={{ label: "See capabilities", href: "/capabilities" }} image={{ src: "/founder-black-tee.png", alt: "Diction founder smiling in a black T-shirt" }} />
      <section className="section-pad"><div className="mx-auto max-w-[1280px] px-6 md:px-10"><p className="section-label text-[#8db7ff]">The manifesto</p><h2 className="editorial-heading mt-7">Good work. <span className="text-white/38">Easy to recognise.</span></h2><div className="mt-12 grid gap-5 sm:grid-cols-2">{beliefs.map(([title, body], index) => <article key={title} className={`min-h-72 rounded-[1.7rem] border p-8 md:p-10 ${index === 2 ? "border-[#2f7cf6] bg-[#2f7cf6]" : "border-white/13 bg-white/[0.035]"}`}><span className="text-xs font-bold text-[#8db7ff]">0{index + 1}</span><h3 className="mt-12 text-3xl font-semibold tracking-[-0.05em]">{title}</h3><p className="mt-4 max-w-md text-sm leading-relaxed text-white/56">{body}</p></article>)}</div></div></section>
      <div id="framework"><DictionFramework /></div>
      <section className="surface-inset bg-[#0b0b0d] px-6 py-20 text-white md:px-10 md:py-28"><div className="mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch"><div className="relative min-h-[430px] overflow-hidden rounded-[1.7rem] border border-white/12 bg-[url('/stock-founder-portrait.jpg')] bg-cover bg-center"><div className="absolute inset-0 bg-gradient-to-t from-black/86 via-black/10 to-transparent" /><div className="absolute inset-x-0 bottom-0 p-7 md:p-9"><p className="section-label text-[#8db7ff]">Selective by design</p><h2 className="mt-5 max-w-[11ch] text-4xl font-semibold leading-[0.98] tracking-[-0.05em]">The work needs participation, not passive approval.</h2></div></div><div className="rounded-[1.7rem] border border-white/13 bg-white/[0.035] p-7 text-white md:p-10"><p className="max-w-lg text-base leading-relaxed text-white/48">Diction is built for people with credible expertise who want long-term authority, are willing to participate in the thinking and value a connected system over isolated deliverables.</p><p className="section-label mt-10 border-t border-white/10 pt-8 text-white/32">Strong fit signals</p><ul className="mt-7 grid gap-4">{["There is real expertise or a body of work to build from.", "The goal is durable recognition, not a short burst of attention.", "The founder or expert is available for discovery and decisions.", "The desired opportunity is specific enough to design toward.", "There is capacity to implement the work with care."].map((item) => <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-white/62"><Check size={16} className="mt-0.5 shrink-0 text-[#8db7ff]" />{item}</li>)}</ul><Link href="/capabilities" className="mt-9 inline-flex items-center gap-2 text-sm font-semibold text-[#8db7ff]">How Diction can help <ArrowRight size={14} /></Link></div></div></section>
      <CallToAction title="Start with clarity, not a sales conversation." body="The free KNOWN masterclass teaches the full system so you can decide what to build next with context." /><PageFooter /></main>
  );
}
