const footerLinks = {
  Studio: [
    { label: 'About', href: '#' },
    { label: 'Our Work', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
  ],
  Sectors: [
    { label: 'Residential', href: '#' },
    { label: 'Commercial', href: '#' },
    { label: 'Hospitality', href: '#' },
    { label: 'Retail', href: '#' },
  ],
  Connect: [
    { label: 'Insights', href: '#insights' },
    { label: 'Sustainability', href: '#sustainability' },
    { label: 'Careers', href: '#' },
    { label: 'Press', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-charcoal-950 border-t border-[var(--color-border-subtle)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-baseline gap-1 mb-4">
              <span className="font-sans font-semibold tracking-[0.15em] text-base text-[var(--color-text-primary)] uppercase">
                Pelham
              </span>
              <span className="font-sans font-semibold tracking-[0.15em] text-base text-[var(--color-accent)] uppercase ml-1">
                Interiors
              </span>
            </div>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed max-w-xs">
              Premium commercial interior design studio. Crafting spaces that define businesses, inspire people, and endure.
            </p>
            <div className="mt-6 pt-6 border-t border-[var(--color-border-subtle)]">
              <p className="text-xs text-[var(--color-text-muted)]">
                14 Pelham Place, Knightsbridge<br />
                London SW7 2NJ<br />
                +44 20 7946 0321<br />
                studio@pelhaminteriors.com
              </p>
            </div>
          </div>

          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4 className="text-xs font-semibold tracking-widest uppercase text-[var(--color-text-muted)] mb-4">
                {group}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-[var(--color-border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--color-text-muted)]">
            &copy; 2024 Pelham Interiors Ltd. All rights reserved. Registered in England &amp; Wales No. 09876543.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
