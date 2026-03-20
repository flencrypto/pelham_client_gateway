/**
 * Core domain types for the Pelham Client Gateway.
 * Descriptive names are used throughout so that any developer reading the code
 * immediately understands the business concepts being modelled.
 */

// ---------------------------------------------------------------------------
// Project types
// ---------------------------------------------------------------------------

/** The broad market sectors Pelham operates across. */
export type ProjectSector =
  | "all"
  | "commercial-office"
  | "hospitality"
  | "retail"
  | "healthcare"
  | "education"
  | "residential";

/** Current lifecycle status of a project. */
export type ProjectCompletionStatus = "completed" | "in-progress" | "upcoming";

/** A single interior design / fit-out project delivered by Pelham. */
export interface InteriorProject {
  projectId: string;
  projectTitle: string;
  projectSector: Exclude<ProjectSector, "all">;
  clientOrganisationName: string;
  projectLocationCity: string;
  projectLocationCountry: string;
  totalFloorAreaSquareMetres: number;
  projectCompletionYear: number;
  projectCompletionStatus: ProjectCompletionStatus;
  heroImageUrl: string;
  projectSummaryText: string;
  projectHighlights: string[];
}

// ---------------------------------------------------------------------------
// Service types
// ---------------------------------------------------------------------------

/** A design or consultancy service offered by Pelham. */
export interface ServiceOffering {
  serviceId: string;
  serviceTitle: string;
  serviceShortDescription: string;
  serviceDetailedDescription: string;
  serviceIconName: string;
}

// ---------------------------------------------------------------------------
// Process types
// ---------------------------------------------------------------------------

/** A single stage within Pelham's client engagement process. */
export interface ProjectProcessStage {
  stageNumber: number;
  stageTitle: string;
  stageDescription: string;
  estimatedStageDurationWeeks: number;
}

// ---------------------------------------------------------------------------
// Sustainability types
// ---------------------------------------------------------------------------

/** A sustainability or CSR initiative championed by Pelham. */
export interface SustainabilityInitiative {
  initiativeId: string;
  initiativeTitle: string;
  initiativeDescription: string;
  measuredImpactStatement: string;
  relatedCertificationBadge?: string;
}

// ---------------------------------------------------------------------------
// Insight / news types
// ---------------------------------------------------------------------------

/** A thought-leadership article or insight published by Pelham. */
export interface InsightArticle {
  articleId: string;
  articleTitle: string;
  articleExcerptText: string;
  articlePublicationDate: string; // ISO 8601 date string
  authorFullName: string;
  articleCategoryTag: string;
  estimatedReadingTimeMinutes: number;
  thumbnailImageUrl: string;
}

// ---------------------------------------------------------------------------
// Credential / award types
// ---------------------------------------------------------------------------

/** An industry award, accreditation or credential held by Pelham. */
export interface IndustryCredential {
  credentialId: string;
  credentialTitle: string;
  awardingBodyName: string;
  yearAwarded: number;
  credentialDescription: string;
}

// ---------------------------------------------------------------------------
// Metric / stat types (used in the hero strip)
// ---------------------------------------------------------------------------

/** A headline business metric displayed in the metrics strip. */
export interface BusinessMetric {
  metricLabel: string;
  metricDisplayValue: string;
  metricSubtitle: string;
}
