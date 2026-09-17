import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Compass, Orbit, Plus, ScanSearch, Sparkles } from "lucide-react";
import Reveal from "./Reveal";
import PageFooter from "./PageFooter";

const signals = ["Positioning", "Point of view", "Authority content", "Proof", "Website", "Trust", "Opportunity"];

const loop = [
  { number: "01", title: "Find the real gap", body: "Locate whether positioning, audience, proof, content or the path to opportunity is limiting the wider system.", note: "Diagnosis", icon: ScanSearch },
  { number: "02", title: "Build one association", body: "Decide what you should be known for, by whom, and which evidence makes that position believable.", note: "Clarity", icon: Compass },
  { number: "03", title: "Repeat until it compounds", body: "Align every platform around the same idea, then keep adding perspective, proof and useful relationships.", note: "Recognition", icon: Orbit },
];

const stages = [
  ["01", "Credible", "The expertise is real, but most of it still lives in delivery, conversations and referrals."],
  ["02", "Clear", "People can quickly explain who you help, what you understand and why it matters."],
  ["03", "Trusted", "Your ideas, proof and human voice make the position feel earned rather than claimed."],
  ["04", "Recognised", "The same memorable association appears across your content, website and conversations."],
  ["05", "Chosen", "The right people arrive with context, trust and a clearer reason to start a conversation."],
];

const stories = [
  { eyebrow: "Your home base", title: "A website that earns trust before the call.", image: "/diction-story-capabilities.png", alt: "A connected authority system built from four precise parts" },
  { eyebrow: "Your point of view", title: "Ideas that sound like you—not the category.", image: "/diction-story-insights.png", alt: "A single thread connecting raw material into a clear point of view" },
  { eyebrow: "Your presence", title: "One recognisable identity wherever people find you.", image: "/diction-story-about.png", alt: "A founder shaping an idea inside a considered studio" },
];

const outcomes = [
  "The seven-part D.I.C.T.I.O.N. framework",
  "A diagnosis of the gap limiting your presence",
  "A practical 90-day build order",
  "A clearer choice between doing it yourself and getting support",
];

const faqs = [
  ["What does Diction actually do?", "Diction helps founders and experts turn credible work into a clear, trusted and opportunity-generating digital presence. The work can include positioning, authority content, website strategy, trust journeys and platform alignment."],
  ["Is this personal branding?", "Not in the performative, post-every-day sense. Diction treats your digital presence as a connected authority system: what you are known for, the perspective and proof that support it, and the path that turns attention into a useful relationship."],
  ["Do I need a large audience first?", "No. A smaller group of relevant people who understand and trust your expertise is more useful than broad attention with no clear association."],
  ["What is the KNOWN masterclass?", "KNOWN is Diction’s free masterclass for founders and experts. It teaches the complete framework and helps you identify what to prioritise over the next 90 days."],
  ["Can Diction help implement the strategy?", "Yes, when there is a strong fit. Implementation can include positioning and narrative, content systems, trust-led website experiences and platform integration."],
  ["Where should I start?", "Start with the free Digital Presence Score for a quick diagnosis, or reserve a seat in KNOWN for the full system and a practical build order."],
];

export default function HomeShowcase() {
  return (
    <div className="bg-[#050505] text-white">
      <section className="section-rule px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1280px]">
          <Reveal className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <p className="section-label text-[#8db7ff]">Visibility has a ceiling</p>
              <h2 className="mt-7 max-w-[13ch] text-[clamp(3.3rem,6vw,6.3rem)] font-semibold leading-[0.95] tracking-[-0.06em]">The internet can’t value expertise it can’t recognise.</h2>
            </div>
            <div className="border-t border-white/12 pt-7">
              <p className="text-xl font-semibold leading-snug tracking-[-0.035em]">More content creates more noise when the association behind it is unclear.</p>
              <p className="mt-5 text-base leading-relaxed text-white/48">Diction connects positioning, perspective, proof, content and your website so every signal tells the same memorable story.</p>
              <Link href="/about" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#8db7ff]">Why Diction exists <ArrowRight size={15} /></Link>
            </div>
          </Reveal>

          <Reveal className="mt-16 grid overflow-hidden rounded-[1.25rem] border border-white/10 sm:grid-cols-2 lg:grid-cols-7" delay={0.08}>
            {signals.map((signal, index) => <div key={signal} className="flex min-h-24 items-end border-b border-white/10 p-5 last:border-0 sm:border-r lg:border-b-0"><div><span className="text-[10px] text-white/25">0{index + 1}</span><p className="mt-2 text-sm font-semibold">{signal}</p></div></div>)}
          </Reveal>
        </div>
      </section>

      <section className="section-rule px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1280px]">
          <Reveal className="mx-auto max-w-4xl text-center">
            <p className="section-label text-[#8db7ff]">The recognition loop</p>
            <h2 className="mt-7 text-[clamp(3rem,5.2vw,5.2rem)] font-semibold leading-[0.98] tracking-[-0.055em]">A simple system that becomes more valuable every time it runs.</h2>
          </Reveal>

          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {loop.map((step, index) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.title} delay={index * 0.06}>
                  <article className="h-full overflow-hidden rounded-[1.35rem] border border-white/13 bg-[#0a0a0b]">
                    <div className="triptych-art relative aspect-[16/10] border-b border-white/10" data-panel={index}>
                      <span className="absolute left-5 top-5 grid size-10 place-items-center rounded-full border border-white/20 bg-black/45 backdrop-blur"><Icon size={18} strokeWidth={1.5} /></span>
                    </div>
                    <div className="p-7">
                      <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.14em]"><span className="text-[#8db7ff]">{step.note}</span><span className="text-white/28">{step.number}</span></div>
                      <h3 className="mt-6 text-3xl font-semibold leading-none tracking-[-0.045em]">{step.title}</h3>
                      <p className="mt-5 text-sm leading-relaxed text-white/48">{step.body}</p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-rule px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1280px]">
          <Reveal className="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-end">
            <h2 className="max-w-[12ch] text-[clamp(3rem,5vw,5.1rem)] font-semibold leading-[0.98] tracking-[-0.055em]">One authority system. <span className="text-white/36">Three places it must feel true.</span></h2>
            <p className="text-base leading-relaxed text-white/48">The website, the ideas and the person should deepen one clear, credible impression.</p>
          </Reveal>
          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {stories.map((story, index) => (
              <Reveal key={story.title} delay={index * 0.05}>
                <article className="group relative aspect-[4/5] overflow-hidden rounded-[1.35rem] border border-white/12 bg-[#0c0c0d]">
                  <Image src={story.image} alt={story.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.025]" sizes="(min-width: 1024px) 33vw, 100vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-7">
                    <p className="section-label text-[#8db7ff]">{story.eyebrow}</p>
                    <h3 className="mt-4 text-3xl font-semibold leading-[1.02] tracking-[-0.045em]">{story.title}</h3>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-rule px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1180px]">
          <Reveal className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="section-label text-[#8db7ff]">The progression</p>
              <h2 className="mt-7 text-[clamp(3rem,4.6vw,4.7rem)] font-semibold leading-[0.98] tracking-[-0.055em]">From credible to unmistakable.</h2>
              <p className="mt-7 max-w-sm text-base leading-relaxed text-white/48">You do not need to become louder. The right signals need to become clearer and more consistent.</p>
            </div>
            <div className="overflow-hidden rounded-[1.35rem] border border-white/12">
              {stages.map(([number, title, body], index) => <div key={title} className={`grid gap-5 border-b border-white/10 p-6 last:border-0 md:grid-cols-[52px_150px_1fr] md:items-center ${index === 3 ? "bg-[#2f7cf6]" : "bg-white/[0.025]"}`}><span className="text-xs font-semibold text-white/38">{number}</span><h3 className="text-xl font-semibold tracking-[-0.035em]">{title}</h3><p className="text-sm leading-relaxed text-white/54">{body}</p></div>)}
            </div>
          </Reveal>
          <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between"><p className="text-sm text-white/42">Not sure where you are today?</p><Link href="/tools/digital-presence-score" className="button-dark">Discover my digital presence score <ArrowRight size={15} /></Link></div>
        </div>
      </section>

      <section className="px-3 py-3 sm:px-5 sm:py-5">
        <div className="cinematic-landscape relative mx-auto max-w-[1480px] overflow-hidden rounded-[1.6rem] border border-white/10 px-6 py-20 sm:px-10 md:min-h-[660px] md:px-16 md:py-28">
          <Reveal className="relative mx-auto grid max-w-[1180px] gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-white/56"><Sparkles size={15} /> Free masterclass for founders &amp; experts</div>
              <h2 className="mt-7 max-w-[9ch] text-[clamp(4rem,7vw,7rem)] font-semibold leading-[0.86] tracking-[-0.065em]">Get <span className="text-[#8db7ff]">KNOWN.</span></h2>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/62">Turn expertise into a clear, trusted and opportunity-generating digital presence—then leave with the right build order.</p>
            </div>
            <div className="rounded-[1.3rem] border border-white/16 bg-black/58 p-7 backdrop-blur-xl md:p-9">
              <p className="text-xs font-semibold text-white/38">You’ll leave with</p>
              <ul className="mt-6 grid gap-4">{outcomes.map((outcome) => <li key={outcome} className="flex items-start gap-3 text-sm leading-relaxed text-white/76"><span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-[#2f7cf6]"><Check size={12} strokeWidth={3} /></span>{outcome}</li>)}</ul>
              <Link href="/register" className="button-light mt-8 w-full sm:w-full">Reserve my free seat <ArrowRight size={15} /></Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-rule px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-[1180px] gap-14 lg:grid-cols-[0.72fr_1.28fr]">
          <Reveal>
            <p className="section-label text-[#8db7ff]">Frequently asked</p>
            <h2 className="mt-7 text-[clamp(3rem,4.7vw,4.8rem)] font-semibold leading-[0.98] tracking-[-0.055em]">Clear answers before the next step.</h2>
            <p className="mt-7 max-w-md text-base leading-relaxed text-white/46">Diction is intentionally focused. These are the questions worth answering before deciding whether it is relevant to you.</p>
          </Reveal>
          <Reveal className="overflow-hidden rounded-[1.35rem] border border-white/12 bg-white/[0.025]" delay={0.08}>
            {faqs.map(([question, answer]) => <details key={question} className="group border-b border-white/10 px-6 last:border-0 md:px-8"><summary className="flex cursor-pointer list-none items-center justify-between gap-8 py-7 text-lg font-semibold tracking-[-0.03em] [&::-webkit-details-marker]:hidden">{question}<span className="grid size-8 shrink-0 place-items-center rounded-full border border-white/14 text-[#8db7ff] transition-transform group-open:rotate-45"><Plus size={15} /></span></summary><p className="max-w-2xl pb-8 pr-10 text-sm leading-relaxed text-white/48">{answer}</p></details>)}
          </Reveal>
        </div>
      </section>

      <PageFooter />
    </div>
  );
}
