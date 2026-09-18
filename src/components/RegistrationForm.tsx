"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, LockKeyhole } from "lucide-react";

export default function RegistrationForm({ defaultGap = "", source = "KNOWN masterclass", score }: { defaultGap?: string; source?: string; score?: string }) {
  const router = useRouter();
  const [error, setError] = useState("");
  const [step, setStep] = useState(0);
  const formRef = useRef<HTMLFormElement>(null);
  const previousStep = useRef(step);
  useEffect(() => {
    if (previousStep.current !== step) {
      formRef.current?.querySelector<HTMLInputElement | HTMLSelectElement>('[data-active-step="true"] input, [data-active-step="true"] select')?.focus();
    }
    previousStep.current = step;
  }, [step]);
  const stepLabels = ["Your name", "Your email", "Your role", "Your goal", "Your biggest gap", "Your session", "Confirm your registration"];

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const active = event.currentTarget.querySelector('[data-active-step="true"]');
    const fields = active?.querySelectorAll<HTMLInputElement | HTMLSelectElement>("input, select");
    if (fields && !Array.from(fields).every((field) => field.reportValidity())) return;
    if (step < stepLabels.length - 1) {
      setStep(step + 1);
      setError("");
      return;
    }
    const form = new FormData(event.currentTarget);
    const wantsWhatsApp = form.get("whatsappConsent") === "on";
    const phone = String(form.get("phone") ?? "").trim();

    if (wantsWhatsApp && !phone) {
      setError("Add your WhatsApp number or remove WhatsApp reminders.");
      return;
    }

    const registration = Object.fromEntries(form.entries());
    try {
      sessionStorage.setItem("diction-known-registration", JSON.stringify(registration));
    } catch {
      setError("Your browser could not save these details. Allow browser storage and try again.");
      return;
    }
    router.push("/thank-you");
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="grid gap-5">
      <p className="rounded-xl border border-purple-300/20 bg-purple-400/5 p-4 text-sm leading-relaxed text-white/70">Registration preview: your details are saved in this tab only. A seat is not booked and no email is sent yet.</p>
      <p className="text-xs text-[#bd84ff]" aria-live="polite">Step {step + 1} of {stepLabels.length} · {stepLabels[step]}</p>
      <progress className="question-progress" value={step + 1} max={stepLabels.length} aria-label="Registration progress" />
      <input type="hidden" name="source" value={source} />
      {score ? <input type="hidden" name="score" value={score} /> : null}
      <div hidden={step !== 0} data-active-step={step === 0}><label className="form-field"><span>First name</span><input name="firstName" autoComplete="given-name" required placeholder="Your first name" /></label></div>
      <div hidden={step !== 1} data-active-step={step === 1}><label className="form-field"><span>Email</span><input name="email" type="email" autoComplete="email" required placeholder="you@company.com" /></label></div>
      <div hidden={step !== 2} data-active-step={step === 2}><label className="form-field"><span>Your role</span><select name="role" required defaultValue=""><option value="" disabled>Select your role</option><option>Founder</option><option>Coach / Consultant</option><option>Corporate Expert</option><option>Other</option></select></label></div>
      <div hidden={step !== 3} data-active-step={step === 3}><label className="form-field"><span>Primary goal</span><select name="goal" required defaultValue=""><option value="" disabled>Select your goal</option><option>Build recognition and authority</option><option>Generate qualified opportunities</option><option>Clarify my positioning</option><option>Connect my digital presence</option></select></label></div>
      <div hidden={step !== 4} data-active-step={step === 4}><label className="form-field"><span>Biggest digital presence gap</span><select name="gap" required defaultValue={defaultGap}><option value="" disabled>Select the closest answer</option><option>People do not understand what I do</option><option>My audience is too broad</option><option>My content does not build authority</option><option>My website does not create trust</option><option>My platforms feel disconnected</option><option>Attention does not create opportunities</option><option>I do not have a follow-up system</option><option>I do not know what to build first</option></select></label></div>
      <div hidden={step !== 5} data-active-step={step === 5}><label className="form-field"><span>Session</span><select name="session" required defaultValue=""><option value="" disabled>Choose a session preference</option><option value="next-live">Next live KNOWN session — schedule shared by email</option><option value="future">Notify me about a future session</option></select></label></div>
      <div hidden={step !== 6} data-active-step={step === 6}>
      <div className="grid gap-5">
      <label className="form-field"><span>Mobile / WhatsApp <small>Optional unless reminders are selected</small></span><input name="phone" type="tel" autoComplete="tel" placeholder="+91 00000 00000" /></label>
      <label className="consent-field"><input type="checkbox" name="emailConsent" required /><span>Email me the registration confirmation, toolkit access and essential session updates.</span></label>
      <label className="consent-field"><input type="checkbox" name="whatsappConsent" /><span>I would also like optional WhatsApp reminders. I understand I will initiate the conversation after registering.</span></label>
      </div></div>
      {error ? <p role="alert" className="rounded-xl border border-red-400/25 bg-red-400/8 px-4 py-3 text-sm text-red-200">{error}</p> : null}
      <div className="question-controls flex items-center justify-between gap-3">
        <button type="button" disabled={step === 0} onClick={() => { setStep(step - 1); setError(""); }} className="button-ghost disabled:opacity-30"><ArrowLeft size={15} /> Back</button>
        <button type="submit" className="button-light">{step === stepLabels.length - 1 ? "Save my details" : "Next"} <ArrowRight size={17} aria-hidden="true" /></button>
      </div>
      <p className="flex items-center justify-center gap-2 text-center text-xs leading-relaxed text-white/50"><LockKeyhole size={12} aria-hidden="true" /> Stored in this browser tab. Not sent to Diction.</p>
    </form>
  );
}
