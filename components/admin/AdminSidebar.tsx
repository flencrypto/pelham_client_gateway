"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface AdminNavItem {
  navLabel: string;
  navHref: string;
  navIconPath: string;
}

const ADMIN_NAV_ITEMS: AdminNavItem[] = [
  {
    navLabel: "Dashboard",
    navHref: "/admin",
    navIconPath:
      "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M9 22V12h6v10",
  },
  {
    navLabel: "All Projects",
    navHref: "/admin/projects",
    navIconPath:
      "M3 3h7v7H3z M14 3h7v7h-7z M14 14h7v7h-7z M3 14h7v7H3z",
  },
];

export function AdminSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const currentPathname = usePathname();

  return (
    <aside
      className={`flex flex-shrink-0 flex-col border-r border-white/10 bg-zinc-900 transition-all duration-300 ${
        isCollapsed ? "w-16" : "w-60"
      }`}
    >
      {/* Brand */}
      <div className="flex h-16 items-center justify-between border-b border-white/10 px-4">
        {!isCollapsed && (
          <div className="flex items-baseline gap-1">
            <span className="text-sm font-bold uppercase tracking-wider text-white">
              Pelham
            </span>
            <span className="ml-1 text-sm font-bold uppercase tracking-wider text-lime-400">
              Admin
            </span>
          </div>
        )}
        <button
          type="button"
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          onClick={() => setIsCollapsed((p) => !p)}
          className="ml-auto rounded-lg p-1.5 text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-white"
        >
          {isCollapsed ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          )}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-2 py-4">
        <ul className="flex flex-col gap-1">
          {ADMIN_NAV_ITEMS.map((item) => {
            const isActive =
              item.navHref === "/admin"
                ? currentPathname === "/admin"
                : currentPathname.startsWith(item.navHref);
            return (
              <li key={item.navHref}>
                <Link
                  href={item.navHref}
                  title={isCollapsed ? item.navLabel : undefined}
                  className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all ${
                    isActive
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

      {/* Footer */}
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
