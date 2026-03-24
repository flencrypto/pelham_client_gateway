"use client";

import React, { useState } from "react";
import { getAdminProjectData } from "@/data/pelhamAdminData";
import type { MaintenanceSystem } from "@/types/pelham";

const DEMO_SYSTEMS = getAdminProjectData("proj-canary-wharf-hq").maintenanceSystems;

const NOW_MS = Date.now();

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

function daysUntilService(nextServiceDate: string) {
  return Math.ceil(
    (new Date(nextServiceDate).getTime() - NOW_MS) / (1000 * 60 * 60 * 24)
  );
}

function ServiceDueBadge({ nextServiceDueDate }: { nextServiceDueDate: string }) {
  const days = daysUntilService(nextServiceDueDate);
  if (days <= 0)
    return (
      <span className="rounded-full bg-red-400/10 px-2.5 py-0.5 text-xs font-medium text-red-400">
        Overdue
      </span>
    );
  if (days < 90)
    return (
      <span className="rounded-full bg-amber-400/10 px-2.5 py-0.5 text-xs font-medium text-amber-400">
        Due in {days}d
      </span>
    );
  return (
    <span className="rounded-full bg-emerald-400/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
      {nextServiceDueDate}
    </span>
  );
}

function SystemCard({
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
      {/* Collapsed header */}
      <div
        className="flex cursor-pointer items-center justify-between px-5 py-4 hover:bg-zinc-800/40"
        onClick={onToggle}
        role="button"
        aria-expanded={isExpanded}
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
              {system.maintenanceFrequency}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <ServiceDueBadge nextServiceDueDate={system.nextServiceDueDate} />
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
      </div>

      {/* Expanded detail */}
      {isExpanded && (
        <div className="space-y-5 border-t border-white/5 bg-zinc-800/30 px-5 py-5">
          {/* Cert & Drawings */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Commissioning Certificate
              </p>
              {system.commissioningCertificate ? (
                <p className="text-xs text-lime-400">
                  📄 {system.commissioningCertificate}
                </p>
              ) : (
                <p className="text-xs text-zinc-600">Not yet uploaded</p>
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
                <p className="text-xs text-zinc-600">No drawings uploaded</p>
              )}
            </div>
          </div>

          {/* Schedule */}
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
                Next Service Due
              </p>
              <p className="text-sm font-medium text-amber-400">
                {system.nextServiceDueDate}
              </p>
            </div>
          </div>

          {/* Notes */}
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Maintenance Notes &amp; Legal Requirements
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
                  <p className="mb-2 text-xs text-zinc-500">{sp.specialisation}</p>
                  <div className="flex flex-wrap gap-4 text-xs">
                    <span className="text-zinc-400">
                      <span className="text-zinc-600">Contact: </span>
                      {sp.contactName}
                    </span>
                    <a
                      href={`tel:${sp.phoneNumber}`}
                      className="text-lime-400 hover:text-lime-300 transition-colors"
                    >
                      {sp.phoneNumber}
                    </a>
                    <a
                      href={`mailto:${sp.emailAddress}`}
                      className="text-lime-400 hover:text-lime-300 transition-colors"
                    >
                      {sp.emailAddress}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function PortalMaintenancePage() {
  const [expandedSystem, setExpandedSystem] = useState<string | null>(null);
  const systems = DEMO_SYSTEMS;

  const overdue = systems.filter(
    (s) => daysUntilService(s.nextServiceDueDate) <= 0
  );
  const dueSoon = systems.filter((s) => {
    const d = daysUntilService(s.nextServiceDueDate);
    return d > 0 && d < 90;
  });

  return (
    <div className="space-y-8 p-6 lg:p-8">
      <div>
        <h1 className="text-2xl font-bold text-white">
          H&amp;S &amp; Maintenance
        </h1>
        <p className="mt-1 text-sm text-zinc-400">
          All installed systems, maintenance schedules, and legal compliance
          requirements for your premises.
        </p>
      </div>

      {/* Summary strip */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: "Systems", count: systems.length, colour: "text-white" },
          { label: "Due Soon", count: dueSoon.length, colour: "text-amber-400" },
          { label: "Overdue", count: overdue.length, colour: "text-red-400" },
        ].map((s) => (
          <div
            key={s.label}
            className="rounded-2xl border border-white/10 bg-zinc-900 p-4"
          >
            <p className={`text-2xl font-bold ${s.colour}`}>{s.count}</p>
            <p className="mt-0.5 text-xs text-zinc-400">{s.label}</p>
          </div>
        ))}
      </div>

      {systems.length > 0 ? (
        <div className="flex flex-col gap-3">
          {systems.map((system) => (
            <SystemCard
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
        </div>
      )}

      {/* Note for residential */}
      <div className="rounded-xl border border-white/5 bg-zinc-900/50 px-5 py-4">
        <p className="text-xs text-zinc-600">
          Showing H&amp;S and maintenance obligations based on your installed
          systems. Contact your Pelham project manager to add additional systems or
          update service records.
        </p>
      </div>
    </div>
  );
}
