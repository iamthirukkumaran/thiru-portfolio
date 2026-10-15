import Image from "next/image";

import { education, experience } from "@/data/content";
import { asset } from "@/lib/asset";
import Monogram from "./Monogram";

/**
 * Every row shares one grid template with a fixed last column, so the role and
 * date columns line up down the whole table, rail rows included.
 */
const ROW =
  "grid grid-cols-1 gap-y-1 py-3.5 sm:grid-cols-[1.15fr_1.5fr_8.5rem] sm:items-center sm:gap-x-4";
const INDENT = "pl-[48px] sm:pl-0";

export function ExperienceList() {
  return (
    <ul className="border-t border-line">
      {experience.map((item) => (
        <li key={item.company} className="border-b border-line">
          <div className={ROW}>
            <div className="flex items-center gap-3">
              <Monogram letter={item.monogram} logo={item.logo} name={item.company} />
              <span className="text-[15px]">{item.company}</span>
            </div>
            <span className={`${INDENT} text-[14px] text-muted`}>{item.role}</span>
            <span className={`${INDENT} text-[13px] tabular-nums text-muted sm:text-right`}>
              {item.period}
            </span>
          </div>

          {item.rail && item.rail.length > 0 && (
            <div className="relative pb-2">
              <span
                aria-hidden="true"
                className="absolute bottom-[18px] left-[17px] top-0 w-px bg-line"
              />
              <ul>
                {item.rail.map((product) => (
                  <li key={product.name} className={`${ROW} py-1.5`}>
                    <span className="relative flex items-center gap-2.5 pl-[42px] text-[14px] text-ink/80">
                      <span
                        aria-hidden="true"
                        className="absolute left-[13.5px] top-[9px] h-[7px] w-[7px] rounded-full border border-line bg-paper"
                      />
                      {product.logo && (
                        <Image
                          src={asset(product.logo)}
                          alt=""
                          aria-hidden="true"
                          width={48}
                          height={48}
                          className="h-5 w-5 shrink-0 rounded-[5px] border border-line bg-white object-contain"
                        />
                      )}
                      {product.name}
                    </span>
                    <span className={`${INDENT} text-[13px] text-muted`}>{product.role}</span>
                    <span className={`${INDENT} text-[13px] text-muted sm:text-right`}>
                      {product.period}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

export function EducationList() {
  return (
    <ul className="border-t border-line">
      {education.map((item) => (
        <li key={item.school} className={`${ROW} border-b border-line`}>
          <div className="flex items-center gap-3">
            <Monogram letter={item.monogram} logo={item.logo} name={item.school} />
            <span className="text-[15px]">{item.school}</span>
          </div>
          <span className={`${INDENT} text-[14px] text-muted`}>
            {item.degree}
            {item.detail && <span> · {item.detail}</span>}
          </span>
          <span className={`${INDENT} text-[13px] tabular-nums text-muted sm:text-right`}>
            {item.period}
          </span>
        </li>
      ))}
    </ul>
  );
}
