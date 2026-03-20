import { cn } from '@/lib/cn'

interface MetricPillProps {
  label: string
  value: string
  className?: string
}

export default function MetricPill({ label, value, className }: MetricPillProps) {
  return (
    <div className={cn('flex flex-col', className)}>
      <span className="font-serif text-3xl font-medium text-[var(--color-accent)]">{value}</span>
      <span className="text-xs text-[var(--color-text-secondary)] tracking-wide mt-1">{label}</span>
    </div>
  )
}
