import { TrendingUp, CheckCircle, Clock, AlertCircle, ArrowUpRight } from 'lucide-react'
import { projects } from '@/lib/data'

const metricCards = [
  { label: 'Project Progress', value: '87%', icon: TrendingUp, trend: '+5% this week', color: 'text-[var(--color-accent)]' },
  { label: 'Milestones Complete', value: '12/14', icon: CheckCircle, trend: '2 remaining', color: 'text-emerald-400' },
  { label: 'Days to Completion', value: '47', icon: Clock, trend: 'Est. January 2025', color: 'text-blue-400' },
  { label: 'Open Issues', value: '3', icon: AlertCircle, trend: '1 resolved this week', color: 'text-amber-400' },
]

const recentUpdates = [
  { date: 'Today', title: 'Master bedroom joinery installation complete', type: 'Progress' },
  { date: 'Yesterday', title: 'FF&E delivery confirmed for W/C 2 Dec', type: 'Logistics' },
  { date: '28 Nov', title: 'Client sign-off received on finishes schedule', type: 'Approval' },
  { date: '25 Nov', title: 'Snag item #12 resolved — bathroom tiling', type: 'Snag' },
]

export default function PortalDashboard() {
  const project = projects[0]

  return (
    <div className="p-6 lg:p-8 space-y-8">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-serif text-2xl font-medium text-[var(--color-text-primary)] mb-1">
            Good morning, James
          </h1>
          <p className="text-sm text-[var(--color-text-secondary)]">
            Here&apos;s the latest on your project at {project.location}.
          </p>
        </div>
        <div className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--color-accent-soft)] border border-[rgba(163,230,53,0.2)]">
          <div className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
          <span className="text-xs font-medium text-[var(--color-accent)]">Active Commission</span>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {metricCards.map((card, i) => (
          <div
            key={i}
            className="bg-[var(--color-surface)] border border-[var(--color-border-subtle)] rounded-2xl p-5"
          >
            <div className="flex items-start justify-between mb-3">
              <card.icon size={18} className={card.color} />
              <span className="text-xs text-[var(--color-text-muted)]">{card.trend}</span>
            </div>
            <p className={`font-serif text-2xl font-medium ${card.color} mb-1`}>{card.value}</p>
            <p className="text-xs text-[var(--color-text-secondary)]">{card.label}</p>
          </div>
        ))}
      </div>

      <div className="bg-[var(--color-surface)] border border-[var(--color-border-subtle)] rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-medium text-[var(--color-text-primary)] mb-0.5">{project.name}</h3>
            <p className="text-xs text-[var(--color-text-muted)]">{project.location}</p>
          </div>
          <span className="font-serif text-2xl font-medium text-[var(--color-accent)]">{project.progress}%</span>
        </div>
        <div className="h-2 bg-[var(--color-panel)] rounded-full overflow-hidden">
          <div
            className="h-full bg-[var(--color-accent)] rounded-full"
            style={{ width: `${project.progress}%` }}
          />
        </div>
        <div className="mt-3 flex items-center justify-between text-xs text-[var(--color-text-muted)]">
          <span>Started August 2024</span>
          <span>Est. Completion January 2025</span>
        </div>
      </div>

      <div className="bg-[var(--color-surface)] border border-[var(--color-border-subtle)] rounded-2xl p-6">
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-medium text-[var(--color-text-primary)]">Recent Updates</h3>
          <a href="#" className="inline-flex items-center gap-1 text-xs text-[var(--color-accent)] hover:text-lime-300 transition-colors">
            View all
            <ArrowUpRight size={12} />
          </a>
        </div>
        <ul className="space-y-4">
          {recentUpdates.map((update, i) => (
            <li key={i} className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-0.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-1.5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-[var(--color-text-primary)] leading-snug">{update.title}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs text-[var(--color-text-muted)]">{update.date}</span>
                  <span className="text-xs bg-[var(--color-accent-soft)] px-2 py-0.5 rounded-full text-[var(--color-accent)]">
                    {update.type}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
