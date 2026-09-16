import { Link } from "react-router-dom";
import { student } from "../data/portfolioData";
import profileImage from "../assets/Juswa.jpeg";
import SectionLabel from "./ui/SectionLabel";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--border)]">
      <div className="pointer-events-none absolute inset-0 paper-grid opacity-70" aria-hidden="true" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[var(--accent-soft)] blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:gap-20 lg:py-28">
        <div className="max-w-3xl self-center animate-fade-up">
          <p className="mt-6 max-w-xl text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
            {student.program} · {student.status}
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-[clamp(3.5rem,8vw,7rem)] leading-[0.9] tracking-[-0.055em] text-[var(--text)]">
            {student.name}
          </h1>
          <div className="mt-7 max-w-2xl border-l-2 border-[var(--accent)] pl-5">
            <p className="font-display text-2xl leading-tight text-[var(--text)] sm:text-3xl">{student.subject}</p>
            <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--muted)] sm:text-base">{student.intro}</p>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link to="/page-2" className="group inline-flex items-center gap-3 rounded-full bg-[var(--accent)] px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white transition hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]">
              Browse archive <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link to="/page-3" className="inline-flex items-center rounded-full border border-[var(--border-strong)] px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-[var(--text)] transition hover:bg-[var(--surface-muted)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]">
              Read reflections
            </Link>
          </div>
        </div>

        <aside
          className="relative min-w-0 self-end animate-fade-in"
          aria-label="Student profile information"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-3 shadow-[0_30px_80px_-44px_var(--shadow)]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.4rem] bg-[var(--surface-muted)]">
              <img src={profileImage} alt={`${student.name} profile portrait`} className="h-full w-full object-cover object-center" loading="eager" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent p-6 pt-24 text-white">
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/70">Profile</p>
              </div>
            </div>
          </div>

          <div
            className="
              absolute
              bottom-4
              left-4
              right-4
              z-10
              w-auto
              rounded-2xl
              border
              border-[var(--glass-border)]
              bg-[var(--glass-bg)]
              p-4
              shadow-[0_18px_45px_-28px_var(--shadow)]
              backdrop-blur-xl
              backdrop-saturate-150
              sm:bottom-6
              sm:left-6
              sm:right-auto
              sm:w-44
              lg:-bottom-5
              lg:-left-8
            "
          >
            <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[var(--glass-label)]">
              NOTE
            </p>

            <p className="mt-2 break-words text-xs leading-5 text-[var(--glass-text)]">
              A living record of learning, practice, and reflection.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
