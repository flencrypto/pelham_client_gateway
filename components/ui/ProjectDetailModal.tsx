"use client";

import React from "react";
import Image from "next/image";
import type { InteriorProject } from "@/types/pelham";
import {
  formatFloorAreaForDisplay,
  formatProjectLocationForDisplay,
} from "@/lib/pelhamProjectUtils";
import { ProjectStatusBadge } from "@/components/ui/PelhamUiComponents";

interface ProjectDetailModalProps {
  /** The project whose details should be displayed. Null means the modal is hidden. */
  activeProject: InteriorProject | null;
  isModalVisible: boolean;
  onCloseModalRequest: () => void;
}

/**
 * A full-screen overlay modal that displays the complete details of a single project.
 *
 * Visibility is controlled externally via `isModalVisible` and `activeProject`.
 * Closing is triggered by calling `onCloseModalRequest`.
 */
export function ProjectDetailModal({
  activeProject,
  isModalVisible,
  onCloseModalRequest,
}: ProjectDetailModalProps) {
  if (!isModalVisible || !activeProject) return null;

  const formattedLocationText = formatProjectLocationForDisplay(
    activeProject.projectLocationCity,
    activeProject.projectLocationCountry
  );
  const formattedFloorAreaText = formatFloorAreaForDisplay(
    activeProject.totalFloorAreaSquareMetres
  );

  function handleOverlayBackdropClick(
    clickEvent: React.MouseEvent<HTMLDivElement>
  ) {
    // Only close when the backdrop itself is clicked, not child elements
    if (clickEvent.target === clickEvent.currentTarget) {
      onCloseModalRequest();
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={handleOverlayBackdropClick}
    >
      <div className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 shadow-2xl">
        {/* Modal close button */}
        <button
          type="button"
          aria-label="Close project details"
          onClick={onCloseModalRequest}
          className="absolute right-4 top-4 z-10 rounded-full bg-zinc-800 p-2 text-zinc-400 transition-colors hover:bg-zinc-700 hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Project hero image */}
        <div className="relative h-56 shrink-0 overflow-hidden">
          <Image
            src={activeProject.heroImageUrl}
            alt={`Interior photograph of ${activeProject.projectTitle}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
        </div>

        {/* Modal content body (scrollable) */}
        <div className="overflow-y-auto p-6 sm:p-8">
          <div className="flex flex-col gap-6">
            {/* Project title and status */}
            <div className="flex flex-col gap-2">
              <ProjectStatusBadge
                completionStatus={activeProject.projectCompletionStatus}
              />
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                {activeProject.projectTitle}
              </h2>
              <p className="text-sm text-zinc-500">
                {activeProject.clientOrganisationName}
              </p>
            </div>

            {/* Project metadata grid */}
            <div className="grid grid-cols-2 gap-4 rounded-xl border border-white/10 bg-zinc-800/50 p-4 sm:grid-cols-3">
              <ProjectMetadataItem
                metadataLabel="Location"
                metadataValue={formattedLocationText}
              />
              <ProjectMetadataItem
                metadataLabel="Floor Area"
                metadataValue={formattedFloorAreaText}
              />
              <ProjectMetadataItem
                metadataLabel="Completed"
                metadataValue={
                  activeProject.projectCompletionStatus === "upcoming"
                    ? `Expected ${activeProject.projectCompletionYear}`
                    : String(activeProject.projectCompletionYear)
                }
              />
            </div>

            {/* Project summary */}
            <p className="text-base leading-7 text-zinc-300">
              {activeProject.projectSummaryText}
            </p>

            {/* Project highlights */}
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-lime-400">
                Project Highlights
              </h3>
              <ul className="flex flex-col gap-2">
                {activeProject.projectHighlights.map(
                  (highlightText, highlightIndex) => (
                    <li
                      key={highlightIndex}
                      className="flex items-start gap-3 text-sm text-zinc-300"
                    >
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-lime-400" />
                      {highlightText}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Internal helper component
// ---------------------------------------------------------------------------

interface ProjectMetadataItemProps {
  metadataLabel: string;
  metadataValue: string;
}

function ProjectMetadataItem({
  metadataLabel,
  metadataValue,
}: ProjectMetadataItemProps) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-xs text-zinc-500">{metadataLabel}</span>
      <span className="text-sm font-medium text-white">{metadataValue}</span>
    </div>
  );
}
