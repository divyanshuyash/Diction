import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";
import CallToAction from "@/components/CallToAction";
import QuickReadDeck from "@/components/QuickReadDeck";
import type { InsightArticle } from "@/lib/insightContent";

export default function ArticlePage({ article }: { article: InsightArticle }) {
  return (
    <main className="bg-[#080808] text-white"><PageHeader />
      <article><header className="page-hero"><div className="site-container relative max-w-[1100px]"><Link href="/tools" className="text-link text-white/50"><ArrowLeft size={14} /> Free tools</Link><p className="section-label mt-12 text-[#bd84ff]">{article.category} · {article.readTime}</p><h1 className="editorial-title mt-8 max-w-[12ch]">{article.title}</h1><p className="body-large mt-10 max-w-3xl text-white/55">{article.standfirst}</p></div></header>
        <div className="section-pad bg-[#f1eee8] px-6 text-[#111] md:px-10"><div className="mx-auto max-w-[900px]"><QuickReadDeck article={article} /></div></div>
      </article>
      <CallToAction eyebrow="Put the idea to work" title="Diagnosis makes the next step clearer." body="Use the recommended free tool to locate the gap in your own presence and connect it to the wider system." href={article.tool.href} label={article.tool.label} />
      <section className="bg-[#f1eee8] px-6 pb-20 text-[#111] md:px-10 md:pb-28"><div className="mx-auto max-w-[900px]"><Link href="/tools" className="text-link">More five-minute reads <ArrowRight size={14} /></Link></div></section><PageFooter /></main>
  );
}
