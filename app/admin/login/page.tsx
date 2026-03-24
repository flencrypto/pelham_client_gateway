import Link from "next/link";
import { AdminLoginForm } from "@/components/auth/AdminLoginForm";

export const metadata = {
  title: "Admin Login — Pelham Interiors",
  description: "Staff and admin access to the Pelham project management suite.",
};

export default function AdminLoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 px-4 py-16">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(163,230,53,0.05),transparent_60%)]"
      />

      <div className="relative w-full max-w-md">
        {/* Brand */}
        <div className="mb-8 flex flex-col items-center gap-2">
          <Link
            href="/"
            className="flex items-center gap-2 text-white"
            aria-label="Pelham Interiors — return to homepage"
          >
            <span className="h-7 w-7 rounded bg-lime-400" aria-hidden="true" />
            <span className="text-xl font-bold tracking-tight">Pelham</span>
          </Link>
          <span className="rounded-full border border-zinc-700 bg-zinc-800 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-zinc-400">
            Staff Portal
          </span>
        </div>

        <AdminLoginForm />

        <p className="mt-6 text-center text-sm text-zinc-600">
          <Link
            href="/login"
            className="text-zinc-400 transition-colors hover:text-white"
          >
            ← Client login
          </Link>
        </p>
      </div>
    </div>
  );
}
