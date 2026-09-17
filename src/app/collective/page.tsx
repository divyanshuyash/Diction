import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";
import PageIntro from "@/components/PageIntro";
import CallToAction from "@/components/CallToAction";

export const metadata: Metadata = { title: "The Diction Collective", description: "An editorial view of the Diction Founder Kit and the culture behind work built to last." };

const kit = [
  ["The field notebook", "A place for ideas worth returning to—not another branded giveaway."],
  ["The thinking pen", "A simple daily object chosen to make writing and decision-making feel deliberate."],
  ["The founder cap", "A quiet marker of the work behind the work, made for use rather than display."],
  ["The welcome letter", "A statement of standards, participation and the kind of presence we are building together."],
  ["The identity card", "A small reminder that being known is an association built through repeated choices."],
  ["The desk object", "A tactile prompt to protect depth, clarity and time for original thinking."],
];

export default function CollectivePage() {
  return (
    <main className="overflow-hidden bg-[#050505] text-white"><PageHeader /><PageIntro eyebrow="The Diction Collective" title="Some things are made to mark belonging." description="The Diction Founder Kit is an editorial expression of client culture: thoughtful objects for people building work, ideas and reputations meant to last. It is not a public merchandise store." primary={{ label: "Understand Diction", href: "/about" }} secondary={{ label: "Join the masterclass", href: "/known" }} image={{ src: "/founder-profile-left.png", alt: "Diction founder wearing a black kurta at an evening gathering" }} />
      <section className="section-pad px-6 md:px-10"><div className="mx-auto grid max-w-[1280px] gap-12 rounded-[2.4rem] bg-white p-5 text-[#171717] shadow-[0_18px_55px_rgba(38,28,47,0.08)] lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:p-8"><div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]"><Image src="/stock-founder-kit.jpg" alt="Minimal black notebook and pen on a clean desk" fill className="object-cover" sizes="(min-width: 1024px) 52vw, 100vw" /></div><div className="p-3 md:p-7"><p className="section-label text-[#2f62b6]">The founder kit</p><h2 className="editorial-heading mt-7">Useful. Quiet. <span className="text-[#77737d]">Deliberate.</span></h2><p className="body-large mt-7 text-black/52">Objects should support the practice behind a recognisable presence: capturing original ideas, making thoughtful decisions and showing up with consistency.</p><p className="mt-6 text-[10px] uppercase tracking-[0.1em] text-black/32">Stock photography: Vie Studio / Pexels</p></div></div></section>
      <section className="section-pad border-b border-white/8 pt-0"><div className="mx-auto max-w-[1280px] px-6 md:px-10"><h2 className="editorial-heading">The details. <span className="text-white/38">Chosen with intention.</span></h2><div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{kit.map(([title, body], index) => <article key={title} className={`flex min-h-[300px] flex-col rounded-[1.35rem] border p-8 ${index === 2 ? "border-[#2f7cf6] bg-[#2f7cf6]" : "border-white/13 bg-white/[0.03]"}`}><span className="text-xs font-bold text-[#8db7ff]">0{index + 1}</span><div className="mt-auto"><h3 className="text-2xl font-semibold tracking-[-0.045em]">{title}</h3><p className="mt-4 text-sm leading-relaxed text-white/52">{body}</p></div></article>)}</div><p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-white/38">Contents, formats and availability can evolve. No item shown here is offered for public sale.</p></div></section>
      <CallToAction eyebrow="The work comes first" title="Belonging starts with a shared standard." body="Begin with KNOWN: a free practical masterclass on the system that turns credible expertise into recognition and trust." /><PageFooter /></main>
  );
}
