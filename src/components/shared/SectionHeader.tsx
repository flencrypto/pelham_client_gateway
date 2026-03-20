import { cn } from '@/lib/cn'

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export default function SectionHeader({ eyebrow, title, subtitle, centered = false, className }: SectionHeaderProps) {
  return (
    <div className={cn(centered && 'text-center', className)}>
      {eyebrow && (
        <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-3xl lg:text-4xl font-medium text-[var(--color-text-primary)] leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  )
}
