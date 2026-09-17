import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const columns = [
  { title: "Explore", links: [["Free tools", "/tools"], ["Success stories", "/success-stories"], ["Insights", "/insights"], ["KNOWN masterclass", "/known"]] },
  { title: "Diction", links: [["About", "/about"], ["Capabilities", "/capabilities"], ["The Collective", "/collective"], ["Registration", "/register"]] },
] as const;

export default function PageFooter() {
  return (
    <footer className="overflow-hidden bg-[#050505] px-6 pb-10 pt-14 text-white md:px-10 md:pt-20">
      <div aria-hidden="true" className="mx-auto max-w-[1280px] overflow-hidden border-b border-white/10 pb-5">
        <p className="translate-y-[18%] whitespace-nowrap text-[clamp(6rem,18vw,15rem)] font-semibold leading-[0.65] tracking-[-0.09em] text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.16)]">DICTION</p>
      </div>
      <div className="mx-auto grid max-w-[1280px] gap-14 py-14 lg:grid-cols-[1.35fr_0.65fr_0.65fr] lg:py-20">
        <div>
          <Image src="/diction-wordmark.png" alt="Diction" width={2155} height={730} className="h-auto w-32 md:w-36" sizes="144px" />
          <p className="mt-6 max-w-md text-base leading-relaxed text-white/46">A connected digital presence for founders and experts whose work deserves to be known.</p>
          <Link href="/register" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#2f7cf6] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#6f3ed7]">Reserve a free seat <ArrowUpRight size={14} aria-hidden="true" /></Link>
        </div>
        {columns.map((column) => <div key={column.title}><p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/32">{column.title}</p><div className="mt-5 grid gap-3 text-sm text-white/52">{column.links.map(([label, href]) => <Link key={href} href={href} className="w-fit transition-colors hover:text-white">{label}</Link>)}</div></div>)}
      </div>
      <div className="mx-auto flex max-w-[1280px] flex-col gap-4 border-t border-white/10 pt-7 text-xs text-white/26 sm:flex-row sm:items-center sm:justify-between">
        <span>© 2026 Diction</span><div className="flex gap-5"><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div><span>For founders who deserve to be known</span>
      </div>
    </footer>
  );
}
