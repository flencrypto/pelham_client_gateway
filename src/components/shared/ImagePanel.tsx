import { cn } from '@/lib/cn'
import type { Sector } from '@/types'

interface ImagePanelProps {
  sector?: Sector
  className?: string
  aspectRatio?: string
}

const sectorGradients: Record<string, string> = {
  Residential: 'from-charcoal-700 via-charcoal-800 to-charcoal-900',
  Commercial: 'from-charcoal-800 via-charcoal-700 to-charcoal-600',
  Hospitality: 'from-charcoal-600 via-charcoal-800 to-charcoal-900',
  default: 'from-charcoal-700 via-charcoal-800 to-charcoal-900',
}

export default function ImagePanel({ sector, className, aspectRatio = 'aspect-video' }: ImagePanelProps) {
  const gradient = sector ? (sectorGradients[sector] ?? sectorGradients.default) : sectorGradients.default

  return (
    <div className={cn(
      'relative overflow-hidden rounded-2xl',
      aspectRatio,
      className
    )}>
      <div className={cn('absolute inset-0 bg-gradient-to-br', gradient)} />
      <div className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle at 30% 40%, rgba(163,230,53,0.15) 0%, transparent 60%), radial-gradient(circle at 70% 60%, rgba(255,255,255,0.05) 0%, transparent 50%)',
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 rounded-2xl bg-[rgba(255,255,255,0.04)] border border-[var(--color-border-subtle)] flex items-center justify-center">
          <div className="w-6 h-6 rounded-full bg-[var(--color-accent)] opacity-40" />
        </div>
      </div>
    </div>
  )
}
