import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";

export const metadata: Metadata = { title: "Terms", description: "Diction website terms of use." };

const sections = [
  ["Educational purpose", "Website content, tools, scores, roadmaps and masterclasses are educational and informational. They do not guarantee recognition, audience growth, leads, revenue or any other business outcome."],
  ["Directional diagnostics", "Tool results are self-assessments based on the answers provided. They are not scientific, independently verified or designed for comparison with other people or businesses."],
  ["Registration", "Masterclass dates, access instructions and included resources are communicated through the registration confirmation. Diction may change a session schedule or format when reasonably necessary and should communicate material changes to registered participants."],
  ["Intellectual property", "Unless stated otherwise, Diction's frameworks, copy, visual identity, educational materials and website content remain Diction's intellectual property. Personal learning use does not grant permission to reproduce, resell or present the material as your own."],
  ["Third-party services", "Links or integrations may open third-party services such as calendar, messaging or hosting providers. Their availability, privacy and terms are controlled by those providers."],
  ["Responsible use", "Do not misuse the website, interfere with its operation, submit unlawful content or attempt to access data or systems without permission."],
  ["Review before publication", "These terms are a website-ready operational draft and should be reviewed against Diction's legal entity, jurisdiction, contact details and actual service practices before the site goes live."],
];

export default function TermsPage() {
  return <main className="bg-[#050505] text-white"><PageHeader /><header className="page-hero"><div className="site-container relative z-10 grid gap-12 lg:grid-cols-[1fr_0.72fr] lg:items-center"><div><p className="section-label text-[#8db7ff]">Legal</p><h1 className="editorial-title mt-8">Terms of use.</h1><p className="mt-8 text-sm text-white/35">Effective 20 August 2026</p></div><div className="relative aspect-[5/4] overflow-hidden rounded-[1.4rem] border border-white/12 bg-[url('/diction-story-capabilities.png')] bg-cover bg-center"><div className="absolute inset-0 bg-gradient-to-t from-black/54 via-transparent to-transparent" /><p className="absolute bottom-6 left-6 max-w-xs text-sm font-semibold leading-relaxed text-white/68">A clear system works because expectations, responsibilities and boundaries connect.</p></div></div></header><div className="px-6 pb-24 md:px-10 md:pb-32"><div className="mx-auto max-w-[960px] rounded-[2rem] bg-white p-7 text-[#171717] md:p-14"><p className="body-large text-black/58">These terms describe the intended use of Diction’s public website and educational resources. They must be reviewed against the final business and legal details before publication.</p>{sections.map(([title, body], index) => <section key={title} className="mt-12 border-t border-black/10 pt-9"><p className="section-label text-[#2f62b6]">{String(index + 1).padStart(2, "0")}</p><h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em]">{title}</h2><p className="mt-4 text-base leading-7 text-black/58">{body}</p></section>)}</div></div><PageFooter /></main>;
}
