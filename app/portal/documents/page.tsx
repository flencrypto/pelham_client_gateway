import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documents — Pelham Client Portal",
};

const DOCUMENTS = [
  { docTitle: "Design Package v4.2 — Signed", docType: "Design", docDate: "28 Nov 2024", docSize: "18.4 MB" },
  { docTitle: "Programme Schedule — Rev C", docType: "Programme", docDate: "20 Nov 2024", docSize: "2.1 MB" },
  { docTitle: "FF&E Specification Schedule", docType: "Specification", docDate: "15 Nov 2024", docSize: "4.7 MB" },
  { docTitle: "Contractor Tender Summary", docType: "Commercial", docDate: "1 Sep 2024", docSize: "1.2 MB" },
  { docTitle: "Health & Safety Plan", docType: "Compliance", docDate: "10 Aug 2024", docSize: "3.5 MB" },
  { docTitle: "Planning Consent Documentation", docType: "Compliance", docDate: "25 Jul 2024", docSize: "8.9 MB" },
  { docTitle: "Client Brief — Approved", docType: "Brief", docDate: "12 Jul 2024", docSize: "0.9 MB" },
];

const DOC_TYPE_COLOURS: Record<string, string> = {
  Design: "text-blue-400 bg-blue-400/10",
  Programme: "text-amber-400 bg-amber-400/10",
  Specification: "text-purple-400 bg-purple-400/10",
  Commercial: "text-emerald-400 bg-emerald-400/10",
  Compliance: "text-red-400 bg-red-400/10",
  Brief: "text-zinc-300 bg-zinc-700/50",
};

export default function PortalDocumentsPage() {
  return (
    <div className="space-y-6 p-6 lg:p-8">
      <div>
        <h1 className="text-2xl font-bold text-white">Documents</h1>
        <p className="mt-1 text-sm text-zinc-400">
          All project drawings, specifications and approvals.
        </p>
      </div>
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/10">
              <th className="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-zinc-500">Document</th>
              <th className="hidden px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-zinc-500 sm:table-cell">Type</th>
              <th className="hidden px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-zinc-500 md:table-cell">Date</th>
              <th className="px-5 py-3.5 text-right text-xs font-semibold uppercase tracking-wider text-zinc-500">Size</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {DOCUMENTS.map((doc, i) => (
              <tr key={i} className="group transition-colors hover:bg-zinc-800/50">
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="shrink-0 text-zinc-600"
                      aria-hidden="true"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                    <span className="font-medium text-zinc-200 group-hover:text-white transition-colors">
                      {doc.docTitle}
                    </span>
                  </div>
                </td>
                <td className="hidden px-5 py-4 sm:table-cell">
                  <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${DOC_TYPE_COLOURS[doc.docType] ?? "text-zinc-400 bg-zinc-700/50"}`}>
                    {doc.docType}
                  </span>
                </td>
                <td className="hidden px-5 py-4 text-zinc-500 md:table-cell">{doc.docDate}</td>
                <td className="px-5 py-4 text-right text-zinc-500">{doc.docSize}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
