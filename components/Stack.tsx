import { stack } from "@/data/content";

export default function Stack() {
  return (
    <div>
      <dl className="divide-y divide-line border-t border-line">
        {stack.map((group) => (
          <div key={group.label} className="py-5 sm:flex sm:gap-8">
            <dt className="label sm:w-40 sm:shrink-0 sm:pt-[3px]">{group.label}</dt>
            <dd className="mt-2 sm:mt-0">
              <p className="text-[15px] leading-[1.6] text-ink/85">{group.items.join(", ")}</p>
              <p className="mt-1 text-[12px] text-muted">{group.note}</p>
            </dd>
          </div>
        ))}
      </dl>
      <p className="mt-6 max-w-column text-[13px] leading-[1.6] text-muted">
        Everything listed here I&rsquo;ve used on real work. The note beside each group says how
        deeply.
      </p>
    </div>
  );
}
