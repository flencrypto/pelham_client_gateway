"use client";

import React from "react";
import Image from "next/image";
import type { InteriorProject } from "@/types/pelham";
import {
  formatFloorAreaForDisplay,
  formatProjectLocationForDisplay,
} from "@/lib/pelhamProjectUtils";
import { ProjectStatusBadge } from "@/components/ui/PelhamUiComponents";

interface ProjectCardProps {
  project: InteriorProject;
  onProjectCardClick: (selectedProject: InteriorProject) => void;
}

/**
 * Renders a summary card for a single interior project.
 * Clicking the card raises `onProjectCardClick` with the project data,
 * allowing the parent to open a detail modal or navigate to a project page.
 */
export function ProjectCard({ project, onProjectCardClick }: ProjectCardProps) {
  const formattedLocationText = formatProjectLocationForDisplay(
    project.projectLocationCity,
    project.projectLocationCountry
  );
  const formattedFloorAreaText = formatFloorAreaForDisplay(
    project.totalFloorAreaSquareMetres
  );

  function handleCardClick() {
    onProjectCardClick(project);
  }

  return (
    <article
      className="group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 transition-all hover:-translate-y-1 hover:border-lime-400/30 hover:shadow-2xl hover:shadow-lime-400/10"
      onClick={handleCardClick}
    >
      {/* Project hero image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.heroImageUrl}
          alt={`Interior photograph of ${project.projectTitle}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent" />
        <div className="absolute bottom-3 left-3">
          <ProjectStatusBadge completionStatus={project.projectCompletionStatus} />
        </div>
      </div>

      {/* Project details */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex flex-col gap-1">
          <h3 className="text-base font-semibold leading-snug text-white group-hover:text-lime-400 transition-colors">
            {project.projectTitle}
          </h3>
          <span className="text-xs text-zinc-500">
            {project.clientOrganisationName}
          </span>
        </div>

        <p className="line-clamp-2 text-sm leading-6 text-zinc-400">
          {project.projectSummaryText}
        </p>

        {/* Project metadata strip */}
        <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-3 text-xs text-zinc-500">
          <span>{formattedLocationText}</span>
          <span>{formattedFloorAreaText}</span>
        </div>
      </div>
    </article>
  );
}
