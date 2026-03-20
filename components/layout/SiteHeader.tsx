"use client";

import React, { useState } from "react";
import Link from "next/link";

/** Navigation link definition used in the site header. */
interface SiteNavigationLink {
  linkLabel: string;
  linkHref: string;
}

const PRIMARY_NAVIGATION_LINKS: SiteNavigationLink[] = [
  { linkLabel: "Projects", linkHref: "#projects" },
  { linkLabel: "Services", linkHref: "#services" },
  { linkLabel: "Process", linkHref: "#process" },
  { linkLabel: "Sustainability", linkHref: "#sustainability" },
  { linkLabel: "Insights", linkHref: "#insights" },
];

/**
 * The fixed site header with the Pelham wordmark and primary navigation.
 * On mobile the navigation collapses into a hamburger menu.
 */
export function SiteHeader() {
  const [isMobileNavigationOpen, setIsMobileNavigationOpen] = useState(false);

  function toggleMobileNavigation() {
    setIsMobileNavigationOpen((previousState) => !previousState);
  }

  function closeMobileNavigation() {
    setIsMobileNavigationOpen(false);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8">
        {/* Brand wordmark */}
        <Link
          href="/"
          className="flex items-center gap-2 text-white"
          aria-label="Pelham Interiors — return to homepage"
        >
          <span className="h-6 w-6 rounded bg-lime-400" aria-hidden="true" />
          <span className="text-lg font-bold tracking-tight">Pelham</span>
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label="Primary site navigation"
          className="hidden items-center gap-8 md:flex"
        >
          {PRIMARY_NAVIGATION_LINKS.map((navigationLink) => (
            <a
              key={navigationLink.linkHref}
              href={navigationLink.linkHref}
              className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
            >
              {navigationLink.linkLabel}
            </a>
          ))}
        </nav>

        {/* CTA + mobile hamburger */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden rounded-full bg-lime-400 px-4 py-2 text-sm font-semibold text-zinc-900 transition-all hover:bg-lime-300 md:block"
          >
            Get in Touch
          </a>

          {/* Mobile menu toggle button */}
          <button
            type="button"
            aria-label={
              isMobileNavigationOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isMobileNavigationOpen}
            onClick={toggleMobileNavigation}
            className="rounded-md p-2 text-zinc-400 hover:bg-zinc-800 hover:text-white md:hidden"
          >
            {isMobileNavigationOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {isMobileNavigationOpen && (
        <nav
          aria-label="Mobile site navigation"
          className="border-t border-white/10 bg-zinc-950 px-6 pb-6 pt-4 md:hidden"
        >
          <ul className="flex flex-col gap-4">
            {PRIMARY_NAVIGATION_LINKS.map((navigationLink) => (
              <li key={navigationLink.linkHref}>
                <a
                  href={navigationLink.linkHref}
                  onClick={closeMobileNavigation}
                  className="block text-base font-medium text-zinc-300 hover:text-white"
                >
                  {navigationLink.linkLabel}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={closeMobileNavigation}
                className="mt-2 block rounded-full bg-lime-400 px-4 py-2 text-center text-sm font-semibold text-zinc-900"
              >
                Get in Touch
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
