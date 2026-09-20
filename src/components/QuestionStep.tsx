"use client";

import { useEffect, useId, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Props = {
  index: number;
  total: number;
  category: string;
  question: string;
  options: readonly { label: string; value: number }[];
  value: number | null;
  onAnswer: (value: number) => void;
  onBack: () => void;
  onNext: () => void;
  finishLabel: string;
};

export default function QuestionStep({ index, total, category, question, options, value, onAnswer, onBack, onNext, finishLabel }: Props) {
  const heading = useRef<HTMLHeadingElement>(null);
  const groupId = useId();
  const previousIndex = useRef(index);

  useEffect(() => {
    if (previousIndex.current !== index) heading.current?.focus();
    previousIndex.current = index;
  }, [index]);

  return (
    <div className="mx-auto w-full max-w-3xl rounded-[2rem] border border-white/12 bg-white/[0.035] p-6 md:p-9">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-xs font-medium text-[#bd84ff]">{category}</p>
        <p className="text-xs text-white/50" aria-live="polite">Question {index + 1} of {total}</p>
      </div>
      <progress className="question-progress mt-4" value={index + 1} max={total} aria-label="Question progress" />
      <div key={index} className="question-step-content">
        <h3 ref={heading} tabIndex={-1} className="mt-7 text-xl font-semibold leading-snug tracking-[-0.025em] md:text-2xl">{question}</h3>
        <fieldset className="mt-6">
          <legend className="sr-only">{question}</legend>
          <div className="grid gap-2">
            {options.map((option) => (
              <label key={option.value} className="flex min-h-12 cursor-pointer items-center gap-3 rounded-xl border border-white/12 px-4 py-3 text-sm text-white/70 transition-colors hover:border-white/35 has-[:checked]:border-[#a855f7] has-[:checked]:bg-[#a855f7]/12 has-[:checked]:text-white has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-[#bd84ff]">
                <input type="radio" name={groupId} checked={value === option.value} onChange={() => onAnswer(option.value)} className="size-4 shrink-0 accent-[#a855f7]" />
                {option.label}
              </label>
            ))}
          </div>
        </fieldset>
      </div>
      <div className="question-controls mt-6 flex items-center justify-between gap-3">
        <button type="button" onClick={onBack} disabled={index === 0} className="button-ghost disabled:cursor-not-allowed disabled:opacity-30"><ArrowLeft size={15} /> Back</button>
        <button type="button" onClick={onNext} disabled={value === null} className="button-light disabled:cursor-not-allowed disabled:opacity-35">{index === total - 1 ? finishLabel : "Next"} <ArrowRight size={15} /></button>
      </div>
      <p className="mt-4 text-center text-xs text-white/40">You can go back and change any answer.</p>
    </div>
  );
}
