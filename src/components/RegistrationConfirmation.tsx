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
      <p className="section-label mt-6 text-[#bd84ff]">Registration preview</p>
      <h1 className="editorial-title mx-auto mt-5">{hasDraft ? `${firstName}, your details are saved.` : "Explore KNOWN before you register."}</h1>
      <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/65">{hasDraft ? "Your details are saved in this browser tab only. They have not been sent to Diction, no seat has been booked, and no confirmation email has been sent." : "Live registration is not connected yet. You can explore the session and try the free tools while booking is being set up."}</p>
      <Link href="/known" className="button-light mt-7">Explore the masterclass <ArrowRight size={16} /></Link>
    </div>
  );
}
