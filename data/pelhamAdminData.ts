/**
 * Admin-level project data for the Pelham Client Gateway demo.
 * Covers photos, emails, compliance documents, warranties, and H&S maintenance
 * systems for each project.  Keyed by project ID from pelhamSeedData.
 */
import type {
  AdminProjectData,
  ComplianceDocument,
  MaintenanceSystem,
  ProjectEmail,
  ProjectPhoto,
  WarrantyItem,
} from "@/types/pelham";

// ---------------------------------------------------------------------------
// Canary Wharf HQ — commercial office (most complete dataset)
// ---------------------------------------------------------------------------

const canaryWharfPhotos: ProjectPhoto[] = [
  {
    photoId: "cwh-p1",
    imageUrl:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
    caption: "Open-plan trading floor — week 12 progress",
    uploadedDate: "2023-05-15",
    uploadedBy: "Tom Gallagher",
    albumName: "Week 12 Progress",
  },
  {
    photoId: "cwh-p2",
    imageUrl:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800",
    caption: "Collaborative hub zone — joinery installation",
    uploadedDate: "2023-06-02",
    uploadedBy: "Tom Gallagher",
    albumName: "Week 16 Progress",
  },
  {
    photoId: "cwh-p3",
    imageUrl:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800",
    caption: "Board room AV install complete",
    uploadedDate: "2023-07-18",
    uploadedBy: "Sarah Whitfield",
    albumName: "AV & Tech",
  },
  {
    photoId: "cwh-p4",
    imageUrl:
      "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800",
    caption: "Biophilic wall feature — pre-planting",
    uploadedDate: "2023-08-01",
    uploadedBy: "Tom Gallagher",
    albumName: "Biophilic Features",
  },
];

const canaryWharfEmails: ProjectEmail[] = [
  {
    emailId: "cwh-e1",
    subject: "RE: Canary Wharf — Joinery delivery update",
    fromAddress: "supplies@premiumjoinery.co.uk",
    receivedDate: "2023-06-01",
    bodySnippet:
      "Following our call, the bespoke joinery units are on track for delivery on 12th June. We will send a remittance once the vehicle has been dispatched...",
    isRead: true,
    source: "outlook",
  },
  {
    emailId: "cwh-e2",
    subject: "BREEAM Assessment — site inspection confirmed",
    fromAddress: "inspector@breeam-assessors.com",
    receivedDate: "2023-07-14",
    bodySnippet:
      "Dear Tom, confirming our site inspection for BREEAM Excellent assessment on 22nd July at 09:30. Please ensure access to plant rooms is arranged...",
    isRead: true,
    source: "outlook",
  },
  {
    emailId: "cwh-e3",
    subject: "Smart controls — commissioning schedule",
    fromAddress: "projects@crestron.com",
    receivedDate: "2023-08-20",
    bodySnippet:
      "Hi Sarah, attached is the proposed commissioning schedule for the Crestron smart building controls across floors 1–22. Week 1: panels and wiring...",
    isRead: false,
    source: "gmail",
  },
  {
    emailId: "cwh-e4",
    subject: "Final snagging sign-off — Meridian Capital Group",
    fromAddress: "ceo@meridiancg.com",
    receivedDate: "2023-09-28",
    bodySnippet:
      "Pelham team, I am delighted to confirm sign-off on the Canary Wharf project. The quality of finish has exceeded our expectations. Looking forward to working together again...",
    isRead: true,
    source: "outlook",
  },
];

const canaryWharfComplianceDocs: ComplianceDocument[] = [
  {
    docId: "cwh-d1",
    docTitle: "BREEAM Excellent Certificate",
    docType: "certificate",
    uploadedDate: "2023-10-15",
    version: "1.0",
    fileSizeKb: 1240,
    uploadedBy: "Sarah Whitfield",
    versionHistory: [],
  },
  {
    docId: "cwh-d2",
    docTitle: "Final Account Invoice — Meridian Capital Group",
    docType: "invoice",
    uploadedDate: "2023-11-01",
    version: "2.0",
    fileSizeKb: 320,
    uploadedBy: "Finance Team",
    versionHistory: [
      {
        version: "1.0",
        uploadedDate: "2023-10-20",
        changeNote: "Initial draft invoice — pending final account agreement",
      },
    ],
  },
  {
    docId: "cwh-d3",
    docTitle: "CDM Principal Designer Compliance Report",
    docType: "compliance",
    uploadedDate: "2023-08-05",
    version: "1.0",
    fileSizeKb: 2100,
    uploadedBy: "Tom Gallagher",
    versionHistory: [],
  },
  {
    docId: "cwh-d4",
    docTitle: "Handover & O&M Manual",
    docType: "report",
    uploadedDate: "2023-10-01",
    version: "3.0",
    fileSizeKb: 8400,
    uploadedBy: "Tom Gallagher",
    versionHistory: [
      {
        version: "1.0",
        uploadedDate: "2023-08-10",
        changeNote: "Draft for client review",
      },
      {
        version: "2.0",
        uploadedDate: "2023-09-12",
        changeNote: "Incorporated client comments; updated MEP section",
      },
    ],
  },
];

const canaryWharfWarranties: WarrantyItem[] = [
  {
    warrantyId: "cwh-w1",
    productName: "Crestron Smart Building Controls",
    supplierName: "Crestron Electronics",
    modelNumber: "AV3-CPC3-S",
    installationDate: "2023-09-20",
    warrantyExpiryDate: "2025-09-20",
    proofDocumentName: "crestron-warranty-certificate.pdf",
    notes: "2-year manufacturer warranty. Extended 5-year service agreement available on request.",
  },
  {
    warrantyId: "cwh-w2",
    productName: "Mitsubishi VRF HVAC System",
    supplierName: "Mitsubishi Electric",
    modelNumber: "PUMY-P200YKM",
    installationDate: "2023-07-15",
    warrantyExpiryDate: "2028-07-15",
    proofDocumentName: "mitsubishi-hvac-warranty.pdf",
    notes: "5-year parts and labour warranty. Annual service required to maintain warranty.",
  },
  {
    warrantyId: "cwh-w3",
    productName: "Bespoke Reception Desk",
    supplierName: "Benchmark Furniture",
    modelNumber: "BF-BESPOKE-CWH",
    installationDate: "2023-09-01",
    warrantyExpiryDate: "2033-09-01",
    proofDocumentName: "benchmark-furniture-warranty.pdf",
    notes: "10-year structural warranty on solid oak frame. Surface finish warranted 3 years.",
  },
];

const canaryWharfMaintenance: MaintenanceSystem[] = [
  {
    systemId: "cwh-sys-fire",
    systemType: "fire-alarm",
    systemDisplayName: "Fire Alarm & Detection System",
    installationDate: "2023-08-01",
    lastServiceDate: "2024-02-01",
    commissioningCertificate: "fire-alarm-commissioning-cert-bs5839.pdf",
    systemDrawings: [
      "fire-detection-floor-plan-L1-L6.pdf",
      "fire-detection-floor-plan-L7-L14.pdf",
      "fire-detection-floor-plan-L15-L22.pdf",
    ],
    maintenanceFrequency: "Bi-annual inspection + annual full service",
    nextServiceDueDate: "2024-08-01",
    maintenanceNotes:
      "BS 5839-1:2017 compliant. Addressable system by Hochiki. Weekly visual checks by site manager. Log book on Level 1 reception.",
    recommendedServiceProviders: [
      {
        providerId: "sp-cwh-fire-1",
        companyName: "London Fire Systems Ltd",
        contactName: "Mark Henderson",
        phoneNumber: "020 7123 4567",
        emailAddress: "service@londonfiresystems.co.uk",
        specialisation: "Fire detection, suppression & emergency systems",
      },
    ],
  },
  {
    systemId: "cwh-sys-bms",
    systemType: "bms",
    systemDisplayName: "Building Management System (BMS)",
    installationDate: "2023-08-15",
    lastServiceDate: "2024-01-10",
    commissioningCertificate: "bms-commissioning-certificate.pdf",
    systemDrawings: [
      "bms-network-architecture-diagram.pdf",
      "bms-zone-mapping-all-floors.pdf",
    ],
    maintenanceFrequency: "Annual service + quarterly remote health check",
    nextServiceDueDate: "2025-01-10",
    maintenanceNotes:
      "Trend IQ4 BMS integrating HVAC, lighting, access control, and energy metering. Remote access via secure VPN. Software version 4.2.1.",
    recommendedServiceProviders: [
      {
        providerId: "sp-cwh-bms-1",
        companyName: "Trend Controls UK",
        contactName: "David Patel",
        phoneNumber: "01483 771 371",
        emailAddress: "support@trend-uk.com",
        specialisation: "BMS installation and maintenance",
      },
    ],
  },
  {
    systemId: "cwh-sys-eml",
    systemType: "emergency-lighting",
    systemDisplayName: "Emergency Lighting System",
    installationDate: "2023-07-20",
    lastServiceDate: "2024-01-20",
    commissioningCertificate: "emergency-lighting-commissioning-cert.pdf",
    systemDrawings: ["emergency-lighting-layout-all-floors.pdf"],
    maintenanceFrequency: "Monthly flick test + annual full duration test",
    nextServiceDueDate: "2025-01-20",
    maintenanceNotes:
      "BS EN 50172 compliant. Central battery system by Eaton. Duration: 3 hours. Monthly tests logged in maintenance register. Annual test by qualified engineer required.",
    recommendedServiceProviders: [
      {
        providerId: "sp-cwh-eml-1",
        companyName: "Eaton Electrical Services",
        contactName: "Rachel Moore",
        phoneNumber: "0845 601 0095",
        emailAddress: "ees@eaton.com",
        specialisation: "Emergency lighting and power systems",
      },
    ],
  },
  {
    systemId: "cwh-sys-sprinkler",
    systemType: "sprinkler-system",
    systemDisplayName: "Sprinkler System",
    installationDate: "2023-06-10",
    lastServiceDate: "2024-03-01",
    commissioningCertificate: "sprinkler-system-commissioning-lpcb.pdf",
    systemDrawings: [
      "sprinkler-hydraulic-calculations.pdf",
      "sprinkler-installation-drawings-all-floors.pdf",
    ],
    maintenanceFrequency: "Quarterly inspection + annual full service",
    nextServiceDueDate: "2024-09-01",
    maintenanceNotes:
      "LPCB approved wet-pipe system covering all occupied floors. BS EN 12845 compliant. Alarm valve set located in basement plant room. Insurer notification required for any system isolations.",
    recommendedServiceProviders: [
      {
        providerId: "sp-cwh-sp-1",
        companyName: "Tyco Fire & Security",
        contactName: "James Aldous",
        phoneNumber: "0800 783 3711",
        emailAddress: "j.aldous@tycofs.com",
        specialisation: "Sprinkler system inspection, testing & maintenance",
      },
    ],
  },
  {
    systemId: "cwh-sys-ups",
    systemType: "ups",
    systemDisplayName: "UPS (Uninterruptible Power Supply)",
    installationDate: "2023-08-25",
    lastServiceDate: "2024-02-25",
    commissioningCertificate: "ups-commissioning-certificate.pdf",
    systemDrawings: ["ups-single-line-diagram.pdf"],
    maintenanceFrequency: "Bi-annual service + annual battery replacement assessment",
    nextServiceDueDate: "2024-08-25",
    maintenanceNotes:
      "APC Galaxy VX 80kVA UPS protecting trading floor and server room. Runtime 15 min at full load. Battery replacement expected 2026. Notify data centre team before any maintenance.",
    recommendedServiceProviders: [
      {
        providerId: "sp-cwh-ups-1",
        companyName: "APC by Schneider Electric",
        contactName: "Chris Norris",
        phoneNumber: "0800 052 6010",
        emailAddress: "apc.uk@se.com",
        specialisation: "UPS systems and critical power",
      },
    ],
  },
  {
    systemId: "cwh-sys-access",
    systemType: "access-control",
    systemDisplayName: "Access Control System",
    installationDate: "2023-09-05",
    lastServiceDate: "2024-03-05",
    commissioningCertificate: "access-control-commissioning-cert.pdf",
    systemDrawings: [
      "access-control-door-schedule.pdf",
      "access-control-cabling-routes.pdf",
    ],
    maintenanceFrequency: "Annual service",
    nextServiceDueDate: "2025-03-05",
    maintenanceNotes:
      "Lenel OnGuard integrated access control across 220 doors. Biometric readers at all entry points. System admin: IT Department, contact helpdesk@meridiancg.com.",
    recommendedServiceProviders: [
      {
        providerId: "sp-cwh-ac-1",
        companyName: "SecureGuard Access Systems",
        contactName: "Helen Walsh",
        phoneNumber: "020 3456 7890",
        emailAddress: "service@secureguard.co.uk",
        specialisation: "Access control, CCTV & physical security",
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// Mayfair Boutique Hotel — hospitality
// ---------------------------------------------------------------------------

const mayfairPhotos: ProjectPhoto[] = [
  {
    photoId: "mbh-p1",
    imageUrl:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
    caption: "Grand lobby — marble floor installation complete",
    uploadedDate: "2024-01-10",
    uploadedBy: "Sarah Whitfield",
    albumName: "Lobby & Entrance",
  },
  {
    photoId: "mbh-p2",
    imageUrl:
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800",
    caption: "Penthouse suite — bespoke headboard install",
    uploadedDate: "2024-02-20",
    uploadedBy: "Tom Gallagher",
    albumName: "Guestrooms",
  },
];

const mayfairComplianceDocs: ComplianceDocument[] = [
  {
    docId: "mbh-d1",
    docTitle: "Listed Building Consent — LB/2023/0441",
    docType: "compliance",
    uploadedDate: "2023-06-01",
    version: "1.0",
    fileSizeKb: 3200,
    uploadedBy: "Sarah Whitfield",
    versionHistory: [],
  },
  {
    docId: "mbh-d2",
    docTitle: "Interior Design Contract — Mayfair Grand Hotels Ltd",
    docType: "invoice",
    uploadedDate: "2023-03-15",
    version: "1.0",
    fileSizeKb: 540,
    uploadedBy: "Finance Team",
    versionHistory: [],
  },
];

const mayfairWarranties: WarrantyItem[] = [
  {
    warrantyId: "mbh-w1",
    productName: "Bulthaup B3 Kitchen System",
    supplierName: "Bulthaup",
    modelNumber: "B3-CUSTOM-MAYFAIR",
    installationDate: "2024-01-20",
    warrantyExpiryDate: "2029-01-20",
    proofDocumentName: "bulthaup-warranty-mayfair.pdf",
    notes: "5-year warranty on all components. Annual service recommended.",
  },
];

// ---------------------------------------------------------------------------
// Bristol Healthcare Hub — healthcare (H&S focused)
// ---------------------------------------------------------------------------

const bristolComplianceDocs: ComplianceDocument[] = [
  {
    docId: "bhh-d1",
    docTitle: "NHS Infection Control Compliance Certificate",
    docType: "certificate",
    uploadedDate: "2024-04-10",
    version: "1.0",
    fileSizeKb: 890,
    uploadedBy: "Tom Gallagher",
    versionHistory: [],
  },
  {
    docId: "bhh-d2",
    docTitle: "HTM 08-01 Acoustic Performance Report",
    docType: "report",
    uploadedDate: "2024-03-28",
    version: "2.0",
    fileSizeKb: 1600,
    uploadedBy: "Sarah Whitfield",
    versionHistory: [
      {
        version: "1.0",
        uploadedDate: "2024-02-14",
        changeNote: "Initial acoustic test results — remedial works required",
      },
    ],
  },
];

const bristolWarranties: WarrantyItem[] = [
  {
    warrantyId: "bhh-w1",
    productName: "Tarkett Safetred Universal Flooring",
    supplierName: "Tarkett",
    modelNumber: "SAFETRED-UNIV-3MM",
    installationDate: "2024-02-15",
    warrantyExpiryDate: "2034-02-15",
    proofDocumentName: "tarkett-warranty-certificate.pdf",
    notes:
      "10-year commercial warranty. Slip-resistant to EN 13845. Use only approved Tarkett cleaning products.",
  },
];

const bristolMaintenance: MaintenanceSystem[] = [
  {
    systemId: "bhh-sys-fire",
    systemType: "fire-alarm",
    systemDisplayName: "Fire Alarm & Detection System",
    installationDate: "2024-01-10",
    lastServiceDate: "2024-07-10",
    commissioningCertificate: "bristol-fire-alarm-commissioning.pdf",
    systemDrawings: ["bristol-fire-detection-layout.pdf"],
    maintenanceFrequency: "Bi-annual inspection + annual full service",
    nextServiceDueDate: "2025-01-10",
    maintenanceNotes:
      "HTM 05-03 compliant healthcare fire detection. Hochiki addressable system. L1 category covering all areas. PEEP procedures posted on each floor.",
    recommendedServiceProviders: [
      {
        providerId: "sp-bhh-fire-1",
        companyName: "Westelec Fire & Security",
        contactName: "Paul Simmons",
        phoneNumber: "01173 456 789",
        emailAddress: "p.simmons@westelec.co.uk",
        specialisation: "Healthcare fire detection systems",
      },
    ],
  },
  {
    systemId: "bhh-sys-eml",
    systemType: "emergency-lighting",
    systemDisplayName: "Emergency Lighting System",
    installationDate: "2024-01-15",
    lastServiceDate: "2024-07-15",
    commissioningCertificate: "bristol-emergency-lighting-cert.pdf",
    systemDrawings: ["bristol-emergency-lighting-layout.pdf"],
    maintenanceFrequency: "Monthly flick test + annual full duration test",
    nextServiceDueDate: "2025-01-15",
    maintenanceNotes:
      "3-hour rated self-contained luminaires throughout. Healthcare category. Test results entered in maintenance register at reception. Annual test by NICEIC-registered contractor.",
    recommendedServiceProviders: [
      {
        providerId: "sp-bhh-eml-1",
        companyName: "Thorn Lighting Services",
        contactName: "Anna Kovacs",
        phoneNumber: "0800 999 1234",
        emailAddress: "service@thornlighting.com",
        specialisation: "Emergency & general lighting maintenance",
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// Export — keyed by project ID
// ---------------------------------------------------------------------------

export const adminProjectDataMap: Record<string, AdminProjectData> = {
  "proj-canary-wharf-hq": {
    projectId: "proj-canary-wharf-hq",
    photos: canaryWharfPhotos,
    emails: canaryWharfEmails,
    complianceDocs: canaryWharfComplianceDocs,
    warranties: canaryWharfWarranties,
    maintenanceSystems: canaryWharfMaintenance,
  },
  "proj-mayfair-boutique-hotel": {
    projectId: "proj-mayfair-boutique-hotel",
    photos: mayfairPhotos,
    emails: [],
    complianceDocs: mayfairComplianceDocs,
    warranties: mayfairWarranties,
    maintenanceSystems: [],
  },
  "proj-bristol-healthcare-hub": {
    projectId: "proj-bristol-healthcare-hub",
    photos: [],
    emails: [],
    complianceDocs: bristolComplianceDocs,
    warranties: bristolWarranties,
    maintenanceSystems: bristolMaintenance,
  },
};

/** Returns admin project data or a safe empty shell for projects without extended data. */
export function getAdminProjectData(projectId: string): AdminProjectData {
  return (
    adminProjectDataMap[projectId] ?? {
      projectId,
      photos: [],
      emails: [],
      complianceDocs: [],
      warranties: [],
      maintenanceSystems: [],
    }
  );
}
