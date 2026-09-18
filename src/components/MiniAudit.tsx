"use client";

import { useState } from "react";
import { RotateCcw } from "lucide-react";
import QuestionStep from "./QuestionStep";
import ResultPanel from "./ResultPanel";

export default function MiniAudit({ title, checks, actions }: { title: string; checks: string[]; actions: string[] }) {
  const [result, setResult] = useState<number | null>(null);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(() => checks.map(() => null));

  function next() {
    if (answers[step] === null) return;
    if (step < checks.length - 1) {
      setStep(step + 1);
      return;
    }
    if (answers.some((value) => value === null)) return;
    setResult(Math.round((answers.reduce<number>((sum, value) => sum + (value ?? 0), 0) / (checks.length * 2)) * 100));
  }

  const diagnosis = result === null ? null : result < 40 ? "Foundation gap" : result < 72 ? "Inconsistent signal" : "Strong base";

  if (result !== null) {
    const priorities = checks.map((check, index) => ({ check, action: actions[index], value: answers[index] ?? 0, index }))
      .filter((item) => item.value < 2)
      .sort((a, b) => a.value - b.value)
      .slice(0, 3);
    return (
      <ResultPanel>
        <p className="section-label text-[#bd84ff]">Your directional result</p>
        <div className="mt-8 flex items-end gap-4"><span className="text-[clamp(5rem,12vw,8rem)] font-black leading-none tracking-[-0.08em]">{result}</span><span className="pb-3 text-sm text-white/35">/ 100</span></div>
        <h3 className="mt-6 text-2xl font-semibold tracking-[-0.04em]">{diagnosis}</h3>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/60">{priorities.length ? "Start with these priorities, based on your answers. Choose one action to try this week." : "You rated every signal consistently. Validate that confidence by asking someone unfamiliar with your work to review the experience."}</p>
        {priorities.length > 0 ? <ol className="mt-6 grid gap-3">{priorities.map((item, index) => (
          <li key={item.index} className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
            <p className="text-xs font-medium text-[#bd84ff]">Priority {index + 1} · {item.value === 0 ? "Not true yet" : "Partly in place"}</p>
            <h4 className="mt-2 text-base font-semibold">{item.check}</h4>
            <p className="mt-2 text-sm leading-relaxed text-white/65">{item.action}</p>
          </li>
        ))}</ol> : null}
        <p className="mt-5 text-xs leading-relaxed text-white/45">This self-assessment is a decision aid, not a scientific or comparative benchmark.</p>
        <button type="button" className="text-link mt-5" onClick={() => { setResult(null); setStep(0); }}>Review my answers</button>
        <button type="button" onClick={() => { setResult(null); setStep(0); setAnswers(checks.map(() => null)); }} className="button-ghost mt-8"><RotateCcw size={15} /> Retake audit</button>
      </ResultPanel>
    );
  }

  return (
    <QuestionStep index={step} total={checks.length} category={title} question={checks[step]}
      options={[{ label: "Not true", value: 0 }, { label: "Partly", value: 1 }, { label: "Consistently", value: 2 }]}
      value={answers[step]} onAnswer={(value) => setAnswers((previous) => previous.map((answer, index) => index === step ? value : answer))}
      onBack={() => setStep((value) => Math.max(0, value - 1))} onNext={next} finishLabel="See my result" />
  );
}
