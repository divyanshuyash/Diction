import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";
import PageIntro from "@/components/PageIntro";
import CallToAction from "@/components/CallToAction";
import MiniAudit from "@/components/MiniAudit";
import type { AuditTool } from "@/lib/toolContent";

export function toolMetadata(tool: AuditTool): Metadata {
  return { title: tool.title, description: tool.description };
}

export default function ToolLandingPage({ tool }: { tool: AuditTool }) {
  return (
    <main className="overflow-hidden bg-[#050505] text-white">
      <PageHeader />
      <PageIntro eyebrow={tool.eyebrow} title={tool.title} description={tool.description} primary={{ label: "Start the free audit", href: "#audit" }} secondary={{ label: "Explore all tools", href: "/tools" }} image={{ src: "/founder-black-tee.png", alt: "Diction founder smiling in a black T-shirt" }} />
      <section className="section-pad border-b border-white/8">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10"><div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-end"><div><p className="section-label text-[#8db7ff]">What this examines</p><h2 className="editorial-heading mt-7">{tool.promise}</h2></div><p className="text-base leading-relaxed text-white/46">Each check focuses on something a new visitor can actually experience today—not what you intend to publish later.</p></div><div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{tool.checks.map((check, index) => <article key={check} className={`flex min-h-56 flex-col rounded-[1.3rem] border p-6 ${index === 2 || index === 6 ? "border-[#2f7cf6] bg-[#2f7cf6]" : "border-white/13 bg-white/[0.03]"}`}><CheckCircle2 size={20} className="text-[#8db7ff]" /><p className="mt-auto text-lg font-semibold leading-snug tracking-[-0.03em]">{check}</p></article>)}</div></div>
      </section>
      <section id="audit" className="surface-inset bg-[#171717] px-6 py-20 text-white md:px-10 md:py-28"><div className="mx-auto grid max-w-[1120px] gap-12 lg:grid-cols-[0.72fr_1.28fr]"><div><p className="section-label text-[#bd84ff]">The audit</p><h2 className="editorial-heading mt-7">Answer from evidence, not intention.</h2><p className="mt-6 text-sm leading-relaxed text-white/48">Choose the response that best describes what a new visitor can experience today. Your result appears immediately and does not require registration.</p></div><MiniAudit title={tool.title} checks={tool.checks} gap={tool.gap} /></div></section>
      <section className="section-pad px-6 md:px-10"><div className="mx-auto grid max-w-[1120px] gap-10 lg:grid-cols-[1fr_360px] lg:items-end"><div><p className="section-label text-[#8db7ff]">The larger gap</p><h2 className="editorial-heading mt-7">{tool.resultTitle}</h2></div><p className="text-lg leading-relaxed text-white/52">{tool.resultCopy}</p></div></section>
      <CallToAction title="Turn the diagnosis into a practical build order." body="The free KNOWN masterclass connects your result to the full seven-part system and a focused 90-day roadmap." />
      <PageFooter />
    </main>
  );
}
