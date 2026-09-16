import { student } from "../data/portfolioData";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-[var(--border)]">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-8 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="text-sm font-semibold tracking-tight text-[var(--text)]">{student.name}</p>
          <p className="mt-1 text-xs text-[var(--muted)]">{student.subject}</p>
          <p className="mt-1 text-xs text-[var(--muted)]">{student.school}</p>
        </div>
        <div className="flex flex-wrap gap-5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
          <Link className="hover:text-[var(--text)]" to="/">Home</Link>
          <Link className="hover:text-[var(--text)]" to="/page-2">Archive</Link>
          <Link className="hover:text-[var(--text)]" to="/page-3">Reflections</Link>
          <span>© 2026</span>
        </div>
      </div>
    </footer>
  );
}
