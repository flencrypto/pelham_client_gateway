"use client";

import React, { useState } from "react";
import type { InteriorProject, ProjectSector } from "@/types/pelham";
import {
  filterProjectsBySector,
  getSectorDisplayLabel,
  sortProjectsByCompletionYearDescending,
} from "@/lib/pelhamProjectUtils";
import { SectionHeaderBlock, SectorFilterTab } from "@/components/ui/PelhamUiComponents";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ProjectDetailModal } from "@/components/ui/ProjectDetailModal";

/** The ordered list of sector filter options shown in the filter strip. */
const AVAILABLE_PROJECT_SECTOR_FILTERS: ProjectSector[] = [
  "all",
  "commercial-office",
  "hospitality",
  "retail",
  "healthcare",
  "education",
  "residential",
];

interface ProjectExplorerSectionProps {
  allProjects: InteriorProject[];
}

/**
 * An interactive section that allows visitors to browse, filter by sector,
 * and view detailed information for any project in the Pelham portfolio.
 */
export function ProjectExplorerSection({
  allProjects,
}: ProjectExplorerSectionProps) {
  const [selectedProjectSector, setSelectedProjectSector] =
    useState<ProjectSector>("all");
  const [activeProjectDetails, setActiveProjectDetails] =
    useState<InteriorProject | null>(null);
  const [isProjectModalVisible, setIsProjectModalVisible] = useState(false);

  const projectsFilteredBySector = filterProjectsBySector(
    allProjects,
    selectedProjectSector
  );
  const projectsSortedByRecency = sortProjectsByCompletionYearDescending(
    projectsFilteredBySector
  );

  function handleSectorFilterTabClick(newSector: ProjectSector) {
    setSelectedProjectSector(newSector);
  }

  function handleProjectCardClick(clickedProject: InteriorProject) {
    setActiveProjectDetails(clickedProject);
    setIsProjectModalVisible(true);
  }

  function handleProjectModalCloseRequest() {
    setIsProjectModalVisible(false);
    // Delay clearing active project to allow modal close animation to complete
    setTimeout(() => setActiveProjectDetails(null), 200);
  }

  return (
    <section className="bg-zinc-950 py-24" id="projects">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex flex-col gap-10">
          {/* Section header */}
          <SectionHeaderBlock
            eyebrowLabel="Our Work"
            sectionHeadingText="A Portfolio Built on Precision"
            sectionDescriptionText="Three decades of delivering exceptional interiors across commercial, hospitality, retail, healthcare, education and residential sectors."
          />

          {/* Sector filter tabs */}
          <div className="flex flex-wrap gap-2 rounded-2xl border border-white/10 bg-zinc-900/50 p-2">
            {AVAILABLE_PROJECT_SECTOR_FILTERS.map((sectorValue) => (
              <SectorFilterTab
                key={sectorValue}
                tabLabel={getSectorDisplayLabel(sectorValue)}
                isActiveTab={selectedProjectSector === sectorValue}
                onTabClick={() => handleSectorFilterTabClick(sectorValue)}
              />
            ))}
          </div>

          {/* Project grid */}
          {projectsSortedByRecency.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {projectsSortedByRecency.map((project) => (
                <ProjectCard
                  key={project.projectId}
                  project={project}
                  onProjectCardClick={handleProjectCardClick}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-zinc-900/50 py-16 text-center">
              <p className="text-base font-medium text-zinc-400">
                No projects found in this sector yet.
              </p>
              <p className="text-sm text-zinc-600">
                More projects will be added as they complete.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Project detail modal */}
      <ProjectDetailModal
        activeProject={activeProjectDetails}
        isModalVisible={isProjectModalVisible}
        onCloseModalRequest={handleProjectModalCloseRequest}
      />
    </section>
  );
}
