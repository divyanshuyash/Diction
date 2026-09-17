import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays, Check, Clock3, Eye, FileText, Gauge, LockKeyhole, ShieldCheck, Target, Workflow } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";
import FounderBackdrop from "@/components/FounderBackdrop";
import { tools } from "@/lib/siteContent";

export const metadata: Metadata = {
  title: "Free Digital Presence Tools",
  description: "Diagnose the gaps between your expertise, recognition, trust and opportunity with Diction's free tools.",
};

const toolIcons = [Gauge, Target, FileText, ShieldCheck, CalendarDays];

function ToolPreview({ slug }: { slug: string }) {
  if (slug === "positioning-clarity-audit") {
    return <div className="grid gap-3">{["One audience", "One clear problem", "One distinct point of view"].map((label, index) => <div key={label} className="flex items-center gap-3 rounded-xl border border-white/12 bg-black/24 px-4 py-3 text-xs font-semibold text-white/72"><span className={`size-2 rounded-full ${index === 2 ? "bg-[#2f7cf6]" : "bg-white/24"}`} />{label}</div>)}</div>;
  }
  if (slug === "authority-content-audit") {
    return <div className="grid grid-cols-3 gap-3">{["Proof", "Perspective", "Pattern"].map((label, index) => <div key={label} className="flex h-36 flex-col justify-between rounded-xl border border-white/12 bg-black/24 p-4"><FileText size={18} className={index === 1 ? "text-[#8db7ff]" : "text-white/34"} /><span className="text-xs font-semibold text-white/65">{label}</span></div>)}</div>;
  }
  if (slug === "website-trust-audit") {
    return <div className="overflow-hidden rounded-xl border border-white/12 bg-black/24"><div className="flex h-9 items-center gap-1.5 border-b border-white/10 px-4"><span className="size-2 rounded-full bg-[#2f7cf6]" /><span className="size-2 rounded-full bg-white/20" /><span className="size-2 rounded-full bg-white/10" /></div><div className="grid grid-cols-[1.1fr_0.9fr] gap-4 p-5"><div><div className="h-2 w-16 rounded-full bg-white/14" /><div className="mt-5 h-3 w-full rounded-full bg-white/16" /><div className="mt-2 h-3 w-4/5 rounded-full bg-white/10" /><div className="mt-5 h-8 w-24 rounded-lg bg-[#2f7cf6]" /></div><div className="rounded-lg bg-gradient-to-br from-[#9b62ff] to-[#2f7cf6]" /></div></div>;
  }
  return <div className="grid grid-cols-3 gap-3">{["30", "60", "90"].map((day, index) => <div key={day} className="rounded-xl border border-white/12 bg-black/24 p-4 text-center"><span className="text-2xl font-semibold">{day}</span><span className="mt-1 block text-[9px] uppercase tracking-[0.12em] text-white/35">days</span><div className={`mx-auto mt-5 h-14 w-1.5 rounded-full ${index === 0 ? "bg-[#8db7ff]" : index === 1 ? "bg-[#9b62ff]" : "bg-[#ff805d]"}`} /></div>)}</div>;
}

export default function ToolsPage() {
  const [featuredTool, ...focusedTools] = tools;

  return (
    <main className="overflow-hidden bg-[#050505] text-white">
      <PageHeader />

      <section className="relative flex min-h-[100svh] items-end overflow-hidden border-b border-white/8 px-6 pb-16 pt-36 md:px-10 md:pb-24 lg:pb-28">
        <FounderBackdrop src="/founder-black-tee.png" alt="Diction founder smiling in a black T-shirt" priority />
        <div className="relative mx-auto w-full max-w-[1280px]">
          <div className="max-w-[780px]">
            <p className="section-label text-[#8db7ff]">Free Diction tools</p>
            <h1 className="mt-7 max-w-[10ch] text-[clamp(3.5rem,6.4vw,6.5rem)] font-semibold leading-[0.94] tracking-[-0.06em] drop-shadow-[0_3px_24px_rgba(0,0,0,0.55)]">Know what is weakening your digital presence.</h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/70 drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">Five practical diagnostics. Each one gives you a useful result before registration and points to a specific next action.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Link href="/tools/digital-presence-score" className="button-dark">Start with the full score <ArrowRight size={16} /></Link><Link href="#all-tools" className="button-ghost">Browse every tool</Link></div>
          </div>
        </div>
      </section>

      <section id="all-tools" className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-8 lg:grid-cols-[1fr_340px] lg:items-end">
            <div><p className="section-label text-[#8db7ff]">Choose your diagnostic</p><h2 className="mt-7 max-w-[13ch] text-[clamp(3rem,4.8vw,4.8rem)] font-semibold leading-[0.98] tracking-[-0.055em]">Start broad, or go directly to the gap you can already feel.</h2></div>
            <p className="text-base leading-relaxed text-white/48">No email wall. No generic score screen. Every tool explains the result and gives you a practical quick win.</p>
          </div>

          <Link href={`/tools/${featuredTool.slug}`} className="group relative mt-14 grid min-h-[430px] overflow-hidden rounded-[1.5rem] border border-white/12 bg-[#0a0a0b] lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative z-10 flex flex-col p-8 md:p-12">
              <div className="flex items-center justify-between gap-4"><p className="section-label text-[#8db7ff]">{featuredTool.eyebrow}</p><span className="flex items-center gap-1.5 text-xs text-white/38"><Clock3 size={13} /> {featuredTool.time}</span></div>
              <h3 className="mt-8 max-w-[10ch] text-[clamp(2.7rem,4.2vw,4.4rem)] font-semibold leading-[0.98] tracking-[-0.055em]">{featuredTool.title}</h3>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-white/50">{featuredTool.description}</p>
              <span className="mt-auto inline-flex items-center gap-2 pt-10 text-sm font-semibold">Discover my score <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></span>
            </div>
            <div className="relative min-h-80 bg-[url('/diction-system-visual.png')] bg-cover bg-center"><div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0b] via-transparent to-transparent" /></div>
          </Link>

          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            {focusedTools.map((tool, index) => {
              const Icon = toolIcons[index + 1];
              return (
                <Link key={tool.slug} href={`/tools/${tool.slug}`} className="group flex min-h-[470px] flex-col rounded-[1.4rem] border border-white/12 bg-white/[0.03] p-7 transition-colors hover:border-white/24 md:p-9">
                  <div className="flex items-start justify-between gap-5"><span className="grid size-11 place-items-center rounded-xl border border-white/12 bg-white/5 text-[#8db7ff]"><Icon size={20} strokeWidth={1.6} /></span><span className="flex items-center gap-1.5 text-xs text-white/35"><Clock3 size={13} /> {tool.time}</span></div>
                  <h3 className="mt-7 text-3xl font-semibold leading-none tracking-[-0.045em]">{tool.title}</h3>
                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/48">{tool.description}</p>
                  <div className="mt-8"><ToolPreview slug={tool.slug} /></div>
                  <span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold">{tool.cta} <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" /></span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-white/8 px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="max-w-3xl text-[clamp(2.7rem,4.2vw,4.2rem)] font-semibold leading-[1] tracking-[-0.05em]">Useful before you give us anything.</h2>
          <div className="mt-12 grid overflow-hidden rounded-[1.25rem] border border-white/10 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Eye, title: "Result first", copy: "See the diagnosis before registration." },
              { icon: Check, title: "One quick win", copy: "Leave with a practical next action." },
              { icon: Workflow, title: "System context", copy: "Understand how the gap affects everything else." },
              { icon: LockKeyhole, title: "Private by default", copy: "Your answers stay local unless you choose to register." },
            ].map((item) => { const Icon = item.icon; return <article key={item.title} className="min-h-64 border-b border-white/10 p-7 last:border-0 md:border-r lg:border-b-0"><Icon size={20} className="text-[#8db7ff]" /><h3 className="mt-12 text-xl font-semibold">{item.title}</h3><p className="mt-3 text-sm leading-relaxed text-white/46">{item.copy}</p></article>; })}
          </div>
        </div>
      </section>

      <section className="px-3 py-3 sm:px-5 sm:py-5">
        <div className="cinematic-landscape relative mx-auto min-h-[560px] max-w-[1480px] overflow-hidden rounded-[1.6rem] border border-white/10 px-6 py-20 sm:px-10 md:px-16 md:py-28">
          <div className="relative mx-auto grid min-h-[340px] max-w-[1180px] gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div><p className="section-label text-[#8db7ff]">Learn before you decide</p><h2 className="mt-7 max-w-[10ch] text-[clamp(3.3rem,5.7vw,5.8rem)] font-semibold leading-[0.95] tracking-[-0.06em]">A score names the gap.</h2></div>
            <div><p className="max-w-xl text-lg leading-relaxed text-white/62">KNOWN shows how to turn your diagnosis into a focused, practical 90-day build order.</p><Link href="/register" className="button-light mt-8">Reserve my free seat <ArrowRight size={16} /></Link></div>
          </div>
        </div>
      </section>

      <PageFooter />
    </main>
  );
}
