import { cn } from '@/lib/cn'

interface LoadingStateProps {
  className?: string
}

export default function LoadingState({ className }: LoadingStateProps) {
  return (
    <div className={cn('flex items-center justify-center py-20', className)}>
      <div className="flex gap-2">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse"
            style={{ animationDelay: `${i * 150}ms` }}
          />
        ))}
      </div>
    </div>
  )
}
