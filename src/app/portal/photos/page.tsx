import PortalShell from '@/components/portal/PortalShell'
import EmptyState from '@/components/shared/EmptyState'

export default function PortalPhotosPage() {
  return (
    <PortalShell>
      <div className="p-6 lg:p-8">
        <EmptyState
          title="Photos"
          description="Site photography and progress images will appear here."
        />
      </div>
    </PortalShell>
  )
}
