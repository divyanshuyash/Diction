"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

function subscribe() { return () => {}; }
function readDraft() {
  try { return sessionStorage.getItem("diction-known-registration"); }
  catch { return null; }
}

export default function RegistrationConfirmation() {
  const stored = useSyncExternalStore(subscribe, readDraft, () => null);
  let firstName = "";
  let hasDraft = false;
  try {
    const draft = stored ? JSON.parse(stored) : null;
    hasDraft = !!draft && typeof draft.firstName === "string";
    if (hasDraft) firstName = draft.firstName;
  } catch { /* An invalid draft should not prevent the page from rendering. */ }

  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="mx-auto grid size-14 place-items-center rounded-full border border-purple-300/30 bg-purple-400/10 text-purple-200"><Check size={24} aria-hidden="true" /></div>
      <p className="section-label mt-6 text-[#bd84ff]">Registration confirmed</p>
      <h1 className="editorial-title mx-auto mt-5">{hasDraft ? `${firstName}, your place is reserved.` : "Your registration is confirmed."}</h1>
      <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/65">{hasDraft ? "Your details have been sent to Diction. We will share the next confirmed session date and practical joining details by email." : "Your registration has been received. Diction will share the next confirmed session date and joining details by email."}</p>
      <Link href="/known" className="button-light mt-7">Explore the masterclass <ArrowRight size={16} /></Link>
    </div>
  );
}
