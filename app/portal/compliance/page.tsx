import type { Metadata } from "next";
import { getAdminProjectData } from "@/data/pelhamAdminData";
import type { ComplianceDocument } from "@/types/pelham";

export const metadata: Metadata = {
  title: "Compliance — Pelham Client Portal",
};

// For the demo, the portal shows the Mandarin Oriental project data, which
// maps to the Canary Wharf dataset since that has the most compliance docs.
const DEMO_COMPLIANCE_DOCS = getAdminProjectData("proj-canary-wharf-hq").complianceDocs;

const docTypeColour: Record<string, string> = {
  certificate: "text-blue-400 bg-blue-400/10",
  invoice: "text-emerald-400 bg-emerald-400/10",
  compliance: "text-amber-400 bg-amber-400/10",
  report: "text-purple-400 bg-purple-400/10",
  "warranty-cert": "text-zinc-300 bg-zinc-700/50",
};

function DocTypeLabel({ docType }: { docType: string }) {
  return (
    <span
      className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
        docTypeColour[docType] ?? "text-zinc-400 bg-zinc-700/50"
      }`}
    >
      {docType}
    </span>
  );
}

function ComplianceCard({ doc }: { doc: ComplianceDocument }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900">
      {/* Header row */}
      <div className="flex items-center gap-4 px-5 py-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="shrink-0 text-zinc-500"
          aria-hidden="true"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
        </svg>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-white">{doc.docTitle}</p>
          <p className="text-xs text-zinc-500">
            v{doc.version} · {doc.uploadedDate} ·{" "}
            {Math.round(doc.fileSizeKb / 100) / 10} MB · uploaded by{" "}
            {doc.uploadedBy}
          </p>
        </div>
        <DocTypeLabel docType={doc.docType} />
      </div>

      {/* Version history */}
      {doc.versionHistory.length > 0 && (
        <div className="border-t border-white/5 bg-zinc-800/30 px-5 py-4">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
            Version History
          </p>
          <ul className="space-y-2">
            {doc.versionHistory.map((v, i) => (
              <li key={i} className="flex flex-wrap items-start gap-3 text-xs">
                <span className="rounded bg-zinc-700 px-1.5 py-0.5 font-mono text-zinc-300">
                  v{v.version}
                </span>
                <span className="text-zinc-500">{v.uploadedDate}</span>
                <span className="text-zinc-400">{v.changeNote}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function PortalCompliancePage() {
  const docs = DEMO_COMPLIANCE_DOCS;

  const certs = docs.filter((d) => d.docType === "certificate");
  const invoices = docs.filter((d) => d.docType === "invoice");
  const other = docs.filter(
    (d) => d.docType !== "certificate" && d.docType !== "invoice"
  );

  return (
    <div className="space-y-8 p-6 lg:p-8">
      <div>
        <h1 className="text-2xl font-bold text-white">Compliance & Documents</h1>
        <p className="mt-1 text-sm text-zinc-400">
          Certificates, invoices, and compliance reports for your project.
        </p>
      </div>

      {/* Summary strip */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: "Certificates", count: certs.length, colour: "text-blue-400" },
          { label: "Invoices", count: invoices.length, colour: "text-emerald-400" },
          { label: "Reports & Other", count: other.length, colour: "text-purple-400" },
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

      {/* Certificates */}
      {certs.length > 0 && (
        <div>
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-500">
            Certificates
          </h2>
          <div className="flex flex-col gap-3">
            {certs.map((doc) => (
              <ComplianceCard key={doc.docId} doc={doc} />
            ))}
          </div>
        </div>
      )}

      {/* Invoices */}
      {invoices.length > 0 && (
        <div>
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-500">
            Invoices
          </h2>
          <div className="flex flex-col gap-3">
            {invoices.map((doc) => (
              <ComplianceCard key={doc.docId} doc={doc} />
            ))}
          </div>
        </div>
      )}

      {/* Other */}
      {other.length > 0 && (
        <div>
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-500">
            Reports & Compliance
          </h2>
          <div className="flex flex-col gap-3">
            {other.map((doc) => (
              <ComplianceCard key={doc.docId} doc={doc} />
            ))}
          </div>
        </div>
      )}

      {docs.length === 0 && (
        <div className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-zinc-900 py-16 text-center">
          <p className="text-sm text-zinc-500">No documents uploaded yet.</p>
        </div>
      )}
    </div>
  );
}
