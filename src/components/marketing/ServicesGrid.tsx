import { Building2, Sofa, ClipboardList, Lamp, LayoutDashboard, Star } from 'lucide-react'
import { services } from '@/lib/data'
import SectionHeader from '@/components/shared/SectionHeader'
import type { LucideIcon } from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  'building-2': Building2,
  'sofa': Sofa,
  'clipboard-list': ClipboardList,
  'lamp': Lamp,
  'layout-dashboard': LayoutDashboard,
  'star': Star,
}

export default function ServicesGrid() {
  return (
    <section id="services" className="bg-charcoal-950 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <SectionHeader
            eyebrow="What We Do"
            title="Studio Services"
            subtitle="A comprehensive range of design disciplines delivered by specialist teams."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--color-border-subtle)] rounded-2xl overflow-hidden">
          {services.map((service) => {
            const Icon = iconMap[service.icon] ?? Star
            return (
              <div
                key={service.id}
                className="group bg-charcoal-950 hover:bg-[var(--color-panel)] p-8 transition-colors duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-[var(--color-accent-soft)] flex items-center justify-center mb-5">
                  <Icon size={18} className="text-[var(--color-accent)]" />
                </div>
                <h3 className="font-medium text-[var(--color-text-primary)] mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
