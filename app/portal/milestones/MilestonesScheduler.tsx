"use client";

import React, { useMemo, useState } from "react";

const MILESTONES = [
  { title: "Design Sign-off", targetDate: "2024-08-15", isCompleted: true, notes: "Full design package approved by client." },
  { title: "Demolition & Strip-out", targetDate: "2024-08-30", isCompleted: true, notes: "Completed on time." },
  { title: "Structural Works", targetDate: "2024-09-20", isCompleted: true, notes: "Certified by structural engineer." },
  { title: "First Fix MEP", targetDate: "2024-10-11", isCompleted: true, notes: "Mechanical, electrical and plumbing first fix complete." },
  { title: "Plastering & Screeding", targetDate: "2024-10-25", isCompleted: true, notes: "All areas completed." },
  { title: "Second Fix MEP", targetDate: "2024-11-08", isCompleted: true, notes: "Complete." },
  { title: "Joinery Installation", targetDate: "2024-11-15", isCompleted: true, notes: "Bespoke units installed across all rooms." },
  { title: "Flooring", targetDate: "2024-11-22", isCompleted: true, notes: "Stone and hardwood floors installed." },
  { title: "Painting & Decorating", targetDate: "2024-11-29", isCompleted: true, notes: "First coats complete." },
  { title: "Bathroom Tiling", targetDate: "2024-11-29", isCompleted: true, notes: "All suites complete." },
  { title: "Kitchen Installation", targetDate: "2024-12-12", isCompleted: false, notes: "Scheduled for 12 Dec." },
  { title: "FF&E Delivery", targetDate: "2024-12-20", isCompleted: false, notes: "Final consignment confirmed W/C 2 Dec." },
  { title: "Snagging Inspection", targetDate: "2025-01-06", isCompleted: false, notes: "Scheduled for 6 Jan." },
  { title: "Handover", targetDate: "2025-01-20", isCompleted: false, notes: "Target: 20 Jan 2025." },
];

const MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function parseDate(iso: string) {
  return new Date(iso + "T00:00:00");
}

function diffDays(a: Date, b: Date) {
  return Math.round((b.getTime() - a.getTime()) / 86_400_000);
}

export function MilestonesScheduler() {
  const [view, setView] = useState<"timeline" | "list">("timeline");

  const completedCount = MILESTONES.filter((m) => m.isCompleted).length;
  const pct = Math.round((completedCount / MILESTONES.length) * 100);

  // Timeline geometry
  const dates = useMemo(() => MILESTONES.map((m) => parseDate(m.targetDate)), []);
  const windowStart = useMemo(() => {
    const d = new Date(dates[0]);
    d.setDate(1);
    return d;
  }, [dates]);
  const windowEnd = useMemo(() => {
    const last = dates[dates.length - 1];
    const d = new Date(last.getFullYear(), last.getMonth() + 1, 1);
    return d;
  }, [dates]);
  const windowDays = diffDays(windowStart, windowEnd);

  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);
  const todayPct = useMemo(() => {
    if (today < windowStart || today > windowEnd) return null;
    return (diffDays(windowStart, today) / windowDays) * 100;
  }, [today, windowStart, windowEnd, windowDays]);

  // Month headers
  const monthHeaders = useMemo(() => {
    const headers: { label: string; leftPct: number; widthPct: number }[] = [];
    let cursor = new Date(windowStart);
    while (cursor < windowEnd) {
      const nextMonth = new Date(cursor.getFullYear(), cursor.getMonth() + 1, 1);
      const segEnd = nextMonth > windowEnd ? windowEnd : nextMonth;
      const leftPct = (diffDays(windowStart, cursor) / windowDays) * 100;
      const widthPct = (diffDays(cursor, segEnd) / windowDays) * 100;
      headers.push({
        label: `${MONTH_NAMES[cursor.getMonth()]} '${String(cursor.getFullYear()).slice(2)}`,
        leftPct,
        widthPct,
      });
      cursor = nextMonth;
    }
    return headers;
  }, [windowStart, windowEnd, windowDays]);

  return (
    <div className="space-y-6 p-6 lg:p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Milestones</h1>
          <p className="mt-1 text-sm text-zinc-400">
            {completedCount} of {MILESTONES.length} milestones complete.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="rounded-full border border-lime-400/30 bg-lime-400/10 px-3 py-1.5 text-xs font-semibold text-lime-400">
            {pct}% Complete
          </span>
          {/* View toggle */}
          <div className="flex overflow-hidden rounded-lg border border-white/10">
            <button
              type="button"
              onClick={() => setView("timeline")}
              className={`px-3 py-1.5 text-xs font-medium transition-all ${
                view === "timeline"
                  ? "bg-lime-400 text-zinc-900"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Timeline
            </button>
            <button
              type="button"
              onClick={() => setView("list")}
              className={`px-3 py-1.5 text-xs font-medium transition-all ${
                view === "list"
                  ? "bg-lime-400 text-zinc-900"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              List
            </button>
          </div>
        </div>
      </div>

      {/* Overall progress bar */}
      <div className="rounded-2xl border border-white/10 bg-zinc-900 p-4">
        <div className="mb-2 flex items-center justify-between text-xs text-zinc-400">
          <span>Overall progress</span>
          <span className="font-semibold text-white">{pct}%</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-800">
          <div
            className="h-full rounded-full bg-lime-400 transition-all duration-700"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* TIMELINE VIEW                                                        */}
      {/* ------------------------------------------------------------------ */}
      {view === "timeline" && (
        <div className="overflow-x-auto rounded-2xl border border-white/10 bg-zinc-900">
          <div className="min-w-[640px]">
            {/* Month header row */}
            <div className="relative flex h-9 border-b border-white/10">
              {monthHeaders.map((h) => (
                <div
                  key={h.label}
                  className="absolute top-0 flex h-full items-center justify-start border-r border-white/5 pl-2"
                  style={{ left: `${h.leftPct}%`, width: `${h.widthPct}%` }}
                >
                  <span className="truncate text-[11px] font-medium text-zinc-500">
                    {h.label}
                  </span>
                </div>
              ))}
              {/* Today label in header */}
              {todayPct !== null && (
                <div
                  className="pointer-events-none absolute top-0 flex h-full -translate-x-1/2 items-end pb-1"
                  style={{ left: `${todayPct}%` }}
                >
                  <span className="rounded bg-amber-400 px-1 text-[10px] font-bold text-zinc-900">
                    TODAY
                  </span>
                </div>
              )}
            </div>

            {/* Milestone rows */}
            {MILESTONES.map((m, i) => {
              const d = dates[i];
              const dotPct = (diffDays(windowStart, d) / windowDays) * 100;
              return (
                <div
                  key={i}
                  className="relative flex h-12 items-center border-b border-white/5"
                >
                  {/* Month grid lines */}
                  {monthHeaders.map((h) => (
                    <div
                      key={h.label}
                      className="absolute inset-y-0 w-px bg-white/5"
                      style={{ left: `${h.leftPct}%` }}
                    />
                  ))}

                  {/* Today line */}
                  {todayPct !== null && (
                    <div
                      className="absolute inset-y-0 w-px bg-amber-400/50"
                      style={{ left: `${todayPct}%` }}
                    />
                  )}

                  {/* Progress track: from start to this milestone */}
                  <div
                    className={`absolute top-1/2 h-0.5 -translate-y-1/2 ${m.isCompleted ? "bg-lime-400/40" : "bg-zinc-700"}`}
                    style={{ left: 0, width: `${dotPct}%` }}
                  />

                  {/* Diamond / circle marker */}
                  <div
                    className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${dotPct}%` }}
                  >
                    {m.isCompleted ? (
                      <div className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-lime-400 bg-lime-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="9"
                          height="9"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          className="text-zinc-900"
                          aria-hidden="true"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                    ) : (
                      <div className="h-4 w-4 rotate-45 border-2 border-sky-400 bg-zinc-900" />
                    )}
                  </div>

                  {/* Label — placed to the right of the dot if space, else left */}
                  <div
                    className="pointer-events-none absolute"
                    style={{
                      left: dotPct < 75 ? `calc(${dotPct}% + 14px)` : undefined,
                      right: dotPct >= 75 ? `calc(${100 - dotPct}% + 14px)` : undefined,
                      top: "50%",
                      transform: "translateY(-50%)",
                      maxWidth: "160px",
                    }}
                  >
                    <p
                      className={`truncate text-[11px] font-medium leading-tight ${
                        m.isCompleted ? "text-zinc-500 line-through" : "text-white"
                      }`}
                    >
                      {m.title}
                    </p>
                    <p className="text-[10px] text-zinc-600">{m.targetDate}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------------ */}
      {/* LIST VIEW                                                            */}
      {/* ------------------------------------------------------------------ */}
      {view === "list" && (
        <div className="flex flex-col gap-3">
          {MILESTONES.map((milestone, i) => (
            <div
              key={i}
              className="flex items-start gap-4 rounded-2xl border border-white/10 bg-zinc-900 px-5 py-4"
            >
              <span
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${
                  milestone.isCompleted
                    ? "border-lime-400 bg-lime-400"
                    : "border-zinc-600 bg-transparent"
                }`}
              >
                {milestone.isCompleted && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    className="text-zinc-900"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <p
                    className={`text-sm font-medium ${
                      milestone.isCompleted ? "text-zinc-400 line-through" : "text-white"
                    }`}
                  >
                    {milestone.title}
                  </p>
                  <span className="shrink-0 text-xs text-zinc-500">
                    {milestone.targetDate}
                  </span>
                </div>
                {milestone.notes && (
                  <p className="mt-0.5 text-xs text-zinc-500">{milestone.notes}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
