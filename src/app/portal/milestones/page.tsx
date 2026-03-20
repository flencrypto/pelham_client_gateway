import PortalShell from '@/components/portal/PortalShell'
import EmptyState from '@/components/shared/EmptyState'

export default function PortalMilestonesPage() {
  return (
    <PortalShell>
      <div className="p-6 lg:p-8">
        <EmptyState
          title="Milestones"
          description="Project milestones, key dates, and sign-off checkpoints will appear here."
        />
      </div>
    </PortalShell>
  )
}
