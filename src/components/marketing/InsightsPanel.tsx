import { ArrowUpRight } from 'lucide-react'
import { insights } from '@/lib/data'
import SectionHeader from '@/components/shared/SectionHeader'

export default function InsightsPanel() {
  return (
    <section id="insights" className="bg-charcoal-950 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <SectionHeader
            eyebrow="Studio Thinking"
            title="Insights &amp; Perspectives"
            subtitle="Considered viewpoints on design, materiality, and the evolving premium interior landscape."
          />
          <a href="#" className="inline-flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors group flex-shrink-0">
            All articles
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {insights.map((insight) => (
            <article
              key={insight.id}
              className="group flex flex-col gap-4 p-6 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border-subtle)] hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface-elevated)] transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-[var(--color-accent)] tracking-wide">{insight.category}</span>
                <span className="text-xs text-[var(--color-text-muted)]">{insight.readTime}</span>
              </div>
              <h3 className="font-medium text-[var(--color-text-primary)] text-sm leading-snug group-hover:text-[var(--color-accent)] transition-colors">
                {insight.title}
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed flex-1">
                {insight.excerpt}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border-subtle)]">
                <span className="text-xs text-[var(--color-text-muted)]">{insight.date}</span>
                <a href="#" className="inline-flex items-center gap-1 text-xs text-[var(--color-accent)] hover:text-lime-300 transition-colors group/link">
                  Read more
                  <ArrowUpRight size={12} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
