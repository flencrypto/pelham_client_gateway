import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Site Photos — Pelham Client Portal",
};

const PHOTO_ALBUMS = [
  { albumTitle: "Week 16 Progress", photoCount: 14, capturedDate: "Today" },
  { albumTitle: "FF&E Deliveries", photoCount: 8, capturedDate: "Yesterday" },
  { albumTitle: "Kitchen Installation", photoCount: 22, capturedDate: "28 Nov" },
  { albumTitle: "Week 14 Progress", photoCount: 17, capturedDate: "20 Nov" },
  { albumTitle: "Structural Works", photoCount: 11, capturedDate: "14 Nov" },
  { albumTitle: "Framing & First Fix", photoCount: 19, capturedDate: "5 Nov" },
];

export default function PortalPhotosPage() {
  return (
    <div className="space-y-6 p-6 lg:p-8">
      <div>
        <h1 className="text-2xl font-bold text-white">Site Photos</h1>
        <p className="mt-1 text-sm text-zinc-400">
          Weekly progress photography from your project site.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PHOTO_ALBUMS.map((album, i) => (
          <div
            key={i}
            className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-zinc-900 p-5"
          >
            {/* Placeholder image */}
            <div className="flex h-40 items-center justify-center rounded-xl bg-zinc-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-zinc-600"
                aria-hidden="true"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-white">{album.albumTitle}</p>
              <div className="mt-1 flex items-center justify-between text-xs text-zinc-500">
                <span>{album.photoCount} photos</span>
                <span>{album.capturedDate}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
