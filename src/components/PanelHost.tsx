"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import MiniAudit from "@/components/MiniAudit";
import RoutePanel from "@/components/RoutePanel";
import ScoreAssessment from "@/components/ScoreAssessment";
import QuickReadDeck from "@/components/QuickReadDeck";
import { insightArticles } from "@/lib/insightContent";
import { capabilitiesPanelItems, collectiveKitItems } from "@/lib/panelContent";
import { auditTools } from "@/lib/toolContent";

const panelPaths = new Set([
  "/capabilities",
  "/collective",
  "/tools/digital-presence-score",
  ...Object.keys(auditTools).map((slug) => `/tools/${slug}`),
  ...Object.keys(insightArticles).map((slug) => `/insights/${slug}`),
]);

export default function PanelHost() {
  const [panelPath, setPanelPath] = useState<string | null>(null);
  const returnFocusTo = useRef<HTMLElement | null>(null);

  const openPanel = useCallback((path: string) => {
    setPanelPath(path);
    const url = new URL(window.location.href);
    url.hash = "diction-panel";
    window.history.pushState({ ...window.history.state, dictionPanel: path }, "", url);
  }, []);

  const closePanel = useCallback(() => {
    if (typeof window.history.state?.dictionPanel === "string") {
      window.history.back();
      return;
    }
    setPanelPath(null);
  }, []);

  useEffect(() => {
    const handleLinkClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      if (!(event.target instanceof Element)) return;
      const link = event.target.closest<HTMLAnchorElement>("a[href]");
      if (!link || link.target || link.hasAttribute("download")) return;
      const target = new URL(link.href, window.location.origin);
      if (target.origin !== window.location.origin || !panelPaths.has(target.pathname)) return;

      event.preventDefault();
      returnFocusTo.current = link;
      openPanel(target.pathname);
    };
    const dismissOnHistoryChange = () => {
      const previousPanel = window.history.state?.dictionPanel;
      setPanelPath(typeof previousPanel === "string" ? previousPanel : null);
    };

    document.addEventListener("click", handleLinkClick, true);
    window.addEventListener("popstate", dismissOnHistoryChange);
    return () => {
      document.removeEventListener("click", handleLinkClick, true);
      window.removeEventListener("popstate", dismissOnHistoryChange);
    };
  }, [openPanel]);

  useEffect(() => {
    if (!panelPath) return;
    const previousOverflow = document.body.style.overflow;
    const page = document.querySelector<HTMLElement>("main");
    const pageWasInert = page?.hasAttribute("inert") ?? false;
    const returnControl = document.querySelector<HTMLElement>(".site-return-top");
    const returnControlWasInert = returnControl?.hasAttribute("inert") ?? false;
    const previousReturnAria = returnControl?.getAttribute("aria-hidden") ?? null;
    const dismissOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closePanel();
    };
    document.body.style.overflow = "hidden";
    page?.setAttribute("inert", "");
    returnControl?.setAttribute("inert", "");
    returnControl?.setAttribute("aria-hidden", "true");
    document.addEventListener("keydown", dismissOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      if (!pageWasInert) page?.removeAttribute("inert");
      if (!returnControlWasInert) returnControl?.removeAttribute("inert");
      if (previousReturnAria === null) returnControl?.removeAttribute("aria-hidden");
      else returnControl?.setAttribute("aria-hidden", previousReturnAria);
      document.removeEventListener("keydown", dismissOnEscape);
    };
  }, [closePanel, panelPath]);

  useEffect(() => {
    if (panelPath || !returnFocusTo.current) return;
    returnFocusTo.current.focus();
    returnFocusTo.current = null;
  }, [panelPath]);

  if (!panelPath) return null;

  if (panelPath === "/capabilities") {
    return (
      <RoutePanel overlay onClose={closePanel} backHref="/" eyebrow="Capabilities" title="Implementation after the strategy is clear." description="Diction can help shape and build the parts of a digital authority ecosystem around the gap that matters most.">
        <ol className="route-panel-list">
          {capabilitiesPanelItems.map((capability) => <li key={capability.number}><span>{capability.number}</span><div><h2>{capability.title}</h2><p>{capability.body}</p></div></li>)}
        </ol>
      </RoutePanel>
    );
  }

  if (panelPath === "/collective") {
    return (
      <RoutePanel overlay onClose={closePanel} backHref="/" eyebrow="The Diction Collective" title="Some things are made to mark belonging." description="The Diction Founder Kit is an editorial expression of client culture for people building work, ideas and reputations meant to last.">
        <ul className="route-panel-list route-panel-kit">
          {collectiveKitItems.map(([title, body]) => <li key={title}><div><h2>{title}</h2><p>{body}</p></div></li>)}
        </ul>
      </RoutePanel>
    );
  }

  if (panelPath === "/tools/digital-presence-score") {
    return (
      <RoutePanel overlay onClose={closePanel} backHref="/tools" eyebrow="Free digital presence diagnostic" title="How well does your expertise translate online?" description="Answer fourteen practical questions across positioning, audience, content, trust, platforms, opportunity and relationships. See your directional score immediately.">
        <div className="route-panel-task"><ScoreAssessment /></div>
      </RoutePanel>
    );
  }

  const article = insightArticles[panelPath.replace("/insights/", "")];
  if (article) {
    return (
      <RoutePanel overlay onClose={closePanel} backHref="/tools" eyebrow={`${article.category} · ${article.readTime}`} title={article.title} description={article.standfirst}>
        <QuickReadDeck article={article} />
      </RoutePanel>
    );
  }

  const tool = auditTools[panelPath.replace("/tools/", "")];
  if (!tool) return null;

  return (
    <RoutePanel overlay onClose={closePanel} backHref="/tools" eyebrow={tool.eyebrow} title={tool.title} description={tool.description} wideTextLayout>
      <div className="route-panel-purpose"><CheckCircle2 size={18} aria-hidden="true" /><p>{tool.promise}</p></div>
      <div className="route-panel-task"><MiniAudit tool={tool} /></div>
    </RoutePanel>
  );
}
