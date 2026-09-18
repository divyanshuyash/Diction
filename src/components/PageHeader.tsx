"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { primaryNavigation } from "@/lib/siteContent";

export default function PageHeader() {
  const pathname = usePathname();
  const menu = useRef<HTMLDetailsElement>(null);
  const active = (href: string) => href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  useEffect(() => {
    const close = (event: PointerEvent) => {
      if (menu.current && !menu.current.contains(event.target as Node)) menu.current.open = false;
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && menu.current?.open) {
        menu.current.open = false;
        menu.current.querySelector("summary")?.focus();
      }
    };
    document.addEventListener("pointerdown", close);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("pointerdown", close);
      document.removeEventListener("keydown", escape);
    };
  }, []);

  return (
    <header className="internal-header sticky top-0 z-50 border-b border-white/10 bg-[#080808]/92 px-5 text-white backdrop-blur-xl md:px-10">
      <div className="header-inner mx-auto flex h-[4.5rem] max-w-[1320px] items-center justify-between gap-5">
        <Link href="/" className="w-32 shrink-0 sm:w-36 md:w-40" aria-label="Diction home">
          <Image src="/diction-wordmark.png" alt="Diction" width={2155} height={730} className="h-auto w-full" loading="eager" sizes="(min-width: 768px) 160px, (min-width: 640px) 144px, 128px" />
        </Link>

        <nav className="hidden items-center gap-6 text-[12px] font-medium tracking-[0.01em] text-white/55 lg:flex xl:gap-8" aria-label="Primary navigation">
          {primaryNavigation.map((item) => <Link key={item.href} href={item.href} aria-current={active(item.href) ? "page" : undefined} className="whitespace-nowrap transition-colors hover:text-white">{item.label}</Link>)}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/register" className="header-cta hidden min-h-10 items-center gap-2 rounded-full border border-white/18 px-5 text-[11px] font-medium tracking-[0.02em] transition-colors hover:bg-white hover:text-black sm:inline-flex">Reserve a seat <ArrowRight size={13} aria-hidden="true" /></Link>
          <details ref={menu} key={pathname} className="group relative lg:hidden">
            <summary className="flex size-11 cursor-pointer list-none items-center justify-center rounded-full border border-white/18 bg-white/[0.03] [&::-webkit-details-marker]:hidden">
              <span className="sr-only">Open navigation</span><ChevronDown size={17} aria-hidden="true" className="transition-transform group-open:rotate-180" />
            </summary>
            <nav aria-label="Mobile navigation" className="absolute right-0 mt-3 w-[min(19rem,calc(100vw-2rem))] rounded-3xl border border-white/12 bg-[#0b0b0b] p-3 shadow-2xl">
              {primaryNavigation.map((item) => <Link key={item.href} href={item.href} aria-current={active(item.href) ? "page" : undefined} onClick={() => { if (menu.current) menu.current.open = false; }} className="block rounded-2xl px-4 py-3 text-sm font-medium text-white/70 transition-colors hover:bg-white/6 hover:text-white">{item.label}</Link>)}
              <Link href="/capabilities" className="block rounded-2xl px-4 py-3 text-sm font-medium text-white/58 transition-colors hover:bg-white/6 hover:text-white">Capabilities</Link>
              <Link href="/known" className="mt-2 flex min-h-12 items-center justify-between rounded-full bg-white px-5 text-sm font-medium text-black">KNOWN masterclass <ArrowRight size={15} aria-hidden="true" /></Link>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
