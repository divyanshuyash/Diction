import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  image?: { src: string; alt: string; credit?: string };
  backgroundImage?: { src: string; alt: string };
};

export default function PageIntro({ eyebrow, title, description, primary, secondary, image, backgroundImage }: PageIntroProps) {
  const introMode = image ? "page-intro-with-image" : backgroundImage ? "page-intro-with-background" : "page-intro-centered";

  return (
    <section className={`page-hero page-intro bg-[#080808] text-white ${introMode}`}>
      {backgroundImage ? (
        <div className="page-intro-background" aria-hidden="true">
          <Image src={backgroundImage.src} alt="" fill fetchPriority="high" className="object-cover" sizes="100vw" />
        </div>
      ) : null}
      <div className={`site-container page-intro-layout relative grid gap-10 ${image ? "lg:grid-cols-[1fr_1fr] lg:items-center" : ""}`}>
        <div className={`page-intro-copy ${image || backgroundImage ? "" : "page-intro-copy-centered"}`}>
          <p className="section-label text-[#bd84ff]">{eyebrow}</p>
          <h1 className="editorial-title mt-5">{title}</h1>
          <div className="page-intro-details mt-6">
            <p className="body-large text-white/55">{description}</p>
            {(primary || secondary) ? (
              <div className="page-intro-actions">
                {primary ? <Link href={primary.href} className="button-light">{primary.label} <ArrowRight size={16} aria-hidden="true" /></Link> : null}
                {secondary ? <Link href={secondary.href} className="button-ghost">{secondary.label}</Link> : null}
              </div>
            ) : null}
          </div>
        </div>
        {image ? (
          <div><div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/10 bg-white/5"><Image src={image.src} alt={image.alt} fill fetchPriority="high" className="object-cover grayscale-[12%]" sizes="(min-width: 1024px) 42vw, 100vw" /><div className="absolute inset-0 bg-gradient-to-t from-black/36 via-transparent to-transparent" aria-hidden="true" /></div>{image.credit ? <p className="mt-3 text-[10px] uppercase tracking-[0.12em] text-white/25">{image.credit}</p> : null}</div>
        ) : null}
      </div>
    </section>
  );
}
