import Hero from "../components/Hero";
import SectionLabel from "../components/ui/SectionLabel";
import ArrowLink from "../components/ui/ArrowLink";
import { archiveItems, reflections, student } from "../data/portfolioData";

const facts = [
  ["Program", student.program],
  ["Current stage", student.status],
  ["Academic focus", student.subject],
];

export default function Home() {
  return (
    <div>
      <Hero />

      <main>
        <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:py-28">
          <div>
            <h2 className="mt-5 max-w-md font-display text-4xl leading-tight tracking-[-0.035em] text-[var(--text)] sm:text-5xl">An academic identity, kept in one place.</h2>
          </div>

          <div className="grid gap-8">
            <p className="max-w-3xl text-lg leading-8 text-[var(--text-secondary)]">This space is designed as an evolving academic record: a place to preserve outputs, organize experiences, and make learning visible over time.</p>
            <div className="grid border-y border-[var(--border)] sm:grid-cols-3">
              {facts.map(([label, value]) => (
                <div key={label} className="border-b border-[var(--border)] py-5 sm:border-b-0 sm:border-r sm:px-6 first:sm:pl-0 last:sm:border-r-0">
                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[var(--muted)]">{label}</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--text)]">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-[var(--border)] bg-[var(--surface-muted)]">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:py-24">
            <div>
              <h2 className="mt-5 font-display text-4xl tracking-[-0.035em] text-[var(--text)] sm:text-5xl">Selected records</h2>
              <p className="mt-4 max-w-sm text-sm leading-7 text-[var(--muted)]">A quick index of the kinds of academic materials that can live inside the archive.</p>
              <div className="mt-7"><ArrowLink to="/page-2">Open academic archive</ArrowLink></div>
            </div>

            <div className="border-t border-[var(--border)]">
              {archiveItems.slice(0, 4).map((item) => (
                <div key={item.id} className="grid grid-cols-[40px_1fr] gap-5 border-b border-[var(--border)] py-5">
                  <span className="font-mono text-[10px] text-[var(--accent)]">{item.id}</span>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--muted)]">{item.category} · {item.year}</p>
                    <p className="mt-2 text-base font-medium text-[var(--text)]">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <h2 className="mt-5 max-w-md font-display text-4xl tracking-[-0.035em] text-[var(--text)] sm:text-5xl">Learning becomes clearer when it is written down.</h2>
            </div>
            <div className="space-y-10">
              {reflections.slice(0, 2).map((item) => (
                <article key={item.marker} className="grid gap-4 border-t border-[var(--border)] pt-5 sm:grid-cols-[60px_1fr]">
                  <span className="font-mono text-[10px] text-[var(--accent)]">{item.marker}</span>
                  <div>
                    <h3 className="font-display text-2xl text-[var(--text)]">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.text}</p>
                  </div>
                </article>
              ))}
              <ArrowLink to="/page-3">Enter reflection space</ArrowLink>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
