const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/**
 * Prefixes a local asset path with the deployment base path.
 *
 * `next/image` applies basePath to optimized images only; with
 * `unoptimized: true` (required for static export) the src is passed through
 * untouched, so every /images/... path would 404 on a subdirectory host like
 * GitHub Pages. Absolute URLs, mailto: and empty values pass through.
 */
export function asset(path: string): string {
  if (!path) return path;
  if (/^(https?:)?\/\//.test(path) || path.startsWith("mailto:")) return path;
  return `${basePath}${path.startsWith("/") ? "" : "/"}${path}`;
}
