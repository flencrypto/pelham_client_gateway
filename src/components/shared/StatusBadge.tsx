import { cn } from '@/lib/cn'
import type { ProjectStatus, Sector } from '@/types'

interface StatusBadgeProps {
  status?: ProjectStatus
  sector?: Sector
  className?: string
}

export default function StatusBadge({ status, sector, className }: StatusBadgeProps) {
  if (sector) {
    return (
      <span className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
        'bg-[rgba(255,255,255,0.06)] text-[var(--color-text-secondary)] border border-[var(--color-border-subtle)]',
        className
      )}>
        {sector}
      </span>
    )
  }

  const statusStyles: Record<ProjectStatus, string> = {
    'In Progress': 'bg-blue-500/10 text-blue-400 border border-blue-500/20',
    'Completed': 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
    'Planning': 'bg-amber-500/10 text-amber-400 border border-amber-500/20',
  }

  if (!status) return null

  return (
    <span className={cn(
      'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
      statusStyles[status],
      className
    )}>
      {status}
    </span>
  )
}
