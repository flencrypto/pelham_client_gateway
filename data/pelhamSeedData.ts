/**
 * Seed data for the Pelham Client Gateway.
 *
 * Variable names follow the pattern <domain><Collection> so that import sites
 * read naturally, e.g. `pelhamInteriorProjects`, `pelhamServiceOfferings`.
 */
import type {
  BusinessMetric,
  IndustryCredential,
  InsightArticle,
  InteriorProject,
  ProjectProcessStage,
  ServiceOffering,
  SustainabilityInitiative,
} from "@/types/pelham";

// ---------------------------------------------------------------------------
// Business metrics (hero strip)
// ---------------------------------------------------------------------------

export const pelhamBusinessMetrics: BusinessMetric[] = [
  {
    metricLabel: "Projects Delivered",
    metricDisplayValue: "320+",
    metricSubtitle: "Across 12 countries",
  },
  {
    metricLabel: "Square Metres Designed",
    metricDisplayValue: "1.4M",
    metricSubtitle: "Commercial & residential",
  },
  {
    metricLabel: "Years of Excellence",
    metricDisplayValue: "28",
    metricSubtitle: "Since 1996",
  },
  {
    metricLabel: "Industry Awards",
    metricDisplayValue: "47",
    metricSubtitle: "National & international",
  },
];

// ---------------------------------------------------------------------------
// Interior projects
// ---------------------------------------------------------------------------

export const pelhamInteriorProjects: InteriorProject[] = [
  {
    projectId: "proj-canary-wharf-hq",
    projectTitle: "Canary Wharf Financial Headquarters",
    projectSector: "commercial-office",
    clientOrganisationName: "Meridian Capital Group",
    projectLocationCity: "London",
    projectLocationCountry: "United Kingdom",
    totalFloorAreaSquareMetres: 8400,
    projectCompletionYear: 2023,
    projectCompletionStatus: "completed",
    heroImageUrl:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
    projectSummaryText:
      "A 22-storey flagship office transformation blending biophilic design with precision engineering to create a workplace that elevates both productivity and wellbeing.",
    projectHighlights: [
      "BREEAM Excellent certified",
      "40% reduction in energy consumption",
      "Fully column-free trading floor",
      "Integrated smart-building controls",
    ],
  },
  {
    projectId: "proj-mayfair-boutique-hotel",
    projectTitle: "The Mayfair Grand — Boutique Hotel Refit",
    projectSector: "hospitality",
    clientOrganisationName: "Mayfair Grand Hotels Ltd",
    projectLocationCity: "London",
    projectLocationCountry: "United Kingdom",
    totalFloorAreaSquareMetres: 3200,
    projectCompletionYear: 2024,
    projectCompletionStatus: "completed",
    heroImageUrl:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
    projectSummaryText:
      "A complete interior overhaul of a Grade II listed boutique hotel, respecting historical fabric whilst delivering a contemporary luxury guest experience.",
    projectHighlights: [
      "Listed building consent secured",
      "84 bespoke guestroom fit-outs",
      "Custom millwork and joinery throughout",
      "Heated marble flooring in all suites",
    ],
  },
  {
    projectId: "proj-edinburgh-retail-flagship",
    projectTitle: "Princes Street Flagship Retail Concept",
    projectSector: "retail",
    clientOrganisationName: "Caledonian Goods Co.",
    projectLocationCity: "Edinburgh",
    projectLocationCountry: "United Kingdom",
    totalFloorAreaSquareMetres: 1650,
    projectCompletionYear: 2023,
    projectCompletionStatus: "completed",
    heroImageUrl:
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800",
    projectSummaryText:
      "A flagship retail environment on Edinburgh's most prominent shopping street, weaving Scottish craft heritage into a modern experiential retail journey.",
    projectHighlights: [
      "Immersive brand storytelling zone",
      "Locally sourced materials strategy",
      "Flexible event and workshop space",
      "Digital wayfinding integration",
    ],
  },
  {
    projectId: "proj-bristol-healthcare-hub",
    projectTitle: "Bristol Wellbeing & Diagnostics Hub",
    projectSector: "healthcare",
    clientOrganisationName: "Avon Health Partnership",
    projectLocationCity: "Bristol",
    projectLocationCountry: "United Kingdom",
    totalFloorAreaSquareMetres: 2800,
    projectCompletionYear: 2024,
    projectCompletionStatus: "completed",
    heroImageUrl:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800",
    projectSummaryText:
      "A patient-centred diagnostics hub designed to reduce clinical anxiety through evidence-based biophilic design and seamless wayfinding.",
    projectHighlights: [
      "NHS infection-control compliant",
      "Acoustic performance optimised",
      "Sensory-calm colour palette",
      "Accessible design throughout",
    ],
  },
  {
    projectId: "proj-oxford-learning-commons",
    projectTitle: "St. Aldates Learning Commons",
    projectSector: "education",
    clientOrganisationName: "Oxford Brookes University",
    projectLocationCity: "Oxford",
    projectLocationCountry: "United Kingdom",
    totalFloorAreaSquareMetres: 4100,
    projectCompletionYear: 2022,
    projectCompletionStatus: "completed",
    heroImageUrl:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800",
    projectSummaryText:
      "A next-generation learning commons supporting hybrid, collaborative and independent study through flexible furniture systems and advanced AV infrastructure.",
    projectHighlights: [
      "450-seat flexible study environment",
      "Integrated AV and presentation systems",
      "Acoustic zoning for focus and collaboration",
      "Sustainable furniture procurement",
    ],
  },
  {
    projectId: "proj-chelsea-luxury-apartment",
    projectTitle: "Chelsea Riverside Penthouse",
    projectSector: "residential",
    clientOrganisationName: "Private Client",
    projectLocationCity: "London",
    projectLocationCountry: "United Kingdom",
    totalFloorAreaSquareMetres: 420,
    projectCompletionYear: 2024,
    projectCompletionStatus: "completed",
    heroImageUrl:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800",
    projectSummaryText:
      "A full interior specification for a landmark penthouse with sweeping Thames views, combining bespoke furniture, art curation and smart home technology.",
    projectHighlights: [
      "Fully automated smart home integration",
      "Bespoke kitchen by Bulthaup",
      "Curated art collection consultation",
      "Spa-grade master bathroom",
    ],
  },
  {
    projectId: "proj-manchester-tech-campus",
    projectTitle: "Northern Quarter Tech Campus",
    projectSector: "commercial-office",
    clientOrganisationName: "NorthTech Ventures",
    projectLocationCity: "Manchester",
    projectLocationCountry: "United Kingdom",
    totalFloorAreaSquareMetres: 6200,
    projectCompletionYear: 2025,
    projectCompletionStatus: "in-progress",
    heroImageUrl:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800",
    projectSummaryText:
      "A vibrant multi-occupier tech campus celebrating Manchester's creative energy through exposed industrial aesthetics, flexible working zones and community-first programming.",
    projectHighlights: [
      "5 floors of coworking and private suites",
      "On-site maker studio and podcast facility",
      "EV charging and cycling infrastructure",
      "BREEAM Outstanding target",
    ],
  },
  {
    projectId: "proj-dubai-luxury-hotel",
    projectTitle: "Dubai Marina Luxury Resort",
    projectSector: "hospitality",
    clientOrganisationName: "Al Badr Hospitality Group",
    projectLocationCity: "Dubai",
    projectLocationCountry: "UAE",
    totalFloorAreaSquareMetres: 14000,
    projectCompletionYear: 2026,
    projectCompletionStatus: "upcoming",
    heroImageUrl:
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800",
    projectSummaryText:
      "An iconic 320-room luxury resort interior inspired by Arabian geometry and craft tradition, delivered at world-class scale and specification.",
    projectHighlights: [
      "320 luxury guestrooms and suites",
      "Signature restaurant and sky bar",
      "Infinity pool terrace at 40th floor",
      "Custom Arabic tile and metalwork programme",
    ],
  },
];

// ---------------------------------------------------------------------------
// Service offerings
// ---------------------------------------------------------------------------

export const pelhamServiceOfferings: ServiceOffering[] = [
  {
    serviceId: "service-interior-design",
    serviceTitle: "Interior Design",
    serviceShortDescription: "Concept to completion interior design",
    serviceDetailedDescription:
      "From initial brief through to handover, our multi-disciplinary design team develops spatial concepts that are architecturally rigorous, commercially sound and visually outstanding.",
    serviceIconName: "Pencil",
  },
  {
    serviceId: "service-workplace-strategy",
    serviceTitle: "Workplace Strategy",
    serviceShortDescription: "Data-informed workplace planning",
    serviceDetailedDescription:
      "We conduct occupancy analysis, staff engagement surveys and benchmarking studies to produce a tailored workplace strategy that aligns your real estate with your operational and cultural goals.",
    serviceIconName: "BarChart",
  },
  {
    serviceId: "service-project-management",
    serviceTitle: "Project Management",
    serviceShortDescription: "End-to-end delivery assurance",
    serviceDetailedDescription:
      "Our project managers bring rigorous programme control, cost management and contractor oversight to every project, ensuring on-time, on-budget delivery without compromise on quality.",
    serviceIconName: "ClipboardList",
  },
  {
    serviceId: "service-ff-and-e",
    serviceTitle: "FF&E Procurement",
    serviceShortDescription: "Furniture, fixtures and equipment sourcing",
    serviceDetailedDescription:
      "Leveraging preferred supplier relationships and our in-house specification library, we procure FF&E packages that deliver superior value, quality and sustainability credentials.",
    serviceIconName: "ShoppingBag",
  },
  {
    serviceId: "service-sustainability-consulting",
    serviceTitle: "Sustainability Consulting",
    serviceShortDescription: "Green-certified, net-zero aligned design",
    serviceDetailedDescription:
      "Our sustainability team supports clients in achieving BREEAM, WELL and LEED certifications, and delivers whole-life carbon assessments, circular economy strategies and responsible material sourcing plans.",
    serviceIconName: "Leaf",
  },
  {
    serviceId: "service-cgi-visualisation",
    serviceTitle: "CGI & Visualisation",
    serviceShortDescription: "Photorealistic design communication",
    serviceDetailedDescription:
      "Our in-house visualisation studio produces high-fidelity CGI stills, walkthroughs and immersive VR experiences, enabling confident decision-making before a single item is ordered.",
    serviceIconName: "Image",
  },
];

// ---------------------------------------------------------------------------
// Project process stages
// ---------------------------------------------------------------------------

export const pelhamProjectProcessStages: ProjectProcessStage[] = [
  {
    stageNumber: 1,
    stageTitle: "Discovery & Brief",
    stageDescription:
      "We begin with a structured discovery session to understand your business objectives, brand identity, occupancy requirements and aspirations. We then produce a detailed design brief that forms the foundation of the project.",
    estimatedStageDurationWeeks: 2,
  },
  {
    stageNumber: 2,
    stageTitle: "Concept Design",
    stageDescription:
      "Our designers develop spatial concepts, mood boards and material palettes. Multiple concept directions are presented for client review, refined iteratively until the creative vision is agreed.",
    estimatedStageDurationWeeks: 4,
  },
  {
    stageNumber: 3,
    stageTitle: "Developed Design",
    stageDescription:
      "Approved concepts are developed into detailed design packages including technical drawings, specification schedules and CGI visualisations. All regulatory and sustainability requirements are embedded at this stage.",
    estimatedStageDurationWeeks: 6,
  },
  {
    stageNumber: 4,
    stageTitle: "Procurement & Tendering",
    stageDescription:
      "We prepare tender packages, manage the contractor selection process and provide detailed FF&E procurement schedules. All appointments are made transparently and in alignment with the agreed budget.",
    estimatedStageDurationWeeks: 3,
  },
  {
    stageNumber: 5,
    stageTitle: "Construction & Installation",
    stageDescription:
      "Our project managers provide on-site supervision throughout the build phase, chairing weekly progress meetings, managing the change control process and resolving technical queries in real time.",
    estimatedStageDurationWeeks: 16,
  },
  {
    stageNumber: 6,
    stageTitle: "Handover & Aftercare",
    stageDescription:
      "We conduct a formal snagging inspection, coordinate final remedials and facilitate a structured handover. Post-occupancy support is available to ensure the space performs as designed.",
    estimatedStageDurationWeeks: 2,
  },
];

// ---------------------------------------------------------------------------
// Sustainability initiatives
// ---------------------------------------------------------------------------

export const pelhamSustainabilityInitiatives: SustainabilityInitiative[] = [
  {
    initiativeId: "init-net-zero-commitment",
    initiativeTitle: "Net Zero by 2030",
    initiativeDescription:
      "Pelham has committed to achieving net-zero carbon across all our own operations by 2030, with a science-based target aligned to a 1.5°C pathway.",
    measuredImpactStatement: "62% reduction in Scope 1 & 2 emissions since 2019",
    relatedCertificationBadge: "SBTi Committed",
  },
  {
    initiativeId: "init-circular-materials",
    initiativeTitle: "Circular Materials Programme",
    initiativeDescription:
      "We source a minimum of 30% recycled or reclaimed content across all FF&E packages and work with suppliers who offer take-back schemes at end of life.",
    measuredImpactStatement:
      "1,200 tonnes of materials diverted from landfill in 2023",
    relatedCertificationBadge: "Ellen MacArthur Foundation Member",
  },
  {
    initiativeId: "init-breeam-excellence",
    initiativeTitle: "BREEAM Excellence Target",
    initiativeDescription:
      "Every eligible commercial project targets a minimum BREEAM Excellent rating. Our in-house sustainability consultants are embedded in project teams from day one.",
    measuredImpactStatement: "94% of eligible projects achieved BREEAM Excellent or Outstanding",
  },
  {
    initiativeId: "init-supply-chain-ethics",
    initiativeTitle: "Ethical Supply Chain",
    initiativeDescription:
      "We conduct annual supplier audits against our Responsible Procurement Charter, covering fair labour, environmental management and modern slavery compliance.",
    measuredImpactStatement: "100% of Tier 1 suppliers audited annually",
    relatedCertificationBadge: "CIPS Ethical Mark",
  },
];

// ---------------------------------------------------------------------------
// Insight articles
// ---------------------------------------------------------------------------

export const pelhamInsightArticles: InsightArticle[] = [
  {
    articleId: "article-future-of-hybrid-office",
    articleTitle: "The Future of the Hybrid Office: Beyond Hot-Desking",
    articleExcerptText:
      "Organisations that treat hybrid working as a desk-reduction exercise are missing the point. We explore what the evidence says about designing for true flexibility.",
    articlePublicationDate: "2024-11-12",
    authorFullName: "Sarah Whitfield",
    articleCategoryTag: "Workplace Strategy",
    estimatedReadingTimeMinutes: 7,
    thumbnailImageUrl:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400",
  },
  {
    articleId: "article-biophilic-design-evidence",
    articleTitle: "What the Research Actually Says About Biophilic Design",
    articleExcerptText:
      "Plants on a shelf and a living wall are not a biophilic design strategy. We examine the peer-reviewed evidence and what it means for your next project.",
    articlePublicationDate: "2024-09-03",
    authorFullName: "Dr. James Okafor",
    articleCategoryTag: "Design Thinking",
    estimatedReadingTimeMinutes: 10,
    thumbnailImageUrl:
      "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=400",
  },
  {
    articleId: "article-embodied-carbon-challenge",
    articleTitle: "Embodied Carbon: The Interiors Industry's Blind Spot",
    articleExcerptText:
      "Operational carbon is falling fast, but embodied carbon in fit-out projects remains stubbornly high. Here is what forward-thinking clients are doing about it.",
    articlePublicationDate: "2024-07-18",
    authorFullName: "Priya Menon",
    articleCategoryTag: "Sustainability",
    estimatedReadingTimeMinutes: 8,
    thumbnailImageUrl:
      "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=400",
  },
];

// ---------------------------------------------------------------------------
// Industry credentials
// ---------------------------------------------------------------------------

export const pelhamIndustryCredentials: IndustryCredential[] = [
  {
    credentialId: "cred-bid-interior-design",
    credentialTitle: "Interior Design Practice of the Year",
    awardingBodyName: "British Institute of Interior Design",
    yearAwarded: 2023,
    credentialDescription:
      "Awarded to Pelham in recognition of outstanding creative excellence and client satisfaction across a diverse portfolio.",
  },
  {
    credentialId: "cred-bcsa-sustainability",
    credentialTitle: "Sustainability Leadership Award",
    awardingBodyName: "British Council for Offices",
    yearAwarded: 2024,
    credentialDescription:
      "Recognising Pelham's measurable progress towards net-zero and our Circular Materials Programme.",
  },
  {
    credentialId: "cred-fit-out-project-year",
    credentialTitle: "Fit-Out Project of the Year (Over £5M)",
    awardingBodyName: "Mixology Awards",
    yearAwarded: 2023,
    credentialDescription:
      "For the Canary Wharf Financial Headquarters project, celebrated for its technical complexity and biophilic design integration.",
  },
];
