import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CallToAction({ eyebrow = "Your next step", title, body, href = "/register", label = "Reserve my free seat" }: { eyebrow?: string; title: string; body: string; href?: string; label?: string }) {
  return (
    <section className="bg-[#050505] px-3 pb-3 sm:px-5 sm:pb-5">
      <div className="cinematic-landscape relative min-h-[580px] overflow-hidden rounded-[2rem] border border-white/10 px-6 py-20 text-white sm:px-10 md:rounded-[2.6rem] md:py-28">
        <div className="relative mx-auto grid min-h-[360px] max-w-[1180px] gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end"><div><p className="section-label text-[#8db7ff]">{eyebrow}</p><h2 className="editorial-heading mt-7">{title}</h2></div><div><p className="max-w-xl text-lg leading-relaxed text-white/62">{body}</p><Link href={href} className="button-light mt-8">{label} <ArrowRight size={16} aria-hidden="true" /></Link></div></div>
      </div>
    </section>
  );
}
