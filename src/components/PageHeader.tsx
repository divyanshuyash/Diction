"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown } from "lucide-react";
import { primaryNavigation } from "@/lib/siteContent";

export default function PageHeader() {
  const pathname = usePathname();
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href === "/about") return pathname === "/about" || pathname.startsWith("/capabilities") || pathname.startsWith("/collective");
    return pathname === href || pathname.startsWith(`${href}/`);
  };
  const masterclassActive = pathname.startsWith("/known") || pathname.startsWith("/register") || pathname.startsWith("/thank-you");

  return (
    <header className="absolute inset-x-0 top-0 z-50 px-5 text-white md:px-10">
      <div className="mx-auto flex h-14 max-w-[1280px] items-center justify-between gap-5">
        <Link href="/" className="w-24 shrink-0 md:w-28" aria-label="Diction home">
          <Image src="/diction-wordmark.png" alt="Diction" width={2155} height={730} className="h-auto w-full" loading="eager" sizes="112px" />
        </Link>

        <nav className="hidden items-center gap-7 text-[12px] font-medium text-white/58 lg:flex xl:gap-9" aria-label="Primary navigation">
          {primaryNavigation.map((item) => {
            const active = isActive(item.href);
            return <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined} className={`whitespace-nowrap py-2 transition-colors ${active ? "text-white" : "hover:text-white"}`}>{item.label}</Link>;
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/register" aria-current={masterclassActive ? "page" : undefined} className={`hidden min-h-9 items-center gap-2 rounded-lg px-4 text-[12px] font-semibold transition-[background-color,transform] hover:scale-[1.02] sm:inline-flex ${masterclassActive ? "bg-white text-[#171717]" : "bg-[#2f7cf6] text-white hover:bg-[#6f3ed7]"}`}>Reserve my seat <ArrowRight size={13} aria-hidden="true" /></Link>
          <details className="group relative lg:hidden">
            <summary className="flex size-9 cursor-pointer list-none items-center justify-center rounded-full bg-white/8 transition-colors hover:bg-white/14 [&::-webkit-details-marker]:hidden">
              <span className="sr-only">Open navigation</span><ChevronDown size={17} aria-hidden="true" className="transition-transform group-open:rotate-180" />
            </summary>
            <nav aria-label="Mobile navigation" className="absolute right-0 mt-3 w-[min(19rem,calc(100vw-2rem))] rounded-3xl bg-[#171717] p-3 shadow-[0_18px_55px_rgba(0,0,0,0.35)]">
              {primaryNavigation.map((item) => { const active = isActive(item.href); return <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined} className={`block rounded-2xl px-4 py-3 text-sm font-medium transition-colors ${active ? "bg-white/10 text-white" : "text-white/58 hover:bg-white/8 hover:text-white"}`}>{item.label}</Link>; })}
              <Link href="/capabilities" aria-current={pathname.startsWith("/capabilities") ? "page" : undefined} className={`block rounded-2xl px-4 py-3 text-sm font-medium transition-colors ${pathname.startsWith("/capabilities") ? "bg-white/10 text-white" : "text-white/58 hover:bg-white/8 hover:text-white"}`}>Capabilities</Link>
              <Link href="/known" aria-current={masterclassActive ? "page" : undefined} className="mt-2 flex min-h-11 items-center justify-between rounded-xl bg-[#2f7cf6] px-5 text-sm font-semibold text-white">KNOWN masterclass <ArrowRight size={15} aria-hidden="true" /></Link>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
