import PortalShell from '@/components/portal/PortalShell'
import EmptyState from '@/components/shared/EmptyState'

export default function PortalAccountPage() {
  return (
    <PortalShell>
      <div className="p-6 lg:p-8">
        <EmptyState
          title="Account"
          description="Your account details, preferences, and notification settings will appear here."
        />
      </div>
    </PortalShell>
  )
}
