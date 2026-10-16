"use client";

import { useState, useRef } from "react";
import type { Project } from "@/data/content";

interface LiveProjectFrameProps {
  project: Project;
  isModalView?: boolean;
  onOpenCaseStudy?: () => void;
}

export default function LiveProjectFrame({
  project,
  isModalView = false,
  onOpenCaseStudy,
}: LiveProjectFrameProps) {
  const [isInteractive, setIsInteractive] = useState(isModalView);
  const [isLoading, setIsLoading] = useState(true);
  const [reloadKey, setReloadKey] = useState(0);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const embedUrl = project.embedUrl || project.href;

  const handleReload = () => {
    setIsLoading(true);
    setReloadKey((prev) => prev + 1);
  };

  return (
    <figure className="group relative overflow-hidden rounded-xl border border-line bg-white shadow-xs transition-all duration-300 hover:shadow-md">
      {/* Mock Browser Header (Charmie style clean bar) */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line bg-[#F8F8F5] px-3.5 py-2.5 sm:px-4">
        {/* macOS Traffic Dots */}
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]/85 transition-opacity hover:opacity-100" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]/85 transition-opacity hover:opacity-100" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]/85 transition-opacity hover:opacity-100" />
        </div>

        {/* Address Pill */}
        <div className="flex max-w-[280px] sm:max-w-xs items-center gap-2 truncate rounded-full border border-line bg-white px-3 py-1 text-[11px] font-mono text-ink/80 shadow-2xs">
          {/* Live pulse dot */}
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="absolute inline-flex h-full w-full motion-safe:animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>

          <svg
            className="h-3 w-3 shrink-0 text-muted"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>

          <span className="truncate">
            <span className="text-muted/70">https://</span>
            <span className="font-semibold text-ink">ponkali.in</span>
          </span>

          <span className="hidden sm:inline-block rounded-full bg-emerald-50 px-1.5 py-0.2 text-[9px] font-semibold uppercase tracking-wider text-emerald-700">
            Live
          </span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1.5 text-[11px]">
          {/* Reload button */}
          <button
            type="button"
            onClick={handleReload}
            aria-label="Reload live preview"
            title="Reload live preview"
            className="flex h-7 w-7 items-center justify-center rounded-md text-muted transition-colors hover:bg-black/5 hover:text-ink"
          >
            <svg
              className={`h-3.5 w-3.5 ${isLoading ? "animate-spin text-accent" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </button>

          {/* Interactive Mode Toggle */}
          <button
            type="button"
            onClick={() => setIsInteractive(!isInteractive)}
            className={`flex items-center gap-1 rounded-md px-2.5 py-1 font-medium transition-all ${
              isInteractive
                ? "bg-accent text-white shadow-xs"
                : "bg-black/5 text-ink/80 hover:bg-black/10 hover:text-ink"
            }`}
            title={
              isInteractive
                ? "Click to lock scrolling"
                : "Click to enable direct interaction"
            }
          >
            <span>{isInteractive ? "Interactive" : "Interact"}</span>
          </button>

          {/* Case study trigger (if provided and not in modal) */}
          {!isModalView && onOpenCaseStudy && (
            <button
              type="button"
              onClick={onOpenCaseStudy}
              className="hidden sm:flex items-center gap-1 rounded-md bg-paper border border-line px-2.5 py-1 text-ink/75 transition-colors hover:text-ink hover:border-ink/30"
              title="Open full case study"
            >
              <span>Case Study</span>
              <span aria-hidden="true">→</span>
            </button>
          )}

          {/* External visit link */}
          <a
            href={embedUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="flex h-7 w-7 items-center justify-center rounded-md text-muted transition-colors hover:bg-black/5 hover:text-ink"
            title="Open ponkali.in in new tab"
            aria-label="Open ponkali.in in new tab"
          >
            <span aria-hidden="true">&#8599;</span>
          </a>
        </div>
      </div>

      {/* Frame Viewport */}
      <div
        className={`relative aspect-[16/10] ${
          isModalView
            ? "min-h-[500px] sm:min-h-[620px]"
            : "min-h-[440px] sm:min-h-[520px]"
        } w-full overflow-hidden bg-[#FAFAF8]`}
      >
        {/* Loading Spinner Skeleton */}
        {isLoading && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-paper/95 p-6 text-center backdrop-blur-xs">
            <div className="relative flex h-10 w-10 items-center justify-center">
              <div className="h-10 w-10 animate-spin rounded-full border-2 border-line border-t-accent" />
            </div>
            <p className="mt-4 text-[13px] font-medium text-ink">
              Loading live storefront...
            </p>
            <p className="mt-1 text-[11px] text-muted font-mono">ponkali.in</p>
          </div>
        )}

        {/* Live Website Iframe */}
        <iframe
          key={reloadKey}
          ref={iframeRef}
          src={embedUrl}
          title="Ponkali Masalas - Direct Storefront"
          loading="lazy"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          onLoad={() => setIsLoading(false)}
          className={`h-full w-full border-0 transition-opacity duration-500 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          style={{
            pointerEvents: isInteractive ? "auto" : "none",
          }}
        />

        {/* Click to interact overlay when in preview mode */}
        {!isInteractive && !isLoading && (
          <div
            onClick={() => setIsInteractive(true)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setIsInteractive(true);
              }
            }}
            className="group/overlay absolute inset-0 z-20 flex cursor-pointer items-end justify-center bg-gradient-to-t from-black/10 via-transparent to-transparent p-4 sm:p-6 transition-colors hover:bg-black/5"
            title="Click to interact with the live website"
          >
            <div className="flex items-center gap-2 rounded-full border border-line bg-white/95 px-4 py-2 text-[12px] font-medium text-ink shadow-md backdrop-blur-md transition-all duration-200 group-hover/overlay:scale-105 group-hover/overlay:bg-white group-hover/overlay:shadow-lg">
              <svg
                className="h-3.5 w-3.5 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                />
              </svg>
              <span>Click to explore ponkali.in live</span>
            </div>
          </div>
        )}

        {/* Lock banner when interactive mode is active */}
        {isInteractive && (
          <div className="absolute top-3 right-3 z-20">
            <button
              type="button"
              onClick={() => setIsInteractive(false)}
              className="flex items-center gap-1.5 rounded-full border border-line bg-white/95 px-3 py-1.5 text-[11px] font-medium text-ink shadow-md backdrop-blur-md transition-all hover:bg-white hover:text-accent"
              title="Lock interaction to scroll page"
            >
              <span>Lock scroll</span>
              <span className="text-muted text-[10px]">✕</span>
            </button>
          </div>
        )}
      </div>
    </figure>
  );
}
