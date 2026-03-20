import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-zinc-950 text-white font-sans">
        {children}
      </body>
    </html>
  );
}
