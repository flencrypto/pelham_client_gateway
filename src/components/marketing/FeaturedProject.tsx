import { ArrowUpRight } from 'lucide-react'
import { projects } from '@/lib/data'
import StatusBadge from '@/components/shared/StatusBadge'
import ImagePanel from '@/components/shared/ImagePanel'

export default function FeaturedProject() {
  const featured = projects[0]

  return (
    <section className="bg-charcoal-950 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-3">
              Featured Project
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl font-medium text-[var(--color-text-primary)]">
              Current Commission
            </h2>
          </div>
          <a href="#projects" className="hidden lg:inline-flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors group">
            View all projects
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <ImagePanel sector={featured.sector} aspectRatio="aspect-[4/3]" />

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <StatusBadge sector={featured.sector} />
              <StatusBadge status={featured.status} />
            </div>
            <div>
              <h3 className="font-serif text-2xl lg:text-3xl font-medium text-[var(--color-text-primary)] leading-snug mb-2">
                {featured.name}
              </h3>
              <p className="text-sm text-[var(--color-text-muted)]">{featured.location}</p>
            </div>
            <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
              {featured.description}
            </p>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-[var(--color-text-muted)] tracking-wide">Project Progress</span>
                <span className="text-sm font-semibold text-[var(--color-accent)]">{featured.progress}%</span>
              </div>
              <div className="h-1.5 bg-[var(--color-panel)] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[var(--color-accent)] rounded-full"
                  style={{ width: `${featured.progress}%` }}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="bg-[var(--color-panel)] rounded-xl p-4">
                <p className="text-xs text-[var(--color-text-muted)] mb-1">Project Value</p>
                <p className="font-serif text-xl text-[var(--color-text-primary)]">{featured.value}</p>
              </div>
              <div className="bg-[var(--color-panel)] rounded-xl p-4">
                <p className="text-xs text-[var(--color-text-muted)] mb-1">Highlights</p>
                <p className="font-serif text-xl text-[var(--color-text-primary)]">{featured.highlights.length} Key</p>
              </div>
            </div>

            <ul className="space-y-2">
              {featured.highlights.map((h, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-[var(--color-text-secondary)]">
                  <div className="w-1 h-1 rounded-full bg-[var(--color-accent)] flex-shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
