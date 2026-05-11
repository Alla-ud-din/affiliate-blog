import type { Metadata } from 'next';
// @ts-ignore: side-effect CSS import declaration not found
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://luxelivingcorners.com'),
  title: {
    default: 'Luxe Living Corners — Honest Product Reviews',
    template: '%s | Luxe Living Corners',
  },
  description: 'In-depth, honest reviews of products worth buying. We test so you can trust.',
  openGraph: {
    type: 'website',
    siteName: 'Luxe Living Corners',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
