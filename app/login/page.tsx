import Link from "next/link";
import Image from "next/image";
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
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#1a1a1a] px-4 py-16">
      {/* Subtle decorative glow using Pelham gold */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,185,122,0.06),transparent_60%)]"
      />

      <div className="relative w-full max-w-md">
        {/* Pelham logo */}
        <div className="mb-8 flex flex-col items-center gap-2">
          <Link
            href="/"
            aria-label="Pelham Interiors — return to homepage"
          >
            <Image
              src="https://pelham.co/wp-content/uploads/2025/01/Pelham-Logo-transparent-v2.svg"
              alt="Pelham Interiors"
              width={160}
              height={48}
              className="h-10 w-auto"
              unoptimized
            />
          </Link>
          <p className="text-sm uppercase tracking-widest text-[#6a6a6a]">
            Client Portal
          </p>
        </div>

        <LoginForm />

        <p className="mt-6 text-center text-sm text-[#5a5a5a]">
          <Link
            href="/"
            className="text-[#8a8a8a] transition-colors hover:text-white"
          >
            ← Back to website
          </Link>
        </p>

        <p className="mt-3 text-center text-xs text-[#4a4a4a]">
          Staff?{" "}
          <Link
            href="/admin/login"
            className="text-[#6a6a6a] transition-colors hover:text-[#c9b97a]"
          >
            Admin login →
          </Link>
        </p>
      </div>
    </div>
  );
}
