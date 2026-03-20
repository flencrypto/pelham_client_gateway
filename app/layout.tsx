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
  title: "Pelham Interiors — Premium Interior Design & Fit-Out",
  description:
    "Pelham Interiors delivers exceptional interior design, workplace strategy and fit-out services across commercial, hospitality, retail, healthcare, education and residential sectors.",
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
