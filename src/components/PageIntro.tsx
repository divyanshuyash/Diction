import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FounderBackdrop from "@/components/FounderBackdrop";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  image?: { src: string; alt: string; credit?: string };
};

export default function PageIntro({ eyebrow, title, description, primary, secondary, image }: PageIntroProps) {
  const actions = (primary || secondary) ? (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      {primary ? <Link href={primary.href} className="button-dark">{primary.label} <ArrowRight size={16} aria-hidden="true" /></Link> : null}
      {secondary ? <Link href={secondary.href} className="inline-flex min-h-11 items-center text-sm font-semibold text-[#8db7ff] hover:text-white">{secondary.label}</Link> : null}
    </div>
  ) : null;

  return (
    <section className={`relative flex overflow-hidden border-b border-white/8 bg-[#050505] text-white ${image ? "min-h-[100svh] items-end" : "page-hero"}`}>
      {image ? <FounderBackdrop src={image.src} alt={image.alt} priority /> : null}
      <div className={`site-container relative z-10 grid gap-12 ${image ? "pb-16 pt-36 sm:pb-20 md:pb-24 lg:pb-28" : ""}`}>
        <div className={image ? "max-w-[780px]" : ""}>
          <p className="section-label text-[#8db7ff]">{eyebrow}</p>
          <h1 className="editorial-title mt-7 drop-shadow-[0_3px_24px_rgba(0,0,0,0.45)]">{title}</h1>
          {image ? <><p className="body-large mt-8 max-w-2xl text-white/68 drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)]">{description}</p><div className="mt-8">{actions}</div></> : null}
        </div>
        {!image ? (
          <div className="grid gap-7 border-t border-white/10 pt-8 md:grid-cols-[1fr_auto] md:items-end">
            <p className="body-large max-w-2xl text-white/52">{description}</p>
            {actions}
          </div>
        ) : null}
      </div>
    </section>
  );
}
