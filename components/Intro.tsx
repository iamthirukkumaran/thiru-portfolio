import Image from "next/image";
import { intro } from "@/data/content";
import { mailto, site } from "@/data/site.config";
import IntroBrush from "./IntroBrush";
import Reveal from "./Reveal";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Intro() {
  return (
    <section id="about" className="scroll-mt-20 pt-14 sm:pt-20">
      <Reveal>
        <div
          className="intro-paint relative w-full"
          style={
            {
              "--brush-cursor": `url(${basePath}/images/brush-cursor.png) 3 3, crosshair`,
            } as React.CSSProperties
          }
        >
          <IntroBrush />
          <Image
            src={site.profileImage.src}
            alt={site.profileImage.alt}
            width={280}
            height={280}
            priority
            className="relative z-[1] h-[112px] w-[112px] rounded-full border border-line object-cover sm:h-[140px] sm:w-[140px]"
          />
        </div>

        <h1 className="mt-8 text-[26px] font-semibold tracking-[-0.02em] sm:text-[30px]">
          {intro.headline}
        </h1>
        <p className="mt-3 max-w-column text-[15px] leading-[1.6] text-muted sm:text-base">
          {intro.subheadline}
        </p>

        <div className="prose-column mt-8 space-y-4">
          {intro.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-[15px]">
          {mailto && (
            <a href={mailto} className="link group">
              {intro.cta}{" "}
              <span
                aria-hidden="true"
                className="inline-block transition-transform group-hover:translate-x-0.5"
              >
                &rarr;
              </span>
            </a>
          )}
          {site.resumeUrl && (
            <a href={site.resumeUrl} target="_blank" rel="noreferrer noopener" className="link">
              Resume <span aria-hidden="true">&#8599;</span>
            </a>
          )}
        </div>

        {intro.facts.length > 0 && (
          <ul className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[13px] text-muted">
            {intro.facts.map((fact, i) => (
              <li key={fact} className="flex items-center gap-3">
                {i > 0 && (
                  <span aria-hidden="true" className="h-[3px] w-[3px] rounded-full bg-line" />
                )}
                {fact}
              </li>
            ))}
          </ul>
        )}
      </Reveal>
    </section>
  );
}
