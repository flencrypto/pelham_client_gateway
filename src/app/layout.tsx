import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pelham Interiors | Premium Commercial Interiors',
  description: 'Award-winning commercial interior design studio. Luxury residential, hospitality, and commercial spaces across London and internationally.',
  keywords: 'commercial interiors, luxury interior design, London interior design, hospitality design, residential interiors',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
