import Image from "next/image";

import { asset } from "@/lib/asset";

type Props = {
  letter: string;
  logo?: string;
  name: string;
};

/** Small square company/school mark — a real logo if provided, else initials. */
export default function Monogram({ letter, logo, name }: Props) {
  if (logo) {
    return (
      <Image
        src={asset(logo)}
        alt={`${name} logo`}
        width={96}
        height={96}
        className="h-10 w-10 shrink-0 rounded-[9px] border border-line bg-white object-contain p-[3px]"
      />
    );
  }

  return (
    <span
      aria-hidden="true"
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[9px] border border-line bg-white text-[14px] font-medium text-muted"
    >
      {letter}
    </span>
  );
}
