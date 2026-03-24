import Link from "next/link";
import { LoginForm } from "@/components/auth/LoginForm";

export const metadata = {
  title: "Client Login — Pelham Interiors",
  description:
    "Sign in to the Pelham client portal to access your project dashboard and live updates.",
};

/**
 * Public-facing login page for Pelham clients.
 * After sign-in the user is directed to the client portal dashboard.
 */
export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 px-4 py-16">
      {/* Decorative radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(163,230,53,0.06),transparent_60%)]"
      />

      <div className="relative w-full max-w-md">
        {/* Brand wordmark */}
        <div className="mb-8 flex flex-col items-center gap-2">
          <Link
            href="/"
            className="flex items-center gap-2 text-white"
            aria-label="Pelham Interiors — return to homepage"
          >
            <span className="h-7 w-7 rounded bg-lime-400" aria-hidden="true" />
            <span className="text-xl font-bold tracking-tight">Pelham</span>
          </Link>
          <p className="text-sm text-zinc-500">Client Portal</p>
        </div>

        <LoginForm />

        <p className="mt-6 text-center text-sm text-zinc-600">
          <Link
            href="/"
            className="text-zinc-400 transition-colors hover:text-white"
          >
            ← Back to website
          </Link>
        </p>

        <p className="mt-3 text-center text-xs text-zinc-700">
          Staff?{" "}
          <Link
            href="/admin/login"
            className="text-zinc-500 transition-colors hover:text-zinc-300"
          >
            Admin login →
          </Link>
        </p>
      </div>
    </div>
  );
}
