import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "../theme/ThemeToggle";
import { student } from "../../data/portfolioData";

const links = [
  { label: "Home", to: "/" },
  { label: "[EMPTY PAGE]", to: "/page-2" },
  { label: "[EMPTY PAGE]", to: "/page-3" },
];

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `relative rounded-full px-3 py-2 text-[11px] font-semibold tracking-[0.08em] transition sm:px-4 ${
      isActive ? "text-[var(--text)]" : "text-[var(--muted)] hover:text-[var(--text)]"
    }`;

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-6">
      <nav className="mx-auto max-w-7xl rounded-2xl border border-[var(--border)] bg-[var(--nav)] shadow-[0_14px_40px_-24px_var(--shadow)] backdrop-blur-xl">
        <div className="flex min-h-16 items-center justify-between gap-4 px-4 sm:px-5">
          <Link to="/" onClick={() => setOpen(false)} className="group flex min-w-0 items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[var(--border-strong)] bg-[var(--accent)] text-xs font-bold text-white transition group-hover:-rotate-3">AO</span>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold tracking-tight text-[var(--text)]">{student.name}</p>
              <p className="hidden text-[9px] uppercase tracking-[0.16em] text-[var(--muted)] sm:block">E-Portfolio</p>
            </div>
          </Link>

          <div className="hidden items-center gap-1 rounded-full border border-[var(--border)] bg-[var(--surface)]/80 p-1 md:flex">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.to === "/"} className={linkClass}>
                {({ isActive }) => (
                  <>
                    {link.label}
                    <span className={`absolute inset-x-3 -bottom-1 h-px bg-[var(--accent)] transition-opacity ${isActive ? "opacity-100" : "opacity-0"}`} />
                  </>
                )}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] md:hidden"
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={open}
            >
              <span className="sr-only">Menu</span>
              <span className="flex w-4 flex-col gap-1.5">
                <span className={`h-px w-full bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`} />
                <span className={`h-px w-full bg-current transition ${open ? "opacity-0" : ""}`} />
                <span className={`h-px w-full bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
              </span>
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-[var(--border)] px-3 pb-3 pt-2 md:hidden">
            <div className="grid gap-1">
              {links.map((link) => (
                <NavLink key={link.to} to={link.to} end={link.to === "/"} onClick={() => setOpen(false)} className={({ isActive }) => `rounded-xl px-4 py-3 text-xs font-semibold ${isActive ? "bg-[var(--accent-soft)] text-[var(--accent)]" : "text-[var(--muted)]"}`}>
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
