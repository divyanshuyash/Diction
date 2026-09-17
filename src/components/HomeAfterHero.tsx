import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Compass,
  Orbit,
  Plus,
  ScanSearch,
  Sparkles,
} from "lucide-react";
import Reveal from "./Reveal";
import PageFooter from "./PageFooter";

const presenceSignals = [
  "Positioning",
  "Point of view",
  "Authority content",
  "Proof",
  "Website",
  "Trust",
  "Opportunity",
];

const recognitionLoop = [
  {
    number: "01",
    title: "Find the real gap",
    body: "See whether positioning, audience, proof, content or the path to opportunity is holding the wider system back.",
    note: "Diagnosis before deliverables",
    icon: ScanSearch,
  },
  {
    number: "02",
    title: "Build one clear association",
    body: "Decide what you should be known for, by whom, and the evidence that makes that position believable.",
    note: "Clarity before volume",
    icon: Compass,
  },
  {
    number: "03",
    title: "Repeat until it compounds",
    body: "Align every platform around the same idea, then keep adding perspective, proof and useful relationships.",
    note: "Recognition over reach",
    icon: Orbit,
  },
];

const recognitionStages = [
  {
    number: "1",
    level: "Stage one",
    title: "Credible",
    body: "The expertise is real, but most of it still lives in conversations, delivery and referrals.",
  },
  {
    number: "2",
    level: "Stage two",
    title: "Clear",
    body: "People can quickly explain who you help, what you understand and why it matters.",
  },
  {
    number: "3",
    level: "Stage three",
    title: "Trusted",
    body: "Your ideas, proof and human voice make the position feel earned rather than claimed.",
  },
  {
    number: "4",
    level: "Stage four",
    title: "Recognised",
    body: "The same memorable association appears across your content, website and conversations.",
  },
  {
    number: "5",
    level: "Stage five",
    title: "Chosen",
    body: "The right people arrive with context, trust and a clearer reason to start a conversation.",
  },
];

const authorityStories = [
  {
    eyebrow: "Your home base",
    title: "A website that earns trust before the call.",
    image: "/stock-founder-kit.jpg",
    alt: "A thoughtfully arranged founder workspace",
    className: "lg:row-span-2",
  },
  {
    eyebrow: "Your point of view",
    title: "Ideas that sound like you—not the category.",
    image: "/stock-masterclass-stage.jpg",
    alt: "A speaker sharing a point of view with an audience",
    className: "",
  },
  {
    eyebrow: "Your presence",
    title: "A recognisable identity wherever people find you.",
    image: "/stock-founder-portrait.jpg",
    alt: "A founder in a calm workspace",
    className: "",
  },
];

const masterclassOutcomes = [
  "The seven-part D.I.C.T.I.O.N. framework",
  "A diagnosis of the gap limiting your presence",
  "A practical 90-day build order",
  "A clearer choice between doing it yourself and getting support",
];

const faqs = [
  {
    question: "What does Diction actually do?",
    answer:
      "Diction helps founders and experts turn credible work into a clear, trusted and opportunity-generating digital presence. That can include positioning, authority content, website strategy, trust journeys and platform alignment—scoped around the gap rather than a fixed package.",
  },
  {
    question: "Is this personal branding?",
    answer:
      "Not in the performative, post-every-day sense. Diction treats your digital presence as a connected authority system: what you are known for, the perspective and proof that support it, and the path that turns attention into a useful relationship.",
  },
  {
    question: "Do I need a large audience first?",
    answer:
      "No. Audience size cannot replace clarity. A smaller group of relevant people who understand and trust your expertise is usually more valuable than broad attention with no clear association.",
  },
  {
    question: "What is the KNOWN masterclass?",
    answer:
      "KNOWN is Diction’s free masterclass for founders and experts. It teaches the complete framework and helps you identify what to prioritise over the next 90 days before you make a larger strategy or implementation decision.",
  },
  {
    question: "Can Diction help implement the strategy?",
    answer:
      "Yes, when there is a strong fit. Implementation may include positioning and narrative, content systems, trust-led website experiences and platform integration. The scope is defined after diagnosis because different gaps need different work.",
  },
  {
    question: "Where should I start?",
    answer:
      "Start with the free Digital Presence Score if you want a quick diagnosis, or reserve a seat in the KNOWN masterclass if you want the full system and a practical build order.",
  },
];

export default function HomeAfterHero() {
  return (
    <div className="relative isolate bg-[#060606] text-white">
      <section
        className="overflow-hidden border-y border-white/10 bg-white/[0.025] py-5"
        aria-label="The connected parts of a recognisable digital presence"
      >
        <div className="home-marquee-track flex min-w-max text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white/42">
          {[0, 1].map((group) => (
            <div
              key={group}
              className="flex shrink-0 items-center gap-5 px-5 md:gap-8 md:px-10"
              aria-hidden={group === 1 ? "true" : undefined}
            >
              {presenceSignals.map((signal) => (
                <div key={signal} className="flex items-center gap-5 md:gap-8">
                  <span>{signal}</span>
                  <span className="size-1.5 rounded-full bg-[#a855f7] shadow-[0_0_14px_rgba(168,85,247,0.9)]" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden px-6 py-24 md:px-10 md:py-36 lg:py-44">
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(circle at 74% 35%, rgba(168,85,247,0.2), transparent 30%), linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
            backgroundSize: "auto, 88px 88px, 88px 88px",
            maskImage: "linear-gradient(to bottom, transparent, black 20%, black 78%, transparent)",
          }}
        />
        <div className="relative mx-auto max-w-[1240px]">
          <Reveal>
            <p className="section-label text-[#bd84ff]">Visibility has a ceiling</p>
            <h2 className="mt-8 max-w-[14ch] text-[clamp(3.4rem,8.2vw,8.8rem)] font-black leading-[0.84] tracking-[-0.075em]">
              The internet can&apos;t value expertise it can&apos;t recognise.
            </h2>
          </Reveal>
          <Reveal className="mt-12 grid gap-8 border-t border-white/12 pt-8 md:grid-cols-[1fr_1fr] lg:ml-auto lg:max-w-[820px]" delay={0.08}>
            <p className="text-xl font-semibold leading-snug tracking-[-0.035em] text-white/90 md:text-2xl">
              More content creates more noise when the association behind it is unclear.
            </p>
            <div>
              <p className="text-sm leading-7 text-white/48 md:text-base">
                Diction connects positioning, point of view, proof, content and your website so every signal tells the same memorable story.
              </p>
              <Link href="/about" className="text-link mt-7 text-white">
                Why Diction exists <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0a0a0a] px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1240px]">
          <Reveal className="grid gap-8 lg:grid-cols-[1.15fr_0.55fr] lg:items-end">
            <div>
              <p className="section-label text-[#bd84ff]">The recognition loop</p>
              <h2 className="mt-7 max-w-[12ch] text-[clamp(3.25rem,6.6vw,7.2rem)] font-black leading-[0.86] tracking-[-0.07em]">
                Diction isn&apos;t a content plan you finish.
              </h2>
            </div>
            <p className="max-w-md text-lg leading-8 text-white/46 lg:pb-2">
              It&apos;s a system you keep strengthening as your work, reputation and ambitions grow.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 lg:grid-cols-3">
            {recognitionLoop.map((step, index) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.title} delay={index * 0.08} className="h-full">
                  <article className="group relative flex h-full min-h-[30rem] flex-col overflow-hidden bg-[#0b0b0b] p-7 transition-colors duration-300 hover:bg-[#100b14] md:p-9">
                    <div
                      className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full border border-[#a855f7]/20 bg-[#a855f7]/[0.04] transition-transform duration-500 group-hover:scale-110"
                      aria-hidden="true"
                    />
                    <div className="relative flex items-center justify-between">
                      <span className="text-xs font-bold tracking-[0.18em] text-[#bd84ff]">{step.number}</span>
                      <Icon size={29} strokeWidth={1.35} className="text-white/58" aria-hidden="true" />
                    </div>
                    <div className="relative mt-auto pt-24">
                      <p className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-white/26">{step.note}</p>
                      <h3 className="mt-5 max-w-[9ch] text-4xl font-semibold leading-[0.95] tracking-[-0.055em] md:text-5xl">{step.title}</h3>
                      <p className="mt-6 max-w-sm text-sm leading-7 text-white/46">{step.body}</p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f1eee8] px-6 py-24 text-[#111] md:px-10 md:py-32">
        <div className="mx-auto max-w-[1240px]">
          <Reveal className="flex flex-col gap-7 border-b border-black/14 pb-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="section-label text-[#7134cb]">A presence that matures</p>
              <h2 className="mt-7 max-w-[12ch] text-[clamp(3.2rem,6.3vw,6.8rem)] font-black leading-[0.86] tracking-[-0.07em]">
                From credible to unmistakable.
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-black/48">
              You do not need to become louder. You need to make the right signals clearer, more believable and more consistent.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-px overflow-hidden rounded-[1.8rem] bg-black/14 lg:grid-cols-5">
            {recognitionStages.map((stage, index) => (
              <Reveal key={stage.title} delay={index * 0.06} className="h-full">
                <article className="group flex h-full min-h-[24rem] flex-col bg-[#faf7f1] p-6 transition-colors duration-300 hover:bg-[#eee1ff] md:p-7">
                  <div className="flex items-center justify-between">
                    <span className="grid size-10 place-items-center rounded-full border border-black/15 text-sm font-bold text-[#7134cb] transition-colors group-hover:border-[#7134cb] group-hover:bg-[#7134cb] group-hover:text-white">
                      {stage.number}
                    </span>
                    {index < recognitionStages.length - 1 && <ArrowRight size={16} className="text-black/25" aria-hidden="true" />}
                  </div>
                  <div className="mt-auto pt-16">
                    <p className="section-label text-black/32">{stage.level}</p>
                    <h3 className="mt-4 text-3xl font-semibold tracking-[-0.055em]">{stage.title}</h3>
                    <p className="mt-4 text-sm leading-6 text-black/48">{stage.body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-black/42">Not sure where you are today?</p>
            <Link href="/tools/digital-presence-score" className="button-dark">
              Discover my digital presence score <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1240px]">
          <Reveal className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="section-label text-[#bd84ff]">One authority system</p>
              <h2 className="mt-7 max-w-[10ch] text-[clamp(3.2rem,6.4vw,6.8rem)] font-black leading-[0.86] tracking-[-0.07em]">
                Your authority should travel.
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-white/44 lg:justify-self-end">
              From the first post someone notices to the website they visit and the conversation they start, every moment should deepen the same impression.
            </p>
          </Reveal>

          <div className="mt-14 grid auto-rows-[21rem] gap-4 lg:grid-cols-[1.15fr_0.85fr]">
            {authorityStories.map((story, index) => (
              <Reveal key={story.title} delay={index * 0.07} className={story.className}>
                <article className="group relative h-full min-h-[21rem] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">
                  <Image
                    src={story.image}
                    alt={story.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                    sizes={index === 0 ? "(min-width: 1024px) 55vw, 100vw" : "(min-width: 1024px) 40vw, 100vw"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/12 to-transparent" aria-hidden="true" />
                  <div className="absolute inset-x-0 bottom-0 p-7 md:p-9">
                    <p className="section-label text-[#d7b2ff]">{story.eyebrow}</p>
                    <h3 className="mt-4 max-w-[15ch] text-3xl font-semibold leading-[0.98] tracking-[-0.05em] md:text-4xl">{story.title}</h3>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-6 sm:px-6 md:px-10 md:py-10">
        <div className="relative mx-auto max-w-[1320px] overflow-hidden rounded-[2.2rem] bg-[#8f42da] px-6 py-16 shadow-[0_30px_100px_rgba(113,52,203,0.28)] md:px-12 md:py-20 lg:px-16 lg:py-24">
          <div
            className="pointer-events-none absolute inset-0 opacity-55"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(circle at 84% 12%, rgba(255,255,255,0.36), transparent 24%), linear-gradient(rgba(255,255,255,0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.09) 1px, transparent 1px)",
              backgroundSize: "auto, 72px 72px, 72px 72px",
            }}
          />
          <Reveal className="relative grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <div className="flex items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-white/72">
                <Sparkles size={16} aria-hidden="true" /> Free masterclass for founders &amp; experts
              </div>
              <h2 className="mt-7 max-w-[9ch] text-[clamp(4.4rem,9vw,10rem)] font-black leading-[0.76] tracking-[-0.085em]">
                Get <span className="font-serif font-normal italic text-[#ead7ff]">KNOWN.</span>
              </h2>
              <p className="mt-9 max-w-xl text-lg leading-8 text-white/75 md:text-xl">
                Learn how to turn expertise into a clear, trusted and opportunity-generating digital presence—then leave with the right build order.
              </p>
            </div>

            <div className="rounded-[1.8rem] border border-white/20 bg-black/16 p-6 backdrop-blur-sm md:p-8">
              <p className="section-label text-white/55">You&apos;ll leave with</p>
              <ul className="mt-6 grid gap-4">
                {masterclassOutcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-3 text-sm leading-6 text-white/85">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-white text-[#7134cb]">
                      <Check size={12} strokeWidth={3} aria-hidden="true" />
                    </span>
                    {outcome}
                  </li>
                ))}
              </ul>
              <Link href="/register" className="button-light mt-8 w-full justify-between sm:w-full">
                Reserve my free seat <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-28 md:px-10 md:py-40">
        <Reveal className="mx-auto max-w-[1240px] text-center">
          <p className="section-label text-[#bd84ff]">Selective by design</p>
          <h2 className="mx-auto mt-8 max-w-[13ch] text-[clamp(3.4rem,7.6vw,8.5rem)] font-black leading-[0.84] tracking-[-0.075em]">
            Built for deep work. Not digital theatre.
          </h2>
          <p className="mx-auto mt-9 max-w-2xl text-base leading-8 text-white/46 md:text-lg">
            Diction is for credible founders and experts willing to choose a position, bring real evidence and participate in the thinking required to become genuinely recognisable.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/about" className="button-light">
              See if Diction is a fit <ArrowRight size={15} aria-hidden="true" />
            </Link>
            <Link href="/capabilities" className="button-ghost">
              Explore capabilities
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="border-t border-white/10 bg-[#0a0a0a] px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-[1180px] gap-14 lg:grid-cols-[0.62fr_1.38fr]">
          <Reveal>
            <p className="section-label text-[#bd84ff]">Frequently asked</p>
            <h2 className="mt-7 text-[clamp(3.2rem,5.4vw,5.8rem)] font-black leading-[0.88] tracking-[-0.07em]">
              Clear answers before the next step.
            </h2>
          </Reveal>
          <Reveal className="border-t border-white/12" delay={0.08}>
            {faqs.map((faq) => (
              <details key={faq.question} className="group border-b border-white/12">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-8 py-7 text-left text-lg font-semibold tracking-[-0.03em] text-white/90 transition-colors hover:text-[#d7b2ff] [&::-webkit-details-marker]:hidden md:py-8 md:text-xl">
                  {faq.question}
                  <span className="grid size-9 shrink-0 place-items-center rounded-full border border-white/14 transition-[background-color,border-color,transform] group-open:rotate-45 group-open:border-[#a855f7] group-open:bg-[#a855f7]">
                    <Plus size={16} aria-hidden="true" />
                  </span>
                </summary>
                <p className="max-w-2xl pb-8 pr-12 text-sm leading-7 text-white/46 md:text-base md:leading-8">{faq.answer}</p>
              </details>
            ))}
          </Reveal>
        </div>
      </section>

      <PageFooter />
    </div>
  );
}
