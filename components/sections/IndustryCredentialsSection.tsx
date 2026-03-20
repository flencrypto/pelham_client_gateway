import React from "react";
import type { IndustryCredential } from "@/types/pelham";
import { SectionHeaderBlock } from "@/components/ui/PelhamUiComponents";

interface IndustryCredentialsSectionProps {
  industryCredentials: IndustryCredential[];
}

/**
 * Displays Pelham's industry awards, accreditations and credentials.
 */
export function IndustryCredentialsSection({
  industryCredentials,
}: IndustryCredentialsSectionProps) {
  return (
    <section className="bg-zinc-900 py-24" id="credentials">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex flex-col gap-12">
          <SectionHeaderBlock
            eyebrowLabel="Credibility"
            sectionHeadingText="Recognised for Excellence"
            sectionDescriptionText="Our work is validated by the industry's most respected awarding bodies."
            isCentreAligned
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industryCredentials.map((credential) => (
              <IndustryCredentialCard
                key={credential.credentialId}
                credential={credential}
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

interface IndustryCredentialCardProps {
  credential: IndustryCredential;
}

function IndustryCredentialCard({ credential }: IndustryCredentialCardProps) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-zinc-800/50 p-6">
      {/* Year badge */}
      <span className="w-fit rounded-full bg-lime-400/10 px-2.5 py-0.5 text-xs font-semibold text-lime-400">
        {credential.yearAwarded}
      </span>

      <h3 className="text-base font-semibold text-white">
        {credential.credentialTitle}
      </h3>

      <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
        {credential.awardingBodyName}
      </p>

      <p className="text-sm leading-6 text-zinc-400">
        {credential.credentialDescription}
      </p>
    </div>
  );
}
