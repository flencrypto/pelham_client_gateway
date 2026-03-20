'use client'

import { cn } from '@/lib/cn'

interface TabSwitcherProps {
  tabs: string[]
  active: string
  onChange: (tab: string) => void
  className?: string
}

export default function TabSwitcher({ tabs, active, onChange, className }: TabSwitcherProps) {
  return (
    <div className={cn('flex items-center gap-1 bg-[var(--color-panel)] rounded-xl p-1', className)}>
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={cn(
            'px-4 py-2 rounded-lg text-xs font-medium tracking-wide transition-all duration-200',
            active === tab
              ? 'bg-[var(--color-surface-elevated)] text-[var(--color-text-primary)] shadow-card'
              : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
          )}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}
