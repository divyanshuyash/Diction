"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { useEffect, useRef, type ReactNode } from "react";

type RoutePanelProps = {
  backHref: string;
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
  overlay?: boolean;
  onClose?: () => void;
  wideTextLayout?: boolean;
};

export default function RoutePanel({ backHref, eyebrow, title, description, children, overlay = false, onClose, wideTextLayout = false }: RoutePanelProps) {
  const panelRef = useRef<HTMLElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!overlay) return;

    closeRef.current?.focus();
    const keepFocusInside = (event: KeyboardEvent) => {
      if (event.key !== "Tab" || !panelRef.current) return;
      const focusable = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), summary, [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((element) => !element.hasAttribute("hidden") && element.getClientRects().length > 0);
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", keepFocusInside);
    return () => document.removeEventListener("keydown", keepFocusInside);
  }, [overlay]);

  const panel = (
      <section ref={panelRef} className="route-panel" aria-labelledby="route-panel-title" aria-modal={overlay || undefined} role={overlay ? "dialog" : undefined} onClick={(event) => event.stopPropagation()}>
        <header className={`route-panel-header${wideTextLayout ? " route-panel-header-wide" : ""}`}>
          {onClose ? <button ref={closeRef} type="button" onClick={onClose} className="route-panel-close" aria-label="Close panel"><X size={18} aria-hidden="true" /></button> : <Link href={backHref} className="route-panel-close" aria-label="Close panel"><X size={18} aria-hidden="true" /></Link>}
          <p className="section-label text-[#7134cb]">{eyebrow}</p>
          <h1 id="route-panel-title" className="route-panel-title">{title}</h1>
          <p className="route-panel-description">{description}</p>
        </header>
        <div className="route-panel-body">{children}</div>
      </section>
  );

  if (overlay) {
    return <div className="route-overlay" onClick={onClose}>{panel}</div>;
  }

  return (
    <main className="route-panel-page">
      {panel}
    </main>
  );
}
