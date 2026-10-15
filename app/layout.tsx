import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
      <body>{children}</body>
    </html>
  );
}
