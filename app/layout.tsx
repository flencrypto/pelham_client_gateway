import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

/**
 * Lato — Pelham Interiors' brand typeface, matching pelham.co.
 * Exposed as a CSS variable so Tailwind's `font-sans` utility can consume it.
 */
const latoFont = Lato({
  variable: "--font-lato",
  weight: ["300", "400", "700", "900"],
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
      className={`${latoFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
