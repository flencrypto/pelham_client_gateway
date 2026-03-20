import { metrics } from '@/lib/data'

export default function MetricsStrip() {
  return (
    <section className="bg-charcoal-900 border-y border-[var(--color-border-subtle)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-[var(--color-border-subtle)]">
          {metrics.map((metric, i) => (
            <div key={i} className="lg:px-12 first:lg:pl-0 last:lg:pr-0 text-center lg:text-left">
              <p className="font-serif text-3xl lg:text-4xl font-medium text-[var(--color-accent)]">
                {metric.value}
              </p>
              <p className="mt-1 text-xs font-medium tracking-widest uppercase text-[var(--color-text-secondary)]">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
