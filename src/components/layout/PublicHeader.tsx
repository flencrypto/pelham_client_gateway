'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/cn'

const navLinks = [
  { label: 'Work', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Insights', href: '#insights' },
  { label: 'Sustainability', href: '#sustainability' },
]

export default function PublicHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-charcoal-900/95 backdrop-blur-md border-b border-[var(--color-border-subtle)] shadow-glass'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-baseline gap-0.5 group">
            <span className="font-sans font-semibold tracking-[0.15em] text-sm text-[var(--color-text-primary)] uppercase">
              Pelham
            </span>
            <span className="font-sans font-semibold tracking-[0.15em] text-sm text-[var(--color-accent)] uppercase ml-1">
              Interiors
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-medium tracking-widest uppercase text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/portal"
              className="hidden lg:inline-flex items-center px-4 py-2 rounded-lg text-xs font-semibold tracking-wider uppercase border border-[var(--color-border-strong)] text-[var(--color-text-primary)] hover:border-[rgba(255,255,255,0.25)] hover:bg-[rgba(255,255,255,0.04)] transition-all duration-200"
            >
              Client Portal
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-charcoal-900/98 backdrop-blur-md border-t border-[var(--color-border-subtle)]">
          <div className="px-6 py-6 flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium tracking-widest uppercase text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/portal"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center px-4 py-3 rounded-lg text-xs font-semibold tracking-wider uppercase border border-[var(--color-border-strong)] text-[var(--color-text-primary)]"
            >
              Client Portal
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
