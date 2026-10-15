import { contact } from "@/data/content";
import { asset } from "@/lib/asset";
import { mailto, site } from "@/data/site.config";
import Reveal from "./Reveal";

export default function Contact() {
  const links = [
    { label: "Email me", href: mailto },
    { label: "LinkedIn", href: site.links.linkedin },
    { label: "GitHub", href: site.links.github },
    { label: "Resume", href: asset(site.resumeUrl) },
  ].filter((link) => link.href);

  return (
    <section id="contact" className="scroll-mt-20">
      <div className="border-t border-line pt-10 sm:pt-12">
        <Reveal>
          <h2 className="text-[20px] font-medium tracking-[-0.01em] sm:text-[22px]">
            {contact.headline}
          </h2>
          <p className="mt-3 max-w-column text-[15px] leading-[1.75] text-ink/80">{contact.body}</p>

          {links.length > 0 && (
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              {links.map((link) => {
                const external = link.href.startsWith("http");
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
                      className="link group text-[15px]"
                    >
                      {link.label}{" "}
                      <span
                        aria-hidden="true"
                        className="inline-block transition-transform group-hover:translate-x-0.5"
                      >
                        &rarr;
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          )}
        </Reveal>
      </div>
    </section>
  );
}
