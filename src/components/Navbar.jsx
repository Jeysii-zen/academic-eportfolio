import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const links = [
  { label: "HOME", to: "/" },
  { label: "PAGE 2", to: "/page-2" },
  { label: "PAGE 3", to: "/page-3" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleNavigation = () => {
    setOpen(false);
    scrollToTop();
  };

  const desktopLinkClass = ({ isActive }) =>
    `rounded-full px-4 py-2.5 text-[11px] font-bold tracking-[0.18em] transition-all duration-200 ${
      isActive
        ? "bg-academic-950 text-white shadow-md"
        : "text-slate-500 hover:bg-academic-50 hover:text-academic-900"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/75 backdrop-blur-2xl">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8"
        aria-label="Primary navigation"
      >
        {/* LOGO */}
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="group flex items-center gap-3"
          aria-label="Home"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-academic-950 text-sm font-bold text-white shadow-md transition duration-300 group-hover:-rotate-3 group-hover:scale-105">
            A
          </span>

          <div className="hidden sm:block">
            <p className="text-sm font-bold tracking-[0.08em] text-academic-950">
              Joshua Z. Ocenada
            </p>

            <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-400">
              Academic E-Portfolio
            </p>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center rounded-full border border-slate-200 bg-white/80 p-1.5 shadow-sm md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={handleNavigation}
              className={desktopLinkClass}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* RIGHT LABEL */}
        <div className="hidden rounded-full border border-academic-100 bg-academic-50 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-academic-700 lg:block">
          [SUBJECT NAME]
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-academic-950 shadow-sm transition hover:border-academic-200 hover:bg-academic-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-academic-500 md:hidden"
          aria-label={
            open ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={open}
        >
          <span className="sr-only">Menu</span>

          <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
            <span
              className={`h-0.5 w-full rounded bg-current transition ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />

            <span
              className={`h-0.5 w-full rounded bg-current transition ${
                open ? "opacity-0" : ""
              }`}
            />

            <span
              className={`h-0.5 w-full rounded bg-current transition ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`border-t border-slate-200/70 bg-white/95 backdrop-blur-2xl md:hidden ${
          open ? "block" : "hidden"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4 sm:px-8">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={handleNavigation}
              className={({ isActive }) =>
                `rounded-2xl px-4 py-4 text-xs font-bold tracking-[0.16em] transition ${
                  isActive
                    ? "bg-academic-950 text-white shadow-md"
                    : "text-slate-500 hover:bg-academic-50 hover:text-academic-900"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
}