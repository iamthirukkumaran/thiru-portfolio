import { principles } from "@/data/content";

export default function Principles() {
  return (
    <ol className="space-y-3.5">
      {principles.map((principle, i) => (
        <li key={principle} className="flex gap-4 text-[15px] leading-[1.6] text-ink/85">
          <span className="w-5 shrink-0 pt-[2px] text-[12px] tabular-nums text-muted">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span>{principle}</span>
        </li>
      ))}
    </ol>
  );
}
