export type AuditTool = {
  slug: string;
  eyebrow: string;
  title: string;
  promise: string;
  description: string;
  checks: string[];
  actions: string[];
  resultTitle: string;
  resultCopy: string;
  gap: string;
};

export const auditTools: Record<string, AuditTool> = {
  "positioning-clarity-audit": {
    slug: "positioning-clarity-audit",
    eyebrow: "Free positioning diagnostic",
    title: "Can people understand—and remember—what you should be known for?",
    promise: "Find the language gaps making strong expertise feel generic.",
    description: "This short audit helps you examine specificity, audience fit, differentiation and point of view before you invest in more content or design.",
    checks: ["A visitor can describe what I should be known for.", "My message names a specific audience.", "The problem I solve is stated in the audience's language.", "My desired outcome is concrete and believable.", "My point of view is distinct from common category advice.", "My offers reinforce one clear expertise association.", "My positioning is consistent across key platforms.", "My introduction is memorable without relying on job titles."],
    resultTitle: "Your positioning is a system of associations.",
    resultCopy: "The strongest message makes your expertise, audience and distinct perspective feel inseparable. KNOWN shows how that position connects to content, trust and opportunity.",
    gap: "People do not understand what I do",
    actions: [
      "Write a one-sentence introduction: I help [audience] solve [problem] through [approach]. Ask someone outside your business to explain it back.",
      "Choose one primary audience and name it in your headline. Move secondary audiences into supporting copy.",
      "Review three recent client conversations and replace internal jargon with the words clients use.",
      "Describe one specific change your work helps create, with the conditions it depends on.",
      "Write down one common approach you disagree with, why, and the alternative you recommend.",
      "List your offers next to your core expertise. Clarify how each offer supports the same position.",
      "Compare your website introduction and two main profiles. Align their audience, promise and expertise.",
      "Introduce yourself through the problem you solve and a concrete example before mentioning your job title.",
    ],
  },
  "authority-content-audit": {
    slug: "authority-content-audit",
    eyebrow: "Free content diagnostic",
    title: "Does your content demonstrate expertise—or simply add to the noise?",
    promise: "Review the signals that turn publishing into authority.",
    description: "Use this audit to assess whether your ideas show perspective, useful evidence, consistency and a clear relationship to the work you want to be known for.",
    checks: ["My content expresses an original perspective.", "I use evidence, examples or lived experience.", "My core topics reinforce what I want to be known for.", "A reader can recognise my voice across formats.", "My content helps the audience make a better decision.", "I explain why common approaches fail.", "Proof appears naturally within my teaching.", "Interested readers have a relevant next step."],
    resultTitle: "Authority content makes your thinking visible.",
    resultCopy: "Frequency cannot compensate for generic ideas. KNOWN helps you connect a clear position to content people can recognise and trust.",
    gap: "My content does not build authority",
    actions: [
      "Choose one common belief in your field and write a short response that explains your own view.",
      "Add one concrete example, observation or sourced piece of evidence to your next post.",
      "Pick three recurring topics that support your expertise and use them to plan your next six posts.",
      "Read three posts aloud. Rewrite the generic phrases in words you would use with a client.",
      "Answer one decision your audience is facing, including the tradeoff and when your advice applies.",
      "Explain a common mistake, what causes it, and one practical alternative.",
      "Teach through a real example you have permission to share, explaining the context and limits.",
      "Add one relevant next step to your next piece: a related guide, diagnostic or conversation.",
    ],
  },
  "website-trust-audit": {
    slug: "website-trust-audit",
    eyebrow: "Free website diagnostic",
    title: "Does your website help a credible visitor trust you quickly?",
    promise: "Examine the clarity, proof and next-step signals on your most important owned platform.",
    description: "This audit reviews the trust journey from first impression to relevant action—without reducing your website to a list of cosmetic fixes.",
    checks: ["The first screen makes my expertise clear.", "The visitor can see who the site is for.", "Proof includes useful context, not just logos.", "My human voice and perspective are visible.", "The page hierarchy answers questions in a natural order.", "Important claims are supported by evidence.", "Every key page has one relevant next action.", "The experience feels consistent on mobile and desktop."],
    resultTitle: "A trusted website reduces uncertainty.",
    resultCopy: "Design matters most when it supports clear positioning, credible proof and an obvious next step. KNOWN shows where the website sits inside the wider system.",
    gap: "My website does not create trust",
    actions: [
      "Show your first screen to someone for five seconds. Ask what you do, for whom, and what they would click.",
      "Name your primary audience near the top of the page and describe a problem they recognise.",
      "Pair one proof point with the problem, your contribution and a verified outcome or lesson.",
      "Add a short explanation of how you approach the work, written in your own voice.",
      "Order the page around four questions: Is this for me? What do I get? Why trust it? What next?",
      "Review the strongest claim on your page and add supporting evidence or qualify the wording.",
      "Choose one primary action for each key page and give its button a clear outcome-based label.",
      "Test your main visitor journey on a phone. Fix any clipped text, small controls or confusing navigation.",
    ],
  },
  "90-day-presence-roadmap": {
    slug: "90-day-presence-roadmap",
    eyebrow: "Free planning diagnostic",
    title: "What should you build first over the next 90 days?",
    promise: "Choose a focused sequence instead of trying to fix every platform at once.",
    description: "Use the roadmap prompts to locate your foundation, authority and opportunity priorities, then take a practical build order into the KNOWN masterclass.",
    checks: ["I can name the one gap limiting the wider system.", "My positioning is clear enough to guide execution.", "I know which audience matters most this quarter.", "I have selected a focused authority theme.", "My proof is organised and ready to use.", "I know which platform should be improved first.", "My next action matches the audience's readiness.", "The work fits a realistic 90-day sequence."],
    resultTitle: "Sequence creates momentum.",
    resultCopy: "The right next step depends on the gap currently limiting the whole system. KNOWN gives you the framework to make that choice with clarity.",
    gap: "I do not know what to build first",
    actions: [
      "Name the one point where people lose clarity or stop taking the next step. Make it the first priority.",
      "Agree on your audience, problem and point of view before scheduling production work.",
      "Choose a single audience for this quarter and list the questions it needs answered.",
      "Select one expertise theme and outline four useful pieces around it.",
      "Collect approved examples, testimonials and evidence in one shared proof library.",
      "Choose the platform that already receives meaningful attention and fix its visitor journey first.",
      "Match the next action to readiness: a useful diagnostic for new visitors, a conversation for those ready.",
      "Plan three phases: clarify the foundation, publish and improve the experience, then review and refine.",
    ],
  },
};
