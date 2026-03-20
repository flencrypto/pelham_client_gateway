'use client'

import { useState, useMemo } from 'react'
import { projects } from '@/lib/data'
import SearchInput from '@/components/shared/SearchInput'
import TabSwitcher from '@/components/shared/TabSwitcher'
import ProjectCard from './ProjectCard'
import EmptyState from '@/components/shared/EmptyState'
import SectionHeader from '@/components/shared/SectionHeader'

const sectors = ['All', 'Residential', 'Commercial', 'Hospitality']

export default function ProjectExplorer() {
  const [search, setSearch] = useState('')
  const [activeSector, setActiveSector] = useState('All')

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesSector = activeSector === 'All' || p.sector === activeSector
      const matchesSearch =
        !search ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.location.toLowerCase().includes(search.toLowerCase())
      return matchesSector && matchesSearch
    })
  }, [search, activeSector])

  return (
    <section id="projects" className="bg-charcoal-900 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <SectionHeader
            eyebrow="Our Work"
            title="Selected Projects"
            subtitle="A curated portfolio of commissions across London's most distinguished addresses."
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <TabSwitcher
            tabs={sectors}
            active={activeSector}
            onChange={setActiveSector}
          />
          <SearchInput
            value={search}
            onChange={setSearch}
            placeholder="Search projects..."
            className="sm:w-64"
          />
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <EmptyState
            title="No projects match your criteria"
            description="Try adjusting your search or sector filter."
          />
        )}
      </div>
    </section>
  )
}
