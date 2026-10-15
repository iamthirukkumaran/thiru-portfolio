import Image from "next/image";
import { exploring } from "@/data/content";
import { asset } from "@/lib/asset";
import Reveal from "./Reveal";

export default function Exploring() {
  return (
    <div>
      <p className="max-w-column text-[15px] leading-[1.75] text-ink/80">{exploring.intro}</p>

      <ul className="mt-8 divide-y divide-line border-t border-line">
        {exploring.items.map((item, i) => (
          <li key={item.title} className="py-5">
            <Reveal delay={i * 50}>
              <div className="flex gap-4">
                <Image
                  src={asset(item.icon)}
                  alt=""
                  aria-hidden="true"
                  width={40}
                  height={40}
                  className="h-10 w-10 shrink-0 rounded-lg border border-line bg-white"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-[15px] font-medium">{item.title}</h3>
                    <span className="label">{item.tag}</span>
                  </div>
                  <p className="mt-1.5 text-[14px] leading-[1.65] text-muted">{item.description}</p>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>

      <p className="mt-6 text-[13px] text-muted">
        These are experiments and things I&rsquo;m learning, not finished products.
      </p>
    </div>
  );
}
