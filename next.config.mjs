/**
 * Static export: `next build` writes a plain HTML/CSS/JS site to ./out, which
 * any static host can serve (GitHub Pages, Netlify, Cloudflare, S3, Vercel).
 *
 * NEXT_PUBLIC_BASE_PATH is set by the Pages workflow to "/thiru-portfolio",
 * because project pages are served from a subdirectory. It stays empty for
 * local dev and for any host serving the site at a domain root.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  basePath,
  trailingSlash: true,
  images: {
    // No image optimizer on a static host.
    unoptimized: true,
  },
};

export default nextConfig;
