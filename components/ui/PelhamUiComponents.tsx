"use client";

import React from "react";
import type { ProjectCompletionStatus } from "@/types/pelham";
import {
  getCompletionStatusColourClasses,
  getCompletionStatusDisplayLabel,
} from "@/lib/pelhamProjectUtils";

// ---------------------------------------------------------------------------
// ProjectStatusBadge
// ---------------------------------------------------------------------------

interface ProjectStatusBadgeProps {
  completionStatus: ProjectCompletionStatus;
  /** Optional additional Tailwind classes to apply to the badge element. */
  additionalClassName?: string;
}

/**
 * Renders a colour-coded pill badge indicating the completion status of a project.
 * The visual style is derived from the status value so that call sites remain
 * free of presentation logic.
 */
export function ProjectStatusBadge({
  completionStatus,
  additionalClassName = "",
}: ProjectStatusBadgeProps) {
  const statusColourClasses = getCompletionStatusColourClasses(completionStatus);
  const statusDisplayLabel = getCompletionStatusDisplayLabel(completionStatus);

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${statusColourClasses} ${additionalClassName}`}
    >
      {statusDisplayLabel}
    </span>
  );
}

// ---------------------------------------------------------------------------
// SectionHeaderBlock
// ---------------------------------------------------------------------------

interface SectionHeaderBlockProps {
  /** Small eyebrow label displayed above the heading, e.g. "Our Work". */
  eyebrowLabel: string;
  /** Main section heading text. */
  sectionHeadingText: string;
  /** Optional longer description rendered beneath the heading. */
  sectionDescriptionText?: string;
  /** Whether the text should be centred. Defaults to false (left-aligned). */
  isCentreAligned?: boolean;
}

/**
 * Renders a consistent section header consisting of an eyebrow label,
 * a heading, and an optional description paragraph.
 */
export function SectionHeaderBlock({
  eyebrowLabel,
  sectionHeadingText,
  sectionDescriptionText,
  isCentreAligned = false,
}: SectionHeaderBlockProps) {
  const alignmentClasses = isCentreAligned ? "items-center text-center" : "items-start";

  return (
    <div className={`flex flex-col gap-3 ${alignmentClasses}`}>
      <span className="text-xs font-semibold uppercase tracking-widest text-lime-400">
        {eyebrowLabel}
      </span>
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {sectionHeadingText}
      </h2>
      {sectionDescriptionText && (
        <p className="max-w-2xl text-base leading-7 text-zinc-400">
          {sectionDescriptionText}
        </p>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// MetricDisplayCard
// ---------------------------------------------------------------------------

interface MetricDisplayCardProps {
  metricLabel: string;
  metricDisplayValue: string;
  metricSubtitle: string;
}

/**
 * Renders a single business metric as a display card in the metrics strip.
 */
export function MetricDisplayCard({
  metricLabel,
  metricDisplayValue,
  metricSubtitle,
}: MetricDisplayCardProps) {
  return (
    <div className="flex flex-col gap-1 text-center">
      <span className="text-4xl font-bold tracking-tight text-white">
        {metricDisplayValue}
      </span>
      <span className="text-sm font-semibold text-lime-400">{metricLabel}</span>
      <span className="text-xs text-zinc-500">{metricSubtitle}</span>
    </div>
  );
}

// ---------------------------------------------------------------------------
// SectorFilterTab
// ---------------------------------------------------------------------------

interface SectorFilterTabProps {
  tabLabel: string;
  isActiveTab: boolean;
  onTabClick: () => void;
}

/**
 * A single selectable tab within the project sector filter strip.
 * Active state is controlled externally via `isActiveTab`.
 */
export function SectorFilterTab({
  tabLabel,
  isActiveTab,
  onTabClick,
}: SectorFilterTabProps) {
  return (
    <button
      type="button"
      onClick={onTabClick}
      className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
        isActiveTab
          ? "bg-lime-400 text-zinc-900"
          : "text-zinc-400 hover:text-white"
      }`}
    >
      {tabLabel}
    </button>
  );
}
