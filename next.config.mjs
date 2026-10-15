/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Placeholders are SVGs, and this keeps `next build` exportable to any static host.
    // Flip to `false` once you've swapped in real .jpg/.png screenshots and are
    // deploying somewhere that runs the Next.js image optimizer (e.g. Vercel).
    unoptimized: true,
  },
};

export default nextConfig;
