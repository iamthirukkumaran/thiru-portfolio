import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { site } from "@/data/site.config";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const title = `${site.name} · ${site.role}`;
const description =
  "Full-stack developer in Coimbatore working across web, mobile and AI. I build a React logistics operations platform and a Flutter rider app, and I'm building Scrolla, an AI video ad generator, on my own.";

export const metadata: Metadata = {
  title,
  description,
  ...(site.url ? { metadataBase: new URL(site.url) } : {}),
  icons: {
    icon: [
      { url: "/favicon/32.png?v=2", sizes: "32x32", type: "image/png" },
      { url: "/favicon/16.png?v=2", sizes: "16x16", type: "image/png" },
      { url: "/favicon/48.png?v=2", sizes: "48x48", type: "image/png" },
      { url: "/favicon/64.png?v=2", sizes: "64x64", type: "image/png" },
      { url: "/favicon/192.png?v=2", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/favicon/180.png?v=2", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon/32.png?v=2",
  },
  openGraph: {
    title,
    description,
    type: "website",
    ...(site.url ? { url: site.url } : {}),
  },
  twitter: { card: "summary_large_image", title, description },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-V7NH8X4JLN"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-V7NH8X4JLN');`,
          }}
        />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/32.png?v=2" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/16.png?v=2" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon/48.png?v=2" />
        <link rel="icon" type="image/png" sizes="64x64" href="/favicon/64.png?v=2" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon/192.png?v=2" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/180.png?v=2" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
