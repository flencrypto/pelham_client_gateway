import type { ReactNode } from "react";
import { PortalSidebar } from "@/components/portal/PortalSidebar";

interface PortalLayoutProps {
  children: ReactNode;
}

/**
 * Wraps all client portal pages with the persistent sidebar navigation.
 */
export default function PortalLayout({ children }: PortalLayoutProps) {
  return (
    <div className="flex h-screen overflow-hidden bg-zinc-950">
      <PortalSidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Portal top bar */}
        <header className="flex h-16 flex-shrink-0 items-center justify-between border-b border-white/10 bg-zinc-900 px-6">
          <div>
            <p className="text-sm font-medium text-white">
              The Mandarin Oriental Residences
            </p>
            <p className="text-xs text-zinc-500">Knightsbridge, London</p>
          </div>
          <div className="flex items-center gap-3">
            {/* Notification bell */}
            <button
              type="button"
              aria-label="View notifications"
              className="relative rounded-xl p-2 text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-lime-400" />
            </button>
            {/* Avatar */}
            <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-lime-400/20 bg-lime-400/10">
              <span className="text-xs font-semibold text-lime-400">JD</span>
            </div>
          </div>
        </header>

        {/* Demo mode banner */}
        <div className="flex flex-shrink-0 items-center gap-2 border-b border-amber-400/20 bg-amber-400/10 px-6 py-2">
          <span className="text-xs font-medium text-amber-300">
            ⚡ Demo Mode — This portal displays sample data for demonstration purposes only.
          </span>
        </div>

        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
