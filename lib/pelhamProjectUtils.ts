/**
 * Pure utility functions for the Pelham Client Gateway.
 *
 * Every function name follows the verb–noun convention and describes exactly
 * what the function does, making call sites self-documenting.
 */
import type {
  InteriorProject,
  ProjectCompletionStatus,
  ProjectSector,
} from "@/types/pelham";

// ---------------------------------------------------------------------------
// Project filtering helpers
// ---------------------------------------------------------------------------

/**
 * Returns the subset of projects that belong to the given sector.
 * When `selectedSector` is "all", the full collection is returned unchanged.
 */
export function filterProjectsBySector(
  allProjects: InteriorProject[],
  selectedSector: ProjectSector
): InteriorProject[] {
  if (selectedSector === "all") return allProjects;
  return allProjects.filter(
    (project) => project.projectSector === selectedSector
  );
}

/**
 * Returns only the projects whose completion status matches the given status.
 */
export function filterProjectsByCompletionStatus(
  allProjects: InteriorProject[],
  targetCompletionStatus: ProjectCompletionStatus
): InteriorProject[] {
  return allProjects.filter(
    (project) => project.projectCompletionStatus === targetCompletionStatus
  );
}

/**
 * Returns projects whose title or client name contains the search query
 * (case-insensitive).
 */
export function searchProjectsByTitleOrClient(
  allProjects: InteriorProject[],
  searchQuery: string
): InteriorProject[] {
  const normalisedQuery = searchQuery.trim().toLowerCase();
  if (!normalisedQuery) return allProjects;
  return allProjects.filter(
    (project) =>
      project.projectTitle.toLowerCase().includes(normalisedQuery) ||
      project.clientOrganisationName.toLowerCase().includes(normalisedQuery)
  );
}

// ---------------------------------------------------------------------------
// Project sorting helpers
// ---------------------------------------------------------------------------

/**
 * Returns a new array of projects sorted by completion year, most recent first.
 * The original array is not mutated.
 */
export function sortProjectsByCompletionYearDescending(
  projects: InteriorProject[]
): InteriorProject[] {
  return [...projects].sort(
    (projectA, projectB) =>
      projectB.projectCompletionYear - projectA.projectCompletionYear
  );
}

/**
 * Returns a new array of projects sorted by total floor area, largest first.
 * The original array is not mutated.
 */
export function sortProjectsByFloorAreaDescending(
  projects: InteriorProject[]
): InteriorProject[] {
  return [...projects].sort(
    (projectA, projectB) =>
      projectB.totalFloorAreaSquareMetres - projectA.totalFloorAreaSquareMetres
  );
}

// ---------------------------------------------------------------------------
// Project aggregation helpers
// ---------------------------------------------------------------------------

/**
 * Calculates the total floor area across all provided projects, in square metres.
 */
export function calculateTotalFloorAreaAcrossProjects(
  projects: InteriorProject[]
): number {
  return projects.reduce(
    (runningTotal, project) =>
      runningTotal + project.totalFloorAreaSquareMetres,
    0
  );
}

/**
 * Returns the number of distinct countries represented in the project collection.
 */
export function countDistinctProjectCountries(
  projects: InteriorProject[]
): number {
  const uniqueCountryNames = new Set(
    projects.map((project) => project.projectLocationCountry)
  );
  return uniqueCountryNames.size;
}

// ---------------------------------------------------------------------------
// Display formatting helpers
// ---------------------------------------------------------------------------

/**
 * Formats a floor area value for display, e.g. 8400 → "8,400 m²".
 */
export function formatFloorAreaForDisplay(
  floorAreaSquareMetres: number
): string {
  return `${floorAreaSquareMetres.toLocaleString("en-GB")} m²`;
}

/**
 * Formats a project location as "City, Country", e.g. "London, United Kingdom".
 */
export function formatProjectLocationForDisplay(
  cityName: string,
  countryName: string
): string {
  return `${cityName}, ${countryName}`;
}

/**
 * Returns a human-readable label for a project completion status.
 */
export function getCompletionStatusDisplayLabel(
  completionStatus: ProjectCompletionStatus
): string {
  const statusLabelMap: Record<ProjectCompletionStatus, string> = {
    completed: "Completed",
    "in-progress": "In Progress",
    upcoming: "Upcoming",
  };
  return statusLabelMap[completionStatus];
}

/**
 * Returns the Tailwind colour classes appropriate for the given completion status.
 */
export function getCompletionStatusColourClasses(
  completionStatus: ProjectCompletionStatus
): string {
  const statusColourMap: Record<ProjectCompletionStatus, string> = {
    completed: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    "in-progress": "bg-amber-500/20 text-amber-400 border-amber-500/30",
    upcoming: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  };
  return statusColourMap[completionStatus];
}

/**
 * Returns a human-readable display label for a project sector value.
 */
export function getSectorDisplayLabel(
  projectSector: ProjectSector
): string {
  const sectorLabelMap: Record<ProjectSector, string> = {
    all: "All Sectors",
    "commercial-office": "Commercial Office",
    hospitality: "Hospitality",
    retail: "Retail",
    healthcare: "Healthcare",
    education: "Education",
    residential: "Residential",
  };
  return sectorLabelMap[projectSector];
}

/**
 * Returns an ISO 8601 date string formatted as a localised long date,
 * e.g. "12 November 2024".
 */
export function formatArticlePublicationDateForDisplay(
  isoDateString: string
): string {
  return new Date(isoDateString).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
