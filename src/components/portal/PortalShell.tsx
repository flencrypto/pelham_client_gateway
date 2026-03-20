'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  FolderOpen,
  MessageSquare,
  Camera,
  AlertCircle,
  CheckSquare,
  Milestone,
  FileText,
  User,
  Bell,
  ChevronLeft,
  ChevronRight,
  LogOut,
} from 'lucide-react'
import { cn } from '@/lib/cn'

const navItems = [
  { label: 'Dashboard', href: '/portal', icon: LayoutDashboard },
  { label: 'My Project', href: '/portal/project', icon: FolderOpen },
  { label: 'Updates', href: '/portal/updates', icon: MessageSquare },
  { label: 'Photos', href: '/portal/photos', icon: Camera },
  { label: 'Issues', href: '/portal/issues', icon: AlertCircle },
  { label: 'Snags', href: '/portal/snags', icon: CheckSquare },
  { label: 'Milestones', href: '/portal/milestones', icon: Milestone },
  { label: 'Documents', href: '/portal/documents', icon: FileText },
  { label: 'Account', href: '/portal/account', icon: User },
]

interface PortalShellProps {
  children: React.ReactNode
}

export default function PortalShell({ children }: PortalShellProps) {
  const [collapsed, setCollapsed] = useState(false)
  const pathname = usePathname()

  return (
    <div className="flex h-screen bg-charcoal-950 overflow-hidden">
      <aside
        className={cn(
          'flex flex-col flex-shrink-0 bg-charcoal-900 border-r border-[var(--color-border-subtle)] transition-all duration-300',
          collapsed ? 'w-16' : 'w-60'
        )}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b border-[var(--color-border-subtle)]">
          {!collapsed && (
            <div className="flex items-baseline gap-1">
              <span className="font-sans font-semibold tracking-wider text-sm text-[var(--color-text-primary)] uppercase">Pelham</span>
              <span className="font-sans font-semibold tracking-wider text-sm text-[var(--color-accent)] uppercase ml-1">Portal</span>
            </div>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-1.5 rounded-lg text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] hover:bg-[var(--color-panel)] transition-colors ml-auto"
          >
            {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
          </button>
        </div>

        <nav className="flex-1 py-4 px-2 overflow-y-auto">
          <ul className="space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      'flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150',
                      isActive
                        ? 'bg-[var(--color-accent-soft)] text-[var(--color-accent)]'
                        : 'text-[var(--color-text-secondary)] hover:bg-[var(--color-panel)] hover:text-[var(--color-text-primary)]'
                    )}
                    title={collapsed ? item.label : undefined}
                  >
                    <item.icon size={17} className="flex-shrink-0" />
                    {!collapsed && <span>{item.label}</span>}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="p-2 border-t border-[var(--color-border-subtle)]">
          <Link
            href="/"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] hover:bg-[var(--color-panel)] transition-colors"
            title={collapsed ? 'Back to Site' : undefined}
          >
            <LogOut size={17} className="flex-shrink-0" />
            {!collapsed && <span>Back to Site</span>}
          </Link>
        </div>
      </aside>

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 flex items-center justify-between px-6 bg-charcoal-900 border-b border-[var(--color-border-subtle)] flex-shrink-0">
          <div>
            <p className="text-sm font-medium text-[var(--color-text-primary)]">
              The Mandarin Oriental Residences
            </p>
            <p className="text-xs text-[var(--color-text-muted)]">Knightsbridge, London</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-xl text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] hover:bg-[var(--color-panel)] transition-colors">
              <Bell size={18} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[var(--color-accent)]" />
            </button>
            <div className="w-8 h-8 rounded-xl bg-[var(--color-accent-soft)] border border-[rgba(163,230,53,0.2)] flex items-center justify-center">
              <span className="text-xs font-semibold text-[var(--color-accent)]">JD</span>
            </div>
          </div>
        </header>

        <div className="bg-amber-500/10 border-b border-amber-500/20 px-6 py-2 flex items-center gap-2 flex-shrink-0">
          <span className="text-xs text-amber-400 font-medium">
            &#9889; Demo Mode — This portal displays sample data for demonstration purposes only.
          </span>
        </div>

        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
