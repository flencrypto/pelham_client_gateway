'use client'

import { Search } from 'lucide-react'
import { cn } from '@/lib/cn'

interface SearchInputProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
}

export default function SearchInput({ value, onChange, placeholder = 'Search...', className }: SearchInputProps) {
  return (
    <div className={cn('relative', className)}>
      <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={cn(
          'w-full pl-9 pr-4 py-2.5 rounded-xl text-sm',
          'bg-[var(--color-panel)] text-[var(--color-text-primary)]',
          'border border-[var(--color-border-subtle)]',
          'placeholder:text-[var(--color-text-muted)]',
          'focus:outline-none focus:border-[var(--color-border-strong)] focus:ring-0',
          'transition-colors duration-200'
        )}
      />
    </div>
  )
}
