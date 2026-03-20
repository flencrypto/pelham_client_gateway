'use client'

import { MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'
import StatusBadge from '@/components/shared/StatusBadge'
import ImagePanel from '@/components/shared/ImagePanel'
import type { Project } from '@/types'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className={cn(
        'group flex flex-col rounded-2xl overflow-hidden',
        'bg-[var(--color-surface)] border border-[var(--color-border-subtle)]',
        'hover:border-[rgba(163,230,53,0.2)] hover:shadow-card-hover',
        'transition-all duration-300'
      )}
    >
      <ImagePanel sector={project.sector} aspectRatio="aspect-[16/9]" className="rounded-none" />

      <div className="flex flex-col gap-4 p-5 flex-1">
        <div className="flex items-center gap-2 flex-wrap">
          <StatusBadge sector={project.sector} />
          <StatusBadge status={project.status} />
        </div>

        <div>
          <h3 className="font-medium text-[var(--color-text-primary)] text-sm leading-snug group-hover:text-[var(--color-accent)] transition-colors duration-200">
            {project.name}
          </h3>
          <div className="flex items-center gap-1.5 mt-1.5">
            <MapPin size={11} className="text-[var(--color-text-muted)]" />
            <span className="text-xs text-[var(--color-text-muted)]">{project.location}</span>
          </div>
        </div>

        <div className="mt-auto pt-4 border-t border-[var(--color-border-subtle)]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-[var(--color-text-muted)]">Progress</span>
            <span className="text-xs font-semibold text-[var(--color-accent)]">{project.progress}%</span>
          </div>
          <div className="h-1 bg-[var(--color-panel)] rounded-full overflow-hidden">
            <div
              className="h-full bg-[var(--color-accent)] rounded-full transition-all duration-500"
              style={{ width: `${project.progress}%` }}
            />
          </div>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-xs text-[var(--color-text-muted)]">Contract Value</span>
            <span className="text-sm font-semibold text-[var(--color-text-primary)]">{project.value}</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
