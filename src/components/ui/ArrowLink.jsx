import { Link } from "react-router-dom";

export default function ArrowLink({ to, children }) {
  return (
    <Link
      to={to}
      className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.13em] text-[var(--text)] transition hover:text-[var(--accent)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
    >
      {children}
      <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">↗</span>
    </Link>
  );
}
