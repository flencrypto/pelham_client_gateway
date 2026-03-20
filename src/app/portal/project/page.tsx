import PortalShell from '@/components/portal/PortalShell'
import EmptyState from '@/components/shared/EmptyState'

export default function PortalProjectPage() {
  return (
    <PortalShell>
      <div className="p-6 lg:p-8">
        <EmptyState
          title="My Project"
          description="Full project details, schedules, and specifications will appear here."
        />
      </div>
    </PortalShell>
  )
}
