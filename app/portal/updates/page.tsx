import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Updates — Pelham Client Portal",
};

const UPDATES = [
  { date: "Today", title: "Master bedroom joinery installation complete", category: "Progress", body: "The bespoke joinery units in the master bedroom suite have been installed and signed off by the site supervisor. Snag list items reviewed — all within acceptable tolerances." },
  { date: "Yesterday", title: "FF&E delivery confirmed for W/C 2 Dec", category: "Logistics", body: "The final FF&E consignment from Bulthaup and Minotti has been confirmed for delivery during the week commencing 2 December. Storage area on site has been cleared and prepared." },
  { date: "28 Nov", title: "Client sign-off received on finishes schedule", category: "Approval", body: "Written sign-off received from James Devereux approving the revised finishes schedule v4.2. Fabrication orders have been placed with all relevant suppliers." },
  { date: "25 Nov", title: "Snag item #12 resolved — bathroom tiling", category: "Snag", body: "Rectification works to the marble tiling alignment in en-suite #3 completed and inspected. Item closed." },
  { date: "20 Nov", title: "Structural works in living area signed off", category: "Progress", body: "The structural steel frame for the extended living area opening has been certified by the structural engineer. Plastering and first fix works to commence Monday." },
];

export default function PortalUpdatesPage() {
  return (
    <div className="space-y-6 p-6 lg:p-8">
      <div>
        <h1 className="text-2xl font-bold text-white">Updates</h1>
        <p className="mt-1 text-sm text-zinc-400">
          All project communications and progress reports.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        {UPDATES.map((update, i) => (
          <div key={i} className="rounded-2xl border border-white/10 bg-zinc-900 p-6">
            <div className="mb-3 flex items-center gap-3">
              <span className="text-xs text-zinc-500">{update.date}</span>
              <span className="rounded-full bg-lime-400/10 px-2 py-0.5 text-xs font-medium text-lime-400">
                {update.category}
              </span>
            </div>
            <h2 className="mb-2 text-base font-semibold text-white">{update.title}</h2>
            <p className="text-sm leading-6 text-zinc-400">{update.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
