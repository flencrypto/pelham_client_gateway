'use client'

import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'

export default function MarketingHero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-charcoal-950">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(163,230,53,0.06) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: 'radial-gradient(ellipse 60% 80% at 80% 100%, rgba(163,230,53,0.04) 0%, transparent 60%)',
          }}
        />
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(163,230,53,0.3), transparent)' }}
        />
      </div>

      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-8 h-px bg-[var(--color-accent)]" />
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[var(--color-accent)]">
              Pelham Interiors
            </p>
            <div className="w-8 h-px bg-[var(--color-accent)]" />
          </div>

          <h1 className="font-serif font-medium leading-[1.05] mb-6">
            <span className="block text-5xl sm:text-6xl lg:text-8xl text-[var(--color-text-primary)]">
              Spaces That Define
            </span>
            <span className="block text-5xl sm:text-6xl lg:text-8xl text-[var(--color-accent)]">
              A Legacy
            </span>
          </h1>

          <p className="mt-6 text-lg text-[var(--color-text-secondary)] max-w-xl mx-auto leading-relaxed">
            Premium commercial interiors for London&apos;s most distinguished addresses. Residential, hospitality, and workplace environments of lasting quality.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[var(--color-accent)] text-charcoal-950 text-sm font-semibold tracking-wide hover:bg-lime-300 transition-all duration-200 shadow-lime-glow"
            >
              View Our Work
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              href="/portal"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-[var(--color-border-strong)] text-[var(--color-text-secondary)] text-sm font-semibold tracking-wide hover:border-[var(--color-border-strong)] hover:text-[var(--color-text-primary)] transition-all duration-200 bg-[rgba(255,255,255,0.03)]"
            >
              Client Portal
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-20 flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-widest uppercase text-[var(--color-text-muted)]">Scroll</span>
          <ChevronDown size={16} className="text-[var(--color-text-muted)] animate-bounce" />
        </motion.div>
      </div>
    </section>
  )
}
