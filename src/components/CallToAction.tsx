import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CallToAction({ eyebrow = "Your next step", title, body, href = "/register", label = "Reserve my free seat" }: { eyebrow?: string; title: string; body: string; href?: string; label?: string }) {
  return (
    <section className="callout-band bg-[#a855f7] px-6 py-14 text-white md:px-10 md:py-16">
      <div className="mx-auto max-w-[860px] text-center"><p className="section-label text-white/62">{eyebrow}</p><h2 className="editorial-heading mx-auto mt-6">{title}</h2><p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/72">{body}</p><Link href={href} className="button-dark mt-8">{label} <ArrowRight size={16} aria-hidden="true" /></Link></div>
    </section>
  );
}
