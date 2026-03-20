import PortalShell from '@/components/portal/PortalShell'
import EmptyState from '@/components/shared/EmptyState'

export default function PortalDocumentsPage() {
  return (
    <PortalShell>
      <div className="p-6 lg:p-8">
        <EmptyState
          title="Documents"
          description="Contracts, specifications, and project documents will appear here."
        />
      </div>
    </PortalShell>
  )
}
