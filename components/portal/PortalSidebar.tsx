"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

/** A single portal navigation item. */
interface PortalNavItem {
  navLabel: string;
  navHref: string;
  navIconPath: string;
}

const PORTAL_NAV_ITEMS: PortalNavItem[] = [
  {
    navLabel: "Dashboard",
    navHref: "/portal",
    navIconPath:
      "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M9 22V12h6v10",
  },
  {
    navLabel: "My Project",
    navHref: "/portal/project",
    navIconPath:
      "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z",
  },
  {
    navLabel: "Updates",
    navHref: "/portal/updates",
    navIconPath:
      "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
  },
  {
    navLabel: "Photos",
    navHref: "/portal/photos",
    navIconPath:
      "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z M12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
  },
  {
    navLabel: "Milestones",
    navHref: "/portal/milestones",
    navIconPath:
      "M9 11l3 3L22 4 M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",
  },
  {
    navLabel: "Documents",
    navHref: "/portal/documents",
    navIconPath:
      "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8",
  },
  {
    navLabel: "Compliance",
    navHref: "/portal/compliance",
    navIconPath:
      "M9 11l3 3L22 4 M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",
  },
  {
    navLabel: "Warranties",
    navHref: "/portal/warranties",
    navIconPath:
      "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  },
  {
    navLabel: "Maintenance",
    navHref: "/portal/maintenance",
    navIconPath:
      "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
  },
];

/**
 * Collapsible sidebar navigation for the client portal.
 * Highlights the currently active route.
 */
export function PortalSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const currentPathname = usePathname();

  return (
    <aside
      className={`flex flex-shrink-0 flex-col border-r border-white/10 bg-zinc-900 transition-all duration-300 ${
        isCollapsed ? "w-16" : "w-60"
      }`}
    >
      {/* Sidebar brand */}
      <div className="flex h-16 items-center justify-between border-b border-white/10 px-4">
        {!isCollapsed && (
          <div className="flex items-baseline gap-1">
            <span className="text-sm font-bold tracking-wider text-white uppercase">
              Pelham
            </span>
            <span className="ml-1 text-sm font-bold tracking-wider text-lime-400 uppercase">
              Portal
            </span>
          </div>
        )}
        <button
          type="button"
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          onClick={() => setIsCollapsed((prev) => !prev)}
          className="ml-auto rounded-lg p-1.5 text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-white"
        >
          {isCollapsed ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          )}
        </button>
      </div>

      {/* Navigation links */}
      <nav className="flex-1 overflow-y-auto px-2 py-4">
        <ul className="flex flex-col gap-1">
          {PORTAL_NAV_ITEMS.map((item) => {
            const isActiveLink = currentPathname === item.navHref;
            return (
              <li key={item.navHref}>
                <Link
                  href={item.navHref}
                  title={isCollapsed ? item.navLabel : undefined}
                  className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all ${
                    isActiveLink
                      ? "bg-lime-400/10 text-lime-400"
                      : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="shrink-0"
                    aria-hidden="true"
                  >
                    <path d={item.navIconPath} />
                  </svg>
                  {!isCollapsed && <span>{item.navLabel}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Back to site / sign out */}
      <div className="border-t border-white/10 p-2">
        <Link
          href="/"
          title={isCollapsed ? "Back to website" : undefined}
          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-zinc-500 transition-colors hover:bg-zinc-800 hover:text-zinc-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="shrink-0"
            aria-hidden="true"
          >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4 M16 17l5-5-5-5 M21 12H9" />
          </svg>
          {!isCollapsed && <span>Back to website</span>}
        </Link>
      </div>
    </aside>
  );
}
