import React from "react";
import type { SustainabilityInitiative } from "@/types/pelham";
import { SectionHeaderBlock } from "@/components/ui/PelhamUiComponents";

interface SustainabilityInitiativesSectionProps {
  sustainabilityInitiatives: SustainabilityInitiative[];
}

/**
 * Showcases Pelham's sustainability and CSR commitments.
 */
export function SustainabilityInitiativesSection({
  sustainabilityInitiatives,
}: SustainabilityInitiativesSectionProps) {
  return (
    <section className="bg-zinc-900 py-24" id="sustainability">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex flex-col gap-12">
          <SectionHeaderBlock
            eyebrowLabel="Responsibility"
            sectionHeadingText="Designing for a Better Built Environment"
            sectionDescriptionText="Sustainability is not an optional feature at Pelham — it is embedded in every decision, from material specification to supply chain selection and operational practice."
          />

          <div className="grid gap-6 sm:grid-cols-2">
            {sustainabilityInitiatives.map((initiative) => (
              <SustainabilityInitiativeCard
                key={initiative.initiativeId}
                sustainabilityInitiative={initiative}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Internal helper component
// ---------------------------------------------------------------------------

interface SustainabilityInitiativeCardProps {
  sustainabilityInitiative: SustainabilityInitiative;
}

function SustainabilityInitiativeCard({
  sustainabilityInitiative,
}: SustainabilityInitiativeCardProps) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-zinc-800/50 p-6">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-base font-semibold text-white">
          {sustainabilityInitiative.initiativeTitle}
        </h3>
        {sustainabilityInitiative.relatedCertificationBadge && (
          <span className="shrink-0 rounded-full border border-lime-400/30 bg-lime-400/10 px-2.5 py-1 text-xs font-medium text-lime-400">
            {sustainabilityInitiative.relatedCertificationBadge}
          </span>
        )}
      </div>

      <p className="text-sm leading-6 text-zinc-400">
        {sustainabilityInitiative.initiativeDescription}
      </p>

      {/* Measured impact statement */}
      <div className="mt-auto flex items-center gap-2 rounded-xl bg-lime-400/5 px-4 py-3">
        <span className="text-lime-400" aria-hidden="true">
          ↑
        </span>
        <span className="text-sm font-medium text-lime-300">
          {sustainabilityInitiative.measuredImpactStatement}
        </span>
      </div>
    </div>
  );
}
