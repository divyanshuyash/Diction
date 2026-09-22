const MAX_LENGTHS = {
  firstName: 120,
  email: 254,
  role: 80,
  goal: 160,
  gap: 180,
  session: 80,
  phone: 40,
  source: 200,
  score: 40,
} as const;

const allowedRoles = new Set(["Founder", "Coach / Consultant", "Corporate Expert", "Other"]);
const allowedGoals = new Set([
  "Build recognition and authority",
  "Generate qualified opportunities",
  "Clarify my positioning",
  "Connect my digital presence",
]);
const allowedGaps = new Set([
  "People do not understand what I do",
  "My audience is too broad",
  "My content does not build authority",
  "My website does not create trust",
  "My platforms feel disconnected",
  "Attention does not create opportunities",
  "I do not have a follow-up system",
  "I do not know what to build first",
]);
const allowedSessions = new Set(["next-live", "future"]);

function getString(value: unknown, field: keyof typeof MAX_LENGTHS, required = true) {
  if (typeof value !== "string") return required ? null : "";
  const trimmed = value.trim();
  if (!trimmed && required) return null;
  return trimmed.length <= MAX_LENGTHS[field] ? trimmed : null;
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ message: "Please complete the form and try again." }, { status: 400 });
  }

  const firstName = getString(body.firstName, "firstName");
  const email = getString(body.email, "email");
  const role = getString(body.role, "role");
  const goal = getString(body.goal, "goal");
  const gap = getString(body.gap, "gap");
  const session = getString(body.session, "session");
  const phone = getString(body.phone, "phone", false);
  const source = getString(body.source, "source");
  const score = getString(body.score, "score", false);
  const whatsappConsent = body.whatsappConsent === "on";

  if (
    !firstName || !email || !role || !goal || !gap || !session || !source ||
    body.emailConsent !== "on" || !/^\S+@\S+\.\S+$/.test(email) ||
    !allowedRoles.has(role) || !allowedGoals.has(goal) || !allowedGaps.has(gap) || !allowedSessions.has(session) ||
    (whatsappConsent && !phone)
  ) {
    return Response.json({ message: "Please complete each required field." }, { status: 400 });
  }

  const webhookUrl = process.env.KNOWN_REGISTRATION_SHEETS_WEBHOOK_URL;
  const webhookSecret = process.env.KNOWN_REGISTRATION_SHEETS_SECRET;
  if (!webhookUrl || !webhookSecret) {
    return Response.json({ message: "Registration is being connected. Please try again shortly." }, { status: 503 });
  }

  try {
    const upstream = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName, email, role, goal, gap, session, phone,
        emailConsent: "on", whatsappConsent: whatsappConsent ? "on" : "off", source, score, secret: webhookSecret,
      }),
      signal: AbortSignal.timeout(10_000),
    });
    const response = await upstream.json().catch(() => null) as { ok?: boolean } | null;
    if (!upstream.ok || !response?.ok) throw new Error("Sheet endpoint rejected the registration.");
  } catch {
    return Response.json({ message: "We could not save your registration. Please try again shortly." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
