import { redirect } from "next/navigation";

/** /admin/projects → redirect to the dashboard which lists all projects */
export default function AdminProjectsPage() {
  redirect("/admin");
}
