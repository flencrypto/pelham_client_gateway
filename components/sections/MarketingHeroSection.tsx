import React from "react";
import type { BusinessMetric } from "@/types/pelham";
import { MetricDisplayCard } from "@/components/ui/PelhamUiComponents";

interface MarketingHeroSectionProps {
  companyTaglineText: string;
  heroHeadingText: string;
  heroBodyText: string;
  businessMetrics: BusinessMetric[];
  /** Anchor href for the "Request a Briefing" CTA, e.g. "#contact". */
  requestBriefingHref: string;
  /** Anchor href for the "View Our Projects" CTA, e.g. "#projects". */
  viewProjectsHref: string;
}

/**
 * The full-bleed marketing hero section at the top of the public homepage.
 * Displays the brand headline, a brief value-proposition paragraph, two
 * call-to-action anchor links and a strip of headline business metrics.
 */
export function MarketingHeroSection({
  companyTaglineText,
  heroHeadingText,
  heroBodyText,
  businessMetrics,
  requestBriefingHref,
  viewProjectsHref,
}: MarketingHeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-zinc-950">
      {/* Decorative radial gradient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(163,230,53,0.08),transparent_60%)]"
      />

      <div className="mx-auto max-w-7xl px-6 pb-20 pt-24 sm:px-8 lg:pt-32">
        <div className="flex flex-col gap-8 lg:max-w-3xl">
          {/* Eyebrow tagline */}
          <span className="w-fit rounded-full border border-lime-400/30 bg-lime-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-lime-400">
            {companyTaglineText}
          </span>

          {/* Hero heading */}
          <h1 className="text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            {heroHeadingText}
          </h1>

          {/* Hero body copy */}
          <p className="max-w-xl text-lg leading-8 text-zinc-400">
            {heroBodyText}
          </p>

          {/* Call-to-action anchor links */}
          <div className="flex flex-wrap gap-4">
            <a
              href={requestBriefingHref}
              className="rounded-full bg-lime-400 px-6 py-3 text-sm font-semibold text-zinc-900 transition-all hover:bg-lime-300 hover:shadow-lg hover:shadow-lime-400/25"
            >
              Request a Briefing
            </a>
            <a
              href={viewProjectsHref}
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/5"
            >
              View Our Projects
            </a>
          </div>
        </div>

        {/* Business metrics strip */}
        <div className="mt-20 grid grid-cols-2 gap-10 border-t border-white/10 pt-12 sm:grid-cols-4">
          {businessMetrics.map((metric) => (
            <MetricDisplayCard
              key={metric.metricLabel}
              metricLabel={metric.metricLabel}
              metricDisplayValue={metric.metricDisplayValue}
              metricSubtitle={metric.metricSubtitle}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
