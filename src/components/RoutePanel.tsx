"use client";

import Link from "next/link";
import { X } from "lucide-react";
import type { ReactNode } from "react";

type RoutePanelProps = {
  backHref: string;
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
  overlay?: boolean;
  onClose?: () => void;
};

export default function RoutePanel({ backHref, eyebrow, title, description, children, overlay = false, onClose }: RoutePanelProps) {
  const panel = (
      <section className="route-panel" aria-labelledby="route-panel-title" aria-modal={overlay || undefined} role={overlay ? "dialog" : undefined} onClick={(event) => event.stopPropagation()}>
        <header className="route-panel-header">
          {onClose ? <button type="button" onClick={onClose} className="route-panel-close" aria-label="Close panel"><X size={18} aria-hidden="true" /></button> : <Link href={backHref} className="route-panel-close" aria-label="Close panel"><X size={18} aria-hidden="true" /></Link>}
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
