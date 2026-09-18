import type { Metadata } from "next";
import RoutePanel from "@/components/RoutePanel";
import { collectiveKitItems } from "@/lib/panelContent";

export const metadata: Metadata = { title: "The Diction Collective", description: "An editorial view of the Diction Founder Kit and the culture behind work built to last." };

export default function CollectivePage() {
  return (
    <RoutePanel backHref="/" eyebrow="The Diction Collective" title="Some things are made to mark belonging." description="The Diction Founder Kit is an editorial expression of client culture for people building work, ideas and reputations meant to last.">
      <ul className="route-panel-list route-panel-kit">
        {collectiveKitItems.map(([title, body]) => <li key={title}><div><h2>{title}</h2><p>{body}</p></div></li>)}
      </ul>
    </RoutePanel>
  );
}
