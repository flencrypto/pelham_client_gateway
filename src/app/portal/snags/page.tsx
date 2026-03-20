import PortalShell from '@/components/portal/PortalShell'
import EmptyState from '@/components/shared/EmptyState'

export default function PortalSnagsPage() {
  return (
    <PortalShell>
      <div className="p-6 lg:p-8">
        <EmptyState
          title="Snags"
          description="Snag items, their status, and completion tracking will appear here."
        />
      </div>
    </PortalShell>
  )
}
