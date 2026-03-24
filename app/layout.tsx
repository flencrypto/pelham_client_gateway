import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

/**
 * Geist Sans — the primary typeface for Pelham Client Gateway.
 * Exposed as a CSS variable so Tailwind's `font-sans` utility can consume it.
 */
const geistSansFont = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

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
    <html
      lang="en"
      className={`${geistSansFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-950 text-white font-sans">
        {children}
      </body>
    </html>
  );
}
