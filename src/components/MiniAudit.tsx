"use client";

import { type FormEvent, useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import ResultPanel from "./ResultPanel";
import type { AuditTool } from "@/lib/toolContent";

export default function MiniAudit({ tool }: { tool: AuditTool }) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function submitRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    setError("");
    setIsSubmitting(true);
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/free-tool-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, toolSlug: tool.slug }),
      });
      const result = await response.json().catch(() => null) as { message?: string } | null;
      if (!response.ok) throw new Error(result?.message ?? "We could not save your request. Please try again.");
      setSubmitted(true);
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : "We could not save your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <ResultPanel>
        <div className="grid size-12 place-items-center rounded-full border border-purple-300/30 bg-purple-400/10 text-purple-100"><Check size={21} aria-hidden="true" /></div>
        <p className="section-label mt-6 text-[#bd84ff]">Request received</p>
        <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em]">We’ll review your context and reply by email within 1–2 days.</h3>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/60">A real person will review the link and question you shared. There is no automated score.</p>
      </ResultPanel>
    );
  }

  return (
    <form onSubmit={submitRequest} className="mx-auto grid w-full max-w-3xl gap-5 rounded-[2rem] border border-white/12 bg-white/[0.035] p-6 md:p-9">
      <div>
        <p className="section-label text-[#bd84ff]">Request a personal review</p>
        <h3 className="mt-4 text-xl font-semibold leading-snug tracking-[-0.025em] md:text-2xl">Share the essentials and we’ll send your response by email within 1–2 days.</h3>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="form-field"><span>Your name</span><input name="name" autoComplete="name" required maxLength={120} placeholder="Your name" /></label>
        <label className="form-field"><span>Email address</span><input name="email" type="email" autoComplete="email" required maxLength={254} placeholder="you@company.com" /></label>
      </div>
      <label className="form-field"><span>Website or social media link</span><input name="links" type="url" required maxLength={2000} placeholder="https://yourwebsite.com or a LinkedIn / Instagram profile" /></label>
      <label className="form-field"><span>{tool.requestPrompt}</span><textarea name="expectations" required maxLength={5000} placeholder="Tell us what you would like feedback on." /></label>
      <label className="consent-field"><input name="emailConsent" type="checkbox" required /><span>I agree that Diction can use these details to review my request and email my personal response.</span></label>
      {error ? <p role="alert" className="rounded-xl border border-red-400/25 bg-red-400/8 px-4 py-3 text-sm text-red-200">{error}</p> : null}
      <div className="flex justify-end"><button type="submit" disabled={isSubmitting} className="button-light disabled:cursor-not-allowed disabled:opacity-50">{isSubmitting ? "Sending…" : "Request my review"} <ArrowRight size={17} aria-hidden="true" /></button></div>
    </form>
  );
}
