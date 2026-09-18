import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import MiniAudit from "@/components/MiniAudit";
import RoutePanel from "@/components/RoutePanel";
import type { AuditTool } from "@/lib/toolContent";

export function toolMetadata(tool: AuditTool): Metadata {
  return { title: tool.title, description: tool.description };
}

export default function ToolLandingPage({ tool }: { tool: AuditTool }) {
  return (
    <RoutePanel backHref="/tools" eyebrow={tool.eyebrow} title={tool.title} description={tool.description}>
      <div className="route-panel-purpose"><CheckCircle2 size={18} aria-hidden="true" /><p>{tool.promise}</p></div>
      <div className="route-panel-task"><MiniAudit title={tool.eyebrow} checks={tool.checks} actions={tool.actions} /></div>
    </RoutePanel>
  );
}
