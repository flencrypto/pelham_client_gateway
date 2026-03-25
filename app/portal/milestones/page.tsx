import type { Metadata } from "next";
import { MilestonesScheduler } from "./MilestonesScheduler";

export const metadata: Metadata = {
  title: "Milestones — Pelham Client Portal",
};

export default function PortalMilestonesPage() {
  return <MilestonesScheduler />;
}

