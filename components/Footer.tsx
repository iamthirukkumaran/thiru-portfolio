import { site } from "@/data/site.config";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-line py-8 sm:mt-24">
      <div className="flex flex-wrap items-center justify-between gap-y-2">
        <div>
          <p className="text-[11px] uppercase tracking-label text-muted">
            {site.nameDisplay} &copy; {new Date().getFullYear()}
          </p>
          <p className="mt-1 text-[13px] text-muted">Made with curiosity.</p>
        </div>
        <a href="#top" className="text-[13px] text-muted transition-colors hover:text-ink">
          Back to top <span aria-hidden="true">&uarr;</span>
        </a>
      </div>
    </footer>
  );
}
