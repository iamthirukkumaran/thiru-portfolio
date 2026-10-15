import Image from "next/image";

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
        src={logo}
        alt={`${name} logo`}
        width={96}
        height={96}
        className="h-9 w-9 shrink-0 rounded-[8px] border border-line bg-white object-contain p-[3px]"
      />
    );
  }

  return (
    <span
      aria-hidden="true"
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[8px] border border-line bg-white text-[13px] font-medium text-muted"
    >
      {letter}
    </span>
  );
}
