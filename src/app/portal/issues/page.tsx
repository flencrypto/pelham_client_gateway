import PortalShell from '@/components/portal/PortalShell'
import EmptyState from '@/components/shared/EmptyState'

export default function PortalIssuesPage() {
  return (
    <PortalShell>
      <div className="p-6 lg:p-8">
        <EmptyState
          title="Issues"
          description="Raised issues, their status, and resolution notes will appear here."
        />
      </div>
    </PortalShell>
  )
}
