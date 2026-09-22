import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import PageFooter from "@/components/PageFooter";
import PageHeader from "@/components/PageHeader";
import PageIntro from "@/components/PageIntro";
import RegistrationForm from "@/components/RegistrationForm";

export const metadata: Metadata = {
  title: "The Founder Visibility Advantage",
  description: "A live masterclass for founders who want to build a digital presence that earns trust before the first conversation.",
};

const decisions = [
  ["Define what you should be known for", "Clarify the audience, problem and founder perspective that should become closely linked with your name."],
  ["Understand how digital presence drives business", "See how brand marketing, organic content, social media, trust and attribution work together across the customer journey."],
  ["Build relevance in the age of AI", "Understand how founders can use AI without producing generic content or losing the experience and perspective that make them credible."],
  ["Identify your next 90-day priority", "Recognise the gaps weakening your presence and decide what deserves attention now, what can wait and where expert execution could create the greatest advantage."],
] as const;

const outcomes = [
  "What your founder presence needs to communicate",
  "Why your current marketing may feel disconnected",
  "Where trust is being lost across your digital presence",
  "Which areas deserve priority over the next 90 days",
  "What requires your involvement and what should be handled by a specialist team",
];

const founders = [
  "Have built something credible but are not recognised at the same level",
  "Want their personal presence to support company growth",
  "Feel that their website, content and social media tell different stories",
  "Want to build authority without becoming a full-time creator",
  "Are ready to approach marketing as a connected business system",
  "May need an experienced team to turn strategy into execution",
];

const capabilities = [
  "Positioning and brand strategy",
  "Founder-led content",
  "Organic social media",
  "Websites and digital experiences",
  "Campaigns and lead journeys",
  "Marketing systems and attribution",
];

const faqs = [
  ["Who can attend?", "The masterclass is designed for founders and business owners. Registrations may be reviewed to keep the room relevant to the people it was created for."],
  ["What will I receive after requesting access?", "You will receive the confirmed session date, joining information and any preparation details by email."],
  ["Is this suitable for early-stage founders?", "Yes. The session is relevant if you have a clear business, offer or area of expertise and want to build a credible presence around it."],
  ["Is this a social media workshop?", "Social media is one part of the session. The masterclass looks at your complete digital presence, including positioning, content, brand, proof, platforms and the customer journey."],
  ["Will I receive content templates and posting schedules?", "The session focuses on strategic clarity, business relevance and the right order of action. Diction can support founders who need the strategy translated into content, platforms and campaigns."],
  ["Will Diction’s services be discussed?", "Founders who want implementation support will be shown how they can work with Diction. There is no obligation to apply or purchase."],
] as const;

export default function KnownPage() {
  return (
    <main className="bg-[#080808] text-white">
      <PageHeader />
      <PageIntro
        eyebrow="The Founder Visibility Advantage"
        title="Build a presence that earns trust before the first conversation."
        description="An exclusive live masterclass for founders who want to turn their expertise, ideas and business credibility into a digital presence that attracts recognition and better opportunities."
        primary={{ label: "Request founder access", href: "#register" }}
        secondary={{ label: "Explore the masterclass", href: "#inside" }}
        backgroundImage={{ src: "/known-masterclass-portrait.png", alt: "The host of the Founder Visibility Advantage", position: "72% 34%" }}
      />

      <section className="section-pad bg-[#f1eee8] px-6 text-[#111] md:px-10">
        <div className="mx-auto max-w-[1120px]">
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-label text-[#7134cb]">Your business may be credible</p>
            <h2 className="editorial-heading mx-auto mt-7">Is your digital presence proving it?</h2>
            <p className="body-large mx-auto mt-7 max-w-2xl text-black/52">Posting more is rarely the complete answer.</p>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-black/52">Your positioning, founder profile, content, website, customer proof and marketing need to reinforce the same reason to trust you. This masterclass will help you see the complete picture.</p>
          </div>
          <div className="relative mt-14 h-64 overflow-hidden rounded-[1.25rem] bg-[#211328] md:h-80">
            <Image src="/founder-trust-banner.png" alt="An abstract connected digital presence" fill className="object-cover object-center" sizes="(max-width: 1120px) 100vw, 1120px" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,10,26,.9),rgba(20,10,26,.12)_70%),linear-gradient(0deg,rgba(20,10,26,.55),transparent_60%)]" />
            <p className="absolute bottom-7 left-7 max-w-xs text-2xl font-semibold leading-tight tracking-[-0.04em] text-white md:bottom-9 md:left-9 md:text-3xl">One clear reason to trust you, wherever people find you.</p>
            <p className="absolute right-7 top-7 text-[0.64rem] font-bold uppercase tracking-[0.18em] text-[#e0c5f8] md:right-9 md:top-9">The connected picture</p>
          </div>
        </div>
      </section>

      <section id="inside" className="section-pad px-6 md:px-10">
        <div className="mx-auto max-w-[1040px]">
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-label text-[#bd84ff]">Inside the masterclass</p>
            <h2 className="editorial-heading mx-auto mt-7">One strategic session. Four founder decisions.</h2>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden rounded-[1.25rem] bg-white/12 md:grid-cols-2">
            {decisions.map(([title, body], index) => <article key={title} className={`group relative min-h-64 overflow-hidden p-8 md:p-10 ${index % 2 ? "bg-[#130d18]" : "bg-[#0d0d0d]"}`}><span aria-hidden="true" className="absolute -right-2 -top-10 text-[10rem] font-bold leading-none tracking-[-0.1em] text-white/[0.035]">0{index + 1}</span><div className="relative flex items-center justify-between gap-5"><span className="section-label text-[#bd84ff]">Decision</span><span className="text-xs text-white/25">0{index + 1}</span></div><h3 className="relative mt-14 max-w-md text-2xl font-semibold tracking-[-0.04em]">{title}</h3><p className="relative mt-4 max-w-md text-sm leading-relaxed text-white/45">{body}</p><span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-[#bd84ff] transition-transform duration-500 group-hover:scale-x-100" /></article>)}
          </div>
          <p className="mt-7 text-center text-xs uppercase tracking-[0.18em] text-white/32">Founder-only · Live · 90 minutes · Limited access</p>
        </div>
      </section>

      <section className="section-pad bg-[#f1eee8] px-6 text-[#111] md:px-10">
        <div className="mx-auto grid max-w-[1000px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div><p className="section-label text-[#7134cb]">The result</p><h2 className="editorial-heading mt-7">Leave with clarity before you invest more in marketing.</h2></div>
          <div className="relative overflow-hidden rounded-[1.25rem] bg-[#211328] p-7 text-white shadow-[0_24px_60px_rgba(61,22,91,.16)] md:p-9"><span aria-hidden="true" className="absolute -right-7 -top-11 text-[11rem] font-bold leading-none tracking-[-0.1em] text-[#bd84ff]/15">+</span><p className="relative text-sm leading-relaxed text-white/58">By the end of the session, you will understand:</p><ul className="relative mt-6 grid gap-4">{outcomes.map((item) => <li key={item} className="flex gap-3 text-sm leading-relaxed text-white/78"><Check size={17} className="mt-0.5 shrink-0 text-[#d6b4f2]" />{item}</li>)}</ul><p className="relative mt-7 border-t border-white/12 pt-7 text-lg font-medium tracking-[-0.025em]">You will leave with strategic direction, not another list of content ideas.</p></div>
        </div>
      </section>

      <section className="section-pad px-6 md:px-10">
        <div className="mx-auto grid max-w-[1040px] gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div><p className="section-label text-[#bd84ff]">Created exclusively for founders</p><h2 className="editorial-heading mt-7">Who belongs in the room</h2><p className="mt-7 max-w-sm text-sm leading-relaxed text-white/45">This is not a creator-growth webinar or a collection of viral-content tactics.</p></div>
          <div className="relative grid overflow-hidden rounded-[1.25rem] border border-white/12 bg-[radial-gradient(circle_at_85%_8%,rgba(145,78,204,.24),transparent_36%)] sm:grid-cols-2">{founders.map((item, index) => <article key={item} className={`relative p-6 ${index % 2 ? "sm:border-l sm:border-white/12" : ""} ${index > 1 ? "border-t border-white/12" : ""}`}><span className="text-xs font-bold text-[#bd84ff]">0{index + 1}</span><p className="mt-5 text-sm leading-relaxed text-white/66">{item}</p></article>)}</div>
        </div>
      </section>

      <section className="section-pad bg-[#f1eee8] px-6 text-[#111] md:px-10">
        <div className="mx-auto grid max-w-[1000px] gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div><p className="section-label text-[#7134cb]">Diction</p><h2 className="editorial-heading mt-7">Clarity creates direction. Execution builds the advantage.</h2></div>
          <div className="relative overflow-hidden rounded-[1.25rem] bg-[#1a111e] p-7 text-white shadow-[0_24px_60px_rgba(61,22,91,.16)] md:p-9"><div aria-hidden="true" className="absolute -right-12 -top-12 size-52 rounded-full border border-[#cba5ec]/25" /><div aria-hidden="true" className="absolute right-12 top-12 size-20 rounded-full border border-[#cba5ec]/15" /><h3 className="relative text-2xl font-semibold tracking-[-0.04em]">Diction builds connected digital presence for founders.</h3><p className="relative mt-5 text-sm leading-relaxed text-white/55">We turn founder expertise and business credibility into a complete marketing system across:</p><div className="relative mt-7 grid gap-x-8 gap-y-4 border-t border-white/12 pt-7 sm:grid-cols-2">{capabilities.map((item) => <p key={item} className="flex gap-3 text-sm text-white/76"><span className="text-[#cba5ec]">+</span>{item}</p>)}</div><p className="relative mt-7 text-sm leading-relaxed text-white/48">Founders who need implementation support will have the option to explore working with Diction after the masterclass. There is no obligation to apply.</p></div>
        </div>
      </section>

      <section id="register" className="section-pad px-6 md:px-10">
        <div className="mx-auto max-w-[820px]">
          <div className="mx-auto max-w-2xl text-center"><p className="section-label text-[#bd84ff]">The Founder Visibility Advantage</p><h2 className="editorial-heading mx-auto mt-7">Request access to the next private session.</h2><p className="body-large mx-auto mt-7 max-w-xl text-white/52">This room is reserved for founders and business owners. Share a few details about yourself and your business to receive the next session invitation.</p></div>
          <div className="relative mt-12 overflow-hidden rounded-[1.25rem] bg-[#0b0b0b] p-6 text-white shadow-[0_30px_100px_rgba(56,13,97,0.26)] md:p-10"><div aria-hidden="true" className="absolute -right-24 -top-24 size-80 rounded-full bg-[#8546bc]/15 blur-3xl" /><div className="relative"><RegistrationForm source="Founder Visibility Advantage" /></div></div>
          <p className="mx-auto mt-5 max-w-2xl text-center text-xs leading-relaxed text-white/38">Founder-only · Live online · Limited attendance</p>
        </div>
      </section>

      <section className="section-pad bg-[#f1eee8] px-6 text-[#111] md:px-10">
        <div className="mx-auto max-w-[860px]"><p className="section-label text-center text-[#7134cb]">Frequently asked questions</p><h2 className="editorial-heading mx-auto mt-7 text-center">The useful details.</h2><div className="mt-14 border-t border-black/12">{faqs.map(([question, answer]) => <details key={question} className="group border-b border-black/12 py-6"><summary className="cursor-pointer list-none pr-8 text-lg font-semibold tracking-[-0.025em] [&::-webkit-details-marker]:hidden">{question}</summary><p className="mt-4 max-w-3xl text-sm leading-relaxed text-black/52">{answer}</p></details>)}</div></div>
      </section>

      <section className="section-pad relative isolate overflow-hidden px-6 md:px-10"><Image src="/founder-brand-analysis-cta.png" alt="Founder presenting a brand analysis" fill className="-z-20 object-cover object-[50%_34%]" sizes="100vw" /><div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(94,43,130,.44)_0%,rgba(86,33,122,.35)_42%,rgba(27,8,41,.9)_100%)]" /><div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_29%,transparent_0%,rgba(41,13,61,.06)_24%,rgba(19,6,29,.38)_100%)]" /><div className="mx-auto flex min-h-[25rem] max-w-3xl flex-col items-center justify-end text-center"><p className="section-label text-[#e1c7f8]">Your expertise should create an advantage before you enter the room.</p><h2 className="editorial-heading mx-auto mt-7">Build the presence your business deserves.</h2><p className="body-large mx-auto mt-7 max-w-2xl text-white/76">Join a focused room of founders and discover what will make your digital presence clearer, stronger and more commercially useful.</p><a href="#register" className="button-light mt-9">Request founder access</a><p className="mt-6 text-xs uppercase tracking-[0.16em] text-white/64">Founder-only · Live · Limited access</p></div></section>
      <PageFooter />
    </main>
  );
}
