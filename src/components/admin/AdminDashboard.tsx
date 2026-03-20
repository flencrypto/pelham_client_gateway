import { TrendingUp, Briefcase, Users, PoundSterling } from 'lucide-react'
import { projects } from '@/lib/data'
import StatusBadge from '@/components/shared/StatusBadge'

const statsCards = [
  { label: 'Active Projects', value: '5', icon: Briefcase, color: 'text-blue-400' },
  { label: 'Total Portfolio Value', value: '£15.6M', icon: PoundSterling, color: 'text-[var(--color-accent)]' },
  { label: 'Active Clients', value: '12', icon: Users, color: 'text-emerald-400' },
  { label: 'Avg. Completion', value: '76%', icon: TrendingUp, color: 'text-amber-400' },
]

export default function AdminDashboard() {
  return (
    <div className="p-6 lg:p-8 space-y-8">
      <div>
        <h1 className="font-serif text-2xl font-medium text-[var(--color-text-primary)] mb-1">
          Studio Overview
        </h1>
        <p className="text-sm text-[var(--color-text-secondary)]">
          Current commissions and portfolio summary.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {statsCards.map((card, i) => (
          <div
            key={i}
            className="bg-[var(--color-surface)] border border-[var(--color-border-subtle)] rounded-2xl p-5"
          >
            <card.icon size={18} className={`${card.color} mb-3`} />
            <p className={`font-serif text-2xl font-medium ${card.color} mb-1`}>{card.value}</p>
            <p className="text-xs text-[var(--color-text-secondary)]">{card.label}</p>
          </div>
        ))}
      </div>

      <div className="bg-[var(--color-surface)] border border-[var(--color-border-subtle)] rounded-2xl overflow-hidden">
        <div className="px-6 py-4 border-b border-[var(--color-border-subtle)]">
          <h3 className="font-medium text-[var(--color-text-primary)]">All Projects</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[var(--color-border-subtle)]">
                {['Project', 'Sector', 'Value', 'Progress', 'Status', 'Location'].map((h) => (
                  <th key={h} className="text-left px-6 py-3 text-xs font-medium text-[var(--color-text-muted)] tracking-wider uppercase">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-border-subtle)]">
              {projects.map((project) => (
                <tr key={project.id} className="hover:bg-[var(--color-panel)] transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-[var(--color-text-primary)] max-w-xs truncate">
                    {project.name}
                  </td>
                  <td className="px-6 py-4">
                    <StatusBadge sector={project.sector} />
                  </td>
                  <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">
                    {project.value}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-20 h-1.5 bg-[var(--color-panel)] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[var(--color-accent)] rounded-full"
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                      <span className="text-xs text-[var(--color-text-secondary)]">{project.progress}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <StatusBadge status={project.status} />
                  </td>
                  <td className="px-6 py-4 text-sm text-[var(--color-text-muted)]">
                    {project.location}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
