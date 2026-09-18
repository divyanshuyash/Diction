import type { Metadata } from "next";
import RoutePanel from "@/components/RoutePanel";
import ScoreAssessment from "@/components/ScoreAssessment";

export const metadata: Metadata = { title: "Digital Presence Score", description: "Discover your directional Digital Presence Score across the seven parts of the D.I.C.T.I.O.N. framework." };

export default function DigitalPresenceScorePage() {
  return (
    <RoutePanel backHref="/tools" eyebrow="Free digital presence diagnostic" title="How well does your expertise translate online?" description="Answer fourteen practical questions across positioning, audience, content, trust, platforms, opportunity and relationships. See your directional score immediately.">
      <div className="route-panel-task"><ScoreAssessment /></div>
    </RoutePanel>
  );
}
