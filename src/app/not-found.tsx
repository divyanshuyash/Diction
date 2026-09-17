import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";

export default function NotFound() {
  return <main className="min-h-screen bg-[#050505] text-white"><PageHeader /><section className="relative min-h-[720px] overflow-hidden border-b border-white/8 bg-[url('/diction-story-diagnostic.png')] bg-cover bg-center px-6 py-24 md:px-10 md:py-32"><div className="absolute inset-0 bg-gradient-to-r from-black via-black/78 to-black/18" /><div className="relative mx-auto max-w-[1280px]"><p className="section-label text-[#8db7ff]">404 · Page not found</p><h1 className="editorial-title mt-8">This path does not lead anywhere yet.</h1><p className="body-large mt-8 max-w-2xl text-white/58">Return to Diction or use a free diagnostic to find the next useful step for your digital presence.</p><div className="mt-9 flex flex-col gap-3 sm:flex-row"><Link href="/" className="button-dark"><ArrowLeft size={16} /> Return home</Link><Link href="/tools" className="inline-flex min-h-12 items-center justify-center gap-2 text-sm font-semibold text-[#8db7ff]">Explore free tools <ArrowRight size={16} /></Link></div></div></section><PageFooter /></main>;
}
