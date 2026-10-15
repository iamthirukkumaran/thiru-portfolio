import Image from "next/image";
import { projects, type Project } from "@/data/content";
import Reveal from "./Reveal";

function ProjectRow({ project, priority }: { project: Project; priority: boolean }) {
  return (
    <article>
      <Reveal>
        <figure className="group relative overflow-hidden rounded-xl border border-line bg-white">
          <div className="relative aspect-[16/10] w-full">
            <Image
              src={project.image}
              alt={
                project.imageIsPlaceholder
                  ? `${project.name} placeholder preview`
                  : `${project.name} screenshot`
              }
              fill
              sizes="(max-width: 768px) 100vw, 736px"
              priority={priority}
              className="object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.015]"
            />
          </div>
          {project.imageIsPlaceholder && (
            <figcaption className="absolute bottom-2 right-2 rounded-full bg-paper/90 px-2.5 py-1 text-[10px] uppercase tracking-label text-muted">
              Placeholder
            </figcaption>
          )}
        </figure>

        <div className="mt-5">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="text-[17px] font-medium tracking-[-0.01em]">{project.name}</h3>
            <span className="label">{project.category}</span>
          </div>

          <p className="mt-3 max-w-column text-[15px] leading-[1.7] text-ink/80">
            {project.description}
          </p>

          {project.highlights && project.highlights.length > 0 && (
            <ul className="mt-4 space-y-2">
              {project.highlights.map((highlight) => (
                <li
                  key={highlight.slice(0, 32)}
                  className="flex gap-3 text-[14px] leading-[1.65] text-ink/75"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[9px] h-[3px] w-[3px] shrink-0 rounded-full bg-line"
                  />
                  {highlight}
                </li>
              ))}
            </ul>
          )}

          <dl className="mt-5 space-y-1.5 text-[13px]">
            <div className="flex gap-3">
              <dt className="w-[76px] shrink-0 text-muted">Role</dt>
              <dd className="text-ink/75">{project.role}</dd>
            </div>
            <div className="flex gap-3">
              <dt className="w-[76px] shrink-0 text-muted">Built with</dt>
              <dd className="text-ink/75">{project.stack}</dd>
            </div>
            <div className="flex gap-3">
              <dt className="w-[76px] shrink-0 text-muted">Status</dt>
              <dd className="text-ink/75">{project.status}</dd>
            </div>
          </dl>

          {project.href && (
            <p className="mt-4">
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer noopener"
                className="link text-[14px]"
              >
                {project.linkLabel ?? "View project"}{" "}
                <span aria-hidden="true">&#8599;</span>
              </a>
            </p>
          )}
        </div>
      </Reveal>
    </article>
  );
}

export default function ProjectList() {
  return (
    <div className="space-y-16 sm:space-y-20">
      {projects.map((project, i) => (
        <ProjectRow key={project.name} project={project} priority={i === 0} />
      ))}
    </div>
  );
}
