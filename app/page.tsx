import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Gateway — Pelham Interiors",
  description:
    "The Pelham Client Gateway — your secure hub for real-time project progress, compliance documentation and billing information.",
};

/** A feature card displayed on the gateway landing page. */
interface GatewayFeature {
  featureIcon: string;
  featureTitle: string;
  featureDescription: string;
}

const GATEWAY_FEATURES: GatewayFeature[] = [
  {
    featureIcon: "◎",
    featureTitle: "Project Progress & Information",
    featureDescription:
      "Track every stage of your project in real time. View live completion percentages, upcoming milestones, site photography, snagging logs and all key project documents — consolidated in one place.",
  },
  {
    featureIcon: "✦",
    featureTitle: "Compliance Centre",
    featureDescription:
      "Access your full suite of compliance records, including health & safety certificates, building regulations sign-offs, warranties, maintenance schedules and handover documentation — available the moment they are issued.",
  },
  {
    featureIcon: "◈",
    featureTitle: "Billing Hub",
    featureDescription:
      "Review invoices, payment schedules and financial summaries against your agreed contract values. Download statements and stay fully informed on the financial status of your commission at every stage.",
  },
];

/**
 * Public-facing landing page for the Pelham Client Gateway.
 * Explains the purpose of the gateway and directs clients to sign in.
 */
export default function GatewayLandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 text-white">
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(163,230,53,0.08),transparent)]"
      />

      {/* ── Header ─────────────────────────────────────────────────────── */}
      <header className="relative z-10 border-b border-white/10 bg-zinc-950/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-8">
          <div className="flex items-center gap-2.5">
            <span className="h-6 w-6 rounded bg-lime-400" aria-hidden="true" />
            <span className="text-lg font-bold tracking-tight">Pelham</span>
            <span className="hidden text-sm text-zinc-500 sm:inline">
              / Client Gateway
            </span>
          </div>
          <Link
            href="/login"
            className="rounded-xl bg-lime-400 px-5 py-2 text-sm font-semibold text-zinc-950 transition-opacity hover:opacity-90"
          >
            Sign in
          </Link>
        </div>
      </header>

      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <main className="relative z-10 flex flex-1 flex-col">
        <section className="mx-auto w-full max-w-6xl px-6 pb-16 pt-20 sm:px-8 sm:pt-28 lg:pt-36">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-lime-400">
              Pelham Client Gateway
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Your project,{" "}
              <span className="text-lime-400">always in view.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
              The Pelham Client Gateway is your dedicated, secure portal for
              everything relating to your commission. From live build progress
              and milestone tracking to compliance records and billing
              statements — all the information you need, presented clearly,
              in one place.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/login"
                className="rounded-xl bg-lime-400 px-7 py-3.5 text-sm font-semibold text-zinc-950 shadow-lg shadow-lime-400/20 transition-opacity hover:opacity-90"
              >
                Sign in to your portal
              </Link>
              <p className="text-sm text-zinc-500">
                Need access?{" "}
                <span className="text-zinc-300">
                  Contact your Pelham project or account manager.
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* ── Feature cards ──────────────────────────────────────────────── */}
        <section
          aria-labelledby="features-heading"
          className="mx-auto w-full max-w-6xl px-6 pb-20 sm:px-8"
        >
          <h2 id="features-heading" className="sr-only">
            Gateway features
          </h2>
          <div className="grid gap-5 sm:grid-cols-3">
            {GATEWAY_FEATURES.map((feature) => (
              <div
                key={feature.featureTitle}
                className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-zinc-900/60 p-6 backdrop-blur-sm"
              >
                <span
                  className="text-2xl text-lime-400"
                  aria-hidden="true"
                >
                  {feature.featureIcon}
                </span>
                <h3 className="font-semibold text-white">
                  {feature.featureTitle}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  {feature.featureDescription}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Login callout ──────────────────────────────────────────────── */}
        <section className="mx-auto w-full max-w-6xl px-6 pb-24 sm:px-8">
          <div className="rounded-2xl border border-lime-400/20 bg-lime-400/5 p-8 sm:p-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-xl">
                <h2 className="text-lg font-semibold text-white">
                  Ready to get started?
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  Your login credentials are provided by your dedicated project
                  manager or account manager at Pelham. If you haven&apos;t
                  received them yet, please reach out to your Pelham point of
                  contact and they will have you set up promptly.
                </p>
              </div>
              <Link
                href="/login"
                className="shrink-0 rounded-xl border border-lime-400/40 bg-lime-400/10 px-7 py-3.5 text-sm font-semibold text-lime-400 transition-colors hover:bg-lime-400/20"
              >
                Sign in →
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ─────────────────────────────────────────────────────── */}
      <footer className="relative z-10 border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-xs text-zinc-600 sm:flex-row sm:px-8">
          <div className="flex items-center gap-2">
            <span className="h-4 w-4 rounded bg-lime-400/70" aria-hidden="true" />
            <span>© {new Date().getFullYear()} Pelham Interiors Ltd. All rights reserved.</span>
          </div>
          <p>Secure client portal — authorised access only.</p>
        </div>
      </footer>
    </div>
  );
}
