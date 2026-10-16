"use client";

import { useState } from "react";
import Image from "next/image";
import { projects, type Project } from "@/data/content";
import { asset } from "@/lib/asset";
import Reveal from "./Reveal";
import CaseStudyModal from "./CaseStudyModal";

function ProjectMedia({ project }: { project: Project }) {
  // KROW - Full artwork presentation on matched warm cream background
  if (project.id === "krow") {
    return (
      <div
        className="relative aspect-[16/10] sm:aspect-[1.75/1] w-full overflow-hidden rounded-xl border border-line/60 flex items-center justify-center p-2 sm:p-3 shadow-2xs transition-shadow duration-300 group-hover:shadow-md"
        style={{ background: project.gradient || "#FEF8DF" }}
      >
        <div className="relative h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.02]">
          <Image
            src={asset(project.image)}
            alt={project.name}
            fill
            sizes="(max-width: 768px) 100vw, 736px"
            className="object-contain"
            priority
          />
        </div>
      </div>
    );
  }

  // Miler App - Transparent rider mockups on fresh light mint background
  if (project.id === "miler") {
    return (
      <div
        className="relative aspect-[16/10] sm:aspect-[1.75/1] w-full overflow-hidden rounded-xl border border-line/60 flex items-center justify-center p-3 sm:p-5 shadow-2xs transition-shadow duration-300 group-hover:shadow-md"
        style={{ background: project.gradient || "linear-gradient(135deg, #F0FAF3 0%, #DDF4E5 50%, #F0FAF3 100%)" }}
      >
        <div className="relative h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.025] drop-shadow-md">
          <Image
            src={asset(project.image)}
            alt={project.name}
            fill
            sizes="(max-width: 768px) 100vw, 736px"
            className="object-contain"
          />
        </div>
      </div>
    );
  }

  // Ponkali Masalas product showcase on golden turmeric gradient
  if (project.id === "ponkali") {
    return (
      <div
        className="relative aspect-[16/10] sm:aspect-[1.75/1] w-full overflow-hidden rounded-xl border border-line/60 flex items-center justify-center p-3 sm:p-4 shadow-2xs transition-shadow duration-300 group-hover:shadow-md"
        style={{ background: project.gradient || "linear-gradient(135deg, #FFF6E5 0%, #FFE8B2 50%, #FFF2D1 100%)" }}
      >
        <div className="relative h-[88%] aspect-[3/4] transition-transform duration-500 ease-out group-hover:scale-[1.04] drop-shadow-xl">
          <Image
            src={asset(project.image)}
            alt={project.name}
            fill
            sizes="400px"
            className="object-contain"
          />
        </div>

        {/* Live Store badge */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur-xs border border-line/60 px-2.5 py-1 text-[10px] font-mono font-medium text-ink shadow-2xs">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full motion-safe:animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
          </span>
          <span>ponkali.in</span>
        </div>
      </div>
    );
  }

  // Doormile - Full screenshot with no background color needed
  if (project.id === "doormile") {
    return (
      <div className="relative aspect-[16/10] sm:aspect-[1.75/1] w-full overflow-hidden rounded-xl border border-line/60 shadow-2xs transition-shadow duration-300 group-hover:shadow-md bg-transparent">
        <div className="relative h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.02]">
          <Image
            src={asset(project.image)}
            alt={project.name}
            fill
            sizes="(max-width: 768px) 100vw, 736px"
            className="object-cover"
          />
        </div>
      </div>
    );
  }

  // Desktop / UI platforms (Scrolla)
  return (
    <div
      className="relative aspect-[16/10] sm:aspect-[1.75/1] w-full overflow-hidden rounded-xl border border-line/60 flex items-center justify-center p-3 sm:p-6 shadow-2xs transition-shadow duration-300 group-hover:shadow-md"
      style={{ background: project.gradient || "#ffffff" }}
    >
      <div className="relative w-full h-full rounded-lg sm:rounded-xl overflow-hidden shadow-xl shadow-black/10 border border-black/5 transition-transform duration-500 ease-out group-hover:scale-[1.025]">
        <Image
          src={asset(project.image)}
          alt={project.name}
          fill
          sizes="(max-width: 768px) 100vw, 720px"
          className="object-contain"
        />
      </div>
    </div>
  );
}

function ProjectRow({
  project,
  onOpenCaseStudy,
}: {
  project: Project;
  onOpenCaseStudy: () => void;
}) {
  return (
    <article
      onClick={onOpenCaseStudy}
      tabIndex={0}
      role="button"
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpenCaseStudy();
        }
      }}
      className="group flex flex-col gap-3 p-2 sm:p-3 -mx-2 sm:-mx-3 rounded-2xl cursor-pointer transition-colors duration-200 hover:bg-black/[0.035] outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
    >
      <Reveal>
        {/* Charmie Kapoor style end-to-end-card-media */}
        <ProjectMedia project={project} />

        {/* Charmie Kapoor style end-to-end-title & subtitle: Short and Sweet */}
        <div className="mt-3 flex flex-col gap-0.5 px-0.5">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="text-[15px] sm:text-[16px] font-medium tracking-tight text-ink group-hover:text-accent transition-colors">
              {project.shortTitle || project.name}
            </h3>
            <span
              aria-hidden="true"
              className="text-[13px] text-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-accent"
            >
              →
            </span>
          </div>

          <p className="text-[13px] sm:text-[14px] text-muted leading-relaxed">
            {project.shortSubtitle || project.description}
          </p>
        </div>
      </Reveal>
    </article>
  );
}

export default function ProjectList() {
  const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(null);

  const activeProject =
    activeProjectIndex !== null ? projects[activeProjectIndex] : null;

  const handleNextProject = () => {
    if (activeProjectIndex !== null) {
      setActiveProjectIndex((activeProjectIndex + 1) % projects.length);
    }
  };

  return (
    <>
      <div className="space-y-10 sm:space-y-12">
        {projects.map((project, i) => (
          <ProjectRow
            key={project.name}
            project={project}
            onOpenCaseStudy={() => setActiveProjectIndex(i)}
          />
        ))}
      </div>

      {activeProject && (
        <CaseStudyModal
          project={activeProject}
          onClose={() => setActiveProjectIndex(null)}
          onNext={handleNextProject}
        />
      )}
    </>
  );
}
