import type { Metadata } from "next";
import PageFooter from "@/components/PageFooter";
import PageHeader from "@/components/PageHeader";
import PageIntro from "@/components/PageIntro";
import RegistrationForm from "@/components/RegistrationForm";

export const metadata: Metadata = {
  title: "KNOWN: The Free Digital Presence Masterclass",
  description:
    "Build a digital presence that turns credible expertise into clarity, recognition, trust and opportunity.",
};

const outcomes = [
  {
    title: "Clarify your position",
    body: "Name the audience, problem and point of view your presence should make memorable.",
  },
  {
    title: "Find the trust gap",
    body: "See where your positioning, content, proof and platforms stop reinforcing one another.",
  },
  {
    title: "Choose what to build next",
    body: "Turn the diagnosis into a focused 90-day sequence instead of another content list.",
  },
];

const curriculum = [
  {
    label: "Foundation",
    title: "Why expertise stays invisible",
    body: "Separate activity from authority and understand what makes good work recognisable online.",
  },
  {
    label: "Framework",
    title: "The D.I.C.T.I.O.N. system",
    body: "Connect positioning, identity, content and proof into one coherent digital presence.",
  },
  {
    label: "Diagnosis",
    title: "Your biggest trust gap",
    body: "Identify the one weak link that is making the rest of your presence work too hard.",
  },
  {
    label: "Roadmap",
    title: "A focused 90-day build order",
    body: "Leave knowing what to fix first, what can wait and how each step supports the next.",
  },
];

const faqs = [
  [
    "Is KNOWN really free?",
    "Yes. Registration is free, with no obligation to apply for or purchase anything afterward.",
  ],
  [
    "Is this practical or a sales webinar?",
    "It is a teaching-led masterclass built around a diagnosis and a 90-day roadmap. Any optional support is clearly separated at the end.",
  ],
  [
    "When is the next session?",
    "Dates are being finalised. Register and we will send you the next confirmed live schedule.",
  ],
];

export default function KnownPage() {
  return (
    <main className="bg-[#080808] text-white">
      <PageHeader />
      <PageIntro
        eyebrow="KNOWN · Free live masterclass"
        title="Become known for the work only you can do."
        description="A practical live class for founders and experts who want to turn credible expertise into clear positioning, trusted recognition and better opportunities."
        primary={{ label: "Reserve my free seat", href: "#register" }}
        secondary={{ label: "Explore the free tools", href: "/tools" }}
        backgroundImage={{
          src: "/known-masterclass-portrait.png",
          alt: "The host of the KNOWN masterclass",
          position: "72% 34%",
        }}
      />

      <section className="section-pad bg-[#f1eee8] px-6 text-[#111] md:px-10">
        <div className="mx-auto max-w-[1120px]">
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-label text-[#7134cb]">What you will leave with</p>
            <h2 className="editorial-heading mx-auto mt-7">
              One clear system. Three useful decisions.
            </h2>
            <p className="body-large mx-auto mt-7 max-w-2xl text-black/52">
              No platform tricks or inflated promises. Just a sharper way to make your expertise
              easier to understand, trust and remember.
            </p>
          </div>

          <div className="mt-14 grid border-y border-black/12 md:grid-cols-3">
            {outcomes.map((outcome, index) => (
              <article
                key={outcome.title}
                className={`py-8 md:px-8 md:py-10 ${
                  index > 0 ? "border-t border-black/12 md:border-l md:border-t-0" : ""
                }`}
              >
                <span className="text-xs font-bold text-[#7134cb]">0{index + 1}</span>
                <h3 className="mt-8 text-xl font-semibold tracking-[-0.035em]">
                  {outcome.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-black/52">{outcome.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad px-6 md:px-10">
        <div className="mx-auto max-w-[1040px]">
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-label text-[#bd84ff]">Inside the masterclass</p>
            <h2 className="editorial-heading mx-auto mt-7">Four parts. One connected picture.</h2>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-[1.25rem] bg-white/12 md:grid-cols-2">
            {curriculum.map((item, index) => (
              <article key={item.title} className="min-h-64 bg-[#0d0d0d] p-8 md:p-10">
                <div className="flex items-center justify-between gap-5">
                  <span className="section-label text-[#bd84ff]">{item.label}</span>
                  <span className="text-xs text-white/25">0{index + 1}</span>
                </div>
                <h3 className="mt-14 text-2xl font-semibold tracking-[-0.04em]">{item.title}</h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-white/45">{item.body}</p>
              </article>
            ))}
          </div>

          <p className="mt-7 text-center text-xs uppercase tracking-[0.18em] text-white/32">
            90 minutes · Live and practical · No audience size required
          </p>
        </div>
      </section>

      <section id="register" className="section-pad bg-[#f1eee8] px-6 text-[#111] md:px-10">
        <div className="mx-auto max-w-[820px]">
          <div className="mx-auto max-w-2xl text-center">
            <p className="section-label text-[#7134cb]">Reserve your place</p>
            <h2 className="editorial-heading mx-auto mt-7">Join the next live session.</h2>
            <p className="body-large mx-auto mt-7 max-w-xl text-black/52">
              Leave your details and we will send the next confirmed date directly to you.
            </p>
          </div>

          <div className="mt-12 rounded-[1.25rem] bg-[#0b0b0b] p-6 text-white shadow-[0_30px_100px_rgba(56,13,97,0.16)] md:p-10">
            <RegistrationForm />
          </div>
          <p className="mx-auto mt-5 max-w-2xl text-center text-xs leading-relaxed text-black/38">
            KNOWN is an educational masterclass. Optional implementation support may be
            explained at the end, with no obligation to apply or purchase.
          </p>
        </div>
      </section>

      <section className="section-pad px-6 md:px-10">
        <div className="mx-auto max-w-[860px]">
          <p className="section-label text-center text-[#bd84ff]">Questions, answered</p>
          <h2 className="editorial-heading mx-auto mt-7 text-center">The useful details.</h2>
          <div className="mt-14 border-t border-white/12">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group border-b border-white/12 py-6">
                <summary className="cursor-pointer list-none pr-8 text-lg font-semibold tracking-[-0.025em] [&::-webkit-details-marker]:hidden">
                  {question}
                </summary>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/45">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <PageFooter />
    </main>
  );
}
