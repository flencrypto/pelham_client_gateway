import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="bg-charcoal-950 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className="relative overflow-hidden rounded-3xl bg-[var(--color-panel)] border border-[var(--color-border-subtle)] p-12 lg:p-20 text-center"
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(163,230,53,0.08) 0%, transparent 70%)',
            }}
          />
          <div className="relative">
            <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-text-muted)] mb-4">
              Begin the Conversation
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl font-medium text-[var(--color-text-primary)] mb-6 max-w-2xl mx-auto leading-tight">
              Ready to Transform Your Space?
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] mb-10 max-w-lg mx-auto">
              We take on a limited number of new commissions each year to ensure exceptional service. Let&apos;s discuss your project.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:studio@pelhaminteriors.com"
                className="group inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-white text-charcoal-950 text-sm font-semibold tracking-wide hover:bg-zinc-100 transition-all duration-200 shadow-[0_2px_20px_rgba(255,255,255,0.1)]"
              >
                Request a Consultation
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                href="/portal"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl border border-[var(--color-border-strong)] text-[var(--color-text-secondary)] text-sm font-semibold hover:text-[var(--color-text-primary)] hover:border-[var(--color-border-strong)] transition-all duration-200"
              >
                Existing Clients
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
