import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Milestones — Pelham Client Portal",
};

const MILESTONES = [
  { title: "Design Sign-off", targetDate: "Aug 2024", isCompleted: true, notes: "Full design package approved by client." },
  { title: "Demolition & Strip-out", targetDate: "Aug 2024", isCompleted: true, notes: "Completed on time." },
  { title: "Structural Works", targetDate: "Sep 2024", isCompleted: true, notes: "Certified by structural engineer." },
  { title: "First Fix MEP", targetDate: "Oct 2024", isCompleted: true, notes: "Mechanical, electrical and plumbing first fix complete." },
  { title: "Plastering & Screeding", targetDate: "Oct 2024", isCompleted: true, notes: "All areas completed." },
  { title: "Second Fix MEP", targetDate: "Nov 2024", isCompleted: true, notes: "Complete." },
  { title: "Joinery Installation", targetDate: "Nov 2024", isCompleted: true, notes: "Bespoke units installed across all rooms." },
  { title: "Flooring", targetDate: "Nov 2024", isCompleted: true, notes: "Stone and hardwood floors installed." },
  { title: "Painting & Decorating", targetDate: "Nov 2024", isCompleted: true, notes: "First coats complete." },
  { title: "Bathroom Tiling", targetDate: "Nov 2024", isCompleted: true, notes: "All suites complete." },
  { title: "Kitchen Installation", targetDate: "Dec 2024", isCompleted: false, notes: "Scheduled for 12 Dec." },
  { title: "FF&E Delivery", targetDate: "Dec 2024", isCompleted: false, notes: "Final consignment confirmed W/C 2 Dec." },
  { title: "Snagging Inspection", targetDate: "Jan 2025", isCompleted: false, notes: "Scheduled for 6 Jan." },
  { title: "Handover", targetDate: "Jan 2025", isCompleted: false, notes: "Target: 20 Jan 2025." },
];

export default function PortalMilestonesPage() {
  const completedCount = MILESTONES.filter((m) => m.isCompleted).length;

  return (
    <div className="space-y-6 p-6 lg:p-8">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Milestones</h1>
          <p className="mt-1 text-sm text-zinc-400">
            {completedCount} of {MILESTONES.length} milestones complete.
          </p>
        </div>
        <span className="rounded-full border border-lime-400/30 bg-lime-400/10 px-3 py-1.5 text-xs font-semibold text-lime-400">
          {Math.round((completedCount / MILESTONES.length) * 100)}% Complete
        </span>
      </div>

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
    </div>
  );
}
