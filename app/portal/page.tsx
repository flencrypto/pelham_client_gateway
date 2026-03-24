import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Portal — Pelham Interiors",
  description: "Your project dashboard — progress, milestones, updates and documents.",
};

/** Summary metric shown in the dashboard strip. */
interface DashboardMetric {
  metricLabel: string;
  metricValue: string;
  metricSubnote: string;
  metricAccentColour: string;
}

const DASHBOARD_METRICS: DashboardMetric[] = [
  {
    metricLabel: "Project Progress",
    metricValue: "87%",
    metricSubnote: "+5% this week",
    metricAccentColour: "text-lime-400",
  },
  {
    metricLabel: "Milestones Complete",
    metricValue: "12 / 14",
    metricSubnote: "2 remaining",
    metricAccentColour: "text-emerald-400",
  },
  {
    metricLabel: "Days to Completion",
    metricValue: "47",
    metricSubnote: "Est. January 2025",
    metricAccentColour: "text-blue-400",
  },
  {
    metricLabel: "Open Issues",
    metricValue: "3",
    metricSubnote: "1 resolved this week",
    metricAccentColour: "text-amber-400",
  },
];

/** A recent project update entry. */
interface RecentUpdate {
  updateDate: string;
  updateTitle: string;
  updateCategory: string;
}

const RECENT_PROJECT_UPDATES: RecentUpdate[] = [
  {
    updateDate: "Today",
    updateTitle: "Master bedroom joinery installation complete",
    updateCategory: "Progress",
  },
  {
    updateDate: "Yesterday",
    updateTitle: "FF&E delivery confirmed for W/C 2 Dec",
    updateCategory: "Logistics",
  },
  {
    updateDate: "28 Nov",
    updateTitle: "Client sign-off received on finishes schedule",
    updateCategory: "Approval",
  },
  {
    updateDate: "25 Nov",
    updateTitle: "Snag item #12 resolved — bathroom tiling",
    updateCategory: "Snag",
  },
];

/** A project milestone with completion status. */
interface ProjectMilestone {
  milestoneTitle: string;
  milestoneTargetDate: string;
  isCompleted: boolean;
}

const UPCOMING_MILESTONES: ProjectMilestone[] = [
  {
    milestoneTitle: "Kitchen installation",
    milestoneTargetDate: "12 Dec 2024",
    isCompleted: false,
  },
  {
    milestoneTitle: "Final FF&E delivery",
    milestoneTargetDate: "19 Dec 2024",
    isCompleted: false,
  },
  {
    milestoneTitle: "Snagging inspection",
    milestoneTargetDate: "6 Jan 2025",
    isCompleted: false,
  },
  {
    milestoneTitle: "Client walkthrough",
    milestoneTargetDate: "13 Jan 2025",
    isCompleted: false,
  },
];

/**
 * Project management dashboard for the authenticated client portal.
 * Displays live progress, metrics, recent updates and upcoming milestones.
 */
export default function PortalDashboardPage() {
  return (
    <div className="space-y-8 p-6 lg:p-8">
      {/* Page header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">
            Good morning, James
          </h1>
          <p className="mt-1 text-sm text-zinc-400">
            Here&apos;s the latest on your project at Knightsbridge, London.
          </p>
        </div>
        <div className="hidden items-center gap-2 rounded-xl border border-lime-400/20 bg-lime-400/10 px-4 py-2 lg:flex">
          <span className="h-2 w-2 animate-pulse rounded-full bg-lime-400" />
          <span className="text-xs font-medium text-lime-400">
            Active Commission
          </span>
        </div>
      </div>

      {/* Metric cards */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {DASHBOARD_METRICS.map((metric) => (
          <div
            key={metric.metricLabel}
            className="rounded-2xl border border-white/10 bg-zinc-900 p-5"
          >
            <p
              className={`text-2xl font-bold tabular-nums ${metric.metricAccentColour}`}
            >
              {metric.metricValue}
            </p>
            <p className="mt-1 text-xs font-semibold text-zinc-300">
              {metric.metricLabel}
            </p>
            <p className="mt-0.5 text-xs text-zinc-500">{metric.metricSubnote}</p>
          </div>
        ))}
      </div>

      {/* Project progress bar */}
      <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6">
        <div className="mb-4 flex items-start justify-between">
          <div>
            <h2 className="font-semibold text-white">
              The Mandarin Oriental Residences
            </h2>
            <p className="text-xs text-zinc-500">Knightsbridge, London</p>
          </div>
          <span className="text-2xl font-bold text-lime-400">87%</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
          <div
            className="h-full rounded-full bg-lime-400"
            style={{ width: "87%" }}
          />
        </div>
        <div className="mt-3 flex items-center justify-between text-xs text-zinc-500">
          <span>Started August 2024</span>
          <span>Est. completion January 2025</span>
        </div>
      </div>

      {/* Bottom two-column grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent updates */}
        <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="font-semibold text-white">Recent Updates</h2>
            <a
              href="/portal/updates"
              className="text-xs font-medium text-lime-400 transition-colors hover:text-lime-300"
            >
              View all →
            </a>
          </div>
          <ul className="flex flex-col gap-4">
            {RECENT_PROJECT_UPDATES.map((update, updateIndex) => (
              <li key={updateIndex} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lime-400" />
                <div className="min-w-0 flex-1">
                  <p className="text-sm leading-snug text-zinc-200">
                    {update.updateTitle}
                  </p>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="text-xs text-zinc-500">
                      {update.updateDate}
                    </span>
                    <span className="rounded-full bg-lime-400/10 px-2 py-0.5 text-xs text-lime-400">
                      {update.updateCategory}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Upcoming milestones */}
        <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="font-semibold text-white">Upcoming Milestones</h2>
            <a
              href="/portal/milestones"
              className="text-xs font-medium text-lime-400 transition-colors hover:text-lime-300"
            >
              View all →
            </a>
          </div>
          <ul className="flex flex-col gap-3">
            {UPCOMING_MILESTONES.map((milestone, milestoneIndex) => (
              <li
                key={milestoneIndex}
                className="flex items-center justify-between rounded-xl border border-white/5 bg-zinc-800/50 px-4 py-3"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`h-2.5 w-2.5 shrink-0 rounded-full border-2 ${
                      milestone.isCompleted
                        ? "border-lime-400 bg-lime-400"
                        : "border-zinc-600"
                    }`}
                  />
                  <span className="text-sm text-zinc-300">
                    {milestone.milestoneTitle}
                  </span>
                </div>
                <span className="text-xs text-zinc-500">
                  {milestone.milestoneTargetDate}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
