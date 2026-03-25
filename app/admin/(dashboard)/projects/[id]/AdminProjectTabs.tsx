"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import type {
  AdminProjectData,
  ComplianceDocument,
  InteriorProject,
  MaintenanceSystem,
  ProjectEmail,
  ProjectPhoto,
  WarrantyItem,
} from "@/types/pelham";
import { GanttChart } from "@/components/GanttChart";
import { getProjectSchedule } from "@/data/pelhamScheduleData";

type TabId = "overview" | "schedule" | "photos" | "emails" | "compliance" | "warranties" | "maintenance";

const TABS: { id: TabId; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "schedule", label: "Schedule" },
  { id: "photos", label: "Photos" },
  { id: "emails", label: "Emails" },
  { id: "compliance", label: "Compliance" },
  { id: "warranties", label: "Warranties" },
  { id: "maintenance", label: "Maintenance" },
];

interface AdminProjectTabsProps {
  project: InteriorProject;
  adminData: AdminProjectData;
}

export function AdminProjectTabs({ project, adminData }: AdminProjectTabsProps) {
  const [activeTab, setActiveTab] = useState<TabId>("overview");

  return (
    <div className="flex flex-col space-y-0 p-6 lg:p-8">
      {/* Back link */}
      <div className="mb-4">
        <Link
          href="/admin"
          className="text-xs text-zinc-500 transition-colors hover:text-zinc-300"
        >
          ← All Projects
        </Link>
      </div>

      {/* Project header */}
      <div className="mb-6 flex items-start gap-5">
        <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-xl">
          <Image
            src={project.heroImageUrl}
            alt={project.projectTitle}
            fill
            className="object-cover"
            sizes="96px"
          />
        </div>
        <div>
          <h1 className="text-xl font-bold text-white">{project.projectTitle}</h1>
          <p className="mt-0.5 text-sm text-zinc-400">
            {project.clientOrganisationName} &middot;{" "}
            {project.projectLocationCity}, {project.projectLocationCountry}
          </p>
        </div>
      </div>

      {/* Tab bar */}
      <div className="mb-6 flex flex-wrap gap-1 overflow-x-auto rounded-xl border border-white/10 bg-zinc-900 p-1">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
              activeTab === tab.id
                ? "bg-lime-400 text-zinc-900"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      {activeTab === "overview" && <OverviewTab project={project} />}
      {activeTab === "schedule" && (
        <ScheduleTab projectId={project.projectId} />
      )}
      {activeTab === "photos" && (
        <PhotosTab photos={adminData.photos} projectId={project.projectId} />
      )}
      {activeTab === "emails" && <EmailsTab emails={adminData.emails} />}
      {activeTab === "compliance" && (
        <ComplianceTab docs={adminData.complianceDocs} />
      )}
      {activeTab === "warranties" && (
        <WarrantiesTab warranties={adminData.warranties} />
      )}
      {activeTab === "maintenance" && (
        <MaintenanceTab systems={adminData.maintenanceSystems} />
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Schedule tab
// ---------------------------------------------------------------------------

function ScheduleTab({ projectId }: { projectId: string }) {
  const schedule = getProjectSchedule(projectId);
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xs font-semibold uppercase tracking-widest text-lime-400">
          Horizon
        </h2>
        <p className="mt-1 text-sm text-zinc-400">
          Project timeline — {schedule.tasks.length} actions &amp; milestones.
        </p>
      </div>
      <GanttChart tasks={schedule.tasks} />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Overview tab
// ---------------------------------------------------------------------------

function OverviewTab({ project }: { project: InteriorProject }) {
  const specItems = [
    { label: "Client", value: project.clientOrganisationName },
    { label: "Sector", value: project.projectSector.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) },
    { label: "Location", value: `${project.projectLocationCity}, ${project.projectLocationCountry}` },
    { label: "Floor Area", value: `${project.totalFloorAreaSquareMetres.toLocaleString()} m²` },
    { label: "Year", value: String(project.projectCompletionYear) },
    { label: "Status", value: project.projectCompletionStatus.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) },
  ];

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6">
        <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-lime-400">
          Project Summary
        </h2>
        <p className="text-sm leading-7 text-zinc-300">{project.projectSummaryText}</p>
      </div>
      <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6">
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-lime-400">
          Specifications
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {specItems.map((item) => (
            <div key={item.label} className="flex flex-col gap-0.5">
              <span className="text-xs text-zinc-500">{item.label}</span>
              <span className="text-sm font-medium text-white">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6">
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-lime-400">
          Key Highlights
        </h2>
        <ul className="grid gap-2 sm:grid-cols-2">
          {project.projectHighlights.map((h, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-zinc-300">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-lime-400" />
              {h}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Photos tab
// ---------------------------------------------------------------------------

function PhotosTab({
  photos,
  projectId,
}: {
  photos: ProjectPhoto[];
  projectId: string;
}) {
  const [localPhotos, setLocalPhotos] = useState<ProjectPhoto[]>(photos);
  const [newCaption, setNewCaption] = useState("");
  const [newAlbum, setNewAlbum] = useState("");
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const objectUrl = URL.createObjectURL(file);
    setPreviewUrl(objectUrl);
  }

  function handleAddPhoto() {
    if (!previewUrl) return;
    const newPhoto: ProjectPhoto = {
      photoId: `${projectId}-photo-${Date.now()}`,
      imageUrl: previewUrl,
      caption: newCaption || "No caption",
      uploadedDate: new Date().toISOString().split("T")[0],
      uploadedBy: "Admin",
      albumName: newAlbum || "Uncategorised",
    };
    setLocalPhotos((prev) => [newPhoto, ...prev]);
    setPreviewUrl(null);
    setNewCaption("");
    setNewAlbum("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  return (
    <div className="space-y-6">
      {/* Upload panel */}
      <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6">
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-lime-400">
          Upload Photos
        </h2>
        <div className="space-y-4">
          <div
            onClick={() => fileInputRef.current?.click()}
            className="flex cursor-pointer flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-white/10 bg-zinc-800/50 py-10 transition-colors hover:border-lime-400/30 hover:bg-zinc-800"
          >
            {previewUrl ? (
              <div className="relative h-32 w-48 overflow-hidden rounded-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={previewUrl}
                  alt="Preview"
                  className="h-full w-full object-cover"
                />
              </div>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-zinc-600"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
                <p className="text-sm text-zinc-500">
                  Click to select images (PNG, JPG, WEBP)
                </p>
              </>
            )}
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={handleFileChange}
          />
          <div className="grid gap-3 sm:grid-cols-2">
            <input
              type="text"
              placeholder="Caption (e.g. Week 14 progress)"
              value={newCaption}
              onChange={(e) => setNewCaption(e.target.value)}
              className="rounded-xl border border-white/10 bg-zinc-800 px-4 py-2.5 text-sm text-white placeholder-zinc-600 outline-none focus:border-lime-400/50"
            />
            <input
              type="text"
              placeholder="Album name (e.g. Joinery)"
              value={newAlbum}
              onChange={(e) => setNewAlbum(e.target.value)}
              className="rounded-xl border border-white/10 bg-zinc-800 px-4 py-2.5 text-sm text-white placeholder-zinc-600 outline-none focus:border-lime-400/50"
            />
          </div>
          <button
            type="button"
            onClick={handleAddPhoto}
            disabled={!previewUrl}
            className="w-full rounded-full bg-lime-400 py-2.5 text-sm font-semibold text-zinc-900 transition-all hover:bg-lime-300 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Add Photo to Project
          </button>
        </div>
      </div>

      {/* Photo gallery */}
      {localPhotos.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {localPhotos.map((photo) => (
            <div
              key={photo.photoId}
              className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900"
            >
              <div className="relative h-44">
                <Image
                  src={photo.imageUrl}
                  alt={photo.caption}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  unoptimized={photo.imageUrl.startsWith("blob:")}
                />
              </div>
              <div className="p-4">
                <p className="text-sm font-medium text-zinc-200">{photo.caption}</p>
                <div className="mt-1 flex items-center justify-between text-xs text-zinc-500">
                  <span>{photo.albumName}</span>
                  <span>{photo.uploadedDate}</span>
                </div>
                <p className="mt-0.5 text-xs text-zinc-600">
                  By {photo.uploadedBy}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-zinc-900 py-16 text-center">
          <p className="text-sm text-zinc-500">No photos uploaded yet.</p>
        </div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Emails tab
// ---------------------------------------------------------------------------

type ConnectionState = "disconnected" | "connecting" | "connected";

function EmailsTab({ emails }: { emails: ProjectEmail[] }) {
  const [gmailState, setGmailState] = useState<ConnectionState>("disconnected");
  const [outlookState, setOutlookState] = useState<ConnectionState>(
    emails.some((e) => e.source === "outlook") ? "connected" : "disconnected"
  );
  const [attachedEmails, setAttachedEmails] = useState<Set<string>>(
    new Set(emails.map((e) => e.emailId))
  );

  function connectProvider(provider: "gmail" | "outlook") {
    if (provider === "gmail") {
      setGmailState("connecting");
      setTimeout(() => setGmailState("connected"), 1200);
    } else {
      setOutlookState("connecting");
      setTimeout(() => setOutlookState("connected"), 1200);
    }
  }

  function toggleAttach(emailId: string) {
    setAttachedEmails((prev) => {
      const next = new Set(prev);
      if (next.has(emailId)) next.delete(emailId);
      else next.add(emailId);
      return next;
    });
  }

  const providerStateClass = (state: ConnectionState) =>
    state === "connected"
      ? "border-lime-400/30 bg-lime-400/10 text-lime-400"
      : "border-white/10 bg-zinc-800 text-zinc-300";

  return (
    <div className="space-y-6">
      {/* Provider connection cards */}
      <div className="grid gap-4 sm:grid-cols-2">
        {(["outlook", "gmail"] as const).map((provider) => {
          const state = provider === "gmail" ? gmailState : outlookState;
          return (
            <div
              key={provider}
              className={`flex items-center justify-between rounded-2xl border p-5 transition-all ${providerStateClass(state)}`}
            >
              <div>
                <p className="text-sm font-semibold capitalize">
                  {provider === "gmail" ? "Google Gmail" : "Microsoft Outlook"}
                </p>
                <p className="text-xs opacity-70">
                  {state === "connected"
                    ? "Connected — emails syncing"
                    : state === "connecting"
                    ? "Connecting…"
                    : "Not connected"}
                </p>
              </div>
              {state === "connected" ? (
                <span className="rounded-full bg-lime-400/20 px-3 py-1 text-xs font-medium text-lime-400">
                  ✓ Active
                </span>
              ) : (
                <button
                  type="button"
                  onClick={() => connectProvider(provider)}
                  disabled={state === "connecting"}
                  className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white transition-all hover:bg-white/20 disabled:opacity-60"
                >
                  {state === "connecting" ? "Connecting…" : "Connect"}
                </button>
              )}
            </div>
          );
        })}
      </div>

      {/* Email list */}
      {emails.length > 0 ? (
        <div className="flex flex-col gap-3">
          {emails.map((email) => {
            const isAttached = attachedEmails.has(email.emailId);
            return (
              <div
                key={email.emailId}
                className={`rounded-2xl border p-5 transition-all ${
                  isAttached ? "border-lime-400/20 bg-zinc-900" : "border-white/5 bg-zinc-900/60"
                }`}
              >
                <div className="mb-2 flex items-start justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span
                        className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-medium uppercase ${
                          email.source === "gmail"
                            ? "bg-red-400/10 text-red-400"
                            : "bg-blue-400/10 text-blue-400"
                        }`}
                      >
                        {email.source}
                      </span>
                      {!email.isRead && (
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-lime-400" />
                      )}
                    </div>
                    <p className="mt-1.5 text-sm font-medium text-white">
                      {email.subject}
                    </p>
                    <p className="text-xs text-zinc-500">
                      {email.fromAddress} · {email.receivedDate}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => toggleAttach(email.emailId)}
                    className={`shrink-0 rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                      isAttached
                        ? "bg-lime-400/20 text-lime-400 hover:bg-red-400/10 hover:text-red-400"
                        : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white"
                    }`}
                  >
                    {isAttached ? "✓ Attached" : "Attach"}
                  </button>
                </div>
                <p className="text-xs leading-5 text-zinc-400">{email.bodySnippet}</p>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-zinc-900 py-16 text-center">
          <p className="text-sm text-zinc-500">
            Connect a mailbox to pull emails for this project.
          </p>
        </div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Compliance tab
// ---------------------------------------------------------------------------

const docTypeColour: Record<string, string> = {
  certificate: "text-blue-400 bg-blue-400/10",
  invoice: "text-emerald-400 bg-emerald-400/10",
  compliance: "text-amber-400 bg-amber-400/10",
  report: "text-purple-400 bg-purple-400/10",
  "warranty-cert": "text-zinc-300 bg-zinc-700/50",
};

function ComplianceTab({ docs }: { docs: ComplianceDocument[] }) {
  const [expandedDoc, setExpandedDoc] = useState<string | null>(null);

  return (
    <div className="space-y-4">
      {/* Upload row */}
      <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-zinc-900 px-5 py-4">
        <p className="text-sm text-zinc-400">
          {docs.length} document{docs.length !== 1 ? "s" : ""}
        </p>
        <button
          type="button"
          className="rounded-full border border-white/10 px-4 py-1.5 text-xs font-medium text-zinc-300 transition-all hover:border-lime-400/40 hover:text-lime-400"
        >
          + Upload Document
        </button>
      </div>

      {docs.length > 0 ? (
        <div className="flex flex-col gap-3">
          {docs.map((doc) => (
            <div
              key={doc.docId}
              className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900"
            >
              <div
                className="flex cursor-pointer items-center justify-between px-5 py-4 hover:bg-zinc-800/50"
                onClick={() =>
                  setExpandedDoc((prev) => (prev === doc.docId ? null : doc.docId))
                }
              >
                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="shrink-0 text-zinc-500"
                    aria-hidden="true"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-white">{doc.docTitle}</p>
                    <p className="text-xs text-zinc-500">
                      v{doc.version} · {doc.uploadedDate} ·{" "}
                      {Math.round(doc.fileSizeKb / 100) / 10} MB
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      docTypeColour[doc.docType] ?? "text-zinc-400 bg-zinc-700/50"
                    }`}
                  >
                    {doc.docType}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={`shrink-0 text-zinc-500 transition-transform ${
                      expandedDoc === doc.docId ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </div>

              {expandedDoc === doc.docId && (
                <div className="border-t border-white/5 bg-zinc-800/30 px-5 py-4">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    Version History
                  </p>
                  {doc.versionHistory.length > 0 ? (
                    <ul className="space-y-2">
                      {doc.versionHistory.map((v, i) => (
                        <li key={i} className="flex items-start gap-3 text-xs">
                          <span className="mt-0.5 shrink-0 rounded bg-zinc-700 px-1.5 py-0.5 font-mono text-zinc-300">
                            v{v.version}
                          </span>
                          <span className="text-zinc-500">{v.uploadedDate}</span>
                          <span className="text-zinc-400">{v.changeNote}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-xs text-zinc-600">
                      No previous versions.
                    </p>
                  )}
                  <div className="mt-4 flex items-center gap-3">
                    <button
                      type="button"
                      className="rounded-lg border border-white/10 px-3 py-1.5 text-xs text-zinc-400 transition-all hover:border-lime-400/30 hover:text-lime-400"
                    >
                      Download v{doc.version}
                    </button>
                    <button
                      type="button"
                      className="rounded-lg border border-white/10 px-3 py-1.5 text-xs text-zinc-400 transition-all hover:border-white/20 hover:text-white"
                    >
                      Upload new version
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-zinc-900 py-16 text-center">
          <p className="text-sm text-zinc-500">No compliance documents yet.</p>
        </div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Warranties tab
// ---------------------------------------------------------------------------

// Snapshot the current time once at module scope so it is stable across renders.
const NOW_MS = Date.now();

function daysFromNow(isoDate: string) {
  return Math.ceil(
    (new Date(isoDate).getTime() - NOW_MS) / (1000 * 60 * 60 * 24)
  );
}

function WarrantiesTab({ warranties }: { warranties: WarrantyItem[] }) {
  function daysUntilExpiry(expiryDate: string) {
    return daysFromNow(expiryDate);
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-zinc-900 px-5 py-4">
        <p className="text-sm text-zinc-400">
          {warranties.length} item{warranties.length !== 1 ? "s" : ""}
        </p>
        <button
          type="button"
          className="rounded-full border border-white/10 px-4 py-1.5 text-xs font-medium text-zinc-300 transition-all hover:border-lime-400/40 hover:text-lime-400"
        >
          + Add Warranty
        </button>
      </div>

      {warranties.length > 0 ? (
        <div className="flex flex-col gap-3">
          {warranties.map((item) => {
            const days = daysUntilExpiry(item.warrantyExpiryDate);
            const isExpiringSoon = days > 0 && days < 180;
            const isExpired = days <= 0;
            return (
              <div
                key={item.warrantyId}
                className="rounded-2xl border border-white/10 bg-zinc-900 p-5"
              >
                <div className="mb-3 flex items-start justify-between">
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {item.productName}
                    </p>
                    <p className="text-xs text-zinc-500">
                      {item.supplierName} · Model: {item.modelNumber}
                    </p>
                  </div>
                  <span
                    className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      isExpired
                        ? "bg-red-400/10 text-red-400"
                        : isExpiringSoon
                        ? "bg-amber-400/10 text-amber-400"
                        : "bg-emerald-400/10 text-emerald-400"
                    }`}
                  >
                    {isExpired
                      ? "Expired"
                      : isExpiringSoon
                      ? `${days}d remaining`
                      : "Active"}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs sm:grid-cols-4">
                  <div>
                    <span className="text-zinc-500">Installed</span>
                    <p className="mt-0.5 text-zinc-300">{item.installationDate}</p>
                  </div>
                  <div>
                    <span className="text-zinc-500">Expires</span>
                    <p className="mt-0.5 text-zinc-300">{item.warrantyExpiryDate}</p>
                  </div>
                  <div className="col-span-2">
                    <span className="text-zinc-500">Proof document</span>
                    <p className="mt-0.5 text-lime-400">{item.proofDocumentName}</p>
                  </div>
                </div>
                {item.notes && (
                  <p className="mt-3 text-xs leading-5 text-zinc-500">{item.notes}</p>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-zinc-900 py-16 text-center">
          <p className="text-sm text-zinc-500">No warranty records yet.</p>
        </div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Maintenance tab
// ---------------------------------------------------------------------------

const systemTypeLabel: Record<string, string> = {
  "fire-alarm": "Fire Alarm",
  bms: "BMS",
  "emergency-lighting": "Emergency Lighting",
  "sprinkler-system": "Sprinkler System",
  ups: "UPS",
  generator: "Generator",
  "access-control": "Access Control",
  cctv: "CCTV",
  hvac: "HVAC",
  "general-maintenance": "General Maintenance",
};

function MaintenanceTab({ systems }: { systems: MaintenanceSystem[] }) {
  const [expandedSystem, setExpandedSystem] = useState<string | null>(null);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-zinc-900 px-5 py-4">
        <p className="text-sm text-zinc-400">
          {systems.length} system{systems.length !== 1 ? "s" : ""}
        </p>
        <button
          type="button"
          className="rounded-full border border-white/10 px-4 py-1.5 text-xs font-medium text-zinc-300 transition-all hover:border-lime-400/40 hover:text-lime-400"
        >
          + Add System
        </button>
      </div>

      {systems.length > 0 ? (
        <div className="flex flex-col gap-3">
          {systems.map((system) => (
            <MaintenanceSystemCard
              key={system.systemId}
              system={system}
              isExpanded={expandedSystem === system.systemId}
              onToggle={() =>
                setExpandedSystem((prev) =>
                  prev === system.systemId ? null : system.systemId
                )
              }
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-zinc-900 py-16 text-center">
          <p className="text-sm text-zinc-500">
            No maintenance systems recorded for this project.
          </p>
          <p className="text-xs text-zinc-600">
            Add systems using the button above.
          </p>
        </div>
      )}
    </div>
  );
}

function MaintenanceSystemCard({
  system,
  isExpanded,
  onToggle,
}: {
  system: MaintenanceSystem;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900">
      <div
        className="flex cursor-pointer items-center justify-between px-5 py-4 hover:bg-zinc-800/40"
        onClick={onToggle}
      >
        <div className="flex items-center gap-3">
          <span className="rounded-lg bg-lime-400/10 px-2.5 py-1 text-xs font-semibold text-lime-400">
            {systemTypeLabel[system.systemType] ?? system.systemType}
          </span>
          <div>
            <p className="text-sm font-medium text-white">
              {system.systemDisplayName}
            </p>
            <p className="text-xs text-zinc-500">
              Next service: {system.nextServiceDueDate} · {system.maintenanceFrequency}
            </p>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`shrink-0 text-zinc-500 transition-transform ${
            isExpanded ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>

      {isExpanded && (
        <div className="space-y-5 border-t border-white/5 bg-zinc-800/30 px-5 py-5">
          {/* Certificates & Drawings */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Commissioning Certificate
              </p>
              {system.commissioningCertificate ? (
                <span className="text-xs text-lime-400">
                  📄 {system.commissioningCertificate}
                </span>
              ) : (
                <span className="text-xs text-zinc-600">Not uploaded</span>
              )}
            </div>
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                System Drawings / Plans
              </p>
              {system.systemDrawings.length > 0 ? (
                <ul className="space-y-1">
                  {system.systemDrawings.map((d, i) => (
                    <li key={i} className="text-xs text-lime-400">
                      📄 {d}
                    </li>
                  ))}
                </ul>
              ) : (
                <span className="text-xs text-zinc-600">No drawings uploaded</span>
              )}
            </div>
          </div>

          {/* Service history */}
          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Installed
              </p>
              <p className="text-sm text-zinc-300">{system.installationDate}</p>
            </div>
            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Last Serviced
              </p>
              <p className="text-sm text-zinc-300">{system.lastServiceDate}</p>
            </div>
            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Next Due
              </p>
              <p className="text-sm font-medium text-amber-400">
                {system.nextServiceDueDate}
              </p>
            </div>
          </div>

          {/* Maintenance notes */}
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Notes & Requirements
            </p>
            <p className="text-sm leading-6 text-zinc-400">
              {system.maintenanceNotes}
            </p>
          </div>

          {/* Service providers */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Recommended Service Providers
            </p>
            <div className="flex flex-col gap-2">
              {system.recommendedServiceProviders.map((sp) => (
                <div
                  key={sp.providerId}
                  className="rounded-xl border border-white/5 bg-zinc-800 px-4 py-3"
                >
                  <p className="text-sm font-medium text-white">
                    {sp.companyName}
                  </p>
                  <p className="text-xs text-zinc-500">{sp.specialisation}</p>
                  <div className="mt-2 flex flex-wrap gap-4 text-xs">
                    <span className="text-zinc-400">
                      <span className="text-zinc-600">Contact: </span>
                      {sp.contactName}
                    </span>
                    <span className="text-lime-400">{sp.phoneNumber}</span>
                    <span className="text-lime-400">{sp.emailAddress}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-2 pt-1">
            <button
              type="button"
              className="rounded-lg border border-white/10 px-3 py-1.5 text-xs text-zinc-400 transition-all hover:border-lime-400/30 hover:text-lime-400"
            >
              Upload Certificate
            </button>
            <button
              type="button"
              className="rounded-lg border border-white/10 px-3 py-1.5 text-xs text-zinc-400 transition-all hover:border-white/20 hover:text-white"
            >
              Upload Drawing
            </button>
            <button
              type="button"
              className="rounded-lg border border-white/10 px-3 py-1.5 text-xs text-zinc-400 transition-all hover:border-white/20 hover:text-white"
            >
              Update Schedule
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
