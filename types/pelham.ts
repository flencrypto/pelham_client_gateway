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

// ---------------------------------------------------------------------------
// Photo management
// ---------------------------------------------------------------------------

/** A site or project photo, optionally grouped into an album. */
export interface ProjectPhoto {
  photoId: string;
  imageUrl: string;
  caption: string;
  uploadedDate: string;
  uploadedBy: string;
  albumName: string;
}

// ---------------------------------------------------------------------------
// Email integration (Outlook / Gmail)
// ---------------------------------------------------------------------------

/** An email pulled from a connected mailbox and attached to a project. */
export interface ProjectEmail {
  emailId: string;
  subject: string;
  fromAddress: string;
  receivedDate: string;
  bodySnippet: string;
  isRead: boolean;
  source: "gmail" | "outlook";
}

// ---------------------------------------------------------------------------
// Compliance document management
// ---------------------------------------------------------------------------

export type ComplianceDocType =
  | "certificate"
  | "invoice"
  | "compliance"
  | "report"
  | "warranty-cert";

/** A previous revision of a compliance document. */
export interface DocumentVersion {
  version: string;
  uploadedDate: string;
  changeNote: string;
}

/** A compliance document, invoice, certificate, or report with version history. */
export interface ComplianceDocument {
  docId: string;
  docTitle: string;
  docType: ComplianceDocType;
  uploadedDate: string;
  version: string;
  fileSizeKb: number;
  uploadedBy: string;
  versionHistory: DocumentVersion[];
}

// ---------------------------------------------------------------------------
// Product warranties
// ---------------------------------------------------------------------------

/** Warranty record for a specific product or system installed on a project. */
export interface WarrantyItem {
  warrantyId: string;
  productName: string;
  supplierName: string;
  modelNumber: string;
  installationDate: string;
  warrantyExpiryDate: string;
  proofDocumentName: string;
  notes: string;
}

// ---------------------------------------------------------------------------
// H&S / Maintenance systems
// ---------------------------------------------------------------------------

export type MaintenanceSystemType =
  | "fire-alarm"
  | "bms"
  | "emergency-lighting"
  | "sprinkler-system"
  | "ups"
  | "generator"
  | "access-control"
  | "cctv"
  | "hvac"
  | "general-maintenance";

/** A recommended service provider for a particular system. */
export interface ServiceProvider {
  providerId: string;
  companyName: string;
  contactName: string;
  phoneNumber: string;
  emailAddress: string;
  specialisation: string;
}

/**
 * A building/M&E system on a commercial project that has legal H&S obligations,
 * a maintenance schedule, and recommended service providers.
 */
export interface MaintenanceSystem {
  systemId: string;
  systemType: MaintenanceSystemType;
  systemDisplayName: string;
  installationDate: string;
  lastServiceDate: string;
  commissioningCertificate: string | null;
  systemDrawings: string[];
  maintenanceFrequency: string;
  nextServiceDueDate: string;
  maintenanceNotes: string;
  recommendedServiceProviders: ServiceProvider[];
}

// ---------------------------------------------------------------------------
// Admin-level project data (aggregated for admin portal)
// ---------------------------------------------------------------------------

/** All admin-managed data attached to a single project. */
export interface AdminProjectData {
  projectId: string;
  photos: ProjectPhoto[];
  emails: ProjectEmail[];
  complianceDocs: ComplianceDocument[];
  warranties: WarrantyItem[];
  maintenanceSystems: MaintenanceSystem[];
}

// ---------------------------------------------------------------------------
// Project schedule / Gantt types
// ---------------------------------------------------------------------------

/** Workflow status of a single schedule task. */
export type TaskStatus = "in-progress" | "open" | "complete" | "on-hold";

/** Visual health indicator shown on the left panel of the Gantt chart. */
export type TaskHealthStatus =
  | "at-risk"
  | "critical"
  | "healthy"
  | "planned"
  | "confirmed";

/** Category of the schedule entry. */
export type TaskType = "action" | "milestone" | "deliverable";

/** A single row in the project Gantt / Horizon chart. */
export interface ScheduleTask {
  taskId: string;
  title: string;
  status: TaskStatus;
  /** ISO 8601 date string (YYYY-MM-DD). */
  startDate: string;
  /** ISO 8601 date string (YYYY-MM-DD). */
  endDate: string;
  owner: string;
  type: TaskType;
  healthStatus: TaskHealthStatus;
  /** 0–100 — percentage of work completed. */
  completionPercent: number;
}

/** All schedule tasks for a single project. */
export interface ProjectSchedule {
  projectId: string;
  tasks: ScheduleTask[];
}
