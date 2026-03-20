import React from "react";
import Link from "next/link";

/** A single column of links in the site footer. */
interface FooterLinkColumn {
  columnHeading: string;
  columnLinks: FooterNavigationLink[];
}

interface FooterNavigationLink {
  linkLabel: string;
  linkHref: string;
}

const FOOTER_LINK_COLUMNS: FooterLinkColumn[] = [
  {
    columnHeading: "Services",
    columnLinks: [
      { linkLabel: "Interior Design", linkHref: "#services" },
      { linkLabel: "Workplace Strategy", linkHref: "#services" },
      { linkLabel: "Project Management", linkHref: "#services" },
      { linkLabel: "FF&E Procurement", linkHref: "#services" },
      { linkLabel: "Sustainability Consulting", linkHref: "#services" },
    ],
  },
  {
    columnHeading: "Sectors",
    columnLinks: [
      { linkLabel: "Commercial Office", linkHref: "#projects" },
      { linkLabel: "Hospitality", linkHref: "#projects" },
      { linkLabel: "Retail", linkHref: "#projects" },
      { linkLabel: "Healthcare", linkHref: "#projects" },
      { linkLabel: "Education", linkHref: "#projects" },
    ],
  },
  {
    columnHeading: "Company",
    columnLinks: [
      { linkLabel: "About Us", linkHref: "#" },
      { linkLabel: "Sustainability", linkHref: "#sustainability" },
      { linkLabel: "Insights", linkHref: "#insights" },
      { linkLabel: "Careers", linkHref: "#" },
      { linkLabel: "Contact", linkHref: "#contact" },
    ],
  },
];

const CURRENT_YEAR = new Date().getFullYear();

/**
 * The site footer containing navigation columns and company details.
 */
export function SiteFooter() {
  return (
    <footer className="bg-zinc-950 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand column */}
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-white"
              aria-label="Pelham Interiors homepage"
            >
              <span className="h-6 w-6 rounded bg-lime-400" aria-hidden="true" />
              <span className="text-lg font-bold tracking-tight">Pelham</span>
            </Link>
            <p className="max-w-xs text-sm leading-6 text-zinc-500">
              Premium interior design and fit-out specialists serving commercial,
              hospitality and residential clients since 1996.
            </p>
          </div>

          {/* Navigation columns */}
          {FOOTER_LINK_COLUMNS.map((linkColumn) => (
            <FooterLinkColumnBlock
              key={linkColumn.columnHeading}
              linkColumn={linkColumn}
            />
          ))}
        </div>

        {/* Footer bottom bar */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-zinc-600">
            © {CURRENT_YEAR} Pelham Interiors Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-zinc-600 hover:text-zinc-400">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-zinc-600 hover:text-zinc-400">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ---------------------------------------------------------------------------
// Internal helper component
// ---------------------------------------------------------------------------

interface FooterLinkColumnBlockProps {
  linkColumn: FooterLinkColumn;
}

function FooterLinkColumnBlock({ linkColumn }: FooterLinkColumnBlockProps) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-sm font-semibold text-white">
        {linkColumn.columnHeading}
      </h3>
      <ul className="flex flex-col gap-2">
        {linkColumn.columnLinks.map((navigationLink) => (
          <li key={navigationLink.linkLabel}>
            <a
              href={navigationLink.linkHref}
              className="text-sm text-zinc-500 transition-colors hover:text-zinc-300"
            >
              {navigationLink.linkLabel}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
