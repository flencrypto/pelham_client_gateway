import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Project — Pelham Client Portal",
  description: "Full project details, programme, specifications and key contacts.",
};

/** A key project specification item. */
interface ProjectSpecItem {
  specLabel: string;
  specValue: string;
}

const PROJECT_SPEC_ITEMS: ProjectSpecItem[] = [
  { specLabel: "Project Value", specValue: "£4.2M" },
  { specLabel: "Units", specValue: "24 residences" },
  { specLabel: "Contract Type", specValue: "Design & Build" },
  { specLabel: "Sector", specValue: "Residential" },
  { specLabel: "Programme", specValue: "Aug 2024 — Jan 2025" },
  { specLabel: "Lead Designer", specValue: "Sarah Whitfield" },
  { specLabel: "Project Manager", specValue: "Tom Gallagher" },
  { specLabel: "Site Address", specValue: "Knightsbridge, London SW1X" },
];

/**
 * Detailed project overview page within the client portal.
 */
export default function PortalProjectPage() {
  return (
    <div className="space-y-8 p-6 lg:p-8">
      {/* Page header */}
      <div>
        <h1 className="text-2xl font-bold text-white">My Project</h1>
        <p className="mt-1 text-sm text-zinc-400">
          The Mandarin Oriental Residences, Knightsbridge, London
        </p>
      </div>

      {/* Project description */}
      <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6">
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-lime-400">
          Project Overview
        </h2>
        <p className="text-base leading-7 text-zinc-300">
          A landmark residential transformation within one of London&apos;s most
          prestigious addresses. Spanning 24 private residences across three
          floors, this project redefines luxury urban living through bespoke
          material palettes, spatial artistry, and museum-quality art curation.
          Pelham is delivering the full interior design, FF&E specification and
          project management scope.
        </p>
      </div>

      {/* Spec grid */}
      <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6">
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-lime-400">
          Project Specifications
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {PROJECT_SPEC_ITEMS.map((item) => (
            <div key={item.specLabel} className="flex flex-col gap-0.5">
              <span className="text-xs text-zinc-500">{item.specLabel}</span>
              <span className="text-sm font-medium text-white">
                {item.specValue}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Progress bar */}
      <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6">
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-lime-400">
          Overall Programme
        </h2>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-zinc-400">Construction &amp; Installation Phase</span>
          <span className="text-sm font-bold text-lime-400">87%</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
          <div className="h-full rounded-full bg-lime-400" style={{ width: "87%" }} />
        </div>
        <div className="mt-3 flex items-center justify-between text-xs text-zinc-500">
          <span>Started August 2024</span>
          <span>Est. completion January 2025</span>
        </div>
      </div>

      {/* Key contacts */}
      <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6">
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-lime-400">
          Your Pelham Team
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { name: "Sarah Whitfield", role: "Lead Interior Designer", initials: "SW" },
            { name: "Tom Gallagher", role: "Project Manager", initials: "TG" },
            { name: "Priya Menon", role: "Sustainability Lead", initials: "PM" },
          ].map((contact) => (
            <div
              key={contact.name}
              className="flex items-center gap-4 rounded-xl border border-white/5 bg-zinc-800/50 px-4 py-3"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-lime-400/20 bg-lime-400/10">
                <span className="text-xs font-semibold text-lime-400">
                  {contact.initials}
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-white">{contact.name}</p>
                <p className="text-xs text-zinc-500">{contact.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
