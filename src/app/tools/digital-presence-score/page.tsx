import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";
import PageIntro from "@/components/PageIntro";
import ScoreAssessment from "@/components/ScoreAssessment";
import DictionFramework from "@/components/DictionFramework";
import CallToAction from "@/components/CallToAction";

export const metadata: Metadata = { title: "Digital Presence Score", description: "Discover your directional Digital Presence Score across the seven parts of the D.I.C.T.I.O.N. framework." };

export default function DigitalPresenceScorePage() {
  return <main className="overflow-hidden bg-[#050505] text-white"><PageHeader /><PageIntro eyebrow="Free digital presence diagnostic" title="How well does your expertise translate online?" description="Answer fourteen practical questions across positioning, audience, content, trust, platforms, opportunity and relationships. See your directional score immediately—before registration." primary={{ label: "Discover my score", href: "#assessment" }} secondary={{ label: "Why this framework", href: "/about#framework" }} image={{ src: "/founder-outdoor.png", alt: "Close portrait of the Diction founder outdoors" }} /><section id="assessment" className="surface-inset bg-[#0b0b0d] px-6 py-20 text-white md:px-10 md:py-28"><div className="mx-auto max-w-[1120px]"><div className="mb-12 grid gap-6 lg:grid-cols-[1fr_360px] lg:items-end"><div><p className="section-label text-[#8db7ff]">Fourteen questions · Seven dimensions</p><h2 className="editorial-heading mt-7">Answer from what is true today.</h2></div><p className="text-sm leading-relaxed text-white/48">This is a directional self-assessment, not a scientific or comparative benchmark. Its purpose is to help you choose a useful next step.</p></div><ScoreAssessment /></div></section><DictionFramework compact /><CallToAction title="Bring your result into the KNOWN masterclass." body="Use the full framework to understand your weakest dimension and choose a clear build order for the next 90 days." /><PageFooter /></main>;
}
