import SectionLabel from "../components/ui/SectionLabel";
import ArrowLink from "../components/ui/ArrowLink";
import { reflections } from "../data/portfolioData";

export default function PageThree() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
      <header className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
        <div>
          <h1 className="mt-5 max-w-xl font-display text-5xl leading-[0.94] tracking-[-0.045em] text-[var(--text)] sm:text-6xl">Notes on becoming a better learner.</h1>
        </div>
        <div className="self-end border-l-2 border-[var(--accent)] pl-5 text-sm leading-7 text-[var(--muted)] sm:text-base">
          A quieter page for reflections, goals, academic philosophy, milestones, and future direction. Replace the prompts with writing that sounds like you.
        </div>
      </header>

      <section className="mt-14 grid gap-10 lg:grid-cols-[180px_1fr]">
        <aside className="lg:sticky lg:top-28 lg:h-fit">
          <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[var(--muted)]">Reflection index</p>
          <div className="mt-4 space-y-2">
            {reflections.map((item) => (
              <a key={item.marker} href={`#reflection-${item.marker}`} className="flex items-center gap-3 text-xs text-[var(--muted)] transition hover:text-[var(--text)]">
                <span className="font-mono text-[10px] text-[var(--accent)]">{item.marker}</span>
                <span>{item.title}</span>
              </a>
            ))}
          </div>
        </aside>

        <div className="border-t border-[var(--border)]">
          {reflections.map((item) => (
            <article id={`reflection-${item.marker}`} key={item.marker} className="scroll-mt-28 grid gap-6 border-b border-[var(--border)] py-10 md:grid-cols-[70px_1fr]">
              <span className="font-mono text-xs text-[var(--accent)]">{item.marker}</span>
              <div>
                <h2 className="max-w-3xl font-display text-3xl tracking-[-0.02em] text-[var(--text)] sm:text-4xl">{item.title}</h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)]">{item.text}</p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-dashed border-[var(--border-strong)] bg-[var(--surface-muted)] p-5">
                    <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-[var(--muted)]">Prompt</p>
                    <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">[What happened? What did you learn? Why did it matter?]</p>
                  </div>
                  <div className="rounded-xl border border-dashed border-[var(--border-strong)] bg-[var(--surface-muted)] p-5">
                    <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-[var(--muted)]">Next step</p>
                    <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">[What will you do differently because of this experience?]</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14 grid gap-10 border-t border-[var(--border)] pt-8 lg:grid-cols-3">
        <div>
          <h2 className="mt-4 font-display text-3xl text-[var(--text)]">[MY NEXT GOAL]</h2>
        </div>
        <div className="border-t border-[var(--border)] pt-5 lg:border-t-0 lg:border-l lg:pl-8">
          <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[var(--muted)]">Personal note</p>
          <p className="mt-3 text-sm leading-7 text-[var(--muted)]">[Write a short note about what you are currently working toward.]</p>
        </div>
        <div className="border-t border-[var(--border)] pt-5 lg:border-t-0 lg:border-l lg:pl-8">
          <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[var(--muted)]">Continue</p>
          <div className="mt-4"><ArrowLink to="/page-2">Return to archive</ArrowLink></div>
        </div>
      </section>
    </div>
  );
}
