import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CallToAction({ eyebrow = "Your next step", title, body, href = "/register", label = "Reserve my free seat" }: { eyebrow?: string; title: string; body: string; href?: string; label?: string }) {
  return (
    <section className="callout-band bg-[#8f4bcc] px-6 py-14 text-white md:px-10 md:py-20">
      <div className="callout-inner mx-auto max-w-[1160px]">
        <div>
          <p className="section-label text-white/68">{eyebrow}</p>
          <h2 className="editorial-heading mt-6">{title}</h2>
        </div>
        <div className="callout-action">
          <p className="max-w-xl text-base leading-relaxed text-white/76">{body}</p>
          <Link href={href} className="button-dark mt-8">{label} <ArrowRight size={16} aria-hidden="true" /></Link>
        </div>
      </div>
    </section>
  );
}
