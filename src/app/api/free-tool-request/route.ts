const MAX_LENGTHS = {
  name: 120,
  email: 254,
  links: 2000,
  expectations: 5000,
} as const;

const toolNames = {
  "positioning-clarity-audit": "Positioning Clarity Audit",
  "authority-content-audit": "Authority Content Audit",
  "website-trust-audit": "Website Trust Audit",
  "90-day-presence-roadmap": "90-Day Presence Roadmap",
} as const;

function getString(value: unknown, field: keyof typeof MAX_LENGTHS) {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  return trimmed && trimmed.length <= MAX_LENGTHS[field] ? trimmed : null;
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ message: "Please complete the form and try again." }, { status: 400 });
  }

  const name = getString(body.name, "name");
  const email = getString(body.email, "email");
  const links = getString(body.links, "links");
  const expectations = getString(body.expectations, "expectations");
  const toolSlug = typeof body.toolSlug === "string" ? body.toolSlug : "";
  const toolTitle = toolNames[toolSlug as keyof typeof toolNames];

  if (!name || !email || !links || !expectations || !toolTitle || body.emailConsent !== "on") {
    return Response.json({ message: "Please complete each required field." }, { status: 400 });
  }

  try {
    new URL(links);
  } catch {
    return Response.json({ message: "Add a complete website or social media link, including https://." }, { status: 400 });
  }

  const webhookUrl = process.env.FREE_TOOL_SHEETS_WEBHOOK_URL;
  const webhookSecret = process.env.FREE_TOOL_SHEETS_SECRET;
  if (!webhookUrl || !webhookSecret) {
    return Response.json({ message: "The review request service is not connected yet. Please try again shortly." }, { status: 503 });
  }

  try {
    const upstream = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, links, expectations, toolSlug, toolTitle, secret: webhookSecret }),
      signal: AbortSignal.timeout(10_000),
    });
    const response = await upstream.json().catch(() => null) as { ok?: boolean } | null;
    if (!upstream.ok || !response?.ok) throw new Error("Sheet endpoint rejected the request.");
  } catch {
    return Response.json({ message: "We could not save your request. Please try again shortly." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
