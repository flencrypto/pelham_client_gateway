import { cn } from '@/lib/cn'

interface AppShellProps {
  children: React.ReactNode
  className?: string
}

export default function AppShell({ children, className }: AppShellProps) {
  return (
    <div
      className={cn(
        'min-h-screen w-full',
        'bg-[var(--color-bg)] text-[var(--color-text-primary)]',
        className
      )}
    >
      {children}
    </div>
  )
}
