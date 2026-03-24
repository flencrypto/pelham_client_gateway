import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { pelhamInteriorProjects } from "@/data/pelhamSeedData";
import type { InteriorProject } from "@/types/pelham";

export const metadata: Metadata = {
  title: "Admin Dashboard — Pelham Interiors",
};

function statusColour(status: InteriorProject["projectCompletionStatus"]) {
  if (status === "completed") return "bg-emerald-400/10 text-emerald-400 border-emerald-400/20";
  if (status === "in-progress") return "bg-amber-400/10 text-amber-400 border-amber-400/20";
  return "bg-blue-400/10 text-blue-400 border-blue-400/20";
}
function statusLabel(status: InteriorProject["projectCompletionStatus"]) {
  if (status === "completed") return "Completed";
  if (status === "in-progress") return "In Progress";
  return "Upcoming";
}
function sectorLabel(sector: string) {
  return sector.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function AdminDashboardPage() {
  const completed = pelhamInteriorProjects.filter(
    (p) => p.projectCompletionStatus === "completed"
  ).length;
  const inProgress = pelhamInteriorProjects.filter(
    (p) => p.projectCompletionStatus === "in-progress"
  ).length;
  const upcoming = pelhamInteriorProjects.filter(
    (p) => p.projectCompletionStatus === "upcoming"
  ).length;

  return (
    <div className="space-y-8 p-6 lg:p-8">
      {/* Page header */}
      <div>
        <h1 className="text-2xl font-bold text-white">All Projects</h1>
        <p className="mt-1 text-sm text-zinc-400">
          Click any project to open the full management view.
        </p>
      </div>

      {/* Summary strip */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: "Completed", count: completed, colour: "text-emerald-400" },
          { label: "In Progress", count: inProgress, colour: "text-amber-400" },
          { label: "Upcoming", count: upcoming, colour: "text-blue-400" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-white/10 bg-zinc-900 p-5"
          >
            <p className={`text-3xl font-bold tabular-nums ${stat.colour}`}>
              {stat.count}
            </p>
            <p className="mt-1 text-xs text-zinc-400">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Projects table */}
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/10">
              <th className="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Project
              </th>
              <th className="hidden px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-zinc-500 sm:table-cell">
                Client
              </th>
              <th className="hidden px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-zinc-500 md:table-cell">
                Sector
              </th>
              <th className="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Status
              </th>
              <th className="px-5 py-3.5 text-right text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {pelhamInteriorProjects.map((project) => (
              <tr
                key={project.projectId}
                className="group transition-colors hover:bg-zinc-800/50"
              >
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="relative h-10 w-14 shrink-0 overflow-hidden rounded-lg">
                      <Image
                        src={project.heroImageUrl}
                        alt={project.projectTitle}
                        fill
                        className="object-cover"
                        sizes="56px"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-zinc-200 group-hover:text-white transition-colors leading-snug">
                        {project.projectTitle}
                      </p>
                      <p className="text-xs text-zinc-500">
                        {project.projectLocationCity},{" "}
                        {project.projectLocationCountry}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="hidden px-5 py-4 text-sm text-zinc-400 sm:table-cell">
                  {project.clientOrganisationName}
                </td>
                <td className="hidden px-5 py-4 md:table-cell">
                  <span className="rounded-full bg-zinc-800 px-2.5 py-0.5 text-xs text-zinc-300">
                    {sectorLabel(project.projectSector)}
                  </span>
                </td>
                <td className="px-5 py-4">
                  <span
                    className={`inline-flex rounded-full border px-2.5 py-0.5 text-xs font-medium ${statusColour(
                      project.projectCompletionStatus
                    )}`}
                  >
                    {statusLabel(project.projectCompletionStatus)}
                  </span>
                </td>
                <td className="px-5 py-4 text-right">
                  <Link
                    href={`/admin/projects/${project.projectId}`}
                    className="rounded-lg border border-white/10 px-3 py-1.5 text-xs font-medium text-zinc-300 transition-colors hover:border-lime-400/40 hover:text-lime-400"
                  >
                    Open →
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
