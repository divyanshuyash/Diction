import type { Metadata } from "next";
import RoutePanel from "@/components/RoutePanel";
import { capabilitiesPanelItems } from "@/lib/panelContent";

export const metadata: Metadata = { title: "Capabilities", description: "See what Diction can help implement after the strategy is clear without packages, menus or disconnected deliverables." };

export default function CapabilitiesPage() {
  return (
    <RoutePanel backHref="/" eyebrow="Capabilities" title="Implementation after the strategy is clear." description="Diction can help shape and build the parts of a digital authority ecosystem around the gap that matters most.">
      <ol className="route-panel-list">
        {capabilitiesPanelItems.map((capability) => (
          <li key={capability.number}>
            <span>{capability.number}</span>
            <div><h2>{capability.title}</h2><p>{capability.body}</p></div>
          </li>
        ))}
      </ol>
    </RoutePanel>
  );
}
