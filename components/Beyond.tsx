import Image from "next/image";
import { beyond } from "@/data/content";
import { asset } from "@/lib/asset";
import Reveal from "./Reveal";

export default function Beyond() {
  return (
    <div>
      <p className="max-w-column text-[15px] leading-[1.75] text-ink/80">{beyond.intro}</p>

      <ul className="mt-6 space-y-2">
        {beyond.interests.map((interest) => (
          <li key={interest} className="flex gap-3 text-[15px] text-ink/80">
            <span aria-hidden="true" className="mt-[9px] h-[3px] w-[3px] shrink-0 rounded-full bg-muted" />
            {interest}
          </li>
        ))}
      </ul>

      {beyond.photos.length > 0 && (
        <Reveal>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {beyond.photos.map((photo) => (
              <figure
                key={photo.src}
                className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-line bg-white shadow-2xs transition-all duration-300 hover:shadow-md"
              >
                <Image
                  src={asset(photo.src)}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, 240px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </figure>
            ))}
          </div>
        </Reveal>
      )}
    </div>
  );
}
