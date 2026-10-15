import { moreWork } from "@/data/content";
import Reveal from "./Reveal";

/** Compact rows for smaller pieces of work that don't need a full preview. */
export default function MoreWork() {
  if (moreWork.length === 0) return null;

  return (
    <div className="mt-16 sm:mt-20">
      <h3 className="label">Also built</h3>
      <ul className="mt-5 divide-y divide-line border-t border-line">
        {moreWork.map((item, i) => (
          <li key={item.name} className="py-5">
            <Reveal delay={i * 50}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h4 className="text-[15px] font-medium">{item.name}</h4>
                <span className="label">{item.context}</span>
              </div>
              <p className="mt-1.5 max-w-column text-[14px] leading-[1.65] text-muted">
                {item.description}
              </p>
              <p className="mt-2 text-[13px] text-ink/60">{item.stack}</p>
            </Reveal>
          </li>
        ))}
      </ul>
    </div>
  );
}
