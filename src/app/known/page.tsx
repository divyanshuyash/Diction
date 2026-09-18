import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, X } from "lucide-react";
import PageFooter from "@/components/PageFooter";
import PageHeader from "@/components/PageHeader";
import PageIntro from "@/components/PageIntro";
import RegistrationForm from "@/components/RegistrationForm";
import DictionFramework from "@/components/DictionFramework";

export const metadata: Metadata = { title: "KNOWN: The Free Digital Presence Masterclass", description: "Build a digital presence that turns credible expertise into clarity, recognition, trust and opportunity." };

const modules = [
  ["00–08", "Opening and promise", "Name the visibility-to-recognition gap and set a teaching-first tone."],
  ["08–20", "Why capable people remain unknown", "Break the myths of posting frequency, follower counts and isolated design."],
  ["20–48", "The D.I.C.T.I.O.N. framework", "Learn all seven connected components with practical examples."],
  ["48–62", "Digital presence diagnosis", "Locate your current stage and the biggest leak in the system."],
  ["62–72", "Your 90-day roadmap", "Sequence foundation, authority and opportunity in the right order."],
  ["72–80", "Proof and cases", "See how the process changes clarity, recognition and trust."],
  ["80–90", "Implementation pathways", "Choose what to build yourself and where expert support creates leverage."],
];

const outcomes = [
  "Understand why visibility does not automatically create recognition or trust.",
  "Identify the seven components of a complete Digital Authority Ecosystem.",
  "Recognise why content, branding and websites fail when they work separately.",
  "Determine the correct first priority for your current stage.",
  "Build a simple and practical 90-day digital presence roadmap.",
  "Know what you can implement yourself and where expert execution adds leverage.",
];

const faqs = [
  ["Is KNOWN really free?", "Yes. Registration is free. Diction may explain optional implementation support at the end, but there is no obligation to apply or purchase."],
  ["Is this a practical class or a sales webinar?", "It is a teaching-led masterclass built around the D.I.C.T.I.O.N. framework, a diagnosis and a 90-day roadmap. Any implementation explanation is clearly separated at the end."],
  ["When is the next session?", "Dates are being finalised. Register to receive the next confirmed live schedule rather than a placeholder date."],
  ["Will there be a recording?", "Recording access is not promised. Any replay or follow-up access will be stated in the registration confirmation for your session."],
  ["Do I need a large audience?", "No. The class is designed around clarity, recognition and trust, not follower thresholds."],
  ["Is this for a company brand or a personal brand?", "It is most useful when a founder, coach, consultant or corporate expert is a meaningful source of expertise, trust or opportunity."],
];

export default function KnownPage() {
  return (
    <main className="bg-[#080808] text-white"><PageHeader /><PageIntro eyebrow="KNOWN · Free live masterclass" title="Become known for the work only you can do." description="A practical, live class for founders and experts who want to turn credible expertise into clear positioning, trusted recognition and better opportunities—without chasing every platform." primary={{ label: "Reserve my free seat", href: "#register" }} secondary={{ label: "Explore the free tools", href: "/tools" }} image={{ src: "/known-masterclass-host.png", alt: "Diction masterclass host" }} />

      <section className="section-pad bg-[#f1eee8] px-6 text-[#111] md:px-10"><div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[0.8fr_1.2fr]"><div className="section-intro"><p className="section-label text-[#7134cb]">The 2026 reality</p><h2 className="editorial-heading mt-7">Content became easier. Recognition did not.</h2><p className="body-large mt-7 text-black/52">AI can help anyone produce polished information. That makes original perspective, credible evidence and a connected trust experience more valuable—not less.</p></div><div className="grid gap-4 sm:grid-cols-3">{[["01", "Clear position", "Make the work, the audience and the point of view easy to understand."], ["02", "Useful proof", "Give people reasons to trust your expertise before a sales conversation."], ["03", "Connected presence", "Let every platform reinforce the same recognisable idea."]].map(([number, title, body]) => <article key={title} className="manifesto-card surface-card rounded-[1.5rem] p-7"><span className="text-xs font-bold text-[#7134cb]">{number}</span><h3 className="mt-9 text-xl font-semibold tracking-[-0.035em]">{title}</h3><p className="mt-3 text-sm leading-relaxed text-black/52">{body}</p></article>)}</div></div></section>

      <section className="section-pad px-6 md:px-10"><div className="mx-auto grid max-w-[1200px] gap-14 lg:grid-cols-[0.76fr_1.24fr]"><div><p className="section-label text-[#bd84ff]">What you will leave with</p><h2 className="editorial-heading mt-7">A system—not another list of content tips.</h2></div><div className="grid gap-px bg-white/12 sm:grid-cols-2">{outcomes.map((outcome, index) => <div key={outcome} className="bg-[#0b0b0b] p-7 md:p-8"><span className="text-xs font-bold text-[#bd84ff]">0{index + 1}</span><p className="mt-10 font-semibold leading-snug">{outcome}</p></div>)}</div></div></section>

      <DictionFramework />

      <section className="section-pad px-6 md:px-10"><div className="mx-auto max-w-[1200px]"><div className="text-center"><p className="section-label text-[#bd84ff]">The run of show</p><h2 className="editorial-heading mx-auto mt-7">Ninety minutes from visible to recognisable.</h2></div><div className="mt-16 border-t border-white/12">{modules.map(([time, title, description]) => <div key={title} className="grid gap-4 border-b border-white/12 py-7 md:grid-cols-[110px_0.8fr_1.2fr] md:items-center"><span className="text-xs font-bold text-[#bd84ff]">{time} min</span><h3 className="text-xl font-semibold tracking-[-0.03em]">{title}</h3><p className="text-sm leading-relaxed text-white/42">{description}</p></div>)}</div></div></section>

      <section className="section-pad bg-[#f1eee8] px-6 text-[#111] md:px-10"><div className="mx-auto grid max-w-[1180px] gap-5 lg:grid-cols-2"><div className="surface-card rounded-[1.8rem] p-7 md:p-9"><p className="section-label text-[#7134cb]">KNOWN is for you if</p><ul className="mt-8 grid gap-4">{["Your real-world credibility is stronger than your digital recognition.", "Your content or website does not express the depth of your expertise.", "Your platforms feel disconnected or difficult to prioritise.", "You want durable authority rather than viral attention."].map((item) => <li key={item} className="flex items-start gap-3 text-sm leading-relaxed"><Check size={16} className="mt-0.5 shrink-0 text-[#7134cb]" />{item}</li>)}</ul></div><div className="rounded-[1.8rem] border border-black/10 bg-[#151515] p-7 text-white md:p-9"><p className="section-label text-white/40">It is not designed for</p><ul className="mt-8 grid gap-4">{["Shortcuts to fame or follower growth.", "Platform hacks without strategic foundations.", "Guaranteed leads, revenue or business outcomes.", "A done-for-you pitch disguised as education."].map((item) => <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-white/58"><X size={16} className="mt-0.5 shrink-0 text-white/35" />{item}</li>)}</ul></div></div></section>

      <section className="section-pad bg-[#a855f7] px-6 md:px-10"><div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-2 lg:items-center"><div><p className="section-label text-white/65">Included with your seat</p><h2 className="editorial-heading mt-7">The Diction Digital Presence Toolkit.</h2><p className="mt-7 max-w-lg text-white/68">Practical assets that help you translate the class into action after the session.</p></div><ul className="grid gap-3 text-sm text-white/85 sm:grid-cols-2">{["90-day build-order worksheet", "Digital presence action checklist", "Authority content planner", "Founder story builder", "Homepage message builder", "Platform integration checklist"].map((item) => <li key={item} className="flex items-start gap-3 border border-white/18 p-4"><Check size={16} className="mt-0.5 shrink-0" />{item}</li>)}</ul></div></section>

      <section className="section-pad px-6 md:px-10"><div className="mx-auto grid max-w-[1160px] gap-12 lg:grid-cols-[0.75fr_1.25fr]"><div><p className="section-label text-[#bd84ff]">Your host</p><h2 className="editorial-heading mt-7">Taught by the Diction strategy team.</h2></div><div><p className="body-large text-white/52">Explore positioning, authority content and website trust through the D.I.C.T.I.O.N. framework. Each part connects your expertise to the way people discover, understand and remember your work.</p><Link href="/about" className="text-link mt-8">Read Diction&apos;s beliefs <ArrowRight size={14} /></Link></div></div></section>

      <section id="register" className="section-pad bg-[#0b0b0b] px-6 md:px-10"><div className="mx-auto grid max-w-[1180px] gap-14 lg:grid-cols-[0.78fr_1.22fr]"><div><p className="section-label text-[#bd84ff]">Reserve your place</p><h2 className="editorial-heading mt-7">Your expertise is ready. Build the system around it.</h2><p className="mt-7 max-w-md text-base leading-relaxed text-white/48">Session dates and live registration are being finalised. Preview the form below to explore the session preferences.</p><p className="mt-8 text-xs leading-relaxed text-white/30">KNOWN is a practical educational masterclass. Diction may explain optional implementation support at the end. There is no obligation to apply or purchase.</p></div><div className="rounded-[2rem] border border-white/12 bg-white/[0.035] p-6 shadow-[0_30px_100px_rgba(56,13,97,0.28)] md:p-10"><RegistrationForm /></div></div></section>

      <section className="section-pad bg-[#f1eee8] px-6 text-[#111] md:px-10"><div className="mx-auto max-w-[960px]"><p className="section-label text-center text-[#7134cb]">Frequently asked questions</p><h2 className="editorial-heading mx-auto mt-7 text-center">Know what to expect.</h2><div className="mt-14 border-t border-black/12">{faqs.map(([question, answer]) => <details key={question} className="group border-b border-black/12 py-6"><summary className="cursor-pointer list-none pr-8 text-lg font-semibold tracking-[-0.025em] [&::-webkit-details-marker]:hidden">{question}</summary><p className="mt-4 max-w-3xl text-sm leading-relaxed text-black/52">{answer}</p></details>)}</div></div></section>

      <section className="px-6 py-20 text-center md:px-10 md:py-28"><div className="mx-auto max-w-4xl"><p className="section-label text-[#bd84ff]">Learn first. Decide with clarity.</p><h2 className="editorial-heading mx-auto mt-7">Your score shows the gap. KNOWN shows what to build next.</h2><Link href="/tools/digital-presence-score" className="button-light mt-9">See the Digital Presence Score <ArrowRight size={16} /></Link></div></section><PageFooter />
    </main>
  );
}
