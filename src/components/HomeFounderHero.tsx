import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FounderBackdrop from "@/components/FounderBackdrop";
import PageHeader from "@/components/PageHeader";

export default function HomeFounderHero() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-black text-white" aria-labelledby="home-hero-title">
      <PageHeader />
      <FounderBackdrop src="/founder-outdoor.png" alt="Close portrait of the Diction founder outdoors" priority />
      <div className="site-container relative z-10 pb-16 pt-36 sm:pb-20 md:pb-24 lg:pb-28">
        <p className="section-label text-[#8db7ff]">For founders who deserve to be known</p>
        <h1 id="home-hero-title" className="mt-6 max-w-[9ch] text-[clamp(4.8rem,11vw,10rem)] font-semibold leading-[0.82] tracking-[-0.075em] drop-shadow-[0_3px_24px_rgba(0,0,0,0.55)]">
          BE <span className="font-serif font-normal italic text-[#bd77ff]">KNOWN.</span>
        </h1>
        <p className="body-large mt-8 max-w-xl text-white/70 drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">Turn credible expertise into a clear, trusted and opportunity-generating digital presence.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/register" className="button-light">Join the free KNOWN masterclass <ArrowRight size={16} /></Link>
          <Link href="/tools/digital-presence-score" className="button-ghost">Discover my score</Link>
        </div>
      </div>
    </section>
  );
}
