import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Pelham Client Gateway",
  description:
    "The Pelham Client Gateway — your secure portal for real-time project progress, compliance documentation and billing information.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
