import { PackageSearch } from 'lucide-react'
import { cn } from '@/lib/cn'

interface EmptyStateProps {
  title?: string
  description?: string
  className?: string
}

export default function EmptyState({
  title = 'No results found',
  description = 'Try adjusting your search or filter criteria.',
  className,
}: EmptyStateProps) {
  return (
    <div className={cn('flex flex-col items-center justify-center py-20 text-center', className)}>
      <div className="w-14 h-14 rounded-2xl bg-[var(--color-panel)] flex items-center justify-center mb-4">
        <PackageSearch size={24} className="text-[var(--color-text-muted)]" />
      </div>
      <h3 className="text-sm font-medium text-[var(--color-text-primary)] mb-1">{title}</h3>
      <p className="text-sm text-[var(--color-text-muted)] max-w-xs">{description}</p>
    </div>
  )
}
