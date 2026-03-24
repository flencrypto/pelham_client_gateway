import { pelhamInteriorProjects } from "@/data/pelhamSeedData";
import { getAdminProjectData } from "@/data/pelhamAdminData";
import { AdminProjectTabs } from "./AdminProjectTabs";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
  return pelhamInteriorProjects.map((p) => ({ id: p.projectId }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = pelhamInteriorProjects.find((p) => p.projectId === id);
  return {
    title: project
      ? `${project.projectTitle} — Admin | Pelham`
      : "Project — Admin | Pelham",
  };
}

export default async function AdminProjectPage({ params }: Props) {
  const { id } = await params;
  const project = pelhamInteriorProjects.find((p) => p.projectId === id);
  if (!project) notFound();

  const adminData = getAdminProjectData(id);

  return <AdminProjectTabs project={project} adminData={adminData} />;
}
