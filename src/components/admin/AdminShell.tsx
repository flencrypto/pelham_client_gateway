import Link from 'next/link'
import { LayoutGrid, FolderOpen, Users, Settings, LogOut, Bell } from 'lucide-react'

const navItems = [
  { label: 'Overview', href: '/admin', icon: LayoutGrid },
  { label: 'Projects', href: '/admin?section=projects', icon: FolderOpen },
  { label: 'Clients', href: '/admin?section=clients', icon: Users },
  { label: 'Settings', href: '/admin?section=settings', icon: Settings },
]

interface AdminShellProps {
  children: React.ReactNode
}

export default function AdminShell({ children }: AdminShellProps) {
  return (
    <div className="min-h-screen bg-charcoal-950 flex flex-col">
      <header className="h-16 bg-charcoal-900 border-b border-[var(--color-border-subtle)] flex items-center px-6 gap-8 flex-shrink-0">
        <div className="flex items-baseline gap-1">
          <span className="font-sans font-semibold tracking-wider text-sm text-[var(--color-text-primary)] uppercase">Pelham</span>
          <span className="font-sans font-semibold tracking-wider text-sm text-[var(--color-accent)] uppercase ml-1">Admin</span>
        </div>

        <nav className="flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-panel)] transition-colors"
            >
              <item.icon size={15} />
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <button className="p-2 rounded-xl text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] hover:bg-[var(--color-panel)] transition-colors">
            <Bell size={17} />
          </button>
          <div className="w-8 h-8 rounded-xl bg-[var(--color-accent-soft)] border border-[rgba(163,230,53,0.2)] flex items-center justify-center">
            <span className="text-xs font-semibold text-[var(--color-accent)]">PH</span>
          </div>
          <Link
            href="/"
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] hover:bg-[var(--color-panel)] transition-colors"
          >
            <LogOut size={15} />
            Exit
          </Link>
        </div>
      </header>

      <div className="bg-amber-500/10 border-b border-amber-500/20 px-6 py-2 flex items-center gap-2">
        <span className="text-xs text-amber-400 font-medium">
          &#9889; Demo Mode — This admin panel displays sample data for demonstration purposes only.
        </span>
      </div>

      <main className="flex-1">
        {children}
      </main>
    </div>
  )
}
