import { sustainabilityPillars } from '@/lib/data'
import SectionHeader from '@/components/shared/SectionHeader'

export default function SustainabilitySection() {
  return (
    <section id="sustainability" className="bg-charcoal-900 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <SectionHeader
            eyebrow="Our Commitment"
            title="Designing for Tomorrow"
            subtitle="Sustainability is not an add-on — it is a fundamental principle of how we specify, source, and deliver every project."
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {sustainabilityPillars.map((pillar, i) => (
            <div
              key={i}
              className="relative p-8 rounded-2xl bg-[var(--color-panel)] border border-[var(--color-border-subtle)] overflow-hidden"
            >
              <div
                className="absolute inset-0 pointer-events-none opacity-30"
                style={{
                  background: 'radial-gradient(circle at top right, rgba(163,230,53,0.08) 0%, transparent 60%)',
                }}
              />
              <div className="relative">
                <p className="font-serif text-5xl font-medium text-[var(--color-accent)] mb-3">
                  {pillar.stat}
                </p>
                <h3 className="font-medium text-[var(--color-text-primary)] mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
