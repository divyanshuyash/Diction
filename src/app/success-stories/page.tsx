import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";
import PageIntro from "@/components/PageIntro";
import CallToAction from "@/components/CallToAction";
import SuccessStoryMorph from "@/components/SuccessStoryMorph";

export const metadata: Metadata = {
  title: "Success Stories",
  description: "Explore the rooms, collaborations, and working moments behind Diction's approach.",
};

const patterns = [
  { type: "Founder authority system", before: "Credible work, broad messaging and a website organised around services.", shift: "A single expertise association, clear audience language and proof connected to a relevant next step.", system: "Positioning → founder story → website trust journey → authority content." },
  { type: "Consultant positioning reset", before: "Strong delivery, interchangeable category language and content without a point of view.", shift: "A distinct perspective made visible through repeated ideas, examples and a recognisable voice.", system: "Positioning → point-of-view themes → evidence library → content formats." },
  { type: "Expert platform alignment", before: "Useful profiles and assets that each communicate a slightly different identity.", shift: "One position and one visual-verbal system repeated across the website, profiles and follow-up.", system: "Platform roles → profile alignment → lead journey → nurture path." },
];

const storyMoments = [
  { src: "/success-social.png", alt: "Two collaborators at a social gathering" },
  { src: "/success-workshop.png", alt: "Two people meeting at a workshop" },
  { src: "/success-conversation.png", alt: "A working conversation across a table" },
  { src: "/success-presentation.png", alt: "Presenter sharing a brand analysis" },
  { src: "/success-team.png", alt: "Two collaborators at an event" },
  { src: "/success-community.png", alt: "Two people at a community workspace" },
  { src: "/success-peer.png", alt: "Two peers outdoors" },
  { src: "/success-google.png", alt: "Founder beside a Google sign" },
  { src: "/success-stage.png", alt: "A live innovation event on stage" },
];

export default function SuccessStoriesPage() {
  return (
    <main className="bg-[#080808] text-white">
      <PageHeader />
      <PageIntro
        eyebrow="Success stories"
        title="What changes when the system connects."
        description="Diction evaluates progress through clarity, recognition, trust and better opportunity pathways. It does not measure isolated deliverables or attention metrics alone."
        primary={{ label: "See the process", href: "#stories" }}
        secondary={{ label: "Explore capabilities", href: "/capabilities" }}
        backgroundImage={{ src: "/hero-success-stories-founder.png", alt: "Founder in conversation at an event" }}
      />

      <section className="section-pad bg-[#f1eee8] px-6 text-[#111] md:px-10">
        <div className="mx-auto grid max-w-[1220px] gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-black">
            <Image src="/success-stage.png" alt="A live innovation event on stage" fill className="object-cover" sizes="(min-width: 1024px) 55vw, 100vw" />
          </div>
          <div>
            <p className="section-label text-[#7134cb]">Proof with context</p>
            <h2 className="editorial-heading mt-7">Built in real rooms, with real people.</h2>
            <p className="body-large mt-7 text-black/52">The work is not just what appears on a website. It is shaped in conversations, workshops, live presentations and the relationships that make a point of view useful.</p>
            <p className="mt-6 border-l-2 border-[#7134cb] pl-5 text-sm leading-relaxed text-black/45">These are moments from the work around Diction: learning in public, collaborating closely and turning insight into a clearer next move.</p>
          </div>
        </div>
      </section>

      <SuccessStoryMorph moments={storyMoments} />

      <section id="stories" className="section-pad px-6 md:px-10">
        <div className="mx-auto max-w-[1220px]">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="editorial-heading mx-auto">Representative transformation patterns.</h2>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white/42">These are not testimonials or performance claims. They show how a starting challenge can guide a focused sequence of work.</p>
          </div>
          <div className="mt-10 grid gap-4">
            {patterns.map((pattern, index) => (
              <article key={pattern.type} className="story-card surface-card-dark rounded-lg p-7 md:p-9">
                <div className="grid gap-7 lg:grid-cols-[90px_0.8fr_1.05fr_1.15fr]">
                  <span className="text-xs font-bold text-[#bd84ff]">0{index + 1}</span>
                  <div>
                    <p className="section-label text-white/28">Pattern</p>
                    <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em]">{pattern.type}</h3>
                  </div>
                  <div>
                    <p className="section-label text-white/28">Before → shift</p>
                    <p className="mt-4 text-sm leading-relaxed text-white/50">{pattern.before}</p>
                    <p className="mt-4 text-sm leading-relaxed text-white/72">{pattern.shift}</p>
                  </div>
                  <div>
                    <p className="section-label text-white/28">Connected system</p>
                    <p className="mt-4 text-sm font-semibold leading-relaxed text-[#d6b8ff]">{pattern.system}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <Link href="/capabilities" className="text-link mt-10">See what Diction can implement <ArrowRight size={14} /></Link>
        </div>
      </section>

      <CallToAction title="Your gap should determine the work. Not the other way around." body="Use the Digital Presence Score to identify the part of your system that needs attention first." href="/tools/digital-presence-score" label="Discover my score" />
      <PageFooter />
    </main>
  );
}
