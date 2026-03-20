import AppShell from '@/components/layout/AppShell'
import PublicHeader from '@/components/layout/PublicHeader'
import Footer from '@/components/layout/Footer'
import MarketingHero from '@/components/marketing/MarketingHero'
import MetricsStrip from '@/components/marketing/MetricsStrip'
import FeaturedProject from '@/components/marketing/FeaturedProject'
import ProjectExplorer from '@/components/marketing/ProjectExplorer'
import ServicesGrid from '@/components/marketing/ServicesGrid'
import ProcessTimeline from '@/components/marketing/ProcessTimeline'
import InsightsPanel from '@/components/marketing/InsightsPanel'
import SustainabilitySection from '@/components/marketing/SustainabilitySection'
import CTASection from '@/components/marketing/CTASection'

export default function HomePage() {
  return (
    <AppShell>
      <PublicHeader />
      <MarketingHero />
      <MetricsStrip />
      <FeaturedProject />
      <ProjectExplorer />
      <ServicesGrid />
      <ProcessTimeline />
      <InsightsPanel />
      <SustainabilitySection />
      <CTASection />
      <Footer />
    </AppShell>
  )
}
