"use client";

import { useEffect, useState } from "react";
import { CalendarClock, Check, MessageCircle } from "lucide-react";

type Registration = { firstName?: string; session?: string; whatsappConsent?: string };

export default function RegistrationConfirmation({ whatsappNumber }: { whatsappNumber?: string }) {
  const [registration, setRegistration] = useState<Registration>({});
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const stored = sessionStorage.getItem("diction-known-registration");
      if (!stored) return;
      try { setRegistration(JSON.parse(stored)); } catch { setRegistration({}); }
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  const cleanNumber = whatsappNumber?.replace(/\D/g, "");
  const message = encodeURIComponent(`Hi Diction, I have registered for KNOWN${registration.firstName ? ` as ${registration.firstName}` : ""}. Please send my class reminders here.`);
  const whatsappHref = cleanNumber ? `https://wa.me/${cleanNumber}?text=${message}` : null;

  return (
    <div className="mx-auto max-w-4xl text-center"><div className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-white/14 bg-white/5 text-[#8db7ff]"><Check size={28} /></div><p className="section-label mt-8 text-[#8db7ff]">Your place is reserved</p><h1 className="editorial-title mx-auto mt-7 max-w-[10ch]">{registration.firstName ? `${registration.firstName}, you are on the path to being known.` : "You are on the path to being known."}</h1><p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white/52 md:text-lg">Watch your inbox for the next live session schedule, confirmation details and toolkit access.</p><div className="mx-auto mt-10 grid max-w-2xl gap-4 text-left sm:grid-cols-2"><div className="rounded-[1.5rem] border border-white/13 bg-white/[0.035] p-6"><CalendarClock size={19} className="text-[#8db7ff]" /><h2 className="mt-5 font-semibold">Calendar link</h2><p className="mt-2 text-xs leading-relaxed text-white/42">It will arrive with the confirmed date so no placeholder event is added to your calendar.</p></div><div className="rounded-[1.5rem] border border-white/13 bg-white/[0.035] p-6"><MessageCircle size={19} className="text-[#8db7ff]" /><h2 className="mt-5 font-semibold">WhatsApp reminders</h2>{whatsappHref ? <a href={whatsappHref} className="mt-3 inline-flex text-sm font-semibold text-[#8db7ff]">Start the conversation</a> : <p className="mt-2 text-xs leading-relaxed text-white/42">The verified Diction WhatsApp link will be included in your confirmation when available.</p>}</div></div></div>
  );
}
