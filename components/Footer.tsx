"use client";

import { useEffect, useState } from "react";
import { site, mailto } from "@/data/site.config";

type WeatherData = {
  tempC: number;
  tempF: number;
  label: string;
};

const COIMBATORE = {
  latitude: 11.0168,
  longitude: 76.9558,
  label: "Coimbatore, India",
};

const STORAGE_KEY = "weatherSnapshot_coimbatore";

const DEFAULT_WEATHER: WeatherData = {
  tempC: 24,
  tempF: 75,
  label: "Coimbatore, India",
};

function getWeatherGreeting(tempC: number): string {
  if (tempC <= 15) return "Crisp and cool out there today :)";
  if (tempC <= 22) return "Cool weather, calm energy :)";
  if (tempC <= 27) return "Mild and lovely out there :)";
  if (tempC <= 33) return "Warm and sunny in Coimbatore :)";
  return "Sunny afternoon in Coimbatore :)";
}

export default function Footer() {
  const [weather, setWeather] = useState<WeatherData>(DEFAULT_WEATHER);
  const [tooltip, setTooltip] = useState<string>("");

  useEffect(() => {
    // 1. Check local cache snapshot
    try {
      const cached = localStorage.getItem(STORAGE_KEY);
      if (cached) {
        const parsed = JSON.parse(cached);
        if (typeof parsed?.tempC === "number" && typeof parsed?.tempF === "number") {
          setWeather(parsed);
          setTooltip(getWeatherGreeting(parsed.tempC));
        }
      }
    } catch {}

    // 2. Fetch live data from Open-Meteo
    const fetchWeather = async () => {
      try {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${COIMBATORE.latitude}&longitude=${COIMBATORE.longitude}&current_weather=true&temperature_unit=celsius&timezone=auto`;
        const res = await fetch(url);
        if (!res.ok) return;
        const data = await res.json();
        const t = data?.current_weather?.temperature;
        if (typeof t === "number") {
          const tempC = Math.round(t);
          const tempF = Math.round((tempC * 9) / 5 + 32);
          const fresh: WeatherData = {
            tempC,
            tempF,
            label: COIMBATORE.label,
          };
          setWeather(fresh);
          setTooltip(getWeatherGreeting(tempC));
          try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(fresh));
          } catch {}
        }
      } catch {
        // keep fallback or cached
      }
    };

    fetchWeather();
  }, []);

  const links = [
    ...(site.links.writing ? [{ label: "Writing", href: site.links.writing }] : []),
    { label: "GitHub", href: site.links.github },
    { label: "LinkedIn", href: site.links.linkedin },
    ...(site.links.twitter ? [{ label: "Twitter (X)", href: site.links.twitter }] : []),
    { label: "Email", href: mailto },
  ].filter((item) => Boolean(item.href));

  return (
    <footer className="mt-20 border-t border-line/80 pt-6 pb-12 sm:mt-24 sm:pt-7 sm:pb-16">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Left: Weather formatted matching Charmie's Bangalore weather */}
        <div className="relative group inline-flex items-center">
          <span className="text-[13px] text-muted tracking-tight transition-colors group-hover:text-ink cursor-default">
            {weather.tempC}°C / {weather.tempF}°F · {weather.label}
          </span>

          {tooltip && (
            <span
              role="tooltip"
              className="pointer-events-none absolute left-0 bottom-full mb-2 hidden sm:block whitespace-nowrap rounded bg-ink px-2.5 py-1 text-[11px] font-normal text-paper opacity-0 shadow-md transition-all duration-200 group-hover:-translate-y-1 group-hover:opacity-100 z-30"
            >
              {tooltip}
            </span>
          )}
        </div>

        {/* Right: Quiet inline links with subtle underline */}
        <nav aria-label="Footer links" className="flex flex-wrap items-center gap-5 sm:gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-[13px] text-muted transition-colors hover:text-ink border-b border-ink/20 hover:border-ink/60 pb-[1px]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
