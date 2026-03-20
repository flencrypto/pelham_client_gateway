import React from "react";
import type { ServiceOffering } from "@/types/pelham";
import { SectionHeaderBlock } from "@/components/ui/PelhamUiComponents";

interface ServiceOfferingsSectionProps {
  serviceOfferings: ServiceOffering[];
}

/**
 * Displays Pelham's full suite of service offerings in a responsive card grid.
 */
export function ServiceOfferingsSection({
  serviceOfferings,
}: ServiceOfferingsSectionProps) {
  return (
    <section className="bg-zinc-900 py-24" id="services">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex flex-col gap-12">
          <SectionHeaderBlock
            eyebrowLabel="What We Do"
            sectionHeadingText="End-to-End Interior Design Services"
            sectionDescriptionText="From initial workplace strategy through to post-handover aftercare, Pelham provides a complete, integrated design and delivery service."
            isCentreAligned
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceOfferings.map((serviceOffering) => (
              <ServiceOfferingCard
                key={serviceOffering.serviceId}
                serviceOffering={serviceOffering}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Internal helper component
// ---------------------------------------------------------------------------

interface ServiceOfferingCardProps {
  serviceOffering: ServiceOffering;
}

function ServiceOfferingCard({ serviceOffering }: ServiceOfferingCardProps) {
  return (
    <div className="group flex flex-col gap-4 rounded-2xl border border-white/10 bg-zinc-800/50 p-6 transition-all hover:border-lime-400/20 hover:bg-zinc-800">
      {/* Icon placeholder */}
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-400/10">
        <span className="text-xl text-lime-400" aria-hidden="true">
          ◆
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-base font-semibold text-white group-hover:text-lime-400 transition-colors">
          {serviceOffering.serviceTitle}
        </h3>
        <p className="text-sm leading-6 text-zinc-400">
          {serviceOffering.serviceDetailedDescription}
        </p>
      </div>
    </div>
  );
}
