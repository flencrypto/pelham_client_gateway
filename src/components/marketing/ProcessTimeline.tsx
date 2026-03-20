import { processSteps } from '@/lib/data'
import SectionHeader from '@/components/shared/SectionHeader'

export default function ProcessTimeline() {
  return (
    <section id="process" className="bg-charcoal-900 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16 text-center">
          <SectionHeader
            eyebrow="How We Work"
            title="Our Process"
            subtitle="A rigorous five-phase methodology refined over 18 years of premium project delivery."
            centered
          />
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-8 left-[calc(10%+1.5rem)] right-[calc(10%+1.5rem)] h-px bg-gradient-to-r from-transparent via-[var(--color-border-strong)] to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4">
            {processSteps.map((step, i) => (
              <div key={i} className="relative flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-[var(--color-panel)] border border-[var(--color-border-subtle)] flex items-center justify-center mb-5 flex-shrink-0">
                  <span className="font-serif text-lg font-medium text-[var(--color-accent)]">{step.phase}</span>
                </div>
                <h3 className="font-medium text-[var(--color-text-primary)] mb-2 text-sm">
                  {step.title}
                </h3>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
