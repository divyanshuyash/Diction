import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PageFooter from "@/components/PageFooter";
import PageHeader from "@/components/PageHeader";
import RegistrationConfirmation from "@/components/RegistrationConfirmation";

export const metadata: Metadata = { title: "Registration Confirmed", description: "Your KNOWN masterclass registration has been received." };

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white"><PageHeader /><section className="known-grid relative min-h-[720px] border-b border-white/8 px-6 py-20 md:px-10 md:py-28"><div className="relative mx-auto max-w-[1000px] rounded-[2rem] border border-white/13 bg-black/62 p-7 backdrop-blur-xl md:p-12"><RegistrationConfirmation whatsappNumber={process.env.NEXT_PUBLIC_DICTION_WHATSAPP_NUMBER} /><div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row"><Link href="/insights" className="button-dark">Read Diction insights <ArrowRight size={16} /></Link><Link href="/" className="inline-flex min-h-12 items-center justify-center gap-2 text-sm font-semibold text-[#8db7ff]"><ArrowLeft size={16} /> Return to Diction</Link></div></div></section><PageFooter /></main>
  );
}
