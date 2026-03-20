import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { MarketingHeroSection } from "@/components/sections/MarketingHeroSection";
import { ProjectExplorerSection } from "@/components/sections/ProjectExplorerSection";
import { ServiceOfferingsSection } from "@/components/sections/ServiceOfferingsSection";
import { ProjectProcessSection } from "@/components/sections/ProjectProcessSection";
import { SustainabilityInitiativesSection } from "@/components/sections/SustainabilityInitiativesSection";
import { LatestInsightsSection } from "@/components/sections/LatestInsightsSection";
import { IndustryCredentialsSection } from "@/components/sections/IndustryCredentialsSection";
import {
  pelhamBusinessMetrics,
  pelhamInsightArticles,
  pelhamInteriorProjects,
  pelhamIndustryCredentials,
  pelhamProjectProcessStages,
  pelhamServiceOfferings,
  pelhamSustainabilityInitiatives,
} from "@/data/pelhamSeedData";

export default function PelhamHomePage() {
  return (
    <>
      <SiteHeader />

      <main>
        <MarketingHeroSection
          companyTaglineText="Premium Interior Design Since 1996"
          heroHeadingText="Interiors That Elevate Every Experience"
          heroBodyText="Pelham delivers award-winning interior design, workplace strategy and fit-out across commercial, hospitality, healthcare and residential sectors. Every project is shaped by rigorous craft, client partnership and a commitment to lasting impact."
          businessMetrics={pelhamBusinessMetrics}
          requestBriefingHref="#contact"
          viewProjectsHref="#projects"
        />

        <ProjectExplorerSection allProjects={pelhamInteriorProjects} />

        <ServiceOfferingsSection serviceOfferings={pelhamServiceOfferings} />

        <ProjectProcessSection processStages={pelhamProjectProcessStages} />

        <SustainabilityInitiativesSection
          sustainabilityInitiatives={pelhamSustainabilityInitiatives}
        />

        <LatestInsightsSection insightArticles={pelhamInsightArticles} />

        <IndustryCredentialsSection
          industryCredentials={pelhamIndustryCredentials}
        />
      </main>

      <SiteFooter />
    </>
  );
}
