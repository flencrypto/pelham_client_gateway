import type { ReactNode } from "react";
import { AdminSidebar } from "@/components/admin/AdminSidebar";

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="flex h-screen overflow-hidden bg-zinc-950">
      <AdminSidebar />

      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top bar */}
        <header className="flex h-16 flex-shrink-0 items-center justify-between border-b border-white/10 bg-zinc-900 px-6">
          <div>
            <p className="text-sm font-medium text-white">Admin Console</p>
            <p className="text-xs text-zinc-500">Pelham Interiors — Staff Only</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-zinc-700 bg-zinc-800">
              <span className="text-xs font-semibold text-zinc-300">PM</span>
            </div>
          </div>
        </header>

        {/* Demo banner */}
        <div className="flex flex-shrink-0 items-center gap-2 border-b border-amber-400/20 bg-amber-400/10 px-6 py-2">
          <span className="text-xs font-medium text-amber-300">
            ⚡ Demo Mode — Admin console displaying sample data. Photo uploads and email sync are UI-only in this demo.
          </span>
        </div>

        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
