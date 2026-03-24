import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Gateway — Pelham Interiors",
  description:
    "The Pelham Client Gateway — your secure hub for real-time project progress, compliance documentation and billing information.",
};

/** A feature card displayed on the gateway landing page. */
interface GatewayFeature {
  featureNumber: string;
  featureTitle: string;
  featureDescription: string;
}

const GATEWAY_FEATURES: GatewayFeature[] = [
  {
    featureNumber: "01",
    featureTitle: "Project Progress & Information",
    featureDescription:
      "Track every stage of your project in real time. View live completion percentages, upcoming milestones, site photography, snagging logs and all key project documents — consolidated in one place.",
  },
  {
    featureNumber: "02",
    featureTitle: "Compliance Centre",
    featureDescription:
      "Access your full suite of compliance records, including health & safety certificates, building regulations sign-offs, warranties, maintenance schedules and handover documentation — available the moment they are issued.",
  },
  {
    featureNumber: "03",
    featureTitle: "Billing Hub",
    featureDescription:
      "Review invoices, payment schedules and financial summaries against your agreed contract values. Download statements and stay fully informed on the financial position of your commission at every stage.",
  },
];

/**
 * Public-facing landing page for the Pelham Client Gateway.
 * Light-themed design emulating the pelham.co brand aesthetic.
 */
export default function GatewayLandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f7f5f0] text-[#1a1a1a]">

      {/* ── Header ─────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-10 border-b border-[#e2ddd4] bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
          {/* Pelham logo */}
          <Link href="/" aria-label="Pelham Interiors — return to homepage">
            <Image
              src="https://pelham.co/wp-content/uploads/2025/01/Pelham-Logo-transparent-v2.svg"
              alt="Pelham Interiors"
              width={140}
              height={42}
              className="h-9 w-auto"
              style={{ filter: "brightness(0)" }}
              unoptimized
            />
          </Link>

          <div className="flex items-center gap-5">
            <span className="hidden text-sm text-[#4a4a4a] sm:inline">
              Client Gateway
            </span>
            <Link
              href="/login"
              className="rounded-none border border-[#1a1a1a] px-5 py-2 text-sm font-semibold tracking-wide text-[#1a1a1a] transition-colors hover:bg-[#1a1a1a] hover:text-white"
            >
              Sign in
            </Link>
          </div>
        </div>
      </header>

      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <main className="flex flex-1 flex-col">
        <section className="border-b border-[#e2ddd4] bg-white">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28 lg:py-36">
            <div className="max-w-3xl">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#c9b97a]">
                Pelham Interiors · Client Gateway
              </p>
              <h1 className="text-4xl font-light leading-tight tracking-tight text-[#1a1a1a] sm:text-5xl lg:text-6xl">
                Your project,{" "}
                <span className="font-bold">always in view.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg font-light leading-relaxed text-[#4a4a4a]">
                The Pelham Client Gateway is your dedicated, secure portal
                for everything relating to your commission. From live build
                progress and milestone tracking to compliance records and
                billing statements — all the information you need, presented
                clearly, in one place.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-6">
                <Link
                  href="/login"
                  className="inline-block bg-[#1a1a1a] px-8 py-3.5 text-sm font-bold tracking-wide text-white transition-colors hover:bg-[#2d2d2d]"
                >
                  Sign in to your portal
                </Link>
                <p className="text-sm text-[#4a4a4a]">
                  Need access?{" "}
                  <span className="font-semibold text-[#1a1a1a]">
                    Contact your Pelham project or account manager.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Divider with Pelham gold ────────────────────────────────────── */}
        <div className="h-1 w-full bg-[#c9b97a]" aria-hidden="true" />

        {/* ── Feature cards ──────────────────────────────────────────────── */}
        <section
          aria-labelledby="features-heading"
          className="bg-[#f7f5f0] py-20 sm:py-24"
        >
          <div className="mx-auto max-w-6xl px-6 sm:px-8">
            <h2
              id="features-heading"
              className="mb-14 text-xs font-bold uppercase tracking-[0.2em] text-[#c9b97a]"
            >
              What&apos;s inside your gateway
            </h2>
            <div className="grid gap-px bg-[#e2ddd4] sm:grid-cols-3">
              {GATEWAY_FEATURES.map((feature) => (
                <div
                  key={feature.featureNumber}
                  className="flex flex-col gap-5 bg-[#f7f5f0] p-8 lg:p-10"
                >
                  <span className="text-xs font-bold tracking-widest text-[#c9b97a]">
                    {feature.featureNumber}
                  </span>
                  <h3 className="text-lg font-bold leading-snug text-[#1a1a1a]">
                    {feature.featureTitle}
                  </h3>
                  <p className="text-sm font-light leading-relaxed text-[#4a4a4a]">
                    {feature.featureDescription}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Login callout ──────────────────────────────────────────────── */}
        <section className="bg-[#1a1a1a] py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-6 sm:px-8">
            <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-xl">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#c9b97a]">
                  Getting started
                </p>
                <h2 className="mb-4 text-2xl font-light text-white">
                  Your login is provided by{" "}
                  <span className="font-bold">your Pelham team.</span>
                </h2>
                <p className="text-sm font-light leading-relaxed text-[#a8a8a8]">
                  Your dedicated project manager or account manager at Pelham
                  will provide your login credentials. If you haven&apos;t
                  received them yet, please reach out to your Pelham point of
                  contact and they will have you set up promptly.
                </p>
              </div>
              <Link
                href="/login"
                className="shrink-0 border border-[#c9b97a] px-7 py-3.5 text-sm font-bold tracking-wide text-[#c9b97a] transition-colors hover:bg-[#c9b97a] hover:text-[#1a1a1a]"
              >
                Sign in →
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ─────────────────────────────────────────────────────── */}
      <footer className="border-t border-[#e2ddd4] bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-5 px-6 py-8 text-xs text-[#8a8a8a] sm:flex-row sm:items-center sm:px-8">
          <div className="flex items-center gap-4">
            <Image
              src="https://pelham.co/wp-content/uploads/2025/01/Pelham-Logo-transparent-v2.svg"
              alt="Pelham Interiors"
              width={80}
              height={24}
              className="h-5 w-auto opacity-40"
              style={{ filter: "brightness(0)" }}
              unoptimized
            />
            <span>© {new Date().getFullYear()} Pelham Interiors Ltd.</span>
          </div>
          <p>Secure client portal — authorised access only.</p>
        </div>
      </footer>
    </div>
  );
}
