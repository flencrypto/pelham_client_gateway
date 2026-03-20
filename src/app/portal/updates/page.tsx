import PortalShell from '@/components/portal/PortalShell'
import EmptyState from '@/components/shared/EmptyState'

export default function PortalUpdatesPage() {
  return (
    <PortalShell>
      <div className="p-6 lg:p-8">
        <EmptyState
          title="Updates"
          description="Project updates, progress reports, and communications will appear here."
        />
      </div>
    </PortalShell>
  )
}
