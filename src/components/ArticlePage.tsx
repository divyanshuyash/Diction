import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";
import CallToAction from "@/components/CallToAction";
import type { InsightArticle } from "@/lib/insightContent";

export default function ArticlePage({ article }: { article: InsightArticle }) {
  return (
    <main className="bg-[#050505] text-white"><PageHeader />
      <article><header className="page-hero"><div className="site-container relative z-10 max-w-[1100px]"><Link href="/insights" className="inline-flex items-center gap-2 text-sm font-semibold text-[#8db7ff]"><ArrowLeft size={14} /> All insights</Link><p className="section-label mt-12 text-[#8db7ff]">{article.category} · {article.readTime}</p><h1 className="editorial-title mt-8 max-w-[12ch]">{article.title}</h1><p className="body-large mt-10 max-w-3xl text-white/52">{article.standfirst}</p></div></header>
        <div className="px-3 pb-3 sm:px-5 sm:pb-5"><div className="relative mx-auto aspect-[16/7] min-h-[320px] max-w-[1480px] overflow-hidden rounded-[1.6rem] border border-white/10"><Image src="/diction-story-insights.png" alt="Ideas, notes and fragments connected into one clear point of view" fill className="object-cover" sizes="100vw" /><div className="absolute inset-0 bg-gradient-to-t from-black/58 via-transparent to-black/12" /><p className="absolute bottom-6 left-6 max-w-sm text-sm font-semibold leading-relaxed text-white/72 md:bottom-9 md:left-9">Raw material becomes authority when one clear thread makes it recognisable.</p></div></div>
        <div className="px-6 pb-24 md:px-10 md:pb-32"><div className="mx-auto max-w-[960px] rounded-[2rem] border border-white/12 bg-white/[0.035] p-7 md:p-14">{article.sections.map((section, index) => <section key={section.heading} className={`${index ? "mt-20 border-t border-white/10 pt-16" : ""}`}><p className="section-label text-[#8db7ff]">{String(index + 1).padStart(2, "0")}</p><h2 className="mt-5 text-[clamp(2.2rem,4vw,4rem)] font-semibold leading-[0.98] tracking-[-0.055em]">{section.heading}</h2><div className="mt-8 grid gap-5 text-[1.05rem] leading-8 text-white/62">{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>{section.points ? <ul className="mt-9 grid gap-3 rounded-[1.4rem] border border-white/12 bg-white/5 p-6 text-sm font-semibold leading-relaxed">{section.points.map((point) => <li key={point}>{point}</li>)}</ul> : null}</section>)}</div></div>
      </article>
      <CallToAction eyebrow="Put the idea to work" title="Diagnosis makes the next step clearer." body="Use the recommended free tool to locate the gap in your own presence and connect it to the wider system." href={article.tool.href} label={article.tool.label} />
      <section className="bg-[#050505] px-6 py-20 text-white md:px-10"><div className="mx-auto max-w-[900px]"><Link href="/insights" className="inline-flex items-center gap-2 text-sm font-semibold text-[#8db7ff]">Read more insights <ArrowRight size={14} /></Link></div></section><PageFooter /></main>
  );
}
