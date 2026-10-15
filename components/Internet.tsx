import { internet } from "@/data/content";
import { asset } from "@/lib/asset";

export default function Internet() {
  const links = internet.filter((link) => link.href);

  if (links.length === 0) return null;

  return (
    <ul className="divide-y divide-line border-t border-line">
      {links.map((link) => {
        const external = link.href.startsWith("http");
        return (
          <li key={link.label}>
            <a
              href={asset(link.href)}
              {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
              className="group flex items-baseline justify-between gap-4 py-4 transition-colors"
            >
              <span className="text-[15px] text-ink group-hover:underline group-hover:decoration-line group-hover:underline-offset-[5px]">
                {link.label}
              </span>
              <span className="flex items-baseline gap-2 text-[13px] text-muted">
                {link.handle}
                <span
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-0.5"
                >
                  &rarr;
                </span>
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
