"use client";

import React, { useMemo, useRef, useState } from "react";
import type { ScheduleTask, TaskHealthStatus, TaskStatus } from "@/types/pelham";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function parseDate(iso: string): Date {
  return new Date(iso + "T00:00:00");
}

function addDays(date: Date, days: number): Date {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}

function addMonths(date: Date, months: number): Date {
  const d = new Date(date);
  d.setMonth(d.getMonth() + months);
  return d;
}

function diffDays(a: Date, b: Date): number {
  return Math.round((b.getTime() - a.getTime()) / 86_400_000);
}

const MONTH_NAMES = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

// ---------------------------------------------------------------------------
// Visual config maps
// ---------------------------------------------------------------------------

const HEALTH_CONFIG: Record<
  TaskHealthStatus,
  { label: string; bg: string; text: string; dot: string }
> = {
  "at-risk":  { label: "AT RISK",   bg: "bg-red-500/20",    text: "text-red-400",     dot: "bg-red-400/60" },
  critical:   { label: "CRITICAL",  bg: "bg-orange-500/20", text: "text-orange-400",  dot: "bg-orange-400/60" },
  healthy:    { label: "HEALTHY",   bg: "bg-emerald-500/20",text: "text-emerald-400", dot: "bg-emerald-400/60" },
  planned:    { label: "Planned",   bg: "bg-yellow-500/20", text: "text-yellow-400",  dot: "bg-yellow-400/60" },
  confirmed:  { label: "Confirmed", bg: "bg-sky-500/20",    text: "text-sky-400",     dot: "bg-sky-400/60" },
};

const STATUS_CONFIG: Record<
  TaskStatus,
  { label: string; text: string }
> = {
  "in-progress": { label: "IN PROGRESS", text: "text-sky-400" },
  open:          { label: "OPEN",        text: "text-zinc-400" },
  complete:      { label: "COMPLETE",    text: "text-emerald-400" },
  "on-hold":     { label: "ON HOLD",     text: "text-amber-400" },
};

type ViewMode = "7d" | "14d" | "30d" | "3mo" | "6mo" | "1yr";

const VIEW_DAYS: Record<ViewMode, number> = {
  "7d":  7,
  "14d": 14,
  "30d": 30,
  "3mo": 91,
  "6mo": 182,
  "1yr": 365,
};

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface TooltipState {
  task: ScheduleTask;
  x: number;
  y: number;
}

interface GanttChartProps {
  tasks: ScheduleTask[];
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function HealthBadge({ health }: { health: TaskHealthStatus }) {
  const cfg = HEALTH_CONFIG[health];
  return (
    <span
      className={`inline-block shrink-0 rounded px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${cfg.bg} ${cfg.text}`}
    >
      {cfg.label}
    </span>
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export function GanttChart({ tasks }: GanttChartProps) {
  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  const [viewMode, setViewMode] = useState<ViewMode>("1yr");
  const [tooltip, setTooltip] = useState<TooltipState | null>(null);
  const chartRef = useRef<HTMLDivElement>(null);

  // Compute window start: centre today in the visible range
  const windowDays = VIEW_DAYS[viewMode];

  const windowStart = useMemo(() => {
    const halfDays = Math.floor(windowDays / 2);
    return addDays(today, -halfDays);
  }, [today, windowDays]);

  const windowEnd = useMemo(
    () => addDays(windowStart, windowDays),
    [windowStart, windowDays],
  );

  // Build month column headers
  const monthHeaders = useMemo(() => {
    const headers: { label: string; leftPct: number; widthPct: number }[] = [];
    let cursor = new Date(windowStart.getFullYear(), windowStart.getMonth(), 1);
    while (cursor < windowEnd) {
      const nextMonth = addMonths(cursor, 1);
      const segStart = cursor < windowStart ? windowStart : cursor;
      const segEnd = nextMonth > windowEnd ? windowEnd : nextMonth;
      const leftPct = (diffDays(windowStart, segStart) / windowDays) * 100;
      const widthPct = (diffDays(segStart, segEnd) / windowDays) * 100;
      if (widthPct > 0) {
        headers.push({
          label: `${MONTH_NAMES[cursor.getMonth()]} '${String(cursor.getFullYear()).slice(2)}`,
          leftPct,
          widthPct,
        });
      }
      cursor = nextMonth;
    }
    return headers;
  }, [windowStart, windowEnd, windowDays]);

  // TODAY line position
  const todayPct = useMemo(() => {
    if (today < windowStart || today > windowEnd) return null;
    return (diffDays(windowStart, today) / windowDays) * 100;
  }, [today, windowStart, windowEnd, windowDays]);

  // Bar geometry per task
  function getBarGeometry(task: ScheduleTask) {
    const start = parseDate(task.startDate);
    const end = parseDate(task.endDate);

    const clampedStart = start < windowStart ? windowStart : start;
    const clampedEnd = end > windowEnd ? windowEnd : end;

    if (clampedStart >= windowEnd || clampedEnd <= windowStart) return null;

    const leftPct = (diffDays(windowStart, clampedStart) / windowDays) * 100;
    const widthPct =
      Math.max(0.3, diffDays(clampedStart, clampedEnd) / windowDays) * 100;

    return { leftPct, widthPct };
  }

  function handleBarMouseEnter(
    e: React.MouseEvent,
    task: ScheduleTask,
  ) {
    const rect = chartRef.current?.getBoundingClientRect();
    if (!rect) return;
    setTooltip({
      task,
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }

  function handleBarMouseLeave() {
    setTooltip(null);
  }

  const VIEW_BUTTONS: ViewMode[] = ["7d", "14d", "30d", "3mo", "6mo", "1yr"];

  const isMilestone = (task: ScheduleTask) => task.type === "milestone";

  if (tasks.length === 0) {
    return (
      <div className="flex min-h-48 items-center justify-center rounded-2xl border border-white/10 bg-zinc-900 text-sm text-zinc-500">
        No schedule data available for this project.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-semibold text-lime-400 mr-1">VIEW</span>
        {VIEW_BUTTONS.map((v) => (
          <button
            key={v}
            type="button"
            onClick={() => setViewMode(v)}
            className={`rounded-md px-3 py-1 text-xs font-semibold transition-all ${
              viewMode === v
                ? "bg-lime-400 text-zinc-900"
                : "border border-white/10 text-zinc-400 hover:border-white/30 hover:text-white"
            }`}
          >
            {v}
          </button>
        ))}
        <button
          type="button"
          onClick={() => setViewMode("1yr")}
          className="ml-1 rounded-md border border-amber-400/40 bg-amber-400/10 px-3 py-1 text-xs font-semibold text-amber-400 transition-all hover:bg-amber-400/20"
        >
          Today
        </button>
      </div>

      {/* Gantt grid */}
      <div
        ref={chartRef}
        className="relative overflow-x-auto rounded-2xl border border-white/10 bg-zinc-950"
      >
        {/* Sticky left panel + scrollable timeline */}
        <div className="flex min-w-[800px]">
          {/* Left panel */}
          <div className="z-10 w-56 shrink-0 border-r border-white/10 bg-zinc-950">
            {/* Header row */}
            <div className="flex h-10 items-center border-b border-white/10 px-3">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-zinc-500">
                Actions
                <span className="ml-1.5 rounded bg-zinc-800 px-1.5 py-0.5 text-[10px] text-zinc-400">
                  {tasks.length}
                </span>
              </span>
            </div>

            {/* Task name rows */}
            {tasks.map((task) => {
              const st = STATUS_CONFIG[task.status];
              const health = HEALTH_CONFIG[task.healthStatus];
              return (
                <div
                  key={task.taskId}
                  className="flex h-10 items-center gap-2 border-b border-white/5 px-3"
                >
                  <span className={`h-2 w-2 shrink-0 rounded-full ${HEALTH_CONFIG[task.healthStatus].dot}`} />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-xs font-medium text-white">
                      {task.title}
                    </p>
                    <p className={`text-[10px] font-semibold ${st.text}`}>
                      {st.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Timeline panel */}
          <div className="relative flex-1">
            {/* Month header row */}
            <div className="relative h-10 border-b border-white/10">
              {monthHeaders.map((h) => (
                <div
                  key={h.label}
                  className="absolute top-0 flex h-full items-center border-r border-white/5 pl-2"
                  style={{ left: `${h.leftPct}%`, width: `${h.widthPct}%` }}
                >
                  <span className="text-[11px] font-medium text-zinc-500 truncate">
                    {h.label}
                  </span>
                </div>
              ))}

              {/* TODAY label in header */}
              {todayPct !== null && (
                <div
                  className="absolute top-0 flex h-full -translate-x-1/2 flex-col items-center justify-end pb-1"
                  style={{ left: `${todayPct}%` }}
                >
                  <span className="rounded bg-amber-400 px-1 text-[10px] font-bold text-zinc-900">
                    TODAY
                  </span>
                </div>
              )}
            </div>

            {/* Grid lines + task bars */}
            {tasks.map((task) => {
              const geo = getBarGeometry(task);
              const isMs = isMilestone(task);

              return (
                <div
                  key={task.taskId}
                  className="relative h-10 border-b border-white/5"
                >
                  {/* Vertical grid lines per month */}
                  {monthHeaders.map((h) => (
                    <div
                      key={h.label}
                      className="absolute inset-y-0 w-px bg-white/5"
                      style={{ left: `${h.leftPct}%` }}
                    />
                  ))}

                  {/* TODAY vertical line */}
                  {todayPct !== null && (
                    <div
                      className="absolute inset-y-0 w-px bg-amber-400/60"
                      style={{ left: `${todayPct}%` }}
                    />
                  )}

                  {/* Task bar (or diamond for milestones) */}
                  {geo &&
                    (isMs ? (
                      /* Milestone: diamond */
                      <div
                        className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
                        style={{ left: `${geo.leftPct + geo.widthPct / 2}%` }}
                        onMouseEnter={(e) => handleBarMouseEnter(e, task)}
                        onMouseLeave={handleBarMouseLeave}
                      >
                        <div
                          className={`h-4 w-4 rotate-45 cursor-pointer transition-transform hover:scale-125 ${
                            task.status === "complete"
                              ? "bg-emerald-400"
                              : task.healthStatus === "at-risk"
                                ? "bg-red-400"
                                : task.healthStatus === "critical"
                                  ? "bg-orange-400"
                                  : "bg-sky-400"
                          }`}
                        />
                      </div>
                    ) : (
                      /* Regular bar */
                      <div
                        className="group absolute top-1/2 h-5 -translate-y-1/2 cursor-pointer overflow-hidden rounded-sm"
                        style={{
                          left: `${geo.leftPct}%`,
                          width: `${geo.widthPct}%`,
                        }}
                        onMouseEnter={(e) => handleBarMouseEnter(e, task)}
                        onMouseLeave={handleBarMouseLeave}
                      >
                        {/* Bar background */}
                        <div
                          className={`absolute inset-0 rounded-sm ${
                            task.status === "complete"
                              ? "bg-emerald-500/40"
                              : task.healthStatus === "at-risk"
                                ? "bg-red-500/30"
                                : task.healthStatus === "critical"
                                  ? "bg-orange-500/30"
                                  : "bg-sky-500/30"
                          }`}
                        />
                        {/* Progress fill */}
                        {task.completionPercent > 0 && (
                          <div
                            className={`absolute inset-y-0 left-0 rounded-sm ${
                              task.status === "complete"
                                ? "bg-emerald-400"
                                : task.healthStatus === "at-risk"
                                  ? "bg-red-400"
                                  : task.healthStatus === "critical"
                                    ? "bg-orange-400"
                                    : "bg-sky-400"
                            }`}
                            style={{ width: `${task.completionPercent}%` }}
                          />
                        )}
                        {/* Start date label inside bar */}
                        <div className="absolute inset-0 flex items-center px-1.5">
                          <span className="truncate text-[10px] font-semibold text-white drop-shadow">
                            {task.completionPercent > 0
                              ? /* MM/DD short format */ task.startDate.slice(5).replace("-", "/")
                              : ""}
                          </span>
                        </div>
                      </div>
                    ))}
                </div>
              );
            })}

            {/* Health badge column — right edge of left panel, shown at row level */}
          </div>

          {/* Health badge panel */}
          <div className="z-10 w-24 shrink-0 border-l border-white/10 bg-zinc-950">
            {/* Header */}
            <div className="h-10 border-b border-white/10" />
            {tasks.map((task) => (
              <div
                key={task.taskId}
                className="flex h-10 items-center justify-center border-b border-white/5 px-1"
              >
                <HealthBadge health={task.healthStatus} />
              </div>
            ))}
          </div>
        </div>

        {/* Tooltip */}
        {tooltip && (
          <div
            className="pointer-events-none absolute z-50 max-w-[200px] rounded-xl border border-white/10 bg-zinc-800 p-3 shadow-2xl"
            style={{
              left: tooltip.x + 12,
              top: tooltip.y - 10,
            }}
          >
            <p className="mb-1.5 text-sm font-semibold text-white">
              {tooltip.task.title}
            </p>
            <div className="space-y-0.5 text-xs text-zinc-400">
              <p>
                <span className="text-zinc-500">Owner</span>{" "}
                {tooltip.task.owner.split(" ")[0] || tooltip.task.owner}
              </p>
              <p>
                <span className="text-zinc-500">Due</span>{" "}
                {tooltip.task.endDate}
              </p>
              {tooltip.task.completionPercent > 0 && (
                <p>
                  <span className="text-zinc-500">Progress</span>{" "}
                  {tooltip.task.completionPercent}%
                </p>
              )}
            </div>
            <p className="mt-2 text-[10px] text-zinc-600">
              Double-click to open
            </p>
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 text-[11px] text-zinc-500">
        <span className="flex items-center gap-1.5">
          <span className="h-3 w-6 rounded-sm bg-sky-400" /> In progress
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-3 w-6 rounded-sm bg-emerald-400" /> Complete
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-3 w-6 rounded-sm bg-zinc-600" /> Open
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-3 w-3 rotate-45 bg-sky-400" /> Milestone
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-0.5 w-6 bg-amber-400" /> Today
        </span>
      </div>
    </div>
  );
}
