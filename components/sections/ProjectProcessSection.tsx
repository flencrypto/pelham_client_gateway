import React from "react";
import type { ProjectProcessStage } from "@/types/pelham";
import { SectionHeaderBlock } from "@/components/ui/PelhamUiComponents";

interface ProjectProcessSectionProps {
  processStages: ProjectProcessStage[];
}

/**
 * Renders the Pelham project delivery process as a numbered timeline,
 * showing each stage with its title, description and estimated duration.
 */
export function ProjectProcessSection({
  processStages,
}: ProjectProcessSectionProps) {
  return (
    <section className="bg-zinc-950 py-24" id="process">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex flex-col gap-16">
          <SectionHeaderBlock
            eyebrowLabel="How We Work"
            sectionHeadingText="A Transparent, Structured Process"
            sectionDescriptionText="Every Pelham project follows the same rigorous six-stage process, giving clients clear milestones, predictable costs and confident decision-making at every step."
          />

          <div className="relative flex flex-col gap-0">
            {processStages.map((processStage, stageIndex) => {
              const isLastStage = stageIndex === processStages.length - 1;
              return (
                <ProcessStageRow
                  key={processStage.stageNumber}
                  processStage={processStage}
                  showConnectingLine={!isLastStage}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Internal helper component
// ---------------------------------------------------------------------------

interface ProcessStageRowProps {
  processStage: ProjectProcessStage;
  showConnectingLine: boolean;
}

function ProcessStageRow({
  processStage,
  showConnectingLine,
}: ProcessStageRowProps) {
  const durationDisplayText =
    processStage.estimatedStageDurationWeeks === 1
      ? "1 week"
      : `${processStage.estimatedStageDurationWeeks} weeks`;

  return (
    <div className="relative flex gap-6 pb-10">
      {/* Stage number bubble and connecting line */}
      <div className="flex flex-col items-center">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-lime-400 bg-zinc-950 text-sm font-bold text-lime-400">
          {processStage.stageNumber}
        </div>
        {showConnectingLine && (
          <div className="mt-1 w-0.5 flex-1 bg-white/10" />
        )}
      </div>

      {/* Stage content */}
      <div className="flex flex-col gap-2 pb-2">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-base font-semibold text-white">
            {processStage.stageTitle}
          </h3>
          <span className="rounded-full bg-zinc-800 px-2.5 py-0.5 text-xs text-zinc-400">
            {durationDisplayText}
          </span>
        </div>
        <p className="max-w-2xl text-sm leading-7 text-zinc-400">
          {processStage.stageDescription}
        </p>
      </div>
    </div>
  );
}
