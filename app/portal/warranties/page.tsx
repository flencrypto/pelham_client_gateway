import type { Metadata } from "next";
import { getAdminProjectData } from "@/data/pelhamAdminData";
import type { WarrantyItem } from "@/types/pelham";

export const metadata: Metadata = {
  title: "Warranties — Pelham Client Portal",
};

const DEMO_WARRANTIES = getAdminProjectData("proj-canary-wharf-hq").warranties;

const NOW_MS = Date.now();

function daysUntilExpiry(expiryDate: string) {
  return Math.ceil(
    (new Date(expiryDate).getTime() - NOW_MS) / (1000 * 60 * 60 * 24)
  );
}

function WarrantyStatusBadge({ expiryDate }: { expiryDate: string }) {
  const days = daysUntilExpiry(expiryDate);
  if (days <= 0)
    return (
      <span className="rounded-full bg-red-400/10 px-2.5 py-0.5 text-xs font-medium text-red-400">
        Expired
      </span>
    );
  if (days < 180)
    return (
      <span className="rounded-full bg-amber-400/10 px-2.5 py-0.5 text-xs font-medium text-amber-400">
        {days}d remaining
      </span>
    );
  return (
    <span className="rounded-full bg-emerald-400/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
      Active
    </span>
  );
}

function WarrantyCard({ item }: { item: WarrantyItem }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-zinc-900 p-5">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-white">{item.productName}</p>
          <p className="text-xs text-zinc-500">
            {item.supplierName} &middot; Model: {item.modelNumber}
          </p>
        </div>
        <WarrantyStatusBadge expiryDate={item.warrantyExpiryDate} />
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <div>
          <p className="text-xs text-zinc-500">Installed</p>
          <p className="mt-0.5 text-sm text-zinc-300">{item.installationDate}</p>
        </div>
        <div>
          <p className="text-xs text-zinc-500">Expires</p>
          <p className="mt-0.5 text-sm text-zinc-300">{item.warrantyExpiryDate}</p>
        </div>
        <div className="col-span-2">
          <p className="text-xs text-zinc-500">Proof document</p>
          <p className="mt-0.5 text-xs text-lime-400">{item.proofDocumentName}</p>
        </div>
      </div>

      {item.notes && (
        <p className="mt-3 text-xs leading-5 text-zinc-500">{item.notes}</p>
      )}
    </div>
  );
}

export default function PortalWarrantiesPage() {
  const warranties = DEMO_WARRANTIES;
  const active = warranties.filter((w) => daysUntilExpiry(w.warrantyExpiryDate) > 0);
  const expired = warranties.filter((w) => daysUntilExpiry(w.warrantyExpiryDate) <= 0);
  const expiringSoon = active.filter(
    (w) => daysUntilExpiry(w.warrantyExpiryDate) < 180
  );

  return (
    <div className="space-y-8 p-6 lg:p-8">
      <div>
        <h1 className="text-2xl font-bold text-white">Product Warranties</h1>
        <p className="mt-1 text-sm text-zinc-400">
          Installed products, suppliers, models, and warranty expiry dates.
        </p>
      </div>

      {/* Summary strip */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: "Active", count: active.length, colour: "text-emerald-400" },
          { label: "Expiring Soon", count: expiringSoon.length, colour: "text-amber-400" },
          { label: "Expired", count: expired.length, colour: "text-red-400" },
        ].map((s) => (
          <div
            key={s.label}
            className="rounded-2xl border border-white/10 bg-zinc-900 p-4"
          >
            <p className={`text-2xl font-bold ${s.colour}`}>{s.count}</p>
            <p className="mt-0.5 text-xs text-zinc-400">{s.label}</p>
          </div>
        ))}
      </div>

      {warranties.length > 0 ? (
        <div className="flex flex-col gap-4">
          {warranties.map((item) => (
            <WarrantyCard key={item.warrantyId} item={item} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-zinc-900 py-16 text-center">
          <p className="text-sm text-zinc-500">No warranty records yet.</p>
        </div>
      )}
    </div>
  );
}
