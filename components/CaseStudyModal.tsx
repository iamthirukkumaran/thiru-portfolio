"use client";

import { useEffect } from "react";
import type { Project } from "@/data/content";
import LiveProjectFrame from "./LiveProjectFrame";
import Image from "next/image";
import { asset } from "@/lib/asset";

interface CaseStudyModalProps {
  project: Project;
  onClose: () => void;
  onNext: () => void;
}

export default function CaseStudyModal({ project, onClose, onNext }: CaseStudyModalProps) {
  // Close on Escape, arrow navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        onNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    // Lock body scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [onClose, onNext]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${project.name} Case Study`}
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-[#FAF8F5]/95 py-6 sm:py-10 px-4 sm:px-6 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="w-full max-w-[700px] flex flex-col">
        {/* Topbar: Charmie Kapoor case-study-topbar */}
        <div className="flex items-center justify-between pb-4 mb-6 sm:mb-8 border-b border-line">
          <button
            type="button"
            onClick={onClose}
            className="flex items-center gap-2 text-[12px] font-mono tracking-label uppercase text-muted hover:text-ink transition-colors"
          >
            <span aria-hidden="true">←</span>
            <span>Home</span>
          </button>

          <button
            type="button"
            onClick={onNext}
            className="flex items-center gap-2 text-[12px] font-mono tracking-label uppercase text-muted hover:text-ink transition-colors"
          >
            <span>Next Project</span>
            <span aria-hidden="true">→</span>
          </button>
        </div>

        {/* Case Study Header */}
        <header className="mb-8">
          <div className="flex items-baseline justify-between gap-4">
            <h1 className="text-[30px] sm:text-[38px] font-medium tracking-[-0.02em] text-ink">
              {project.name}
            </h1>
            <span className="label text-[11px] font-mono uppercase tracking-label text-muted">
              {project.category}
            </span>
          </div>

          {/* Subtitles with Kickers (Charmie style: GOAL, ROLE) */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8">
            <div className="space-y-1.5">
              <span className="block font-mono text-[10px] uppercase tracking-wider text-muted font-semibold">
                GOAL
              </span>
              <p className="text-[14px] sm:text-[15px] leading-[1.65] text-ink/85">
                {project.goal || project.description}
              </p>
            </div>

            <div className="space-y-1.5">
              <span className="block font-mono text-[10px] uppercase tracking-wider text-muted font-semibold">
                ROLE
              </span>
              <p className="text-[14px] sm:text-[15px] leading-[1.65] text-ink/85">
                {project.role}
              </p>
            </div>
          </div>

          {/* Meta Grid: Objective, Platform, Status, Built with, Live Store */}
          <div className="mt-6 pt-5 border-t border-line/80 grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-6 text-[12px]">
            <div>
              <span className="block font-mono text-[10px] uppercase tracking-wider text-muted">
                Platform
              </span>
              <span className="mt-0.5 block font-medium text-ink/90">
                {project.embedUrl ? "Web Storefront (Mobile & Desktop)" : "Web & Mobile"}
              </span>
            </div>

            <div>
              <span className="block font-mono text-[10px] uppercase tracking-wider text-muted">
                Status
              </span>
              <span className="mt-0.5 block font-medium text-ink/90">{project.status}</span>
            </div>

            <div>
              <span className="block font-mono text-[10px] uppercase tracking-wider text-muted">
                Built with
              </span>
              <span className="mt-0.5 block font-medium text-ink/90 truncate" title={project.stack}>
                {project.stack}
              </span>
            </div>

            {project.href && (
              <div className="col-span-2 sm:col-span-3 pt-1">
                <span className="block font-mono text-[10px] uppercase tracking-wider text-muted">
                  Live Project
                </span>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-0.5 inline-flex items-center gap-1.5 text-[13px] font-medium text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent"
                >
                  <span>{project.linkLabel || project.href}</span>
                  <span aria-hidden="true">&#8599;</span>
                </a>
              </div>
            )}
          </div>
        </header>

        {/* Hero Media / Live Embedded Experience */}
        <section className="mb-10">
          {project.embedUrl ? (
            <div className="rounded-xl overflow-hidden shadow-sm">
              <LiveProjectFrame project={project} isModalView />
            </div>
          ) : project.id === "doormile" ? (
            <div className="relative aspect-[16/10] sm:aspect-[1.75/1] w-full rounded-xl overflow-hidden border border-line shadow-xs bg-transparent">
              <Image
                src={asset(project.image)}
                alt={`${project.name} preview`}
                fill
                sizes="(max-width: 768px) 100vw, 700px"
                className="object-cover"
              />
            </div>
          ) : (
            <div
              className="relative aspect-[16/10] sm:aspect-[1.75/1] w-full rounded-xl overflow-hidden border border-line shadow-xs flex items-center justify-center p-3 sm:p-6"
              style={{ background: project.gradient || "#ffffff" }}
            >
              <div className="relative w-full h-full rounded-lg overflow-hidden">
                <Image
                  src={asset(project.image)}
                  alt={`${project.name} preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, 700px"
                  className="object-contain"
                />
              </div>
            </div>
          )}
        </section>

        {/* Highlights & Walkthrough Breakdown */}
        {project.highlights && project.highlights.length > 0 && (
          <section className="mb-12 space-y-4">
            <span className="block font-mono text-[11px] uppercase tracking-wider text-muted font-medium">
              Key Contributions & Highlights
            </span>

            <ul className="space-y-3">
              {project.highlights.map((highlight) => (
                <li
                  key={highlight.slice(0, 32)}
                  className="flex items-start gap-3 text-[14px] sm:text-[15px] leading-[1.7] text-ink/80"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[9px] h-[4px] w-[4px] shrink-0 rounded-full bg-accent"
                  />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Footer Navigation */}
        <footer className="pt-6 pb-12 border-t border-line flex items-center justify-between">
          <button
            type="button"
            onClick={onClose}
            className="text-[12px] font-mono tracking-label uppercase text-muted hover:text-ink transition-colors"
          >
            ← Close Case Study
          </button>

          <button
            type="button"
            onClick={onNext}
            className="flex items-center gap-1.5 text-[13px] font-medium text-ink hover:text-accent transition-colors"
          >
            <span>Next Project</span>
            <span aria-hidden="true">→</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
