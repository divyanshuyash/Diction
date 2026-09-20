export type AuditTool = {
  slug: string;
  eyebrow: string;
  title: string;
  promise: string;
  description: string;
  requestPrompt: string;
};

export const auditTools: Record<string, AuditTool> = {
  "positioning-clarity-audit": {
    slug: "positioning-clarity-audit",
    eyebrow: "Free positioning review",
    title: "Can people understand and remember what you should be known for?",
    promise: "Get a personal response within 1–2 days.",
    description: "We review how clearly your page or profile explains what you do, who it helps, and why you are distinct.",
    requestPrompt: "What would you like us to clarify about your positioning?",
  },
  "authority-content-audit": {
    slug: "authority-content-audit",
    eyebrow: "Free content review",
    title: "Does your content demonstrate expertise or simply add to the noise?",
    promise: "Get a personal response within 1–2 days.",
    description: "We review whether your content shows a clear point of view, proof, and expertise people can trust.",
    requestPrompt: "What would you like us to review about your content?",
  },
  "website-trust-audit": {
    slug: "website-trust-audit",
    eyebrow: "Free website review",
    title: "Does your website help a credible visitor trust you quickly?",
    promise: "Get a personal response within 1–2 days.",
    description: "We review whether your website makes your offer clear, credible, and easy to act on.",
    requestPrompt: "What would you like us to review about your website?",
  },
  "90-day-presence-roadmap": {
    slug: "90-day-presence-roadmap",
    eyebrow: "Free planning review",
    title: "What should you build first over the next 90 days?",
    promise: "Get a personal response within 1–2 days.",
    description: "We identify the most useful next step for your positioning, content, website, and visibility over the next 90 days.",
    requestPrompt: "What would you like to achieve in the next 90 days?",
  },
};
